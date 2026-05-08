# AWS ANS-C01 (Advanced Networking Specialty) 시험 치트시트

---

## 1. Elastic Load Balancing (ELB) — ALB vs NLB vs GLB

### ALB (Application Load Balancer) — Layer 7

| 항목 | 내용 |
|------|------|
| **계층** | OSI 7계층 (HTTP/HTTPS/gRPC) |
| **라우팅** | URL 경로, 호스트 헤더, HTTP 헤더, 쿼리스트링, 소스 IP 기반 라우팅 |
| **타겟** | EC2, ECS/Fargate, Lambda, IP 주소 |
| **특징** | 고정 응답, 리다이렉트, 인증(Cognito/OIDC) 내장 |
| **SSL** | SSL 종료(Termination) 지원, SNI로 다중 인증서 |
| **IP** | 고정 IP 없음 → DNS 이름으로 접근 (Global Accelerator 붙이면 고정 IP 가능) |
| **스티키 세션** | 쿠키 기반 지원 |
| **WebSocket** | 지원 |

**언제 쓰나?**
- 마이크로서비스 아키텍처에서 경로별 라우팅 (`/api` → 서비스A, `/web` → 서비스B)
- 컨테이너(ECS/EKS) 환경
- Lambda 함수를 HTTP 엔드포인트로 노출
- HTTP 헤더/쿠키 기반 고급 라우팅이 필요할 때
- 인증(Cognito) 통합이 필요할 때

---

### NLB (Network Load Balancer) — Layer 4

| 항목 | 내용 |
|------|------|
| **계층** | OSI 4계층 (TCP/UDP/TLS) |
| **성능** | 초당 수백만 요청, 초저지연 (~100μs vs ALB ~400ms) |
| **IP** | AZ당 **고정 IP** 1개 (Elastic IP 연결 가능) |
| **타겟** | EC2, IP 주소, ALB (NLB → ALB 체이닝 가능) |
| **소스 IP 보존** | 클라이언트 원본 IP 보존 (ALB는 X-Forwarded-For 헤더 사용) |
| **Cross-Zone** | 기본 비활성화 (ALB는 기본 활성화) |
| **PrivateLink** | VPC Endpoint Service 생성 가능 (NLB만 가능!) |
| **헬스체크** | TCP, HTTP, HTTPS |

**언제 쓰나?**
- **고정 IP**가 필요할 때 (방화벽 화이트리스트 등)
- **초저지연 / 초고성능**이 필요할 때 (게임, IoT, 금융)
- TCP/UDP 프로토콜 로드밸런싱 (HTTP가 아닌 경우)
- **AWS PrivateLink** (VPC Endpoint Service) 구성 시 → 반드시 NLB
- 클라이언트 소스 IP를 그대로 보존해야 할 때

---

### GLB (Gateway Load Balancer) — Layer 3

| 항목 | 내용 |
|------|------|
| **계층** | OSI 3계층 (IP 패킷) |
| **프로토콜** | GENEVE 프로토콜 (포트 6081) |
| **용도** | 트래픽을 3rd-party 가상 어플라이언스로 전달 |
| **타겟** | EC2 인스턴스 (방화벽, IDS/IPS, DPI 어플라이언스) |
| **동작** | Gateway Load Balancer Endpoint(GWLBe)를 통해 투명하게 트래픽 인라인 검사 |

**언제 쓰나?**
- **3rd-party 보안 어플라이언스** (Palo Alto, Fortinet, Check Point 등) 인라인 배치
- 모든 트래픽을 **방화벽/IDS/IPS**를 거치게 할 때
- **트래픽 미러링 및 검사** 아키텍처
- 문제에 "GENEVE", "어플라이언스", "인라인 검사" 키워드가 나오면 → GLB

---

### ⚡ 시험 핵심 비교표

| 기준 | ALB | NLB | GLB |
|------|-----|-----|-----|
| 계층 | L7 | L4 | L3 |
| 고정 IP | ❌ | ✅ | ❌ |
| PrivateLink | ❌ | ✅ | ❌ |
| 소스 IP 보존 | X-Forwarded-For | 직접 보존 | 직접 보존 |
| SSL 종료 | ✅ | ✅ (TLS) | ❌ |
| 경로 기반 라우팅 | ✅ | ❌ | ❌ |
| Cross-Zone 기본값 | 활성화 | 비활성화 | 비활성화 |
| 프로토콜 | HTTP/HTTPS/gRPC | TCP/UDP/TLS | GENEVE |

---

## 2. VPC 핵심 개념

### CIDR & 서브넷
- VPC CIDR: /16 ~ /28 (최대 5개 CIDR 블록 추가 가능)
- 서브넷은 **1개 AZ**에만 존재
- 서브넷당 **5개 IP 예약** (첫 4개 + 마지막 1개)
  - .0 네트워크, .1 VPC 라우터, .2 DNS, .3 예약, .255 브로드캐스트

### 라우팅
- **가장 구체적인 경로(Longest Prefix Match)** 우선
- 각 서브넷은 **1개의 라우트 테이블**만 연결
- 0.0.0.0/0 → IGW (퍼블릭), NAT GW (프라이빗)

### Internet Gateway (IGW)
- VPC당 1개, 수평 확장, HA 자동
- 퍼블릭 서브넷의 인스턴스가 인터넷 접근하려면: IGW + 퍼블릭 IP + 라우트 테이블

### NAT Gateway vs NAT Instance
| 항목 | NAT Gateway | NAT Instance |
|------|-------------|--------------|
| 관리 | AWS 관리형 | 사용자 관리 |
| HA | AZ 내 자동 (Multi-AZ는 각 AZ에 배치) | 직접 구성 |
| 대역폭 | 최대 100Gbps | 인스턴스 타입에 의존 |
| SG | ❌ 연결 불가 | ✅ 연결 가능 |
| Bastion | ❌ 불가 | ✅ 가능 |
| 포트포워딩 | ❌ | ✅ |

---

## 3. VPC Peering & Transit Gateway

### VPC Peering
- **1:1 연결**, 비전이적(Non-transitive) → A↔B, B↔C 연결해도 A↔C 안됨
- **리전 간(Inter-Region)** 가능
- CIDR 겹치면 불가
- 양쪽 라우트 테이블에 경로 추가 필요

### Transit Gateway (TGW)
- **허브-스포크 모델** → 수천 개 VPC/VPN/DX 연결
- **전이적 라우팅** 지원
- 리전 간 TGW Peering 가능
- **라우트 테이블 분리**로 네트워크 세그먼테이션
- **ECMP** (Equal-Cost Multi-Path) → VPN 대역폭 확장
- **멀티캐스트** 지원
- RAM(Resource Access Manager)으로 교차 계정 공유

**시험 팁:** "수백 개 VPC 연결" → Transit Gateway / "2개 VPC 연결" → VPC Peering

---

## 4. AWS Direct Connect (DX)

### 기본 개념
- 온프레미스 ↔ AWS 전용 물리 연결 (1Gbps, 10Gbps, 100Gbps)
- **프로비저닝에 수주~수개월** 소요
- 암호화 안됨 → DX + Site-to-Site VPN으로 암호화 가능

### Virtual Interface (VIF)
| VIF 종류 | 용도 | 연결 대상 |
|----------|------|-----------|
| **Public VIF** | AWS 퍼블릭 서비스 (S3, DynamoDB 등) | 퍼블릭 엔드포인트 |
| **Private VIF** | VPC 내 리소스 | VGW 또는 DXGW |
| **Transit VIF** | Transit Gateway 연결 | DXGW → TGW |

### Direct Connect Gateway (DXGW)
- 1개 DX 연결로 **여러 리전의 VPC** 접근
- Private VIF → DXGW → 여러 VGW (최대 10개)
- Transit VIF → DXGW → TGW

### 고가용성 구성
| 레벨 | 구성 |
|------|------|
| **Development** | DX 1개 + VPN 백업 |
| **Critical** | DX 2개 (서로 다른 DX Location) |
| **Maximum** | DX 2개 × 2 Location (4개 연결) |

### LAG (Link Aggregation Group)
- 같은 DX Location의 여러 연결을 논리적으로 묶음
- 같은 대역폭의 연결만 묶을 수 있음
- 최대 4개 연결

---

## 5. Site-to-Site VPN

- IPSec 암호화, 인터넷 경유
- **VGW** (Virtual Private Gateway) 또는 **TGW**에 연결
- **2개 터널** 자동 생성 (HA)
- **CloudHub**: 여러 VPN을 VGW에 연결 → 사이트 간 통신 (허브-스포크)
- **Accelerated VPN**: Global Accelerator 사용 → AWS 백본 경유로 성능 향상

### VPN vs DX 비교
| 항목 | VPN | DX |
|------|-----|-----|
| 설정 시간 | 분 단위 | 수주~수개월 |
| 경로 | 인터넷 | 전용선 |
| 암호화 | IPSec | 기본 없음 |
| 대역폭 | ~1.25Gbps | 최대 100Gbps |
| 비용 | 저렴 | 비쌈 |
| 안정성 | 인터넷 의존 | 일관된 지연시간 |

---

## 6. Route 53

### 라우팅 정책
| 정책 | 설명 | 사용 사례 |
|------|------|-----------|
| **Simple** | 단일 리소스 | 기본 |
| **Weighted** | 가중치 비율 분배 | 블루/그린 배포, A/B 테스트 |
| **Latency** | 최저 지연시간 리전 | 글로벌 앱 |
| **Failover** | Primary/Secondary | DR (재해복구) |
| **Geolocation** | 사용자 위치 기반 | 콘텐츠 지역화, 규정 준수 |
| **Geoproximity** | 지리적 근접성 + bias | 트래픽 이동 조절 |
| **Multi-Value** | 여러 IP + 헬스체크 | 간단한 LB (ELB 대체 아님) |
| **IP-based** | 클라이언트 IP CIDR 기반 | ISP별 라우팅 |

### 핵심 포인트
- **Alias 레코드**: AWS 리소스(ELB, CF, S3 등)를 Zone Apex에 매핑 가능 (CNAME은 불가)
- **헬스체크**: HTTP/HTTPS/TCP, 30초 간격(10초 Fast), 3회 실패 시 Unhealthy
- **DNSSEC**: Route 53에서 서명 지원 (DNS 스푸핑 방지)
- **Resolver**: 하이브리드 DNS → Inbound/Outbound Endpoint

### Route 53 Resolver
- **Inbound Endpoint**: 온프레미스 → AWS DNS 쿼리
- **Outbound Endpoint**: AWS → 온프레미스 DNS 쿼리 (Forwarding Rules)
- **Resolver Rules**: RAM으로 교차 계정 공유 가능

---

## 7. CloudFront

### 핵심 개념
- 글로벌 CDN, 216+ Edge Location
- **오리진**: S3, ALB, EC2, HTTP 서버
- **OAC** (Origin Access Control): S3 오리진 접근 제한 (OAI 후속)
- **캐시 정책 & 오리진 요청 정책** 분리

### 주요 기능
- **Lambda@Edge**: 4개 이벤트 (Viewer Request/Response, Origin Request/Response)
  - us-east-1에서만 배포, Node.js/Python
- **CloudFront Functions**: Viewer Request/Response만, 경량 (1ms 미만)
  - 헤더 조작, URL 리다이렉트, JWT 검증
- **Field-Level Encryption**: 특정 필드를 엣지에서 암호화
- **Geo Restriction**: 국가별 허용/차단 (화이트리스트/블랙리스트)
- **Signed URL / Signed Cookie**: 프라이빗 콘텐츠 접근 제어

### S3 오리진 vs 커스텀 오리진
| 항목 | S3 오리진 | 커스텀 오리진 (ALB/EC2) |
|------|-----------|------------------------|
| 접근 제어 | OAC | 커스텀 헤더 + ALB 규칙 |
| 프로토콜 | HTTPS | HTTP/HTTPS |
| SG 설정 | 불필요 | CloudFront IP 허용 필요 |

---

## 8. VPC Endpoint (PrivateLink)

### Gateway Endpoint
- **S3, DynamoDB만** 지원
- 라우트 테이블에 경로 추가
- **무료**
- VPC 외부에서 접근 불가 (VPN/DX/Peering 통해 불가)

### Interface Endpoint (PrivateLink)
- **대부분의 AWS 서비스** 지원
- ENI + 프라이빗 IP 생성
- SG 연결 가능
- **유료** (시간 + 데이터)
- VPN/DX/Peering을 통해 접근 **가능**
- **프라이빗 DNS** 활성화 시 기존 서비스 DNS가 프라이빗 IP로 해석

### VPC Endpoint Service (PrivateLink)
- 자체 서비스를 다른 VPC에 노출
- **반드시 NLB 필요** (또는 GWLB)
- 서비스 제공자가 연결 요청 수락/거부

**시험 팁:** "프라이빗하게 AWS 서비스 접근" → VPC Endpoint / "S3 프라이빗 접근" → Gateway Endpoint (무료) 또는 Interface Endpoint

---

## 9. Network Security

### Security Group (SG) vs NACL
| 항목 | Security Group | NACL |
|------|---------------|------|
| 레벨 | 인스턴스 (ENI) | 서브넷 |
| 상태 | **Stateful** | **Stateless** |
| 규칙 | 허용만 | 허용 + 거부 |
| 평가 | 모든 규칙 평가 | 번호 순서대로 |
| 기본 | 인바운드 거부, 아웃바운드 허용 | 모두 허용 |

### AWS Network Firewall
- VPC 레벨 방화벽 (L3~L7)
- **Suricata** 규칙 엔진
- 도메인 필터링, IPS/IDS
- **Firewall Manager**로 중앙 관리
- Gateway Load Balancer 기반

### AWS WAF
- CloudFront, ALB, API Gateway, AppSync에 연결
- L7 보호 (SQL Injection, XSS 등)
- Rate-based 규칙으로 DDoS 완화
- **Managed Rules** (AWS, Marketplace)

### AWS Shield
- **Standard**: 무료, L3/L4 DDoS 보호
- **Advanced**: 유료, 24/7 DRT 지원, 비용 보호, L7 보호

### DNS Firewall
- Route 53 Resolver DNS Firewall
- 아웃바운드 DNS 쿼리 필터링
- 악성 도메인 차단

---

## 10. VPC Flow Logs

- VPC / 서브넷 / ENI 레벨에서 캡처
- **S3** 또는 **CloudWatch Logs**로 전송
- 캡처 안되는 것: DNS(Route 53 Resolver 쿼리 로그 별도), DHCP, 메타데이터(169.254.169.254), NTP
- **커스텀 포맷** 지원 (v2~v5 필드)
- **Traffic Mirroring**: 실제 패킷 캡처 (Flow Logs는 메타데이터만)

---

## 11. 하이브리드 네트워킹 아키텍처 패턴

### 패턴 1: 단순 하이브리드
```
온프레미스 → Site-to-Site VPN → VGW → VPC
```

### 패턴 2: DX + VPN 백업
```
온프레미스 → DX (Primary) → VGW → VPC
온프레미스 → VPN (Backup) → VGW → VPC
```
- DX 장애 시 VPN으로 자동 페일오버
- BGP 우선순위: DX > VPN

### 패턴 3: 대규모 하이브리드
```
온프레미스 → DX → DXGW → TGW → 수백 VPC
온프레미스 → VPN (ECMP) → TGW → 수백 VPC
```

### 패턴 4: 공유 서비스 VPC
```
TGW 중심 허브-스포크
- Shared Services VPC (DNS, AD, 모니터링)
- Production VPC
- Development VPC
- 라우트 테이블 분리로 격리
```

---

## 12. Global Accelerator vs CloudFront

| 항목 | Global Accelerator | CloudFront |
|------|-------------------|------------|
| 계층 | L4 (TCP/UDP) | L7 (HTTP/HTTPS) |
| IP | **고정 Anycast IP 2개** | DNS 기반 |
| 캐싱 | ❌ | ✅ |
| 용도 | 비HTTP (게임, IoT, VoIP) | 웹 콘텐츠 캐싱 |
| 엔드포인트 | ALB, NLB, EC2, EIP | S3, ALB, EC2, HTTP |
| 페일오버 | 즉시 (IP 변경 없음) | DNS TTL 의존 |

**시험 팁:** "고정 IP + 글로벌 성능" → Global Accelerator / "캐싱 + 웹 콘텐츠" → CloudFront

---

## 13. ENI, ENA, EFA

| 항목 | ENI | ENA | EFA |
|------|-----|-----|-----|
| 이름 | Elastic Network Interface | Enhanced Networking Adapter | Elastic Fabric Adapter |
| 속도 | 기본 | 최대 100Gbps | 최대 100Gbps |
| 용도 | 기본 네트워킹 | 고성능 네트워킹 | HPC, ML (MPI/NCCL) |
| 특징 | 다중 ENI, 보조 IP | SR-IOV, 저지연 | OS-bypass, 커널 우회 |

---

## 14. IPv6 in AWS

- VPC는 **듀얼스택** (IPv4 + IPv6)
- IPv6는 모두 **퍼블릭** (프라이빗 IPv6 없음, 단 ULA 제외)
- **Egress-Only IGW**: IPv6 전용 NAT Gateway 역할 (아웃바운드만 허용)
- 서브넷에 IPv6 CIDR 할당 필요
- ALB, NLB 모두 IPv6 지원

---

## 15. 네트워크 비용 최적화

| 트래픽 | 비용 |
|--------|------|
| 같은 AZ 내 (프라이빗 IP) | **무료** |
| 같은 리전, 다른 AZ | 유료 |
| 다른 리전 | 더 비쌈 |
| 인터넷 인바운드 | 무료 |
| 인터넷 아웃바운드 | 유료 |
| VPC Endpoint 사용 | NAT GW 데이터 처리 비용 절약 |
| S3 Gateway Endpoint | **무료** |

---

## 16. 시험에 자주 나오는 시나리오 & 정답 패턴

| 시나리오 | 정답 |
|----------|------|
| 수백 VPC 연결 | **Transit Gateway** |
| 온프레미스 ↔ AWS 안정적 연결 | **Direct Connect** |
| DX 암호화 | **DX + Site-to-Site VPN** |
| 프라이빗 S3 접근 | **S3 Gateway Endpoint** |
| 다른 VPC에 서비스 노출 | **PrivateLink (NLB + Endpoint Service)** |
| 고정 IP 로드밸런서 | **NLB** |
| 3rd-party 방화벽 인라인 | **Gateway Load Balancer** |
| DNS 하이브리드 | **Route 53 Resolver (Inbound/Outbound)** |
| 글로벌 고정 IP + 성능 | **Global Accelerator** |
| VPN 대역폭 확장 | **TGW + ECMP** |
| Zone Apex에 ALB 매핑 | **Route 53 Alias 레코드** |
| 특정 IP 차단 | **NACL (거부 규칙)** |
| 웹 앱 L7 보호 | **WAF + ALB** |
| DDoS 보호 + 비용 보호 | **Shield Advanced** |
| 패킷 캡처 | **Traffic Mirroring** |
| 메타데이터 로깅 | **VPC Flow Logs** |
| HPC 워크로드 네트워킹 | **EFA** |
| 아웃바운드 DNS 필터링 | **Route 53 DNS Firewall** |
| 멀티캐스트 | **Transit Gateway** |
| DX 여러 리전 접근 | **Direct Connect Gateway** |

---

## 17. 🚨 시험 함정(Trap) 모음 — 헷갈리기 쉬운 포인트

### VPC & 서브넷 함정

| 함정 | 진실 |
|------|------|
| "서브넷이 여러 AZ에 걸칠 수 있다" | ❌ 서브넷은 **반드시 1개 AZ**에만 존재 |
| "VPC CIDR은 생성 후 변경 불가" | ❌ **보조 CIDR 추가 가능** (최대 5개), 단 기존 CIDR 삭제는 조건부 |
| "퍼블릭 서브넷에 넣으면 인터넷 접근 가능" | ❌ **퍼블릭 IP + IGW 라우트 + 라우트 테이블** 3가지 모두 필요 |
| "NAT Gateway 하나면 Multi-AZ HA" | ❌ NAT GW는 **단일 AZ** → 각 AZ에 하나씩 배치해야 HA |
| "NACL은 Stateful이다" | ❌ NACL은 **Stateless** → 인바운드 허용해도 아웃바운드 별도 허용 필요 |
| "SG에서 특정 IP를 거부할 수 있다" | ❌ SG는 **허용만** 가능 → IP 차단은 **NACL** 사용 |

### Load Balancer 함정

| 함정 | 진실 |
|------|------|
| "ALB에 고정 IP를 붙일 수 있다" | ❌ ALB는 고정 IP 불가 → **NLB → ALB 체이닝** 또는 **Global Accelerator** |
| "NLB도 경로 기반 라우팅 가능" | ❌ NLB는 L4 → 경로 라우팅은 **ALB만** 가능 |
| "PrivateLink에 ALB를 쓸 수 있다" | ❌ Endpoint Service는 **NLB 또는 GWLB만** 가능 |
| "NLB Cross-Zone이 기본 활성화" | ❌ NLB는 **기본 비활성화** (ALB만 기본 활성화) |
| "GLB는 일반 로드밸런싱에 쓴다" | ❌ GLB는 **보안 어플라이언스 인라인 검사 전용** |
| "CLB(Classic)를 새로 만들 수 있다" | ⚠️ 가능은 하지만 시험에서는 **ALB/NLB 권장** 답이 정답 |

### Direct Connect 함정

| 함정 | 진실 |
|------|------|
| "DX는 기본 암호화된다" | ❌ DX는 **암호화 없음** → 암호화 필요 시 **DX + VPN** 또는 **MACsec** |
| "DX 하나로 여러 리전 접근 가능" | ❌ 단일 DX는 해당 리전만 → **Direct Connect Gateway** 필요 |
| "DX 장애 시 자동 VPN 페일오버" | ⚠️ 자동은 아님 → **BGP 라우팅 설정** 필요 (DX 우선순위 높게) |
| "DX를 빨리 설정할 수 있다" | ❌ **수주~수개월** 소요 → 급하면 VPN 먼저 설정 |
| "Public VIF로 VPC 리소스 접근" | ❌ Public VIF는 **퍼블릭 서비스만** → VPC는 **Private VIF** |
| "Transit VIF를 VGW에 연결" | ❌ Transit VIF는 **TGW에만** 연결 / Private VIF가 VGW 연결 |
| "DX Location = AWS 리전" | ❌ DX Location은 **별도 시설** (코로케이션 데이터센터) |

### VPN 함정

| 함정 | 진실 |
|------|------|
| "VPN 터널 1개만 생성된다" | ❌ Site-to-Site VPN은 **항상 2개 터널** (HA) |
| "VPN 대역폭은 무제한" | ❌ 터널당 **최대 1.25Gbps** → 더 필요하면 **TGW + ECMP** |
| "VPN은 AWS 백본을 탄다" | ❌ 기본 VPN은 **인터넷 경유** → AWS 백본은 **Accelerated VPN** |
| "VPN CloudHub는 별도 서비스" | ❌ CloudHub는 **VGW에 여러 VPN 연결**하는 아키텍처 패턴일 뿐 |

### VPC Endpoint 함정

| 함정 | 진실 |
|------|------|
| "S3는 Interface Endpoint만 지원" | ❌ S3는 **Gateway + Interface 둘 다** 지원 (Gateway가 무료) |
| "Gateway Endpoint를 VPN/DX로 접근 가능" | ❌ Gateway Endpoint는 **VPC 내부에서만** 접근 → 온프레미스에서는 **Interface Endpoint** 사용 |
| "VPC Endpoint는 리전 간 작동" | ❌ **같은 리전 내에서만** 작동 |
| "Interface Endpoint에 SG 불필요" | ❌ Interface Endpoint는 **ENI 기반** → SG 연결 필요 |
| "Gateway Endpoint는 유료" | ❌ Gateway Endpoint는 **무료** (Interface는 유료) |

### Route 53 함정

| 함정 | 진실 |
|------|------|
| "CNAME을 Zone Apex에 쓸 수 있다" | ❌ Zone Apex(example.com)에는 **Alias만** 가능, CNAME 불가 |
| "Alias는 EC2 IP에 매핑 가능" | ❌ Alias 타겟은 **AWS 리소스만** (ELB, CF, S3, API GW 등) |
| "Geolocation = Latency" | ❌ Geolocation은 **사용자 위치** 기반 / Latency는 **실제 지연시간** 기반 |
| "Multi-Value는 ELB 대체" | ❌ Multi-Value는 **클라이언트 측 간단한 분산**일 뿐, ELB 수준 LB 아님 |
| "Resolver Endpoint 없이 하이브리드 DNS 가능" | ❌ 온프레미스 ↔ AWS DNS 연동은 **Resolver Inbound/Outbound Endpoint** 필수 |
| "Geoproximity는 Traffic Flow 없이 사용 가능" | ❌ Geoproximity + bias 조절은 **Traffic Flow 정책** 필요 |

### CloudFront 함정

| 함정 | 진실 |
|------|------|
| "Lambda@Edge = CloudFront Functions" | ❌ Lambda@Edge는 **4개 이벤트, 무거운 로직** / CF Functions는 **Viewer만, 경량** |
| "OAI를 계속 쓰면 된다" | ⚠️ OAI는 레거시 → **OAC** (Origin Access Control) 권장 |
| "CloudFront는 S3만 오리진 가능" | ❌ ALB, EC2, HTTP 서버, MediaStore 등 **커스텀 오리진** 가능 |
| "S3 오리진에 SG 설정 필요" | ❌ S3는 SG 없음 → **버킷 정책 + OAC**로 제어 |
| "Signed URL과 S3 Pre-signed URL은 같다" | ❌ CF Signed URL은 **CloudFront 키페어** 사용 / S3 Pre-signed URL은 **IAM 자격증명** 사용 |

### Transit Gateway 함정

| 함정 | 진실 |
|------|------|
| "TGW는 같은 계정에서만 사용" | ❌ **RAM**으로 교차 계정 공유 가능 |
| "TGW Peering은 전이적" | ❌ TGW 간 Peering도 **비전이적** (A↔B, B↔C → A↔C 안됨) |
| "TGW 라우트 테이블은 1개" | ❌ **여러 라우트 테이블**로 네트워크 세그먼테이션 가능 |
| "VPC Peering이 TGW보다 항상 좋다" | ❌ 2~3개 VPC는 Peering, **대규모는 TGW**가 관리 효율적 |
| "ECMP는 DX에서 작동" | ❌ ECMP는 **VPN에서만** 작동 (DX는 LAG 사용) |

### 보안 함정

| 함정 | 진실 |
|------|------|
| "WAF를 NLB에 붙일 수 있다" | ❌ WAF는 **ALB, CloudFront, API Gateway, AppSync**에만 연결 |
| "Shield Standard는 유료" | ❌ Shield Standard는 **무료**, 자동 적용 |
| "Network Firewall = WAF" | ❌ Network Firewall은 **VPC 레벨 L3~L7** / WAF는 **L7 웹 보호** |
| "SG는 서브넷에 적용" | ❌ SG는 **ENI(인스턴스) 레벨** / 서브넷은 **NACL** |
| "Flow Logs로 패킷 내용 확인 가능" | ❌ Flow Logs는 **메타데이터만** → 패킷 내용은 **Traffic Mirroring** |
| "Flow Logs에 DNS 쿼리 기록됨" | ❌ DNS 트래픽은 Flow Logs에 **미포함** → **Route 53 Query Logging** 별도 |

### 비용 함정

| 함정 | 진실 |
|------|------|
| "같은 AZ 내 통신은 항상 무료" | ⚠️ **프라이빗 IP** 사용 시만 무료 → 퍼블릭 IP 사용하면 과금 |
| "NAT Gateway는 시간 요금만" | ❌ 시간 요금 **+ 데이터 처리 요금** 둘 다 발생 |
| "VPC Peering 데이터 전송 무료" | ❌ 같은 AZ면 무료, **다른 AZ/리전은 유료** |
| "Interface Endpoint가 NAT GW보다 비싸다" | ⚠️ 트래픽 많으면 **Interface Endpoint가 더 저렴**할 수 있음 |
| "DX는 데이터 전송 무료" | ❌ DX도 **아웃바운드 데이터 전송 요금** 발생 (인터넷보다는 저렴) |

---

## 18. 🎯 시험 직전 최종 키워드 매핑

문제에서 이 키워드가 보이면 → 바로 이 답을 떠올려라:

| 키워드 | → 정답 |
|--------|--------|
| "고정 IP" + 로드밸런서 | → **NLB** |
| "GENEVE" / "어플라이언스" | → **Gateway LB** |
| "PrivateLink" / "서비스 노출" | → **NLB + Endpoint Service** |
| "수백 VPC" / "허브-스포크" | → **Transit Gateway** |
| "전용선" / "일관된 지연시간" | → **Direct Connect** |
| "DX 암호화" | → **DX + Site-to-Site VPN** 또는 **MACsec** |
| "DX 여러 리전" | → **Direct Connect Gateway** |
| "VPN 대역폭 확장" | → **TGW + ECMP** |
| "Zone Apex" | → **Alias 레코드** |
| "온프레미스 DNS 연동" | → **Route 53 Resolver Endpoint** |
| "IP 차단" / "거부 규칙" | → **NACL** |
| "L7 웹 보호" | → **WAF** |
| "DDoS + 비용 보호 + DRT" | → **Shield Advanced** |
| "패킷 캡처" / "패킷 내용" | → **Traffic Mirroring** |
| "HPC" / "MPI" | → **EFA** |
| "글로벌 고정 IP" / "Anycast" | → **Global Accelerator** |
| "캐싱" + CDN | → **CloudFront** |
| "S3 프라이빗 접근" + 무료 | → **S3 Gateway Endpoint** |
| "온프레미스에서 S3 프라이빗" | → **Interface Endpoint** (Gateway는 VPC 내부만) |
| "멀티캐스트" | → **Transit Gateway** |
| "아웃바운드 DNS 필터링" | → **Route 53 DNS Firewall** |
| "IPv6 아웃바운드만" | → **Egress-Only IGW** |
| "Suricata" / "VPC 방화벽" | → **AWS Network Firewall** |
| "교차 계정 공유" | → **RAM (Resource Access Manager)** |
| "BGP" + 라우팅 우선순위 | → **DX > Static VPN > BGP VPN** |

---

**시험 행운을 빕니다! 🍀**
