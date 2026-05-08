const ALL_QUESTIONS = [
    {
        "num": 1,
        "question": "A company is planning to create a service that requires encryption in transit. The traffic must not be decrypted between the client and the backend\nof the service. The company will implement the service by using the gRPC protocol over TCP port 443. The service will scale up to thousands of\nsimultaneous connections. The backend of the service will be hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) duster with the\nKubernetes Cluster Autoscaler and the Horizontal Pod Autoscaler configured. The company needs to use mutual TLS for two-way authentication\nbetween the client and the backend.\nWhich solution will meet these requirements?",
        "options": [
            "A. Install the AWS Load Balancer Controller for Kubernetes. Using that controller, configure a Network Load Balancer with a TCP listener on\nport 443 to forward traffic to the IP addresses of the backend service Pods.",
            "B. Install the AWS Load Balancer Controller for Kubernetes. Using that controller, configure an Application Load Balancer with an HTTPS\nlistener on port 443 to forward traffic to the IP addresses of the backend service Pods.",
            "C. Create a target group. Add the EKS managed node group's Auto Scaling group as a target Create an Application Load Balancer with an\nHTTPS listener on port 443 to forward traffic to the target group.",
            "D. Create a target group. Add the EKS managed node group’s Auto Scaling group as a target. Create a Network Load Balancer with a TLS\nlistener on port 443 to forward traffic to the target group."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 클라이언트와 백엔드 간 데이터가 중간에서 해독되면 안 되고, 상호 TLS(mTLS)가 필요합니다.\n\nA가 맞는 이유:\nNLB의 TCP 리스너는 TLS를 종료하지 않고 트래픽을 그대로 백엔드 Pod로 전달(TCP 패스스루)합니다. 따라서 클라이언트와 백엔드 간 mTLS가 유지됩니다. AWS Load Balancer Controller를 사용하면 EKS Pod IP로 직접 라우팅되어 gRPC(HTTP/2 기반)도 정상 동작합니다.\n\n오답 분석:\nB) ALB HTTPS 리스너는 L7에서 TLS를 종료하므로 중간에 복호화 발생. mTLS 불가\nC) ALB + Auto Scaling 그룹 대상은 B와 동일하게 TLS 종료 문제 + Pod 레벨이 아닌 노드 레벨 라우팅\nD) NLB TLS 리스너는 NLB에서 TLS를 종료함. TCP 리스너와 달리 패스스루가 아님",
        "question_ko": "회사에서는 전송 중 암호화가 필요한 서비스를 만들 계획입니다. 클라이언트와 백엔드 사이에서 데이터가 해독되어서는 안 됩니다. 회사는 TCP 포트 443에서 gRPC 프로토콜을 사용하여 서비스를 구현할 것입니다. 서비스는 동시 연결 수천 개까지 확장될 것입니다. 서비스의 백엔드는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에 호스팅되며, Kubernetes Cluster Autoscaler와 Horizontal Pod Autoscaler가 구성됩니다. 회사는 클라이언트와 백엔드 간 상호 TLS 인증을 사용해야 합니다.",
        "options_ko": [
            "A. Kubernetes용 AWS Load Balancer Controller를 설치합니다. 이 컨트롤러를 사용하여 TCP 리스너가 있는 Network Load Balancer를 구성하여 백엔드 서비스 Pod의 IP 주소로 트래픽을 전달합니다.",
            "B. Kubernetes용 AWS Load Balancer Controller를 설치합니다. 이 컨트롤러를 사용하여 HTTPS 리스너가 있는 Application Load Balancer를 구성하여 백엔드 서비스 Pod의 IP 주소로 트래픽을 전달합니다.",
            "C. 대상 그룹을 만듭니다. EKS 관리형 노드 그룹의 Auto Scaling 그룹을 대상으로 추가합니다. HTTPS 리스너가 있는 Application Load Balancer를 만들어 대상 그룹으로 트래픽을 전달합니다.",
            "D. 대상 그룹을 만듭니다. EKS 관리형 노드 그룹의 Auto Scaling 그룹을 대상으로 추가합니다. TLS 리스너가 있는 Network Load Balancer를 만들어 대상 그룹으로 트래픽을 전달합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 클라이언트와 백엔드 간 데이터가 중간에서 해독되면 안 되고, 상호 TLS(mTLS)가 필요합니다.\n\nA가 맞는 이유:\nNLB의 TCP 리스너는 TLS를 종료하지 않고 트래픽을 그대로 백엔드 Pod로 전달(TCP 패스스루)합니다. 따라서 클라이언트와 백엔드 간 mTLS가 유지됩니다. AWS Load Balancer Controller를 사용하면 EKS Pod IP로 직접 라우팅되어 gRPC(HTTP/2 기반)도 정상 동작합니다.\n\n오답 분석:\nB) ALB HTTPS 리스너는 L7에서 TLS를 종료하므로 중간에 복호화 발생. mTLS 불가\nC) ALB + Auto Scaling 그룹 대상은 B와 동일하게 TLS 종료 문제 + Pod 레벨이 아닌 노드 레벨 라우팅\nD) NLB TLS 리스너는 NLB에서 TLS를 종료함. TCP 리스너와 달리 패스스루가 아님"
    },
    {
        "num": 2,
        "question": "A company is deploying a new application in the AWS Cloud. The company wants a highly available web server that will sit behind an Elastic Load\nBalancer. The load balancer will route requests to multiple target groups based on the URL in the request. All traffic must use HTTPS. TLS\nprocessing must be offloaded to the load balancer. The web server must know the user’s IP address so that the company can keep accurate logs\nfor security purposes.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy an Application Load Balancer with an HTTPS listener. Use path-based routing rules to forward the traffic to the correct target group.\nInclude the X-Forwarded-For request header with traffic to the targets.",
            "B. Deploy an Application Load Balancer with an HTTPS listener for each domain. Use host-based routing rules to forward the traffic to the\ncorrect target group for each domain. Include the X-Forwarded-For request header with traffic to the targets.",
            "C. Deploy a Network Load Balancer with a TLS listener. Use path-based routing rules to forward the traffic to the correct target group.\nConfigure client IP address preservation for traffic to the targets.",
            "D. Deploy a Network Load Balancer with a TLS listener for each domain. Use host-based routing rules to forward the traffic to the correct\ntarget group for each domain. Configure client IP address preservation for traffic to the targets.\nReveal All"
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: URL 기반 라우팅 + HTTPS + TLS 오프로드 + 클라이언트 IP 확인이 필요합니다.\n\nA가 맞는 이유:\nALB는 L7 로드밸런서로 경로 기반(path-based) 라우팅을 지원합니다. HTTPS 리스너로 TLS를 오프로드하고, X-Forwarded-For 헤더를 통해 원본 클라이언트 IP를 백엔드에 전달합니다.\n\n오답 분석:\nB) 호스트 기반 라우팅은 URL 경로가 아닌 도메인 기반. 요구사항은 URL 경로 기반\nC) NLB는 L4 로드밸런서로 경로 기반 라우팅 불가\nD) NLB는 호스트 기반 라우팅도 불가",
        "question_ko": "회사에서는 AWS 클라우드에 새 애플리케이션을 배포하려고 합니다. 회사는 Elastic Load Balancer 뒤에 있는 고가용성 웹 서버를 원합니다. 로드 밸런서는 요청의 URL에 따라 여러 대상 그룹으로 트래픽을 라우팅할 것입니다. 모든 트래픽은 HTTPS를 사용해야 합니다. TLS 처리는 로드 밸런서에서 오프로드되어야 합니다. 웹 서버는 사용자의 IP 주소를 알아야 하므로, 회사는 보안 목적으로 정확한 로그를 유지할 수 있습니다.",
        "options_ko": [
            "A. HTTPS 리스너가 있는 Application Load Balancer를 배포합니다. 경로 기반 라우팅 규칙을 사용하여 트래픽을 올바른 대상 그룹으로 전달합니다. X-Forwarded-For 요청 헤더를 대상으로 포함합니다.",
            "B. 각 도메인에 대한 HTTPS 리스너가 있는 Application Load Balancer를 배포합니다. 호스트 기반 라우팅 규칙을 사용하여 각 도메인의 올바른 대상 그룹으로 트래픽을 전달합니다. X-Forwarded-For 요청 헤더를 대상으로 포함합니다.",
            "C. TLS 리스너가 있는 Network Load Balancer를 배포합니다. 경로 기반 라우팅 규칙을 사용하여 트래픽을 올바른 대상 그룹으로 전달합니다. 대상으로의 트래픽에 대해 클라이언트 IP 주소 보존을 구성합니다.",
            "D. 각 도메인에 대한 TLS 리스너가 있는 Network Load Balancer를 배포합니다. 호스트 기반 라우팅 규칙을 사용하여 각 도메인의 올바른 대상 그룹으로 트래픽을 전달합니다. 대상으로의 트래픽에 대해 클라이언트 IP 주소 보존을 구성합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: URL 기반 라우팅 + HTTPS + TLS 오프로드 + 클라이언트 IP 확인이 필요합니다.\n\nA가 맞는 이유:\nALB는 L7 로드밸런서로 경로 기반(path-based) 라우팅을 지원합니다. HTTPS 리스너로 TLS를 오프로드하고, X-Forwarded-For 헤더를 통해 원본 클라이언트 IP를 백엔드에 전달합니다.\n\n오답 분석:\nB) 호스트 기반 라우팅은 URL 경로가 아닌 도메인 기반. 요구사항은 URL 경로 기반\nC) NLB는 L4 로드밸런서로 경로 기반 라우팅 불가\nD) NLB는 호스트 기반 라우팅도 불가"
    },
    {
        "num": 3,
        "question": "A company has developed an application on AWS that will track inventory levels of vending machines and initiate the restocking process\nautomatically. The company plans to integrate this application with vending machines and deploy the vending machines in several markets around\nthe world. The application resides in a VPC in the us-east-1 Region. The application consists of an Amazon Elastic Container Service (Amazon\nECS) cluster behind an Application Load Balancer (ALB). The communication from the vending machines to the application happens over HTTPS.\nThe company is planning to use an AWS Global Accelerator accelerator and configure static IP addresses of the accelerator in the vending\nmachines for application endpoint access. The application must be accessible only through the accelerator and not through a direct connection\nover the internet to the ALB endpoint.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure the ALB in a private subnet of the VPC. Attach an internet gateway without adding routes in the subnet route tables to point to\nthe internet gateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB’s security group to only\nallow inbound traffic from the internet on the ALB listener port.",
            "B. Configure the ALB in a private subnet of the VPC. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure\nthe ALB's security group to only allow inbound traffic from the internet on the ALB listener port.",
            "C. Configure the ALB in a public subnet of the VPAttach an internet gateway. Add routes in the subnet route tables to point to the internet\ngateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow\ninbound traffic from the accelerator's IP addresses on the ALB listener port.",
            "D. Configure the ALB in a private subnet of the VPC. Attach an internet gateway. Add routes in the subnet route tables to point to the internet\ngateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow\ninbound traffic from the accelerator's IP addresses on the ALB listener port."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: Global Accelerator + ALB 조합에서 ALB를 프라이빗 서브넷에 배치하되 인터넷 접근을 제한해야 합니다.\n\nA가 맞는 이유:\nGlobal Accelerator는 내부(프라이빗) ALB를 엔드포인트로 지원합니다. 인터넷 게이트웨이를 VPC에 연결하되 서브넷 라우팅 테이블에 IGW 경로를 추가하지 않으면, ALB는 인터넷에서 직접 접근 불가하고 Global Accelerator를 통해서만 접근 가능합니다.\n\n오답 분석:\nB) IGW 없이는 Global Accelerator가 ALB에 도달할 수 없음\nC) 퍼블릭 서브넷 + IGW 경로 추가 시 ALB가 인터넷에 직접 노출됨\nD) 프라이빗 서브넷인데 IGW 경로를 추가하면 퍼블릭 서브넷과 동일해짐",
        "question_ko": "회사는 자동으로 자판기 재고 수준을 추적하고 재입고 프로세스를 시작하는 AWS 애플리케이션을 개발했습니다. 회사는 이 애플리케이션을 자판기와 통합하고 전 세계 여러 시장에 자판기를 배포할 계획입니다. 애플리케이션은 us-east-1 리전의 VPC에 있습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤의 Amazon Elastic Container Service(Amazon ECS) 클러스터로 구성됩니다. 자판기에서 애플리케이션으로의 통신은 HTTPS를 통해 이루어집니다. 회사는 AWS Global Accelerator 가속기를 사용하고, 가속기의 고정 IP 주소를 자판기에 구성하여 애플리케이션 엔드포인트에 액세스할 계획입니다. 애플리케이션은 가속기를 통해서만 액세스할 수 있어야 하며, ALB 엔드포인트를 통한 직접 연결은 허용되지 않아야 합니다.",
        "options_ko": [
            "A. VPC의 프라이빗 서브넷에 ALB를 구성합니다. 인터넷 게이트웨이를 연결하지만 서브넷 라우팅 테이블에 인터넷 게이트웨이로 가는 경로를 추가하지 않습니다. 가속기를 구성하여 ALB 엔드포인트가 포함된 엔드포인트 그룹을 만듭니다. ALB의 보안 그룹을 구성하여 ALB 수신기 포트에서 인터넷의 인바운드 트래픽만 허용합니다.",
            "B. VPC의 프라이빗 서브넷에 ALB를 구성합니다. 가속기를 구성하여 ALB 엔드포인트가 포함된 엔드포인트 그룹을 만듭니다. ALB의 보안 그룹을 구성하여 ALB 수신기 포트에서 인터넷의 인바운드 트래픽만 허용합니다.",
            "C. VPC의 퍼블릭 서브넷에 ALB를 구성합니다. 인터넷 게이트웨이를 연결합니다. 서브넷 라우팅 테이블에 인터넷 게이트웨이로 가는 경로를 추가합니다. 가속기를 구성하여 ALB 엔드포인트가 포함된 엔드포인트 그룹을 만듭니다. ALB의 보안 그룹을 구성하여 ALB 수신기 포트에서 가속기의 IP 주소에서 오는 인바운드 트래픽만 허용합니다.",
            "D. VPC의 프라이빗 서브넷에 ALB를 구성합니다. 인터넷 게이트웨이를 연결합니다. 서브넷 라우팅 테이블에 인터넷 게이트웨이로 가는 경로를 추가합니다. 가속기를 구성하여 ALB 엔드포인트가 포함된 엔드포인트 그룹을 만듭니다. ALB의 보안 그룹을 구성하여 ALB 수신기 포트에서 가속기의 IP 주소에서 오는 인바운드 트래픽만 허용합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: Global Accelerator + ALB 조합에서 ALB를 프라이빗 서브넷에 배치하되 인터넷 접근을 제한해야 합니다.\n\nA가 맞는 이유:\nGlobal Accelerator는 내부(프라이빗) ALB를 엔드포인트로 지원합니다. 인터넷 게이트웨이를 VPC에 연결하되 서브넷 라우팅 테이블에 IGW 경로를 추가하지 않으면, ALB는 인터넷에서 직접 접근 불가하고 Global Accelerator를 통해서만 접근 가능합니다.\n\n오답 분석:\nB) IGW 없이는 Global Accelerator가 ALB에 도달할 수 없음\nC) 퍼블릭 서브넷 + IGW 경로 추가 시 ALB가 인터넷에 직접 노출됨\nD) 프라이빗 서브넷인데 IGW 경로를 추가하면 퍼블릭 서브넷과 동일해짐"
    },
    {
        "num": 4,
        "question": "A global delivery company is modernizing its fleet management system. The company has several business units. Each business unit designs and\nmaintains applications that are hosted in its own AWS account in separate application VPCs in the same AWS Region. Each business unit's\napplications are designed to get data from a central shared services VPC.\nThe company wants the network connectivity architecture to provide granular security controls. The architecture also must be able to scale as\nmore business units consume data from the central shared services VPC in the future.\nWhich solution will meet these requirements in the MOST secure manner?",
        "options": [
            "A. Create a central transit gateway. Create a VPC attachment to each application VPC. Provide full mesh connectivity between all the VPCs by\nusing the transit gateway.",
            "B. Create VPC peering connections between the central shared services VPC and each application VPC in each business unit's AWS account.",
            "C. Create VPC endpoint services powered by AWS PrivateLink in the central shared services VPCreate VPC endpoints in each application VPC.",
            "D. Create a central transit VPC with a VPN appliance from AWS Marketplace. Create a VPN attachment from each VPC to the transit VPC.\nProvide full mesh connectivity among all the VPCs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 중앙 공유 서비스 VPC에서 각 사업부 VPC로의 단방향 서비스 제공, 최소 권한 연결이 필요합니다.\n\nC가 맞는 이유:\nAWS PrivateLink(VPC 엔드포인트 서비스)는 서비스 제공자-소비자 모델로, 공유 서비스 VPC가 NLB 뒤에 서비스를 노출하고 각 애플리케이션 VPC가 인터페이스 엔드포인트로 접근합니다. IP 중복 문제 없고, 필요한 서비스만 노출하므로 최소 권한 원칙에 부합합니다.\n\n오답 분석:\nA) Transit Gateway 풀 메시는 모든 VPC 간 통신을 허용하여 최소 권한 위반\nB) VPC 피어링은 CIDR 중복 불가 + 각 VPC마다 개별 피어링 필요\nD) Transit VPC + VPN은 복잡하고 비용이 높으며 레거시 패턴",
        "question_ko": "글로벌 배송 회사가 차량 관리 시스템을 현대화하고 있습니다. 회사에는 여러 사업부가 있습니다. 각 사업부는 자체 AWS 계정에 호스팅되는 애플리케이션을 설계 및 관리하며, 이는 동일한 AWS 리전의 별도 애플리케이션 VPC에 있습니다. 각 사업부의 애플리케이션은 중앙 공유 서비스 VPC에서 데이터를 가져오도록 설계되어 있습니다. 회사는 네트워크 연결 아키텍처에 세부적인 보안 제어 기능을 제공하기를 원합니다. 이 아키텍처는 향후 더 많은 사업부가 중앙 공유 서비스 VPC의 데이터를 소비하는 경우에도 확장될 수 있어야 합니다.",
        "options_ko": [
            "A. 중앙 Transit Gateway를 생성합니다. 각 애플리케이션 VPC에 VPC 연결을 생성합니다. Transit Gateway를 사용하여 모든 VPC 간에 완전한 메시 연결성을 제공합니다.",
            "B. 중앙 공유 서비스 VPC와 각 사업부 AWS 계정의 애플리케이션 VPC 간에 VPC 피어링 연결을 생성합니다.",
            "C. 중앙 공유 서비스 VPC에 AWS PrivateLink로 구동되는 VPC 엔드포인트 서비스를 생성합니다. 각 애플리케이션 VPC에 VPC 엔드포인트를 생성합니다.",
            "D. 중앙 Transit VPC를 생성하고 AWS Marketplace에서 VPN 어플라이언스를 추가합니다. 각 VPC에서 Transit VPC로 VPN 연결을 생성합니다. 모든 VPC 간에 완전한 메시 연결성을 제공합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 중앙 공유 서비스 VPC에서 각 사업부 VPC로의 단방향 서비스 제공, 최소 권한 연결이 필요합니다.\n\nC가 맞는 이유:\nAWS PrivateLink(VPC 엔드포인트 서비스)는 서비스 제공자-소비자 모델로, 공유 서비스 VPC가 NLB 뒤에 서비스를 노출하고 각 애플리케이션 VPC가 인터페이스 엔드포인트로 접근합니다. IP 중복 문제 없고, 필요한 서비스만 노출하므로 최소 권한 원칙에 부합합니다.\n\n오답 분석:\nA) Transit Gateway 풀 메시는 모든 VPC 간 통신을 허용하여 최소 권한 위반\nB) VPC 피어링은 CIDR 중복 불가 + 각 VPC마다 개별 피어링 필요\nD) Transit VPC + VPN은 복잡하고 비용이 높으며 레거시 패턴"
    },
    {
        "num": 5,
        "question": "A company uses a 4 Gbps AWS Direct Connect dedicated connection with a link aggregation group (LAG) bundle to connect to five VPCs that are\ndeployed in the us-east-1 Region. Each VPC serves a different business unit and uses its own private VIF for connectivity to the on-premises\nenvironment. Users are reporting slowness when they access resources that are hosted on AWS.\nA network engineer finds that there are sudden increases in throughput and that the Direct Connect connection becomes saturated at the same\ntime for about an hour each business day. The company wants to know which business unit is causing the sudden increase in throughput. The\nnetwork engineer must find out this information and implement a solution to resolve the problem.\nWhich solution will meet these requirements?",
        "options": [
            "A. Review the Amazon CloudWatch metrics for VirtualInterfaceBpsEgress and VirtualInterfaceBpsIngress to determine which VIF is sending\nthe highest throughput during the period in which slowness is observed. Create a new 10 Gbps dedicated connection. Shift traffic from the\nexisting dedicated connection to the new dedicated connection.",
            "B. Review the Amazon CloudWatch metrics for VirtualInterfaceBpsEgress and VirtualInterfaceBpsIngress to determine which VIF is sending\nthe highest throughput during the period in which slowness is observed. Upgrade the bandwidth of the existing dedicated connection to 10\nGbps.",
            "C. Review the Amazon CloudWatch metrics for ConnectionBpsIngress and ConnectionPpsEgress to determine which VIF is sending the\nhighest throughput during the period in which slowness is observed. Upgrade the existing dedicated connection to a 5 Gbps hosted\nconnection.",
            "D. Review the Amazon CloudWatch metrics for ConnectionBpsIngress and ConnectionPpsEgress to determine which VIF is sending the\nhighest throughput during the period in which slowness is observed. Create a new 10 Gbps dedicated connection. Shift traffic from the\nexisting dedicated connection to the new dedicated connection."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 4Gbps Direct Connect에서 느린 속도가 발생하여 대역폭 병목 확인 및 해결이 필요합니다.\n\nA가 맞는 이유:\nVirtualInterfaceBpsEgress/Ingress 지표로 각 VIF별 처리량을 확인하여 병목 VIF를 식별합니다. 기존 4Gbps로는 부족하므로 새 10Gbps 전용 연결을 생성하고 트래픽이 많은 VIF를 이전합니다. Direct Connect는 대역폭 업그레이드가 불가하므로 새 연결이 필요합니다.\n\n오답 분석:\nB) 기존 Direct Connect 연결의 대역폭은 변경 불가. 새로 생성해야 함\nC) ConnectionBpsIngress/ConnectionPpsEgress는 올바른 지표 조합이 아님(Bps와 Pps 혼용)\nD) C와 동일한 잘못된 지표 사용",
        "question_ko": "회사는 us-east-1 리전에 배포된 5개의 VPC에 연결되는 4 Gbps AWS Direct Connect 전용 연결을 사용하고 있습니다. 각 VPC는 다른 비즈니스 부문을 담당하며 온프레미스 환경과의 연결을 위해 자체 프라이빗 VIF를 사용합니다. 사용자들은 AWS에 호스팅된 리소스에 액세스할 때 느린 속도를 보고하고 있습니다. 네트워크 엔지니어가 조사한 결과, 처리량이 갑자기 증가하고 매일 업무 시간 중 약 1시간 동안 Direct Connect 연결이 포화 상태가 되는 것으로 나타났습니다. 회사는 이 갑작스러운 처리량 증가를 일으키는 비즈니스 부문을 확인하고 문제를 해결하고자 합니다.",
        "options_ko": [
            "A. VirtualInterfaceBpsEgress 및 VirtualInterfaceBpsIngress Amazon CloudWatch 지표를 검토하여 느리게 관찰되는 기간 동안 가장 높은 처리량을 보내는 VIF를 확인합니다. 새로운 10 Gbps 전용 연결을 생성하고 기존 전용 연결의 트래픽을 새 연결로 이동합니다.",
            "B. VirtualInterfaceBpsEgress 및 VirtualInterfaceBpsIngress Amazon CloudWatch 지표를 검토하여 느리게 관찰되는 기간 동안 가장 높은 처리량을 보내는 VIF를 확인합니다. 기존 전용 연결의 대역폭을 10 Gbps로 업그레이드합니다.",
            "C. ConnectionBpsIngress 및 ConnectionPpsEgress Amazon CloudWatch 지표를 검토하여 느리게 관찰되는 기간 동안 가장 높은 처리량을 보내는 VIF를 확인합니다. 기존 전용 연결을 5 Gbps 호스팅 연결로 업그레이드합니다.",
            "D. ConnectionBpsIngress 및 ConnectionPpsEgress Amazon CloudWatch 지표를 검토하여 느리게 관찰되는 기간 동안 가장 높은 처리량을 보내는 VIF를 확인합니다. 새로운 10 Gbps 전용 연결을 생성하고 기존 전용 연결의 트래픽을 새 연결로 이동합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 4Gbps Direct Connect에서 느린 속도가 발생하여 대역폭 병목 확인 및 해결이 필요합니다.\n\nA가 맞는 이유:\nVirtualInterfaceBpsEgress/Ingress 지표로 각 VIF별 처리량을 확인하여 병목 VIF를 식별합니다. 기존 4Gbps로는 부족하므로 새 10Gbps 전용 연결을 생성하고 트래픽이 많은 VIF를 이전합니다. Direct Connect는 대역폭 업그레이드가 불가하므로 새 연결이 필요합니다.\n\n오답 분석:\nB) 기존 Direct Connect 연결의 대역폭은 변경 불가. 새로 생성해야 함\nC) ConnectionBpsIngress/ConnectionPpsEgress는 올바른 지표 조합이 아님(Bps와 Pps 혼용)\nD) C와 동일한 잘못된 지표 사용"
    },
    {
        "num": 6,
        "question": "A software-as-a-service (SaaS) provider hosts its solution on Amazon EC2 instances within a VPC in the AWS Cloud. All of the provider's\ncustomers also have their environments in the AWS Cloud.\nA recent design meeting revealed that the customers have IP address overlap with the provider's AWS deployment. The customers have stated\nthat they will not share their internal IP addresses and that they do not want to connect to the provider's SaaS service over the internet.\nWhich combination of steps is part of a solution that meets these requirements? (Choose two.)",
        "options": [
            "A. Deploy the SaaS service endpoint behind a Network Load Balancer.",
            "B. Configure an endpoint service, and grant the customers permission to create a connection to the endpoint service.",
            "C. Deploy the SaaS service endpoint behind an Application Load Balancer.",
            "D. Configure a VPC peering connection to the customer VPCs. Route traffic through NAT gateways.",
            "E. Deploy an AWS Transit Gateway, and connect the SaaS VPC to it. Share the transit gateway with the customers. Configure routing on the\ntransit gateway."
        ],
        "answers": [
            "A",
            "B"
        ],
        "isMulti": true,
        "explanation": "정답: A, B\n\n핵심: IP 중복이 있는 고객 VPC와 SaaS VPC 간 프라이빗 연결이 필요합니다.\n\nA, B가 맞는 이유:\nAWS PrivateLink를 사용하면 IP 중복 문제를 해결할 수 있습니다. NLB 뒤에 서비스를 배포(A)하고, VPC 엔드포인트 서비스를 구성하여 고객에게 연결 권한을 부여(B)합니다. PrivateLink는 NAT를 수행하므로 IP 중복이 있어도 동작합니다.\n\n오답 분석:\nC) PrivateLink 엔드포인트 서비스는 NLB가 표준\nD) VPC 피어링은 CIDR 중복 시 사용 불가\nE) Transit Gateway도 IP 중복 시 라우팅 충돌 발생",
        "question_ko": "SaaS 제공업체는 AWS 클라우드의 VPC 내에서 Amazon EC2 인스턴스에 솔루션을 호스팅합니다. 모든 고객도 AWS 클라우드에 자신의 환경을 가지고 있습니다.\n최근 설계 회의에서 고객들이 제공업체의 AWS 배포와 IP 주소 중복을 가지고 있다는 것이 밝혀졌습니다. 고객들은 자신의 내부 IP 주소를 공유하지 않을 것이며, 인터넷을 통해 제공업체의 SaaS 서비스에 연결하고 싶지 않다고 말했습니다.\n이러한 요구사항을 충족시키는 솔루션의 일부인 단계 조합은 무엇입니까? (두 개 선택)",
        "options_ko": [
            "A. SaaS 서비스 엔드포인트를 Network Load Balancer 뒤에 배포합니다.",
            "B. 엔드포인트 서비스를 구성하고 고객에게 엔드포인트 서비스에 대한 연결 권한을 부여합니다.",
            "C. SaaS 서비스 엔드포인트를 Application Load Balancer 뒤에 배포합니다.",
            "D. VPC 피어링 연결을 고객 VPC에 구성합니다. NAT 게이트웨이를 통해 트래픽을 라우팅합니다.",
            "E. AWS Transit Gateway를 배포하고 SaaS VPC를 연결합니다. 고객과 트랜잃 게이트웨이를 공유합니다. 트랜잃 게이트웨이에서 라우팅을 구성합니다."
        ],
        "explanation_ko": "정답: A, B\n\n핵심: IP 중복이 있는 고객 VPC와 SaaS VPC 간 프라이빗 연결이 필요합니다.\n\nA, B가 맞는 이유:\nAWS PrivateLink를 사용하면 IP 중복 문제를 해결할 수 있습니다. NLB 뒤에 서비스를 배포(A)하고, VPC 엔드포인트 서비스를 구성하여 고객에게 연결 권한을 부여(B)합니다. PrivateLink는 NAT를 수행하므로 IP 중복이 있어도 동작합니다.\n\n오답 분석:\nC) PrivateLink 엔드포인트 서비스는 NLB가 표준\nD) VPC 피어링은 CIDR 중복 시 사용 불가\nE) Transit Gateway도 IP 중복 시 라우팅 충돌 발생"
    },
    {
        "num": 7,
        "question": "A network engineer is designing the architecture for a healthcare company's workload that is moving to the AWS Cloud. All data to and from the\non-premises environment must be encrypted in transit. All traffic also must be inspected in the cloud before the traffic is allowed to leave the\ncloud and travel to the on-premises environment or to the internet.\nThe company will expose components of the workload to the internet so that patients can reserve appointments. The architecture must secure\nthese components and protect them against DDoS attacks. The architecture also must provide protection against financial liability for services\nthat scale out during a DDoS event.\nWhich combination of steps should the network engineer take to meet all these requirements for the workload? (Choose three.)",
        "options": [
            "A. Use Traffic Mirroring to copy all traffic to a fleet of traffic capture appliances.",
            "B. Set up AWS WAF on all network components.",
            "C. Configure an AWS Lambda function to create Deny rules in security groups to block malicious IP addresses.",
            "D. Use AWS Direct Connect with MACsec support for connectivity to the cloud.",
            "E. Use Gateway Load Balancers to insert third-party firewalls for inline traffic inspection.",
            "F. Configure AWS Shield Advanced and ensure that it is configured on all public assets."
        ],
        "answers": [
            "D",
            "E",
            "F"
        ],
        "isMulti": true,
        "explanation": "정답: D, E, F\n\n핵심: 전송 중 암호화(온프레미스-AWS) + 클라우드 내 트래픽 검사 + DDoS 보호가 필요합니다.\n\nD, E, F가 맞는 이유:\nD) MACsec이 있는 Direct Connect는 L2 레벨에서 전송 중 암호화를 제공합니다.\nE) Gateway Load Balancer는 타사 방화벽을 인라인으로 삽입하여 트래픽을 투명하게 검사합니다.\nF) AWS Shield Advanced는 DDoS 보호를 제공하며 인터넷에 노출된 공개 자산을 보호합니다.\n\n오답 분석:\nA) Traffic Mirroring은 트래픽 복사(모니터링)용이지 인라인 검사가 아님\nB) AWS WAF는 L7 웹 공격 방어용이지 모든 네트워크 트래픽 검사용이 아님\nC) 보안 그룹에는 Deny 규칙이 없음 (Allow만 가능)",
        "question_ko": "네트워크 엔지니어가 온-프레미스 환경에서 AWS 클라우드로 이동하는 의료 회사 워크로드의 아키텍처를 설계하고 있습니다. 온-프레미스 환경과의 모든 데이터 전송은 전송 중에 암호화되어야 합니다. 또한 클라우드 내 트래픽은 온-프레미스 환경 또는 인터넷으로 보내기 전에 검사되어야 합니다.\n회사는 환자가 예약할 수 있도록 워크로드의 구성 요소를 인터넷에 노출할 것입니다. 아키텍처는 이러한 구성 요소를 보호하고 DDoS 공격으로부터 보호해야 합니다. 아키텍처는 또한 DDoS 이벤트 중 확장되는 서비스로 인한 재정적 책임으로부터 보호해야 합니다.\n네트워크 엔지니어가 이 워크로드의 모든 요구 사항을 충족하기 위해 수행해야 할 단계 조합은 무엇입니까? (세 개 선택)",
        "options_ko": [
            "A. Traffic Mirroring을 사용하여 모든 트래픽을 트래픽 캡처 appliances의 풀로 복사합니다.",
            "B. 모든 네트워크 구성 요소에 AWS WAF를 설정합니다.",
            "C. 악성 IP 주소를 차단하기 위해 보안 그룹에 Deny 규칙을 생성하는 AWS Lambda 함수를 구성합니다.",
            "D. MACsec 지원이 있는 AWS Direct Connect를 사용하여 클라우드에 연결합니다.",
            "E. Gateway Load Balancer를 사용하여 인라인 트래픽 검사를 위한 타사 방화벽을 삽입합니다.",
            "F. AWS Shield Advanced를 구성하고 모든 공개 자산에 구성되어 있는지 확인합니다."
        ],
        "explanation_ko": "정답: D, E, F\n\n핵심: 전송 중 암호화(온프레미스-AWS) + 클라우드 내 트래픽 검사 + DDoS 보호가 필요합니다.\n\nD, E, F가 맞는 이유:\nD) MACsec이 있는 Direct Connect는 L2 레벨에서 전송 중 암호화를 제공합니다.\nE) Gateway Load Balancer는 타사 방화벽을 인라인으로 삽입하여 트래픽을 투명하게 검사합니다.\nF) AWS Shield Advanced는 DDoS 보호를 제공하며 인터넷에 노출된 공개 자산을 보호합니다.\n\n오답 분석:\nA) Traffic Mirroring은 트래픽 복사(모니터링)용이지 인라인 검사가 아님\nB) AWS WAF는 L7 웹 공격 방어용이지 모든 네트워크 트래픽 검사용이 아님\nC) 보안 그룹에는 Deny 규칙이 없음 (Allow만 가능)"
    },
    {
        "num": 8,
        "question": "A retail company is running its service on AWS. The company’s architecture includes Application Load Balancers (ALBs) in public subnets. The\nALB target groups are configured to send traffic to backend Amazon EC2 instances in private subnets. These backend EC2 instances can call\nexternally hosted services over the internet by using a NAT gateway.\nThe company has noticed in its billing that NAT gateway usage has increased significantly. A network engineer needs to find out the source of this\nincreased usage.\nWhich options can the network engineer use to investigate the traffic through the NAT gateway? (Choose two.)",
        "options": [
            "A. Enable VPC flow logs on the NAT gateway's elastic network interface. Publish the logs to a log group in Amazon CloudWatch Logs. Use\nCloudWatch Logs Insights to query and analyze the logs.",
            "B. Enable NAT gateway access logs. Publish the logs to a log group in Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query and\nanalyze the logs.",
            "C. Configure Traffic Mirroring on the NAT gateway's elastic network interface. Send the traffic to an additional EC2 instance. Use tools such as\ntcpdump and Wireshark to query and analyze the mirrored traffic.",
            "D. Enable VPC flow logs on the NAT gateway's elastic network interface. Publish the logs to an Amazon S3 bucket. Create a custom table for\nthe S3 bucket in Amazon Athena to describe the log structure. Use Athena to query and analyze the logs.",
            "E. Enable NAT gateway access logs. Publish the logs to an Amazon S3 bucket. Create a custom table for the S3 bucket in Amazon Athena to\ndescribe the log structure. Use Athena to query and analyze the logs."
        ],
        "answers": [
            "A",
            "D"
        ],
        "isMulti": true,
        "explanation": "정답: A, D\n\n핵심: NAT 게이트웨이를 통한 외부 API 호출의 트래픽 패턴을 분석해야 합니다.\n\nA, D가 맞는 이유:\nNAT 게이트웨이의 ENI에서 VPC 흐름 로그를 활성화하면 모든 트래픽 기록을 캡처할 수 있습니다. CloudWatch Logs(A)로 실시간 분석이 가능하고, S3 + Athena(D)로 대량 로그의 SQL 기반 분석이 가능합니다.\n\n오답 분석:\nB) NAT 게이트웨이에는 액세스 로그 기능이 없음 (VPC 흐름 로그만 가능)\nC) NAT 게이트웨이 ENI에서는 Traffic Mirroring이 지원되지 않음\nE) B와 동일. NAT 게이트웨이 액세스 로그는 존재하지 않는 기능",
        "question_ko": "소매 회사가 AWS에서 서비스를 실행하고 있습니다. 회사의 아키텍처에는 공용 서브넷의 Application Load Balancers (ALBs)가 포함되어 있습니다. ALB 대상 그룹은 프라이빗 서브넷의 백엔드 Amazon EC2 인스턴스로 트래픽을 전송하도록 구성되어 있습니다. 이 백엔드 EC2 인스턴스는 NAT 게이트웨이를 사용하여 인터넷을 통해 외부 호스팅 서비스를 호출할 수 있습니다.\n회사는 청구서에서 NAT 게이트웨이 사용량이 크게 증가했음을 확인했습니다. 네트워크 엔지니어는 이 증가된 사용량의 원인을 찾아야 합니다.\n네트워크 엔지니어가 NAT 게이트웨이를 통한 트래픽을 조사하기 위해 사용할 수 있는 옵션은 무엇입니까? (두 개 선택)",
        "options_ko": [
            "A. NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 VPC 흐름 로그를 활성화합니다. 로그를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 로그를 쿼리하고 분석합니다.",
            "B. NAT 게이트웨이 액세스 로그를 활성화합니다. 로그를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 로그를 쿼리하고 분석합니다.",
            "C. NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 Traffic Mirroring을 구성합니다. 트래픽을 추가 EC2 인스턴스로 전송합니다. tcpdump 및 Wireshark와 같은 도구를 사용하여 미러링된 트래픽을 쿼리하고 분석합니다.",
            "D. NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 VPC 흐름 로그를 활성화합니다. 로그를 Amazon S3 버킷에 게시합니다. Amazon Athena에서 S3 버킷의 사용자 지정 테이블을 생성하여 로그 구조를 설명합니다. Athena를 사용하여 로그를 쿼리하고 분석합니다.",
            "E. NAT 게이트웨이 액세스 로그를 활성화합니다. 로그를 Amazon S3 버킷에 게시합니다. Amazon Athena에서 S3 버킷의 사용자 지정 테이블을 생성하여 로그 구조를 설명합니다. Athena를 사용하여 로그를 쿼리하고 분석합니다."
        ],
        "explanation_ko": "정답: A, D\n\n핵심: NAT 게이트웨이를 통한 외부 API 호출의 트래픽 패턴을 분석해야 합니다.\n\nA, D가 맞는 이유:\nNAT 게이트웨이의 ENI에서 VPC 흐름 로그를 활성화하면 모든 트래픽 기록을 캡처할 수 있습니다. CloudWatch Logs(A)로 실시간 분석이 가능하고, S3 + Athena(D)로 대량 로그의 SQL 기반 분석이 가능합니다.\n\n오답 분석:\nB) NAT 게이트웨이에는 액세스 로그 기능이 없음 (VPC 흐름 로그만 가능)\nC) NAT 게이트웨이 ENI에서는 Traffic Mirroring이 지원되지 않음\nE) B와 동일. NAT 게이트웨이 액세스 로그는 존재하지 않는 기능"
    },
    {
        "num": 9,
        "question": "A banking company is successfully operating its public mobile banking stack on AWS. The mobile banking stack is deployed in a VPC that\nincludes private subnets and public subnets. The company is using IPv4 networking and has not deployed or supported IPv6 in the environment.\nThe company has decided to adopt a third-party service provider's API and must integrate the API with the existing environment. The service\nprovider’s API requires the use of IPv6.\nA network engineer must turn on IPv6 connectivity for the existing workload that is deployed in a private subnet. The company does not want to\npermit IPv6 traffic from the public internet and mandates that the company's servers must initiate all IPv6 connectivity. The network engineer\nturns on IPv6 in the VPC and in the private subnets.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create an internet gateway and a NAT gateway in the VPC. Add a route to the existing subnet route tables to point IPv6 traffic to the NAT\ngateway.",
            "B. Create an internet gateway and a NAT instance in the VPC. Add a route to the existing subnet route tables to point IPv6 traffic to the NAT\ninstance.",
            "C. Create an egress-only Internet gateway in the VPAdd a route to the existing subnet route tables to point IPv6 traffic to the egress-only\ninternet gateway.",
            "D. Create an egress-only internet gateway in the VPC. Configure a security group that denies all inbound traffic. Associate the security group\nwith the egress-only internet gateway."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: IPv4만 사용하던 환경에서 IPv6 전용 타사 API에 접근해야 합니다.\n\nC가 맞는 이유:\nEgress-only 인터넷 게이트웨이는 IPv6 트래픽의 아웃바운드 연결만 허용하고 인바운드는 차단합니다. 프라이빗 서브넷의 리소스가 IPv6 API에 접근하면서도 외부에서의 인바운드 접근을 막을 수 있습니다.\n\n오답 분석:\nA) NAT 게이트웨이는 IPv4 전용이며 IPv6를 지원하지 않음\nB) NAT 인스턴스도 IPv6 NAT를 기본 지원하지 않음\nD) Egress-only IGW에는 보안 그룹을 연결할 수 없음",
        "question_ko": "은행 회사는 AWS에서 성공적으로 공개 모바일 뱅킹 스택을 운영하고 있습니다. 모바일 뱅킹 스택은 프라이빗 서브넷과 공용 서브넷이 포함된 VPC에 배포됩니다. 회사는 IPv4 네트워크를 사용하고 있으며 환경에서 IPv6를 배포하거나 지원하지 않았습니다.\n회사는 타사 서비스 공급자의 API를 채택하기로 결정했으며 기존 환경과 API를 통합해야 합니다. 서비스 공급자의 API는 IPv6 사용을 요구합니다.\n네트워크 엔지니어는 프라이빗 서브넷에 배포된 기존 워크로드에 대해 IPv6 연결을 활성화해야 합니다. 회사는 공개 인터넷에서 IPv6 트래픽을 허용하고 싶지 않으며 회사의 서버가 모든 IPv6 연결을 시작해야 한다고 요구합니다. 네트워크 엔지니어는 VPC와 프라이빗 서브넷에서 IPv6를 활성화합니다.\n이러한 요구사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC에 인터넷 게이트웨이와 NAT 게이트웨이를 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 NAT 게이트웨이로 전송하는 경로를 추가합니다.",
            "B. VPC에 인터넷 게이트웨이와 NAT 인스턴스를 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 NAT 인스턴스로 전송하는 경로를 추가합니다.",
            "C. VPC에 egress-only 인터넷 게이트웨이를 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 egress-only 인터넷 게이트웨이로 전송하는 경로를 추가합니다.",
            "D. VPC에 egress-only 인터넷 게이트웨이를 생성합니다. 모든 인바운드 트래픽을 거부하는 보안 그룹을 구성합니다. 보안 그룹을 egress-only 인터넷 게이트웨이와 연결합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: IPv4만 사용하던 환경에서 IPv6 전용 타사 API에 접근해야 합니다.\n\nC가 맞는 이유:\nEgress-only 인터넷 게이트웨이는 IPv6 트래픽의 아웃바운드 연결만 허용하고 인바운드는 차단합니다. 프라이빗 서브넷의 리소스가 IPv6 API에 접근하면서도 외부에서의 인바운드 접근을 막을 수 있습니다.\n\n오답 분석:\nA) NAT 게이트웨이는 IPv4 전용이며 IPv6를 지원하지 않음\nB) NAT 인스턴스도 IPv6 NAT를 기본 지원하지 않음\nD) Egress-only IGW에는 보안 그룹을 연결할 수 없음"
    },
    {
        "num": 10,
        "question": "A company has deployed an AWS Network Firewall firewall into a VPC. A network engineer needs to implement a solution to deliver Network\nFirewall flow logs to the company’s Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster in the shortest possible time.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create an Amazon S3 bucket. Create an AWS Lambda function to load logs into the Amazon OpenSearch Service (Amazon Elasticsearch\nService) cluster. Enable Amazon Simple Notification Service (Amazon SNS) notifications on the S3 bucket to invoke the Lambda function.\nConfigure flow logs for the firewall. Set the S3 bucket as the destination.",
            "B. Create an Amazon Kinesis Data Firehose delivery stream that includes the Amazon OpenSearch Service (Amazon Elasticsearch Service)\ncluster as the destination. Configure flow logs for the firewall Set the Kinesis Data Firehose delivery stream as the destination for the Network\nFirewall flow logs.",
            "C. Configure flow logs for the firewall. Set the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster as the destination for the\nNetwork Firewall flow logs.",
            "D. Create an Amazon Kinesis data stream that includes the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster as the\ndestination. Configure flow logs for the firewall. Set the Kinesis data stream as the destination for the Network Firewall flow logs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Network Firewall 흐름 로그를 가능한 빨리 OpenSearch로 전달해야 합니다.\n\nB가 맞는 이유:\nAmazon Kinesis Data Firehose는 Network Firewall의 로그 대상으로 직접 지원되며, OpenSearch를 전송 대상으로 설정할 수 있습니다. 중간 단계 없이 거의 실시간으로 로그가 전달됩니다.\n\n오답 분석:\nA) S3에서 Lambda로 OpenSearch에 로드하는 방식은 추가 단계가 필요하여 지연 발생\nC) Network Firewall은 OpenSearch를 직접 로그 대상으로 지원하지 않음\nD) Kinesis Data Streams는 Network Firewall의 직접 로그 대상이 아님",
        "question_ko": "회사가 VPC에 AWS Network Firewall 방화벽을 배포했습니다. 네트워크 엔지니어는 가능한 한 빨리 회사의 Amazon OpenSearch Service (Amazon Elasticsearch Service) 클러스터에 Network Firewall 흐름 로그를 전달하는 솔루션을 구현해야 합니다.\n이러한 요구사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon S3 버킷을 생성합니다. Amazon OpenSearch Service (Amazon Elasticsearch Service) 클러스터에 로그를 로드하는 AWS Lambda 함수를 생성합니다. S3 버킷에 Amazon Simple Notification Service (Amazon SNS) 알림을 활성화하여 Lambda 함수를 호출합니다. 방화벽에 대한 흐름 로그를 구성합니다. S3 버킷을 대상으로 설정합니다.",
            "B. Amazon Kinesis Data Firehose 전송 스트림을 생성하고 Amazon OpenSearch Service (Amazon Elasticsearch Service) 클러스터를 대상으로 포함합니다. 방화벽에 대한 흐름 로그를 구성합니다. Kinesis Data Firehose 전송 스트림을 Network Firewall 흐름 로그의 대상으로 설정합니다.",
            "C. 방화벽에 대한 흐름 로그를 구성합니다. Amazon OpenSearch Service (Amazon Elasticsearch Service) 클러스터를 Network Firewall 흐름 로그의 대상으로 설정합니다.",
            "D. Amazon Kinesis 데이터 스트림을 생성하고 Amazon OpenSearch Service (Amazon Elasticsearch Service) 클러스터를 대상으로 포함합니다. 방화벽에 대한 흐름 로그를 구성합니다. Kinesis 데이터 스트림을 Network Firewall 흐름 로그의 대상으로 설정합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Network Firewall 흐름 로그를 가능한 빨리 OpenSearch로 전달해야 합니다.\n\nB가 맞는 이유:\nAmazon Kinesis Data Firehose는 Network Firewall의 로그 대상으로 직접 지원되며, OpenSearch를 전송 대상으로 설정할 수 있습니다. 중간 단계 없이 거의 실시간으로 로그가 전달됩니다.\n\n오답 분석:\nA) S3에서 Lambda로 OpenSearch에 로드하는 방식은 추가 단계가 필요하여 지연 발생\nC) Network Firewall은 OpenSearch를 직접 로그 대상으로 지원하지 않음\nD) Kinesis Data Streams는 Network Firewall의 직접 로그 대상이 아님"
    },
    {
        "num": 11,
        "question": "A company is using custom DNS servers that run BIND for name resolution in its VPCs. The VPCs are deployed across multiple AWS accounts that\nare part of the same organization in AWS Organizations. All the VPCs are connected to a transit gateway. The BIND servers are running in a central\nVPC and are configured to forward all queries for an on-premises DNS domain to DNS servers that are hosted in an on-premises data center. To\nensure that all the VPCs use the custom DNS servers, a network engineer has configured a VPC DHCP options set in all the VPCs that specifies\nthe custom DNS servers to be used as domain name servers.\nMultiple development teams in the company want to use Amazon Elastic File System (Amazon EFS). A development team has created a new EFS\nfile system but cannot mount the file system to one of its Amazon EC2 instances. The network engineer discovers that the EC2 instance cannot\nresolve the IP address for the EFS mount point fs-33444567d.efs.us-east-1.amazonaws.com. The network engineer needs to implement a solution\nso that development teams throughout the organization can mount EFS file systems.\nWhich combination of steps will meet these requirements? (Choose two.)",
        "options": [
            "A. Configure the BIND DNS servers in the central VPC to forward queries for efs.us-east-1.amazonaws.com to the Amazon provided DNS\nserver (169.254.169.253).",
            "B. Create an Amazon Route 53 Resolver outbound endpoint in the central VPC. Update all the VPC DHCP options sets to use\nAmazonProvidedDNS for name resolution.",
            "C. Create an Amazon Route 53 Resolver inbound endpoint in the central VPUpdate all the VPC DHCP options sets to use the Route 53 Resolver\ninbound endpoint in the central VPC for name resolution.",
            "D. Create an Amazon Route 53 Resolver rule to forward queries for the on-premises domain to the on-premises DNS servers. Share the rule\nwith the organization by using AWS Resource Access Manager (AWS RAM). Associate the rule with all the VPCs.",
            "E. Create an Amazon Route 53 private hosted zone for the efs.us-east-1.amazonaws.com domain. Associate the private hosted zone with the\nVPC where the EC2 instance is deployed. Create an A record for fs-33444567d.efs.us-east-1.amazonaws.com in the private hosted zone.\nConfigure the A record to return the mount target of the EFS mount point."
        ],
        "answers": [
            "B",
            "D"
        ],
        "isMulti": true,
        "explanation": "정답: B, D\n\n핵심: BIND DNS 서버를 대체하여 AWS 서비스 DNS 확인 + 온프레미스 DNS 전달을 구현해야 합니다.\n\nB, D가 맞는 이유:\nB) Route 53 Resolver 아웃바운드 엔드포인트를 생성하고 DHCP 옵션을 AmazonProvidedDNS로 변경하면, 모든 VPC가 Route 53 Resolver를 기본 DNS로 사용합니다.\nD) 온프레미스 도메인에 대한 Resolver 규칙을 생성하고 AWS RAM으로 조직 전체에 공유하면, 온프레미스 DNS 쿼리가 올바르게 전달됩니다.\n\n오답 분석:\nA) BIND에서 169.254.169.253으로 전달하는 것은 BIND 서버가 있는 VPC에서만 동작\nC) 인바운드 엔드포인트는 온프레미스에서 AWS 방향 쿼리용\nE) EFS 마운트 타겟은 자동 DNS가 있으므로 프라이빗 호스팅 영역이 불필요",
        "question_ko": "회사는 BIND을 실행하는 사용자 지정 DNS 서버를 사용하여 VPC 내에서 이름 확인을 수행하고 있습니다. VPC는 AWS Organizations의 동일한 조직에 속하는 여러 AWS 계정에 걸쳐 배포됩니다. 모든 VPC는 전송 게이트웨이에 연결되어 있습니다. BIND 서버는 중앙 VPC에서 실행 중이며 온-프레미스 데이터 센터에 호스팅되는 DNS 서버로 온-프레미스 DNS 도메인에 대한 모든 쿼리를 전달하도록 구성되어 있습니다. 모든 VPC가 사용자 지정 DNS 서버를 사용하도록 하려면 네트워크 엔지니어가 모든 VPC에 VPC DHCP 옵션 세트를 구성하여 도메인 이름 서버로 사용자 지정 DNS 서버를 지정했습니다.\n회사의 여러 개발 팀이 Amazon Elastic File System(Amazon EFS)을 사용하고 싶어 합니다. 한 개발 팀이 새 EFS 파일 시스템을 만들었지만 Amazon EC2 인스턴스에 탑재할 수 없습니다. 네트워크 엔지니어는 EC2 인스턴스가 EFS 마운트 포인트 fs-33444567d.efs.us-east-1.amazonaws.com의 IP 주소를 확인할 수 없다는 것을 발견합니다. 네트워크 엔지니어는 조직 전체의 개발 팀이 EFS 파일 시스템을 마운트할 수 있도록 해결책을 구현해야 합니다.\n이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (두 가지 선택)",
        "options_ko": [
            "A. 중앙 VPC의 BIND DNS 서버를 구성하여 efs.us-east-1.amazonaws.com에 대한 쿼리를 Amazon 제공 DNS 서버(169.254.169.253)로 전달합니다.",
            "B. 중앙 VPC에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 모든 VPC DHCP 옵션 세트를 AmazonProvidedDNS를 사용하도록 업데이트합니다.",
            "C. 중앙 VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 모든 VPC DHCP 옵션 세트를 중앙 VPC의 Route 53 Resolver 인바운드 엔드포인트를 사용하도록 업데이트합니다.",
            "D. 온-프레미스 도메인에 대한 쿼리를 온-프레미스 DNS 서버로 전달하는 Amazon Route 53 Resolver 규칙을 생성합니다. AWS RAM을 사용하여 조직과 규칙을 공유합니다. 규칙을 모든 VPC와 연결합니다.",
            "E. efs.us-east-1.amazonaws.com 도메인에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. EC2 인스턴스가 배포된 VPC와 프라이빗 호스팅 영역을 연결합니다. 프라이빗 호스팅 영역에 fs-33444567d.efs.us-east-1.amazonaws.com에 대한 A 레코드를 생성하고 A 레코드를 EFS 마운트 포인트의 마운트 대상으로 구성합니다."
        ],
        "explanation_ko": "정답: B, D\n\n핵심: BIND DNS 서버를 대체하여 AWS 서비스 DNS 확인 + 온프레미스 DNS 전달을 구현해야 합니다.\n\nB, D가 맞는 이유:\nB) Route 53 Resolver 아웃바운드 엔드포인트를 생성하고 DHCP 옵션을 AmazonProvidedDNS로 변경하면, 모든 VPC가 Route 53 Resolver를 기본 DNS로 사용합니다.\nD) 온프레미스 도메인에 대한 Resolver 규칙을 생성하고 AWS RAM으로 조직 전체에 공유하면, 온프레미스 DNS 쿼리가 올바르게 전달됩니다.\n\n오답 분석:\nA) BIND에서 169.254.169.253으로 전달하는 것은 BIND 서버가 있는 VPC에서만 동작\nC) 인바운드 엔드포인트는 온프레미스에서 AWS 방향 쿼리용\nE) EFS 마운트 타겟은 자동 DNS가 있으므로 프라이빗 호스팅 영역이 불필요"
    },
    {
        "num": 12,
        "question": "An ecommerce company is hosting a web application on Amazon EC2 instances to handle continuously changing customer demand. The EC2\ninstances are part of an Auto Scaling group. The company wants to implement a solution to distribute traffic from customers to the EC2\ninstances. The company must encrypt all traffic at all stages between the customers and the application servers. No decryption at intermediate\npoints is allowed.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create an Application Load Balancer (ALB). Add an HTTPS listener to the ALB. Configure the Auto Scaling group to register instances with\nthe ALB's target group.",
            "B. Create an Amazon CloudFront distribution. Configure the distribution with a custom SSL/TLS certificate. Set the Auto Scaling group as the\ndistribution's origin.",
            "C. Create a Network Load Balancer (NLB). Add a TCP listener to the NLB. Configure the Auto Scaling group to register instances with the\nNLB's target group.",
            "D. Create a Gateway Load Balancer (GLB). Configure the Auto Scaling group to register instances with the GLB's target group."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 클라이언트와 서버 간 전 구간 암호화, 중간 지점에서 복호화 불가해야 합니다.\n\nC가 맞는 이유:\nNLB TCP 리스너는 TLS를 종료하지 않고 트래픽을 그대로 백엔드로 전달(패스스루)합니다. 따라서 클라이언트와 EC2 인스턴스 간 종단 간 암호화가 유지됩니다.\n\n오답 분석:\nA) ALB HTTPS 리스너는 ALB에서 TLS를 종료하여 중간 지점에서 복호화 발생\nB) CloudFront도 엣지에서 TLS를 종료하여 중간 복호화 발생\nD) Gateway Load Balancer는 보안 어플라이언스 삽입용이지 일반 웹 트래픽 분산용이 아님",
        "question_ko": "전자상거래 회사는 고객 수요 변화에 지속적으로 대응하기 위해 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹의 일부입니다. 회사는 고객에서 EC2 인스턴스로 트래픽을 분산하는 솔루션을 구현하려고 합니다. 회사는 고객과 애플리케이션 서버 간 모든 트래픽을 암호화해야 합니다. 중간 지점에서 암호 해독은 허용되지 않습니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Application Load Balancer(ALB)를 생성합니다. ALB에 HTTPS 리스너를 추가합니다. Auto Scaling 그룹이 ALB의 대상 그룹에 인스턴스를 등록하도록 구성합니다.",
            "B. Amazon CloudFront 배포를 생성합니다. 배포에 사용자 지정 SSL/TLS 인증서를 구성합니다. 배포의 원본으로 Auto Scaling 그룹을 설정합니다.",
            "C. Network Load Balancer(NLB)를 생성합니다. NLB에 TCP 리스너를 추가합니다. Auto Scaling 그룹이 NLB의 대상 그룹에 인스턴스를 등록하도록 구성합니다.",
            "D. Gateway Load Balancer(GLB)를 생성합니다. Auto Scaling 그룹이 GLB의 대상 그룹에 인스턴스를 등록하도록 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 클라이언트와 서버 간 전 구간 암호화, 중간 지점에서 복호화 불가해야 합니다.\n\nC가 맞는 이유:\nNLB TCP 리스너는 TLS를 종료하지 않고 트래픽을 그대로 백엔드로 전달(패스스루)합니다. 따라서 클라이언트와 EC2 인스턴스 간 종단 간 암호화가 유지됩니다.\n\n오답 분석:\nA) ALB HTTPS 리스너는 ALB에서 TLS를 종료하여 중간 지점에서 복호화 발생\nB) CloudFront도 엣지에서 TLS를 종료하여 중간 복호화 발생\nD) Gateway Load Balancer는 보안 어플라이언스 삽입용이지 일반 웹 트래픽 분산용이 아님"
    },
    {
        "num": 13,
        "question": "A company has two on-premises data center locations. There is a company-managed router at each data center. Each data center has a dedicated\nAWS Direct Connect connection to a Direct Connect gateway through a private virtual interface. The router for the first location is advertising 110\nroutes to the Direct Connect gateway by using BGP, and the router for the second location is advertising 60 routes to the Direct Connect gateway\nby using BGP. The Direct Connect gateway is attached to a company VPC through a virtual private gateway.\nA network engineer receives reports that resources in the VPC are not reachable from various locations in either data center. The network\nengineer checks the VPC route table and sees that the routes from the first data center location are not being populated into the route table. The\nnetwork engineer must resolve this issue in the most operationally efficient manner.\nWhat should the network engineer do to meet these requirements?",
        "options": [
            "A. Remove the Direct Connect gateway, and create a new private virtual interface from each company router to the virtual private gateway of\nthe VPC.",
            "B. Change the router configurations to summarize the advertised routes.",
            "C. Open a support ticket to increase the quota on advertised routes to the VPC route table.",
            "D. Create an AWS Transit Gateway. Attach the transit gateway to the VPC, and connect the Direct Connect gateway to the transit gateway."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Direct Connect 게이트웨이를 통해 110개 경로를 광고하는데, BGP 경로 제한(100개)을 초과합니다.\n\nB가 맞는 이유:\nDirect Connect 게이트웨이를 통한 프라이빗 VIF의 BGP 광고 경로 제한은 100개입니다. 라우터에서 경로를 요약(summarize/aggregate)하여 100개 이하로 줄이는 것이 올바른 해결책입니다.\n\n오답 분석:\nA) 가상 프라이빗 게이트웨이에 직접 VIF를 연결하면 VPC당 하나의 VIF가 필요\nC) BGP 경로 제한은 AWS 하드 리밋으로 지원 티켓으로 늘릴 수 없음\nD) Transit Gateway는 해결 가능하지만 단순 경로 요약으로 해결 가능한 문제에 과도한 변경",
        "question_ko": "회사에는 두 개의 온-프레미스 데이터 센터 위치가 있습니다. 각 데이터 센터에는 회사 관리 라우터가 있습니다. 각 데이터 센터에는 프라이빗 가상 인터페이스를 통해 Direct Connect 게이트웨이에 전용 AWS Direct Connect 연결이 있습니다. 첫 번째 위치의 라우터는 BGP를 사용하여 Direct Connect 게이트웨이에 110개의 경로를 광고하고, 두 번째 위치의 라우터는 BGP를 사용하여 Direct Connect 게이트웨이에 60개의 경로를 광고합니다. Direct Connect 게이트웨이는 가상 프라이빗 게이트웨이를 통해 회사 VPC에 연결되어 있습니다.\n네트워크 엔지니어는 두 데이터 센터 위치의 다양한 장소에서 VPC의 리소스에 접근할 수 없다는 보고를 받았습니다. 네트워크 엔지니어가 VPC 라우팅 테이블을 확인하면 첫 번째 데이터 센터 위치의 경로가 라우팅 테이블에 채워지지 않았음을 알 수 있습니다. 네트워크 엔지니어는 이 문제를 가장 효율적으로 해결해야 합니다.\n이러한 요구 사항을 충족하기 위해 네트워크 엔지니어는 어떤 작업을 해야 합니까?",
        "options_ko": [
            "A. Direct Connect 게이트웨이를 제거하고 VPC의 가상 프라이빗 게이트웨이에 각 회사 라우터에서 새 프라이빗 가상 인터페이스를 생성합니다.",
            "B. 라우터 구성을 변경하여 광고된 경로를 요약합니다.",
            "C. 지원 티켓을 열어 VPC 라우팅 테이블로의 광고된 경로 수를 늘립니다.",
            "D. AWS Transit Gateway를 생성합니다. 트랜짓 게이트웨이를 VPC에 연결하고 Direct Connect 게이트웨이를 트랜짓 게이트웨이에 연결합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Direct Connect 게이트웨이를 통해 110개 경로를 광고하는데, BGP 경로 제한(100개)을 초과합니다.\n\nB가 맞는 이유:\nDirect Connect 게이트웨이를 통한 프라이빗 VIF의 BGP 광고 경로 제한은 100개입니다. 라우터에서 경로를 요약(summarize/aggregate)하여 100개 이하로 줄이는 것이 올바른 해결책입니다.\n\n오답 분석:\nA) 가상 프라이빗 게이트웨이에 직접 VIF를 연결하면 VPC당 하나의 VIF가 필요\nC) BGP 경로 제한은 AWS 하드 리밋으로 지원 티켓으로 늘릴 수 없음\nD) Transit Gateway는 해결 가능하지만 단순 경로 요약으로 해결 가능한 문제에 과도한 변경"
    },
    {
        "num": 14,
        "question": "A company has expanded its network to the AWS Cloud by using a hybrid architecture with multiple AWS accounts. The company has set up a\nshared AWS account for the connection to its on-premises data centers and the company offices. The workloads consist of private web-based\nservices for internal use. These services run in different AWS accounts. Office-based employees consume these services by using a DNS name in\nan on-premises DNS zone that is named example.internal.\nThe process to register a new service that runs on AWS requires a manual and complicated change request to the internal DNS. The process\ninvolves many teams.\nThe company wants to update the DNS registration process by giving the service creators access that will allow them to register their DNS\nrecords. A network engineer must design a solution that will achieve this goal. The solution must maximize cost-effectiveness and must require\nthe least possible number of configuration changes.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose three.)",
        "options": [
            "A. Create a record for each service in its local private hosted zone (serviceA.account1.aws.example.internal). Provide this DNS record to the\nemployees who need access.",
            "B. Create an Amazon Route 53 Resolver inbound endpoint in the shared account VPC. Create a conditional forwarder for a domain named\naws.example.internal on the on-premises DNS servers. Set the forwarding IP addresses to the inbound endpoint's IP addresses that were\ncreated.",
            "C. Create an Amazon Route 53 Resolver rule to forward any queries made to onprem.example.internal to the on-premises DNS servers.",
            "D. Create an Amazon Route 53 private hosted zone named aws.example.internal in the shared AWS account to resolve queries for this\ndomain.",
            "E. Launch two Amazon EC2 instances in the shared AWS account. Install BIND on each instance. Create a DNS conditional forwarder on each\nBIND server to forward queries for each subdomain under aws.example.internal to the appropriate private hosted zone in each AWS account.\nCreate a conditional forwarder for a domain named aws.example.internal on the on-premises DNS servers. Set the forwarding IP addresses to\nthe IP addresses of the BIND servers.",
            "F. Create a private hosted zone in the shared AWS account for each account that runs the service. Configure the private hosted zone to\ncontain aws.example.internal in the domain (account1.aws.example.internal). Associate the private hosted zone with the VPC that runs the\nservice and the shared account VPC."
        ],
        "answers": [
            "B",
            "D",
            "F"
        ],
        "isMulti": true,
        "explanation": "정답: B, D, F\n\n핵심: 온프레미스와 AWS 간 하이브리드 DNS 확인 + 다중 계정 환경에서의 서비스 접근이 필요합니다.\n\nB, D, F가 맞는 이유:\nB) 공유 계정에 Route 53 Resolver 인바운드 엔드포인트를 생성하면 온프레미스 DNS가 AWS 도메인 쿼리를 전달할 수 있습니다.\nD) 공유 계정에 aws.example.internal 프라이빗 호스팅 영역을 생성하여 중앙에서 DNS를 관리합니다.\nF) 각 서비스 계정에 대한 서브도메인 프라이빗 호스팅 영역을 생성하고 해당 VPC와 연결합니다.\n\n오답 분석:\nA) 로컬 프라이빗 호스팅 영역만으로는 온프레미스에서 접근 불가\nC) 아웃바운드 엔드포인트만으로는 온프레미스에서 AWS 방향 쿼리 해결 불가\nE) BIND 서버는 관리 부담이 크고 Route 53 Resolver로 대체 가능",
        "question_ko": "회사는 여러 AWS 계정을 사용하는 하이브리드 아키텍처를 통해 AWS 클라우드로 네트워크를 확장했습니다. 회사는 온-프레미스 데이터 센터와 회사 사무실에 대한 연결을 위한 공유 AWS 계정을 설정했습니다. 워크로드에는 내부 사용을 위한 프라이빗 웹 기반 서비스가 포함됩니다. 이러한 서비스는 다른 AWS 계정에서 실행됩니다. 사무실 기반 직원은 on-premises DNS 영역 example.internal에서 DNS 이름을 사용하여 이러한 서비스를 사용합니다.\n새 서비스를 등록하는 프로세스에는 내부 DNS에 대한 수동 및 복잡한 변경 요청이 필요합니다. 이 프로세스에는 여러 팀이 관여합니다.\n회사는 서비스 생성자가 DNS 레코드를 등록할 수 있도록 하여 DNS 등록 프로세스를 업데이트하려고 합니다. 네트워크 엔지니어는 이 목표를 달성하기 위한 솔루션을 설계해야 합니다. 이 솔루션은 비용 효율성을 최대화하고 구성 변경을 최소화해야 합니다.\n이러한 요구 사항을 충족하기 위해 네트워크 엔지니어는 어떤 단계를 수행해야 합니까? (세 가지 선택)",
        "options_ko": [
            "A. 각 서비스에 대해 해당 로컬 프라이빗 호스팅 영역(serviceA.account1.aws.example.internal)에 레코드를 생성합니다. 이 DNS 레코드를 액세스해야 하는 직원에게 제공합니다.",
            "B. 공유 계정 VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온-프레미스 DNS 서버에 aws.example.internal이라는 도메인에 대한 조건부 전달자를 생성하고 전달 IP 주소를 생성된 인바운드 엔드포인트의 IP 주소로 설정합니다.",
            "C. onprem.example.internal로 이루어진 쿼리를 온-프레미스 DNS 서버로 전달하는 Amazon Route 53 Resolver 규칙을 생성합니다.",
            "D. 공유 AWS 계정에 aws.example.internal이라는 Amazon Route 53 프라이빗 호스팅 영역을 생성하여 이 도메인에 대한 쿼리를 확인합니다.",
            "E. 공유 AWS 계정에 두 개의 Amazon EC2 인스턴스를 시작합니다. 각 인스턴스에 BIND를 설치합니다. 각 BIND 서버에 aws.example.internal 하위 도메인에 대한 쿼리를 각 AWS 계정의 적절한 프라이빗 호스팅 영역으로 전달하는 DNS 조건부 전달자를 생성합니다. 온-프레미스 DNS 서버에 aws.example.internal이라는 도메인에 대한 조건부 전달자를 생성하고 전달 IP 주소를 BIND 서버의 IP 주소로 설정합니다.",
            "F. 공유 AWS 계정에 각 서비스 실행 계정에 대한 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역에 aws.example.internal 도메인(account1.aws.example.internal)을 구성합니다. 프라이빗 호스팅 영역을 서비스가 실행되는 VPC와 공유 계정 VPC와 연결합니다."
        ],
        "explanation_ko": "정답: B, D, F\n\n핵심: 온프레미스와 AWS 간 하이브리드 DNS 확인 + 다중 계정 환경에서의 서비스 접근이 필요합니다.\n\nB, D, F가 맞는 이유:\nB) 공유 계정에 Route 53 Resolver 인바운드 엔드포인트를 생성하면 온프레미스 DNS가 AWS 도메인 쿼리를 전달할 수 있습니다.\nD) 공유 계정에 aws.example.internal 프라이빗 호스팅 영역을 생성하여 중앙에서 DNS를 관리합니다.\nF) 각 서비스 계정에 대한 서브도메인 프라이빗 호스팅 영역을 생성하고 해당 VPC와 연결합니다.\n\n오답 분석:\nA) 로컬 프라이빗 호스팅 영역만으로는 온프레미스에서 접근 불가\nC) 아웃바운드 엔드포인트만으로는 온프레미스에서 AWS 방향 쿼리 해결 불가\nE) BIND 서버는 관리 부담이 크고 Route 53 Resolver로 대체 가능"
    },
    {
        "num": 15,
        "question": "A company has multiple AWS accounts. Each account contains one or more VPCs. A new security guideline requires the inspection of all traffic\nbetween VPCs.\nThe company has deployed a transit gateway that provides connectivity between all VPCs. The company also has deployed a shared services VPC\nwith Amazon EC2 instances that include IDS services for stateful inspection. The EC2 instances are deployed across three Availability Zones. The\ncompany has set up VPC associations and routing on the transit gateway. The company has migrated a few test VPCs to the new solution for\ntraffic inspection.\nSoon after the configuration of routing, the company receives reports of intermittent connections for traffic that crosses Availability Zones.\nWhat should a network engineer do to resolve this issue?",
        "options": [
            "A. Modify the transit gateway VPC attachment on the shared services VPC by enabling cross-Availability Zone load balancing.",
            "B. Modify the transit gateway VPC attachment on the shared services VPC by enabling appliance mode support.",
            "C. Modify the transit gateway by selecting VPN equal-cost multi-path (ECMP) routing support.",
            "D. Modify the transit gateway by selecting multicast support."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽이 공유 서비스 VPC의 IDS를 거쳐야 하는데, 상태 저장 검사가 실패합니다.\n\nB가 맞는 이유:\nTransit Gateway의 기본 동작은 각 AZ에서 독립적으로 트래픽을 라우팅합니다. 어플라이언스 모드를 활성화하면 동일 흐름의 트래픽이 같은 AZ의 어플라이언스로 라우팅되어 상태 저장 검사가 정상 동작합니다.\n\n오답 분석:\nA) AZ 간 로드 밸런싱은 NLB/ALB 기능이지 Transit Gateway 연결 기능이 아님\nC) VPN ECMP는 VPN 대역폭 확장용이지 어플라이언스 라우팅과 무관\nD) 멀티캐스트는 이 시나리오와 무관",
        "question_ko": "회사에는 여러 AWS 계정이 있습니다. 각 계정에는 하나 이상의 VPC가 포함됩니다. 새 보안 지침은 VPC 간 모든 트래픽을 검사해야 합니다.\n회사는 모든 VPC 간 연결성을 제공하는 전송 게이트웨이를 배포했습니다. 회사는 또한 상태 저장 검사를 위한 IDS 서비스가 포함된 Amazon EC2 인스턴스가 있는 공유 서비스 VPC를 배포했습니다. EC2 인스턴스는 3개의 가용 영역에 걸쳐 배포되어 있습니다. 회사는 전송 게이트웨이에 VPC 연결과 라우팅을 설정했습니다. 회사는 새 솔루션으로 몇 개의 테스트 VPC를 마이그레이션하여 트래픽 검사를 수행했습니다.\n라우팅 구성 후 곧 가용 영역을 가로지르는 트래픽에 대한 간헐적인 연결 문제가 발생했습니다.\n이 문제를 해결하려면 네트워크 엔지니어는 어떤 작업을 해야 합니까?",
        "options_ko": [
            "A. 공유 서비스 VPC의 전송 게이트웨이 VPC 연결에서 가용 영역 간 로드 밸런싱을 활성화합니다.",
            "B. 공유 서비스 VPC의 전송 게이트웨이 VPC 연결에서 어플라이언스 모드 지원을 활성화합니다.",
            "C. 전송 게이트웨이에서 VPN ECMP(Equal-Cost Multi-Path) 라우팅 지원을 선택합니다.",
            "D. 전송 게이트웨이에서 멀티캐스트 지원을 선택합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽이 공유 서비스 VPC의 IDS를 거쳐야 하는데, 상태 저장 검사가 실패합니다.\n\nB가 맞는 이유:\nTransit Gateway의 기본 동작은 각 AZ에서 독립적으로 트래픽을 라우팅합니다. 어플라이언스 모드를 활성화하면 동일 흐름의 트래픽이 같은 AZ의 어플라이언스로 라우팅되어 상태 저장 검사가 정상 동작합니다.\n\n오답 분석:\nA) AZ 간 로드 밸런싱은 NLB/ALB 기능이지 Transit Gateway 연결 기능이 아님\nC) VPN ECMP는 VPN 대역폭 확장용이지 어플라이언스 라우팅과 무관\nD) 멀티캐스트는 이 시나리오와 무관"
    },
    {
        "num": 16,
        "question": "A company is using a NAT gateway to allow internet connectivity for private subnets in a VPC in the us-west-2 Region. After a security audit, the\ncompany needs to remove the NAT gateway.\nIn the private subnets, the company has resources that use the unified Amazon CloudWatch agent. A network engineer must create a solution to\nensure that the unified CloudWatch agent continues to work after the removal of the NAT gateway.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose three.)",
        "options": [
            "A. Validate that private DNS is enabled on the VPC by setting the enableDnsHostnames VPC attribute and the enableDnsSupport VPC attribute\nto true.",
            "B. Create a new security group with an entry to allow outbound traffic that uses the TCP protocol on port 443 to destination 0.0.0.0/0",
            "C. Create a new security group with entries to allow inbound traffic that uses the TCP protocol on port 443 from the IP prefixes of the private\nsubnets.",
            "D. Create the following interface VPC endpoints in the VPC: com.amazonaws.us-west-2.logs and com.amazonaws.us-west-2.monitoring.\nAssociate the new security group with the endpoint network interfaces.",
            "E. Create the following interface VPC endpoint in the VPC: com.amazonaws.us-west-2.cloudwatch. Associate the new security group with the\nendpoint network interfaces.",
            "F. Associate the VPC endpoint or endpoints with route tables that the private subnets use."
        ],
        "answers": [
            "A",
            "C",
            "D"
        ],
        "isMulti": true,
        "explanation": "정답: A, C, D\n\n핵심: NAT 게이트웨이 제거 후에도 CloudWatch 에이전트가 로그/지표를 전송할 수 있어야 합니다.\n\nA, C, D가 맞는 이유:\nA) VPC 엔드포인트가 프라이빗 DNS를 사용하려면 enableDnsHostnames와 enableDnsSupport가 true여야 합니다.\nC) 엔드포인트 ENI의 보안 그룹은 프라이빗 서브넷에서 오는 HTTPS(443) 인바운드를 허용해야 합니다.\nD) CloudWatch 에이전트는 logs와 monitoring 두 서비스 엔드포인트가 필요합니다.\n\n오답 분석:\nB) 0.0.0.0/0 대상은 너무 광범위함\nE) cloudwatch 엔드포인트는 대시보드/알람용이지 에이전트의 로그/지표 전송용이 아님\nF) 인터페이스 VPC 엔드포인트는 라우팅 테이블 연결이 필요 없음",
        "question_ko": "회사에서 NAT 게이트웨이를 사용하여 us-west-2 리전의 VPC 내 프라이빗 서브넷에 인터넷 연결을 허용하고 있습니다. 보안 감사 후, 회사에서 NAT 게이트웨이를 제거해야 합니다.\n프라이빗 서브넷에서 통합 Amazon CloudWatch 에이전트를 사용하는 리소스가 있습니다. 네트워크 엔지니어는 NAT 게이트웨이 제거 후에도 통합 CloudWatch 에이전트가 계속 작동하도록 해야 합니다.\n이러한 요구 사항을 충족하기 위해 네트워크 엔지니어가 수행해야 할 단계는 무엇입니까? (세 가지를 선택하시오.)",
        "options_ko": [
            "A. VPC에서 enableDnsHostnames 및 enableDnsSupport 속성을 true로 설정하여 프라이빗 DNS가 활성화되었는지 확인합니다.",
            "B. TCP 프로토콜에 대한 포트 443 및 대상 0.0.0.0/0을 허용하는 새 보안 그룹을 생성합니다.",
            "C. TCP 프로토콜에 대한 포트 443 및 프라이빗 서브넷 IP 프리픽스에서 수신 트래픽을 허용하는 새 보안 그룹을 생성합니다.",
            "D. VPC에 com.amazonaws.us-west-2.logs 및 com.amazonaws.us-west-2.monitoring 인터페이스 VPC 엔드포인트를 생성하고 새 보안 그룹을 엔드포인트 네트워크 인터페이스에 연결합니다.",
            "E. VPC에 com.amazonaws.us-west-2.cloudwatch 인터페이스 VPC 엔드포인트를 생성하고 새 보안 그룹을 엔드포인트 네트워크 인터페이스에 연결합니다.",
            "F. VPC 엔드포인트 또는 엔드포인트를 프라이빗 서브넷에서 사용하는 라우팅 테이블과 연결합니다."
        ],
        "explanation_ko": "정답: A, C, D\n\n핵심: NAT 게이트웨이 제거 후에도 CloudWatch 에이전트가 로그/지표를 전송할 수 있어야 합니다.\n\nA, C, D가 맞는 이유:\nA) VPC 엔드포인트가 프라이빗 DNS를 사용하려면 enableDnsHostnames와 enableDnsSupport가 true여야 합니다.\nC) 엔드포인트 ENI의 보안 그룹은 프라이빗 서브넷에서 오는 HTTPS(443) 인바운드를 허용해야 합니다.\nD) CloudWatch 에이전트는 logs와 monitoring 두 서비스 엔드포인트가 필요합니다.\n\n오답 분석:\nB) 0.0.0.0/0 대상은 너무 광범위함\nE) cloudwatch 엔드포인트는 대시보드/알람용이지 에이전트의 로그/지표 전송용이 아님\nF) 인터페이스 VPC 엔드포인트는 라우팅 테이블 연결이 필요 없음"
    },
    {
        "num": 17,
        "question": "An international company provides early warning about tsunamis. The company plans to use IoT devices to monitor sea waves around the world.\nThe data that is collected by the IoT devices must reach the company’s infrastructure on AWS as quickly as possible. The company is using three\noperation centers around the world. Each operation center is connected to AWS through Its own AWS Direct Connect connection. Each operation\ncenter is connected to the internet through at least two upstream internet service providers.\nThe company has its own provider-independent (PI) address space. The IoT devices use TCP protocols for reliable transmission of the data they\ncollect. The IoT devices have both landline and mobile internet connectivity. The infrastructure and the solution will be deployed in multiple AWS\nRegions. The company will use Amazon Route 53 for DNS services.\nA network engineer needs to design connectivity between the IoT devices and the services that run in the AWS Cloud.\nWhich solution will meet these requirements with the HIGHEST availability?",
        "options": [
            "A. Set up an Amazon CloudFront distribution with origin failover. Create an origin group for each Region where the solution is deployed.",
            "B. Set up Route 53 latency-based routing. Add latency alias records. For the latency alias records, set the value of Evaluate Target Health to\nYes.",
            "C. Set up an accelerator in AWS Global Accelerator. Configure Regional endpoint groups and health checks.",
            "D. Set up Bring Your Own IP (BYOIP) addresses. Use the same PI addresses for each Region where the solution is deployed."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 전 세계 IoT 디바이스에서 AWS로 최소 지연 시간으로 데이터를 전달해야 합니다.\n\nC가 맞는 이유:\nAWS Global Accelerator는 AWS 글로벌 네트워크를 활용하여 가장 가까운 엣지 로케이션으로 트래픽을 라우팅합니다. 고정 Anycast IP로 접속하므로 DNS 전파 지연 없이 즉시 최적 경로를 사용합니다.\n\n오답 분석:\nA) CloudFront는 HTTP/HTTPS 콘텐츠 전송에 최적화되어 있으며 IoT 데이터 수집에는 부적합\nB) Route 53 지연 기반 라우팅은 DNS 레벨이므로 TTL에 따른 전파 지연이 있음\nD) BYOIP는 자체 IP를 AWS에 가져오는 것이지 글로벌 라우팅 최적화와 무관",
        "question_ko": "국제 회사에서는 쓰나미에 대한 조기 경보를 제공하고 있습니다. 회사는 전 세계 해안가의 파도를 모니터링하기 위해 IoT 디바이스를 사용할 계획입니다.\nIoT 디바이스가 수집한 데이터는 가능한 한 빨리 AWS에 있는 회사 인프라에 도달해야 합니다. 회사는 전 세계에 3개의 운영 센터를 사용하고 있습니다. 각 운영 센터는 자체 AWS Direct Connect 연결을 통해 AWS에 연결됩니다. 각 운영 센터는 최소 2개의 상위 인터넷 서비스 공급자를 통해 인터넷에 연결됩니다.\n회사는 자체 공급자 독립 주소 공간을 사용하고 있습니다. IoT 디바이스는 수집한 데이터를 안정적으로 전송하기 위해 TCP 프로토콜을 사용합니다. IoT 디바이스는 유선 및 모바일 인터넷 연결을 모두 사용합니다. 인프라와 솔루션은 여러 AWS 리전에 배포될 것입니다. 회사는 Amazon Route 53을 DNS 서비스로 사용할 것입니다.\n네트워크 엔지니어는 IoT 디바이스와 AWS 클라우드에서 실행되는 서비스 간의 연결성을 설계해야 합니다.\n가장 높은 가용성을 제공하는 해결책은 무엇입니까?",
        "options_ko": [
            "A. Amazon CloudFront 배포판을 설정하고 원본 장애 조치를 구성합니다. 배포된 각 리전에 대한 원본 그룹을 생성합니다.",
            "B. Route 53 지연 기반 라우팅을 설정합니다. 지연 별칭 레코드를 추가하고 지연 별칭 레코드의 Evaluate Target Health를 Yes로 설정합니다.",
            "C. AWS Global Accelerator 가속기를 설정합니다. 리전별 엔드포인트 그룹과 상태 검사를 구성합니다.",
            "D. Bring Your Own IP(BYOIP) 주소를 설정합니다. 솔루션이 배포된 각 리전에 동일한 공급자 독립 주소를 사용합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 전 세계 IoT 디바이스에서 AWS로 최소 지연 시간으로 데이터를 전달해야 합니다.\n\nC가 맞는 이유:\nAWS Global Accelerator는 AWS 글로벌 네트워크를 활용하여 가장 가까운 엣지 로케이션으로 트래픽을 라우팅합니다. 고정 Anycast IP로 접속하므로 DNS 전파 지연 없이 즉시 최적 경로를 사용합니다.\n\n오답 분석:\nA) CloudFront는 HTTP/HTTPS 콘텐츠 전송에 최적화되어 있으며 IoT 데이터 수집에는 부적합\nB) Route 53 지연 기반 라우팅은 DNS 레벨이므로 TTL에 따른 전파 지연이 있음\nD) BYOIP는 자체 IP를 AWS에 가져오는 것이지 글로벌 라우팅 최적화와 무관"
    },
    {
        "num": 18,
        "question": "A company is planning a migration of its critical workloads from an on-premises data center to Amazon EC2 instances. The plan includes a new\n10 Gbps AWS Direct Connect dedicated connection from the on-premises data center to a VPC that is attached to a transit gateway. The migration\nmust occur over encrypted paths between the on-premises data center and the AWS Cloud.\nWhich solution will meet these requirements while providing the HIGHEST throughput?",
        "options": [
            "A. Configure a public VIF on the Direct Connect connection. Configure an AWS Site-to-Site VPN connection to the transit gateway as a VPN\nattachment.",
            "B. Configure a transit VIF on the Direct Connect connection. Configure an IPsec VPN connection to an EC2 instance that is running third-party\nVPN software.",
            "C. Configure MACsec for the Direct Connect connection. Configure a transit VIF to a Direct Connect gateway that is associated with the transit\ngateway.",
            "D. Configure a public VIF on the Direct Connect connection. Configure two AWS Site-to-Site VPN connections to the transit gateway. Enable\nequal-cost multi-path (ECMP) routing."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 10Gbps Direct Connect를 통한 암호화된 마이그레이션 경로가 필요합니다.\n\nC가 맞는 이유:\nMACsec은 Direct Connect에서 L2 레벨 암호화를 제공하며 10Gbps 대역폭을 그대로 활용할 수 있습니다. 트랜짓 VIF를 통해 트랜짓 게이트웨이에 연결하면 여러 VPC로의 라우팅이 가능합니다.\n\n오답 분석:\nA) 퍼블릭 VIF + Site-to-Site VPN은 암호화를 제공하지만 VPN 터널당 최대 1.25Gbps로 10Gbps 활용 불가\nB) 타사 VPN 소프트웨어는 관리 부담이 크고 EC2 인스턴스 성능에 제한됨\nD) 퍼블릭 VIF + 2개 VPN + ECMP도 최대 2.5Gbps로 10Gbps에 미달",
        "question_ko": "회사는 온프레미스 데이터 센터에서 Amazon EC2 인스턴스로 중요 워크로드 마이그레이션 계획을 수립했습니다. 이 계획에는 온프레미스 데이터 센터와 트랜짓 게이트웨이에 연결된 VPC 간의 새로운 10Gbps AWS Direct Connect 전용 연결이 포함됩니다. 마이그레이션은 온프레미스 데이터 센터와 AWS 클라우드 간에 암호화된 경로를 통해 이루어져야 합니다.\n가장 높은 처리량을 제공하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 연결에 퍼블릭 VIF를 구성하고 트랜짓 게이트웨이에 AWS Site-to-Site VPN 연결을 구성합니다.",
            "B. Direct Connect 연결에 트랜짓 VIF를 구성하고 타사 VPN 소프트웨어를 실행하는 EC2 인스턴스에 IPsec VPN 연결을 구성합니다.",
            "C. Direct Connect 연결에 MACsec을 구성하고 트랜짓 게이트웨이와 연결된 Direct Connect 게이트웨이에 트랜짓 VIF를 구성합니다.",
            "D. Direct Connect 연결에 퍼블릭 VIF를 구성하고 트랜짓 게이트웨이에 두 개의 AWS Site-to-Site VPN 연결을 구성합니다. 그리고 equal-cost multi-path(ECMP) 라우팅을 활성화합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 10Gbps Direct Connect를 통한 암호화된 마이그레이션 경로가 필요합니다.\n\nC가 맞는 이유:\nMACsec은 Direct Connect에서 L2 레벨 암호화를 제공하며 10Gbps 대역폭을 그대로 활용할 수 있습니다. 트랜짓 VIF를 통해 트랜짓 게이트웨이에 연결하면 여러 VPC로의 라우팅이 가능합니다.\n\n오답 분석:\nA) 퍼블릭 VIF + Site-to-Site VPN은 암호화를 제공하지만 VPN 터널당 최대 1.25Gbps로 10Gbps 활용 불가\nB) 타사 VPN 소프트웨어는 관리 부담이 크고 EC2 인스턴스 성능에 제한됨\nD) 퍼블릭 VIF + 2개 VPN + ECMP도 최대 2.5Gbps로 10Gbps에 미달"
    },
    {
        "num": 19,
        "question": "A network engineer must develop an AWS CloudFormation template that can create a virtual private gateway, a customer gateway, a VPN\nconnection, and static routes in a route table. During testing of the template, the network engineer notes that the CloudFormation template has\nencountered an error and is rolling back.\nWhat should the network engineer do to resolve the error?",
        "options": [
            "A. Change the order of resource creation in the CloudFormation template.",
            "B. Add the DependsOn attribute to the resource declaration for the virtual private gateway. Specify the route table entry resource.",
            "C. Add a wait condition in the template to wait for the creation of the virtual private gateway.",
            "D. Add the DependsOn attribute to the resource declaration for the route table entry. Specify the virtual private gateway resource."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: CloudFormation에서 VPN 연결 관련 리소스 생성 시 종속성 오류가 발생합니다.\n\nD가 맞는 이유:\n정적 경로(라우팅 테이블 항목)는 VPN 연결이 완전히 생성된 후에야 추가할 수 있습니다. DependsOn 속성을 라우팅 테이블 항목에 추가하고 VPN 연결 리소스를 지정하면, CloudFormation이 올바른 순서로 리소스를 생성합니다.\n\n오답 분석:\nA) CloudFormation은 리소스 선언 순서가 아닌 종속성 그래프로 생성 순서를 결정\nB) 가상 프라이빗 게이트웨이가 라우팅 테이블에 종속되는 것은 순서가 반대\nC) 대기 조건은 외부 신호를 기다리는 용도이지 리소스 간 종속성 해결용이 아님",
        "question_ko": "네트워크 엔지니어는 가상 프라이빗 게이트웨이, 고객 게이트웨이, VPN 연결 및 라우팅 테이블의 정적 경로를 생성할 수 있는 AWS CloudFormation 템플릿을 개발해야 합니다. 템플릿 테스트 중에 CloudFormation 템플릿에 오류가 발생하고 롤백되는 것을 확인했습니다.\n이 오류를 해결하려면 어떻게 해야 합니까?",
        "options_ko": [
            "A. CloudFormation 템플릿의 리소스 생성 순서를 변경합니다.",
            "B. 가상 프라이빗 게이트웨이 리소스 선언에 DependsOn 속성을 추가하고 라우팅 테이블 항목 리소스를 지정합니다.",
            "C. 템플릿에 대기 조건을 추가하여 가상 프라이빗 게이트웨이 생성을 기다립니다.",
            "D. 라우팅 테이블 항목 리소스 선언에 DependsOn 속성을 추가하고 가상 프라이빗 게이트웨이 리소스를 지정합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: CloudFormation에서 VPN 연결 관련 리소스 생성 시 종속성 오류가 발생합니다.\n\nD가 맞는 이유:\n정적 경로(라우팅 테이블 항목)는 VPN 연결이 완전히 생성된 후에야 추가할 수 있습니다. DependsOn 속성을 라우팅 테이블 항목에 추가하고 VPN 연결 리소스를 지정하면, CloudFormation이 올바른 순서로 리소스를 생성합니다.\n\n오답 분석:\nA) CloudFormation은 리소스 선언 순서가 아닌 종속성 그래프로 생성 순서를 결정\nB) 가상 프라이빗 게이트웨이가 라우팅 테이블에 종속되는 것은 순서가 반대\nC) 대기 조건은 외부 신호를 기다리는 용도이지 리소스 간 종속성 해결용이 아님"
    },
    {
        "num": 20,
        "question": "A company operates its IT services through a multi-site hybrid infrastructure. The company deploys resources on AWS in the us-east-1 Region and\nin the eu-west-2 Region. The company also deploys resources in its own data centers that are located in the United States (US) and in the United\nKingdom (UK). In both AWS Regions, the company uses a transit gateway to connect 15 VPCs to each other. The company has created a transit\ngateway peering connection between the two transit gateways. The VPC CIDR blocks do not overlap with each other or with IP addresses used\nwithin the data centers. The VPC CIDR prefixes can also be aggregated either on a Regional level or for the company's entire AWS environment.\nThe data centers are connected to each other by a private WAN connection. IP routing information is exchanged dynamically through Interior BGP\n(iBGP) sessions. The data centers maintain connectivity to AWS through one AWS Direct Connect connection in the US and one Direct Connect\nconnection in the UK. Each Direct Connect connection is terminated on a Direct Connect gateway and is associated with a local transit gateway\nthrough a transit VIF.\nTraffic follows the shortest geographical path from source to destination. For example, packets from the UK data center that are targeted to\nresources in eu-west-2 travel across the local Direct Connect connection. In cases of cross-Region data transfers, such as from the UK data center\nto VPCs in us-east-1, the private WAN connection must be used to minimize costs on AWS. A network engineer has configured each transit\ngateway association on the Direct Connect gateway to advertise VPC-specific CIDR IP prefixes only from the local Region. The routes toward the\nother Region must be learned through BGP from the routers in the other data center in the original, non-aggregated form.\nThe company recently experienced a problem with cross-Region data transfers because of issues with its private WAN connection. The network\nengineer needs to modify the routing setup to prevent similar interruptions in the future. The solution cannot modify the original traffic routing\ngoal when the network is operating normally.\nWhich modifications will meet these requirements? (Choose two.)",
        "options": [
            "A. Remove all the VPC CIDR prefixes from the list of subnets advertised through the local Direct Connect connection. Add the company's\nentire AWS environment aggregate route to the list of subnets advertised through the local Direct Connect connection.",
            "B. Add the CIDR prefixes from the other Region VPCs and the local VPC CIDR blocks to the list of subnets advertised through the local Direct\nConnect connection. Configure data center routers to make routing decisions based on the BGP communities received.",
            "C. Add the aggregate IP prefix for the other Region and the local VPC CIDR blocks to the list of subnets advertised through the local Direct\nConnect connection.",
            "D. Add the aggregate IP prefix for the company's entire AWS environment and the local VPC CIDR blocks to the list of subnets advertised\nthrough the local Direct Connect connection.",
            "E. Remove all the VPC CIDR prefixes from the list of subnets advertised through the local Direct Connect connection. Add both Regional\naggregate IP prefixes to the list of subnets advertised through the Direct Connect connection on both sides of the network. Configure data\ncenter routers to make routing decisions based on the BGP communities received."
        ],
        "answers": [
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: C, E\n\n핵심: 다중 리전 + 다중 데이터 센터 환경에서 Direct Connect 경로 광고를 최적화해야 합니다.\n\nC, E가 맞는 이유:\nC) 로컬 Direct Connect에서 다른 리전의 집계 IP 접두사와 로컬 VPC CIDR을 광고하면 데이터 센터 라우터가 최적 경로를 선택할 수 있습니다.\nE) 양쪽 네트워크의 Direct Connect에서 리전별 집계 접두사를 광고하고 BGP 커뮤니티를 기반으로 라우팅 결정을 내리면 트래픽이 최적 경로로 흐릅니다.\n\n오답 분석:\nA) 전체 AWS 환경 집계 경로만 광고하면 세밀한 라우팅 결정 불가\nB) 모든 VPC CIDR을 개별 광고하면 경로 수가 너무 많아짐\nD) 전체 집계 + 로컬 CIDR은 다른 리전으로의 최적 경로를 구분할 수 없음",
        "question_ko": "회사는 다중 사이트 하이브리드 인프라를 통해 IT 서비스를 운영하고 있습니다. 회사는 us-east-1 리전과 eu-west-2 리전에서 AWS 리소스를 배포하고 있습니다. 또한 미국(US)과 영국(UK)에 있는 자체 데이터 센터에도 리소스를 배포하고 있습니다. 두 AWS 리전에서 회사는 15개의 VPC를 서로 연결하기 위해 트랜짓 게이트웨이를 사용합니다. 회사는 두 트랜짓 게이트웨이 간에 트랜짓 게이트웨이 피어링 연결을 생성했습니다. VPC CIDR 블록은 서로 또는 데이터 센터에서 사용되는 IP 주소와 중복되지 않습니다. VPC CIDR 접두사는 리전 수준 또는 회사 전체 AWS 환경 수준에서 집계될 수도 있습니다.\n데이터 센터는 전용 WAN 연결을 통해 서로 연결됩니다. IP 라우팅 정보는 Interior BGP(iBGP) 세션을 통해 동적으로 교환됩니다. 데이터 센터는 미국의 한 AWS Direct Connect 연결과 영국의 한 Direct Connect 연결을 통해 AWS에 연결을 유지합니다. 각 Direct Connect 연결은 Direct Connect 게이트웨이에서 종료되며 트랜짓 VIF를 통해 로컬 트랜짓 게이트웨이와 연결됩니다.\n트래픽은 소스에서 대상까지 가장 짧은 지리적 경로를 따릅니다. 예를 들어, UK 데이터 센터에서 eu-west-2 리전의 리소스로 향하는 패킷은 로컬 Direct Connect 연결을 통과합니다. 리전 간 데이터 전송(예: UK 데이터 센터에서 us-east-1 VPC로)의 경우 비용을 최소화하기 위해 전용 WAN 연결을 사용해야 합니다. 네트워크 엔지니어는 각 트랜짓 게이트웨이 연결에서 Direct Connect 게이트웨이를 통해 VPC별 CIDR IP 접두사만 광고하도록 구성했습니다. 다른 리전으로 향하는 경로는 원래 비집계 형태로 다른 데이터 센터의 라우터를 통해 BGP를 통해 학습해야 합니다.\n회사는 최근 개인 WAN 연결 문제로 인해 리전 간 데이터 전송에 문제가 발생했습니다. 네트워크 엔지니어는 유사한 중단을 방지하기 위해 라우팅 설정을 수정해야 합니다. 이 솔루션은 네트워크가 정상적으로 작동할 때의 원래 트래픽 라우팅 목표를 수정할 수 없습니다.\n어떤 수정 사항이 이러한 요구 사항을 충족할까요? (두 가지를 선택하시오.)",
        "options_ko": [
            "A. 로컬 Direct Connect 연결을 통해 광고되는 서브넷 목록에서 모든 VPC CIDR 접두사를 제거하고 회사의 전체 AWS 환경 집계 경로를 추가합니다.",
            "B. 로컬 Direct Connect 연결을 통해 다른 리전 VPC CIDR 접두사와 로컬 VPC CIDR 블록을 광고하도록 추가합니다. 수신된 BGP 커뮤니티를 기반으로 데이터 센터 라우터가 라우팅 결정을 내리도록 구성합니다.",
            "C. 로컬 Direct Connect 연결을 통해 다른 리전의 집계 IP 접두사와 로컬 VPC CIDR 블록을 추가합니다.",
            "D. 로컬 Direct Connect 연결을 통해 회사 전체 AWS 환경의 집계 IP 접두사와 로컬 VPC CIDR 블록을 추가합니다.",
            "E. 로컬 Direct Connect 연결을 통해 광고되는 모든 VPC CIDR 접두사를 제거하고 양쪽 네트워크의 Direct Connect 연결을 통해 두 개의 리전별 집계 IP 접두사를 추가합니다. 수신된 BGP 커뮤니티를 기반으로 데이터 센터 라우터가 라우팅 결정을 내리도록 구성합니다."
        ],
        "explanation_ko": "정답: C, E\n\n핵심: 다중 리전 + 다중 데이터 센터 환경에서 Direct Connect 경로 광고를 최적화해야 합니다.\n\nC, E가 맞는 이유:\nC) 로컬 Direct Connect에서 다른 리전의 집계 IP 접두사와 로컬 VPC CIDR을 광고하면 데이터 센터 라우터가 최적 경로를 선택할 수 있습니다.\nE) 양쪽 네트워크의 Direct Connect에서 리전별 집계 접두사를 광고하고 BGP 커뮤니티를 기반으로 라우팅 결정을 내리면 트래픽이 최적 경로로 흐릅니다.\n\n오답 분석:\nA) 전체 AWS 환경 집계 경로만 광고하면 세밀한 라우팅 결정 불가\nB) 모든 VPC CIDR을 개별 광고하면 경로 수가 너무 많아짐\nD) 전체 집계 + 로컬 CIDR은 다른 리전으로의 최적 경로를 구분할 수 없음"
    },
    {
        "num": 21,
        "question": "A company’s network engineer needs to design a new solution to help troubleshoot and detect network anomalies. The network engineer has\nconfigured Traffic Mirroring. However, the mirrored traffic is overwhelming the Amazon EC2 instance that is the traffic mirror target. The EC2\ninstance hosts tools that the company’s security team uses to analyze the traffic. The network engineer needs to design a highly available solution\nthat can scale to meet the demand of the mirrored traffic.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy a Network Load Balancer (NLB) as the traffic mirror target. Behind the NLB. deploy a fleet of EC2 instances in an Auto Scaling\ngroup. Use Traffic Mirroring as necessary.",
            "B. Deploy an Application Load Balancer (ALB) as the traffic mirror target. Behind the ALB, deploy a fleet of EC2 instances in an Auto Scaling\ngroup. Use Traffic Mirroring only during non-business hours.",
            "C. Deploy a Gateway Load Balancer (GLB) as the traffic mirror target. Behind the GLB. deploy a fleet of EC2 instances in an Auto Scaling\ngroup. Use Traffic Mirroring as necessary.",
            "D. Deploy an Application Load Balancer (ALB) with an HTTPS listener as the traffic mirror target. Behind the ALB. deploy a fleet of EC2\ninstances in an Auto Scaling group. Use Traffic Mirroring only during active events or business hours."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: Traffic Mirroring 트래픽이 단일 EC2 인스턴스를 압도하므로 확장 가능한 솔루션이 필요합니다.\n\nA가 맞는 이유:\nNLB를 트래픽 미러 대상으로 설정하고 뒤에 Auto Scaling 그룹을 배치하면, 미러링된 트래픽이 여러 분석 인스턴스로 분산됩니다. NLB는 UDP VXLAN 트래픽(Traffic Mirroring 프로토콜)을 지원하며 L4에서 동작하므로 적합합니다.\n\n오답 분석:\nB) ALB는 HTTP/HTTPS(L7)만 지원하여 VXLAN 캡슐화된 미러 트래픽 처리 불가\nC) GLB는 인라인 트래픽 검사용이지 Traffic Mirroring 대상으로 지원되지 않음\nD) ALB는 미러 트래픽 처리 불가 + 업무 시간 외 제한은 요구사항에 없음",
        "question_ko": "네트워크 엔지니어는 네트워크 이상 징후를 감지하고 문제를 해결하기 위해 새로운 솔루션을 설계해야 합니다. 엔지니어는 Traffic Mirroring을 구성했지만, 미러링된 트래픽이 분석 도구를 호스팅하는 Amazon EC2 인스턴스를 압도하고 있습니다. 이를 해결하기 위해 엔지니어는 확장 가능하고 고가용성 솔루션을 설계해야 합니다.",
        "options_ko": [
            "A. NLB(Network Load Balancer)를 트래픽 미러 대상으로 배포합니다. NLB 뒤에 Auto Scaling 그룹에 EC2 인스턴스 플릿을 배포합니다. 필요에 따라 Traffic Mirroring을 사용합니다.",
            "B. ALB(Application Load Balancer)를 트래픽 미러 대상으로 배포합니다. ALB 뒤에 Auto Scaling 그룹에 EC2 인스턴스 플릿을 배포합니다. 업무 시간 외에만 Traffic Mirroring을 사용합니다.",
            "C. GLB(Gateway Load Balancer)를 트래픽 미러 대상으로 배포합니다. GLB 뒤에 Auto Scaling 그룹에 EC2 인스턴스 플릿을 배포합니다. 필요에 따라 Traffic Mirroring을 사용합니다.",
            "D. HTTPS 리스너가 있는 ALB(Application Load Balancer)를 트래픽 미러 대상으로 배포합니다. ALB 뒤에 Auto Scaling 그룹에 EC2 인스턴스 플릿을 배포합니다. 이벤트 발생 시 또는 업무 시간 중에만 Traffic Mirroring을 사용합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: Traffic Mirroring 트래픽이 단일 EC2 인스턴스를 압도하므로 확장 가능한 솔루션이 필요합니다.\n\nA가 맞는 이유:\nNLB를 트래픽 미러 대상으로 설정하고 뒤에 Auto Scaling 그룹을 배치하면, 미러링된 트래픽이 여러 분석 인스턴스로 분산됩니다. NLB는 UDP VXLAN 트래픽(Traffic Mirroring 프로토콜)을 지원하며 L4에서 동작하므로 적합합니다.\n\n오답 분석:\nB) ALB는 HTTP/HTTPS(L7)만 지원하여 VXLAN 캡슐화된 미러 트래픽 처리 불가\nC) GLB는 인라인 트래픽 검사용이지 Traffic Mirroring 대상으로 지원되지 않음\nD) ALB는 미러 트래픽 처리 불가 + 업무 시간 외 제한은 요구사항에 없음"
    },
    {
        "num": 22,
        "question": "A company uses a hybrid architecture and has an AWS Direct Connect connection between its on-premises data center and AWS. The company\nhas production applications that run in the on-premises data center. The company also has production applications that run in a VPC. The\napplications that run in the on-premises data center need to communicate with the applications that run in the VPC. The company is using\ncorp.example.com as the domain name for the on-premises resources and is using an Amazon Route 53 private hosted zone for\naws.example.com to host the VPC resources.\nThe company is using an open-source recursive DNS resolver in a VPC subnet and is using a DNS resolver in the on-premises data center. The\ncompany's on-premises DNS resolver has a forwarder that directs requests for the aws.example.com domain name to the DNS resolver in the\nVPC. The DNS resolver in the VPC has a forwarder that directs requests for the corp.example.com domain name to the DNS resolver in the on-\npremises data center. The company has deckled to replace the open-source recursive DNS resolver with Amazon Route 53 Resolver endpoints.\nWhich combination of steps should a network engineer take to make this replacement? (Choose three.)",
        "options": [
            "A. Create a Route 53 Resolver rule to forward aws.example.com domain queries to the IP addresses of the outbound endpoint.",
            "B. Configure the on-premises DNS resolver to forward aws.example.com domain queries to the IP addresses of the inbound endpoint.",
            "C. Create a Route 53 Resolver inbound endpoint and a Route 53 Resolver outbound endpoint.",
            "D. Create a Route 53 Resolver rule to forward aws.example.com domain queries to the IP addresses of the inbound endpoint.",
            "E. Create a Route 53 Resolver rule to forward corp.example.com domain queries to the IP address of the on-premises DNS resolver.",
            "F. Configure the on-premises DNS resolver to forward aws.example.com queries to the IP addresses of the outbound endpoint."
        ],
        "answers": [
            "B",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: B, C, E\n\n핵심: 온프레미스와 AWS 간 양방향 DNS 확인이 필요합니다.\n\nB, C, E가 맞는 이유:\nC) Route 53 Resolver 인바운드 + 아웃바운드 엔드포인트를 모두 생성합니다.\nB) 온프레미스 DNS가 aws.example.com 쿼리를 인바운드 엔드포인트로 전달하도록 구성합니다.\nE) corp.example.com 쿼리를 온프레미스 DNS로 전달하는 Resolver 규칙을 생성합니다.\n\n오답 분석:\nA) 아웃바운드 엔드포인트로 전달하는 것은 방향이 반대\nD) 인바운드 엔드포인트로 전달하는 Resolver 규칙은 불필요 (인바운드는 외부에서 들어오는 쿼리용)\nF) 아웃바운드 엔드포인트로 전달하는 것은 방향이 반대",
        "question_ko": "회사는 하이브리드 아키텍처를 사용하며, 온프레미스 데이터 센터와 AWS 사이에 AWS Direct Connect 연결이 있습니다. 회사는 온프레미스 데이터 센터에서 실행되는 프로덕션 애플리케이션과 VPC에서 실행되는 프로덕션 애플리케이션이 있습니다. 온프레미스 데이터 센터의 애플리케이션이 VPC의 애플리케이션과 통신해야 합니다. 회사는 on-premises 리소스에 corp.example.com 도메인 이름을 사용하고, VPC 리소스에 aws.example.com 도메인 이름을 사용하는 Amazon Route 53 프라이빗 호스팅 영역을 사용합니다. 회사는 오픈 소스 재귀 DNS 리졸버를 사용하다가 Amazon Route 53 Resolver 엔드포인트로 교체하려 합니다.",
        "options_ko": [
            "A. aws.example.com 도메인 쿼리를 아웃바운드 엔드포인트의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
            "B. 온프레미스 DNS 리졸버가 aws.example.com 도메인 쿼리를 인바운드 엔드포인트의 IP 주소로 전달하도록 구성합니다.",
            "C. Route 53 Resolver 인바운드 엔드포인트와 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다.",
            "D. aws.example.com 도메인 쿼리를 인바운드 엔드포인트의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
            "E. corp.example.com 도메인 쿼리를 온프레미스 DNS 리졸버의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
            "F. 온프레미스 DNS 리졸버가 aws.example.com 쿼리를 아웃바운드 엔드포인트의 IP 주소로 전달하도록 구성합니다."
        ],
        "explanation_ko": "정답: B, C, E\n\n핵심: 온프레미스와 AWS 간 양방향 DNS 확인이 필요합니다.\n\nB, C, E가 맞는 이유:\nC) Route 53 Resolver 인바운드 + 아웃바운드 엔드포인트를 모두 생성합니다.\nB) 온프레미스 DNS가 aws.example.com 쿼리를 인바운드 엔드포인트로 전달하도록 구성합니다.\nE) corp.example.com 쿼리를 온프레미스 DNS로 전달하는 Resolver 규칙을 생성합니다.\n\n오답 분석:\nA) 아웃바운드 엔드포인트로 전달하는 것은 방향이 반대\nD) 인바운드 엔드포인트로 전달하는 Resolver 규칙은 불필요 (인바운드는 외부에서 들어오는 쿼리용)\nF) 아웃바운드 엔드포인트로 전달하는 것은 방향이 반대"
    },
    {
        "num": 23,
        "question": "A government contractor is designing a multi-account environment with multiple VPCs for a customer. A network security policy requires all traffic\nbetween any two VPCs to be transparently inspected by a third-party appliance.\nThe customer wants a solution that features AWS Transit Gateway. The setup must be highly available across multiple Availability Zones, and the\nsolution needs to support automated failover. Furthermore, asymmetric routing is not supported by the inspection appliances.\nWhich combination of steps is part of a solution that meets these requirements? (Choose two.)",
        "options": [
            "A. Deploy two clusters that consist of multiple appliances across multiple Availability Zones in a designated inspection VPC. Connect the\ninspection VPC to the transit gateway by using a VPC attachment. Create a target group, and register the appliances with the target group.\nCreate a Network Load Balancer (NLB), and set it up to forward to the newly created target group. Configure a default route in the inspection\nVPCs transit gateway subnet toward the NLB.",
            "B. Deploy two clusters that consist of multiple appliances across multiple Availability Zones in a designated inspection VPC. Connect the\ninspection VPC to the transit gateway by using a VPC attachment. Create a target group, and register the appliances with the target group.\nCreate a Gateway Load Balancer, and set it up to forward to the newly created target group. Configure a default route in the inspection VPC’s\ntransit gateway subnet toward the Gateway Load Balancer endpoint.",
            "C. Configure two route tables on the transit gateway. Associate one route table with all the attachments of the application VPCs. Associate\nthe other route table with the inspection VPC’s attachment. Propagate all VPC attachments into the inspection route table. Define a static\ndefault route in the application route table. Enable appliance mode on the attachment that connects the inspection VPC.",
            "D. Configure two route tables on the transit gateway. Associate one route table with all the attachments of the application VPCs. Associate\nthe other route table with the inspection VPCs attachment. Propagate all VPC attachments into the application route table. Define a static\ndefault route in the inspection route table. Enable appliance mode on the attachment that connects the inspection VPC.",
            "E. Configure one route table on the transit gateway. Associate the route table with all the VPCs. Propagate all VPC attachments into the route\ntable. Define a static default route in the route table."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "정답: B, C\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽을 타사 어플라이언스로 투명하게 검사해야 합니다.\n\nB, C가 맞는 이유:\nB) Gateway Load Balancer는 타사 어플라이언스를 투명하게 삽입하며, 여러 AZ에서 고가용성과 자동 장애 조치를 지원합니다. 비대칭 라우팅 문제도 해결합니다.\nC) Transit Gateway에 두 개의 라우팅 테이블(애플리케이션용, 검사용)을 구성하여 모든 트래픽이 검사 VPC를 거치도록 라우팅합니다.\n\n오답 분석:\nA) NLB는 투명한 인라인 검사를 지원하지 않음\nD) 라우팅 테이블 구성이 반대 (검사 테이블에 기본 경로가 아닌 애플리케이션 테이블에 기본 경로)\nE) 단일 라우팅 테이블로는 검사 VPC를 거치는 강제 라우팅 불가",
        "question_ko": "정부 계약업체는 고객을 위해 다중 계정 환경과 다중 VPC를 설계하고 있습니다. 보안 정책에 따라 VPC 간 모든 트래픽은 타사 어플라이언스에 의해 투명하게 검사되어야 합니다. 고객은 AWS Transit Gateway를 사용하는 솔루션을 원하며, 여러 가용 영역에서 고가용성과 자동 장애 조치를 지원해야 합니다. 또한 비대칭 라우팅은 검사 어플라이언스에서 지원되지 않습니다.",
        "options_ko": [
            "A. 여러 가용 영역에 걸쳐 다중 어플라이언스로 구성된 두 개의 클러스터를 배포하고 검사 VPC에 배치합니다. 검사 VPC를 Transit Gateway에 연결합니다. 대상 그룹을 생성하고 어플라이언스를 등록합니다. NLB(Network Load Balancer)를 생성하고 대상 그룹으로 전달하도록 구성합니다. 검사 VPC의 Transit Gateway 서브넷에서 NLB로 향하는 기본 경로를 구성합니다.",
            "B. 여러 가용 영역에 걸쳐 다중 어플라이언스로 구성된 두 개의 클러스터를 배포하고 검사 VPC에 배치합니다. 검사 VPC를 Transit Gateway에 연결합니다. 대상 그룹을 생성하고 어플라이언스를 등록합니다. Gateway Load Balancer를 생성하고 대상 그룹으로 전달하도록 구성합니다. 검사 VPC의 Transit Gateway 서브넷에서 Gateway Load Balancer 엔드포인트로 향하는 기본 경로를 구성합니다.",
            "C. Transit Gateway에 두 개의 라우팅 테이블을 구성합니다. 하나는 애플리케이션 VPC의 모든 연결에 연결하고, 다른 하나는 검사 VPC의 연결에 연결합니다. 모든 VPC 연결을 검사 라우팅 테이블에 전파합니다. 애플리케이션 라우팅 테이블에 기본 경로를 정의합니다. 검사 VPC 연결에 어플라이언스 모드를 활성화합니다.",
            "D. Transit Gateway에 두 개의 라우팅 테이블을 구성합니다. 하나는 애플리케이션 VPC의 모든 연결에 연결하고, 다른 하나는 검사 VPC의 연결에 연결합니다. 모든 VPC 연결을 애플리케이션 라우팅 테이블에 전파합니다. 검사 라우팅 테이블에 기본 경로를 정의합니다. 검사 VPC 연결에 어플라이언스 모드를 활성화합니다.",
            "E. Transit Gateway에 하나의 라우팅 테이블을 구성합니다. 모든 VPC에 테이블을 연결합니다. 모든 VPC 연결을 라우팅 테이블에 전파합니다. 라우팅 테이블에 기본 경로를 정의합니다."
        ],
        "explanation_ko": "정답: B, C\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽을 타사 어플라이언스로 투명하게 검사해야 합니다.\n\nB, C가 맞는 이유:\nB) Gateway Load Balancer는 타사 어플라이언스를 투명하게 삽입하며, 여러 AZ에서 고가용성과 자동 장애 조치를 지원합니다. 비대칭 라우팅 문제도 해결합니다.\nC) Transit Gateway에 두 개의 라우팅 테이블(애플리케이션용, 검사용)을 구성하여 모든 트래픽이 검사 VPC를 거치도록 라우팅합니다.\n\n오답 분석:\nA) NLB는 투명한 인라인 검사를 지원하지 않음\nD) 라우팅 테이블 구성이 반대 (검사 테이블에 기본 경로가 아닌 애플리케이션 테이블에 기본 경로)\nE) 단일 라우팅 테이블로는 검사 VPC를 거치는 강제 라우팅 불가"
    },
    {
        "num": 24,
        "question": "A company has deployed Amazon EC2 instances in private subnets in a VPC. The EC2 instances must initiate any requests that leave the VPC,\nincluding requests to the company's on-premises data center over an AWS Direct Connect connection. No resources outside the VPC can be\nallowed to open communications directly to the EC2 instances.\nThe on-premises data center's customer gateway is configured with a stateful firewall device that filters for incoming and outgoing requests to\nand from multiple VPCs. In addition, the company wants to use a single IP match rule to allow all the communications from the EC2 instances to\nits data center from a single IP address.\nWhich solution will meet these requirements with the LEAST amount of operational overhead?",
        "options": [
            "A. Create a VPN connection over the Direct Connect connection by using the on-premises firewall. Use the firewall to block all traffic from on\npremises to AWS. Allow a stateful connection from the EC2 instances to initiate the requests.",
            "B. Configure the on-premises firewall to filter all requests from the on-premises network to the EC2 instances. Allow a stateful connection if\nthe EC2 instances in the VPC initiate the traffic.",
            "C. Deploy a NAT gateway into a private subnet in the VPC where the EC2 instances are deployed. Specify the NAT gateway type as private.\nConfigure the on-premises firewall to allow connections from the IP address that is assigned to the NAT gateway.",
            "D. Deploy a NAT instance into a private subnet in the VPC where the EC2 instances are deployed. Configure the on-premises firewall to allow\nconnections from the IP address that is assigned to the NAT instance."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2가 온프레미스로 아웃바운드만 가능하고, 인바운드는 차단해야 합니다.\n\nC가 맞는 이유:\n프라이빗 NAT 게이트웨이는 프라이빗 서브넷에서 다른 VPC나 온프레미스로의 아웃바운드 연결을 허용하면서 인바운드 연결을 차단합니다. NAT 게이트웨이의 IP 주소만 온프레미스 방화벽에서 허용하면 됩니다.\n\n오답 분석:\nA) Direct Connect를 통한 VPN은 과도한 구성이며 NAT 기능을 제공하지 않음\nB) 온프레미스 방화벽만으로는 AWS 측에서의 인바운드 차단이 보장되지 않음\nD) NAT 인스턴스는 관리 부담이 크고 고가용성이 기본 제공되지 않음",
        "question_ko": "회사는 VPC의 프라이빗 서브넷에 Amazon EC2 인스턴스를 배포했습니다. EC2 인스턴스는 VPC 외부로 연결되는 모든 요청, 즉 AWS Direct Connect 연결을 통한 온프레미스 데이터 센터로의 요청을 시작해야 합니다. VPC 외부의 리소스는 EC2 인스턴스에 직접 통신할 수 없습니다. 온프레미스 데이터 센터의 고객 게이트웨이에는 여러 VPC로부터의 수신 및 발신 요청을 필터링하는 상태 저장 방화벽 장치가 구성되어 있습니다. 회사는 EC2 인스턴스에서 데이터 센터로의 통신을 허용하기 위해 단일 IP 일치 규칙을 사용하고자 합니다.",
        "options_ko": [
            "A. Direct Connect 연결을 통해 온프레미스 방화벽을 사용하여 VPN 연결을 생성합니다. 방화벽을 사용하여 on-premises에서 AWS로의 모든 트래픽을 차단하고, EC2 인스턴스에서 시작되는 상태 저장 연결을 허용합니다.",
            "B. 온프레미스 방화벽을 구성하여 on-premises 네트워크에서 EC2 인스턴스로의 모든 요청을 필터링합니다. EC2 인스턴스에서 트래픽을 시작하는 경우 상태 저장 연결을 허용합니다.",
            "C. VPC의 프라이빗 서브넷에 NAT 게이트웨이를 배포합니다. NAT 게이트웨이 유형을 프라이빗으로 지정합니다. 온프레미스 방화벽에서 NAT 게이트웨이의 IP 주소로부터의 연결을 허용하도록 구성합니다.",
            "D. VPC의 프라이빗 서브넷에 NAT 인스턴스를 배포합니다. 온프레미스 방화벽에서 NAT 인스턴스의 IP 주소로부터의 연결을 허용하도록 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2가 온프레미스로 아웃바운드만 가능하고, 인바운드는 차단해야 합니다.\n\nC가 맞는 이유:\n프라이빗 NAT 게이트웨이는 프라이빗 서브넷에서 다른 VPC나 온프레미스로의 아웃바운드 연결을 허용하면서 인바운드 연결을 차단합니다. NAT 게이트웨이의 IP 주소만 온프레미스 방화벽에서 허용하면 됩니다.\n\n오답 분석:\nA) Direct Connect를 통한 VPN은 과도한 구성이며 NAT 기능을 제공하지 않음\nB) 온프레미스 방화벽만으로는 AWS 측에서의 인바운드 차단이 보장되지 않음\nD) NAT 인스턴스는 관리 부담이 크고 고가용성이 기본 제공되지 않음"
    },
    {
        "num": 25,
        "question": "A global company operates all its non-production environments out of three AWS Regions: eu-west-1, us-east-1, and us-west-1. The company\nhosts all its production workloads in two on-premises data centers. The company has 60 AWS accounts and each account has two VPCs in each\nRegion. Each VPC has a virtual private gateway where two VPN connections terminate for resilient connectivity to the data centers. The company\nhas 360 VPN tunnels to each data center, resulting in high management overhead. The total VPN throughput for each Region is 500 Mbps.\nThe company wants to migrate the production environments to AWS. The company needs a solution that will simplify the network architecture and\nallow for future growth. The production environments will generate an additional 2 Gbps of traffic per Region back to the data centers. This traffic\nwill increase over time.\nWhich solution will meet these requirements?",
        "options": [
            "A. Set up an AWS Direct Connect connection from each data center to AWS in each Region. Create and attach private VIFs to a single Direct\nConnect gateway. Attach the Direct Connect gateway to all the VPCs. Remove the existing VPN connections that are attached directly to the\nvirtual private gateways.",
            "B. Create a single transit gateway with VPN connections from each data center. Share the transit gateway with each account by using AWS\nResource Access Manager (AWS RAM). Attach the transit gateway to each VPC. Remove the existing VPN connections that are attached\ndirectly to the virtual private gateways.",
            "C. Create a transit gateway in each Region with multiple newly commissioned VPN connections from each data center. Share the transit\ngateways with each account by using AWS Resource Access Manager (AWS RAM). In each Region, attach the transit gateway to each\nVPRemove the existing VPN connections that are attached directly to the virtual private gateways.",
            "D. Peer all the VPCs in each Region to a new VPC in each Region that will function as a centralized transit VPC. Create new VPN connections\nfrom each data center to the transit VPCs. Terminate the original VPN connections that are attached to all the original VPCs. Retain the new\nVPN connection to the new transit VPC in each Region."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 360개의 VPN 터널을 관리하는 복잡성을 줄여야 합니다.\n\nC가 맞는 이유:\n각 리전에 Transit Gateway를 생성하고 AWS RAM으로 계정 간 공유하면, VPC별 개별 VPN 대신 리전당 소수의 VPN 연결만 필요합니다. Transit Gateway가 VPC 간 라우팅을 중앙에서 관리하므로 터널 수가 대폭 감소합니다.\n\n오답 분석:\nA) Direct Connect + 단일 게이트웨이는 리전 간 라우팅이 복잡해짐\nB) 단일 Transit Gateway는 리전 간 사용 불가 (리전별로 필요)\nD) Transit VPC + VPC 피어링은 레거시 패턴이며 관리 복잡성이 여전히 높음",
        "question_ko": "기업은 모든 비프로덕션 환경을 eu-west-1, us-east-1 및 us-west-1의 세 개 AWS 리전에서 운영하고 있습니다. 프로덕션 워크로드는 두 개의 온프레미스 데이터 센터에서 호스팅됩니다. 각 계정에 각 리전에 2개의 VPC가 있으며, 각 VPC에는 데이터 센터에 연결되는 두 개의 VPN 연결이 종료됩니다. 총 360개의 VPN 터널이 각 데이터 센터에 연결되어 있어 관리 overhead가 크습니다. 프로덕션 환경을 AWS로 마이그레이션하면 추가 2Gbps의 트래픽이 발생할 것입니다.",
        "options_ko": [
            "A. 각 데이터 센터에서 각 리전의 AWS로 Direct Connect 연결을 설정합니다. 단일 Direct Connect 게이트웨이에 프라이빗 VIF를 생성하고 연결합니다. Direct Connect 게이트웨이를 모든 VPC에 연결하고, 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
            "B. 각 데이터 센터에서 VPN 연결이 종료되는 단일 Transit Gateway를 생성합니다. AWS RAM(Resource Access Manager)을 사용하여 Transit Gateway를 각 계정과 공유합니다. Transit Gateway를 각 VPC에 연결하고, 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
            "C. 각 리전에 새로 프로비저닝된 VPN 연결이 있는 Transit Gateway를 생성합니다. AWS RAM(Resource Access Manager)을 사용하여 Transit Gateway를 각 계정과 공유합니다. 각 리전에서 Transit Gateway를 각 VPC에 연결하고, 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
            "D. 각 리전에서 모든 VPC를 새로운 Transit VPC로 피어링합니다. 각 데이터 센터에서 Transit VPC로 새로운 VPN 연결을 생성합니다. 기존 VPC에 연결된 원래의 VPN 연결을 종료하고 새로운 Transit VPC로의 VPN 연결만 유지합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 360개의 VPN 터널을 관리하는 복잡성을 줄여야 합니다.\n\nC가 맞는 이유:\n각 리전에 Transit Gateway를 생성하고 AWS RAM으로 계정 간 공유하면, VPC별 개별 VPN 대신 리전당 소수의 VPN 연결만 필요합니다. Transit Gateway가 VPC 간 라우팅을 중앙에서 관리하므로 터널 수가 대폭 감소합니다.\n\n오답 분석:\nA) Direct Connect + 단일 게이트웨이는 리전 간 라우팅이 복잡해짐\nB) 단일 Transit Gateway는 리전 간 사용 불가 (리전별로 필요)\nD) Transit VPC + VPC 피어링은 레거시 패턴이며 관리 복잡성이 여전히 높음"
    },
    {
        "num": 26,
        "question": "A company is building its website on AWS in a single VPC. The VPC has public subnets and private subnets in two Availability Zones. The website\nhas static content such as images. The company is using Amazon S3 to store the content.\nThe company has deployed a fleet of Amazon EC2 instances as web servers in a private subnet. The EC2 instances are in an Auto Scaling group\nbehind an Application Load Balancer. The EC2 instances will serve traffic, and they must pull content from an S3 bucket to render the webpages.\nThe company is using AWS Direct Connect with a public VIF for on-premises connectivity to the S3 bucket.\nA network engineer notices that traffic between the EC2 instances and Amazon S3 is routing through a NAT gateway. As traffic increases, the\ncompany's costs are increasing. The network engineer needs to change the connectivity to reduce the NAT gateway costs that result from the\ntraffic between the EC2 instances and Amazon S3.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a Direct Connect private VIF. Migrate the traffic from the public VIF to the private VIF.",
            "B. Create an AWS Site-to-Site VPN tunnel over the existing public VIF.",
            "C. Implement interface VPC endpoints for Amazon S3. Update the VPC route table.",
            "D. Implement gateway VPC endpoints for Amazon S3. Update the VPC route table."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 프라이빗 서브넷의 EC2에서 S3에 접근할 때 인터넷을 거치지 않아야 합니다.\n\nD가 맞는 이유:\nS3에 대한 게이트웨이 VPC 엔드포인트는 무료이며, VPC 내부에서 S3로의 트래픽이 AWS 네트워크 내에서 직접 라우팅됩니다. 라우팅 테이블에 엔드포인트 경로를 추가하면 됩니다.\n\n오답 분석:\nA) Direct Connect 프라이빗 VIF는 온프레미스 연결용이지 S3 접근용이 아님\nB) Site-to-Site VPN은 온프레미스 연결용\nC) S3에 대한 인터페이스 VPC 엔드포인트도 가능하지만 비용이 발생하며, 게이트웨이 엔드포인트가 표준",
        "question_ko": "회사는 단일 VPC에서 AWS를 사용하여 웹사이트를 구축하고 있습니다. VPC에는 두 가용 영역에 퍼블릭 서브넷과 프라이빗 서브넷이 있습니다. 웹사이트에는 이미지와 같은 정적 콘텐츠가 포함됩니다. 회사는 콘텐츠를 저장하기 위해 Amazon S3를 사용하고 있습니다. 회사는 프라이빗 서브넷에 있는 Amazon EC2 인스턴스의 웹 서버 집합을 Auto Scaling 그룹 뒤에 있는 Application Load Balancer(ALB)로 배포했습니다. EC2 인스턴스는 S3 버킷에서 콘텐츠를 가져와 웹페이지를 렌더링합니다. 회사는 온-프레미스 연결을 위해 퍼블릭 VIF가 있는 AWS Direct Connect를 사용하고 있습니다. 네트워크 엔지니어는 EC2 인스턴스와 Amazon S3 간 트래픽이 NAT 게이트웨이를 통해 라우팅되고 있음을 알았습니다. 트래픽이 증가하면 비용이 증가할 것입니다. 네트워크 엔지니어는 EC2 인스턴스와 Amazon S3 간 트래픽으로 인해 발생하는 NAT 게이트웨이 비용을 줄이기 위해 연결을 변경해야 합니다.",
        "options_ko": [
            "A. Direct Connect의 프라이빗 VIF를 생성하고 트래픽을 퍼블릭 VIF에서 프라이빗 VIF로 마이그레이션합니다.",
            "B. 기존 퍼블릭 VIF를 통해 AWS Site-to-Site VPN 터널을 구현합니다.",
            "C. Amazon S3에 대한 인터페이스 VPC 엔드포인트를 구현하고 VPC 라우팅 테이블을 업데이트합니다.",
            "D. Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 구현하고 VPC 라우팅 테이블을 업데이트합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 프라이빗 서브넷의 EC2에서 S3에 접근할 때 인터넷을 거치지 않아야 합니다.\n\nD가 맞는 이유:\nS3에 대한 게이트웨이 VPC 엔드포인트는 무료이며, VPC 내부에서 S3로의 트래픽이 AWS 네트워크 내에서 직접 라우팅됩니다. 라우팅 테이블에 엔드포인트 경로를 추가하면 됩니다.\n\n오답 분석:\nA) Direct Connect 프라이빗 VIF는 온프레미스 연결용이지 S3 접근용이 아님\nB) Site-to-Site VPN은 온프레미스 연결용\nC) S3에 대한 인터페이스 VPC 엔드포인트도 가능하지만 비용이 발생하며, 게이트웨이 엔드포인트가 표준"
    },
    {
        "num": 27,
        "question": "A company wants to improve visibility into its AWS environment. The AWS environment consists of multiple VPCs that are connected to a transit\ngateway. The transit gateway connects to an on-premises data center through an AWS Direct Connect gateway and a pair of redundant Direct\nConnect connections that use transit VIFs. The company must receive notification each time a new route is advertised to AWS from on premises\nover Direct Connect.\nWhat should a network engineer do to meet these requirements?",
        "options": [
            "A. Enable Amazon CloudWatch metrics on Direct Connect to track the received routes. Configure a CloudWatch alarm to send notifications\nwhen routes change.",
            "B. Onboard Transit Gateway Network Manager to Amazon CloudWatch Logs Insights. Use Amazon EventBridge (Amazon CloudWatch Events)\nto send notifications when routes change.",
            "C. Configure an AWS Lambda function to periodically check the routes on the Direct Connect gateway and to send notifications when routes\nchange.",
            "D. Enable Amazon CloudWatch Logs on the transit VIFs to track the received routes. Create a metric filter Set an alarm on the filter to send\nnotifications when routes change."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Direct Connect를 통한 온프레미스에서 AWS로의 경로 변경을 감지하고 알림을 받아야 합니다.\n\nB가 맞는 이유:\nTransit Gateway Network Manager는 글로벌 네트워크의 토폴로지 변경과 경로 변경을 모니터링합니다. EventBridge와 통합하여 경로 변경 시 자동으로 알림을 보낼 수 있습니다.\n\n오답 분석:\nA) Direct Connect CloudWatch 지표에는 수신 경로 추적 기능이 없음\nC) Lambda로 정기적으로 확인하는 것은 실시간이 아니며 관리 부담이 큼\nD) 트랜짓 VIF에 CloudWatch Logs를 직접 활성화하는 기능은 없음",
        "question_ko": "회사는 AWS 환경에 대한 가시성을 높이고자 합니다. AWS 환경은 트랜짓 게이트웨이에 연결된 여러 VPC로 구성되어 있습니다. 트랜짓 게이트웨이는 AWS Direct Connect 게이트웨이와 신뢰할 수 있는 두 개의 Direct Connect 연결을 통해 온-프레미스 데이터 센터에 연결됩니다. 회사는 Direct Connect를 통해 온-프레미스에서 AWS로 새로운 경로가 광고될 때마다 알림을 받아야 합니다.",
        "options_ko": [
            "A. Direct Connect의 Amazon CloudWatch 지표를 활성화하여 수신된 경로를 추적하고 CloudWatch 경보를 구성하여 경로 변경 시 알림을 보냅니다.",
            "B. Transit Gateway Network Manager를 Amazon CloudWatch Logs Insights에 등록하고 Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 경로 변경 시 알림을 보냅니다.",
            "C. AWS Lambda 함수를 구성하여 정기적으로 Direct Connect 게이트웨이의 경로를 확인하고 경로 변경 시 알림을 보냅니다.",
            "D. 트랜짓 VIF의 Amazon CloudWatch Logs를 활성화하여 수신된 경로를 추적하고 필터 지표를 설정하여 경로 변경 시 알림을 보냅니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Direct Connect를 통한 온프레미스에서 AWS로의 경로 변경을 감지하고 알림을 받아야 합니다.\n\nB가 맞는 이유:\nTransit Gateway Network Manager는 글로벌 네트워크의 토폴로지 변경과 경로 변경을 모니터링합니다. EventBridge와 통합하여 경로 변경 시 자동으로 알림을 보낼 수 있습니다.\n\n오답 분석:\nA) Direct Connect CloudWatch 지표에는 수신 경로 추적 기능이 없음\nC) Lambda로 정기적으로 확인하는 것은 실시간이 아니며 관리 부담이 큼\nD) 트랜짓 VIF에 CloudWatch Logs를 직접 활성화하는 기능은 없음"
    },
    {
        "num": 28,
        "question": "A software company offers a software-as-a-service (SaaS) accounting application that is hosted in the AWS Cloud The application requires\nconnectivity to the company's on-premises network. The company has two redundant 10 GB AWS Direct Connect connections between AWS and\nits on-premises network to accommodate the growing demand for the application.\nThe company already has encryption between its on-premises network and the colocation. The company needs to encrypt traffic between AWS\nand the edge routers in the colocation within the next few months. The company must maintain its current bandwidth.\nWhat should a network engineer do to meet these requirements with the LEAST operational overhead?",
        "options": [
            "A. Deploy a new public VIF with encryption on the existing Direct Connect connections. Reroute traffic through the new public VIF.",
            "B. Create a virtual private gateway Deploy new AWS Site-to-Site VPN connections from on premises to the virtual private gateway Reroute\ntraffic from the Direct Connect private VIF to the new VPNs.",
            "C. Deploy a new pair of 10 GB Direct Connect connections with MACsec. Configure MACsec on the edge routers. Reroute traffic to the new\nDirect Connect connections. Decommission the original Direct Connect connections",
            "D. Deploy a new pair of 10 GB Direct Connect connections with MACsec. Deploy a new public VIF on the new Direct Connect connections.\nDeploy two AWS Site-to-Site VPN connections on top of the new public VIF. Reroute traffic from the existing private VIF to the new Site-to-Site\nconnections. Decommission the original Direct Connect connections."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 기존 10GB Direct Connect 연결에 전송 중 암호화를 추가해야 합니다.\n\nC가 맞는 이유:\nMACsec은 Direct Connect에서 L2 레벨 암호화를 제공하며 10Gbps 대역폭을 그대로 활용합니다. 기존 연결은 MACsec을 지원하지 않으므로 새 연결을 생성하고 트래픽을 이전한 후 기존 연결을 폐기합니다.\n\n오답 분석:\nA) 퍼블릭 VIF의 암호화는 MACsec과 다르며 기존 프라이빗 VIF 트래픽을 대체하지 못함\nB) Site-to-Site VPN은 터널당 1.25Gbps로 10Gbps 대역폭 활용 불가\nD) MACsec + 퍼블릭 VIF + VPN은 불필요하게 복잡한 구성",
        "question_ko": "소프트웨어 회사는 AWS 클라우드에 호스팅된 소프트웨어 기반 서비스(SaaS) 회계 애플리케이션을 제공합니다. 애플리케이션은 회사의 온-프레미스 네트워크에 대한 연결이 필요합니다. 회사는 애플리케이션의 증가하는 수요를 수용하기 위해 AWS와 온-프레미스 네트워크 간에 두 개의 중복 10GB AWS Direct Connect 연결을 사용하고 있습니다. 회사는 향후 몇 개월 내에 AWS와 콜로케이션 내 엣지 라우터 간 트래픽을 암호화해야 합니다. 현재 대역폭은 유지해야 합니다.",
        "options_ko": [
            "A. 기존 Direct Connect 연결에 암호화가 가능한 새로운 퍼블릭 VIF를 배포하고 새로운 퍼블릭 VIF를 통해 트래픽을 재라우팅합니다.",
            "B. 가상 프라이빗 게이트웨이를 생성하고 온-프레미스에서 새로운 AWS Site-to-Site VPN 연결을 배포한 후 기존 Direct Connect 프라이빗 VIF의 트래픽을 새로운 VPN으로 재라우팅합니다.",
            "C. MACsec 기능이 있는 새로운 한 쌍의 10GB Direct Connect 연결을 배포하고 엣지 라우터에서 MACsec을 구성한 다음 새로운 Direct Connect 연결로 트래픽을 재라우팅하고 원래 Direct Connect 연결을 폐기합니다.",
            "D. MACsec 기능이 있는 새로운 한 쌍의 10GB Direct Connect 연결을 배포하고 새로운 퍼블릭 VIF를 생성한 다음 새로운 Site-to-Site VPN 연결을 배포하고 기존 프라이빗 VIF의 트래픽을 새로운 Site-to-Site 연결로 재라우팅한 후 원래 Direct Connect 연결을 폐기합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 기존 10GB Direct Connect 연결에 전송 중 암호화를 추가해야 합니다.\n\nC가 맞는 이유:\nMACsec은 Direct Connect에서 L2 레벨 암호화를 제공하며 10Gbps 대역폭을 그대로 활용합니다. 기존 연결은 MACsec을 지원하지 않으므로 새 연결을 생성하고 트래픽을 이전한 후 기존 연결을 폐기합니다.\n\n오답 분석:\nA) 퍼블릭 VIF의 암호화는 MACsec과 다르며 기존 프라이빗 VIF 트래픽을 대체하지 못함\nB) Site-to-Site VPN은 터널당 1.25Gbps로 10Gbps 대역폭 활용 불가\nD) MACsec + 퍼블릭 VIF + VPN은 불필요하게 복잡한 구성"
    },
    {
        "num": 29,
        "question": "A company hosts an application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company recently experienced a\nnetwork security breach. A network engineer must collect and analyze logs that include the client IP address, target IP address, target port, and\nuser agent of each user that accesses the application.\nWhat is the MOST operationally efficient solution that meets these requirements?",
        "options": [
            "A. Configure the ALB to store logs in an Amazon S3 bucket. Download the files from Amazon S3, and use a spreadsheet application to analyze\nthe logs.",
            "B. Configure the ALB to push logs to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Analytics to analyze the logs.",
            "C. Configure Amazon Kinesis Data Streams to stream data from the ALB to Amazon OpenSearch Service (Amazon Elasticsearch Service). Use\nsearch operations in Amazon OpenSearch Service (Amazon Elasticsearch Service) to analyze the data.",
            "D. Configure the ALB to store logs in an Amazon S3 bucket. Use Amazon Athena to analyze the logs in Amazon S3."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: ALB 액세스 로그에서 클라이언트 IP, 대상 IP, 대상 포트, 사용자 에이전트를 분석해야 합니다.\n\nD가 맞는 이유:\nALB 액세스 로그를 S3에 저장하고 Athena로 SQL 쿼리하면 클라이언트 IP, 대상 IP, 포트, 사용자 에이전트 등 모든 필요한 필드를 효율적으로 분석할 수 있습니다. 서버리스이므로 인프라 관리가 불필요합니다.\n\n오답 분석:\nA) S3에서 파일을 다운로드하여 스프레드시트로 분석하는 것은 비효율적이고 확장 불가\nB) ALB는 Kinesis Data Streams로 직접 로그를 푸시하는 기능이 없음\nC) Kinesis Data Streams가 ALB에서 직접 데이터를 스트리밍하는 기능은 없음",
        "question_ko": "회사는 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에 애플리케이션을 호스팅하고 있습니다. 회사는 최근 네트워크 보안 침해를 경험했습니다. 네트워크 엔지니어는 각 사용자가 애플리케이션에 액세스할 때의 클라이언트 IP 주소, 대상 IP 주소, 대상 포트 및 사용자 에이전트가 포함된 로그를 수집하고 분석해야 합니다.",
        "options_ko": [
            "A. ALB를 구성하여 로그를 Amazon S3 버킷에 저장하고 Amazon S3에서 파일을 다운로드하여 스프레드시트 애플리케이션으로 로그를 분석합니다.",
            "B. ALB를 구성하여 로그를 Amazon Kinesis Data Streams로 푸시하고 Amazon Kinesis Data Analytics를 사용하여 로그를 분석합니다.",
            "C. Amazon Kinesis Data Streams를 구성하여 ALB에서 데이터를 스트리밍하고 Amazon OpenSearch Service(Amazon Elasticsearch Service)에 저장한 다음 Amazon OpenSearch Service(Amazon Elasticsearch Service)의 검색 기능을 사용하여 데이터를 분석합니다.",
            "D. ALB를 구성하여 로그를 Amazon S3 버킷에 저장하고 Amazon Athena를 사용하여 Amazon S3의 로그를 분석합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: ALB 액세스 로그에서 클라이언트 IP, 대상 IP, 대상 포트, 사용자 에이전트를 분석해야 합니다.\n\nD가 맞는 이유:\nALB 액세스 로그를 S3에 저장하고 Athena로 SQL 쿼리하면 클라이언트 IP, 대상 IP, 포트, 사용자 에이전트 등 모든 필요한 필드를 효율적으로 분석할 수 있습니다. 서버리스이므로 인프라 관리가 불필요합니다.\n\n오답 분석:\nA) S3에서 파일을 다운로드하여 스프레드시트로 분석하는 것은 비효율적이고 확장 불가\nB) ALB는 Kinesis Data Streams로 직접 로그를 푸시하는 기능이 없음\nC) Kinesis Data Streams가 ALB에서 직접 데이터를 스트리밍하는 기능은 없음"
    },
    {
        "num": 30,
        "question": "A media company is implementing a news website for a global audience. The website uses Amazon CloudFront as its content delivery network.\nThe backend runs on Amazon EC2 Windows instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling\ngroup. The company's customers access the website by using service example com as the CloudFront custom domain name. The CloudFront\norigin points to an ALB that uses service-alb.example.com as the domain name.\nThe company’s security policy requires the traffic to be encrypted in transit at all times between the users and the backend.\nWhich combination of changes must the company make to meet this security requirement? (Choose three.)",
        "options": [
            "A. Create a self-signed certificate for service.example.com. Import the certificate into AWS Certificate Manager (ACM). Configure CloudFront\nto use this imported SSL/TLS certificate. Change the default behavior to redirect HTTP to HTTPS.",
            "B. Create a certificate for service.example.com by using AWS Certificate Manager (ACM). Configure CloudFront to use this custom SSL/TLS\ncertificate. Change the default behavior to redirect HTTP to HTTPS.",
            "C. Create a certificate with any domain name by using AWS Certificate Manager (ACM) for the EC2 instances. Configure the backend to use\nthis certificate for its HTTPS listener. Specify the instance target type during the creation of a new target group that uses the HTTPS protocol\nfor its targets. Attach the existing Auto Scaling group to this new target group.",
            "D. Create a public certificate from a third-party certificate provider with any domain name for the EC2 instances. Configure the backend to use\nthis certificate for its HTTPS listener. Specify the instance target type during the creation of a new target group that uses the HTTPS protocol\nfor its targets. Attach the existing Auto Scaling group to this new target group.",
            "E. Create a certificate for service-alb.example.com by using AWS Certificate Manager (ACM). On the ALB add a new HTTPS listener that uses\nthe new target group and the service-alb.example.com ACM certificate. Modify the CloudFront origin to use the HTTPS protocol only. Delete\nthe HTTP listener on the ALB.",
            "F. Create a self-signed certificate for service-alb.example.com. Import the certificate into AWS Certificate Manager (ACM). On the ALB add a\nnew HTTPS listener that uses the new target group and the imported service-alb.example.com ACM certificate. Modify the CloudFront origin\nto use the HTTPS protocol only. Delete the HTTP listener on the ALB."
        ],
        "answers": [
            "B",
            "D",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: B, D, E\n\n핵심: CloudFront + ALB + EC2 구성에서 전 구간 HTTPS를 구현해야 합니다.\n\nB, D, E가 맞는 이유:\nB) ACM으로 service.example.com 인증서를 생성하여 CloudFront에 적용합니다 (클라이언트-CloudFront 구간).\nD) EC2 인스턴스에는 ACM 인증서를 직접 설치할 수 없으므로 제3자 인증서를 사용합니다 (ALB-EC2 구간).\nE) ACM으로 ALB용 인증서를 생성하여 HTTPS 리스너를 추가합니다 (CloudFront-ALB 구간).\n\n오답 분석:\nA) 자체 서명 인증서는 CloudFront에서 신뢰하지 않음\nC) ACM 인증서는 EC2 인스턴스에 직접 설치 불가 (ALB/CloudFront에서만 사용)\nF) 자체 서명 인증서는 ALB에서 신뢰 문제 발생 가능",
        "question_ko": "미디어 회사는 글로벌 고객을 위한 뉴스 웹사이트를 구현하고 있습니다. 웹사이트는 Amazon CloudFront를 콘텐츠 전송 네트워크로 사용합니다. 백엔드는 Application Load Balancer(ALB) 뒤의 Amazon EC2 Windows 인스턴스에서 실행되며 Auto Scaling 그룹의 일부입니다. 고객은 서비스.example.com을 CloudFront 사용자 지정 도메인 이름으로 사용하여 웹사이트에 액세스합니다. CloudFront 오리진은 service-alb.example.com 도메인 이름을 사용하는 ALB를 가리킵니다. 회사의 보안 정책에 따라 사용자와 백엔드 간 송수신 트래픽이 항상 암호화되어야 합니다.",
        "options_ko": [
            "A. service.example.com에 대한 자체 서명된 인증서를 생성하고 AWS Certificate Manager(ACM)에 가져온 다음 CloudFront에서 이 가져온 SSL/TLS 인증서를 구성하고 기본 동작을 HTTP에서 HTTPS로 리디렉션하도록 변경합니다.",
            "B. AWS Certificate Manager(ACM)를 사용하여 service.example.com에 대한 인증서를 생성하고 CloudFront에서 이 사용자 지정 SSL/TLS 인증서를 구성하고 기본 동작을 HTTP에서 HTTPS로 리디렉션하도록 변경합니다.",
            "C. AWS Certificate Manager(ACM)를 사용하여 EC2 인스턴스에 대한 어떤 도메인 이름의 인증서를 생성하고 백엔드에서 이 인증서를 HTTPS 리스너에 구성합니다. HTTPS 프로토콜을 사용하는 새 대상 그룹 생성 시 인스턴스 대상 유형을 지정하고 기존 Auto Scaling 그룹을 이 새 대상 그룹에 연결합니다.",
            "D. 제3자 인증서 공급자에서 EC2 인스턴스에 대한 공개 인증서를 생성하고(도메인 이름은 상관없음) 백엔드에서 이 인증서를 HTTPS 리스너에 구성합니다. HTTPS 프로토콜을 사용하는 새 대상 그룹 생성 시 인스턴스 대상 유형을 지정하고 기존 Auto Scaling 그룹을 이 새 대상 그룹에 연결합니다.",
            "E. AWS Certificate Manager(ACM)를 사용하여 service-alb.example.com에 대한 인증서를 생성하고 ALB에 새 HTTPS 리스너를 추가하여 새 대상 그룹과 service-alb.example.com ACM 인증서를 사용합니다. CloudFront 오리진을 HTTPS 프로토콜로만 수정하고 ALB의 HTTP 리스너를 삭제합니다.",
            "F. service-alb.example.com에 대한 자체 서명된 인증서를 생성하고 AWS Certificate Manager(ACM)에 가져온 다음 ALB에 새 HTTPS 리스너를 추가하여 새 대상 그룹과 가져온 service-alb.example.com ACM 인증서를 사용합니다. CloudFront 오리진을 HTTPS 프로토콜로만 수정하고 ALB의 HTTP 리스너를 삭제합니다."
        ],
        "explanation_ko": "정답: B, D, E\n\n핵심: CloudFront + ALB + EC2 구성에서 전 구간 HTTPS를 구현해야 합니다.\n\nB, D, E가 맞는 이유:\nB) ACM으로 service.example.com 인증서를 생성하여 CloudFront에 적용합니다 (클라이언트-CloudFront 구간).\nD) EC2 인스턴스에는 ACM 인증서를 직접 설치할 수 없으므로 제3자 인증서를 사용합니다 (ALB-EC2 구간).\nE) ACM으로 ALB용 인증서를 생성하여 HTTPS 리스너를 추가합니다 (CloudFront-ALB 구간).\n\n오답 분석:\nA) 자체 서명 인증서는 CloudFront에서 신뢰하지 않음\nC) ACM 인증서는 EC2 인스턴스에 직접 설치 불가 (ALB/CloudFront에서만 사용)\nF) 자체 서명 인증서는 ALB에서 신뢰 문제 발생 가능"
    },
    {
        "num": 31,
        "question": "A company is hosting an application on Amazon EC2 instances behind a Network Load Balancer (NLB). A solutions architect added EC2 instances\nin a second Availability Zone to improve the availability of the application. The solutions architect added the instances to the NLB target group.\nThe company's operations team notices that traffic is being routed only to the instances in the first Availability Zone.\nWhat is the MOST operationally efficient solution to resolve this issue?",
        "options": [
            "A. Enable the new Availability Zone on the NLB",
            "B. Create a new NLB for the instances in the second Availability Zone",
            "C. Enable proxy protocol on the NLB",
            "D. Create a new target group with the instances in both Availability Zones"
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: NLB에 두 번째 AZ의 인스턴스를 추가했지만 트래픽이 분산되지 않습니다.\n\nA가 맞는 이유:\nNLB는 대상 그룹에 인스턴스를 추가하는 것만으로는 새 AZ로 트래픽을 보내지 않습니다. NLB 자체에서 해당 AZ를 활성화해야 합니다. AZ를 활성화하면 NLB가 해당 AZ에 노드를 생성하고 트래픽을 분산합니다.\n\n오답 분석:\nB) 별도 NLB를 생성하면 단일 엔드포인트가 아니게 됨\nC) 프록시 프로토콜은 클라이언트 IP 보존용이지 AZ 간 트래픽 분산과 무관\nD) 새 대상 그룹을 생성할 필요 없이 기존 대상 그룹에 이미 추가됨. 문제는 NLB의 AZ 활성화",
        "question_ko": "Amazon EC2 인스턴스가 Network Load Balancer(NLB) 뒤에서 호스팅되는 애플리케이션이 있는 기업이 있습니다. 솔루션 아키텍트가 애플리케이션의 가용성을 개선하기 위해 두 번째 가용 영역에 EC2 인스턴스를 추가했습니다. 솔루션 아키텍트는 NLB 대상 그룹에 해당 인스턴스를 추가했습니다. 기업의 운영팀은 트래픽이 첫 번째 가용 영역의 인스턴스로만 라우팅되고 있음을 알아냈습니다. 이 문제를 해결하기 위한 가장 운영상 효율적인 솔루션은 무엇입니까?",
        "options_ko": [
            "A. NLB에서 새 가용 영역을 활성화합니다.",
            "B. 두 번째 가용 영역의 인스턴스를 위한 새 NLB를 생성합니다.",
            "C. NLB에서 프록시 프로토콜을 활성화합니다.",
            "D. 두 가용 영역의 인스턴스를 포함하는 새 대상 그룹을 생성합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: NLB에 두 번째 AZ의 인스턴스를 추가했지만 트래픽이 분산되지 않습니다.\n\nA가 맞는 이유:\nNLB는 대상 그룹에 인스턴스를 추가하는 것만으로는 새 AZ로 트래픽을 보내지 않습니다. NLB 자체에서 해당 AZ를 활성화해야 합니다. AZ를 활성화하면 NLB가 해당 AZ에 노드를 생성하고 트래픽을 분산합니다.\n\n오답 분석:\nB) 별도 NLB를 생성하면 단일 엔드포인트가 아니게 됨\nC) 프록시 프로토콜은 클라이언트 IP 보존용이지 AZ 간 트래픽 분산과 무관\nD) 새 대상 그룹을 생성할 필요 없이 기존 대상 그룹에 이미 추가됨. 문제는 NLB의 AZ 활성화"
    },
    {
        "num": 32,
        "question": "A network engineer needs to set up an Amazon EC2 Auto Scaling group to run a Linux-based network appliance in a highly available architecture.\nThe network engineer is configuring the new launch template for the Auto Scaling group.\nIn addition to the primary network interface the network appliance requires a second network interface that will be used exclusively by the\napplication to exchange traffic with hosts over the internet. The company has set up a Bring Your Own IP (BYOIP) pool that includes an Elastic IP\naddress that should be used as the public IP address for the second network interface.\nHow can the network engineer implement the required architecture?",
        "options": [
            "A. Configure the two network interfaces in the launch template. Define the primary network interface to be created in one of the private\nsubnets. For the second network interface, select one of the public subnets. Choose the BYOIP pool ID as the source of public IP addresses.",
            "B. Configure the primary network interface in a private subnet in the launch template. Use the user data option to run a cloud-init script after\nboot to attach the second network interface from a subnet with auto-assign public IP addressing enabled.",
            "C. Create an AWS Lambda function to run as a lifecycle hook of the Auto Scaling group when an instance is launching. In the Lambda function,\nassign a network interface to an AWS Global Accelerator endpoint.",
            "D. During creation of the Auto Scaling group, select subnets for the primary network interface. Use the user data option to run a cloud-init\nscript to allocate a second network interface and to associate an Elastic IP address from the BYOIP pool."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: Auto Scaling 그룹의 EC2 인스턴스에 두 번째 네트워크 인터페이스와 퍼블릭 IP를 자동 할당해야 합니다.\n\nD가 맞는 이유:\nAuto Scaling 그룹 생성 시 기본 ENI의 서브넷을 선택하고, cloud-init 스크립트로 두 번째 ENI를 생성/연결하고 BYOIP 풀에서 탄력적 IP를 할당합니다. 이 방식은 Auto Scaling과 호환되며 자동화가 가능합니다.\n\n오답 분석:\nA) 시작 템플릿에 두 개의 ENI를 정의하면 Auto Scaling 그룹에서 서브넷 지정이 충돌\nB) 자동 할당 퍼블릭 IP는 탄력적 IP가 아니며 BYOIP 풀을 사용할 수 없음\nC) Global Accelerator 엔드포인트는 ENI에 직접 할당하는 것이 아님",
        "question_ko": "네트워크 엔지니어는 Linux 기반 네트워크 어플라이언스를 실행하기 위해 높은 가용성 아키텍처에서 Amazon EC2 Auto Scaling 그룹을 설정해야 합니다. 엔지니어는 Auto Scaling 그룹의 새 시작 템플릿을 구성하고 있습니다. 네트워크 어플라이언스는 기본 네트워크 인터페이스 외에 인터넷과 트래픽을 교환하는 데 전용으로 사용될 두 번째 네트워크 인터페이스가 필요합니다. 기업은 BYOIP(Bring Your Own IP) 풀을 설정했으며 여기에는 두 번째 네트워크 인터페이스의 공용 IP 주소로 사용되어야 하는 탄력적 IP 주소가 포함되어 있습니다. 네트워크 엔지니어가 요구된 아키텍처를 구현할 수 있는 방법은 무엇입니까?",
        "options_ko": [
            "A. 시작 템플릿에 두 네트워크 인터페이스를 구성합니다. 기본 네트워크 인터페이스를 개인 서브넷에 생성하도록 정의합니다. 두 번째 네트워크 인터페이스의 경우 공용 서브넷을 선택하고 BYOIP 풀 ID를 공용 IP 주소의 소스로 선택합니다.",
            "B. 시작 템플릿에서 기본 네트워크 인터페이스를 개인 서브넷에 구성합니다. cloud-init 스크립트를 실행하여 부팅 후 자동 공용 IP 주소 할당이 활성화된 서브넷에서 두 번째 네트워크 인터페이스를 연결합니다.",
            "C. Auto Scaling 그룹의 수명 주기 후크에서 실행되는 AWS Lambda 함수를 생성합니다. Lambda 함수에서 네트워크 인터페이스를 AWS Global Accelerator 엔드포인트에 할당합니다.",
            "D. Auto Scaling 그룹 생성 시 기본 네트워크 인터페이스에 대한 서브넷을 선택합니다. cloud-init 스크립트를 실행하여 두 번째 네트워크 인터페이스를 할당하고 BYOIP 풀에서 탄력적 IP 주소를 연결합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: Auto Scaling 그룹의 EC2 인스턴스에 두 번째 네트워크 인터페이스와 퍼블릭 IP를 자동 할당해야 합니다.\n\nD가 맞는 이유:\nAuto Scaling 그룹 생성 시 기본 ENI의 서브넷을 선택하고, cloud-init 스크립트로 두 번째 ENI를 생성/연결하고 BYOIP 풀에서 탄력적 IP를 할당합니다. 이 방식은 Auto Scaling과 호환되며 자동화가 가능합니다.\n\n오답 분석:\nA) 시작 템플릿에 두 개의 ENI를 정의하면 Auto Scaling 그룹에서 서브넷 지정이 충돌\nB) 자동 할당 퍼블릭 IP는 탄력적 IP가 아니며 BYOIP 풀을 사용할 수 없음\nC) Global Accelerator 엔드포인트는 ENI에 직접 할당하는 것이 아님"
    },
    {
        "num": 33,
        "question": "A company delivers applications over the internet. An Amazon Route 53 public hosted zone is the authoritative DNS service for the company and\nits internet applications, all of which are offered from the same domain name.\nA network engineer is working on a new version of one of the applications. All the application's components are hosted in the AWS Cloud. The\napplication has a three-tier design. The front end is delivered through Amazon EC2 instances that are deployed in public subnets with Elastic IP\naddresses assigned. The backend components are deployed in private subnets from RFC1918.\nComponents of the application need to be able to access other components of the application within the application's VPC by using the same host\nnames as the host names that are used over the public internet. The network engineer also needs to accommodate future DNS changes, such as\nthe introduction of new host names or the retirement of DNS entries.\nWhich combination of steps will meet these requirements? (Choose three.)",
        "options": [
            "A. Add a geoproximity routing policy in Route 53.",
            "B. Create a Route 53 private hosted zone for the same domain name Associate the application’s VPC with the new private hosted zone.",
            "C. Enable DNS hostnames for the application's VPC.",
            "D. Create entries in the private hosted zone for each name in the public hosted zone by using the corresponding private IP addresses.",
            "E. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs when AWS CloudTrail logs a Route 53 API call to the public\nhosted zone. Create an AWS Lambda function as the target of the rule. Configure the function to use the event information to update the\nprivate hosted zone.",
            "F. Add the private IP addresses in the existing Route 53 public hosted zone."
        ],
        "answers": [
            "B",
            "C",
            "D"
        ],
        "isMulti": true,
        "explanation": "정답: B, C, D\n\n핵심: 퍼블릭 호스팅 영역과 동일한 도메인의 프라이빗 호스팅 영역을 만들어 내부 트래픽을 프라이빗 IP로 라우팅해야 합니다.\n\nB, C, D가 맞는 이유:\nB) 동일 도메인의 프라이빗 호스팅 영역을 생성하면 VPC 내부에서는 프라이빗 IP로 확인됩니다.\nC) DNS 호스트 이름을 활성화해야 프라이빗 호스팅 영역이 동작합니다.\nD) 퍼블릭 호스팅 영역의 각 레코드에 대응하는 프라이빗 IP 레코드를 생성합니다.\n\n오답 분석:\nA) 지리적 근접성 라우팅은 외부 사용자 라우팅용이지 내부 트래픽 분리와 무관\nE) CloudTrail + Lambda로 자동 동기화는 과도하게 복잡한 솔루션\nF) 퍼블릭 호스팅 영역에 프라이빗 IP를 추가하면 외부 사용자에게도 프라이빗 IP가 노출됨",
        "question_ko": "인터넷을 통해 애플리케이션을 제공하는 기업이 있습니다. Amazon Route 53 퍼블릭 호스팅 영역이 기업과 그 인터넷 애플리케이션의 권한 있는 DNS 서비스이며, 모든 애플리케이션은 동일한 도메인 이름에서 제공됩니다. 네트워크 엔지니어는 애플리케이션의 새 버전을 작업하고 있습니다. 애플리케이션의 모든 구성 요소는 AWS 클라우드에 호스팅되며 3계층 설계로 구현되어 있습니다. 프런트엔드는 탄력적 IP 주소가 할당된 퍼블릭 서브넷의 Amazon EC2 인스턴스에서 제공됩니다. 백엔드 구성 요소는 RFC1918의 프라이빗 서브넷에 배포됩니다. 애플리케이션 구성 요소는 퍼블릭 인터넷의 호스트 이름과 동일한 호스트 이름을 사용하여 애플리케이션의 VPC 내부에서 서로 액세스해야 합니다. 또한 새 호스트 이름 추가 또는 DNS 항목 삭제와 같은 향후 DNS 변경 사항도 수용할 수 있어야 합니다. 이 요구 사항을 충족하기 위한 단계 조합은 무엇입니까? (3개 선택)",
        "options_ko": [
            "A. Route 53에 지리적 근접성 라우팅 정책을 추가합니다.",
            "B. 동일한 도메인 이름에 대해 Route 53 프라이빗 호스팅 영역을 생성하고 애플리케이션의 VPC와 연결합니다.",
            "C. 애플리케이션의 VPC에 대해 DNS 호스트 이름을 활성화합니다.",
            "D. 퍼블릭 호스팅 영역의 각 이름에 대해 해당하는 프라이빗 IP 주소를 사용하여 프라이빗 호스팅 영역에 항목을 생성합니다.",
            "E. AWS CloudTrail이 퍼블릭 호스팅 영역의 Route 53 API 호출을 기록할 때 실행되는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. 규칙의 대상으로 AWS Lambda 함수를 구성합니다. 함수에서 이벤트 정보를 사용하여 프라이빗 호스팅 영역을 업데이트합니다.",
            "F. 기존 Route 53 퍼블릭 호스팅 영역에 프라이빗 IP 주소를 추가합니다."
        ],
        "explanation_ko": "정답: B, C, D\n\n핵심: 퍼블릭 호스팅 영역과 동일한 도메인의 프라이빗 호스팅 영역을 만들어 내부 트래픽을 프라이빗 IP로 라우팅해야 합니다.\n\nB, C, D가 맞는 이유:\nB) 동일 도메인의 프라이빗 호스팅 영역을 생성하면 VPC 내부에서는 프라이빗 IP로 확인됩니다.\nC) DNS 호스트 이름을 활성화해야 프라이빗 호스팅 영역이 동작합니다.\nD) 퍼블릭 호스팅 영역의 각 레코드에 대응하는 프라이빗 IP 레코드를 생성합니다.\n\n오답 분석:\nA) 지리적 근접성 라우팅은 외부 사용자 라우팅용이지 내부 트래픽 분리와 무관\nE) CloudTrail + Lambda로 자동 동기화는 과도하게 복잡한 솔루션\nF) 퍼블릭 호스팅 영역에 프라이빗 IP를 추가하면 외부 사용자에게도 프라이빗 IP가 노출됨"
    },
    {
        "num": 34,
        "question": "A company is deploying an application. The application is implemented in a series of containers in an Amazon Elastic Container Service (Amazon\nECS) cluster. The company will use the Fargate launch type for its tasks. The containers will run workloads that require connectivity initiated over\nan SSL connection. Traffic must be able to flow to the application from other AWS accounts over private connectivity. The application must scale\nin a manageable way as more consumers use the application.\nWhich solution will meet these requirements?",
        "options": [
            "A. Choose a Gateway Load Balancer (GLB) as the type of load balancer for the ECS service. Create a lifecycle hook to add new tasks to the\ntarget group from Amazon ECS as required to handle scaling. Specify the GLB in the service definition. Create a VPC peer for external AWS\naccounts. Update the route tables so that the AWS accounts can reach the GLB.",
            "B. Choose an Application Load Balancer (ALB) as the type of load balancer for the ECS service. Create path-based routing rules to allow the\napplication to target the containers that are registered in the target group. Specify the ALB in the service definition. Create a VPC endpoint\nservice for the ALB Share the VPC endpoint service with other AWS accounts.",
            "C. Choose an Application Load Balancer (ALB) as the type of load balancer for the ECS service. Create path-based routing rules to allow the\napplication to target the containers that are registered in the target group. Specify the ALB in the service definition. Create a VPC peer for the\nexternal AWS accounts. Update the route tables so that the AWS accounts can reach the ALB.",
            "D. Choose a Network Load Balancer (NLB) as the type of load balancer for the ECS service. Specify the NLB in the service definition. Create a\nVPC endpoint service for the NLB. Share the VPC endpoint service with other AWS accounts."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: ECS Fargate 컨테이너 서비스를 다른 AWS 계정에서 프라이빗하게 접근해야 합니다.\n\nD가 맞는 이유:\nNLB는 PrivateLink(VPC 엔드포인트 서비스)와 호환됩니다. ECS 서비스 앞에 NLB를 배치하고, NLB에 대한 VPC 엔드포인트 서비스를 생성하면 다른 AWS 계정에서 프라이빗하게 접근할 수 있습니다.\n\n오답 분석:\nA) GLB는 보안 어플라이언스 삽입용이며 ECS 서비스 로드밸런싱에 부적합\nB) ALB + VPC 엔드포인트는 직접 지원되지 않음 (PrivateLink는 NLB 필요)\nC) ALB + VPC 엔드포인트 서비스도 NLB가 필요",
        "question_ko": "기업이 애플리케이션을 배포하고 있습니다. 애플리케이션은 Amazon Elastic Container Service(Amazon ECS) 클러스터의 일련의 컨테이너로 구현되며 Fargate 시작 유형을 사용할 것입니다. 컨테이너는 SSL 연결을 통해 시작된 연결이 필요한 작업을 실행할 것입니다. 트래픽이 다른 AWS 계정에서 프라이빗 연결을 통해 애플리케이션으로 흐를 수 있어야 합니다. 애플리케이션은 더 많은 소비자가 사용하게 되면 관리하기 쉽게 확장되어야 합니다. 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Gateway Load Balancer(GLB)를 ECS 서비스에 대한 로드 밸런서 유형으로 선택합니다. Amazon ECS에서 새 작업을 대상 그룹에 추가하는 수명 주기 후크를 생성하여 확장을 처리합니다. 서비스 정의에서 GLB를 지정합니다. 외부 AWS 계정에 대한 VPC 피어링을 생성하고 경로 테이블을 업데이트하여 계정이 GLB에 도달할 수 있도록 합니다.",
            "B. Application Load Balancer(ALB)를 ECS 서비스에 대한 로드 밸런서 유형으로 선택합니다. 대상 그룹에 등록된 컨테이너를 대상으로 하도록 경로 기반 라우팅 규칙을 생성합니다. 서비스 정의에서 ALB를 지정합니다. ALB에 대한 VPC 엔드포인트 서비스를 생성하고 다른 AWS 계정과 공유합니다.",
            "C. Application Load Balancer(ALB)를 ECS 서비스에 대한 로드 밸런서 유형으로 선택합니다. 대상 그룹에 등록된 컨테이너를 대상으로 하도록 경로 기반 라우팅 규칙을 생성합니다. 서비스 정의에서 ALB를 지정합니다. 외부 AWS 계정에 대한 VPC 피어링을 생성하고 경로 테이블을 업데이트하여 계정이 ALB에 도달할 수 있도록 합니다.",
            "D. Network Load Balancer(NLB)를 ECS 서비스에 대한 로드 밸런서 유형으로 선택합니다. 서비스 정의에 NLB를 지정합니다. NLB에 대한 VPC 엔드포인트 서비스를 생성하고 다른 AWS 계정과 공유합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: ECS Fargate 컨테이너 서비스를 다른 AWS 계정에서 프라이빗하게 접근해야 합니다.\n\nD가 맞는 이유:\nNLB는 PrivateLink(VPC 엔드포인트 서비스)와 호환됩니다. ECS 서비스 앞에 NLB를 배치하고, NLB에 대한 VPC 엔드포인트 서비스를 생성하면 다른 AWS 계정에서 프라이빗하게 접근할 수 있습니다.\n\n오답 분석:\nA) GLB는 보안 어플라이언스 삽입용이며 ECS 서비스 로드밸런싱에 부적합\nB) ALB + VPC 엔드포인트는 직접 지원되지 않음 (PrivateLink는 NLB 필요)\nC) ALB + VPC 엔드포인트 서비스도 NLB가 필요"
    },
    {
        "num": 35,
        "question": "A company's development team has created a new product recommendation web service. The web service is hosted in a VPC with a CIDR block of\n192.168.224.0/19. The company has deployed the web service on Amazon EC2 instances and has configured an Auto Scaling group as the target\nof a Network Load Balancer (NLB).\nThe company wants to perform testing to determine whether users who receive product recommendations spend more money than users who do\nnot receive product recommendations. The company has a big sales event in 5 days and needs to integrate its existing production environment\nwith the recommendation engine by then. The existing production environment is hosted in a VPC with a CIDR block of 192.168.128 0/17.\nA network engineer must integrate the systems by designing a solution that results in the least possible disruption to the existing environments.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a VPC peering connection between the web service VPC and the existing production VPC. Add a routing rule to the appropriate route\ntable to allow data to flow to 192.168.224.0/19 from the existing production environment and to flow to 192.168.128.0/17 from the web\nservice environment. Configure the relevant security groups and ACLs to allow the systems to communicate.",
            "B. Ask the development team of the web service to redeploy the web service into the production VPC and integrate the systems there.",
            "C. Create a VPC endpoint service. Associate the VPC endpoint service with the NLB for the web service. Create an interface VPC endpoint for\nthe web service in the existing production VPC.",
            "D. Create a transit gateway in the existing production environment. Create attachments to the production VPC and the web service VPC.\nConfigure appropriate routing rules in the transit gateway and VPC route tables for 192.168.224.0/19 and 192.168.128.0/17. Configure the\nrelevant security groups and ACLs to allow the systems to communicate."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 별도 VPC의 웹 서비스를 기존 프로덕션 VPC에서 프라이빗하게 접근해야 합니다.\n\nC가 맞는 이유:\nVPC 엔드포인트 서비스(PrivateLink)를 생성하고 NLB와 연결하면, 프로덕션 VPC에서 인터페이스 VPC 엔드포인트를 통해 프라이빗하게 접근할 수 있습니다. CIDR 중복 걱정 없이 안전하게 연결됩니다.\n\n오답 분석:\nA) VPC 피어링은 가능하지만 CIDR이 겹치면 사용 불가하며, PrivateLink보다 노출 범위가 넓음\nB) 프로덕션 VPC에 재배포하면 환경 분리 원칙 위반\nD) Transit Gateway는 가능하지만 단일 서비스 접근에 과도한 인프라",
        "question_ko": "기업의 개발팀이 새로운 제품 추천 웹 서비스를 생성했습니다. 웹 서비스는 CIDR 블록이 192.168.224.0/19인 VPC에 호스팅됩니다. 기업은 Amazon EC2 인스턴스에 웹 서비스를 배포하고 Network Load Balancer(NLB)의 대상으로 Auto Scaling 그룹을 구성했습니다. 기업은 제품 추천을 받은 사용자가 받지 않은 사용자보다 더 많이 지출하는지 테스트하려고 합니다. 회사에는 5일 후에 큰 판매 행사가 있으며 기존 프로덕션 환경을 추천 엔진과 통합해야 합니다. 기존 프로덕션 환경은 CIDR 블록이 192.168.128.0/17인 VPC에 호스팅됩니다. 네트워크 엔지니어는 기존 환경에 최소한의 중단을 주는 솔루션을 설계해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 웹 서비스 VPC와 기존 프로덕션 VPC 간에 VPC 피어링 연결을 생성합니다. 적절한 경로 테이블에 라우팅 규칙을 추가하여 기존 프로덕션 환경에서 192.168.224.0/19로, 웹 서비스 환경에서 192.168.128.0/17로 데이터 흐름을 허용합니다. 시스템 간 통신을 허용하도록 관련 보안 그룹과 ACL을 구성합니다.",
            "B. 웹 서비스 개발팀에게 웹 서비스를 프로덕션 VPC에 재배포하고 시스템을 그곳에 통합하도록 요청합니다.",
            "C. VPC 엔드포인트 서비스를 생성합니다. VPC 엔드포인트 서비스를 웹 서비스의 NLB와 연결합니다. 기존 프로덕션 VPC에 인터페이스 VPC 엔드포인트를 생성합니다.",
            "D. 기존 프로덕션 환경에 트랜잇 게이트웨이를 생성합니다. 프로덕션 VPC와 웹 서비스 VPC에 대한 연결을 생성합니다. 트랜잇 게이트웨이와 VPC 경로 테이블에서 192.168.224.0/19 및 192.168.128.0/17에 대한 적절한 라우팅 규칙을 구성합니다. 시스템 간 통신을 허용하도록 관련 보안 그룹과 ACL을 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 별도 VPC의 웹 서비스를 기존 프로덕션 VPC에서 프라이빗하게 접근해야 합니다.\n\nC가 맞는 이유:\nVPC 엔드포인트 서비스(PrivateLink)를 생성하고 NLB와 연결하면, 프로덕션 VPC에서 인터페이스 VPC 엔드포인트를 통해 프라이빗하게 접근할 수 있습니다. CIDR 중복 걱정 없이 안전하게 연결됩니다.\n\n오답 분석:\nA) VPC 피어링은 가능하지만 CIDR이 겹치면 사용 불가하며, PrivateLink보다 노출 범위가 넓음\nB) 프로덕션 VPC에 재배포하면 환경 분리 원칙 위반\nD) Transit Gateway는 가능하지만 단일 서비스 접근에 과도한 인프라"
    },
    {
        "num": 36,
        "question": "A network engineer needs to update a company's hybrid network to support IPv6 for the upcoming release of a new application. The application is\nhosted in a VPC in the AWS Cloud. The company's current AWS infrastructure includes VPCs that are connected by a transit gateway. The transit\ngateway is connected to the on-premises network by AWS Direct Connect and AWS Site-to-Site VPN. The company's on-premises devices have\nbeen updated to support the new IPv6 requirements.\nThe company has enabled IPv6 for the existing VPC by assigning a new IPv6 CIDR block to the VPC and by assigning IPv6 to the subnets for dual-\nstack support. The company has launched new Amazon EC2 instances for the new application in the updated subnets.\nWhen updating the hybrid network to support IPv6 the network engineer must avoid making any changes to the current infrastructure. The network\nengineer also must block direct access to the instances' new IPv6 addresses from the internet. However, the network engineer must allow\noutbound internet access from the instances.\nWhat is the MOST operationally efficient solution that meets these requirements?",
        "options": [
            "A. Update the Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN\nconnection that supports IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to\nprovide connectivity within the VPC and between the VPC and the on-premises devices",
            "B. Update the Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Update the existing VPN\nconnection to support IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to\nprovide connectivity within the VPC and between the VPC and the on-premises devices.",
            "C. Create a Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN connection\nthat supports IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to provide\nconnectivity within the VPC and between the VPC and the on-premises devices.",
            "D. Create a Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN connection\nthat supports IPv6 connectivity. Add a NAT gateway. Update any affected VPC security groups and route tables to provide connectivity within\nthe VPC and between the VPC and the on-premises devices."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 기존 IPv4 하이브리드 네트워크에 IPv6 지원을 추가해야 합니다.\n\nC가 맞는 이유:\nIPv6용 새 트랜짓 VIF를 생성하고(기존 VIF는 IPv4 전용이므로 업데이트 불가), IPv6 VPN 연결을 새로 생성합니다. Egress-only IGW는 IPv6 아웃바운드 인터넷 접근을 제공합니다.\n\n오답 분석:\nA) 기존 트랜짓 VIF를 IPv6로 업데이트하는 것은 불가. 새로 생성해야 함\nB) 기존 VPN 연결을 IPv6로 업데이트하는 것도 불가. 새로 생성해야 함\nD) NAT 게이트웨이는 IPv6를 지원하지 않음. Egress-only IGW가 필요",
        "question_ko": "네트워크 엔지니어는 새로운 애플리케이션 출시를 위해 하이브리드 네트워크를 IPv6를 지원하도록 업데이트해야 합니다. 애플리케이션은 AWS 클라우드의 VPC에 호스팅됩니다. 회사의 현재 AWS 인프라에는 트랜짓 게이트웨이로 연결된 VPC가 포함됩니다. 트랜짓 게이트웨이는 AWS Direct Connect와 AWS Site-to-Site VPN을 통해 온프레미스 네트워크에 연결됩니다. 회사의 온프레미스 디바이스는 새로운 IPv6 요구 사항을 지원하도록 업데이트되었습니다. 회사는 VPC에 새로운 IPv6 CIDR 블록을 할당하고 서브넷에 IPv6를 할당하여 기존 VPC에서 IPv6를 활성화했습니다. 회사는 새로운 애플리케이션을 위해 업데이트된 서브넷에 새로운 Amazon EC2 인스턴스를 시작했습니다. 네트워크 엔지니어는 하이브리드 네트워크를 IPv6로 업데이트할 때 현재 인프라에 대한 변경을 방지해야 합니다. 또한 인터넷에서 인스턴스의 새로운 IPv6 주소에 대한 직접 액세스를 차단해야 하지만 인스턴스에서 아웃바운드 인터넷 액세스는 허용해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 전송 VIF를 업데이트하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. 아웃바운드 전용 인터넷 게이트웨이를 추가합니다. VPC 내부 및 VPC와 온프레미스 디바이스 간의 연결성을 제공하도록 영향을 받은 VPC 보안 그룹과 라우팅 테이블을 업데이트합니다.",
            "B. Direct Connect 전송 VIF를 업데이트하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. 기존 VPN 연결을 업데이트하여 IPv6 연결을 지원합니다. 아웃바운드 전용 인터넷 게이트웨이를 추가합니다. VPC 내부 및 VPC와 온프레미스 디바이스 간의 연결성을 제공하도록 영향을 받은 VPC 보안 그룹과 라우팅 테이블을 업데이트합니다.",
            "C. Direct Connect 전송 VIF를 생성하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. 아웃바운드 전용 인터넷 게이트웨이를 추가합니다. VPC 내부 및 VPC와 온프레미스 디바이스 간의 연결성을 제공하도록 영향을 받은 VPC 보안 그룹과 라우팅 테이블을 업데이트합니다.",
            "D. Direct Connect 전송 VIF를 생성하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. NAT 게이트웨이를 추가합니다. VPC 내부 및 VPC와 온프레미스 디바이스 간의 연결성을 제공하도록 영향을 받은 VPC 보안 그룹과 라우팅 테이블을 업데이트합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 기존 IPv4 하이브리드 네트워크에 IPv6 지원을 추가해야 합니다.\n\nC가 맞는 이유:\nIPv6용 새 트랜짓 VIF를 생성하고(기존 VIF는 IPv4 전용이므로 업데이트 불가), IPv6 VPN 연결을 새로 생성합니다. Egress-only IGW는 IPv6 아웃바운드 인터넷 접근을 제공합니다.\n\n오답 분석:\nA) 기존 트랜짓 VIF를 IPv6로 업데이트하는 것은 불가. 새로 생성해야 함\nB) 기존 VPN 연결을 IPv6로 업데이트하는 것도 불가. 새로 생성해야 함\nD) NAT 게이트웨이는 IPv6를 지원하지 않음. Egress-only IGW가 필요"
    },
    {
        "num": 37,
        "question": "A network engineer must provide additional safeguards to protect encrypted data at Application Load Balancers (ALBs) through the use of a\nunique random session key.\nWhat should the network engineer do to meet this requirement?",
        "options": [
            "A. Change the ALB security policy to a policy that supports TLS 1.2 protocol only",
            "B. Use AWS Key Management Service (AWS KMS) to encrypt session keys",
            "C. Associate an AWS WAF web ACL with the ALBs. and create a security rule to enforce forward secrecy (FS)",
            "D. Change the ALB security policy to a policy that supports forward secrecy (FS)"
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: ALB에서 고유한 랜덤 세션 키를 사용하여 데이터를 보호해야 합니다.\n\nD가 맞는 이유:\nForward Secrecy(FS)는 각 세션마다 고유한 임시 키를 생성하여 암호화합니다. 서버의 프라이빗 키가 유출되어도 과거 세션 데이터를 복호화할 수 없습니다. ALB 보안 정책을 FS를 지원하는 정책으로 변경하면 됩니다.\n\n오답 분석:\nA) TLS 1.2만 지원하는 정책이 반드시 FS를 포함하지는 않음\nB) KMS는 세션 키 암호화와 무관. TLS 세션 키는 TLS 핸드셰이크에서 생성됨\nC) AWS WAF는 웹 공격 방어용이지 TLS 세션 키 관리와 무관",
        "question_ko": "네트워크 엔지니어는 Application Load Balancer(ALB)에서 암호화된 데이터를 보호하기 위해 고유한 랜덤 세션 키를 사용해야 합니다.",
        "options_ko": [
            "A. ALB 보안 정책을 TLS 1.2 프로토콜만 지원하는 정책으로 변경합니다.",
            "B. AWS Key Management Service(AWS KMS)를 사용하여 세션 키를 암호화합니다.",
            "C. ALB에 AWS WAF 웹 ACL을 연결하고 forward secrecy(FS)를 적용하는 보안 규칙을 생성합니다.",
            "D. ALB 보안 정책을 forward secrecy(FS)를 지원하는 정책으로 변경합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: ALB에서 고유한 랜덤 세션 키를 사용하여 데이터를 보호해야 합니다.\n\nD가 맞는 이유:\nForward Secrecy(FS)는 각 세션마다 고유한 임시 키를 생성하여 암호화합니다. 서버의 프라이빗 키가 유출되어도 과거 세션 데이터를 복호화할 수 없습니다. ALB 보안 정책을 FS를 지원하는 정책으로 변경하면 됩니다.\n\n오답 분석:\nA) TLS 1.2만 지원하는 정책이 반드시 FS를 포함하지는 않음\nB) KMS는 세션 키 암호화와 무관. TLS 세션 키는 TLS 핸드셰이크에서 생성됨\nC) AWS WAF는 웹 공격 방어용이지 TLS 세션 키 관리와 무관"
    },
    {
        "num": 38,
        "question": "A company has deployed a software-defined WAN (SD-WAN) solution to interconnect all of its offices. The company is migrating workloads to\nAWS and needs to extend its SD-WAN solution to support connectivity to these workloads.\nA network engineer plans to deploy AWS Transit Gateway Connect and two SD-WAN virtual appliances to provide this connectivity. According to\ncompany policies, only a single SD-WAN virtual appliance can handle traffic from AWS workloads at a given time.\nHow should the network engineer configure routing to meet these requirements?",
        "options": [
            "A. Add a static default route in the transit gateway route table to point to the secondary SD-WAN virtual appliance. Add routes that are more\nspecific to point to the primary SD-WAN virtual appliance.",
            "B. Configure the BGP community tag 7224:7300 on the primary SD-WAN virtual appliance for BGP routes toward the transit gateway.",
            "C. Configure the AS_PATH prepend attribute on the secondary SD-WAN virtual appliance for BGP routes toward the transit gateway.",
            "D. Disable equal-cost multi-path (ECMP) routing on the transit gateway for Transit Gateway Connect."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: Transit Gateway Connect로 연결된 두 SD-WAN 어플라이언스 간 액티브-패시브 구성이 필요합니다.\n\nC가 맞는 이유:\n보조 SD-WAN 어플라이언스에서 AS_PATH prepend를 구성하면 BGP 경로의 AS 경로 길이가 길어져 우선순위가 낮아집니다. 기본 어플라이언스의 경로가 더 짧으므로 우선 선택되고, 장애 시 보조로 자동 전환됩니다.\n\n오답 분석:\nA) 정적 경로와 더 구체적인 경로 조합은 BGP 동적 라우팅의 장점을 활용하지 못함\nB) BGP 커뮤니티 7224:7300은 Direct Connect에서 사용하는 값이지 Transit Gateway Connect용이 아님\nD) ECMP를 비활성화하면 이중화가 아닌 단일 경로만 사용하게 됨",
        "question_ko": "회사는 모든 사무소를 상호 연결하기 위해 소프트웨어 정의 WAN(SD-WAN) 솔루션을 배포했습니다. 회사는 AWS로 워크로드를 마이그레이션하고 이러한 워크로드에 대한 연결성을 SD-WAN 솔루션으로 확장해야 합니다. 네트워크 엔지니어는 AWS Transit Gateway Connect와 두 개의 SD-WAN 가상 어플라이언스를 배포하여 이 연결성을 제공할 계획입니다. 회사 정책에 따르면 AWS 워크로드의 트래픽은 한 번에 하나의 SD-WAN 가상 어플라이언스에서만 처리할 수 있습니다. 이러한 요구 사항을 충족하도록 라우팅을 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이 라우팅 테이블에 보조 SD-WAN 가상 어플라이언스를 가리키는 정적 기본 경로를 추가합니다. 기본 SD-WAN 가상 어플라이언스를 가리키는 더 구체적인 경로를 추가합니다.",
            "B. 기본 SD-WAN 가상 어플라이언스에서 트랜짓 게이트웨이로의 BGP 경로에 BGP 커뮤니티 태그 7224:7300을 구성합니다.",
            "C. 보조 SD-WAN 가상 어플라이언스에서 트랜짓 게이트웨이로의 BGP 경로에 AS_PATH prepend 속성을 구성합니다.",
            "D. Transit Gateway Connect에 대한 동등 비용 다중 경로(ECMP) 라우팅을 트랜짓 게이트웨이에서 비활성화합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: Transit Gateway Connect로 연결된 두 SD-WAN 어플라이언스 간 액티브-패시브 구성이 필요합니다.\n\nC가 맞는 이유:\n보조 SD-WAN 어플라이언스에서 AS_PATH prepend를 구성하면 BGP 경로의 AS 경로 길이가 길어져 우선순위가 낮아집니다. 기본 어플라이언스의 경로가 더 짧으므로 우선 선택되고, 장애 시 보조로 자동 전환됩니다.\n\n오답 분석:\nA) 정적 경로와 더 구체적인 경로 조합은 BGP 동적 라우팅의 장점을 활용하지 못함\nB) BGP 커뮤니티 7224:7300은 Direct Connect에서 사용하는 값이지 Transit Gateway Connect용이 아님\nD) ECMP를 비활성화하면 이중화가 아닌 단일 경로만 사용하게 됨"
    },
    {
        "num": 39,
        "question": "A company is planning to deploy many software-defined WAN (SD-WAN) sites. The company is using AWS Transit Gateway and has deployed a\ntransit gateway in the required AWS Region. A network engineer needs to deploy the SD-WAN hub virtual appliance into a VPC that is connected to\nthe transit gateway. The solution must support at least 5 Gbps of throughput from the SD-WAN hub virtual appliance to other VPCs that are\nattached to the transit gateway.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a new VPC for the SD-WAN hub virtual appliance. Create two IPsec VPN connections between the SD-WAN hub virtual appliance and\nthe transit gateway. Configure BGP over the IPsec VPN connections",
            "B. Assign a new CIDR block to the transit gateway. Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit\ngateway with a VPC attachment. Add a transit gateway Connect attachment. Create a Connect peer and specify the GRE and BGP parameters.\nCreate a route in the appropriate VPC for the SD-WAN hub virtual appliance to route to the transit gateway.",
            "C. Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit gateway with a VPC attachment. Create two\nIPsec VPN connections between the SD-WAN hub virtual appliance and the transit gateway. Configure BGP over the IPsec VPN connections.",
            "D. Assign a new CIDR block to the transit gateway. Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit\ngateway with a VPC attachment. Add a transit gateway Connect attachment. Create a Connect peer and specify the VXLAN and BGP\nparameters. Create a route in the appropriate VPC for the SD-WAN hub virtual appliance to route to the transit gateway."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: SD-WAN 허브를 Transit Gateway에 연결하여 다른 VPC에서 SD-WAN 사이트에 접근해야 합니다.\n\nB가 맞는 이유:\nTransit Gateway Connect는 GRE 터널과 BGP를 사용하여 SD-WAN 어플라이언스를 Transit Gateway에 네이티브로 연결합니다. Transit Gateway에 CIDR 블록을 할당하고, VPC 연결 위에 Connect 연결을 추가하면 고성능 연결이 가능합니다.\n\n오답 분석:\nA) IPsec VPN은 Transit Gateway Connect보다 성능이 낮고 터널당 1.25Gbps 제한\nC) A와 동일한 IPsec VPN 제한\nD) VXLAN은 Transit Gateway Connect에서 지원하지 않음. GRE만 지원",
        "question_ko": "회사는 많은 소프트웨어 정의 WAN(SD-WAN) 사이트를 배포할 계획입니다. 회사는 AWS Transit Gateway를 사용하고 필요한 AWS 리전에 트랜짓 게이트웨이를 배포했습니다. 네트워크 엔지니어는 트랜짓 게이트웨이에 연결된 VPC에 SD-WAN 허브 가상 어플라이언스를 배포해야 합니다. 이 솔루션은 트랜짓 게이트웨이에 연결된 다른 VPC에서 SD-WAN 허브 가상 어플라이언스로의 처리량이 최소 5Gbps 이상이어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. SD-WAN 허브 가상 어플라이언스를 위한 새로운 VPC를 생성합니다. SD-WAN 허브 가상 어플라이언스와 트랜짓 게이트웨이 간에 두 개의 IPsec VPN 연결을 생성하고 BGP를 구성합니다.",
            "B. 트랜짓 게이트웨이에 새 CIDR 블록을 할당합니다. SD-WAN 허브 가상 어플라이언스를 위한 새 VPC를 생성하고 VPC 연결을 통해 트랜짓 게이트웨이에 연결합니다. Transit Gateway Connect 연결을 추가하고 GRE와 BGP 매개변수를 지정하여 Connect 피어를 생성합니다. 적절한 VPC에 SD-WAN 허브 가상 어플라이언스를 가리키는 경로를 생성합니다.",
            "C. SD-WAN 허브 가상 어플라이언스를 위한 새 VPC를 생성하고 VPC 연결을 통해 트랜짓 게이트웨이에 연결합니다. SD-WAN 허브 가상 어플라이언스와 트랜짓 게이트웨이 간에 두 개의 IPsec VPN 연결을 생성하고 BGP를 구성합니다.",
            "D. 트랜짓 게이트웨이에 새 CIDR 블록을 할당합니다. SD-WAN 허브 가상 어플라이언스를 위한 새 VPC를 생성하고 VPC 연결을 통해 트랜짓 게이트웨이에 연결합니다. Transit Gateway Connect 연결을 추가하고 VXLAN과 BGP 매개변수를 지정하여 Connect 피어를 생성합니다. 적절한 VPC에 SD-WAN 허브 가상 어플라이언스를 가리키는 경로를 생성합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: SD-WAN 허브를 Transit Gateway에 연결하여 다른 VPC에서 SD-WAN 사이트에 접근해야 합니다.\n\nB가 맞는 이유:\nTransit Gateway Connect는 GRE 터널과 BGP를 사용하여 SD-WAN 어플라이언스를 Transit Gateway에 네이티브로 연결합니다. Transit Gateway에 CIDR 블록을 할당하고, VPC 연결 위에 Connect 연결을 추가하면 고성능 연결이 가능합니다.\n\n오답 분석:\nA) IPsec VPN은 Transit Gateway Connect보다 성능이 낮고 터널당 1.25Gbps 제한\nC) A와 동일한 IPsec VPN 제한\nD) VXLAN은 Transit Gateway Connect에서 지원하지 않음. GRE만 지원"
    },
    {
        "num": 40,
        "question": "A company is deploying a new application on AWS. The application uses dynamic multicasting. The company has five VPCs that are all attached\nto a transit gateway Amazon EC2 instances in each VPC need to be able to register dynamically to receive a multicast transmission.\nHow should a network engineer configure the AWS resources to meet these requirements?",
        "options": [
            "A. Create a static source multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain.\nRegister the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow UDP traffic from the source to\nall receivers and to allow UDP traffic that is sent to the multicast group address.",
            "B. Create a static source multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain.\nRegister the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow TCP traffic from the source to\nall receivers and to allow TCP traffic that is sent to the multicast group address.",
            "C. Create an Internet Group Management Protocol (IGMP) multicast domain within the transit gateway. Associate the VPCs and applicable\nsubnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to\nallow UDP traffic from the source to all receivers and to allow UDP traffic that is sent to the multicast group address.",
            "D. Create an Internet Group Management Protocol (IGMP) multicast domain within the transit gateway. Associate the VPCs and applicable\nsubnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to\nallow TCP traffic from the source to all receivers and to allow TCP traffic that is sent to the multicast group address."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: EC2 인스턴스가 동적으로 멀티캐스트 전송에 등록할 수 있어야 합니다.\n\nC가 맞는 이유:\nIGMP 멀티캐스트 도메인은 EC2 인스턴스가 IGMP 프로토콜을 사용하여 동적으로 멀티캐스트 그룹에 가입/탈퇴할 수 있습니다. 멀티캐스트는 UDP 기반이므로 UDP 트래픽을 허용해야 합니다.\n\n오답 분석:\nA) 정적 소스 멀티캐스트는 수동 등록이 필요하여 동적 등록 요구사항 불충족\nB) 정적 소스 + TCP는 두 가지 모두 잘못됨 (정적이고 멀티캐스트는 UDP)\nD) IGMP는 맞지만 TCP는 멀티캐스트에 사용되지 않음",
        "question_ko": "회사는 AWS에 새로운 애플리케이션을 배포하고 있습니다. 이 애플리케이션은 동적 멀티캐스팅을 사용합니다. 회사에는 트랜짓 게이트웨이에 연결된 5개의 VPC가 있습니다. 각 VPC의 Amazon EC2 인스턴스는 동적으로 멀티캐스트 전송에 등록할 수 있어야 합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하도록 AWS 리소스를 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이 내에 정적 소스 멀티캐스트 도메인을 생성합니다. VPC와 해당 서브넷을 멀티캐스트 도메인에 연결합니다. 멀티캐스트 전송자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 소스에서 모든 수신기로의 UDP 트래픽과 멀티캐스트 그룹 주소로 전송되는 UDP 트래픽을 허용하도록 네트워크 ACL을 조정합니다.",
            "B. 트랜짓 게이트웨이 내에 정적 소스 멀티캐스트 도메인을 생성합니다. VPC와 해당 서브넷을 멀티캐스트 도메인에 연결합니다. 멀티캐스트 전송자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 소스에서 모든 수신기로의 TCP 트래픽과 멀티캐스트 그룹 주소로 전송되는 TCP 트래픽을 허용하도록 네트워크 ACL을 조정합니다.",
            "C. 트랜짓 게이트웨이 내에 IGMP 멀티캐스트 도메인을 생성합니다. VPC와 해당 서브넷을 멀티캐스트 도메인에 연결합니다. 멀티캐스트 전송자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 소스에서 모든 수신기로의 UDP 트래픽과 멀티캐스트 그룹 주소로 전송되는 UDP 트래픽을 허용하도록 네트워크 ACL을 조정합니다.",
            "D. 트랜짓 게이트웨이 내에 IGMP 멀티캐스트 도메인을 생성합니다. VPC와 해당 서브넷을 멀티캐스트 도메인에 연결합니다. 멀티캐스트 전송자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 소스에서 모든 수신기로의 TCP 트래픽과 멀티캐스트 그룹 주소로 전송되는 TCP 트래픽을 허용하도록 네트워크 ACL을 조정합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: EC2 인스턴스가 동적으로 멀티캐스트 전송에 등록할 수 있어야 합니다.\n\nC가 맞는 이유:\nIGMP 멀티캐스트 도메인은 EC2 인스턴스가 IGMP 프로토콜을 사용하여 동적으로 멀티캐스트 그룹에 가입/탈퇴할 수 있습니다. 멀티캐스트는 UDP 기반이므로 UDP 트래픽을 허용해야 합니다.\n\n오답 분석:\nA) 정적 소스 멀티캐스트는 수동 등록이 필요하여 동적 등록 요구사항 불충족\nB) 정적 소스 + TCP는 두 가지 모두 잘못됨 (정적이고 멀티캐스트는 UDP)\nD) IGMP는 맞지만 TCP는 멀티캐스트에 사용되지 않음"
    },
    {
        "num": 41,
        "question": "A company is creating new features for its ecommerce website. These features will use several microservices that are accessed through different\npaths. The microservices will run on Amazon Elastic Container Service (Amazon ECS). The company requires the use of HTTPS for all of its public\nwebsites. The application requires the customer’s source IP addresses.\nA network engineer must implement a load balancing strategy that meets these requirements.\nWhich combination of actions should the network engineer take to accomplish this goal? (Choose two.)",
        "options": [
            "A. Use a Network Load Balancer",
            "B. Retrieve client IP addresses by using the X-Forwarded-For header",
            "C. Use AWS App Mesh load balancing",
            "D. Retrieve client IP addresses by using the X-IP-Source header",
            "E. Use an Application Load Balancer."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: B, E\n\n핵심: HTTPS + 경로 기반 라우팅 + 클라이언트 IP 확인이 필요한 마이크로서비스 아키텍처입니다.\n\nB, E가 맞는 이유:\nE) ALB는 경로 기반 라우팅을 지원하여 URL 경로별로 다른 마이크로서비스(ECS 대상 그룹)로 트래픽을 분산합니다.\nB) ALB는 X-Forwarded-For 헤더를 통해 원본 클라이언트 IP를 백엔드에 전달합니다.\n\n오답 분석:\nA) NLB는 L4로 경로 기반 라우팅 불가\nC) AWS App Mesh는 서비스 메시이지 로드 밸런서가 아님\nD) X-IP-Source는 표준 헤더가 아님",
        "question_ko": "회사가 전자상거래 웹사이트에 새로운 기능을 만들고 있습니다. 이러한 기능은 다양한 경로를 통해 접근할 수 있는 여러 마이크로서비스를 사용할 것입니다. 마이크로서비스는 Amazon Elastic Container Service(Amazon ECS)에서 실행될 것입니다. 회사는 모든 공개 웹사이트에 HTTPS를 사용해야 합니다. 이 애플리케이션은 고객의 소스 IP 주소가 필요합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하는 부하 분산 전략을 구현해야 합니다. 이 목표를 달성하기 위해 엔지니어가 취해야 할 조치는 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. Network Load Balancer 사용",
            "B. X-Forwarded-For 헤더를 사용하여 클라이언트 IP 주소 검색",
            "C. AWS App Mesh 부하 분산 사용",
            "D. X-IP-Source 헤더를 사용하여 클라이언트 IP 주소 검색",
            "E. Application Load Balancer 사용"
        ],
        "explanation_ko": "정답: B, E\n\n핵심: HTTPS + 경로 기반 라우팅 + 클라이언트 IP 확인이 필요한 마이크로서비스 아키텍처입니다.\n\nB, E가 맞는 이유:\nE) ALB는 경로 기반 라우팅을 지원하여 URL 경로별로 다른 마이크로서비스(ECS 대상 그룹)로 트래픽을 분산합니다.\nB) ALB는 X-Forwarded-For 헤더를 통해 원본 클라이언트 IP를 백엔드에 전달합니다.\n\n오답 분석:\nA) NLB는 L4로 경로 기반 라우팅 불가\nC) AWS App Mesh는 서비스 메시이지 로드 밸런서가 아님\nD) X-IP-Source는 표준 헤더가 아님"
    },
    {
        "num": 42,
        "question": "A company is migrating its containerized application to AWS. For the architecture the company will have an ingress VPC with a Network Load\nBalancer (NLB) to distribute the traffic to front-end pods in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The front end of the\napplication will determine which user is requesting access and will send traffic to 1 of 10 services VPCs. Each services VPC will include an NLB\nthat distributes traffic to the services pods in an EKS cluster.\nThe company is concerned about overall cost. User traffic will be responsible for more than 10 TB of data transfer from the ingress VPC to\nservices VPCs every month. A network engineer needs to recommend how to design the communication between the VPCs.\nWhich solution will meet these requirements at the LOWEST cost?",
        "options": [
            "A. Create a transit gateway. Peer each VPC to the transit gateway. Use zonal DNS names for the NLB in the services VPCs to minimize cross-\nAZ traffic from the ingress VPC to the services VPCs.",
            "B. Create an AWS PrivateLink endpoint in every Availability Zone in the ingress VPC. Each PrivateLink endpoint will point to the zonal DNS\nentry of the NLB in the services VPCs.",
            "C. Create a VPC peering connection between the ingress VPC and each of the 10 services VPCs. Use zonal DNS names for the NLB in the\nservices VPCs to minimize cross-AZ traffic from the ingress VPC to the services VPCs.",
            "D. Create a transit gateway. Peer each VPC to the transit gateway. Turn off cross-AZ load balancing on the transit gateway. Use Regional DNS\nnames for the NLB in the services VPCs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 인그레스 VPC에서 10개 서비스 VPC로의 연결에서 cross-AZ 트래픽을 최소화해야 합니다.\n\nC가 맞는 이유:\nVPC 피어링은 cross-AZ 트래픽 제어가 가능하며, NLB의 존(zonal) DNS 이름을 사용하면 같은 AZ 내에서만 트래픽이 흐릅니다. 10개 서비스 VPC와의 피어링은 관리 가능한 수준입니다.\n\n오답 분석:\nA) Transit Gateway는 추가 비용이 발생하며 데이터 처리 요금이 있음\nB) PrivateLink 엔드포인트는 서비스별로 필요하여 비용이 높음\nD) Transit Gateway의 cross-AZ 로드 밸런싱을 끄는 것만으로는 존 DNS와 동일한 효과를 얻기 어려움",
        "question_ko": "회사가 컨테이너화된 애플리케이션을 AWS로 마이그레이션하고 있습니다. 아키텍처에는 Network Load Balancer(NLB)가 있는 인그레스 VPC가 포함되어 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터의 프런트엔드 포드로 트래픽을 배포합니다. 애플리케이션의 프런트엔드는 사용자 요청을 확인하고 10개의 서비스 VPC 중 하나로 트래픽을 보냅니다. 각 서비스 VPC에는 EKS 클러스터의 서비스 포드로 트래픽을 배포하는 NLB가 포함됩니다. 회사는 전반적인 비용에 대해 걱정하고 있습니다. 사용자 트래픽으로 인해 매월 인그레스 VPC에서 서비스 VPC로 10TB 이상의 데이터 전송이 발생할 것입니다. 네트워크 엔지니어는 VPC 간 통신을 설계하는 방법을 권장해야 합니다. 이 요구 사항을 가장 낮은 비용으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이를 만들고 각 VPC를 트랜짓 게이트웨이에 피어링합니다. 인그레스 VPC에서 서비스 VPC로의 cross-AZ 트래픽을 최소화하기 위해 서비스 VPC의 NLB에 대한 존 DNS 이름을 사용합니다.",
            "B. 인그레스 VPC의 모든 가용 영역에 AWS PrivateLink 엔드포인트를 만듭니다. 각 PrivateLink 엔드포인트는 서비스 VPC의 NLB에 대한 존 DNS 항목을 가리킵니다.",
            "C. 인그레스 VPC와 10개의 서비스 VPC 간에 VPC 피어링 연결을 만듭니다. 인그레스 VPC에서 서비스 VPC로의 cross-AZ 트래픽을 최소화하기 위해 서비스 VPC의 NLB에 대한 존 DNS 이름을 사용합니다.",
            "D. 트랜짓 게이트웨이를 만들고 각 VPC를 트랜짓 게이트웨이에 피어링합니다. 트랜짓 게이트웨이의 cross-AZ 부하 분산을 끕니다. 서비스 VPC의 NLB에 대한 지역 DNS 이름을 사용합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 인그레스 VPC에서 10개 서비스 VPC로의 연결에서 cross-AZ 트래픽을 최소화해야 합니다.\n\nC가 맞는 이유:\nVPC 피어링은 cross-AZ 트래픽 제어가 가능하며, NLB의 존(zonal) DNS 이름을 사용하면 같은 AZ 내에서만 트래픽이 흐릅니다. 10개 서비스 VPC와의 피어링은 관리 가능한 수준입니다.\n\n오답 분석:\nA) Transit Gateway는 추가 비용이 발생하며 데이터 처리 요금이 있음\nB) PrivateLink 엔드포인트는 서비스별로 필요하여 비용이 높음\nD) Transit Gateway의 cross-AZ 로드 밸런싱을 끄는 것만으로는 존 DNS와 동일한 효과를 얻기 어려움"
    },
    {
        "num": 43,
        "question": "A company has stateful security appliances that are deployed to multiple Availability Zones in a centralized shared services VPC. The AWS\nenvironment includes a transit gateway that is attached to application VPCs and the shared services VPC. The application VPCs have workloads\nthat are deployed in private subnets across multiple Availability Zones. The stateful appliances in the shared services VPC inspect all east west\n(VPC-to-VPC) traffic.\nUsers report that inter-VPC traffic to different Availability Zones is dropping. A network engineer verified this claim by issuing Internet Control\nMessage Protocol (ICMP) pings between workloads in different Availability Zones across the application VPCs. The network engineer has ruled\nout security groups, stateful device configurations and network ACLs as the cause of the dropped traffic.\nWhat is causing the traffic to drop?",
        "options": [
            "A. The stateful appliances and the transit gateway attachments are deployed in a separate subnet in the shared services VPC.",
            "B. Appliance mode is not enabled on the transit gateway attachment to the shared services VPC.",
            "C. The stateful appliances and the transit gateway attachments are deployed in the same subnet in the shared services VPC.",
            "D. Appliance mode is not enabled on the transit gateway attachment to the application VPCs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Transit Gateway를 통한 동서 트래픽이 상태 저장 어플라이언스에서 비대칭 라우팅으로 실패합니다.\n\nB가 맞는 이유:\n어플라이언스 모드가 활성화되지 않으면 Transit Gateway는 각 AZ에서 독립적으로 라우팅합니다. 요청과 응답이 다른 AZ의 어플라이언스를 통과하면 상태 추적이 깨집니다. 공유 서비스 VPC의 Transit Gateway 연결에서 어플라이언스 모드를 활성화해야 합니다.\n\n오답 분석:\nA) 별도 서브넷 배포는 어플라이언스 모드와 무관한 문제\nC) 동일 서브넷 배포도 어플라이언스 모드 없이는 비대칭 라우팅 발생\nD) 어플라이언스 모드는 어플라이언스가 있는 VPC(공유 서비스)에서 활성화해야 함",
        "question_ko": "회사에는 여러 가용 영역의 중앙 공유 서비스 VPC에 배포된 상태 저장 보안 어플라이언스가 있습니다. AWS 환경에는 애플리케이션 VPC와 공유 서비스 VPC에 연결된 트랜짓 게이트웨이가 포함됩니다. 애플리케이션 VPC에는 여러 가용 영역의 프라이빗 서브넷에 배포된 워크로드가 있습니다. 공유 서비스 VPC의 상태 저장 어플라이언스는 VPC 간 동서 트래픽을 모두 검사합니다. 사용자가 애플리케이션 VPC의 다른 가용 영역 간 VPC 트래픽이 중단되는 문제를 보고했습니다. 네트워크 엔지니어가 ICMP ping을 통해 문제를 확인했지만, 보안 그룹, 상태 저장 디바이스 구성 및 네트워크 ACL은 문제의 원인이 아닌 것으로 확인되었습니다. 이 트래픽이 중단되는 이유는 무엇입니까?",
        "options_ko": [
            "A. 상태 저장 어플라이언스와 트랜짓 게이트웨이 연결이 공유 서비스 VPC의 별도 서브넷에 배포되어 있습니다.",
            "B. 어플라이언스 모드가 공유 서비스 VPC의 트랜짓 게이트웨이 연결에 활성화되어 있지 않습니다.",
            "C. 상태 저장 어플라이언스와 트랜짓 게이트웨이 연결이 공유 서비스 VPC의 동일한 서브넷에 배포되어 있습니다.",
            "D. 어플라이언스 모드가 애플리케이션 VPC의 트랜짓 게이트웨이 연결에 활성화되어 있지 않습니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Transit Gateway를 통한 동서 트래픽이 상태 저장 어플라이언스에서 비대칭 라우팅으로 실패합니다.\n\nB가 맞는 이유:\n어플라이언스 모드가 활성화되지 않으면 Transit Gateway는 각 AZ에서 독립적으로 라우팅합니다. 요청과 응답이 다른 AZ의 어플라이언스를 통과하면 상태 추적이 깨집니다. 공유 서비스 VPC의 Transit Gateway 연결에서 어플라이언스 모드를 활성화해야 합니다.\n\n오답 분석:\nA) 별도 서브넷 배포는 어플라이언스 모드와 무관한 문제\nC) 동일 서브넷 배포도 어플라이언스 모드 없이는 비대칭 라우팅 발생\nD) 어플라이언스 모드는 어플라이언스가 있는 VPC(공유 서비스)에서 활성화해야 함"
    },
    {
        "num": 44,
        "question": "A company has hundreds of Amazon EC2 instances that are running in two production VPCs across all Availability Zones in the us-east-1 Region.\nThe production VPCs are named\nVPC A and VPC B.\nA new security regulation requires all traffic between production VPCs to be inspected before the traffic is routed to its final destination. The\ncompany deploys a new shared VPC that contains a stateful firewall appliance and a transit gateway with a VPC attachment across all VPCs to\nroute traffic between VPC A and VPC B through the firewall appliance for inspection. During testing, the company notices that the transit gateway\nis dropping the traffic whenever the traffic is between two Availability Zones.\nWhat should a network engineer do to fix this issue with the LEAST management overhead?",
        "options": [
            "A. In the shared VPC, replace the VPC attachment with a VPN attachment. Create a VPN tunnel between the transit gateway and the firewall\nappliance. Configure BGP.",
            "B. Enable transit gateway appliance mode on the VPC attachment in VPC A and VPC B.",
            "C. Enable transit gateway appliance mode on the VPC attachment in the shared VPC.",
            "D. In the shared VPC, configure one VPC peering connection to VPC A and another VPC peering connection to VPC B."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽을 상태 저장 방화벽으로 검사해야 합니다.\n\nC가 맞는 이유:\n어플라이언스 모드는 방화벽 어플라이언스가 있는 공유 VPC의 Transit Gateway 연결에서 활성화해야 합니다. 이렇게 하면 동일 흐름의 요청/응답 트래픽이 같은 AZ의 방화벽을 통과하여 상태 저장 검사가 정상 동작합니다.\n\n오답 분석:\nA) VPN 연결로 교체하면 성능 저하 및 불필요한 복잡성\nB) 어플라이언스 모드는 어플라이언스가 있는 VPC에서 활성화해야 함 (VPC A, B가 아님)\nD) VPC 피어링은 Transit Gateway 기반 검사 아키텍처와 호환되지 않음",
        "question_ko": "회사에는 us-east-1 리전의 모든 가용 영역에 걸쳐 두 개의 프로덕션 VPC에 실행되는 수백 개의 Amazon EC2 인스턴스가 있습니다. 프로덕션 VPC의 이름은 VPC A 및 VPC B입니다. 새로운 보안 규정으로 인해 프로덕션 VPC 간 트래픽이 최종 대상으로 라우팅되기 전에 검사되어야 합니다. 회사는 상태 저장 방화벽 어플라이언스와 트랜짓 게이트웨이가 있는 새로운 공유 VPC를 배포하여 VPC A와 VPC B 간 트래픽을 방화벽 어플라이언스를 통해 라우팅합니다. 테스트 중에 회사는 트래픽이 두 가용 영역 간에 있을 때마다 트랜짓 게이트웨이가 트래픽을 삭제하는 것을 발견했습니다. 네트워크 엔지니어가 이 문제를 해결하기 위해 취할 수 있는 가장 관리 오버헤드가 낮은 조치는 무엇입니까?",
        "options_ko": [
            "A. 공유 VPC에서 VPC 연결을 VPN 연결로 교체합니다. 트랜짓 게이트웨이와 방화벽 어플라이언스 간에 VPN 터널을 만듭니다. BGP를 구성합니다.",
            "B. VPC A와 VPC B의 VPC 연결에서 트랜짓 게이트웨이 어플라이언스 모드를 활성화합니다.",
            "C. 공유 VPC의 VPC 연결에서 트랜짓 게이트웨이 어플라이언스 모드를 활성화합니다.",
            "D. 공유 VPC에서 VPC A에 대한 VPC 피어링 연결과 VPC B에 대한 VPC 피어링 연결을 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: Transit Gateway를 통한 VPC 간 트래픽을 상태 저장 방화벽으로 검사해야 합니다.\n\nC가 맞는 이유:\n어플라이언스 모드는 방화벽 어플라이언스가 있는 공유 VPC의 Transit Gateway 연결에서 활성화해야 합니다. 이렇게 하면 동일 흐름의 요청/응답 트래픽이 같은 AZ의 방화벽을 통과하여 상태 저장 검사가 정상 동작합니다.\n\n오답 분석:\nA) VPN 연결로 교체하면 성능 저하 및 불필요한 복잡성\nB) 어플라이언스 모드는 어플라이언스가 있는 VPC에서 활성화해야 함 (VPC A, B가 아님)\nD) VPC 피어링은 Transit Gateway 기반 검사 아키텍처와 호환되지 않음"
    },
    {
        "num": 45,
        "question": "A company has deployed a critical application on a fleet of Amazon EC2 instances behind an Application Load Balancer. The application must\nalways be reachable on port 443 from the public internet. The application recently had an outage that resulted from an incorrect change to the\nEC2 security group.\nA network engineer needs to automate a way to verify the network connectivity between the public internet and the EC2 instances whenever a\nchange is made to the security group. The solution also must notify the network engineer when the change affects the connection.\nWhich solution will meet these requirements?",
        "options": [
            "A. Enable VPC Flow Logs on the elastic network interface of each EC2 instance to capture REJECT traffic on port 443. Publish the flow log\nrecords to a log group in Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the log group for rejected traffic. Create an\nalarm to notify the network engineer.",
            "B. Enable VPC Flow Logs on the elastic network interface of each EC2 instance to capture all traffic on port 443. Publish the flow log records\nto a log group in Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the log group for all traffic. Create an alarm to notify\nthe network engineer",
            "C. Create a VPC Reachability Analyzer path on port 443. Specify the security group as the source. Specify the EC2 instances as the\ndestination. Create an Amazon Simple Notification Service (Amazon SNS) topic to notify the network engineer when a change to the security\ngroup affects the connection. Create an AWS Lambda function to start Reachability Analyzer and to publish a message to the SNS topic in\ncase the analyses fail Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function when a change to the\nsecurity group occurs.",
            "D. Create a VPC Reachability Analyzer path on port 443. Specify the internet gateway of the VPC as the source. Specify the EC2 instances as\nthe destination. Create an Amazon Simple Notification Service (Amazon SNS) topic to notify the network engineer when a change to the\nsecurity group affects the connection. Create an AWS Lambda function to start Reachability Analyzer and to publish a message to the SNS\ntopic in case the analyses fail. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function when a\nchange to the security group occurs."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 보안 그룹 변경으로 인한 애플리케이션 접근 불가를 자동 감지해야 합니다.\n\nD가 맞는 이유:\nVPC Reachability Analyzer는 인터넷 게이트웨이에서 EC2 인스턴스까지의 네트워크 경로를 분석합니다. 보안 그룹 변경이 포트 443 연결에 영향을 미치면 자동으로 감지하고 SNS를 통해 알림을 보냅니다.\n\n오답 분석:\nA) VPC 흐름 로그의 REJECT 트래픽은 이미 차단된 후에야 감지 가능 (사후 대응)\nB) 모든 트래픽 로그는 데이터가 너무 많고 보안 그룹 변경 자체를 감지하지 못함\nC) 보안 그룹을 소스로 지정하는 것은 올바르지 않음. 인터넷 게이트웨이가 소스여야 함",
        "question_ko": "회사에서는 Application Load Balancer 뒤에 배포된 Amazon EC2 인스턴스 풀에서 중요한 애플리케이션을 실행하고 있습니다. 이 애플리케이션은 포트 443을 통해 항상 공개 인터넷에서 액세스할 수 있어야 합니다. 최근 EC2 보안 그룹에 대한 잘못된 변경으로 인해 애플리케이션 중단이 발생했습니다. 네트워크 엔지니어는 보안 그룹에 대한 변경이 있을 때마다 공개 인터넷과 EC2 인스턴스 간의 네트워크 연결을 자동으로 확인하고 네트워크 엔지니어에게 변경이 연결에 영향을 미치는 경우 알려주는 솔루션을 구현해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 EC2 인스턴스의 탄력적 네트워크 인터페이스에서 VPC 흐름 로그를 활성화하여 포트 443의 REJECT 트래픽을 캡처합니다. 흐름 로그 레코드를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. 로그 그룹에 대한 CloudWatch Logs 지표 필터를 만들어 거부된 트래픽을 포착합니다. 네트워크 엔지니어에게 알림을 보내는 경보를 만듭니다.",
            "B. 각 EC2 인스턴스의 탄력적 네트워크 인터페이스에서 VPC 흐름 로그를 활성화하여 포트 443의 모든 트래픽을 캡처합니다. 흐름 로그 레코드를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. 로그 그룹에 대한 CloudWatch Logs 지표 필터를 만들어 모든 트래픽을 포착합니다. 네트워크 엔지니어에게 알림을 보내는 경보를 만듭니다.",
            "C. 포트 443에 대한 VPC Reachability Analyzer 경로를 만듭니다. 보안 그룹을 소스로 지정하고 EC2 인스턴스를 대상으로 지정합니다. 보안 그룹 변경이 연결에 영향을 미치는 경우 네트워크 엔지니어에게 알리는 Amazon SNS 주제를 만듭니다. Reachability Analyzer를 시작하고 분석이 실패하는 경우 SNS 주제에 메시지를 게시하는 AWS Lambda 함수를 만듭니다. 보안 그룹 변경 시 Lambda 함수를 호출하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 만듭니다.",
            "D. 포트 443에 대한 VPC Reachability Analyzer 경로를 만듭니다. VPC의 인터넷 게이트웨이를 소스로 지정하고 EC2 인스턴스를 대상으로 지정합니다. 보안 그룹 변경이 연결에 영향을 미치는 경우 네트워크 엔지니어에게 알리는 Amazon SNS 주제를 만듭니다. Reachability Analyzer를 시작하고 분석이 실패하는 경우 SNS 주제에 메시지를 게시하는 AWS Lambda 함수를 만듭니다. 보안 그룹 변경 시 Lambda 함수를 호출하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 만듭니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 보안 그룹 변경으로 인한 애플리케이션 접근 불가를 자동 감지해야 합니다.\n\nD가 맞는 이유:\nVPC Reachability Analyzer는 인터넷 게이트웨이에서 EC2 인스턴스까지의 네트워크 경로를 분석합니다. 보안 그룹 변경이 포트 443 연결에 영향을 미치면 자동으로 감지하고 SNS를 통해 알림을 보냅니다.\n\n오답 분석:\nA) VPC 흐름 로그의 REJECT 트래픽은 이미 차단된 후에야 감지 가능 (사후 대응)\nB) 모든 트래픽 로그는 데이터가 너무 많고 보안 그룹 변경 자체를 감지하지 못함\nC) 보안 그룹을 소스로 지정하는 것은 올바르지 않음. 인터넷 게이트웨이가 소스여야 함"
    },
    {
        "num": 46,
        "question": "A security team is performing an audit of a company's AWS deployment. The security team is concerned that two applications might be accessing\nresources that should be blocked by network ACLs and security groups. The applications are deployed across two Amazon Elastic Kubernetes\nService (Amazon EKS) clusters that use the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes. The clusters are in separate\nsubnets within the same VPC and have a Cluster Autoscaler configured.\nThe security team needs to determine which POD IP addresses are communicating with which services throughout the VPC. The security team\nwants to limit the number of flow logs and wants to examine the traffic from only the two applications.\nWhich solution will meet these requirements with the LEAST operational overhead?",
        "options": [
            "A. Create VPC flow logs in the default format. Create a filter to gather flow logs only from the EKS nodes. Include the srcaddr field and the\ndstaddr field in the flow logs.",
            "B. Create VPC flow logs in a custom format. Set the EKS nodes as the resource Include the pkt-srcaddr field and the pkt-dstaddr field in the\nflow logs.",
            "C. Create VPC flow logs in a custom format. Set the application subnets as resources. Include the pkt-srcaddr field and the pkt-dstaddr field in\nthe flow logs.",
            "D. Create VPC flow logs in a custom format. Create a filter to gather flow logs only from the EKS nodes. Include the pkt-srcaddr field and the\npkt-dstaddr field in the flow logs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: EKS Pod 레벨의 실제 소스/대상 IP를 VPC 흐름 로그에서 확인해야 합니다.\n\nC가 맞는 이유:\npkt-srcaddr와 pkt-dstaddr 필드는 패킷의 실제 소스/대상 IP를 기록합니다. VPC CNI 플러그인을 사용하면 Pod에 VPC IP가 할당되므로 이 필드로 Pod 레벨 트래픽을 추적할 수 있습니다. 서브넷 레벨로 설정하면 해당 서브넷의 모든 ENI 트래픽을 캡처합니다.\n\n오답 분석:\nA) 기본 형식에는 pkt-srcaddr/pkt-dstaddr가 포함되지 않음. srcaddr/dstaddr는 ENI의 IP만 기록\nB) EKS 노드를 리소스로 설정하면 노드 레벨이지 Pod 레벨이 아님\nD) 필터로 EKS 노드만 로그하면 다른 리소스의 트래픽을 놓칠 수 있음",
        "question_ko": "보안 팀이 회사의 AWS 배포에 대한 감사를 수행하고 있습니다. 보안 팀은 두 개의 애플리케이션이 네트워크 ACL과 보안 그룹에 의해 차단되어야 할 리소스에 액세스할 수 있다는 것에 우려하고 있습니다. 이 애플리케이션은 Amazon VPC Container Network Interface(CNI) 플러그인을 사용하는 두 개의 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에 배포됩니다. 클러스터는 동일한 VPC 내의 별도 서브넷에 있으며 Cluster Autoscaler가 구성되어 있습니다. 보안 팀은 VPC 전체에서 POD IP 주소가 어떤 서비스와 통신하는지 파악해야 합니다. 보안 팀은 유량 로그 수를 제한하고 두 애플리케이션의 트래픽만 검토하려고 합니다. 이러한 요구사항을 가장 적은 운영 부담으로 충족할 수 있는 해결책은 무엇입니까?",
        "options_ko": [
            "A. 기본 형식의 VPC 유량 로그를 생성합니다. EKS 노드만 로그할 수 있도록 필터를 만듭니다. 유량 로그에 srcaddr 필드와 dstaddr 필드를 포함합니다.",
            "B. 사용자 정의 형식의 VPC 유량 로그를 생성합니다. EKS 노드를 리소스로 설정합니다. 유량 로그에 pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다.",
            "C. 사용자 정의 형식의 VPC 유량 로그를 생성합니다. 애플리케이션 서브넷을 리소스로 설정합니다. 유량 로그에 pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다.",
            "D. 사용자 정의 형식의 VPC 유량 로그를 생성합니다. EKS 노드만 로그할 수 있도록 필터를 만듭니다. 유량 로그에 pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: EKS Pod 레벨의 실제 소스/대상 IP를 VPC 흐름 로그에서 확인해야 합니다.\n\nC가 맞는 이유:\npkt-srcaddr와 pkt-dstaddr 필드는 패킷의 실제 소스/대상 IP를 기록합니다. VPC CNI 플러그인을 사용하면 Pod에 VPC IP가 할당되므로 이 필드로 Pod 레벨 트래픽을 추적할 수 있습니다. 서브넷 레벨로 설정하면 해당 서브넷의 모든 ENI 트래픽을 캡처합니다.\n\n오답 분석:\nA) 기본 형식에는 pkt-srcaddr/pkt-dstaddr가 포함되지 않음. srcaddr/dstaddr는 ENI의 IP만 기록\nB) EKS 노드를 리소스로 설정하면 노드 레벨이지 Pod 레벨이 아님\nD) 필터로 EKS 노드만 로그하면 다른 리소스의 트래픽을 놓칠 수 있음"
    },
    {
        "num": 47,
        "question": "A data analytics company has a 100-node high performance computing (HPC) cluster. The HPC cluster is for parallel data processing and is\nhosted in a VPC in the AWS Cloud. As part of the data processing workflow, the HPC cluster needs to perform several DNS queries to resolve and\nconnect to Amazon RDS databases, Amazon S3 buckets, and on-premises data stores that are accessible through AWS Direct Connect. The HPC\ncluster can increase in size by five to seven times during the company’s peak event at the end of the year.\nThe company is using two Amazon EC2 instances as primary DNS servers for the VPC. The EC2 instances are configured to forward queries to the\ndefault VPC resolver for Amazon Route 53 hosted domains and to the on-premises DNS servers for other on-premises hosted domain names. The\ncompany notices job failures and finds that DNS queries from the HPC cluster nodes failed when the nodes tried to resolve RDS and S3 bucket\nendpoints.\nWhich architectural change should a network engineer implement to provide the DNS service in the MOST scalable way?",
        "options": [
            "A. Scale out the DNS service by adding two additional EC2 instances in the VPC. Reconfigure half of the HPC cluster nodes to use these new\nDNS servers. Plan to scale out by adding additional EC2 instance-based DNS servers in the future as the HPC cluster size grows.",
            "B. Scale up the existing EC2 instances that the company is using as DNS servers. Change the instance size to the largest possible instance\nsize to accommodate the current DNS load and the anticipated load in the future.",
            "C. Create Route 53 Resolver outbound endpoints. Create Route 53 Resolver rules to forward queries to on-premises DNS servers for on\npremises hosted domain names. Reconfigure the HPC cluster nodes to use the default VPC resolver instead of the EC2 instance-based DNS\nservers. Terminate the EC2 instances.",
            "D. Create Route 53 Resolver inbound endpoints. Create rules on the on-premises DNS servers to forward queries to the default VPC resolver.\nReconfigure the HPC cluster nodes to forward all DNS queries to the on-premises DNS servers. Terminate the EC2 instances."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 100노드 HPC 클러스터의 DNS 확장성 문제를 해결해야 합니다.\n\nC가 맞는 이유:\nRoute 53 Resolver는 관리형 DNS 서비스로 자동 확장됩니다. 아웃바운드 엔드포인트를 생성하고 온프레미스 도메인에 대한 전달 규칙을 만들면, HPC 노드가 기본 VPC Resolver를 사용하면서도 온프레미스 DNS 쿼리가 올바르게 전달됩니다.\n\n오답 분석:\nA) EC2 기반 DNS 서버를 추가하는 것은 수동 확장이며 관리 부담이 큼\nB) 인스턴스 크기를 늘리는 것은 수직 확장의 한계가 있음\nD) 인바운드 엔드포인트는 외부에서 AWS로 들어오는 쿼리용이지 AWS에서 외부로 나가는 쿼리용이 아님",
        "question_ko": "데이터 분석 회사에는 100노드 하이퍼퍼포먼스 컴퓨팅(HPC) 클러스터가 있습니다. HPC 클러스터는 AWS 클라우드의 VPC에 호스팅되며 병렬 데이터 처리를 수행합니다. 데이터 처리 워크플로의 일부로 HPC 클러스터는 Amazon RDS 데이터베이스, Amazon S3 버킷 및 AWS Direct Connect를 통해 액세스할 수 있는 온프레미스 데이터 저장소에 연결하기 위해 여러 DNS 쿼리를 수행해야 합니다. HPC 클러스터는 연말 행사 시 5-7배 늘어날 수 있습니다. 회사는 VPC의 기본 DNS 서버로 두 개의 Amazon EC2 인스턴스를 사용하고 있습니다. EC2 인스턴스는 Amazon Route 53 호스팅 도메인의 쿼리를 VPC Resolver로 전달하고 다른 온프레미스 도메인의 쿼리는 온프레미스 DNS 서버로 전달하도록 구성되어 있습니다. 회사는 작업 실패를 감지했고 HPC 클러스터 노드가 RDS 및 S3 버킷 엔드포인트를 확인하려고 할 때 DNS 쿼리가 실패했음을 발견했습니다. 가장 확장 가능한 방식으로 DNS 서비스를 제공하려면 네트워크 엔지니어가 어떤 아키텍처 변경을 구현해야 합니까?",
        "options_ko": [
            "A. DNS 서비스를 확장하기 위해 VPC에 두 개의 추가 EC2 인스턴스를 추가합니다. HPC 클러스터 노드의 절반을 새 DNS 서버로 재구성합니다. HPC 클러스터 크기가 늘어나면 추가 EC2 인스턴스 기반 DNS 서버를 추가할 계획을 세웁니다.",
            "B. 회사가 사용하고 있는 EC2 인스턴스 DNS 서버의 규모를 확장합니다. 현재 DNS 부하와 향후 예상 부하를 수용할 수 있도록 가장 큰 인스턴스 크기로 변경합니다.",
            "C. Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인 이름에 대한 쿼리를 온프레미스 DNS 서버로 전달하는 Route 53 Resolver 규칙을 생성합니다. HPC 클러스터 노드를 EC2 인스턴스 기반 DNS 서버 대신 기본 VPC Resolver로 재구성합니다. EC2 인스턴스를 종료합니다.",
            "D. Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버에 기본 VPC Resolver로 쿼리를 전달하는 규칙을 생성합니다. HPC 클러스터 노드를 모든 DNS 쿼리를 온프레미스 DNS 서버로 전달하도록 재구성합니다. EC2 인스턴스를 종료합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 100노드 HPC 클러스터의 DNS 확장성 문제를 해결해야 합니다.\n\nC가 맞는 이유:\nRoute 53 Resolver는 관리형 DNS 서비스로 자동 확장됩니다. 아웃바운드 엔드포인트를 생성하고 온프레미스 도메인에 대한 전달 규칙을 만들면, HPC 노드가 기본 VPC Resolver를 사용하면서도 온프레미스 DNS 쿼리가 올바르게 전달됩니다.\n\n오답 분석:\nA) EC2 기반 DNS 서버를 추가하는 것은 수동 확장이며 관리 부담이 큼\nB) 인스턴스 크기를 늘리는 것은 수직 확장의 한계가 있음\nD) 인바운드 엔드포인트는 외부에서 AWS로 들어오는 쿼리용이지 AWS에서 외부로 나가는 쿼리용이 아님"
    },
    {
        "num": 48,
        "question": "A company's network engineer is designing an active-passive connection to AWS from two on-premises data centers. The company has set up\nAWS Direct Connect connections between the on-premises data centers and AWS. From each location, the company is using a transit VIF that\nconnects to a Direct Connect gateway that is associated with a transit gateway.\nThe network engineer must ensure that traffic from AWS to the data centers is routed first to the primary data center. The traffic should be routed\nto the failover data center only in the case of an outage.\nWhich solution will meet these requirements?",
        "options": [
            "A. Set the BGP community tag for all prefixes from the primary data center to 7224:7100. Set the BGP community tag for all prefixes from the\nfailover data center to 7224:7300",
            "B. Set the BGP community tag for all prefixes from the primary data center to 7224:7300. Set the BGP community tag for all prefixes from the\nfailover data center to 7224:7100",
            "C. Set the BGP community tag for all prefixes from the primary data center to 7224:9300. Set the BGP community tag for all prefixes from the\nfailover data center to 7224:9100",
            "D. Set the BGP community tag for all prefixes from the primary data center to 7224:9100. Set the BGP community tag for all prefixes from the\nfailover data center to 7224:9300"
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Direct Connect를 통한 액티브-패시브 연결에서 기본/대체 데이터 센터의 우선순위를 설정해야 합니다.\n\nB가 맞는 이유:\nBGP 커뮤니티 태그 7224:7300은 '높은 우선순위'를, 7224:7100은 '낮은 우선순위'를 의미합니다. 기본 데이터 센터에 7224:7300을 설정하면 AWS에서 해당 경로를 우선 선택합니다.\n\n오답 분석:\nA) 7224:7100(낮은 우선순위)을 기본에 설정하면 우선순위가 반대\nC) 7224:9300/9100은 유효한 Direct Connect BGP 커뮤니티 태그가 아님\nD) C와 동일하게 유효하지 않은 커뮤니티 태그",
        "question_ko": "회사 네트워크 엔지니어는 두 온프레미스 데이터 센터에서 AWS로의 액티브-패시브 연결을 설계하고 있습니다. 회사는 온프레미스 데이터 센터와 AWS 사이에 AWS Direct Connect 연결을 설정했습니다. 각 위치에서 회사는 트랜짓 게이트웨이와 연결된 Direct Connect 게이트웨이에 연결되는 트랜짓 VIF를 사용하고 있습니다. 네트워크 엔지니어는 AWS에서 데이터 센터로 향하는 트래픽이 먼저 기본 데이터 센터로 라우팅되도록 해야 합니다. 장애 발생 시에만 대체 데이터 센터로 트래픽이 라우팅되어야 합니다. 이러한 요구사항을 충족할 수 있는 해결책은 무엇입니까?",
        "options_ko": [
            "A. 기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7100으로 설정합니다. 대체 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7300으로 설정합니다.",
            "B. 기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7300으로 설정합니다. 대체 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7100으로 설정합니다.",
            "C. 기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9300으로 설정합니다. 대체 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9100으로 설정합니다.",
            "D. 기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9100으로 설정합니다. 대체 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9300으로 설정합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Direct Connect를 통한 액티브-패시브 연결에서 기본/대체 데이터 센터의 우선순위를 설정해야 합니다.\n\nB가 맞는 이유:\nBGP 커뮤니티 태그 7224:7300은 '높은 우선순위'를, 7224:7100은 '낮은 우선순위'를 의미합니다. 기본 데이터 센터에 7224:7300을 설정하면 AWS에서 해당 경로를 우선 선택합니다.\n\n오답 분석:\nA) 7224:7100(낮은 우선순위)을 기본에 설정하면 우선순위가 반대\nC) 7224:9300/9100은 유효한 Direct Connect BGP 커뮤니티 태그가 아님\nD) C와 동일하게 유효하지 않은 커뮤니티 태그"
    },
    {
        "num": 49,
        "question": "A real estate company is building an internal application so that real estate agents can upload photos and videos of various properties. The\napplication will store these photos and videos in an Amazon S3 bucket as objects and will use Amazon DynamoDB to store corresponding\nmetadata. The S3 bucket will be configured to publish all PUT events for new object uploads to an Amazon Simple Queue Service (Amazon SQS)\nqueue.\nA compute cluster of Amazon EC2 instances will poll the SQS queue to find out about newly uploaded objects. The cluster will retrieve new\nobjects, perform proprietary image and video recognition and classification update metadata in DynamoDB and replace the objects with new\nwatermarked objects. The company does not want public IP addresses on the EC2 instances.\nWhich networking design solution will meet these requirements MOST cost-effectively as application usage increases?",
        "options": [
            "A. Place the EC2 instances in a public subnet. Disable the Auto-assign Public IP option while launching the EC2 instances. Create an internet\ngateway. Attach the internet gateway to the VPC. In the public subnet's route table, add a default route that points to the internet gateway.",
            "B. Place the EC2 instances in a private subnet. Create a NAT gateway in a public subnet in the same Availability Zone. Create an internet\ngateway. Attach the internet gateway to the VPC. In the public subnet's route table, add a default route that points to the internet gateway",
            "C. Place the EC2 instances in a private subnet. Create an interface VPC endpoint for Amazon SQS. Create gateway VPC endpoints for Amazon\nS3 and DynamoDB.",
            "D. Place the EC2 instances in a private subnet. Create a gateway VPC endpoint for Amazon SQS. Create interface VPC endpoints for Amazon\nS3 and DynamoDB."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2에서 S3, DynamoDB, SQS에 인터넷 없이 접근해야 합니다.\n\nC가 맞는 이유:\nS3와 DynamoDB는 게이트웨이 VPC 엔드포인트를 지원하며 무료입니다. SQS는 인터페이스 VPC 엔드포인트(PrivateLink)를 통해 접근합니다. 이 조합으로 인터넷 연결 없이 모든 서비스에 프라이빗하게 접근할 수 있습니다.\n\n오답 분석:\nA) 퍼블릭 서브넷에 배치하면 보안 요구사항 위반\nB) NAT 게이트웨이는 인터넷을 통한 접근이므로 프라이빗 연결이 아님\nD) SQS는 게이트웨이 엔드포인트를 지원하지 않고, S3/DynamoDB에 인터페이스 엔드포인트는 불필요한 비용",
        "question_ko": "부동산 회사가 부동산 중개인이 다양한 부동산의 사진과 동영상을 업로드할 수 있는 내부 애플리케이션을 구축하고 있습니다. 이 애플리케이션은 이러한 사진과 동영상을 Amazon S3 버킷에 객체로 저장하고 Amazon DynamoDB를 사용하여 해당 메타데이터를 저장할 것입니다. S3 버킷은 새 객체 업로드에 대한 모든 PUT 이벤트를 Amazon Simple Queue Service(Amazon SQS) 대기열에 게시하도록 구성됩니다. Amazon EC2 인스턴스로 구성된 컴퓨팅 클러스터가 SQS 대기열을 폴링하여 새로 업로드된 객체에 대해 알아냅니다. 클러스터는 새 객체를 검색하여 독자적인 이미지 및 비디오 인식과 분류를 수행하고 DynamoDB의 메타데이터를 업데이트하며 새 워터마크 객체로 대체합니다. 회사는 EC2 인스턴스에 퍼블릭 IP 주소가 없기를 원합니다. 이러한 요구사항을 가장 비용 효율적으로 충족할 수 있는 네트워킹 설계 솔루션은 무엇입니까?",
        "options_ko": [
            "A. EC2 인스턴스를 공용 서브넷에 배치합니다. 인스턴스 시작 시 자동 할당 퍼블릭 IP 기능을 비활성화합니다. 인터넷 게이트웨이를 생성하고 VPC에 연결합니다. 공용 서브넷의 라우팅 테이블에 인터넷 게이트웨이를 가리키는 기본 경로를 추가합니다.",
            "B. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. 같은 가용 영역의 공용 서브넷에 NAT 게이트웨이를 생성합니다. 인터넷 게이트웨이를 생성하고 VPC에 연결합니다. 공용 서브넷의 라우팅 테이블에 인터넷 게이트웨이를 가리키는 기본 경로를 추가합니다.",
            "C. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. Amazon SQS에 대한 인터페이스 VPC 엔드포인트를 생성합니다. Amazon S3 및 DynamoDB에 대한 게이트웨이 VPC 엔드포인트를 생성합니다.",
            "D. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. Amazon SQS에 대한 게이트웨이 VPC 엔드포인트를 생성합니다. Amazon S3 및 DynamoDB에 대한 인터페이스 VPC 엔드포인트를 생성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2에서 S3, DynamoDB, SQS에 인터넷 없이 접근해야 합니다.\n\nC가 맞는 이유:\nS3와 DynamoDB는 게이트웨이 VPC 엔드포인트를 지원하며 무료입니다. SQS는 인터페이스 VPC 엔드포인트(PrivateLink)를 통해 접근합니다. 이 조합으로 인터넷 연결 없이 모든 서비스에 프라이빗하게 접근할 수 있습니다.\n\n오답 분석:\nA) 퍼블릭 서브넷에 배치하면 보안 요구사항 위반\nB) NAT 게이트웨이는 인터넷을 통한 접근이므로 프라이빗 연결이 아님\nD) SQS는 게이트웨이 엔드포인트를 지원하지 않고, S3/DynamoDB에 인터페이스 엔드포인트는 불필요한 비용"
    },
    {
        "num": 50,
        "question": "A company has an AWS Direct Connect connection between its on-premises data center in the United States (US) and workloads in the us-east-1\nRegion. The connection uses a transit VIF to connect the data center to a transit gateway in us-east-1.\nThe company is opening a new office in Europe with a new on-premises data center in England. A Direct Connect connection will connect the new\ndata center with some workloads that are running in a single VPC in the eu-west-2 Region. The company needs to connect the US data center and\nus-east-1 with the Europe data center and eu-west-2. A network engineer must establish full connectivity between the data centers and Regions\nwith the lowest possible latency.\nHow should the network engineer design the network architecture to meet these requirements?",
        "options": [
            "A. Connect the VPC in eu-west-2 with the Europe data center by using a Direct Connect gateway and a private VIF. Associate the transit\ngateway in us-east-1 with the same Direct Connect gateway. Enable SiteLink for the transit VIF and the private VIF.",
            "B. Connect the VPC in eu-west-2 to a new transit gateway. Connect the Europe data center to the new transit gateway by using a Direct\nConnect gateway and a new transit VIF. Associate the transit gateway in us-east-1 with the same Direct Connect gateway. Enable SiteLink for\nboth transit VIFs. Peer the two transit gateways.",
            "C. Connect the VPC in eu-west-2 to a new transit gateway. Connect the Europe data center to the new transit gateway by using a Direct\nConnect gateway and a new transit VIF. Create a new Direct Connect gateway. Associate the transit gateway in us-east-1 with the new Direct\nConnect gateway. Enable SiteLink for both transit VIFs. Peer the two transit gateways.",
            "D. Connect the VPC in eu-west-2 with the Europe data center by using a Direct Connect gateway and a private VIF. Create a new Direct Connect\ngateway. Associate the transit gateway in us-east-1 with the new Direct Connect gateway. Enable SiteLink for the transit VIF and the private\nVIF."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 기존 us-east-1 Transit Gateway + Direct Connect 환경에 eu-west-2 리전을 추가해야 합니다.\n\nB가 맞는 이유:\neu-west-2에 새 Transit Gateway를 생성하고, 동일한 Direct Connect 게이트웨이에 새 트랜짓 VIF로 연결합니다. 하나의 Direct Connect 게이트웨이에 여러 리전의 Transit Gateway를 연결할 수 있으므로 기존 us-east-1 연결을 유지하면서 eu-west-2를 추가할 수 있습니다.\n\n오답 분석:\nA) 프라이빗 VIF는 Transit Gateway가 아닌 가상 프라이빗 게이트웨이에 연결됨. 두 가지를 혼합할 수 없음\nC) 새 Direct Connect 게이트웨이를 생성할 필요 없음. 기존 게이트웨이에 추가 가능\nD) A와 동일한 문제 + 불필요한 새 Direct Connect 게이트웨이",
        "question_ko": "회사에는 온프레미스 데이터 센터(미국)와 us-east-1 리전의 워크로드 간 AWS Direct Connect 연결이 있습니다. 이 연결은 트랜짓 VIF를 사용하여 데이터 센터를 us-east-1의 트랜짓 게이트웨이에 연결합니다. 회사는 영국에 있는 새 온프레미스 데이터 센터와 함께 유럽에 새 사무소를 열고 있습니다. Direct Connect 연결을 통해 새 데이터 센터와 eu-west-2 리전의 단일 VPC에서 실행되는 일부 워크로드를 연결할 것입니다. 회사는 데이터 센터와 리전 간에 완전한 연결성을 가져야 하며 가능한 한 지연 시간이 적어야 합니다. 네트워크 엔지니어는 이러한 요구사항을 어떻게 충족하도록 네트워크 아키텍처를 설계해야 합니까?",
        "options_ko": [
            "A. Direct Connect 게이트웨이와 프라이빗 VIF를 사용하여 eu-west-2의 VPC를 유럽 데이터 센터에 연결합니다. 동일한 Direct Connect 게이트웨이와 us-east-1의 트랜짓 게이트웨이를 연결합니다. 두 트랜짓 VIF에 대해 SiteLink를 활성화합니다.",
            "B. eu-west-2의 VPC를 새 트랜짓 게이트웨이에 연결합니다. Direct Connect 게이트웨이와 새 트랜짓 VIF를 사용하여 유럽 데이터 센터를 새 트랜짓 게이트웨이에 연결합니다. 동일한 Direct Connect 게이트웨이와 us-east-1의 트랜짓 게이트웨이를 연결합니다. 두 트랜짓 VIF에 대해 SiteLink를 활성화합니다. 두 트랜짓 게이트웨이를 피어링합니다.",
            "C. eu-west-2의 VPC를 새 트랜짓 게이트웨이에 연결합니다. Direct Connect 게이트웨이와 새 트랜짓 VIF를 사용하여 유럽 데이터 센터를 새 트랜짓 게이트웨이에 연결합니다. 새 Direct Connect 게이트웨이를 생성합니다. 새 Direct Connect 게이트웨이와 us-east-1의 트랜짓 게이트웨이를 연결합니다. 두 트랜짓 VIF에 대해 SiteLink를 활성화합니다. 두 트랜짓 게이트웨이를 피어링합니다.",
            "D. Direct Connect 게이트웨이와 프라이빗 VIF를 사용하여 eu-west-2의 VPC를 유럽 데이터 센터에 연결합니다. 새 Direct Connect 게이트웨이를 생성합니다. 새 Direct Connect 게이트웨이와 us-east-1의 트랜짓 게이트웨이를 연결합니다. 트랜짓 VIF와 프라이빗 VIF에 대해 SiteLink를 활성화합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: 기존 us-east-1 Transit Gateway + Direct Connect 환경에 eu-west-2 리전을 추가해야 합니다.\n\nB가 맞는 이유:\neu-west-2에 새 Transit Gateway를 생성하고, 동일한 Direct Connect 게이트웨이에 새 트랜짓 VIF로 연결합니다. 하나의 Direct Connect 게이트웨이에 여러 리전의 Transit Gateway를 연결할 수 있으므로 기존 us-east-1 연결을 유지하면서 eu-west-2를 추가할 수 있습니다.\n\n오답 분석:\nA) 프라이빗 VIF는 Transit Gateway가 아닌 가상 프라이빗 게이트웨이에 연결됨. 두 가지를 혼합할 수 없음\nC) 새 Direct Connect 게이트웨이를 생성할 필요 없음. 기존 게이트웨이에 추가 가능\nD) A와 동일한 문제 + 불필요한 새 Direct Connect 게이트웨이"
    },
    {
        "num": 51,
        "question": "A network engineer has deployed an Amazon EC2 instance in a private subnet in a VPC. The VPC has no public subnet. The EC2 instance hosts\napplication code that sends messages to an Amazon Simple Queue Service (Amazon SQS) queue. The subnet has the default network ACL with\nno modification applied. The EC2 instance has the default security group with no modification applied.\nThe SQS queue is not receiving messages.\nWhich of the following are possible causes of this problem? (Choose two.)",
        "options": [
            "A. The EC2 instance is not attached to an IAM role that allows write operations to Amazon SQS.",
            "B. The security group is blocking traffic to the IP address range used by Amazon SQS",
            "C. There is no interface VPC endpoint configured for Amazon SQS",
            "D. The network ACL is blocking return traffic from Amazon SQS",
            "E. There is no route configured in the subnet route table for the IP address range used by Amazon SQS"
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "정답: A, C\n\n핵심: 퍼블릭 서브넷이 없는 VPC의 프라이빗 서브넷에서 SQS에 메시지를 전송할 수 없는 원인을 찾아야 합니다.\n\nA, C가 맞는 이유:\nA) EC2 인스턴스에 SQS 쓰기 권한이 있는 IAM 역할이 없으면 API 호출이 거부됩니다.\nC) 퍼블릭 서브넷이 없으므로 인터넷 경로가 없습니다. SQS에 접근하려면 인터페이스 VPC 엔드포인트가 필요합니다.\n\n오답 분석:\nB) 기본 보안 그룹은 모든 아웃바운드 트래픽을 허용하므로 차단하지 않음\nD) 기본 네트워크 ACL은 모든 인바운드/아웃바운드 트래픽을 허용\nE) VPC 엔드포인트를 사용하면 라우팅 테이블에 별도 경로가 필요 없음 (인터페이스 엔드포인트는 DNS 기반)",
        "question_ko": "프라이빗 서브넷에 Amazon EC2 인스턴스를 배포한 네트워크 엔지니어입니다. VPC에는 퍼블릭 서브넷이 없습니다. EC2 인스턴스는 Amazon Simple Queue Service (Amazon SQS) 대기열로 메시지를 전송하는 애플리케이션 코드를 호스팅합니다. 서브넷에는 변경이 없는 기본 네트워크 ACL이 있습니다. EC2 인스턴스에는 변경이 없는 기본 보안 그룹이 있습니다. SQS 대기열이 메시지를 수신하지 않습니다. 이 문제의 가능한 원인은 무엇입니까? (두 가지 선택)",
        "options_ko": [
            "A. EC2 인스턴스가 Amazon SQS에 대한 쓰기 작업을 허용하는 IAM 역할에 연결되어 있지 않습니다.",
            "B. 보안 그룹이 Amazon SQS에서 사용하는 IP 주소 범위로의 트래픽을 차단하고 있습니다.",
            "C. Amazon SQS에 대한 인터페이스 VPC 엔드포인트가 구성되어 있지 않습니다.",
            "D. 네트워크 ACL이 Amazon SQS에서 반환되는 트래픽을 차단하고 있습니다.",
            "E. 서브넷 라우팅 테이블에 Amazon SQS에서 사용하는 IP 주소 범위에 대한 경로가 구성되어 있지 않습니다."
        ],
        "explanation_ko": "정답: A, C\n\n핵심: 퍼블릭 서브넷이 없는 VPC의 프라이빗 서브넷에서 SQS에 메시지를 전송할 수 없는 원인을 찾아야 합니다.\n\nA, C가 맞는 이유:\nA) EC2 인스턴스에 SQS 쓰기 권한이 있는 IAM 역할이 없으면 API 호출이 거부됩니다.\nC) 퍼블릭 서브넷이 없으므로 인터넷 경로가 없습니다. SQS에 접근하려면 인터페이스 VPC 엔드포인트가 필요합니다.\n\n오답 분석:\nB) 기본 보안 그룹은 모든 아웃바운드 트래픽을 허용하므로 차단하지 않음\nD) 기본 네트워크 ACL은 모든 인바운드/아웃바운드 트래픽을 허용\nE) VPC 엔드포인트를 사용하면 라우팅 테이블에 별도 경로가 필요 없음 (인터페이스 엔드포인트는 DNS 기반)"
    },
    {
        "num": 52,
        "question": "A network engineer needs to standardize a company's approach to centralizing and managing interface VPC endpoints for private communication\nwith AWS services. The company uses AWS Transit Gateway for inter-VPC connectivity between AWS accounts through a hub-and-spoke model.\nThe company's network services team must manage all Amazon Route 53 zones and interface endpoints within a shared services AWS account.\nThe company wants to use this centralized model to provide AWS resources with access to AWS Key Management Service (AWS KMS) without\nsending traffic over the public internet.\nWhat should the network engineer do to meet these requirements?",
        "options": [
            "A. In the shared services account, create an interface endpoint for AWS KMS. Modify the interface endpoint by disabling the private DNS\nname. Create a private hosted zone in the shared services account with an alias record that points to the interface endpoint. Associate the\nprivate hosted zone with the spoke VPCs in each AWS account.",
            "B. In the shared services account, create an interface endpoint for AWS KMS. Modify the interface endpoint by disabling the private DNS\nname. Create a private hosted zone in each spoke AWS account with an alias record that points to the interface endpoint. Associate each\nprivate hosted zone with the shared services AWS account.",
            "C. In each spoke AWS account, create an interface endpoint for AWS KMS. Modify each interface endpoint by disabling the private DNS name.\nCreate a private hosted zone in each spoke AWS account with an alias record that points to each interface endpoint. Associate each private\nhosted zone with the shared services AWS account.",
            "D. In each spoke AWS account, create an interface endpoint for AWS KMS. Modify each interface endpoint by disabling the private DNS name.\nCreate a private hosted zone in the shared services account with an alias record that points to each interface endpoint. Associate the private\nhosted zone with the spoke VPCs in each AWS account."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 허브-앤-스포크 모델에서 인터페이스 VPC 엔드포인트를 중앙 집중화해야 합니다.\n\nA가 맞는 이유:\n공유 서비스 계정에 인터페이스 엔드포인트를 생성하고 프라이빗 DNS를 비활성화합니다. 공유 서비스 계정에 프라이빗 호스팅 영역을 생성하여 별칭 레코드로 엔드포인트를 가리키고, 이 호스팅 영역을 모든 스포크 VPC와 연결하면 중앙에서 관리할 수 있습니다.\n\n오답 분석:\nB) 각 스포크 계정에 프라이빗 호스팅 영역을 생성하면 중앙 관리가 아님\nC) 각 스포크에 엔드포인트를 생성하면 중앙 집중화가 아님\nD) 각 스포크에 엔드포인트를 생성하면서 공유 계정에 호스팅 영역을 만드는 것은 비효율적",
        "question_ko": "네트워크 엔지니어는 AWS 서비스와의 프라이빗 통신을 위해 인터페이스 VPC 엔드포인트를 중앙 집중화하고 관리하는 회사의 접근 방식을 표준화해야 합니다. 회사는 허브 앤 스포크 모델을 통해 AWS 계정 간 VPC 간 연결을 위해 AWS 트랜짓 게이트웨이를 사용합니다. 네트워크 서비스 팀은 공유 서비스 AWS 계정 내에서 모든 Amazon Route 53 영역과 인터페이스 엔드포인트를 관리해야 합니다. 회사는 퍼블릭 인터넷을 통과하지 않고 AWS Key Management Service (AWS KMS)에 액세스할 수 있는 이 중앙 집중식 모델을 사용하려고 합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. 공유 서비스 계정에서 AWS KMS에 대한 인터페이스 엔드포인트를 생성합니다. 인터페이스 엔드포인트의 프라이빗 DNS 이름을 비활성화합니다. 공유 서비스 계정에 프라이빗 호스팅 영역을 생성하고 별칭 레코드를 인터페이스 엔드포인트를 가리키도록 합니다. 프라이빗 호스팅 영역을 각 스포크 VPC와 연결합니다.",
            "B. 공유 서비스 계정에서 AWS KMS에 대한 인터페이스 엔드포인트를 생성합니다. 인터페이스 엔드포인트의 프라이빗 DNS 이름을 비활성화합니다. 각 스포크 AWS 계정에 프라이빗 호스팅 영역을 생성하고 별칭 레코드를 인터페이스 엔드포인트를 가리키도록 합니다. 각 프라이빗 호스팅 영역을 공유 서비스 AWS 계정과 연결합니다.",
            "C. 각 스포크 AWS 계정에서 AWS KMS에 대한 인터페이스 엔드포인트를 생성합니다. 각 인터페이스 엔드포인트의 프라이빗 DNS 이름을 비활성화합니다. 각 스포크 AWS 계정에 프라이빗 호스팅 영역을 생성하고 별칭 레코드를 각 인터페이스 엔드포인트를 가리키도록 합니다. 각 프라이빗 호스팅 영역을 공유 서비스 AWS 계정과 연결합니다.",
            "D. 각 스포크 AWS 계정에서 AWS KMS에 대한 인터페이스 엔드포인트를 생성합니다. 각 인터페이스 엔드포인트의 프라이빗 DNS 이름을 비활성화합니다. 공유 서비스 계정에 프라이빗 호스팅 영역을 생성하고 별칭 레코드를 각 인터페이스 엔드포인트를 가리키도록 합니다. 프라이빗 호스팅 영역을 각 스포크 VPC와 연결합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 허브-앤-스포크 모델에서 인터페이스 VPC 엔드포인트를 중앙 집중화해야 합니다.\n\nA가 맞는 이유:\n공유 서비스 계정에 인터페이스 엔드포인트를 생성하고 프라이빗 DNS를 비활성화합니다. 공유 서비스 계정에 프라이빗 호스팅 영역을 생성하여 별칭 레코드로 엔드포인트를 가리키고, 이 호스팅 영역을 모든 스포크 VPC와 연결하면 중앙에서 관리할 수 있습니다.\n\n오답 분석:\nB) 각 스포크 계정에 프라이빗 호스팅 영역을 생성하면 중앙 관리가 아님\nC) 각 스포크에 엔드포인트를 생성하면 중앙 집중화가 아님\nD) 각 스포크에 엔드포인트를 생성하면서 공유 계정에 호스팅 영역을 만드는 것은 비효율적"
    },
    {
        "num": 53,
        "question": "A development team is building a new web application in the AWS Cloud. The main company domain, example.com, is currently hosted in an\nAmazon Route 53 public hosted zone in one of the company's production AWS accounts.\nThe developers want to test the web application in the company's staging AWS account by using publicly resolvable subdomains under the\nexample.com domain with the ability to create and delete DNS records as needed. Developers have full access to Route 53 hosted zones within\nthe staging account, but they are prohibited from accessing resources in any of the production AWS accounts.\nWhich combination of steps should a network engineer take to allow the developers to create records under the example com domain? (Choose\ntwo.)",
        "options": [
            "A. Create a public hosted zone for example com in the staging account",
            "B. Create a staging example.com NS record in the example.com domain. Populate the value with the name servers from the\nstaging.example.com domain. Set the routing policy type to simple routing.",
            "C. Create a private hosted zone for staging example com in the staging account.",
            "D. Create an example com NS record in the staging example.com domain. Populate the value with the name servers from the example.com\ndomain. Set the routing policy type to simple routing.",
            "E. Create a public hosted zone for staging.example.com in the staging account."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: B, E\n\n핵심: 스테이징 계정에서 staging.example.com 하위 도메인의 DNS를 독립적으로 관리해야 합니다.\n\nB, E가 맞는 이유:\nE) 스테이징 계정에 staging.example.com 퍼블릭 호스팅 영역을 생성합니다.\nB) 프로덕션 계정의 example.com 호스팅 영역에 staging.example.com NS 레코드를 추가하여 스테이징 호스팅 영역의 네임서버로 위임합니다.\n\n오답 분석:\nA) example.com 전체 호스팅 영역을 스테이징에 만들면 프로덕션과 충돌\nC) 프라이빗 호스팅 영역은 인터넷에서 접근 불가\nD) NS 레코드 방향이 반대 (하위 도메인에서 상위 도메인으로 위임하는 것은 잘못됨)",
        "question_ko": "개발팀이 AWS 클라우드에서 새로운 웹 애플리케이션을 구축하고 있습니다. 기본 회사 도메인 example.com은 현재 하나의 프로덕션 AWS 계정에 있는 Amazon Route 53 퍼블릭 호스팅 영역에서 호스팅되고 있습니다. 개발자들은 회사의 스테이징 AWS 계정에서 필요에 따라 DNS 레코드를 생성하고 삭제할 수 있는 ability를 가지고 example.com 도메인의 퍼블릭 결정 가능한 하위 도메인을 사용하여 웹 애플리케이션을 테스트하고 싶습니다. 개발자들은 스테이징 계정 내의 Route 53 호스팅 영역에 대한 전체 액세스 권한이 있지만 프로덕션 AWS 계정의 리소스에 액세스하는 것은 금지됩니다. 네트워크 엔지니어가 개발자가 example.com 도메인 아래에서 레코드를 만들 수 있도록 하려면 어떤 단계를 수행해야 합니까? (두 가지 선택)",
        "options_ko": [
            "A. 스테이징 계정에 example.com에 대한 퍼블릭 호스팅 영역 생성",
            "B. example.com 도메인에 staging.example.com 도메인의 네임 서버로 채워진 staging.example.com NS 레코드 생성. 라우팅 정책 유형을 단순 라우팅으로 설정",
            "C. 스테이징 계정에 staging.example.com에 대한 프라이빗 호스팅 영역 생성",
            "D. staging.example.com 도메인에 example.com 도메인의 네임 서버로 채워진 example.com NS 레코드 생성. 라우팅 정책 유형을 단순 라우팅으로 설정",
            "E. 스테이징 계정에 staging.example.com에 대한 퍼블릭 호스팅 영역 생성"
        ],
        "explanation_ko": "정답: B, E\n\n핵심: 스테이징 계정에서 staging.example.com 하위 도메인의 DNS를 독립적으로 관리해야 합니다.\n\nB, E가 맞는 이유:\nE) 스테이징 계정에 staging.example.com 퍼블릭 호스팅 영역을 생성합니다.\nB) 프로덕션 계정의 example.com 호스팅 영역에 staging.example.com NS 레코드를 추가하여 스테이징 호스팅 영역의 네임서버로 위임합니다.\n\n오답 분석:\nA) example.com 전체 호스팅 영역을 스테이징에 만들면 프로덕션과 충돌\nC) 프라이빗 호스팅 영역은 인터넷에서 접근 불가\nD) NS 레코드 방향이 반대 (하위 도메인에서 상위 도메인으로 위임하는 것은 잘못됨)"
    },
    {
        "num": 54,
        "question": "A company plans to deploy a two-tier web application to a new VPC in a single AWS Region. The company has configured the VPC with an internet\ngateway and four subnets. Two of the subnets are public and have default routes that point to the internet gateway. Two of the subnets are private\nand share a route table that does not have a default route.\nThe application will run on a set of Amazon EC2 instances that will be deployed behind an external Application Load Balancer. The EC2 instances\nmust not be directly accessible from the internet. The application will use an Amazon S3 bucket in the same Region to store data. The application\nwill invoke S3 GET API operations and S3 PUT API operations from the EC2 instances. A network engineer must design a VPC architecture that\nminimizes data transfer cost.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy the EC2 instances in the public subnets. Create an S3 interface endpoint in the VPC. Modify the application configuration to use the\nS3 endpoint-specific DNS hostname.",
            "B. Deploy the EC2 instances in the private subnets. Create a NAT gateway in the VPC. Create default routes in the private subnets to the NAT\ngateway. Connect to Amazon S3 by using the NAT gateway.",
            "C. Deploy the EC2 instances in the private subnets. Create an S3 gateway endpoint in the VPSpecify die route table of the private subnets\nduring endpoint creation to create routes to Amazon S3.",
            "D. Deploy the EC2 instances in the private subnets. Create an S3 interface endpoint in the VPC. Modify the application configuration to use the\nS3 endpoint-specific DNS hostname."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2에서 S3에 인터넷 없이 접근해야 합니다.\n\nC가 맞는 이유:\nS3 게이트웨이 VPC 엔드포인트는 무료이며 프라이빗 서브넷의 라우팅 테이블에 자동으로 경로를 추가합니다. 애플리케이션 코드 변경 없이 기존 S3 URL로 접근 가능합니다.\n\n오답 분석:\nA) 퍼블릭 서브넷에 배포하면 보안 요구사항 위반\nB) NAT 게이트웨이는 인터넷을 통한 접근이므로 비용 발생 + 불필요\nD) 인터페이스 엔드포인트는 비용이 발생하며 엔드포인트별 DNS 호스트 이름 사용이 필요",
        "question_ko": "회사는 단일 AWS 리전의 새로운 VPC에 2계층 웹 애플리케이션을 배포할 계획입니다. 회사는 VPC에 인터넷 게이트웨이와 4개의 서브넷을 구성했습니다. 2개의 퍼블릭 서브넷에는 인터넷 게이트웨이를 가리키는 기본 경로가 있습니다. 2개의 프라이빗 서브넷에는 기본 경로가 없는 공유 라우팅 테이블이 있습니다. 애플리케이션은 외부 Application Load Balancer 뒤에 배포될 일련의 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 인터넷에서 직접 액세스할 수 없어야 합니다. 애플리케이션은 동일한 리전의 Amazon S3 버킷을 사용하여 데이터를 저장합니다. 애플리케이션은 EC2 인스턴스에서 S3 GET API 작업과 S3 PUT API 작업을 호출합니다. 네트워크 엔지니어는 데이터 전송 비용을 최소화하는 VPC 아키텍처를 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
        "options_ko": [
            "A. EC2 인스턴스를 퍼블릭 서브넷에 배포합니다. VPC에 S3 인터페이스 엔드포인트를 생성합니다. 애플리케이션 구성을 수정하여 S3 엔드포인트별 DNS 호스트 이름을 사용합니다.",
            "B. EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에 NAT 게이트웨이를 생성합니다. 프라이빗 서브넷의 기본 경로를 NAT 게이트웨이를 가리키도록 수정합니다. NAT 게이트웨이를 통해 Amazon S3에 연결합니다.",
            "C. EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에 S3 게이트웨이 엔드포인트를 생성합니다. 엔드포인트 생성 중에 프라이빗 서브넷의 라우팅 테이블을 지정하여 Amazon S3로 경로를 생성합니다.",
            "D. EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에 S3 인터페이스 엔드포인트를 생성합니다. 애플리케이션 구성을 수정하여 S3 엔드포인트별 DNS 호스트 이름을 사용합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 프라이빗 서브넷의 EC2에서 S3에 인터넷 없이 접근해야 합니다.\n\nC가 맞는 이유:\nS3 게이트웨이 VPC 엔드포인트는 무료이며 프라이빗 서브넷의 라우팅 테이블에 자동으로 경로를 추가합니다. 애플리케이션 코드 변경 없이 기존 S3 URL로 접근 가능합니다.\n\n오답 분석:\nA) 퍼블릭 서브넷에 배포하면 보안 요구사항 위반\nB) NAT 게이트웨이는 인터넷을 통한 접근이므로 비용 발생 + 불필요\nD) 인터페이스 엔드포인트는 비용이 발생하며 엔드포인트별 DNS 호스트 이름 사용이 필요"
    },
    {
        "num": 55,
        "question": "A company has two AWS accounts one for Production and one for Connectivity. A network engineer needs to connect the Production account VPC\nto a transit gateway in the Connectivity account. The feature to auto accept shared attachments is not enabled on the transit gateway.\nWhich set of steps should the network engineer follow in each AWS account to meet these requirements?",
        "options": [
            "A. 1. In the Production account: Create a resource share in AWS Resource Access Manager for the transit gateway. Provide the Connectivity\naccount ID. Enable the feature to allow external accounts\n2. In the Connectivity account: Accept the resource.\n3. In the Connectivity account: Create an attachment to the VPC subnets.\n4. In the Production account: Accept the attachment. Associate a route table with the attachment.",
            "B. 1. In the Production account: Create a resource share in AWS Resource Access Manager for the VPC subnets. Provide the Connectivity\naccount ID. Enable the feature to allow external accounts.\n2. In the Connectivity account: Accept the resource.\n3. In the Production account: Create an attachment on the transit gateway to the VPC subnets.\n4. In the Connectivity account: Accept the attachment. Associate a route table with the attachment.",
            "C. 1. In the Connectivity account: Create a resource share in AWS Resource Access Manager for the VPC subnets. Provide the Production\naccount ID. Enable the feature to allow external accounts.\n2. In the Production account: Accept the resource.\n3. In the Connectivity account: Create an attachment on the transit gateway to the VPC subnets.\n4. In the Production account: Accept the attachment. Associate a route table with the attachment.",
            "D. 1. In the Connectivity account: Create a resource share in AWS Resource Access Manager for the transit gateway. Provide the Production\naccount ID Enable the feature to allow external accounts.\n2. In the Production account: Accept the resource.\n3. In the Production account: Create an attachment to the VPC subnets.\n4. In the Connectivity account: Accept the attachment. Associate a route table with the attachment."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 다른 계정의 Transit Gateway에 VPC를 연결하려면 RAM으로 공유해야 합니다.\n\nD가 맞는 이유:\nTransit Gateway가 있는 연결 계정에서 AWS RAM으로 Transit Gateway를 프로덕션 계정에 공유합니다. 프로덕션 계정에서 리소스 공유를 수락한 후 VPC 연결을 생성합니다. 연결 계정에서 VPC 연결을 수락합니다.\n\n오답 분석:\nA) Transit Gateway가 프로덕션 계정에 없으므로 프로덕션에서 공유할 수 없음\nB) VPC 서브넷 공유는 Transit Gateway 연결과 다른 기능\nC) B와 동일하게 서브넷 공유는 Transit Gateway 연결과 무관",
        "question_ko": "회사에는 프로덕션 계정과 연결 계정 두 개의 AWS 계정이 있습니다. 네트워크 엔지니어는 프로덕션 계정 VPC를 연결 계정의 트랜짓 게이트웨이에 연결해야 합니다. 트랜짓 게이트웨이에서 공유 연결을 자동으로 수락하는 기능은 활성화되어 있지 않습니다. 이러한 요구 사항을 충족하기 위해 각 AWS 계정에서 네트워크 엔지니어가 따라야 할 단계 집합은 무엇입니까?",
        "options_ko": [
            "A. 1. 프로덕션 계정에서: AWS Resource Access Manager에 트랜짓 게이트웨이에 대한 리소스 공유를 생성합니다. 연결 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다.\n2. 연결 계정에서: 리소스를 수락합니다.\n3. 연결 계정에서: VPC 서브넷에 대한 연결을 생성합니다.\n4. 프로덕션 계정에서: 연결을 수락합니다. 연결에 라우팅 테이블을 연결합니다.",
            "B. 1. 프로덕션 계정에서: AWS Resource Access Manager에 VPC 서브넷에 대한 리소스 공유를 생성합니다. 연결 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다.\n2. 연결 계정에서: 리소스를 수락합니다.\n3. 프로덕션 계정에서: 트랜짓 게이트웨이에 VPC 서브넷에 대한 연결을 생성합니다.\n4. 연결 계정에서: 연결을 수락합니다. 연결에 라우팅 테이블을 연결합니다.",
            "C. 1. 연결 계정에서: AWS Resource Access Manager에 VPC 서브넷에 대한 리소스 공유를 생성합니다. 프로덕션 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다.\n2. 프로덕션 계정에서: 리소스를 수락합니다.\n3. 연결 계정에서: 트랜짓 게이트웨이에 VPC 서브넷에 대한 연결을 생성합니다.\n4. 프로덕션 계정에서: 연결을 수락합니다. 연결에 라우팅 테이블을 연결합니다.",
            "D. 1. 연결 계정에서: AWS Resource Access Manager에 트랜짓 게이트웨이에 대한 리소스 공유를 생성합니다. 프로덕션 계정 ID를 활성화합니다. 외부 계정을 허용하는 기능을 활성화합니다.\n2. 프로덕션 계정에서: 리소스를 수락합니다.\n3. 프로덕션 계정에서: VPC 서브넷에 대한 연결을 생성합니다.\n4. 연결 계정에서: 연결을 수락합니다. 연결에 라우팅 테이블을 연결합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 다른 계정의 Transit Gateway에 VPC를 연결하려면 RAM으로 공유해야 합니다.\n\nD가 맞는 이유:\nTransit Gateway가 있는 연결 계정에서 AWS RAM으로 Transit Gateway를 프로덕션 계정에 공유합니다. 프로덕션 계정에서 리소스 공유를 수락한 후 VPC 연결을 생성합니다. 연결 계정에서 VPC 연결을 수락합니다.\n\n오답 분석:\nA) Transit Gateway가 프로덕션 계정에 없으므로 프로덕션에서 공유할 수 없음\nB) VPC 서브넷 공유는 Transit Gateway 연결과 다른 기능\nC) B와 동일하게 서브넷 공유는 Transit Gateway 연결과 무관"
    },
    {
        "num": 56,
        "question": "A company is running multiple workloads on Amazon EC2 instances in public subnets. In a recent incident, an attacker exploited an application\nvulnerability on one of the EC2 instances to gain access to the instance. The company fixed the application and launched a replacement EC2\ninstance that contains the updated application.\nThe attacker used the compromised application to spread malware over the internet. The company became aware of the compromise through a\nnotification from AWS. The company needs the ability to identify when an application that is deployed on an EC2 instance is spreading malware.\nWhich solution will meet this requirement with the LEAST operational effort?",
        "options": [
            "A. Use Amazon GuardDuty to analyze traffic patterns by inspecting DNS requests and VPC flow logs.",
            "B. Use Amazon GuardDuty to deploy AWS managed decoy systems that are equipped with the most recent malware signatures.",
            "C. Set up a Gateway Load Balancer. Run an intrusion detection system (IDS) appliance from AWS Marketplace on Amazon EC2 for traffic\ninspection.",
            "D. Configure Amazon Inspector to perform deep packet inspection of outgoing traffic."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: EC2 인스턴스의 악성 활동(악성코드 배포)을 탐지할 수 있는 서비스가 필요합니다.\n\nA가 맞는 이유:\nAmazon GuardDuty는 VPC 흐름 로그, DNS 로그, CloudTrail 이벤트를 분석하여 악성 IP 통신, 비정상 트래픽 패턴 등을 자동으로 탐지합니다. 에이전트 설치 없이 활성화만 하면 됩니다.\n\n오답 분석:\nB) GuardDuty는 유인 시스템(honeypot)을 배포하지 않음\nC) Gateway Load Balancer + IDS는 가능하지만 관리 부담이 크고 GuardDuty보다 복잡\nD) Amazon Inspector는 취약점 스캔 도구이지 네트워크 트래픽 검사 도구가 아님",
        "question_ko": "회사가 퍼블릭 서브넷의 Amazon EC2 인스턴스에서 다양한 워크로드를 실행하고 있습니다. 최근 사고에서 공격자가 EC2 인스턴스의 애플리케이션 취약점을 악용하여 인스턴스에 접근했습니다. 회사는 애플리케이션을 수정하고 업데이트된 애플리케이션이 포함된 대체 EC2 인스턴스를 시작했습니다. 공격자는 손상된 애플리케이션을 이용하여 인터넷에 악성코드를 퍼뜨렸습니다. 회사는 AWS에서 보내온 알림을 통해 이 침해 사실을 알게 되었습니다. 회사는 EC2 인스턴스에 배포된 애플리케이션이 악성코드를 퍼뜨릴 때 이를 식별할 수 있는 능력이 필요합니다. 이 요구 사항을 가장 적은 운영 노력으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon GuardDuty를 사용하여 DNS 요청 및 VPC 흐름 로그를 검사하여 트래픽 패턴을 분석합니다.",
            "B. Amazon GuardDuty를 사용하여 가장 최신 악성코드 서명이 포함된 AWS 관리형 유인 시스템을 배포합니다.",
            "C. Gateway Load Balancer를 설정합니다. AWS Marketplace의 침입 탐지 시스템(IDS) 어플라이언스를 Amazon EC2에서 실행하여 트래픽을 검사합니다.",
            "D. Amazon Inspector를 구성하여 발신 트래픽에 대한 심층 패킷 검사를 수행합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: EC2 인스턴스의 악성 활동(악성코드 배포)을 탐지할 수 있는 서비스가 필요합니다.\n\nA가 맞는 이유:\nAmazon GuardDuty는 VPC 흐름 로그, DNS 로그, CloudTrail 이벤트를 분석하여 악성 IP 통신, 비정상 트래픽 패턴 등을 자동으로 탐지합니다. 에이전트 설치 없이 활성화만 하면 됩니다.\n\n오답 분석:\nB) GuardDuty는 유인 시스템(honeypot)을 배포하지 않음\nC) Gateway Load Balancer + IDS는 가능하지만 관리 부담이 크고 GuardDuty보다 복잡\nD) Amazon Inspector는 취약점 스캔 도구이지 네트워크 트래픽 검사 도구가 아님"
    },
    {
        "num": 57,
        "question": "A company deploys a new web application on Amazon EC2 instances. The application runs in private subnets in three Availability Zones behind an\nApplication Load Balancer (ALB). Security auditors require encryption of all connections. The company uses Amazon Route 53 for DNS and uses\nAWS Certificate Manager (ACM) to automate SSL/TLS certificate provisioning. SSL/TLS connections are terminated on the ALB.\nThe company tests the application with a single EC2 instance and does not observe any problems. However, after production deployment, users\nreport that they can log in but that they cannot use the application. Every new web request restarts the login process.\nWhat should a network engineer do to resolve this issue?",
        "options": [
            "A. Modify the ALB listener configuration. Edit the rule that forwards traffic to the target group. Change the rule to enable group-level\nstickiness. Set the duration to the maximum application session length.",
            "B. Replace the ALB with a Network Load Balancer. Create a TLS listener. Create a new target group with the protocol type set to TLS Register\nthe EC2 instances. Modify the target group configuration by enabling the stickiness attribute.",
            "C. Modify the ALB target group configuration by enabling the stickiness attribute. Use an application-based cookie. Set the duration to the\nmaximum application session length.",
            "D. Remove the ALB. Create an Amazon Route 53 rule with a failover routing policy for the application name. Configure ACM to issue\ncertificates for each EC2 instance."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: ALB 뒤의 웹 애플리케이션에서 세션 유지(sticky session)가 필요합니다.\n\nC가 맞는 이유:\nALB 대상 그룹에서 애플리케이션 기반 쿠키 스티키니스를 활성화하면, 같은 사용자의 요청이 동일한 EC2 인스턴스로 라우팅됩니다. 기간을 세션 길이로 설정합니다.\n\n오답 분석:\nA) 리스너 규칙 수준이 아닌 대상 그룹 수준에서 스티키니스를 설정해야 함\nB) NLB TLS 리스너로 교체하면 경로 기반 라우팅 등 ALB 기능을 잃음\nD) ALB 제거 후 Route 53 장애 조치는 로드 밸런싱이 아니며 세션 유지도 불가",
        "question_ko": "회사가 새로운 웹 애플리케이션을 Amazon EC2 인스턴스에 배포합니다. 애플리케이션은 Application Load Balancer(ALB)를 통해 3개의 가용 영역의 프라이빗 서브넷에서 실행됩니다. 보안 감사관들은 모든 연결을 암호화할 것을 요구합니다. 회사는 Amazon Route 53을 사용하여 DNS를 관리하고 AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서 프로비저닝을 자동화합니다. SSL/TLS 연결은 ALB에서 종료됩니다. 회사는 단일 EC2 인스턴스로 애플리케이션을 테스트했으며 문제가 없음을 확인했습니다. 그러나 프로덕션 배포 후 사용자들이 로그인은 가능하지만 애플리케이션을 사용할 수 없다고 보고합니다. 새로운 웹 요청마다 로그인 프로세스가 다시 시작됩니다. 네트워크 엔지니어가 이 문제를 해결하기 위해 취해야 할 조치는 무엇입니까?",
        "options_ko": [
            "A. ALB 리스너 구성을 수정합니다. 대상 그룹으로 트래픽을 전달하는 규칙을 편집합니다. 그룹 수준 스티키니스를 활성화하도록 규칙을 변경합니다. 기간을 최대 애플리케이션 세션 길이로 설정합니다.",
            "B. ALB를 Network Load Balancer로 교체합니다. TLS 리스너를 생성합니다. 프로토콜 유형을 TLS로 설정한 새 대상 그룹을 생성하고 EC2 인스턴스를 등록합니다. 대상 그룹 구성에서 스티키니스 속성을 활성화합니다.",
            "C. ALB 대상 그룹 구성에서 스티키니스 속성을 활성화합니다. 애플리케이션 기반 쿠키를 사용합니다. 기간을 최대 애플리케이션 세션 길이로 설정합니다.",
            "D. ALB를 제거합니다. Amazon Route 53에 애플리케이션 이름에 대한 장애 조치 라우팅 정책이 있는 규칙을 생성합니다. ACM에서 각 EC2 인스턴스에 대한 인증서를 발급하도록 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: ALB 뒤의 웹 애플리케이션에서 세션 유지(sticky session)가 필요합니다.\n\nC가 맞는 이유:\nALB 대상 그룹에서 애플리케이션 기반 쿠키 스티키니스를 활성화하면, 같은 사용자의 요청이 동일한 EC2 인스턴스로 라우팅됩니다. 기간을 세션 길이로 설정합니다.\n\n오답 분석:\nA) 리스너 규칙 수준이 아닌 대상 그룹 수준에서 스티키니스를 설정해야 함\nB) NLB TLS 리스너로 교체하면 경로 기반 라우팅 등 ALB 기능을 잃음\nD) ALB 제거 후 Route 53 장애 조치는 로드 밸런싱이 아니며 세션 유지도 불가"
    },
    {
        "num": 58,
        "question": "A company recently migrated its Amazon EC2 instances to VPC private subnets to satisfy a security compliance requirement. The EC2 instances\nnow use a NAT gateway for internet access. After the migration, some long-running database queries from private EC2 instances to a publicly\naccessible third-party database no longer receive responses. The database query logs reveal that the queries successfully completed after 7\nminutes but that the client EC2 instances never received the response.\nWhich configuration change should a network engineer implement to resolve this issue?",
        "options": [
            "A. Configure the NAT gateway timeout to allow connections for up to 600 seconds.",
            "B. Enable enhanced networking on the client EC2 instances.",
            "C. Enable TCP keepalive on the client EC2 instances with a value of less than 300 seconds.",
            "D. Close idle TCP connections through the NAT gateway."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: NAT 게이트웨이를 통한 장기 실행 TCP 연결이 타임아웃됩니다.\n\nC가 맞는 이유:\nNAT 게이트웨이는 350초 동안 유휴 상태인 TCP 연결을 자동으로 종료합니다. 클라이언트 EC2에서 TCP keepalive를 300초 미만으로 설정하면 연결이 유휴 상태로 판단되지 않아 NAT 게이트웨이가 연결을 유지합니다.\n\n오답 분석:\nA) NAT 게이트웨이의 타임아웃은 구성할 수 없음 (350초 고정)\nB) 향상된 네트워킹은 대역폭/지연 개선이지 타임아웃과 무관\nD) 유휴 연결을 종료하면 문제가 더 악화됨",
        "question_ko": "회사는 최근 보안 컴플라이언스 요구 사항을 충족하기 위해 Amazon EC2 인스턴스를 VPC 프라이빗 서브넷으로 마이그레이션했습니다. EC2 인스턴스는 이제 인터넷 액세스를 위해 NAT 게이트웨이를 사용합니다. 마이그레이션 후 프라이빗 EC2 인스턴스에서 공개적으로 액세스 가능한 서드파티 데이터베이스로의 일부 장기 실행 데이터베이스 쿼리가 더 이상 응답을 받지 못합니다. 데이터베이스 쿼리 로그에 따르면 쿼리가 7분 후에 성공적으로 완료되었지만 클라이언트 EC2 인스턴스는 응답을 받지 못했습니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 구현해야 할 구성 변경은 무엇입니까?",
        "options_ko": [
            "A. NAT 게이트웨이 타임아웃을 600초 까지 허용하도록 구성합니다.",
            "B. 클라이언트 EC2 인스턴스에서 향상된 네트워킹을 활성화합니다.",
            "C. 클라이언트 EC2 인스턴스에서 TCP keepalive를 300초 미만의 값으로 활성화합니다.",
            "D. NAT 게이트웨이를 통한 유휴 TCP 연결을 종료합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: NAT 게이트웨이를 통한 장기 실행 TCP 연결이 타임아웃됩니다.\n\nC가 맞는 이유:\nNAT 게이트웨이는 350초 동안 유휴 상태인 TCP 연결을 자동으로 종료합니다. 클라이언트 EC2에서 TCP keepalive를 300초 미만으로 설정하면 연결이 유휴 상태로 판단되지 않아 NAT 게이트웨이가 연결을 유지합니다.\n\n오답 분석:\nA) NAT 게이트웨이의 타임아웃은 구성할 수 없음 (350초 고정)\nB) 향상된 네트워킹은 대역폭/지연 개선이지 타임아웃과 무관\nD) 유휴 연결을 종료하면 문제가 더 악화됨"
    },
    {
        "num": 59,
        "question": "A company uses AWS Direct Connect to connect its corporate network to multiple VPCs in the same AWS account and the same AWS Region.\nEach VPC uses its own private VIF and its own virtual LAN on the Direct Connect connection. The company has grown and will soon surpass the\nlimit of VPCs and private VIFs for each connection.\nWhat is the MOST scalable way to add VPCs with on-premises connectivity?",
        "options": [
            "A. Provision a new Direct Connect connection to handle the additional VPCs. Use the new connection to connect additional VPCs.",
            "B. Create virtual private gateways for each VPC that is over the service quota. Use AWS Site-to-Site VPN to connect the virtual private\ngateways to the corporate network.",
            "C. Create a Direct Connect gateway, and add virtual private gateway associations to the VPCs. Configure a private VIF to connect to the\ncorporate network.",
            "D. Create a transit gateway, and attach the VPCs. Create a Direct Connect gateway, and associate it with the transit gateway. Create a transit\nVIF to the Direct Connect gateway."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: VPC와 프라이빗 VIF 수가 서비스 할당량에 도달하여 확장이 필요합니다.\n\nD가 맞는 이유:\nTransit Gateway를 생성하고 모든 VPC를 연결한 후, Direct Connect 게이트웨이에 트랜짓 VIF 하나로 연결하면 VPC 수에 관계없이 단일 VIF로 모든 VPC에 접근할 수 있습니다.\n\n오답 분석:\nA) 새 Direct Connect 연결을 추가해도 VIF 할당량 문제는 동일\nB) Site-to-Site VPN은 Direct Connect의 전용 대역폭을 활용하지 못함\nC) Direct Connect 게이트웨이 + 프라이빗 VIF는 VPC당 하나의 VGW가 필요하여 할당량 문제 해결 안 됨",
        "question_ko": "회사는 AWS Direct Connect를 사용하여 자체 네트워크를 동일한 AWS 계정 및 동일한 AWS 리전의 여러 VPC에 연결합니다. 각 VPC는 자체 프라이빗 VIF와 Direct Connect 연결의 고유 가상 LAN을 사용합니다. 회사가 성장함에 따라 각 연결에 대한 VPC 및 프라이빗 VIF의 서비스 할당량을 곧 초과할 것입니다. 온-프레미스 연결을 위한 VPC를 추가하는 가장 확장 가능한 방법은 무엇입니까?",
        "options_ko": [
            "A. 추가 VPC를 처리할 수 있도록 새 Direct Connect 연결을 프로비저닝합니다. 새 연결을 사용하여 추가 VPC를 연결합니다.",
            "B. 서비스 할당량을 초과하는 각 VPC에 대한 가상 프라이빗 게이트웨이를 생성합니다. AWS Site-to-Site VPN을 사용하여 가상 프라이빗 게이트웨이를 자체 네트워크에 연결합니다.",
            "C. Direct Connect 게이트웨이를 생성하고 VPC에 가상 프라이빗 게이트웨이 연결을 추가합니다. 자체 네트워크에 연결하기 위해 프라이빗 VIF를 구성합니다.",
            "D. 트랜짓 게이트웨이를 생성하고 VPC를 연결합니다. Direct Connect 게이트웨이를 생성하고 트랜짓 게이트웨이와 연결합니다. Direct Connect 게이트웨이에 트랜짓 VIF를 생성합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: VPC와 프라이빗 VIF 수가 서비스 할당량에 도달하여 확장이 필요합니다.\n\nD가 맞는 이유:\nTransit Gateway를 생성하고 모든 VPC를 연결한 후, Direct Connect 게이트웨이에 트랜짓 VIF 하나로 연결하면 VPC 수에 관계없이 단일 VIF로 모든 VPC에 접근할 수 있습니다.\n\n오답 분석:\nA) 새 Direct Connect 연결을 추가해도 VIF 할당량 문제는 동일\nB) Site-to-Site VPN은 Direct Connect의 전용 대역폭을 활용하지 못함\nC) Direct Connect 게이트웨이 + 프라이빗 VIF는 VPC당 하나의 VGW가 필요하여 할당량 문제 해결 안 됨"
    },
    {
        "num": 60,
        "question": "A network engineer is designing a hybrid architecture that uses a 1 Gbps AWS Direct Connect connection between the company's data center and\ntwo AWS Regions: us-east-1 and eu-west-1. The VPCs in us-east-1 are connected by a transit gateway and need to access several on-premises\ndatabases. According to company policy, only one VPC in eu-west-1 can be connected to one on-premises server. The on-premises network\nsegments the traffic between the databases and the server.\nHow should the network engineer set up the Direct Connect connection to meet these requirements?",
        "options": [
            "A. Create one hosted connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in\neu-west-1. Use one Direct. Connect gateway for both VIFs to route from the Direct Connect locations to the corresponding AWS Region along\nthe path that has the lowest latency.",
            "B. Create one hosted connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in\neu-west-1. Use two Direct Connect gateways, one for each VIF, to route from the Direct Connect locations to the corresponding AWS Region\nalong the path that has the lowest latency.",
            "C. Create one dedicated connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in\neu-west-1. Use one Direct Connect gateway for both VIFs to route from the Direct Connect locations to the corresponding AWS Region along\nthe path that has the lowest latency.",
            "D. Create one dedicated connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in\neu-west-1. Use two Direct Connect gateways, one for each VIF, to route from the Direct Connect locations to the corresponding AWS Region\nalong the path that has the lowest latency."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 1Gbps Direct Connect로 두 리전(us-east-1, eu-west-1)에 연결해야 합니다.\n\nD가 맞는 이유:\n1Gbps 전용 연결을 생성합니다. 트랜짓 VIF로 us-east-1의 Transit Gateway에 연결하고, 프라이빗 VIF로 eu-west-1의 VPC에 연결합니다. 전용 연결은 1Gbps 이상의 대역폭이 필요할 때 적합합니다.\n\n오답 분석:\nA) 호스팅 연결은 파트너를 통해 제공되며 1Gbps 전용 대역폭이 보장되지 않을 수 있음\nB) A와 동일한 호스팅 연결 문제\nC) D와 거의 동일하지만 리전 연결 방식의 세부 차이",
        "question_ko": "네트워크 엔지니어가 회사의 데이터 센터와 us-east-1 및 eu-west-1 AWS 리전 간의 1Gbps AWS Direct Connect 연결을 사용하는 하이브리드 아키텍처를 설계하고 있습니다. us-east-1의 VPC는 트랜짓 게이트웨이로 연결되어 있으며 여러 온-프레미스 데이터베이스에 액세스해야 합니다. 회사 정책에 따르면 eu-west-1의 VPC 중 하나만 한 개의 온-프레미스 서버에 연결할 수 있습니다. 온-프레미스 네트워크는 데이터베이스와 서버 간의 트래픽을 세그먼트화합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하기 위해 Direct Connect 연결을 어떻게 설정해야 합니까?",
        "options_ko": [
            "A. 호스팅된 연결 하나를 생성합니다. 트랜짓 VIF를 사용하여 us-east-1의 트랜짓 게이트웨이에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 지연 시간이 가장 낮은 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하는 단일 Direct Connect 게이트웨이를 사용합니다.",
            "B. 호스팅된 연결 하나를 생성합니다. 트랜짓 VIF를 사용하여 us-east-1의 트랜짓 게이트웨이에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 지연 시간이 가장 낮은 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하는 두 개의 Direct Connect 게이트웨이를 사용합니다.",
            "C. 전용 연결 하나를 생성합니다. 트랜짓 VIF를 사용하여 us-east-1의 트랜짓 게이트웨이에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 지연 시간이 가장 낮은 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하는 단일 Direct Connect 게이트웨이를 사용합니다.",
            "D. 전용 연결 하나를 생성합니다. 트랜짓 VIF를 사용하여 us-east-1의 트랜짓 게이트웨이에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 지연 시간이 가장 낮은 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하는 두 개의 Direct Connect 게이트웨이를 사용합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 1Gbps Direct Connect로 두 리전(us-east-1, eu-west-1)에 연결해야 합니다.\n\nD가 맞는 이유:\n1Gbps 전용 연결을 생성합니다. 트랜짓 VIF로 us-east-1의 Transit Gateway에 연결하고, 프라이빗 VIF로 eu-west-1의 VPC에 연결합니다. 전용 연결은 1Gbps 이상의 대역폭이 필요할 때 적합합니다.\n\n오답 분석:\nA) 호스팅 연결은 파트너를 통해 제공되며 1Gbps 전용 대역폭이 보장되지 않을 수 있음\nB) A와 동일한 호스팅 연결 문제\nC) D와 거의 동일하지만 리전 연결 방식의 세부 차이"
    },
    {
        "num": 61,
        "question": "A company has deployed an application in a VPC that uses a NAT gateway for outbound traffic to the internet. A network engineer notices a large\nquantity of suspicious network traffic that is traveling from the VPC over the internet to IP addresses that are included on a deny list. The network\nengineer must implement a solution to determine which AWS resources are generating the suspicious traffic. The solution must minimize cost and\nadministrative overhead.\nWhich solution will meet these requirements?",
        "options": [
            "A. Launch an Amazon EC2 instance in the VPC. Use Traffic Mirroring by specifying the NAT gateway as the source and the EC2 instance as the\ndestination. Analyze the captured traffic by using open-source tools to identify the AWS resources that are generating the suspicious traffic.",
            "B. Use VPC flow logs. Launch a security information and event management (SIEM) solution in the VPC. Configure the SIEM solution to ingest\nthe VPC flow logs. Run queries on the SIEM solution to identify the AWS resources that are generating the suspicious traffic.",
            "C. Use VPC flow logs. Publish the flow logs to a log group in Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query the flow logs\nto identify the AWS resources that are generating the suspicious traffic.",
            "D. Configure the VPC to stream the network traffic directly to an Amazon Kinesis data stream. Send the data from the Kinesis data stream to\nan Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use Amazon Athena to query the data to identify the AWS\nresources that are generating the suspicious traffic."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: NAT 게이트웨이를 통한 의심스러운 트래픽의 소스 AWS 리소스를 식별해야 합니다.\n\nC가 맞는 이유:\nVPC 흐름 로그를 CloudWatch Logs에 게시하고 CloudWatch Logs Insights로 쿼리하면 소스 IP(프라이빗 IP)를 기반으로 어떤 EC2 인스턴스가 의심스러운 트래픽을 생성하는지 식별할 수 있습니다.\n\n오답 분석:\nA) NAT 게이트웨이는 Traffic Mirroring 소스로 지원되지 않음\nB) SIEM 솔루션은 가능하지만 별도 인프라 관리가 필요하여 과도함\nD) VPC에서 Kinesis로 직접 네트워크 트래픽을 스트리밍하는 기능은 없음",
        "question_ko": "회사에서 VPC에 애플리케이션을 배포하고 인터넷으로 향하는 트래픽에 NAT 게이트웨이를 사용하고 있습니다. 네트워크 엔지니어는 VPC에서 인터넷을 통해 차단 목록에 포함된 IP 주소로 향하는 많은 의심스러운 네트워크 트래픽을 발견했습니다. 네트워크 엔지니어는 이러한 의심스러운 트래픽을 생성하는 AWS 리소스를 식별하기 위한 솔루션을 구현해야 합니다. 이 솔루션은 비용과 관리 오버헤드를 최소화해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC에 Amazon EC2 인스턴스를 시작합니다. Traffic Mirroring을 사용하여 NAT 게이트웨이를 소스로, EC2 인스턴스를 대상으로 지정합니다. 오픈 소스 도구를 사용하여 캡처된 트래픽을 분석하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
            "B. VPC 흐름 로그를 사용합니다. VPC에 보안 정보 및 이벤트 관리(SIEM) 솔루션을 시작합니다. SIEM 솔루션을 구성하여 VPC 흐름 로그를 수집하도록 합니다. SIEM 솔루션에서 쿼리를 실행하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
            "C. VPC 흐름 로그를 사용합니다. 흐름 로그를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 흐름 로그를 쿼리하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
            "D. VPC에서 네트워크 트래픽을 직접 Amazon Kinesis 데이터 스트림으로 스트리밍하도록 구성합니다. Kinesis 데이터 스트림의 데이터를 Amazon Kinesis Data Firehose 전송 스트림으로 전송하여 Amazon S3에 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: NAT 게이트웨이를 통한 의심스러운 트래픽의 소스 AWS 리소스를 식별해야 합니다.\n\nC가 맞는 이유:\nVPC 흐름 로그를 CloudWatch Logs에 게시하고 CloudWatch Logs Insights로 쿼리하면 소스 IP(프라이빗 IP)를 기반으로 어떤 EC2 인스턴스가 의심스러운 트래픽을 생성하는지 식별할 수 있습니다.\n\n오답 분석:\nA) NAT 게이트웨이는 Traffic Mirroring 소스로 지원되지 않음\nB) SIEM 솔루션은 가능하지만 별도 인프라 관리가 필요하여 과도함\nD) VPC에서 Kinesis로 직접 네트워크 트래픽을 스트리밍하는 기능은 없음"
    },
    {
        "num": 62,
        "question": "A company has its production VPC (VPC-A) in the eu-west-1 Region in Account 1. VPC-A is attached to a transit gateway (TGW-A) that is\nconnected to an on-premises data center in Dublin, Ireland, by an AWS Direct Connect transit VIF that is configured for an AWS Direct Connect\ngateway. The company also has a staging VPC (VPC-B) that is attached to another transit gateway (TGW-B) in the eu-west-2 Region in Account 2.\nA network engineer must implement connectivity between VPC-B and the on-premises data center in Dublin.\nWhich solutions will meet these requirements? (Choose two.)",
        "options": [
            "A. Configure inter-Region VPC peering between VPC-A and VPC-B. Add the required VPC peering routes. Add the VPC-B CIDR block in the\nallowed prefixes on the Direct Connect gateway association.",
            "B. Associate TGW-B with the Direct Connect gateway. Advertise the VPC-B CIDR block under the allowed prefixes.",
            "C. Configure another transit VIF on the Direct Connect connection and associate TGW-B. Advertise the VPC-B CIDR block under the allowed\nprefixes.",
            "D. Configure inter-Region transit gateway peering between TGW-A and TGW-B. Add the peering routes in the transit gateway route tables. Add\nboth the VPC-A and the VPC-B CIDR block under the allowed prefix list in the Direct Connect gateway association.",
            "E. Configure an AWS Site-to-Site VPN connection over the transit VIF to TGW-B as a VPN attachment."
        ],
        "answers": [
            "B",
            "D"
        ],
        "isMulti": true,
        "explanation": "정답: B, D\n\n핵심: 다른 리전의 VPC를 기존 Direct Connect 게이트웨이를 통해 온프레미스에 연결해야 합니다.\n\nB, D가 맞는 이유:\nB) TGW-B를 기존 Direct Connect 게이트웨이와 연결하면 eu-west-2의 VPC가 온프레미스에 접근 가능합니다.\nD) TGW-A와 TGW-B를 리전 간 피어링하면 두 리전의 VPC가 서로 통신할 수 있습니다. 허용된 접두사에 양쪽 CIDR을 추가합니다.\n\n오답 분석:\nA) VPC 피어링은 Transit Gateway 기반 아키텍처와 별개이며 Direct Connect 연결을 활용하지 못함\nC) 동일 Direct Connect 연결에 추가 트랜짓 VIF는 불필요 (Direct Connect 게이트웨이에 TGW-B를 연결하면 됨)\nE) VPN은 Direct Connect의 전용 대역폭을 활용하지 못함",
        "question_ko": "회사는 Account 1의 eu-west-1 리전에 프로덕션 VPC(VPC-A)를 보유하고 있습니다. VPC-A는 Dublin, Ireland에 있는 온프레미스 데이터 센터에 연결된 AWS Direct Connect 전용 VIF가 구성된 트랜지트 게이트웨이(TGW-A)에 연결되어 있습니다. 회사는 또한 Account 2의 eu-west-2 리전에 스테이징 VPC(VPC-B)를 가지고 있으며, 이는 다른 트랜지트 게이트웨이(TGW-B)에 연결되어 있습니다. 네트워크 엔지니어는 VPC-B와 Dublin의 온프레미스 데이터 센터 간 연결성을 구현해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. VPC-A와 VPC-B 간 리전 간 VPC 피어링을 구성합니다. 필요한 VPC 피어링 경로를 추가합니다. Direct Connect 게이트웨이 연결에 VPC-B CIDR 블록을 허용된 접두사로 추가합니다.",
            "B. TGW-B를 Direct Connect 게이트웨이와 연결합니다. 허용된 접두사에 VPC-B CIDR 블록을 광고합니다.",
            "C. Direct Connect 연결에 다른 트랜지트 VIF를 구성하고 TGW-B와 연결합니다. 허용된 접두사에 VPC-B CIDR 블록을 광고합니다.",
            "D. TGW-A와 TGW-B 간 리전 간 트랜지트 게이트웨이 피어링을 구성합니다. 트랜지트 게이트웨이 라우팅 테이블에 피어링 경로를 추가합니다. Direct Connect 게이트웨이 연결의 허용된 접두사 목록에 VPC-A와 VPC-B CIDR 블록을 모두 추가합니다.",
            "E. TGW-B에 VPN 연결로서 AWS Site-to-Site VPN 연결을 구성합니다."
        ],
        "explanation_ko": "정답: B, D\n\n핵심: 다른 리전의 VPC를 기존 Direct Connect 게이트웨이를 통해 온프레미스에 연결해야 합니다.\n\nB, D가 맞는 이유:\nB) TGW-B를 기존 Direct Connect 게이트웨이와 연결하면 eu-west-2의 VPC가 온프레미스에 접근 가능합니다.\nD) TGW-A와 TGW-B를 리전 간 피어링하면 두 리전의 VPC가 서로 통신할 수 있습니다. 허용된 접두사에 양쪽 CIDR을 추가합니다.\n\n오답 분석:\nA) VPC 피어링은 Transit Gateway 기반 아키텍처와 별개이며 Direct Connect 연결을 활용하지 못함\nC) 동일 Direct Connect 연결에 추가 트랜짓 VIF는 불필요 (Direct Connect 게이트웨이에 TGW-B를 연결하면 됨)\nE) VPN은 Direct Connect의 전용 대역폭을 활용하지 못함"
    },
    {
        "num": 63,
        "question": "A company’s network engineer is designing a hybrid DNS solution for an AWS Cloud workload. Individual teams want to manage their own DNS\nhostnames for their applications in their development environment. The solution must integrate the application-specific hostnames with the\ncentrally managed DNS hostnames from the on-premises network and must provide bidirectional name resolution. The solution also must\nminimize management overhead.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose three.)",
        "options": [
            "A. Use an Amazon Route 53 Resolver inbound endpoint.",
            "B. Modify the DHCP options set by setting a custom DNS server value.",
            "C. Use an Amazon Route 53 Resolver outbound endpoint.",
            "D. Create DNS proxy servers.",
            "E. Create Amazon Route 53 private hosted zones.",
            "F. Set up a zone transfer between Amazon Route 53 and the on-premises DNS."
        ],
        "answers": [
            "A",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: A, C, E\n\n핵심: 하이브리드 환경에서 양방향 DNS 확인 + 팀별 독립 DNS 관리가 필요합니다.\n\nA, C, E가 맞는 이유:\nA) Route 53 Resolver 인바운드 엔드포인트로 온프레미스에서 AWS DNS 쿼리를 전달받습니다.\nC) Route 53 Resolver 아웃바운드 엔드포인트로 AWS에서 온프레미스 DNS 쿼리를 전달합니다.\nE) 각 팀이 프라이빗 호스팅 영역으로 자체 애플리케이션 DNS를 관리합니다.\n\n오답 분석:\nB) DHCP 옵션 세트 변경은 모든 DNS 쿼리를 사용자 지정 서버로 보내므로 AWS 서비스 DNS 확인이 깨질 수 있음\nD) DNS 프록시 서버는 관리 부담이 크고 Route 53 Resolver로 대체 가능\nF) Route 53은 영역 전송(AXFR)을 지원하지 않음",
        "question_ko": "회사의 네트워크 엔지니어는 AWS 클라우드 워크로드를 위한 하이브리드 DNS 솔루션을 설계하고 있습니다. 개별 팀은 자신의 개발 환경에서 자신의 애플리케이션 전용 호스트 이름을 관리하고 싶어 합니다. 이 솔루션은 온-프레미스 네트워크에서 중앙 관리되는 DNS 호스트 이름과 애플리케이션 특정 호스트 이름을 통합해야 하며 양방향 이름 확인을 제공해야 합니다. 또한 관리 오버헤드를 최소화해야 합니다. 이러한 요구 사항을 충족하기 위해 네트워크 엔지니어가 수행해야 할 단계는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. Amazon Route 53 Resolver 인바운드 엔드포인트를 사용합니다.",
            "B. DHCP 옵션 집합을 수정하여 사용자 지정 DNS 서버 값을 설정합니다.",
            "C. Amazon Route 53 Resolver 아웃바운드 엔드포인트를 사용합니다.",
            "D. DNS 프록시 서버를 생성합니다.",
            "E. Amazon Route 53 프라이빗 호스팅 영역을 생성합니다.",
            "F. Amazon Route 53과 온-프레미스 DNS 간에 영역 전송을 설정합니다."
        ],
        "explanation_ko": "정답: A, C, E\n\n핵심: 하이브리드 환경에서 양방향 DNS 확인 + 팀별 독립 DNS 관리가 필요합니다.\n\nA, C, E가 맞는 이유:\nA) Route 53 Resolver 인바운드 엔드포인트로 온프레미스에서 AWS DNS 쿼리를 전달받습니다.\nC) Route 53 Resolver 아웃바운드 엔드포인트로 AWS에서 온프레미스 DNS 쿼리를 전달합니다.\nE) 각 팀이 프라이빗 호스팅 영역으로 자체 애플리케이션 DNS를 관리합니다.\n\n오답 분석:\nB) DHCP 옵션 세트 변경은 모든 DNS 쿼리를 사용자 지정 서버로 보내므로 AWS 서비스 DNS 확인이 깨질 수 있음\nD) DNS 프록시 서버는 관리 부담이 크고 Route 53 Resolver로 대체 가능\nF) Route 53은 영역 전송(AXFR)을 지원하지 않음"
    },
    {
        "num": 64,
        "question": "A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is the origin in an Amazon\nCloudFront distribution. The company wants to implement a custom authentication system that will provide a token for its authenticated\ncustomers.\nThe web application must ensure that the GET/POST requests come from authenticated customers before it delivers the content. A network\nengineer must design a solution that gives the web application the ability to identify authorized customers.\nWhat is the MOST operationally efficient solution that meets these requirements?",
        "options": [
            "A. Use the ALB to inspect the authorized token inside the GET/POST request payload. Use an AWS Lambda function to insert a customized\nheader to inform the web application of an authenticated customer request.",
            "B. Integrate AWS WAF with the ALB to inspect the authorized token inside the GET/POST request payload. Configure the ALB listener to insert\na customized header to inform the web application of an authenticated customer request.",
            "C. Use an AWS Lambda@Edge function to inspect the authorized token inside the GET/POST request payload. Use the Lambda@Edge function\nalso to insert a customized header to inform the web application of an authenticated customer request.",
            "D. Set up an EC2 instance that has a third-party packet inspection tool to inspect the authorized token inside the GET/POST request payload.\nConfigure the tool to insert a customized header to inform the web application of an authenticated customer request."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: CloudFront 배포에서 사용자 지정 인증 토큰을 검사하고 헤더를 삽입해야 합니다.\n\nC가 맞는 이유:\nLambda@Edge는 CloudFront 엣지에서 요청/응답을 가로채어 처리할 수 있습니다. GET/POST 요청의 토큰을 검사하고, 인증된 요청에 사용자 지정 헤더를 삽입하여 오리진(ALB)으로 전달합니다.\n\n오답 분석:\nA) ALB는 요청 페이로드를 직접 검사하는 기능이 없음\nB) AWS WAF는 토큰 기반 사용자 지정 인증 로직을 구현하기 어려움\nD) 별도 EC2 인스턴스로 패킷 검사는 관리 부담이 크고 확장성이 낮음",
        "question_ko": "회사는 Application Load Balancer(ALB)를 통해 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅하고 있습니다. ALB는 Amazon CloudFront 배포의 오리진입니다. 회사는 인증된 고객에게 토큰을 제공하는 사용자 지정 인증 시스템을 구현하려고 합니다. 웹 애플리케이션은 인증된 고객의 GET/POST 요청만 수락하고 콘텐츠를 제공해야 합니다. 네트워크 엔지니어는 웹 애플리케이션이 승인된 고객을 식별할 수 있는 솔루션을 설계해야 합니다. 이 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. ALB를 사용하여 GET/POST 요청 페이로드 내 승인된 토큰을 검사합니다. AWS Lambda 함수를 사용하여 인증된 고객 요청을 알리는 사용자 지정 헤더를 삽입합니다.",
            "B. ALB와 통합된 AWS WAF를 사용하여 GET/POST 요청 페이로드 내 승인된 토큰을 검사합니다. ALB 리스너를 구성하여 인증된 고객 요청을 알리는 사용자 지정 헤더를 삽입합니다.",
            "C. AWS Lambda@Edge 함수를 사용하여 GET/POST 요청 페이로드 내 승인된 토큰을 검사합니다. 또한 Lambda@Edge 함수를 사용하여 인증된 고객 요청을 알리는 사용자 지정 헤더를 삽입합니다.",
            "D. 패킷 검사 도구가 포함된 EC2 인스턴스를 설정합니다. GET/POST 요청 페이로드 내 승인된 토큰을 검사하고 웹 애플리케이션에 인증된 고객 요청을 알리는 사용자 지정 헤더를 삽입하도록 이 도구를 구성합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: CloudFront 배포에서 사용자 지정 인증 토큰을 검사하고 헤더를 삽입해야 합니다.\n\nC가 맞는 이유:\nLambda@Edge는 CloudFront 엣지에서 요청/응답을 가로채어 처리할 수 있습니다. GET/POST 요청의 토큰을 검사하고, 인증된 요청에 사용자 지정 헤더를 삽입하여 오리진(ALB)으로 전달합니다.\n\n오답 분석:\nA) ALB는 요청 페이로드를 직접 검사하는 기능이 없음\nB) AWS WAF는 토큰 기반 사용자 지정 인증 로직을 구현하기 어려움\nD) 별도 EC2 인스턴스로 패킷 검사는 관리 부담이 크고 확장성이 낮음"
    },
    {
        "num": 65,
        "question": "A company has created three VPCs: a production VPC, a nonproduction VPC, and a shared services VPC. The production VPC and the\nnonproduction VPC must each have communication with the shared services VPC. There must be no communication between the production VPC\nand the nonproduction VPC. A transit gateway is deployed to facilitate communication between VPCs.\nWhich route table configurations on the transit gateway will meet these requirements?",
        "options": [
            "A. Configure a route table with the production and nonproduction VPC attachments associated with propagated routes for only the shared\nservices VPC. Create an additional route table with only the shared services VPC attachment associated with propagated routes from the\nproduction and nonproduction VPCs.",
            "B. Configure a route table with the production and nonproduction VPC attachments associated with propagated routes for each VPC. Create\nan additional route table with only the shared services VPC attachment associated with propagated routes from each VPC.",
            "C. Configure a route table with all the VPC attachments associated with propagated routes for only the shared services VPCreate an additional\nroute table with only the shared services VPC attachment associated with propagated routes from the production and nonproduction VPCs.",
            "D. Configure a route table with the production and nonproduction VPC attachments associated with propagated routes disabled. Create an\nadditional route table with only the shared services VPC attachment associated with propagated routes from the production and\nnonproduction VPCs."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: Transit Gateway에서 프로덕션/비프로덕션 VPC는 공유 서비스만 접근 가능하고 서로는 격리해야 합니다.\n\nA가 맞는 이유:\n라우팅 테이블 1: 프로덕션/비프로덕션 VPC 연결을 연결하고 공유 서비스 VPC의 경로만 전파합니다. 이렇게 하면 프로덕션/비프로덕션은 공유 서비스만 접근 가능합니다.\n라우팅 테이블 2: 공유 서비스 VPC 연결을 연결하고 프로덕션/비프로덕션 VPC 경로를 전파합니다.\n\n오답 분석:\nB) 프로덕션/비프로덕션 VPC 연결이 같은 테이블에 있으면서 각 VPC 경로가 전파되면 서로 통신 가능\nC) 모든 VPC 연결이 하나의 테이블에 있으면 격리 불가\nD) 전파가 비활성화되면 경로가 없어 통신 자체가 불가",
        "question_ko": "회사는 프로덕션 VPC, 비프로덕션 VPC 및 공유 서비스 VPC의 세 VPC를 생성했습니다. 프로덕션 VPC와 비프로덕션 VPC는 공유 서비스 VPC와 통신해야 하지만 프로덕션 VPC와 비프로덕션 VPC 간에는 통신이 없어야 합니다. 트랜지트 게이트웨이가 VPC 간 통신을 촉진하기 위해 배포되었습니다. 이러한 요구 사항을 충족하는 트랜지트 게이트웨이의 라우팅 테이블 구성은 무엇입니까?",
        "options_ko": [
            "A. 전파된 경로가 있는 공유 서비스 VPC의 프로덕션 및 비프로덕션 VPC 연결만 포함된 라우팅 테이블을 구성합니다. 공유 서비스 VPC에서 프로덕션 및 비프로덕션 VPC의 전파된 경로가 있는 라우팅 테이블을 추가로 생성합니다.",
            "B. 각 VPC에 대한 전파된 경로가 있는 프로덕션 및 비프로덕션 VPC 연결이 포함된 라우팅 테이블을 구성합니다. 각 VPC에서 전파된 경로가 있는 공유 서비스 VPC 연결만 포함된 추가 라우팅 테이블을 생성합니다.",
            "C. 전파된 경로가 있는 공유 서비스 VPC만 포함된 모든 VPC 연결이 있는 라우팅 테이블을 구성합니다. 공유 서비스 VPC에서 프로덕션 및 비프로덕션 VPC의 전파된 경로가 있는 추가 라우팅 테이블을 생성합니다.",
            "D. 전파된 경로가 비활성화된 프로덕션 및 비프로덕션 VPC 연결이 포함된 라우팅 테이블을 구성합니다. 프로덕션 및 비프로덕션 VPC에서 전파된 경로가 있는 공유 서비스 VPC 연결만 포함된 추가 라우팅 테이블을 생성합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: Transit Gateway에서 프로덕션/비프로덕션 VPC는 공유 서비스만 접근 가능하고 서로는 격리해야 합니다.\n\nA가 맞는 이유:\n라우팅 테이블 1: 프로덕션/비프로덕션 VPC 연결을 연결하고 공유 서비스 VPC의 경로만 전파합니다. 이렇게 하면 프로덕션/비프로덕션은 공유 서비스만 접근 가능합니다.\n라우팅 테이블 2: 공유 서비스 VPC 연결을 연결하고 프로덕션/비프로덕션 VPC 경로를 전파합니다.\n\n오답 분석:\nB) 프로덕션/비프로덕션 VPC 연결이 같은 테이블에 있으면서 각 VPC 경로가 전파되면 서로 통신 가능\nC) 모든 VPC 연결이 하나의 테이블에 있으면 격리 불가\nD) 전파가 비활성화되면 경로가 없어 통신 자체가 불가"
    },
    {
        "num": 66,
        "question": "A company is using an AWS Site-to-Site VPN connection from the company's on-premises data center to a virtual private gateway in the AWS\nCloud Because of congestion, the company is experiencing availability and performance issues as traffic travels across the internet before the\ntraffic reaches AWS. A network engineer must reduce these issues for the connection as quickly as possible with minimum administration effort.\nWhich solution will meet these requirements?",
        "options": [
            "A. Edit the existing Site-to-Site VPN connection by enabling acceleration. Stop and start the VPN service on the customer gateway for the new\nsetting to take effect.",
            "B. Configure a transit gateway in the same AWS Region as the existing virtual private gateway. Create a new accelerated Site-to-Site VPN\nconnection. Connect the new connection to the transit gateway by using a VPN attachment. Update the customer gateway device to use the\nnew Site to Site VPN connection. Delete the existing Site-to-Site VPN connection",
            "C. Create a new accelerated Site-to-Site VPN connection. Connect the new Site-to-Site VPN connection to the existing virtual private gateway.\nUpdate the customer gateway device to use the new Site-to-Site VPN connection. Delete the existing Site-to-Site VPN connection.",
            "D. Create a new AWS Direct Connect connection with a private VIF between the on-premises data center and the AWS Cloud. Update the\ncustomer gateway device to use the new Direct Connect connection. Delete the existing Site-to-Site VPN connection."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 기존 Site-to-Site VPN의 인터넷 경유 성능 문제를 해결해야 합니다.\n\nB가 맞는 이유:\n가속화된 Site-to-Site VPN은 AWS Global Accelerator를 사용하여 가장 가까운 AWS 엣지로 트래픽을 라우팅합니다. 하지만 가속화 VPN은 가상 프라이빗 게이트웨이가 아닌 Transit Gateway에만 연결 가능하므로 새 Transit Gateway를 생성하고 새 가속화 VPN을 만들어야 합니다.\n\n오답 분석:\nA) 기존 VPN 연결에서 가속화를 활성화할 수 없음 (새로 생성해야 함)\nC) 가속화 VPN은 가상 프라이빗 게이트웨이에 연결 불가\nD) Direct Connect는 설치에 수주~수개월이 걸려 신속한 해결이 아님",
        "question_ko": "온-프레미스 데이터 센터에서 AWS 클라우드의 가상 프라이빗 게이트웨이로 AWS Site-to-Site VPN 연결을 사용하는 회사가 있습니다. 혼잡으로 인해 인터넷을 통과하기 전에 트래픽이 도달하는 AWS로 트래픽이 이동하는 동안 가용성과 성능 문제가 발생하고 있습니다. 네트워크 엔지니어는 최소한의 관리 노력으로 이러한 문제를 신속하게 해결해야 합니다. 이 요구 사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 기존 Site-to-Site VPN 연결을 편집하여 가속화를 활성화합니다. 새 설정이 적용되도록 고객 게이트웨이 디바이스에서 VPN 서비스를 중지하고 다시 시작합니다.",
            "B. 기존 가상 프라이빗 게이트웨이와 동일한 AWS 리전에 트랜짓 게이트웨이를 구성합니다. 새로운 가속화된 Site-to-Site VPN 연결을 만듭니다. VPN 연결을 트랜짓 게이트웨이에 연결하는 VPN 연결을 만듭니다. 고객 게이트웨이 디바이스를 새 Site-to-Site VPN 연결을 사용하도록 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다.",
            "C. 새로운 가속화된 Site-to-Site VPN 연결을 만듭니다. 새로운 Site-to-Site VPN 연결을 기존 가상 프라이빗 게이트웨이에 연결합니다. 고객 게이트웨이 디바이스를 새 Site-to-Site VPN 연결을 사용하도록 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다.",
            "D. 온-프레미스 데이터 센터와 AWS 클라우드 간에 프라이빗 VIF가 있는 새로운 AWS Direct Connect 연결을 만듭니다. 고객 게이트웨이 디바이스를 새 Direct Connect 연결을 사용하도록 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: 기존 Site-to-Site VPN의 인터넷 경유 성능 문제를 해결해야 합니다.\n\nB가 맞는 이유:\n가속화된 Site-to-Site VPN은 AWS Global Accelerator를 사용하여 가장 가까운 AWS 엣지로 트래픽을 라우팅합니다. 하지만 가속화 VPN은 가상 프라이빗 게이트웨이가 아닌 Transit Gateway에만 연결 가능하므로 새 Transit Gateway를 생성하고 새 가속화 VPN을 만들어야 합니다.\n\n오답 분석:\nA) 기존 VPN 연결에서 가속화를 활성화할 수 없음 (새로 생성해야 함)\nC) 가속화 VPN은 가상 프라이빗 게이트웨이에 연결 불가\nD) Direct Connect는 설치에 수주~수개월이 걸려 신속한 해결이 아님"
    },
    {
        "num": 67,
        "question": "An Australian ecommerce company hosts all of its services in the AWS Cloud and wants to expand its customer base to the United States (US).\nThe company is targeting the western US for the expansion.\nThe company’s existing AWS architecture consists of four AWS accounts with multiple VPCs deployed in the ap-southeast-2 Region. All VPCs are\nattached to a transit gateway in ap-southeast-2. There are dedicated VPCs for each application service. The company also has VPCs for\ncentralized security features such as proxies, firewalls, and logging.\nThe company plans to duplicate the infrastructure from ap-southeast-2 to the us-west-1 Region. A network engineer must establish connectivity\nbetween the various applications in the two Regions. The solution must maximize bandwidth, minimize latency and minimize operational\noverhead.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create VPN attachments between the two transit gateways. Configure the VPN attachments to use BGP routing between the two transit\ngateways.",
            "B. Peer the transit gateways in each Region. Configure routing between the two transit gateways for each Region's IP addresses.",
            "C. Create a VPN server in a VPC in each Region. Update the routing to point to the VPN servers for the IP addresses in alternate Regions.",
            "D. Attach the VPCs in us-west-1 to the transit gateway in ap-southeast-2."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 호주(ap-southeast-2)와 미국(us-west-1) 리전 간 VPC 연결이 필요합니다.\n\nB가 맞는 이유:\nTransit Gateway 피어링은 리전 간 Transit Gateway를 연결하는 AWS 네이티브 방식입니다. 각 리전의 Transit Gateway를 피어링하고 라우팅을 구성하면 모든 VPC가 리전 간 통신할 수 있습니다.\n\n오답 분석:\nA) Transit Gateway 간 VPN 연결은 지원되지 않음\nC) VPN 서버를 직접 관리하는 것은 복잡하고 비효율적\nD) 다른 리전의 VPC를 직접 Transit Gateway에 연결할 수 없음 (같은 리전만 가능)",
        "question_ko": "호주의 전자 상거래 회사는 모든 서비스를 AWS 클라우드에 호스팅하고 있으며 미국(US) 고객 기반을 확장하려고 합니다. 회사는 확장을 위해 미국 서부를 대상으로 하고 있습니다. 회사의 기존 AWS 아키텍처는 ap-southeast-2 리전에 배포된 여러 VPC가 있는 4개의 AWS 계정으로 구성됩니다. 모든 VPC는 ap-southeast-2의 트랜짓 게이트웨이에 연결되어 있습니다. 각각의 애플리케이션 서비스에 전용 VPC가 있습니다. 회사는 또한 프록시, 방화벽, 로깅과 같은 중앙 집중식 보안 기능을 위한 VPC가 있습니다. 회사는 ap-southeast-2의 인프라를 us-west-1 리전에 복제할 계획입니다. 네트워크 엔지니어는 두 리전의 다양한 애플리케이션 간 연결을 설정해야 합니다. 이 솔루션은 대역폭을 최대화하고, 지연 시간을 최소화하며, 운영 오버헤드를 최소화해야 합니다. 이러한 요구 사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 두 트랜짓 게이트웨이 간 VPN 연결을 만듭니다. VPN 연결에 두 트랜짓 게이트웨이 간 BGP 라우팅을 구성합니다.",
            "B. 각 리전의 트랜짓 게이트웨이를 피어링합니다. 각 리전의 IP 주소에 대한 라우팅을 두 트랜짓 게이트웨이 간에 구성합니다.",
            "C. 각 리전의 VPC에 VPN 서버를 만듭니다. 다른 리전의 IP 주소로 라우팅을 업데이트하여 VPN 서버를 가리키도록 합니다.",
            "D. us-west-1의 VPC를 ap-southeast-2의 트랜짓 게이트웨이에 연결합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: 호주(ap-southeast-2)와 미국(us-west-1) 리전 간 VPC 연결이 필요합니다.\n\nB가 맞는 이유:\nTransit Gateway 피어링은 리전 간 Transit Gateway를 연결하는 AWS 네이티브 방식입니다. 각 리전의 Transit Gateway를 피어링하고 라우팅을 구성하면 모든 VPC가 리전 간 통신할 수 있습니다.\n\n오답 분석:\nA) Transit Gateway 간 VPN 연결은 지원되지 않음\nC) VPN 서버를 직접 관리하는 것은 복잡하고 비효율적\nD) 다른 리전의 VPC를 직접 Transit Gateway에 연결할 수 없음 (같은 리전만 가능)"
    },
    {
        "num": 68,
        "question": "An IoT company sells hardware sensor modules that periodically send out temperature, humidity, pressure, and location data through the MQTT\nmessaging protocol. The hardware sensor modules send this data to the company's on-premises MQTT brokers that run on Linux servers behind a\nload balancer. The hardware sensor modules have been hardcoded with public IP addresses to reach the brokers.\nThe company is growing and is acquiring customers across the world. The existing solution can no longer scale and is introducing additional\nlatency because of the company's global presence. As a result, the company decides to migrate its entire infrastructure from on premises to the\nAWS Cloud. The company needs to migrate without reconfiguring the hardware sensor modules that are already deployed across the world. The\nsolution also must minimize latency.\nThe company migrates the MQTT brokers to run on Amazon EC2 instances.\nWhat should the company do next to meet these requirements?",
        "options": [
            "A. Place the EC2 instances behind a Network Load Balancer (NLB). Configure TCP listeners. Use Bring Your Own IP (BYOIP) from the on-\npremises network with the NLB.",
            "B. Place the EC2 instances behind a Network Load Balancer (NLB). Configure TCP listeners. Create an AWS Global Accelerator accelerator in\nfront of the NLUse Bring Your Own IP (BYOIP) from the on-premises network with Global Accelerator.",
            "C. Place the EC2 instances behind an Application Load Balancer (ALB). Configure TCP listeners. Create an AWS Global Accelerator accelerator\nin front of the ALB. Use Bring Your Own IP (BYOIP) from the on-premises network with Global Accelerator",
            "D. Place the EC2 instances behind an Amazon CloudFront distribution. Use Bring Your Own IP (BYOIP) from the on-premises network with\nCloudFront."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 하드코딩된 IP를 사용하는 IoT 센서를 AWS로 마이그레이션하면서 기존 IP를 유지해야 합니다.\n\nB가 맞는 이유:\nNLB + TCP 리스너로 MQTT 트래픽을 처리하고, AWS Global Accelerator를 앞에 배치합니다. BYOIP로 온프레미스에서 사용하던 IP를 Global Accelerator에 할당하면 센서 펌웨어 변경 없이 마이그레이션 가능합니다.\n\n오답 분석:\nA) NLB만으로는 BYOIP를 사용할 수 없음. Global Accelerator가 필요\nC) ALB는 TCP 리스너를 지원하지 않음 (HTTP/HTTPS만)\nD) CloudFront는 TCP/MQTT를 지원하지 않음",
        "question_ko": "IoT 회사는 온-프레미스 MQTT 브로커로 온도, 습도, 압력 및 위치 데이터를 정기적으로 보내는 하드웨어 센서 모듈을 판매하고 있습니다. 하드웨어 센서 모듈은 Linux 서버 뒤의 로드 밸런서에서 실행되는 온-프레미스 MQTT 브로커에 연결되도록 하드 코딩되어 있습니다. 회사는 세계 각지로 고객을 확보하고 있습니다. 기존 솔루션은 더 이상 확장할 수 없으며 회사의 글로벌 운영으로 인해 추가 지연이 발생하고 있습니다. 따라서 회사는 온-프레미스 인프라를 전체적으로 AWS 클라우드로 마이그레이션하기로 결정했습니다. 전 세계에 배포된 하드웨어 센서 모듈을 재구성하지 않고 마이그레이션을 수행해야 하며 지연 시간을 최소화해야 합니다. 회사는 MQTT 브로커를 Amazon EC2 인스턴스에서 실행하도록 마이그레이션했습니다. 이러한 요구 사항을 충족시키기 위해 회사는 다음에 무엇을 해야 합니까?",
        "options_ko": [
            "A. Network Load Balancer(NLB) 뒤에 EC2 인스턴스를 배치합니다. TCP 리스너를 구성합니다. BYOIP(Bring Your Own IP)를 사용하여 온-프레미스 네트워크의 NLB와 연결합니다.",
            "B. Network Load Balancer(NLB) 뒤에 EC2 인스턴스를 배치합니다. TCP 리스너를 구성합니다. AWS Global Accelerator 가속기를 NLB 앞에 만듭니다. BYOIP(Bring Your Own IP)를 사용하여 온-프레미스 네트워크의 Global Accelerator와 연결합니다.",
            "C. Application Load Balancer(ALB) 뒤에 EC2 인스턴스를 배치합니다. TCP 리스너를 구성합니다. AWS Global Accelerator 가속기를 ALB 앞에 만듭니다. BYOIP(Bring Your Own IP)를 사용하여 온-프레미스 네트워크의 Global Accelerator와 연결합니다.",
            "D. Amazon CloudFront 배포 뒤에 EC2 인스턴스를 배치합니다. BYOIP(Bring Your Own IP)를 사용하여 온-프레미스 네트워크의 CloudFront와 연결합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: 하드코딩된 IP를 사용하는 IoT 센서를 AWS로 마이그레이션하면서 기존 IP를 유지해야 합니다.\n\nB가 맞는 이유:\nNLB + TCP 리스너로 MQTT 트래픽을 처리하고, AWS Global Accelerator를 앞에 배치합니다. BYOIP로 온프레미스에서 사용하던 IP를 Global Accelerator에 할당하면 센서 펌웨어 변경 없이 마이그레이션 가능합니다.\n\n오답 분석:\nA) NLB만으로는 BYOIP를 사용할 수 없음. Global Accelerator가 필요\nC) ALB는 TCP 리스너를 지원하지 않음 (HTTP/HTTPS만)\nD) CloudFront는 TCP/MQTT를 지원하지 않음"
    },
    {
        "num": 69,
        "question": "A company has deployed a web application on AWS. The web application uses an Application Load Balancer (ALB) across multiple Availability\nZones. The targets of the ALB are AWS Lambda functions. The web application also uses Amazon CloudWatch metrics for monitoring.\nUsers report that parts of the web application are not loading properly. A network engineer needs to troubleshoot the problem. The network\nengineer enables access logging for the ALB.\nWhat should the network engineer do next to determine which errors the ALB is receiving?",
        "options": [
            "A. Send the logs to Amazon CloudWatch Logs. Review the ALB logs in CloudWatch Insights to determine which error messages the ALB is\nreceiving.",
            "B. Configure the Amazon S3 bucket destination. Use Amazon Athena to determine which error messages the ALB is receiving.",
            "C. Configure the Amazon S3 bucket destination. After Amazon CloudWatch Logs pulls the ALB logs from the S3 bucket automatically, review\nthe logs in CloudWatch Logs to determine which error messages the ALB is receiving.",
            "D. Send the logs to Amazon CloudWatch Logs. Use the Amazon Athena CloudWatch Connector to determine which error messages the ALB is\nreceiving."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: ALB 액세스 로그를 분석하여 오류 원인을 파악해야 합니다.\n\nB가 맞는 이유:\nALB 액세스 로그를 S3 버킷에 저장하고 Amazon Athena로 SQL 쿼리하면 오류 코드, 대상 응답 시간, Lambda 함수 오류 등을 효율적으로 분석할 수 있습니다.\n\n오답 분석:\nA) ALB 액세스 로그는 CloudWatch Logs로 직접 전송할 수 없음 (S3만 지원)\nC) CloudWatch Logs가 S3에서 자동으로 ALB 로그를 가져오는 기능은 없음\nD) ALB 로그는 CloudWatch Logs로 직접 전송 불가",
        "question_ko": "회사가 AWS에 웹 애플리케이션을 배포했습니다. 웹 애플리케이션은 여러 가용 영역에 걸쳐 Application Load Balancer(ALB)를 사용합니다. ALB의 대상은 AWS Lambda 함수입니다. 웹 애플리케이션에는 또한 모니터링을 위한 Amazon CloudWatch 지표가 사용됩니다. 사용자들이 웹 애플리케이션의 일부가 제대로 로드되지 않는다고 보고했습니다. 네트워크 엔지니어는 문제를 진단해야 합니다. 네트워크 엔지니어는 ALB에 대한 액세스 로깅을 활성화했습니다. ALB가 수신하는 오류를 파악하기 위해 네트워크 엔지니어가 다음에 해야 할 작업은 무엇입니까?",
        "options_ko": [
            "A. 로그를 Amazon CloudWatch Logs로 전송합니다. CloudWatch Insights에서 ALB 로그를 검토하여 ALB가 수신하는 오류 메시지를 확인합니다.",
            "B. Amazon S3 버킷 대상을 구성합니다. Amazon Athena를 사용하여 ALB가 수신하는 오류 메시지를 확인합니다.",
            "C. Amazon S3 버킷 대상을 구성합니다. Amazon CloudWatch Logs가 자동으로 S3 버킷에서 ALB 로그를 가져온 후 CloudWatch Logs에서 로그를 검토하여 ALB가 수신하는 오류 메시지를 확인합니다.",
            "D. 로그를 Amazon CloudWatch Logs로 전송합니다. Amazon Athena CloudWatch Connector를 사용하여 ALB가 수신하는 오류 메시지를 확인합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: ALB 액세스 로그를 분석하여 오류 원인을 파악해야 합니다.\n\nB가 맞는 이유:\nALB 액세스 로그를 S3 버킷에 저장하고 Amazon Athena로 SQL 쿼리하면 오류 코드, 대상 응답 시간, Lambda 함수 오류 등을 효율적으로 분석할 수 있습니다.\n\n오답 분석:\nA) ALB 액세스 로그는 CloudWatch Logs로 직접 전송할 수 없음 (S3만 지원)\nC) CloudWatch Logs가 S3에서 자동으로 ALB 로그를 가져오는 기능은 없음\nD) ALB 로그는 CloudWatch Logs로 직접 전송 불가"
    },
    {
        "num": 70,
        "question": "A company is planning to use Amazon S3 to archive financial data. The data is currently stored in an on-premises data center. The company uses\nAWS Direct Connect with a Direct Connect gateway and a transit gateway to connect to the on-premises data center. The data cannot be\ntransported over the public internet and must be encrypted in transit.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a Direct Connect public VIF. Set up an IPsec VPN connection over the public VIF to access Amazon S3. Use HTTPS for\ncommunication.",
            "B. Create an IPsec VPN connection over the transit VIF. Create a VPC and attach the VPC to the transit gateway. In the VPC, provision an\ninterface VPC endpoint for Amazon S3. Use HTTPS for communication.",
            "C. Create a VPC and attach the VPC to the transit gateway. In the VPC, provision an interface VPC endpoint for Amazon S3. Use HTTPS for\ncommunication.",
            "D. Create a Direct Connect public VIF. Set up an IPsec VPN connection over the public VIF to the transit gateway. Create an attachment for\nAmazon S3. Use HTTPS for communication."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Direct Connect를 통해 S3에 접근하되 공개 인터넷을 거치지 않고 전송 중 암호화가 필요합니다.\n\nB가 맞는 이유:\n트랜짓 VIF를 통해 IPsec VPN을 설정하면 전송 중 암호화가 보장됩니다. VPC에 S3 인터페이스 엔드포인트를 프로비저닝하면 프라이빗 네트워크를 통해 S3에 접근합니다. HTTPS로 통신하면 이중 암호화가 됩니다.\n\n오답 분석:\nA) 퍼블릭 VIF는 공개 인터넷 경로를 사용할 수 있음\nC) VPN 없이 트랜짓 VIF만으로는 전송 중 암호화가 보장되지 않음\nD) 퍼블릭 VIF + VPN은 Transit Gateway에 연결하는 방식이 아님",
        "question_ko": "회사는 재무 데이터를 아카이브하기 위해 Amazon S3를 사용하려고 합니다. 데이터는 현재 온-프레미스 데이터 센터에 저장되어 있습니다. 회사는 AWS Direct Connect와 Direct Connect 게이트웨이 및 트랜짓 게이트웨이를 사용하여 온-프레미스 데이터 센터에 연결합니다. 데이터는 공개 인터넷을 통과할 수 없으며 전송 중 암호화되어야 합니다. 이러한 요구 사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 퍼블릭 Direct Connect VIF를 만듭니다. 퍼블릭 VIF를 통해 IPsec VPN 연결을 설정하여 Amazon S3에 액세스합니다. HTTPS를 사용하여 통신합니다.",
            "B. 트랜짓 VIF를 통해 IPsec VPN 연결을 설정합니다. VPC를 만들고 VPC를 트랜짓 게이트웨이에 연결합니다. VPC에서 Amazon S3용 인터페이스 VPC 엔드포인트를 프로비저닝합니다. HTTPS를 사용하여 통신합니다.",
            "C. VPC를 만들고 VPC를 트랜짓 게이트웨이에 연결합니다. VPC에서 Amazon S3용 인터페이스 VPC 엔드포인트를 프로비저닝합니다. HTTPS를 사용하여 통신합니다.",
            "D. 퍼블릭 Direct Connect VIF를 만듭니다. 퍼블릭 VIF를 통해 트랜짓 게이트웨이에 IPsec VPN 연결을 설정합니다. Amazon S3에 대한 연결을 만듭니다. HTTPS를 사용하여 통신합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Direct Connect를 통해 S3에 접근하되 공개 인터넷을 거치지 않고 전송 중 암호화가 필요합니다.\n\nB가 맞는 이유:\n트랜짓 VIF를 통해 IPsec VPN을 설정하면 전송 중 암호화가 보장됩니다. VPC에 S3 인터페이스 엔드포인트를 프로비저닝하면 프라이빗 네트워크를 통해 S3에 접근합니다. HTTPS로 통신하면 이중 암호화가 됩니다.\n\n오답 분석:\nA) 퍼블릭 VIF는 공개 인터넷 경로를 사용할 수 있음\nC) VPN 없이 트랜짓 VIF만으로는 전송 중 암호화가 보장되지 않음\nD) 퍼블릭 VIF + VPN은 Transit Gateway에 연결하는 방식이 아님"
    },
    {
        "num": 71,
        "question": "A company is using Amazon Route 53 Resolver DNS Firewall in a VPC to block all domains except domains that are on an approved list. The\ncompany is concerned that if DNS Firewall is unresponsive, resources in the VPC might be affected if the network cannot resolve any DNS queries.\nTo maintain application service level agreements, the company needs DNS queries to continue to resolve even if Route 53 Resolver does not\nreceive a response from DNS Firewall.\nWhich change should a network engineer implement to meet these requirements?",
        "options": [
            "A. Update the DNS Firewall VPC configuration to disable fail open for the VPC.",
            "B. Update the DNS Firewall VPC configuration to enable fail open for the VPC.",
            "C. Create a new DHCP options set with parameter dns_firewall_fail_open=false. Associate the new DHCP options set with the VPC.",
            "D. Create a new DHCP options set with parameter dns_firewall_fail_open=true. Associate the new DHCP options set with the VPC."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: DNS Firewall이 응답하지 않을 때 애플리케이션 가용성을 유지해야 합니다.\n\nB가 맞는 이유:\n실패-개방(fail-open)을 활성화하면 DNS Firewall이 응답하지 않을 때 DNS 쿼리가 차단되지 않고 통과됩니다. 이렇게 하면 DNS Firewall 장애 시에도 애플리케이션 서비스 수준 계약을 유지할 수 있습니다.\n\n오답 분석:\nA) 실패-개방을 비활성화하면 DNS Firewall 장애 시 모든 DNS 쿼리가 차단됨\nC) DHCP 옵션 세트에 dns_firewall_fail_open 매개변수는 없음\nD) C와 동일하게 DHCP 옵션 세트에 해당 매개변수가 없음",
        "question_ko": "회사는 VPC에서 Amazon Route 53 Resolver DNS Firewall을 사용하여 승인된 목록의 도메인을 제외한 모든 도메인을 차단하고 있습니다. 회사는 DNS Firewall이 응답하지 않을 경우 VPC 내의 리소스가 영향을 받을 수 있으므로 우려하고 있습니다. 애플리케이션 서비스 수준 계약을 유지하기 위해서는 Route 53 Resolver에서 응답을 받지 못하더라도 DNS 쿼리가 계속 해결되어야 합니다.",
        "options_ko": [
            "A. DNS Firewall VPC 구성을 업데이트하여 VPC에 대한 실패-개방을 비활성화합니다.",
            "B. DNS Firewall VPC 구성을 업데이트하여 VPC에 대한 실패-개방을 활성화합니다.",
            "C. dns_firewall_fail_open=false 매개변수로 새로운 DHCP 옵션 세트를 만들고 VPC와 연결합니다.",
            "D. dns_firewall_fail_open=true 매개변수로 새로운 DHCP 옵션 세트를 만들고 VPC와 연결합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: DNS Firewall이 응답하지 않을 때 애플리케이션 가용성을 유지해야 합니다.\n\nB가 맞는 이유:\n실패-개방(fail-open)을 활성화하면 DNS Firewall이 응답하지 않을 때 DNS 쿼리가 차단되지 않고 통과됩니다. 이렇게 하면 DNS Firewall 장애 시에도 애플리케이션 서비스 수준 계약을 유지할 수 있습니다.\n\n오답 분석:\nA) 실패-개방을 비활성화하면 DNS Firewall 장애 시 모든 DNS 쿼리가 차단됨\nC) DHCP 옵션 세트에 dns_firewall_fail_open 매개변수는 없음\nD) C와 동일하게 DHCP 옵션 세트에 해당 매개변수가 없음"
    },
    {
        "num": 72,
        "question": "A company is migrating an existing application to a new AWS account. The company will deploy the application in a single AWS Region by using\none VPC and multiple Availability Zones. The application will run on Amazon EC2 instances. Each Availability Zone will have several EC2\ninstances. The EC2 instances will be deployed in private subnets.\nThe company's clients will connect to the application by using a web browser with the HTTPS protocol. Inbound connections must be distributed\nacross the Availability Zones and EC2 instances. All connections from the same client session must be connected to the same EC2 instance. The\ncompany must provide end-to-end encryption for all connections between the clients and the application by using the application SSL certificate.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a Network Load Balancer. Create a target group. Set the protocol to TCP and the port to 443 for the target group. Turn on session\naffinity (sticky sessions). Register the EC2 instances as targets. Create a listener. Set the protocol to TCP and the port to 443 for the listener.\nDeploy SSL certificates to the EC2 instances.",
            "B. Create an Application Load Balancer. Create a target group. Set the protocol to HTTP and the port to 80 for the target group. Turn on\nsession affinity (sticky sessions) with an application-based cookie policy. Register the EC2 instances as targets. Create an HTTPS listener. Set\nthe default action to forward to the target group. Use AWS Certificate Manager (ACM) to create a certificate for the listener.",
            "C. Create a Network Load Balancer. Create a target group. Set the protocol to TLS and the port to 443 for the target group. Turn on session\naffinity (sticky sessions). Register the EC2 instances as targets. Create a listener. Set the protocol to TLS and the port to 443 for the listener.\nUse AWS Certificate Manager (ACM) to create a certificate for the application.",
            "D. Create an Application Load Balancer. Create a target group. Set the protocol to HTTPS and the port to 443 for the target group. Turn on\nsession affinity (sticky sessions) with an application-based cookie policy. Register the EC2 instances as targets. Create an HTTP listener. Set\nthe port to 443 for the listener. Set the default action to forward to the target group."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 종단 간 암호화 + 세션 유지(sticky session) + 프라이빗 서브넷 배포가 필요합니다.\n\nA가 맞는 이유:\nNLB TCP 리스너(포트 443)는 TLS를 종료하지 않고 패스스루합니다. 세션 선호도(sticky session)를 활성화하면 같은 클라이언트가 동일 인스턴스로 라우팅됩니다. 종단 간 암호화가 유지됩니다.\n\n오답 분석:\nB) ALB HTTP 포트 80은 암호화되지 않은 연결\nC) NLB TLS 리스너는 NLB에서 TLS를 종료하므로 종단 간 암호화가 깨짐\nD) ALB HTTPS는 ALB에서 TLS를 종료하므로 종단 간 암호화가 깨짐",
        "question_ko": "회사는 기존 애플리케이션을 새로운 AWS 계정으로 마이그레이션하려고 합니다. 회사는 하나의 VPC와 여러 가용 영역을 사용하여 단일 AWS 리전에 애플리케이션을 배포할 것입니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 각 가용 영역에는 여러 EC2 인스턴스가 있습니다. EC2 인스턴스는 프라이빗 서브넷에 배포됩니다. 고객은 웹 브라우저를 사용하여 HTTPS 프로토콜로 애플리케이션에 연결합니다. 수신 연결은 가용 영역과 EC2 인스턴스에 분산되어야 합니다. 동일한 클라이언트 세션의 모든 연결은 동일한 EC2 인스턴스에 연결되어야 합니다. 회사는 클라이언트와 애플리케이션 간의 모든 연결에 대해 애플리케이션 SSL 인증서를 사용하여 엔드-투-엔드 암호화를 제공해야 합니다.",
        "options_ko": [
            "A. Network Load Balancer를 만듭니다. 대상 그룹을 만들고 프로토콜을 TCP, 포트를 443으로 설정합니다. 세션 선호도(sticky session)를 활성화합니다. EC2 인스턴스를 대상으로 등록합니다. 리스너를 만들고 프로토콜을 TCP, 포트를 443으로 설정합니다. EC2 인스턴스에 SSL 인증서를 배포합니다.",
            "B. Application Load Balancer를 만듭니다. 대상 그룹을 만들고 프로토콜을 HTTP, 포트를 80으로 설정합니다. 애플리케이션 기반 쿠키 정책을 사용하여 세션 선호도(sticky session)를 활성화합니다. EC2 인스턴스를 대상으로 등록합니다. HTTPS 리스너를 만들고 기본 작업을 대상 그룹으로 전달하도록 설정합니다. AWS Certificate Manager(ACM)를 사용하여 리스너에 대한 인증서를 생성합니다.",
            "C. Network Load Balancer를 만듭니다. 대상 그룹을 만들고 프로토콜을 TLS, 포트를 443으로 설정합니다. 세션 선호도(sticky session)를 활성화합니다. EC2 인스턴스를 대상으로 등록합니다. 리스너를 만들고 프로토콜을 TLS, 포트를 443으로 설정합니다. AWS Certificate Manager(ACM)를 사용하여 애플리케이션에 대한 인증서를 생성합니다.",
            "D. Application Load Balancer를 만듭니다. 대상 그룹을 만들고 프로토콜을 HTTPS, 포트를 443으로 설정합니다. 애플리케이션 기반 쿠키 정책을 사용하여 세션 선호도(sticky session)를 활성화합니다. EC2 인스턴스를 대상으로 등록합니다. HTTP 리스너를 만들고 포트를 443으로 설정합니다. 기본 작업을 대상 그룹으로 전달하도록 설정합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 종단 간 암호화 + 세션 유지(sticky session) + 프라이빗 서브넷 배포가 필요합니다.\n\nA가 맞는 이유:\nNLB TCP 리스너(포트 443)는 TLS를 종료하지 않고 패스스루합니다. 세션 선호도(sticky session)를 활성화하면 같은 클라이언트가 동일 인스턴스로 라우팅됩니다. 종단 간 암호화가 유지됩니다.\n\n오답 분석:\nB) ALB HTTP 포트 80은 암호화되지 않은 연결\nC) NLB TLS 리스너는 NLB에서 TLS를 종료하므로 종단 간 암호화가 깨짐\nD) ALB HTTPS는 ALB에서 TLS를 종료하므로 종단 간 암호화가 깨짐"
    },
    {
        "num": 73,
        "question": "A company is developing an application in which IoT devices will report measurements to the AWS Cloud. The application will have millions of end\nusers. The company observes that the IoT devices cannot support DNS resolution. The company needs to implement an Amazon EC2 Auto Scaling\nsolution so that the IoT devices can connect to an application endpoint without using DNS.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Use an Application Load Balancer (ALB)-type target group for a Network Load Balancer (NLB). Create an EC2 Auto Scaling group. Attach\nthe Auto Scaling group to the ALB. Set up the IoT devices to connect to the IP addresses of the NLB.",
            "B. Use an AWS Global Accelerator accelerator with an Application Load Balancer (ALB) endpoint. Create an EC2 Auto Scaling group. Attach\nthe Auto Scaling group to the ALSet up the IoT devices to connect to the IP addresses of the accelerator.",
            "C. Use a Network Load Balancer (NLB). Create an EC2 Auto Scaling group. Attach the Auto Scaling group to the NLB. Set up the IoT devices to\nconnect to the IP addresses of the NLB.",
            "D. Use an AWS Global Accelerator accelerator with a Network Load Balancer (NLB) endpoint. Create an EC2 Auto Scaling group. Attach the\nAuto Scaling group to the NLB. Set up the IoT devices to connect to the IP addresses of the accelerator."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: DNS를 지원하지 않는 IoT 디바이스가 IP 주소로 직접 연결해야 합니다.\n\nC가 맞는 이유:\nNLB는 고정 IP 주소(AZ당 하나)를 제공합니다. IoT 디바이스가 NLB의 고정 IP로 직접 연결하면 DNS 확인 없이 접근 가능합니다. Auto Scaling 그룹이 NLB 뒤에서 확장/축소됩니다.\n\n오답 분석:\nA) NLB에 ALB를 대상으로 하는 것은 불필요한 복잡성\nB) Global Accelerator + ALB는 가능하지만 ALB는 고정 IP가 아닌 DNS 기반\nD) Global Accelerator + NLB는 가능하지만 NLB만으로 충분하므로 불필요한 비용",
        "question_ko": "회사는 IoT 디바이스가 AWS 클라우드에 측정값을 보고하는 애플리케이션을 개발하고 있습니다. 애플리케이션에는 수백만 명의 최종 사용자가 있습니다. 회사는 IoT 디바이스가 DNS 확인을 지원할 수 없다는 것을 관찰했습니다. 회사는 IoT 디바이스가 DNS를 사용하지 않고 애플리케이션 엔드포인트에 연결할 수 있도록 Amazon EC2 Auto Scaling 솔루션을 구현해야 합니다.",
        "options_ko": [
            "A. Application Load Balancer(ALB) 유형 대상 그룹을 사용하여 Network Load Balancer(NLB)를 만들고, EC2 Auto Scaling 그룹을 만든 다음 Auto Scaling 그룹을 ALB에 연결하고, IoT 디바이스가 NLB의 IP 주소에 연결하도록 설정합니다.",
            "B. AWS Global Accelerator 가속기를 만들고 Application Load Balancer(ALB) 엔드포인트를 사용하며, EC2 Auto Scaling 그룹을 만든 다음 Auto Scaling 그룹을 ALB에 연결하고, IoT 디바이스가 가속기의 IP 주소에 연결하도록 설정합니다.",
            "C. Network Load Balancer(NLB)를 만들고, EC2 Auto Scaling 그룹을 만든 다음 Auto Scaling 그룹을 NLB에 연결하고, IoT 디바이스가 NLB의 IP 주소에 연결하도록 설정합니다.",
            "D. AWS Global Accelerator 가속기를 만들고 Network Load Balancer(NLB) 엔드포인트를 사용하며, EC2 Auto Scaling 그룹을 만든 다음 Auto Scaling 그룹을 NLB에 연결하고, IoT 디바이스가 가속기의 IP 주소에 연결하도록 설정합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: DNS를 지원하지 않는 IoT 디바이스가 IP 주소로 직접 연결해야 합니다.\n\nC가 맞는 이유:\nNLB는 고정 IP 주소(AZ당 하나)를 제공합니다. IoT 디바이스가 NLB의 고정 IP로 직접 연결하면 DNS 확인 없이 접근 가능합니다. Auto Scaling 그룹이 NLB 뒤에서 확장/축소됩니다.\n\n오답 분석:\nA) NLB에 ALB를 대상으로 하는 것은 불필요한 복잡성\nB) Global Accelerator + ALB는 가능하지만 ALB는 고정 IP가 아닌 DNS 기반\nD) Global Accelerator + NLB는 가능하지만 NLB만으로 충분하므로 불필요한 비용"
    },
    {
        "num": 74,
        "question": "A company has deployed a new web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an\nAmazon EC2 Auto Scaling group. Enterprise customers from around the world will use the application. Employees of these enterprise customers\nwill connect to the application over HTTPS from office locations.\nThe company must configure firewalls to allow outbound traffic to only approved IP addresses. The employees of the enterprise customers must\nbe able to access the application with the least amount of latency.\nWhich change should a network engineer make in the infrastructure to meet these requirements?",
        "options": [
            "A. Create a new Network Load Balancer (NLB). Add the ALB as a target of the NLB.",
            "B. Create a new Amazon CloudFront distribution. Set the ALB as the distribution’s origin.",
            "C. Create a new accelerator in AWS Global Accelerator. Add the ALB as an accelerator endpoint.",
            "D. Create a new Amazon Route 53 hosted zone. Create a new record to route traffic to the ALB."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 전 세계 기업 고객이 HTTPS로 접근하는 애플리케이션의 성능을 개선해야 합니다.\n\nC가 맞는 이유:\nAWS Global Accelerator는 AWS 글로벌 네트워크를 활용하여 가장 가까운 엣지에서 트래픽을 수신합니다. 고정 Anycast IP를 제공하고 ALB를 엔드포인트로 설정하면 전 세계에서 일관된 저지연 접근이 가능합니다.\n\n오답 분석:\nA) NLB를 ALB 앞에 추가하는 것은 글로벌 성능 개선과 무관\nB) CloudFront는 정적 콘텐츠 캐싱에 최적화. 동적 애플리케이션에는 Global Accelerator가 적합\nD) Route 53은 DNS 레벨 라우팅이므로 네트워크 경로 최적화를 제공하지 않음",
        "question_ko": "회사는 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에 새로운 웹 애플리케이션을 배포했습니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. 전 세계 기업 고객이 이 애플리케이션을 사용할 것입니다. 이 기업 고객의 직원들은 사무실 위치에서 HTTPS로 애플리케이션에 연결할 것입니다. 회사는 승인된 IP 주소로의 아웃바운드 트래픽만 허용하도록 방화벽을 구성해야 합니다. 기업 고객의 직원들은 가능한 한 최소한의 지연 시간으로 애플리케이션에 액세스할 수 있어야 합니다.",
        "options_ko": [
            "A. 새로운 Network Load Balancer(NLB)를 만들고 ALB를 NLB의 대상으로 추가합니다.",
            "B. 새로운 Amazon CloudFront 배포를 만들고 ALB를 배포의 오리진으로 설정합니다.",
            "C. 새로운 AWS Global Accelerator 가속기를 만들고 ALB를 가속기 엔드포인트로 추가합니다.",
            "D. 새로운 Amazon Route 53 호스팅 영역을 만들고 ALB로 트래픽을 라우팅하는 새 레코드를 만듭니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 전 세계 기업 고객이 HTTPS로 접근하는 애플리케이션의 성능을 개선해야 합니다.\n\nC가 맞는 이유:\nAWS Global Accelerator는 AWS 글로벌 네트워크를 활용하여 가장 가까운 엣지에서 트래픽을 수신합니다. 고정 Anycast IP를 제공하고 ALB를 엔드포인트로 설정하면 전 세계에서 일관된 저지연 접근이 가능합니다.\n\n오답 분석:\nA) NLB를 ALB 앞에 추가하는 것은 글로벌 성능 개선과 무관\nB) CloudFront는 정적 콘텐츠 캐싱에 최적화. 동적 애플리케이션에는 Global Accelerator가 적합\nD) Route 53은 DNS 레벨 라우팅이므로 네트워크 경로 최적화를 제공하지 않음"
    },
    {
        "num": 75,
        "question": "A company has hundreds of VPCs on AWS. All the VPCs access the public endpoints of Amazon S3 and AWS Systems Manager through NAT\ngateways. All the traffic from the VPCs to Amazon S3 and Systems Manager travels through the NAT gateways. The company's network engineer\nmust centralize access to these services and must eliminate the need to use public endpoints.\nWhich solution will meet these requirements with the LEAST operational overhead?",
        "options": [
            "A. Create a central egress VPC that has private NAT gateways. Connect all the VPCs to the central egress VPC by using AWS Transit Gateway.\nUse the private NAT gateways to connect to Amazon S3 and Systems Manager by using private IP addresses.",
            "B. Create a central shared services VPC. In the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems\nManager to access. Ensure that private DNS is turned off. Connect all the VPCs to the central shared services VPC by using AWS Transit\nGateway. Create an Amazon Route 53 forwarding rule for each interface VPC endpoint. Associate the forwarding rules with all the VPCs.\nForward DNS queries to the interface VPC endpoints in the shared services VPC.",
            "C. Create a central shared services VPIn the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems\nManager to access. Ensure that private DNS is turned off. Connect all the VPCs to the central shared services VPC by using AWS Transit\nGateway. Create an Amazon Route 53 private hosted zone with a full service endpoint name for Amazon S3 and Systems Manager. Associate\nthe private hosted zones with all the VPCs. Create an alias record in each private hosted zone with the full AWS service endpoint pointing to\nthe interface VPC endpoint in the shared services VPC.",
            "D. Create a central shared services VPC. In the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems\nManager to access. Connect all the VPCs to the central shared services VPC by using AWS Transit Gateway. Ensure that private DNS is turned\non for the interface VPC endpoints and that the transit gateway is created with DNS support turned on."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 수백 개 VPC에서 S3와 Systems Manager에 대한 NAT 게이트웨이 비용을 줄여야 합니다.\n\nC가 맞는 이유:\n중앙 공유 서비스 VPC에 인터페이스 VPC 엔드포인트를 생성하고 프라이빗 DNS를 비활성화합니다. Route 53 프라이빗 호스팅 영역을 생성하여 서비스 DNS를 엔드포인트로 가리키고, Transit Gateway를 통해 모든 VPC에서 중앙 엔드포인트를 공유합니다.\n\n오답 분석:\nA) 프라이빗 NAT 게이트웨이는 S3/Systems Manager 접근 문제를 해결하지 못함\nB) B와 C의 차이는 프라이빗 호스팅 영역 구성 방식. B는 올바른 DNS 구성이 부족\nD) 프라이빗 DNS를 활성화하면 엔드포인트가 있는 VPC에서만 동작하고 다른 VPC에서는 안 됨",
        "question_ko": "회사는 AWS에 수백 개의 VPC를 보유하고 있습니다. 모든 VPC는 NAT 게이트웨이를 통해 Amazon S3 및 AWS Systems Manager의 퍼블릭 엔드포인트에 액세스합니다. VPC에서 Amazon S3 및 Systems Manager로의 모든 트래픽은 NAT 게이트웨이를 통과합니다. 회사의 네트워크 엔지니어는 이러한 서비스에 대한 액세스를 중앙 집중화하고 퍼블릭 엔드포인트 사용의 필요성을 제거해야 합니다.",
        "options_ko": [
            "A. 프라이빗 NAT 게이트웨이가 있는 중앙 이그레스 VPC를 만듭니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 이그레스 VPC에 연결합니다. 프라이빗 IP 주소를 사용하여 프라이빗 NAT 게이트웨이를 통해 Amazon S3 및 Systems Manager에 연결합니다.",
            "B. 중앙 공유 서비스 VPC를 만듭니다. 중앙 공유 서비스 VPC에 Amazon S3 및 Systems Manager에 액세스할 수 있는 인터페이스 VPC 엔드포인트를 만듭니다. 프라이빗 DNS를 비활성화합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. 각 인터페이스 VPC 엔드포인트에 대한 Amazon Route 53 전달 규칙을 만듭니다. 전달 규칙을 모든 VPC와 연결합니다. 인터페이스 VPC 엔드포인트로 DNS 쿼리를 전달합니다.",
            "C. 중앙 공유 서비스 VPC를 만듭니다. 중앙 공유 서비스 VPC에 Amazon S3 및 Systems Manager에 액세스할 수 있는 인터페이스 VPC 엔드포인트를 만듭니다. 프라이빗 DNS를 비활성화합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. Amazon Route 53 프라이빗 호스팅 영역을 만들고 Amazon S3 및 Systems Manager의 전체 서비스 엔드포인트 이름으로 구성합니다. 프라이빗 호스팅 영역을 모든 VPC와 연결합니다. 공유 서비스 VPC의 인터페이스 VPC 엔드포인트를 가리키는 별칭 레코드를 각 프라이빗 호스팅 영역에 만듭니다.",
            "D. 중앙 공유 서비스 VPC를 만듭니다. 중앙 공유 서비스 VPC에 Amazon S3 및 Systems Manager에 액세스할 수 있는 인터페이스 VPC 엔드포인트를 만듭니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. 인터페이스 VPC 엔드포인트에 대한 프라이빗 DNS를 활성화하고 Transit Gateway를 DNS 지원이 활성화된 상태로 만듭니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 수백 개 VPC에서 S3와 Systems Manager에 대한 NAT 게이트웨이 비용을 줄여야 합니다.\n\nC가 맞는 이유:\n중앙 공유 서비스 VPC에 인터페이스 VPC 엔드포인트를 생성하고 프라이빗 DNS를 비활성화합니다. Route 53 프라이빗 호스팅 영역을 생성하여 서비스 DNS를 엔드포인트로 가리키고, Transit Gateway를 통해 모든 VPC에서 중앙 엔드포인트를 공유합니다.\n\n오답 분석:\nA) 프라이빗 NAT 게이트웨이는 S3/Systems Manager 접근 문제를 해결하지 못함\nB) B와 C의 차이는 프라이빗 호스팅 영역 구성 방식. B는 올바른 DNS 구성이 부족\nD) 프라이빗 DNS를 활성화하면 엔드포인트가 있는 VPC에서만 동작하고 다른 VPC에서는 안 됨"
    },
    {
        "num": 76,
        "question": "A company manages resources across VPCs in multiple AWS Regions. The company needs to connect to the resources by using its internal\ndomain name. A network engineer needs to apply the aws.example.com DNS suffix to all resources.\nWhat must the network engineer do to meet this requirement?",
        "options": [
            "A. Create an Amazon Route 53 private hosted zone for aws.example.com in each Region that has resources. Associate the private hosted\nzone with that Region's VPC. In the appropriate private hosted zone, create DNS records for the resources in each Region.",
            "B. Create one Amazon Route 53 private hosted zone for aws.example.com. Configure the private hosted zone to allow zone transfers with\nevery VPC.",
            "C. Create one Amazon Route 53 private hosted zone for example.com. Create a single resource record for aws.example.com in the private\nhosted zone. Apply a multivalue answer routing policy to the record. Add all VPC resources as separate values in the routing policy.",
            "D. Create one Amazon Route 53 private hosted zone for aws.example.com. Associate the private hosted zone with every VPC that has\nresources. In the private hosted zone, create DNS records for all resources."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 여러 리전의 VPC 리소스에 aws.example.com DNS 접미사를 적용해야 합니다.\n\nD가 맞는 이유:\n하나의 Route 53 프라이빗 호스팅 영역(aws.example.com)을 생성하고 모든 리전의 모든 VPC와 연결합니다. 프라이빗 호스팅 영역은 리전에 관계없이 여러 VPC와 연결 가능합니다. 모든 리소스의 DNS 레코드를 이 호스팅 영역에 생성합니다.\n\n오답 분석:\nA) 리전별로 별도 호스팅 영역을 만들면 다른 리전의 리소스를 확인할 수 없음\nB) Route 53은 영역 전송을 지원하지 않음\nC) example.com 호스팅 영역에 단일 다중 값 레코드는 모든 리소스를 개별적으로 확인할 수 없음",
        "question_ko": "회사는 여러 AWS 리전의 VPC에 걸친 리소스를 관리하고 있습니다. 회사는 내부 도메인 이름을 사용하여 리소스에 연결할 필요가 있습니다. 네트워크 엔지니어는 aws.example.com DNS 접미사를 모든 리소스에 적용해야 합니다. 이 요구 사항을 충족하려면 네트워크 엔지니어가 어떤 작업을 수행해야 합니까?",
        "options_ko": [
            "A. 각 리소스가 있는 리전의 Amazon Route 53 프라이빗 호스팅 영역을 aws.example.com으로 생성합니다. 해당 리전의 VPC와 프라이빗 호스팅 영역을 연결합니다. 적절한 프라이빗 호스팅 영역에 각 리전의 리소스에 대한 DNS 레코드를 생성합니다.",
            "B. aws.example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 하나 생성합니다. 프라이빗 호스팅 영역을 모든 VPC와 영역 전송을 허용하도록 구성합니다.",
            "C. example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 하나 생성합니다. 프라이빗 호스팅 영역에 aws.example.com에 대한 단일 리소스 레코드를 생성합니다. 레코드에 다중 값 응답 라우팅 정책을 적용합니다. 모든 VPC 리소스를 라우팅 정책의 별도 값으로 추가합니다.",
            "D. aws.example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 하나 생성합니다. 프라이빗 호스팅 영역을 모든 리소스가 있는 VPC와 연결합니다. 프라이빗 호스팅 영역에 모든 리소스에 대한 DNS 레코드를 생성합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 여러 리전의 VPC 리소스에 aws.example.com DNS 접미사를 적용해야 합니다.\n\nD가 맞는 이유:\n하나의 Route 53 프라이빗 호스팅 영역(aws.example.com)을 생성하고 모든 리전의 모든 VPC와 연결합니다. 프라이빗 호스팅 영역은 리전에 관계없이 여러 VPC와 연결 가능합니다. 모든 리소스의 DNS 레코드를 이 호스팅 영역에 생성합니다.\n\n오답 분석:\nA) 리전별로 별도 호스팅 영역을 만들면 다른 리전의 리소스를 확인할 수 없음\nB) Route 53은 영역 전송을 지원하지 않음\nC) example.com 호스팅 영역에 단일 다중 값 레코드는 모든 리소스를 개별적으로 확인할 수 없음"
    },
    {
        "num": 77,
        "question": "An insurance company is planning the migration of workloads from its on-premises data center to the AWS Cloud. The company requires end-to-\nend domain name resolution. Bi-directional DNS resolution between AWS and the existing on-premises environments must be established. The\nworkloads will be migrated into multiple VPCs. The workloads also have dependencies on each other, and not all the workloads will be migrated at\nthe same time.\nWhich solution meets these requirements?",
        "options": [
            "A. Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver\ninbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-\npremises DNS resolver. Associate the application VPC private hosted zones with the egress VPC, and share the Route 53 Resolver rules with\nthe application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to\nthe Route 53 inbound endpoints.",
            "B. Configure a public hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver\ninbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-\npremises DNS resolver. Associate the application VPC private hosted zones with the egress VPC. and share the Route 53 Resolver rules with\nthe application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to\nthe Route 53 inbound endpoints.",
            "C. Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver\ninbound and outbound endpoints in an egress VPDefine Route 53 Resolver rules to forward requests for the on-premises domains to the on-\npremises DNS resolver. Associate the application VPC private hosted zones with the egress VPand share the Route 53 Resolver rules with the\napplication accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the\nRoute 53 outbound endpoints.",
            "D. Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver\ninbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-\npremises DNS resolver. Associate the Route 53 outbound rules with the application VPCs, and share the private hosted zones with the\napplication accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the\nRoute 53 inbound endpoints."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 하이브리드 환경에서 양방향 DNS 확인 + 다중 VPC 워크로드 마이그레이션이 필요합니다.\n\nA가 맞는 이유:\n각 애플리케이션 VPC에 프라이빗 호스팅 영역을 생성하고, 송신 VPC에 Route 53 Resolver 인바운드/아웃바운드 엔드포인트를 배치합니다. 아웃바운드 규칙으로 온프레미스 도메인을 전달하고, 온프레미스 DNS에서 인바운드 엔드포인트로 AWS 도메인을 전달합니다.\n\n오답 분석:\nB) 퍼블릭 호스팅 영역은 내부 리소스에 부적합\nC) 인바운드 엔드포인트만으로는 AWS에서 온프레미스로의 DNS 전달 불가\nD) 아웃바운드 엔드포인트만으로는 온프레미스에서 AWS로의 DNS 전달 불가",
        "question_ko": "보험 회사는 온프레미스 데이터 센터의 워크로드를 AWS 클라우드로 마이그레이션할 계획입니다. 회사는 엔드 투 엔드 도메인 이름 확인이 필요합니다. AWS와 기존 온프레미스 환경 간의 양방향 DNS 확인을 설정해야 합니다. 워크로드는 여러 VPC로 마이그레이션될 것이며 서로 종속성이 있으며 모든 워크로드가 동시에 마이그레이션되지는 않을 것입니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 애플리케이션 VPC에 대한 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. 송신 VPC에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. 온프레미스 도메인 요청을 온프레미스 DNS 해결기로 전달하는 Route 53 Resolver 규칙을 정의합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 송신 VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 구성하여 클라우드 도메인을 Route 53 인바운드 엔드포인트로 전달합니다.",
            "B. 각 애플리케이션 VPC에 대한 퍼블릭 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. 송신 VPC에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. 온프레미스 도메인 요청을 온프레미스 DNS 해결기로 전달하는 Route 53 Resolver 규칙을 정의합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 송신 VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 구성하여 클라우드 도메인을 Route 53 인바운드 엔드포인트로 전달합니다.",
            "C. 각 애플리케이션 VPC에 대한 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. 송신 VPC에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. 온프레미스 도메인 요청을 온프레미스 DNS 해결기로 전달하는 Route 53 Resolver 규칙을 정의합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 송신 VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 구성하여 클라우드 도메인을 Route 53 아웃바운드 엔드포인트로 전달합니다.",
            "D. 각 애플리케이션 VPC에 대한 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. 송신 VPC에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. 온프레미스 도메인 요청을 온프레미스 DNS 해결기로 전달하는 Route 53 Resolver 규칙을 정의합니다. Route 53 아웃바운드 규칙을 애플리케이션 VPC와 연결하고 AWS Resource Access Manager를 사용하여 프라이빗 호스팅 영역을 애플리케이션 계정과 공유합니다. 온프레미스 DNS 서버를 구성하여 클라우드 도메인을 Route 53 인바운드 엔드포인트로 전달합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 하이브리드 환경에서 양방향 DNS 확인 + 다중 VPC 워크로드 마이그레이션이 필요합니다.\n\nA가 맞는 이유:\n각 애플리케이션 VPC에 프라이빗 호스팅 영역을 생성하고, 송신 VPC에 Route 53 Resolver 인바운드/아웃바운드 엔드포인트를 배치합니다. 아웃바운드 규칙으로 온프레미스 도메인을 전달하고, 온프레미스 DNS에서 인바운드 엔드포인트로 AWS 도메인을 전달합니다.\n\n오답 분석:\nB) 퍼블릭 호스팅 영역은 내부 리소스에 부적합\nC) 인바운드 엔드포인트만으로는 AWS에서 온프레미스로의 DNS 전달 불가\nD) 아웃바운드 엔드포인트만으로는 온프레미스에서 AWS로의 DNS 전달 불가"
    },
    {
        "num": 78,
        "question": "A global company runs business applications in the us-east-1 Region inside a VPC. One of the company's regional offices in London uses a virtual\nprivate gateway for an AWS Site-to-Site VPN connection tom the VPC. The company has configured a transit gateway and has set up peering\nbetween the VPC and other VPCs that various departments in the company use.\nEmployees at the London office are experiencing latency issues when they connect to the business applications.\nWhat should a network engineer do to reduce this latency?",
        "options": [
            "A. Create a new Site-to-Site VPN connection. Set the transit gateway as the target gateway. Enable acceleration on the new Site-to-Site VPN\nconnection. Update the VPN device in the London office with the new connection details.",
            "B. Modify the existing Site-to-Site VPN connection by setting the transit gateway as the target gateway. Enable acceleration on the existing\nSite-to-Site VPN connection.",
            "C. Create a new transit gateway in the eu-west-2 (London) Region. Peer the new transit gateway with the existing transit gateway. Modify the\nexisting Site-to-Site VPN connection by setting the new transit gateway as the target gateway.",
            "D. Create a new AWS Global Accelerator standard accelerator that has an endpoint of the Site-to-Site VPN connection. Update the VPN device\nin the London office with the new connection details."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 런던 사무소에서 us-east-1 VPC로의 VPN 연결 지연을 줄여야 합니다.\n\nA가 맞는 이유:\n새 가속화 Site-to-Site VPN을 생성하고 Transit Gateway를 대상으로 설정합니다. 가속화 VPN은 Global Accelerator를 사용하여 가장 가까운 AWS 엣지로 트래픽을 라우팅하므로 인터넷 구간의 지연이 크게 줄어듭니다.\n\n오답 분석:\nB) 기존 VPN 연결을 수정하여 가속화를 활성화할 수 없음 (새로 생성해야 함)\nC) 기존 VPN을 수정하여 Transit Gateway로 대상을 변경할 수 없음\nD) Global Accelerator는 Site-to-Site VPN 엔드포인트를 직접 지원하지 않음",
        "question_ko": "글로벌 기업이 us-east-1 리전의 VPC에서 비즈니스 애플리케이션을 실행하고 있습니다. 회사의 런던 지역 사무소는 AWS Site-to-Site VPN 연결을 사용하여 VPC에 연결합니다. 회사는 트랜잇 게이트웨이를 구성하고 VPC와 다른 부서에서 사용하는 VPC 간의 피어링을 설정했습니다. 런던 사무소 직원들이 비즈니스 애플리케이션에 연결할 때 지연 문제가 발생하고 있습니다. 이 지연을 줄이기 위해 네트워크 엔지니어가 수행해야 할 작업은 무엇입니까?",
        "options_ko": [
            "A. 새로운 Site-to-Site VPN 연결을 생성합니다. 트랜잇 게이트웨이를 대상 게이트웨이로 설정합니다. 새 Site-to-Site VPN 연결에서 가속을 활성화합니다. 런던 사무소의 VPN 디바이스를 새 연결 세부 정보로 업데이트합니다.",
            "B. 기존 Site-to-Site VPN 연결을 수정하여 트랜잇 게이트웨이를 대상 게이트웨이로 설정합니다. 기존 Site-to-Site VPN 연결에서 가속을 활성화합니다.",
            "C. eu-west-2(런던) 리전에 새 트랜잇 게이트웨이를 생성합니다. 새 트랜잇 게이트웨이를 기존 트랜잇 게이트웨이와 피어링합니다. 기존 Site-to-Site VPN 연결을 수정하여 새 트랜잇 게이트웨이를 대상 게이트웨이로 설정합니다.",
            "D. AWS Global Accelerator 표준 가속기를 생성하고 Site-to-Site VPN 연결의 엔드포인트를 설정합니다. 런던 사무소의 VPN 디바이스를 새 연결 세부 정보로 업데이트합니다."
        ],
        "explanation_ko": "정답: A\n\n핵심: 런던 사무소에서 us-east-1 VPC로의 VPN 연결 지연을 줄여야 합니다.\n\nA가 맞는 이유:\n새 가속화 Site-to-Site VPN을 생성하고 Transit Gateway를 대상으로 설정합니다. 가속화 VPN은 Global Accelerator를 사용하여 가장 가까운 AWS 엣지로 트래픽을 라우팅하므로 인터넷 구간의 지연이 크게 줄어듭니다.\n\n오답 분석:\nB) 기존 VPN 연결을 수정하여 가속화를 활성화할 수 없음 (새로 생성해야 함)\nC) 기존 VPN을 수정하여 Transit Gateway로 대상을 변경할 수 없음\nD) Global Accelerator는 Site-to-Site VPN 엔드포인트를 직접 지원하지 않음"
    },
    {
        "num": 79,
        "question": "A company has a hybrid cloud environment. The company’s data center is connected to the AWS Cloud by an AWS Direct Connect connection. The\nAWS environment includes VPCs that are connected together in a hub-and-spoke model by a transit gateway. The AWS environment has a transit\nVIF with a Direct Connect gateway for on-premises connectivity.\nThe company has a hybrid DNS model. The company has configured Amazon Route 53 Resolver endpoints in the hub VPC to allow bidirectional\nDNS traffic flow. The company is running a backend application in one of the VPCs.\nThe company uses a message-oriented architecture and employs Amazon Simple Queue Service (Amazon SQS) to receive messages from other\napplications over a private network. A network engineer wants to use an interface VPC endpoint for Amazon SQS for this architecture. Client\nservices must be able to access the endpoint service from on premises and from multiple VPCs within the company's AWS infrastructure.\nWhich combination of steps should the network engineer take to ensure that the client applications can resolve DNS for the interface endpoint?\n(Choose three.)",
        "options": [
            "A. Create the interface endpoint for Amazon SQS with the option for private DNS names turned on.",
            "B. Create the interface endpoint for Amazon SQS with the option for private DNS names turned off.",
            "C. Manually create a private hosted zone for sqs.us-east-1.amazonaws.com. Add necessary records that point to the interface endpoint.\nAssociate the private hosted zones with other VPCs.",
            "D. Use the automatically created private hosted zone for sqs.us-east-1.amazonaws.com with previously created necessary records that point\nto the interface endpoint. Associate the private hosted zones with other VPCs.",
            "E. Access the SQS endpoint by using the public DNS name sqs.us-east-1 amazonaws.com in VPCs and on premises.",
            "F. Access the SQS endpoint by using the private DNS name of the interface endpoint .sqs.us-east-1.vpce.amazonaws.com in VPCs and on\npremises."
        ],
        "answers": [
            "B",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: B, C, E\n\n핵심: 하이브리드 환경에서 SQS 인터페이스 엔드포인트를 VPC와 온프레미스 모두에서 사용해야 합니다.\n\nB, C, E가 맞는 이유:\nB) 프라이빗 DNS를 비활성화하여 인터페이스 엔드포인트를 생성합니다 (다른 VPC와 온프레미스에서도 사용하기 위해).\nC) sqs.us-east-1.amazonaws.com에 대한 프라이빗 호스팅 영역을 수동으로 생성하고 엔드포인트를 가리키는 레코드를 추가합니다.\nE) 퍼블릭 DNS 이름으로 접근하면 프라이빗 호스팅 영역이 프라이빗 IP로 확인합니다.\n\n오답 분석:\nA) 프라이빗 DNS를 활성화하면 엔드포인트가 있는 VPC에서만 동작\nD) 자동 생성된 호스팅 영역은 프라이빗 DNS 활성화 시에만 생성됨\nF) 엔드포인트별 프라이빗 DNS 이름은 온프레미스에서 확인이 어려움",
        "question_ko": "회사에는 하이브리드 클라우드 환경이 있습니다. 회사의 데이터 센터는 AWS Direct Connect 연결을 통해 AWS 클라우드에 연결됩니다. AWS 환경에는 트랜잇 게이트웨이를 통해 허브-앤-스포크 모델로 연결된 VPC가 포함됩니다. AWS 환경에는 온프레미스 연결을 위한 Direct Connect 게이트웨이가 포함된 트랜잇 VIF가 있습니다. 회사는 하이브리드 DNS 모델을 사용하고 있으며 Amazon Route 53 Resolver 엔드포인트를 허브 VPC에 구성하여 양방향 DNS 트래픽 흐름을 허용합니다. 회사는 한 VPC에 백엔드 애플리케이션을 실행하고 있습니다. 회사는 메시지 지향 아키텍처를 사용하며 Amazon Simple Queue Service(Amazon SQS)를 사용하여 다른 애플리케이션에서 프라이빗 네트워크를 통해 메시지를 수신합니다. 네트워크 엔지니어는 이 아키텍처에 대한 인터페이스 VPC 엔드포인트를 사용하려고 합니다. 클라이언트 서비스가 온프레미스와 회사의 AWS 인프라 내 여러 VPC에서 엔드포인트 서비스에 액세스할 수 있어야 합니다. 클라이언트 애플리케이션이 인터페이스 엔드포인트의 DNS를 확인할 수 있도록 하려면 네트워크 엔지니어가 수행해야 할 조치는 무엇입니까? (세 가지를 선택하십시오.)",
        "options_ko": [
            "A. 프라이빗 DNS 이름 옵션을 활성화하여 Amazon SQS에 대한 인터페이스 엔드포인트를 생성합니다.",
            "B. 프라이빗 DNS 이름 옵션을 비활성화하여 Amazon SQS에 대한 인터페이스 엔드포인트를 생성합니다.",
            "C. sqs.us-east-1.amazonaws.com에 대한 프라이빗 호스팅 영역을 수동으로 생성합니다. 인터페이스 엔드포인트를 가리키는 필요한 레코드를 추가합니다. 프라이빗 호스팅 영역을 다른 VPC와 연결합니다.",
            "D. sqs.us-east-1.amazonaws.com에 대해 자동으로 생성된 프라이빗 호스팅 영역을 사용하고 이전에 생성된 인터페이스 엔드포인트를 가리키는 필요한 레코드를 추가합니다. 프라이빗 호스팅 영역을 다른 VPC와 연결합니다.",
            "E. VPC와 온프레미스 환경에서 퍼블릭 DNS 이름 sqs.us-east-1.amazonaws.com을 사용하여 SQS 엔드포인트에 액세스합니다.",
            "F. VPC와 온프레미스 환경에서 인터페이스 엔드포인트의 프라이빗 DNS 이름 .sqs.us-east-1.vpce.amazonaws.com을 사용하여 SQS 엔드포인트에 액세스합니다."
        ],
        "explanation_ko": "정답: B, C, E\n\n핵심: 하이브리드 환경에서 SQS 인터페이스 엔드포인트를 VPC와 온프레미스 모두에서 사용해야 합니다.\n\nB, C, E가 맞는 이유:\nB) 프라이빗 DNS를 비활성화하여 인터페이스 엔드포인트를 생성합니다 (다른 VPC와 온프레미스에서도 사용하기 위해).\nC) sqs.us-east-1.amazonaws.com에 대한 프라이빗 호스팅 영역을 수동으로 생성하고 엔드포인트를 가리키는 레코드를 추가합니다.\nE) 퍼블릭 DNS 이름으로 접근하면 프라이빗 호스팅 영역이 프라이빗 IP로 확인합니다.\n\n오답 분석:\nA) 프라이빗 DNS를 활성화하면 엔드포인트가 있는 VPC에서만 동작\nD) 자동 생성된 호스팅 영역은 프라이빗 DNS 활성화 시에만 생성됨\nF) 엔드포인트별 프라이빗 DNS 이름은 온프레미스에서 확인이 어려움"
    },
    {
        "num": 80,
        "question": "A company’s network engineer builds and tests network designs for VPCs in a development account. The company needs to monitor the changes\nthat are made to network resources and must ensure strict compliance with network security policies. The company also needs access to the\nhistorical configurations of network resources.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a custom pattern to monitor the account for changes. Configure the\nrule to invoke an AWS Lambda function to identify noncompliant resources. Update an Amazon DynamoDB table with the changes that are\nidentified.",
            "B. Create custom metrics from Amazon CloudWatch logs. Use the metrics to invoke an AWS Lambda function to identify noncompliant\nresources. Update an Amazon DynamoDB table with the changes that are identified.",
            "C. Record the current state of network resources by using AWS Config. Create rules that reflect the desired configuration settings. Set\nremediation for noncompliant resources.",
            "D. Record the current state of network resources by using AWS Systems Manager Inventory. Use Systems Manager State Manager to enforce\nthe desired configuration settings and to carry out remediation for noncompliant resources."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 네트워크 리소스의 구성 변경을 모니터링하고 과거 구성에 접근해야 합니다.\n\nC가 맞는 이유:\nAWS Config는 리소스의 구성 변경을 자동으로 기록하고 과거 구성 이력을 제공합니다. 규칙을 생성하여 원하는 구성과 비교하고, 비준수 리소스에 대한 자동 remediation을 설정할 수 있습니다.\n\n오답 분석:\nA) EventBridge + Lambda는 가능하지만 과거 구성 이력 접근이 어려움\nB) CloudWatch 지표는 구성 변경 추적용이 아님\nD) Systems Manager Inventory는 소프트웨어 인벤토리용이지 네트워크 리소스 구성 추적용이 아님",
        "question_ko": "회사의 네트워크 엔지니어는 개발 계정에서 VPC 네트워크 설계를 구축하고 테스트합니다. 회사는 네트워크 리소스에 대한 변경 사항을 모니터링하고 네트워크 보안 정책을 엄격하게 준수해야 합니다. 또한 네트워크 리소스의 과거 구성에 대한 액세스가 필요합니다. 이러한 요구 사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 사용자 지정 패턴으로 계정 변경 사항을 모니터링하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. 규칙을 구성하여 준수하지 않는 리소스를 식별하는 AWS Lambda 함수를 호출합니다. 식별된 변경 사항을 Amazon DynamoDB 테이블에 업데이트합니다.",
            "B. Amazon CloudWatch 로그에서 사용자 지정 지표를 생성합니다. 지표를 사용하여 준수하지 않는 리소스를 식별하는 AWS Lambda 함수를 호출합니다. 식별된 변경 사항을 Amazon DynamoDB 테이블에 업데이트합니다.",
            "C. AWS Config를 사용하여 네트워크 리소스의 현재 상태를 기록합니다. 원하는 구성 설정을 반영하는 규칙을 생성합니다. 준수하지 않는 리소스에 대한 remediation을 설정합니다.",
            "D. AWS Systems Manager Inventory를 사용하여 네트워크 리소스의 현재 상태를 기록합니다. Systems Manager State Manager를 사용하여 원하는 구성 설정을 적용하고 준수하지 않는 리소스에 대한 remediation을 수행합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 네트워크 리소스의 구성 변경을 모니터링하고 과거 구성에 접근해야 합니다.\n\nC가 맞는 이유:\nAWS Config는 리소스의 구성 변경을 자동으로 기록하고 과거 구성 이력을 제공합니다. 규칙을 생성하여 원하는 구성과 비교하고, 비준수 리소스에 대한 자동 remediation을 설정할 수 있습니다.\n\n오답 분석:\nA) EventBridge + Lambda는 가능하지만 과거 구성 이력 접근이 어려움\nB) CloudWatch 지표는 구성 변경 추적용이 아님\nD) Systems Manager Inventory는 소프트웨어 인벤토리용이지 네트워크 리소스 구성 추적용이 아님"
    },
    {
        "num": 81,
        "question": "A company is migrating an application from on premises to AWS. The company will host the application on Amazon EC2 instances that are\ndeployed in a single VPC. During the migration period, DNS queries from the EC2 instances must be able to resolve names of on-premises servers.\nThe migration is expected to take 3 months After the 3-month migration period, the resolution of on-premises servers will no longer be needed.\nWhat should a network engineer do to meet these requirements with the LEAST amount of configuration?",
        "options": [
            "A. Set up an AWS Site-to-Site VPN connection between on premises and AWS. Deploy an Amazon Route 53 Resolver outbound endpoint in the\nRegion that is hosting the VPC.",
            "B. Set up an AWS Direct Connect connection with a private VIF. Deploy an Amazon Route 53 Resolver inbound endpoint and a Route 53\nResolver outbound endpoint in the Region that is hosting the VPC.",
            "C. Set up an AWS Client VPN connection between on premises and AWS. Deploy an Amazon Route 53 Resolver inbound endpoint in the VPC.",
            "D. Set up an AWS Direct Connect connection with a public VIF. Deploy an Amazon Route 53 Resolver inbound endpoint in the Region that is\nhosting the VPC. Use the IP address that is assigned to the endpoint for connectivity to the on-premises DNS servers."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: 3개월간 마이그레이션 기간 동안 EC2에서 온프레미스 서버 이름을 DNS로 확인해야 합니다.\n\nA가 맞는 이유:\nSite-to-Site VPN으로 온프레미스와 연결하고, Route 53 Resolver 아웃바운드 엔드포인트를 배포하여 온프레미스 도메인 쿼리를 온프레미스 DNS 서버로 전달합니다. VPN은 빠르게 설정 가능하여 3개월 마이그레이션에 적합합니다.\n\n오답 분석:\nB) Direct Connect는 설치에 수주~수개월이 걸려 3개월 마이그레이션에 부적합\nC) Client VPN은 사용자 VPN이지 사이트 간 연결용이 아님\nD) Direct Connect + 인바운드 엔드포인트는 방향이 반대 (온프레미스에서 AWS로의 쿼리용)",
        "question_ko": "회사는 온프레미스에서 AWS로 애플리케이션을 마이그레이션하려고 합니다. 회사는 단일 VPC에 배포된 Amazon EC2 인스턴스에서 애플리케이션을 호스팅할 것입니다. 마이그레이션 기간 동안 EC2 인스턴스의 DNS 쿼리가 온프레미스 서버의 이름을 해석할 수 있어야 합니다. 마이그레이션은 3개월 내에 완료될 것으로 예상되며, 3개월 후에는 온프레미스 서버 해석이 더 이상 필요하지 않습니다. 네트워크 엔지니어는 이 요구사항을 최소한의 구성으로 충족하려면 어떻게 해야 합니까?",
        "options_ko": [
            "A. 온프레미스와 AWS 사이에 AWS Site-to-Site VPN 연결을 설정하십시오. VPC를 호스팅하는 리전에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 배포하십시오.",
            "B. AWS Direct Connect 연결과 프라이빗 VIF를 설정하십시오. VPC를 호스팅하는 리전에 Amazon Route 53 Resolver 인바운드 엔드포인트와 Route 53 Resolver 아웃바운드 엔드포인트를 배포하십시오.",
            "C. 온프레미스와 AWS 사이에 AWS Client VPN 연결을 설정하십시오. VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 배포하십시오.",
            "D. AWS Direct Connect 연결과 공용 VIF를 설정하십시오. VPC를 호스팅하는 리전에 Amazon Route 53 Resolver 인바운드 엔드포인트를 배포하십시오. 엔드포인트에 할당된 IP 주소를 사용하여 온프레미스 DNS 서버에 연결하십시오."
        ],
        "explanation_ko": "정답: A\n\n핵심: 3개월간 마이그레이션 기간 동안 EC2에서 온프레미스 서버 이름을 DNS로 확인해야 합니다.\n\nA가 맞는 이유:\nSite-to-Site VPN으로 온프레미스와 연결하고, Route 53 Resolver 아웃바운드 엔드포인트를 배포하여 온프레미스 도메인 쿼리를 온프레미스 DNS 서버로 전달합니다. VPN은 빠르게 설정 가능하여 3개월 마이그레이션에 적합합니다.\n\n오답 분석:\nB) Direct Connect는 설치에 수주~수개월이 걸려 3개월 마이그레이션에 부적합\nC) Client VPN은 사용자 VPN이지 사이트 간 연결용이 아님\nD) Direct Connect + 인바운드 엔드포인트는 방향이 반대 (온프레미스에서 AWS로의 쿼리용)"
    },
    {
        "num": 82,
        "question": "A company is hosting an application on Amazon EC2 instances behind an Application Load Balancer. The instances are in an Amazon EC2 Auto\nScaling group. Because of a recent change to a security group, external users cannot access the application.\nA network engineer needs to prevent this downtime from happening again. The network engineer must implement a solution that remediates\nnoncompliant changes to security groups.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure Amazon GuardDuty to detect inconsistencies between the desired security group configuration and the current security group\nconfiguration. Create an AWS Systems Manager Automation runbook to remediate noncompliant security groups.",
            "B. Configure an AWS Config rule to detect inconsistencies between the desired security group configuration and the current security group\nconfiguration. Configure AWS OpsWorks for Chef to remediate noncompliant security groups.",
            "C. Configure Amazon GuardDuty to detect inconsistencies between the desired security group configuration and the current security group\nconfiguration. Configure AWS OpsWorks for Chef to remediate noncompliant security groups.",
            "D. Configure an AWS Config rule to detect inconsistencies between the desired security group configuration and the current security group\nconfiguration. Create an AWS Systems Manager Automation runbook to remediate noncompliant security groups."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 보안 그룹 변경으로 인한 다운타임을 자동으로 감지하고 복구해야 합니다.\n\nD가 맞는 이유:\nAWS Config 규칙으로 보안 그룹 구성을 지속적으로 모니터링하고, 비준수 변경이 감지되면 Systems Manager Automation runbook으로 자동 복구합니다.\n\n오답 분석:\nA) GuardDuty는 보안 위협 탐지용이지 보안 그룹 구성 모니터링용이 아님\nB) AWS Config는 맞지만 OpsWorks for Chef는 보안 그룹 remediation에 부적합\nC) GuardDuty는 보안 그룹 구성 변경을 감지하지 않음",
        "question_ko": "회사는 Application Load Balancer 뒤에 Amazon EC2 인스턴스에서 애플리케이션을 호스팅하고 있습니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. 보안 그룹에 대한 최근 변경으로 인해 외부 사용자가 애플리케이션에 액세스할 수 없습니다. 네트워크 엔지니어는 이러한 다운타임이 다시 발생하지 않도록 방지해야 합니다. 네트워크 엔지니어는 보안 그룹 비준수 변경을 치료할 수 있는 솔루션을 구현해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
        "options_ko": [
            "A. Amazon GuardDuty를 구성하여 원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 탐지하십시오. AWS Systems Manager Automation runbook을 생성하여 비준수 보안 그룹을 치료하십시오.",
            "B. AWS Config 규칙을 구성하여 원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 탐지하십시오. AWS OpsWorks for Chef를 구성하여 비준수 보안 그룹을 치료하십시오.",
            "C. Amazon GuardDuty를 구성하여 원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 탐지하십시오. AWS OpsWorks for Chef를 구성하여 비준수 보안 그룹을 치료하십시오.",
            "D. AWS Config 규칙을 구성하여 원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 탐지하십시오. AWS Systems Manager Automation runbook을 생성하여 비준수 보안 그룹을 치료하십시오."
        ],
        "explanation_ko": "정답: D\n\n핵심: 보안 그룹 변경으로 인한 다운타임을 자동으로 감지하고 복구해야 합니다.\n\nD가 맞는 이유:\nAWS Config 규칙으로 보안 그룹 구성을 지속적으로 모니터링하고, 비준수 변경이 감지되면 Systems Manager Automation runbook으로 자동 복구합니다.\n\n오답 분석:\nA) GuardDuty는 보안 위협 탐지용이지 보안 그룹 구성 모니터링용이 아님\nB) AWS Config는 맞지만 OpsWorks for Chef는 보안 그룹 remediation에 부적합\nC) GuardDuty는 보안 그룹 구성 변경을 감지하지 않음"
    },
    {
        "num": 83,
        "question": "A company is deploying third-party firewall appliances for traffic inspection and NAT capabilities in its VPC. The VPC is configured with private\nsubnets and public subnets. The company needs to deploy the firewall appliances behind a load balancer.\nWhich architecture will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Deploy a Gateway Load Balancer with the firewall appliances as targets. Configure the firewall appliances with a single network interface in\na private subnet. Use a NAT gateway to send the traffic to the internet after inspection.",
            "B. Deploy a Gateway Load Balancer with the firewall appliances as targets. Configure the firewall appliances with two network interfaces: one\nnetwork interface in a private subnet and another network interface in a public subnet. Use the NAT functionality on the firewall appliances to\nsend the traffic to the internet after inspection.",
            "C. Deploy a Network Load Balancer with the firewall appliances as targets. Configure the firewall appliances with a single network interface in\na private subnet. Use a NAT gateway to send the traffic to the internet after inspection.",
            "D. Deploy a Network Load Balancer with the firewall appliances as targets. Configure the firewall appliances with two network interfaces: one\nnetwork interface in a private subnet and another network interface in a public subnet. Use the NAT functionality on the firewall appliances to\nsend the traffic to the internet after inspection."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 타사 방화벽 어플라이언스를 로드 밸런서 뒤에 배포하되 비용 효율적이어야 합니다.\n\nB가 맞는 이유:\nGateway Load Balancer로 방화벽 어플라이언스를 투명하게 삽입합니다. 방화벽에 프라이빗/퍼블릭 두 개의 네트워크 인터페이스를 구성하고 방화벽 자체의 NAT 기능을 사용하면 별도 NAT 게이트웨이 비용이 절약됩니다.\n\n오답 분석:\nA) GLB + NAT 게이트웨이는 추가 NAT 게이트웨이 비용 발생\nC) NLB는 투명한 인라인 검사를 지원하지 않음\nD) NLB는 투명한 인라인 검사를 지원하지 않음",
        "question_ko": "회사는 자체 VPC에 트래픽 검사 및 NAT 기능을 위한 타사 방화벽 어플라이언스를 배포하고 있습니다. VPC는 프라이빗 서브넷과 퍼블릭 서브넷으로 구성되어 있습니다. 회사는 로드 밸런서 뒤에 방화벽 어플라이언스를 배포해야 합니다. 가장 비용 효율적인 아키텍처는 무엇입니까?",
        "options_ko": [
            "A. Gateway Load Balancer를 배포하고 방화벽 어플라이언스를 대상으로 구성하십시오. 방화벽 어플라이언스를 프라이빗 서브넷의 단일 네트워크 인터페이스로 구성하십시오. NAT 게이트웨이를 사용하여 검사 후 트래픽을 인터넷으로 보내십시오.",
            "B. Gateway Load Balancer를 배포하고 방화벽 어플라이언스를 대상으로 구성하십시오. 방화벽 어플라이언스를 프라이빗 서브넷의 하나의 네트워크 인터페이스와 퍼블릭 서브넷의 다른 네트워크 인터페이스로 구성하십시오. 방화벽 어플라이언스의 NAT 기능을 사용하여 검사 후 트래픽을 인터넷으로 보내십시오.",
            "C. Network Load Balancer를 배포하고 방화벽 어플라이언스를 대상으로 구성하십시오. 방화벽 어플라이언스를 프라이빗 서브넷의 단일 네트워크 인터페이스로 구성하십시오. NAT 게이트웨이를 사용하여 검사 후 트래픽을 인터넷으로 보내십시오.",
            "D. Network Load Balancer를 배포하고 방화벽 어플라이언스를 대상으로 구성하십시오. 방화벽 어플라이언스를 프라이빗 서브넷의 하나의 네트워크 인터페이스와 퍼블릭 서브넷의 다른 네트워크 인터페이스로 구성하십시오. 방화벽 어플라이언스의 NAT 기능을 사용하여 검사 후 트래픽을 인터넷으로 보내십시오."
        ],
        "explanation_ko": "정답: B\n\n핵심: 타사 방화벽 어플라이언스를 로드 밸런서 뒤에 배포하되 비용 효율적이어야 합니다.\n\nB가 맞는 이유:\nGateway Load Balancer로 방화벽 어플라이언스를 투명하게 삽입합니다. 방화벽에 프라이빗/퍼블릭 두 개의 네트워크 인터페이스를 구성하고 방화벽 자체의 NAT 기능을 사용하면 별도 NAT 게이트웨이 비용이 절약됩니다.\n\n오답 분석:\nA) GLB + NAT 게이트웨이는 추가 NAT 게이트웨이 비용 발생\nC) NLB는 투명한 인라인 검사를 지원하지 않음\nD) NLB는 투명한 인라인 검사를 지원하지 않음"
    },
    {
        "num": 84,
        "question": "A company's AWS architecture consists of several VPCs. The VPCs include a shared services VPC and several application VPCs. The company\nhas established network connectivity from all VPCs to the on-premises DNS servers.\nApplications that are deployed in the application VPCs must be able to resolve DNS for internally hosted domains on premises. The applications\nalso must be able to resolve local VPC domain names and domains that are hosted in Amazon Route 53 private hosted zones.\nWhat should a network engineer do to meet these requirements?",
        "options": [
            "A. Create a new Route 53 Resolver inbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains.\nAssociate the rules with the new Resolver endpoint and each application VPC. Update each application VPC's DHCP configuration to point\nDNS resolution to the new Resolver endpoint.",
            "B. Create a new Route 53 Resolver outbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted\ndomains. Associate the rules with the new Resolver endpoint and each application VPC.",
            "C. Create a new Route 53 Resolver outbound endpoint in the shared services VPCreate forwarding rules for the on-premises hosted domains.\nAssociate the rules with the new Resolver endpoint and each application VPUpdate each application VPC's DHCP configuration to point DNS\nresolution to the new Resolver endpoint.",
            "D. Create a new Route 53 Resolver inbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains.\nAssociate the rules with the new Resolver endpoint and each application VPC."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 다중 VPC에서 온프레미스 DNS를 확인하면서 로컬 VPC DNS도 유지해야 합니다.\n\nB가 맞는 이유:\n공유 서비스 VPC에 Route 53 Resolver 아웃바운드 엔드포인트를 생성하고, 온프레미스 도메인에 대한 포워딩 규칙을 만들어 각 애플리케이션 VPC에 연결합니다. DHCP 옵션은 기본(AmazonProvidedDNS)을 유지하므로 로컬 VPC DNS도 정상 동작합니다.\n\n오답 분석:\nA) 인바운드 엔드포인트는 외부에서 AWS로 들어오는 쿼리용\nC) 아웃바운드 엔드포인트는 맞지만 DHCP 옵션을 변경하면 AWS 서비스 DNS 확인이 깨질 수 있음\nD) 인바운드 엔드포인트는 방향이 반대",
        "question_ko": "회사의 AWS 아키텍처에는 여러 VPC가 포함되어 있습니다. VPC에는 공유 서비스 VPC와 여러 애플리케이션 VPC가 포함되어 있습니다. 회사는 모든 VPC에서 온프레미스 DNS 서버로의 네트워크 연결을 설정했습니다. 애플리케이션 VPC에 배포된 애플리케이션은 온프레미스에서 호스팅되는 내부 도메인의 DNS를 확인할 수 있어야 합니다. 또한 로컬 VPC 도메인 이름과 Amazon Route 53 프라이빗 호스팅 영역에서 호스팅되는 도메인을 확인할 수 있어야 합니다. 네트워크 엔지니어는 이 요구사항을 충족하려면 어떻게 해야 합니까?",
        "options_ko": [
            "A. 공유 서비스 VPC에 새로운 Route 53 Resolver 인바운드 엔드포인트를 생성하십시오. 온프레미스 호스팅 도메인에 대한 포워딩 규칙을 생성하십시오. 새 Resolver 엔드포인트와 각 애플리케이션 VPC에 규칙을 연결하십시오. 각 애플리케이션 VPC의 DHCP 구성을 업데이트하여 DNS 확인을 새 Resolver 엔드포인트로 지정하십시오.",
            "B. 공유 서비스 VPC에 새로운 Route 53 Resolver 아웃바운드 엔드포인트를 생성하십시오. 온프레미스 호스팅 도메인에 대한 포워딩 규칙을 생성하십시오. 새 Resolver 엔드포인트와 각 애플리케이션 VPC에 규칙을 연결하십시오.",
            "C. 공유 서비스 VPC에 새로운 Route 53 Resolver 아웃바운드 엔드포인트를 생성하십시오. 온프레미스 호스팅 도메인에 대한 포워딩 규칙을 생성하십시오. 새 Resolver 엔드포인트와 각 애플리케이션 VPC에 규칙을 연결하십시오. 각 애플리케이션 VPC의 DHCP 구성을 업데이트하여 DNS 확인을 새 Resolver 엔드포인트로 지정하십시오.",
            "D. 공유 서비스 VPC에 새로운 Route 53 Resolver 인바운드 엔드포인트를 생성하십시오. 온프레미스 호스팅 도메인에 대한 포워딩 규칙을 생성하십시오. 새 Resolver 엔드포인트와 각 애플리케이션 VPC에 규칙을 연결하십시오."
        ],
        "explanation_ko": "정답: B\n\n핵심: 다중 VPC에서 온프레미스 DNS를 확인하면서 로컬 VPC DNS도 유지해야 합니다.\n\nB가 맞는 이유:\n공유 서비스 VPC에 Route 53 Resolver 아웃바운드 엔드포인트를 생성하고, 온프레미스 도메인에 대한 포워딩 규칙을 만들어 각 애플리케이션 VPC에 연결합니다. DHCP 옵션은 기본(AmazonProvidedDNS)을 유지하므로 로컬 VPC DNS도 정상 동작합니다.\n\n오답 분석:\nA) 인바운드 엔드포인트는 외부에서 AWS로 들어오는 쿼리용\nC) 아웃바운드 엔드포인트는 맞지만 DHCP 옵션을 변경하면 AWS 서비스 DNS 확인이 깨질 수 있음\nD) 인바운드 엔드포인트는 방향이 반대"
    },
    {
        "num": 85,
        "question": "A company has been using an outdated application layer protocol for communication among applications. The company decides not to use this\nprotocol anymore and must migrate all applications to support a new protocol. The old protocol and the new protocol are TCP-based, but the\nprotocols use different port numbers.\nAfter several months of work, the company has migrated dozens of applications that run on Amazon EC2 instances and in containers. The\ncompany believes that all the applications have been migrated, but the company wants to verify this belief. A network engineer needs to verify that\nno application is still using the old protocol.\nWhich solution will meet these requirements without causing any downtime?",
        "options": [
            "A. Use Amazon Inspector and its Network Reachability rules package. Wait until the analysis has finished running to find out which EC2\ninstances are still listening to the old port.",
            "B. Enable Amazon GuardDuty. Use the graphical visualizations to filter for traffic that uses the port of the old protocol. Exclude all internet\ntraffic to filter out occasions when the same port is used as an ephemeral port.",
            "C. Configure VPC flow logs to be delivered into an Amazon S3 bucket. Use Amazon Athena to query the data and to filter for the port number\nthat is used by the old protocol.",
            "D. Inspect all security groups that are assigned to the EC2 instances that host the applications. Remove the port of the old protocol if that port\nis in the list of allowed ports. Verify that the applications are operating properly after the port is removed from the security groups."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 이전 프로토콜 포트를 여전히 사용하는 리소스를 식별해야 합니다.\n\nC가 맞는 이유:\nVPC 흐름 로그를 S3에 저장하고 Athena로 쿼리하면 이전 프로토콜 포트 번호로 필터링하여 해당 포트를 사용하는 소스/대상 IP를 식별할 수 있습니다.\n\n오답 분석:\nA) Amazon Inspector Network Reachability는 열린 포트를 확인하지만 실제 트래픽 흐름은 분석하지 않음\nB) GuardDuty는 보안 위협 탐지용이지 특정 포트 사용 추적용이 아님\nD) 보안 그룹에서 포트를 제거하면 아직 마이그레이션되지 않은 애플리케이션이 중단될 수 있음",
        "question_ko": "회사는 애플리케이션 간 통신에 구식 애플리케이션 계층 프로토콜을 사용해왔습니다. 회사는 더 이상 이 프로토콜을 사용하지 않기로 결정하고 모든 애플리케이션을 새로운 프로토콜을 지원하도록 마이그레이션해야 합니다. 이전 프로토콜과 새 프로토콜은 TCP 기반이지만 다른 포트 번호를 사용합니다. 수개월의 작업 끝에 회사는 Amazon EC2 인스턴스와 컨테이너에서 실행되는 수십 개의 애플리케이션을 마이그레이션했습니다. 회사는 모든 애플리케이션이 마이그레이션되었다고 믿지만 확인하고 싶습니다. 네트워크 엔지니어는 다운타임 없이 이 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon Inspector와 Network Reachability 규칙 패키지를 사용하십시오. 분석이 완료될 때까지 기다린 후 여전히 이전 포트를 수신하는 EC2 인스턴스를 찾으십시오.",
            "B. Amazon GuardDuty를 활성화하십시오. 그래픽 시각화를 사용하여 이전 프로토콜 포트를 사용하는 트래픽을 필터링하십시오. 인터넷 트래픽을 제외하여 동일한 포트가 임시 포트로 사용되는 경우를 제외하십시오.",
            "C. VPC 흐름 로그를 Amazon S3 버킷에 전달되도록 구성하십시오. Amazon Athena를 사용하여 데이터를 쿼리하고 이전 프로토콜 포트 번호를 필터링하십시오.",
            "D. 애플리케이션을 호스팅하는 EC2 인스턴스에 할당된 모든 보안 그룹을 검사하십시오. 이전 프로토콜 포트가 허용 포트 목록에 있는 경우 제거하십시오. 보안 그룹에서 포트를 제거한 후 애플리케이션이 올바르게 작동하는지 확인하십시오."
        ],
        "explanation_ko": "정답: C\n\n핵심: 이전 프로토콜 포트를 여전히 사용하는 리소스를 식별해야 합니다.\n\nC가 맞는 이유:\nVPC 흐름 로그를 S3에 저장하고 Athena로 쿼리하면 이전 프로토콜 포트 번호로 필터링하여 해당 포트를 사용하는 소스/대상 IP를 식별할 수 있습니다.\n\n오답 분석:\nA) Amazon Inspector Network Reachability는 열린 포트를 확인하지만 실제 트래픽 흐름은 분석하지 않음\nB) GuardDuty는 보안 위협 탐지용이지 특정 포트 사용 추적용이 아님\nD) 보안 그룹에서 포트를 제거하면 아직 마이그레이션되지 않은 애플리케이션이 중단될 수 있음"
    },
    {
        "num": 86,
        "question": "A company has deployed its AWS environment in a single AWS Region. The environment consists of a few hundred application VPCs, a shared\nservices VPC, and a VPN connection to the company’s on-premises environment. A network engineer needs to implement a transit gateway with\nthe following requirements:\n• Application VPCs must be isolated from each other.\n• Bidirectional communication must be allowed between the application VPCs and the on-premises network.\n• Bidirectional communication must be allowed between the application VPCs and the shared services VPC.\nThe network engineer creates the transit gateway with options disabled for default route table association and default route table propagation.\nThe network engineer also creates the VPN attachment for the on-premises network and creates the VPC attachments for the application VPCs\nand the shared services VPC.\nThe network engineer must meet all the requirements for the transit gateway by designing a solution that needs the least number of transit\ngateway route tables.\nWhich combination of actions should the network engineer perform to accomplish this goal? (Choose two.)",
        "options": [
            "A. Configure a separate transit gateway route table for on premises. Associate the VPN attachment with this transit gateway route table.\nPropagate all application VPC attachments to this transit gateway route table.",
            "B. Configure a separate transit gateway route table for each application VPC. Associate each application VPC attachment with its respective\ntransit gateway route table. Propagate the shared services VPC attachment and the VPN attachment to this transit gateway route table.",
            "C. Configure a separate transit gateway route table for all application VPCs. Associate all application VPCs with this transit gateway route\ntable. Propagate the shared services VPC attachment and the VPN attachment to this transit gateway route table.",
            "D. Configure a separate transit gateway route table for the shared services VPC. Associate the shared services VPC attachment with this\ntransit gateway route table. Propagate all application VPC attachments to this transit gateway route table.",
            "E. Configure a separate transit gateway route table for on premises and the shared services VPC. Associate the VPN attachment and the\nshared services VPC attachment with this transit gateway route table. Propagate all application VPC attachments to this transit gateway route\ntable."
        ],
        "answers": [
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "정답: C, E\n\n핵심: Transit Gateway에서 애플리케이션 VPC 격리 + 공유 서비스/온프레미스 접근을 구현해야 합니다.\n\nC, E가 맞는 이유:\nC) 모든 애플리케이션 VPC용 라우팅 테이블: 애플리케이션 VPC를 연결하고 공유 서비스 VPC + VPN 경로만 전파합니다. 애플리케이션 VPC 간 경로가 없으므로 서로 격리됩니다.\nE) 온프레미스/공유 서비스용 라우팅 테이블: VPN + 공유 서비스 VPC를 연결하고 모든 애플리케이션 VPC 경로를 전파합니다.\n\n오답 분석:\nA) 온프레미스 전용 테이블만으로는 공유 서비스 VPC 접근이 구성되지 않음\nB) 각 VPC별 별도 테이블은 수백 개 VPC에서 관리 불가\nD) 공유 서비스 전용 테이블만으로는 온프레미스 접근이 구성되지 않음",
        "question_ko": "단일 AWS 리전에 구축된 AWS 환경이 있습니다. 이 환경에는 수백 개의 애플리케이션 VPC, 공유 서비스 VPC, 온프레미스 환경과의 VPN 연결이 포함되어 있습니다. 네트워크 엔지니어는 다음과 같은 요구사항으로 트랜짓 게이트웨이를 구현해야 합니다:\n• 애플리케이션 VPC는 서로 격리되어야 합니다.\n• 애플리케이션 VPC와 온프레미스 네트워크 간 양방향 통신이 허용되어야 합니다.\n• 애플리케이션 VPC와 공유 서비스 VPC 간 양방향 통신이 허용되어야 합니다.\n네트워크 엔지니어는 트랜짓 게이트웨이를 생성하고 기본 라우팅 테이블 연결과 기본 라우팅 테이블 전파 옵션을 비활성화했습니다. 또한 온프레미스 네트워크의 VPN 연결과 애플리케이션 VPC 및 공유 서비스 VPC의 VPC 연결을 생성했습니다.\n이 모든 요구사항을 충족하기 위해 네트워크 엔지니어는 최소 수의 트랜짓 게이트웨이 라우팅 테이블을 사용하는 솔루션을 설계해야 합니다.\n어떤 조치를 취해야 이 목표를 달성할 수 있습니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 온프레미스용 별도의 트랜짓 게이트웨이 라우팅 테이블을 구성합니다. 이 테이블에 VPN 연결을 연결합니다. 모든 애플리케이션 VPC 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 전파합니다.",
            "B. 각 애플리케이션 VPC용 별도의 트랜짓 게이트웨이 라우팅 테이블을 구성합니다. 각 애플리케이션 VPC 연결을 해당 트랜짓 게이트웨이 라우팅 테이블에 연결합니다. 공유 서비스 VPC 연결과 VPN 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 전파합니다.",
            "C. 모든 애플리케이션 VPC용 별도의 트랜짓 게이트웨이 라우팅 테이블을 구성합니다. 모든 애플리케이션 VPC를 이 트랜짓 게이트웨이 라우팅 테이블에 연결합니다. 공유 서비스 VPC 연결과 VPN 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 전파합니다.",
            "D. 공유 서비스 VPC용 별도의 트랜짓 게이트웨이 라우팅 테이블을 구성합니다. 공유 서비스 VPC 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 연결합니다. 모든 애플리케이션 VPC 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 전파합니다.",
            "E. 온프레미스와 공유 서비스 VPC용 별도의 트랜짓 게이트웨이 라우팅 테이블을 구성합니다. VPN 연결과 공유 서비스 VPC 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 연결합니다. 모든 애플리케이션 VPC 연결을 이 트랜짓 게이트웨이 라우팅 테이블에 전파합니다."
        ],
        "explanation_ko": "정답: C, E\n\n핵심: Transit Gateway에서 애플리케이션 VPC 격리 + 공유 서비스/온프레미스 접근을 구현해야 합니다.\n\nC, E가 맞는 이유:\nC) 모든 애플리케이션 VPC용 라우팅 테이블: 애플리케이션 VPC를 연결하고 공유 서비스 VPC + VPN 경로만 전파합니다. 애플리케이션 VPC 간 경로가 없으므로 서로 격리됩니다.\nE) 온프레미스/공유 서비스용 라우팅 테이블: VPN + 공유 서비스 VPC를 연결하고 모든 애플리케이션 VPC 경로를 전파합니다.\n\n오답 분석:\nA) 온프레미스 전용 테이블만으로는 공유 서비스 VPC 접근이 구성되지 않음\nB) 각 VPC별 별도 테이블은 수백 개 VPC에서 관리 불가\nD) 공유 서비스 전용 테이블만으로는 온프레미스 접근이 구성되지 않음"
    },
    {
        "num": 87,
        "question": "A company has an AWS Site-to-Site VPN connection between its existing VPC and on-premises network. The default DHCP options set is\nassociated with the VPC. The company has an application that is running on an Amazon Linux 2 Amazon EC2 instance in the VPC. The application\nmust retrieve an Amazon RDS database secret that is stored in AWS Secrets Manager through a private VPC endpoint. An on-premises application\nprovides internal RESTful API service that can be reached by URL (https://api.example.internal). Two on-premises Windows DNS servers provide\ninternal DNS resolution.\nThe application on the EC2 instance needs to call the internal API service that is deployed in the on-premises environment. When the application\non the EC2 instance attempts to call the internal API service by referring to the hostname that is assigned to the service, the call fails. When a\nnetwork engineer tests the API service call from the same EC2 instance by using the API service's IP address, the call is successful.\nWhat should the network engineer do to resolve this issue and prevent the same problem from affecting other resources in the VPC?",
        "options": [
            "A. Create a new DHCP options set that specifies the on-premises Windows DNS servers. Associate the new DHCP options set with the existing\nVPC. Reboot the Amazon Linux 2 EC2 instance.",
            "B. Create an Amazon Route 53 Resolver rule. Associate the rule with the VPC. Configure the rule to forward DNS queries to the on-premises\nWindows DNS servers if the domain name matches example.internal.",
            "C. Modify the local host file in the Amazon Linux 2 EC2 instance in the VPMap the service domain name (api.example.internal) to the IP\naddress of the internal API service.",
            "D. Modify the local /etc/resolv.conf file in the Amazon Linux 2 EC2 instance in the VPC. Change the IP addresses of the name servers in the\nfile to the IP addresses of the company's on-premises Windows DNS servers."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: VPC의 EC2에서 온프레미스 내부 도메인(example.internal)을 DNS로 확인해야 합니다.\n\nB가 맞는 이유:\nRoute 53 Resolver 규칙을 생성하여 example.internal 도메인 쿼리를 온프레미스 Windows DNS 서버로 전달합니다. 규칙을 VPC에 연결하면 해당 도메인의 DNS 쿼리만 온프레미스로 전달되고 나머지는 기본 DNS로 처리됩니다.\n\n오답 분석:\nA) DHCP 옵션 세트를 온프레미스 DNS로 변경하면 모든 DNS 쿼리가 온프레미스로 가서 AWS 서비스 DNS 확인이 깨짐\nC) 호스트 파일 수정은 수동 관리이며 IP 변경 시 모든 인스턴스를 업데이트해야 함\nD) resolv.conf 수정은 A와 동일한 문제 + 인스턴스 재시작 시 초기화됨",
        "question_ko": "회사에는 기존 VPC와 온프레미스 네트워크 간 AWS Site-to-Site VPN 연결이 있습니다. 기본 DHCP 옵션 세트가 VPC에 연결되어 있습니다. 회사에는 VPC의 Amazon Linux 2 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 이 애플리케이션은 AWS Secrets Manager에 저장된 Amazon RDS 데이터베이스 비밀을 프라이빗 VPC 엔드포인트를 통해 검색해야 합니다. 온프레미스 애플리케이션은 (https://api.example.internal) URL을 통해 접근할 수 있는 내부 RESTful API 서비스를 제공합니다. 두 개의 온프레미스 Windows DNS 서버가 내부 DNS 확인을 제공합니다.\nEC2 인스턴스의 애플리케이션은 온프레미스 환경에 배포된 내부 API 서비스를 호출해야 합니다. 애플리케이션이 API 서비스의 호스트 이름을 참조하여 내부 API 서비스를 호출하면 호출이 실패합니다. 네트워크 엔지니어가 동일한 EC2 인스턴스에서 API 서비스의 IP 주소를 사용하여 API 서비스를 호출하면 호출이 성공합니다.\n이 문제를 해결하고 VPC의 다른 리소스에 동일한 문제가 발생하지 않도록 하려면 네트워크 엔지니어는 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. 온프레미스 Windows DNS 서버를 지정하는 새 DHCP 옵션 세트를 생성합니다. 새 DHCP 옵션 세트를 기존 VPC에 연결합니다. Amazon Linux 2 EC2 인스턴스를 재부팅합니다.",
            "B. Amazon Route 53 Resolver 규칙을 생성합니다. 규칙을 VPC에 연결합니다. 도메인 이름이 example.internal과 일치하는 경우 규칙을 구성하여 DNS 쿼리를 온프레미스 Windows DNS 서버로 전달합니다.",
            "C. VPC의 Amazon Linux 2 EC2 인스턴스에서 로컬 호스트 파일을 수정합니다. 서비스 도메인 이름(api.example.internal)을 내부 API 서비스의 IP 주소에 매핑합니다.",
            "D. VPC의 Amazon Linux 2 EC2 인스턴스에서 /etc/resolv.conf 파일을 수정합니다. 파일의 네임 서버 IP 주소를 회사 온프레미스 Windows DNS 서버의 IP 주소로 변경합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: VPC의 EC2에서 온프레미스 내부 도메인(example.internal)을 DNS로 확인해야 합니다.\n\nB가 맞는 이유:\nRoute 53 Resolver 규칙을 생성하여 example.internal 도메인 쿼리를 온프레미스 Windows DNS 서버로 전달합니다. 규칙을 VPC에 연결하면 해당 도메인의 DNS 쿼리만 온프레미스로 전달되고 나머지는 기본 DNS로 처리됩니다.\n\n오답 분석:\nA) DHCP 옵션 세트를 온프레미스 DNS로 변경하면 모든 DNS 쿼리가 온프레미스로 가서 AWS 서비스 DNS 확인이 깨짐\nC) 호스트 파일 수정은 수동 관리이며 IP 변경 시 모든 인스턴스를 업데이트해야 함\nD) resolv.conf 수정은 A와 동일한 문제 + 인스턴스 재시작 시 초기화됨"
    },
    {
        "num": 88,
        "question": "A company has several production applications across different accounts in the AWS Cloud. The company operates from the us-east-1 Region\nonly. Only certain partner companies can access the applications. The applications are running on Amazon EC2 instances that are in an Auto\nScaling group behind an Application Load Balancer (ALB). The EC2 instances are in private subnets and allow traffic only from the ALB. The ALB is\nin a public subnet and allows inbound traffic only from partner network IP address ranges over port 80.\nWhen the company adds a new partner, the company must allow the IP address range of the partner network in the security group that is\nassociated with the ALB in each account. A network engineer must implement a solution to centrally manage the partner network IP address\nranges.\nWhich solution will meet these requirements in the MOST operationally efficient manner?",
        "options": [
            "A. Create an Amazon DynamoDB table to maintain all IP address ranges and security groups that need to be updated. Update the DynamoDB\ntable with the new IP address range when the company adds a new partner. Invoke an AWS Lambda function to read new IP address ranges\nand security groups from the DynamoDB table to update the security groups. Deploy this solution in all accounts.",
            "B. Create a new prefix list. Add all allowed IP address ranges to the prefix list. Use Amazon EventBridge (Amazon CloudWatch Events) rules to\ninvoke an AWS Lambda function to update security groups whenever a new IP address range is added to the prefix list. Deploy this solution in\nall accounts.",
            "C. Create a new prefix list. Add all allowed IP address ranges to the prefix list. Share the prefix list across different accounts by using AWS\nResource Access Manager (AWS RAM). Update security groups to use the prefix list instead of the partner IP address range. Update the prefix\nlist with the new IP address range when the company adds a new partner.",
            "D. Create an Amazon S3 bucket to maintain all IP address ranges and security groups that need to be updated. Update the S3 bucket with the\nnew IP address range when the company adds a new partner. Invoke an AWS Lambda function to read new IP address ranges and security\ngroups from the S3 bucket to update the security groups. Deploy this solution in all accounts."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 여러 계정의 보안 그룹에서 파트너 IP 주소 범위를 중앙에서 관리해야 합니다.\n\nC가 맞는 이유:\n관리형 prefix 목록을 생성하고 허용된 IP 범위를 추가합니다. AWS RAM으로 다른 계정에 공유하면 각 계정의 보안 그룹에서 prefix 목록을 참조할 수 있습니다. IP 변경 시 prefix 목록만 업데이트하면 모든 계정에 자동 반영됩니다.\n\n오답 분석:\nA) DynamoDB + Lambda는 가능하지만 관리 복잡성이 높음\nB) EventBridge + Lambda도 가능하지만 prefix 목록 + RAM이 더 간단\nD) S3 + Lambda는 A와 동일한 복잡성 문제",
        "question_ko": "회사에는 AWS 계정 전반에 걸쳐 여러 개의 프로덕션 애플리케이션이 있습니다. 회사는 us-east-1 리전에서만 운영됩니다. 특정 파트너 회사만 애플리케이션에 액세스할 수 있습니다. 애플리케이션은 Application Load Balancer (ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 프라이빗 서브넷에 있으며 ALB에서만 트래픽을 허용합니다. ALB는 공용 서브넷에 있으며 파트너 네트워크 IP 주소 범위에서 포트 80으로의 인bound 트래픽만 허용합니다.\n새 파트너를 추가할 때마다 각 계정의 ALB와 연결된 보안 그룹에 파트너 네트워크 IP 주소 범위를 허용해야 합니다. 네트워크 엔지니어는 파트너 네트워크 IP 주소 범위를 중앙에서 관리하는 솔루션을 구현해야 합니다.\n이 요구사항을 가장 효율적으로 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 모든 IP 주소 범위와 업데이트해야 하는 보안 그룹을 유지 관리하기 위한 Amazon DynamoDB 테이블을 생성합니다. 새 파트너를 추가할 때 DynamoDB 테이블에 새 IP 주소 범위를 업데이트합니다. AWS Lambda 함수를 호출하여 DynamoDB 테이블에서 새 IP 주소 범위와 보안 그룹을 읽고 보안 그룹을 업데이트합니다. 이 솔루션을 모든 계정에 배포합니다.",
            "B. 새 prefix 목록을 생성합니다. 허용된 모든 IP 주소 범위를 prefix 목록에 추가합니다. Amazon EventBridge (Amazon CloudWatch Events) 규칙을 사용하여 새 IP 주소 범위가 prefix 목록에 추가될 때마다 AWS Lambda 함수를 호출하여 보안 그룹을 업데이트합니다. 이 솔루션을 모든 계정에 배포합니다.",
            "C. 새 prefix 목록을 생성합니다. 허용된 모든 IP 주소 범위를 prefix 목록에 추가합니다. AWS Resource Access Manager (AWS RAM)을 사용하여 prefix 목록을 다른 계정에 공유합니다. 보안 그룹을 업데이트하여 파트너 IP 주소 범위 대신 prefix 목록을 사용합니다. 새 파트너를 추가할 때 prefix 목록을 업데이트합니다.",
            "D. 업데이트해야 하는 모든 IP 주소 범위와 보안 그룹을 유지 관리하기 위한 Amazon S3 버킷을 생성합니다. 새 파트너를 추가할 때 S3 버킷에 새 IP 주소 범위를 업데이트합니다. AWS Lambda 함수를 호출하여 S3 버킷에서 새 IP 주소 범위와 보안 그룹을 읽고 보안 그룹을 업데이트합니다. 이 솔루션을 모든 계정에 배포합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 여러 계정의 보안 그룹에서 파트너 IP 주소 범위를 중앙에서 관리해야 합니다.\n\nC가 맞는 이유:\n관리형 prefix 목록을 생성하고 허용된 IP 범위를 추가합니다. AWS RAM으로 다른 계정에 공유하면 각 계정의 보안 그룹에서 prefix 목록을 참조할 수 있습니다. IP 변경 시 prefix 목록만 업데이트하면 모든 계정에 자동 반영됩니다.\n\n오답 분석:\nA) DynamoDB + Lambda는 가능하지만 관리 복잡성이 높음\nB) EventBridge + Lambda도 가능하지만 prefix 목록 + RAM이 더 간단\nD) S3 + Lambda는 A와 동일한 복잡성 문제"
    },
    {
        "num": 89,
        "question": "A company uses a 1 Gbps AWS Direct Connect connection to connect its AWS environment to its on-premises data center. The connection\nprovides employees with access to an application VPC that is hosted on AWS. Many remote employees use a company-provided VPN to connect\nto the data center. These employees are reporting slowness when they access the application during business hours. On-premises users have\nstarted to report similar slowness while they are in the office.\nThe company plans to build an additional application on AWS. On-site and remote employees will use the additional application. After the\ndeployment of this additional application, the company will need 20% more bandwidth than the company currently uses. With the increased usage,\nthe company wants to add resiliency to the AWS connectivity. A network engineer must review the current implementation and must make\nimprovements within a limited budget.\nWhat should the network engineer do to meet these requirements MOST cost-effectively?",
        "options": [
            "A. Set up a new 1 Gbps Direct Connect dedicated connection to accommodate the additional traffic load from remote employees and the\nadditional application. Create a link aggregation group (LAG).",
            "B. Deploy an AWS Site-to-Site VPN connection to the application VPC. Configure the on-premises routing for the remote employees to connect\nto the Site-to-Site VPN connection.",
            "C. Deploy Amazon Workspaces into the application VPInstruct the remote employees to connect to Workspaces.",
            "D. Replace the existing 1 Gbps Direct Connect connection with two new 2 Gbps Direct Connect hosted connections. Create an AWS Client VPN\nendpoint in the application VPC. Instruct the remote employees to connect to the Client VPN endpoint."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: 원격 직원의 VPN 트래픽이 Direct Connect를 경유하여 느린 속도를 개선해야 합니다.\n\nB가 맞는 이유:\nAWS Site-to-Site VPN을 애플리케이션 VPC에 직접 배포하면 원격 직원의 트래픽이 온프레미스 데이터 센터를 거치지 않고 인터넷을 통해 직접 AWS에 도달합니다. Direct Connect 대역폭을 절약하고 원격 직원의 지연도 줄어듭니다.\n\n오답 분석:\nA) LAG로 대역폭을 늘리는 것은 비용이 높고 근본 원인(원격 직원 트래픽 경로)을 해결하지 못함\nC) Workspaces는 가상 데스크톱이지 네트워크 경로 최적화가 아님\nD) 호스팅 연결 교체 + Client VPN은 과도한 변경",
        "question_ko": "회사는 1 Gbps AWS Direct Connect 연결을 사용하여 AWS 환경을 온프레미스 데이터 센터에 연결합니다. 이 연결을 통해 직원들이 AWS에 호스팅된 애플리케이션 VPC에 액세스할 수 있습니다. 많은 원격 직원들은 회사에서 제공한 VPN을 사용하여 데이터 센터에 연결합니다. 이 직원들은 업무 시간 동안 애플리케이션에 액세스할 때 느린 속도를 보고하고 있습니다. 현장 직원들도 사무실에 있을 때 유사한 느린 속도를 보고하기 시작했습니다.\n회사는 추가 애플리케이션을 AWS에 구축할 계획입니다. 현장 및 원격 직원들은 추가 애플리케이션을 사용할 것입니다. 이 애플리케이션 배포 후에는 현재 사용량보다 20% 더 많은 대역폭이 필요할 것입니다. 사용량 증가와 함께 회사는 AWS 연결에 복원성을 더하려고 합니다. 네트워크 엔지니어는 현재 구현을 검토하고 제한된 예산 내에서 개선을 해야 합니다.\n이 요구사항을 가장 비용 효율적으로 충족하려면 네트워크 엔지니어는 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. 원격 직원과 추가 애플리케이션의 추가 트래픽 부하를 수용하기 위해 새 1 Gbps Direct Connect 전용 연결을 설정합니다. 링크 집계 그룹(LAG)을 생성합니다.",
            "B. 애플리케이션 VPC에 AWS Site-to-Site VPN 연결을 배포합니다. 원격 직원의 온프레미스 라우팅을 Site-to-Site VPN 연결에 구성합니다.",
            "C. 애플리케이션 VPC에 Amazon Workspaces를 배포합니다. 원격 직원에게 Workspaces에 연결하도록 지시합니다.",
            "D. 기존 1 Gbps Direct Connect 연결을 2개의 새 2 Gbps Direct Connect 호스팅 연결로 교체합니다. 애플리케이션 VPC에 AWS Client VPN 엔드포인트를 생성합니다. 원격 직원에게 Client VPN 엔드포인트에 연결하도록 지시합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: 원격 직원의 VPN 트래픽이 Direct Connect를 경유하여 느린 속도를 개선해야 합니다.\n\nB가 맞는 이유:\nAWS Site-to-Site VPN을 애플리케이션 VPC에 직접 배포하면 원격 직원의 트래픽이 온프레미스 데이터 센터를 거치지 않고 인터넷을 통해 직접 AWS에 도달합니다. Direct Connect 대역폭을 절약하고 원격 직원의 지연도 줄어듭니다.\n\n오답 분석:\nA) LAG로 대역폭을 늘리는 것은 비용이 높고 근본 원인(원격 직원 트래픽 경로)을 해결하지 못함\nC) Workspaces는 가상 데스크톱이지 네트워크 경로 최적화가 아님\nD) 호스팅 연결 교체 + Client VPN은 과도한 변경"
    },
    {
        "num": 90,
        "question": "A company has a global network and is using transit gateways to connect AWS Regions together. The company finds that two Amazon EC2\ninstances in different Regions are unable to communicate with each other. A network engineer needs to troubleshoot this connectivity issue.\nWhat should the network engineer do to meet this requirement?",
        "options": [
            "A. Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables and in the VPC route tables. Use VPC flow\nlogs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
            "B. Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are\ncorrect. Use AWS Firewall Manager to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
            "C. Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are\ncorrect. Use VPC flow logs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
            "D. Use VPC Reachability Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are correct. Use VPC\nflow logs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 서로 다른 리전의 EC2 인스턴스 간 Transit Gateway 피어링 연결 문제를 해결해야 합니다.\n\nC가 맞는 이유:\nNetwork Manager Route Analyzer로 Transit Gateway 라우팅 테이블의 경로를 분석하여 피어링 경로가 올바른지 확인합니다. VPC 라우팅 테이블도 확인하고, VPC 흐름 로그로 보안 그룹/네트워크 ACL의 허용/거부를 확인합니다.\n\n오답 분석:\nA) Route Analyzer는 VPC 라우팅 테이블을 직접 분석하지 않음 (Transit Gateway만)\nB) Firewall Manager는 보안 그룹 규칙 확인용이 아님\nD) VPC Reachability Analyzer는 단일 VPC 내 경로 분석용이지 리전 간 Transit Gateway 분석용이 아님",
        "question_ko": "회사에는 글로벌 네트워크가 있으며 트랜짓 게이트웨이를 사용하여 AWS 리전 간 연결을 수행하고 있습니다. 회사는 서로 다른 리전의 두 Amazon EC2 인스턴스 간 통신이 불가능한 것을 발견했습니다. 네트워크 엔지니어는 이 연결 문제를 해결해야 합니다.\n이 요구사항을 충족하기 위해 네트워크 엔지니어는 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. AWS Network Manager Route Analyzer를 사용하여 트랜짓 게이트웨이 라우팅 테이블과 VPC 라우팅 테이블의 라우팅을 분석합니다. VPC 흐름 로그를 사용하여 VPC의 보안 그룹 규칙과 네트워크 ACL 규칙이 허용 또는 거부하는 IP 트래픽을 분석합니다.",
            "B. AWS Network Manager Route Analyzer를 사용하여 트랜짓 게이트웨이 라우팅 테이블의 라우팅을 분석합니다. VPC 라우팅 테이블이 올바른지 확인합니다. AWS Firewall Manager를 사용하여 VPC의 보안 그룹 규칙과 네트워크 ACL 규칙이 허용 또는 거부하는 IP 트래픽을 분석합니다.",
            "C. AWS Network Manager Route Analyzer를 사용하여 트랜짓 게이트웨이 라우팅 테이블의 라우팅을 분석합니다. VPC 라우팅 테이블이 올바른지 확인합니다. VPC 흐름 로그를 사용하여 VPC의 보안 그룹 규칙과 네트워크 ACL 규칙이 허용 또는 거부하는 IP 트래픽을 분석합니다.",
            "D. VPC Reachability Analyzer를 사용하여 트랜짓 게이트웨이 라우팅 테이블의 라우팅을 분석합니다. VPC 라우팅 테이블이 올바른지 확인합니다. VPC 흐름 로그를 사용하여 VPC의 보안 그룹 규칙과 네트워크 ACL 규칙이 허용 또는 거부하는 IP 트래픽을 분석합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 서로 다른 리전의 EC2 인스턴스 간 Transit Gateway 피어링 연결 문제를 해결해야 합니다.\n\nC가 맞는 이유:\nNetwork Manager Route Analyzer로 Transit Gateway 라우팅 테이블의 경로를 분석하여 피어링 경로가 올바른지 확인합니다. VPC 라우팅 테이블도 확인하고, VPC 흐름 로그로 보안 그룹/네트워크 ACL의 허용/거부를 확인합니다.\n\n오답 분석:\nA) Route Analyzer는 VPC 라우팅 테이블을 직접 분석하지 않음 (Transit Gateway만)\nB) Firewall Manager는 보안 그룹 규칙 확인용이 아님\nD) VPC Reachability Analyzer는 단일 VPC 내 경로 분석용이지 리전 간 Transit Gateway 분석용이 아님"
    },
    {
        "num": 91,
        "question": "A company needs to transfer data between its VPC and its on-premises data center. The data must travel through a connection that has dedicated\nbandwidth. The data also must be encrypted in transit. The company has been working with an AWS Partner Network (APN) Partner to establish\nthe connection.\nWhich combination of steps will meet these requirements? (Choose three.)",
        "options": [
            "A. Request a hosted connection from the APN Partner.",
            "B. Request a hosted public VIF from the APN Partner.",
            "C. Create an AWS Site-to-Site VPN connection.",
            "D. Create an AWS Client VPN connection.",
            "E. Create a private VIF.",
            "F. Create a public VIF."
        ],
        "answers": [
            "A",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "정답: A, C, F\n\n핵심: 전용 대역폭 + 전송 중 암호화가 필요한 온프레미스-AWS 연결입니다.\n\nA, C, F가 맞는 이유:\nA) APN 파트너를 통한 호스팅 연결은 전용 대역폭을 제공합니다.\nF) 퍼블릭 VIF를 생성하여 AWS 퍼블릭 서비스 엔드포인트에 접근합니다.\nC) 퍼블릭 VIF 위에 Site-to-Site VPN을 설정하면 전송 중 암호화가 보장됩니다.\n\n오답 분석:\nB) 호스팅 퍼블릭 VIF는 파트너가 아닌 고객이 생성\nD) Client VPN은 사용자 VPN이지 사이트 간 연결용이 아님\nE) 전용 VIF는 프라이빗 연결이지만 VPN 없이는 암호화가 안 됨",
        "question_ko": "회사에서는 VPC와 온프레미스 데이터 센터 간에 데이터를 전송해야 합니다. 데이터는 전용 대역폭을 갖는 연결을 통해 이동해야 하며, 전송 중 암호화되어야 합니다. 회사는 AWS 파트너 네트워크(APN) 파트너와 협력하여 연결을 설정하고 있습니다.",
        "options_ko": [
            "A. APN 파트너에게 호스팅된 연결을 요청합니다.",
            "B. APN 파트너에게 호스팅된 공용 VIF를 요청합니다.",
            "C. AWS Site-to-Site VPN 연결을 생성합니다.",
            "D. AWS Client VPN 연결을 생성합니다.",
            "E. 전용 VIF를 생성합니다.",
            "F. 공용 VIF를 생성합니다."
        ],
        "explanation_ko": "정답: A, C, F\n\n핵심: 전용 대역폭 + 전송 중 암호화가 필요한 온프레미스-AWS 연결입니다.\n\nA, C, F가 맞는 이유:\nA) APN 파트너를 통한 호스팅 연결은 전용 대역폭을 제공합니다.\nF) 퍼블릭 VIF를 생성하여 AWS 퍼블릭 서비스 엔드포인트에 접근합니다.\nC) 퍼블릭 VIF 위에 Site-to-Site VPN을 설정하면 전송 중 암호화가 보장됩니다.\n\n오답 분석:\nB) 호스팅 퍼블릭 VIF는 파트너가 아닌 고객이 생성\nD) Client VPN은 사용자 VPN이지 사이트 간 연결용이 아님\nE) 전용 VIF는 프라이빗 연결이지만 VPN 없이는 암호화가 안 됨"
    },
    {
        "num": 92,
        "question": "A company's security guidelines state that all outbound traffic from a VPC to the company's on-premises data center must pass through a security\nappliance. The security appliance runs on an Amazon EC2 instance. A network engineer needs to improve the network performance between the\non-premises data center and the security appliance.\nWhich actions should the network engineer take to meet these requirements? (Choose two.)",
        "options": [
            "A. Use an EC2 instance that supports enhanced networking.",
            "B. Send outbound traffic through a transit gateway.",
            "C. Increase the EC2 instance size.",
            "D. Place the EC2 instance in a placement group within the VPC.",
            "E. Attach multiple elastic network interfaces to the EC2 instance."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "정답: A, C\n\n핵심: 보안 어플라이언스(EC2)의 네트워크 성능을 향상시켜야 합니다.\n\nA, C가 맞는 이유:\nA) 향상된 네트워킹(ENA)을 지원하는 인스턴스를 사용하면 높은 PPS와 낮은 지연을 제공합니다.\nC) 인스턴스 크기를 늘리면 네트워크 대역폭 할당이 증가합니다.\n\n오답 분석:\nB) Transit Gateway를 통해 전송하는 것은 라우팅 변경이지 성능 향상이 아님\nD) 배치 그룹은 인스턴스 간 지연을 줄이지만 온프레미스 연결 성능과 무관\nE) 여러 ENI는 대역폭을 늘리지 않음 (인스턴스 대역폭은 인스턴스 유형에 의해 결정)",
        "question_ko": "회사의 보안 지침에 따르면 VPC에서 온프레미스 데이터 센터로의 모든 아웃바운드 트래픽은 보안 어플라이언스를 통과해야 합니다. 보안 어플라이언스는 Amazon EC2 인스턴스에서 실행됩니다. 네트워크 엔지니어는 온프레미스 데이터 센터와 보안 어플라이언스 간의 네트워크 성능을 향상시켜야 합니다.",
        "options_ko": [
            "A. 향상된 네트워킹을 지원하는 EC2 인스턴스를 사용합니다.",
            "B. 아웃바운드 트래픽을 트랜짓 게이트웨이를 통해 전송합니다.",
            "C. EC2 인스턴스 크기를 늘립니다.",
            "D. EC2 인스턴스를 VPC 내 배치 그룹에 배치합니다.",
            "E. EC2 인스턴스에 여러 개의 elastic network interface를 연결합니다."
        ],
        "explanation_ko": "정답: A, C\n\n핵심: 보안 어플라이언스(EC2)의 네트워크 성능을 향상시켜야 합니다.\n\nA, C가 맞는 이유:\nA) 향상된 네트워킹(ENA)을 지원하는 인스턴스를 사용하면 높은 PPS와 낮은 지연을 제공합니다.\nC) 인스턴스 크기를 늘리면 네트워크 대역폭 할당이 증가합니다.\n\n오답 분석:\nB) Transit Gateway를 통해 전송하는 것은 라우팅 변경이지 성능 향상이 아님\nD) 배치 그룹은 인스턴스 간 지연을 줄이지만 온프레미스 연결 성능과 무관\nE) 여러 ENI는 대역폭을 늘리지 않음 (인스턴스 대역폭은 인스턴스 유형에 의해 결정)"
    },
    {
        "num": 93,
        "question": "A company's application team is unable to launch new resources into its VPC. A network engineer discovers that the VPC has run out of usable IP\naddresses. The VPC CIDR block is 172.16.0.0/16.\nWhich additional CIDR block can the network engineer attach to the VPC?",
        "options": [
            "A. 172.17.0.0/29",
            "B. 10.0.0.0/16",
            "C. 172.17.0.0/16",
            "D. 192.168.0.0/16"
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 172.16.0.0/16 VPC에 IP 주소가 부족하여 보조 CIDR을 추가해야 합니다.\n\nC가 맞는 이유:\n172.17.0.0/16은 RFC 1918 프라이빗 주소 범위(172.16.0.0/12)에 속하며, 기존 172.16.0.0/16과 겹치지 않고 충분한 IP 주소(/16 = 65,536개)를 제공합니다.\n\n오답 분석:\nA) 172.17.0.0/29는 8개 IP만 제공하여 너무 작음\nB) 10.0.0.0/16은 가능하지만 VPC 보조 CIDR은 기존 CIDR과 같은 RFC 1918 범위에서 추가하는 것이 권장됨\nD) 192.168.0.0/16도 가능하지만 C가 기존 CIDR과 연속적이어서 더 적합",
        "question_ko": "회사의 애플리케이션 팀은 VPC에 새 리소스를 시작할 수 없습니다. 네트워크 엔지니어가 VPC에서 사용 가능한 IP 주소가 소진되었음을 발견했습니다. VPC의 CIDR 블록은 172.16.0.0/16입니다.",
        "options_ko": [
            "A. 172.17.0.0/29",
            "B. 10.0.0.0/16",
            "C. 172.17.0.0/16",
            "D. 192.168.0.0/16"
        ],
        "explanation_ko": "정답: C\n\n핵심: 172.16.0.0/16 VPC에 IP 주소가 부족하여 보조 CIDR을 추가해야 합니다.\n\nC가 맞는 이유:\n172.17.0.0/16은 RFC 1918 프라이빗 주소 범위(172.16.0.0/12)에 속하며, 기존 172.16.0.0/16과 겹치지 않고 충분한 IP 주소(/16 = 65,536개)를 제공합니다.\n\n오답 분석:\nA) 172.17.0.0/29는 8개 IP만 제공하여 너무 작음\nB) 10.0.0.0/16은 가능하지만 VPC 보조 CIDR은 기존 CIDR과 같은 RFC 1918 범위에서 추가하는 것이 권장됨\nD) 192.168.0.0/16도 가능하지만 C가 기존 CIDR과 연속적이어서 더 적합"
    },
    {
        "num": 94,
        "question": "A financial trading company is using Amazon EC2 instances to run its trading platform. Part of the company's trading platform includes a third-\nparty pricing service that the EC2 instances communicate with over UDP on port 50000.\nRecently, the company has had problems with the pricing service. Some of the responses from the pricing service appear to be incorrectly\nformatted and are not being processed successfully. The third-party vendor requests access to the data that the pricing service is returning. The\nthird-party vendor wants to capture request and response data for debugging by logging in to an EC2 instance that accesses the pricing service.\nThe company prohibits direct access to production systems and requires all log analysis to be performed in a dedicated monitoring account.\nWhich set of steps should a network engineer take to capture the data and meet these requirements?",
        "options": [
            "A. 1. Configure VPC flow logs to capture the data that flows in the VPC.\n2. Send the data to an Amazon S3 bucket.\n3. In the monitoring account, extract the data that flows to the EC2 instance's IP address and filter the traffic for the UDP data.\n4. Provide the data to the third-party vendor.",
            "B. 1. Configure a traffic mirror filter to capture the UDP data.\n2. Configure Traffic Mirroring to capture the traffic for the EC2 instance's elastic network interface.\n3. Configure a packet inspection package on a new EC2 instance in the production environment. Use the elastic network interface of the new\nEC2 instance as the target for the traffic mirror.\n4. Extract the data by using the packet inspection package.\n5. Provide the data to the third-party vendor.",
            "C. 1. Configure a traffic mirror filter to capture the UDP data.\n2. Configure Traffic Mirroring to capture the traffic for the EC2 instance's elastic network interface.\n3. Configure a packet inspection package on a new EC2 instance in the monitoring account. Use the elastic network interface of the new EC2\ninstance as the target for the traffic mirror.\n4. Extract the data by using the packet inspection package.\n5. Provide the data to the third-party vendor.",
            "D. 1. Create a new Amazon Elastic Block Store (Amazon EBS) volume. Attach the EBS volume to the EC2 instance.\n2. Log in to the EC2 instance in the production environment. Run the tcpdump command to capture the UDP data on the EBS volume.\n3. Export the data from the EBS volume to Amazon S3.\n4. Provide the data to the third-party vendor."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: UDP 트래픽의 패킷 내용을 캡처하여 타사 벤더에게 제공해야 합니다.\n\nC가 맞는 이유:\nTraffic Mirroring으로 EC2 인스턴스의 ENI에서 UDP 트래픽을 캡처하고, 모니터링 계정의 별도 EC2 인스턴스에서 패킷 검사 도구로 분석합니다. 모니터링 계정을 사용하면 프로덕션 환경에 영향을 주지 않습니다.\n\n오답 분석:\nA) VPC 흐름 로그는 패킷 내용(페이로드)을 캡처하지 않음. 메타데이터만 기록\nB) 프로덕션 환경에 패킷 검사 인스턴스를 배치하면 보안/성능 위험\nD) 프로덕션 EC2에 직접 tcpdump를 실행하면 성능에 영향을 줄 수 있음",
        "question_ko": "금융 거래 회사는 Amazon EC2 인스턴스를 사용하여 거래 플랫폼을 실행하고 있습니다. 거래 플랫폼의 일부에는 EC2 인스턴스가 포트 50000의 UDP로 통신하는 타사 가격 서비스가 포함됩니다. 최근 회사에서는 가격 서비스에 문제가 발생했습니다. 가격 서비스의 일부 응답이 올바르게 형식화되지 않아 성공적으로 처리되지 않습니다. 타사 벤더는 가격 서비스에서 반환되는 데이터에 액세스하려고 합니다. 타사 벤더는 가격 서비스에 액세스하는 EC2 인스턴스에 로그인하여 디버깅을 위해 요청 및 응답 데이터를 캡처하고자 합니다. 회사는 프로덕션 시스템에 대한 직접 액세스를 금지하고 모든 로그 분석은 전용 모니터링 계정에서 수행해야 합니다.",
        "options_ko": [
            "A. 1. VPC 흐름 로그를 구성하여 VPC에서 유동하는 데이터를 캡처합니다.\n2. 데이터를 Amazon S3 버킷으로 전송합니다.\n3. 모니터링 계정에서 EC2 인스턴스의 IP 주소로 흐르는 데이터를 추출하고 UDP 데이터 트래픽을 필터링합니다.\n4. 타사 벤더에게 데이터를 제공합니다.",
            "B. 1. 트래픽 미러 필터를 구성하여 UDP 데이터를 캡처합니다.\n2. 트래픽 미러링을 구성하여 EC2 인스턴스의 elastic network interface에 대한 트래픽을 캡처합니다.\n3. 프로덕션 환경의 새 EC2 인스턴스에 패킷 검사 패키지를 구성합니다. 새 EC2 인스턴스의 elastic network interface를 트래픽 미러의 대상으로 사용합니다.\n4. 패킷 검사 패키지를 사용하여 데이터를 추출합니다.\n5. 타사 벤더에게 데이터를 제공합니다.",
            "C. 1. 트래픽 미러 필터를 구성하여 UDP 데이터를 캡처합니다.\n2. 트래픽 미러링을 구성하여 EC2 인스턴스의 elastic network interface에 대한 트래픽을 캡처합니다.\n3. 모니터링 계정의 새 EC2 인스턴스에 패킷 검사 패키지를 구성합니다. 새 EC2 인스턴스의 elastic network interface를 트래픽 미러의 대상으로 사용합니다.\n4. 패킷 검사 패키지를 사용하여 데이터를 추출합니다.\n5. 타사 벤더에게 데이터를 제공합니다.",
            "D. 1. 새 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. EBS 볼륨을 EC2 인스턴스에 연결합니다.\n2. 프로덕션 환경의 EC2 인스턴스에 로그인합니다. EBS 볼륨에서 UDP 데이터를 캡처하기 위해 tcpdump 명령을 실행합니다.\n3. 데이터를 EBS 볼륨에서 Amazon S3로 내보냅니다.\n4. 타사 벤더에게 데이터를 제공합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: UDP 트래픽의 패킷 내용을 캡처하여 타사 벤더에게 제공해야 합니다.\n\nC가 맞는 이유:\nTraffic Mirroring으로 EC2 인스턴스의 ENI에서 UDP 트래픽을 캡처하고, 모니터링 계정의 별도 EC2 인스턴스에서 패킷 검사 도구로 분석합니다. 모니터링 계정을 사용하면 프로덕션 환경에 영향을 주지 않습니다.\n\n오답 분석:\nA) VPC 흐름 로그는 패킷 내용(페이로드)을 캡처하지 않음. 메타데이터만 기록\nB) 프로덕션 환경에 패킷 검사 인스턴스를 배치하면 보안/성능 위험\nD) 프로덕션 EC2에 직접 tcpdump를 실행하면 성능에 영향을 줄 수 있음"
    },
    {
        "num": 95,
        "question": "A company's network engineer is configuring an AWS Site-to-Site VPN connection between a transit gateway and the company's on-premises\nnetwork. The Site-to-Site VPN connection is configured to use BGP over two tunnels in active/active mode with equal-cost multi-path (ECMP)\nrouting activated on the transit gateway.\nWhen the network engineer attempts to send traffic from the on-premises network to an Amazon EC2 instance, traffic is sent over the first tunnel.\nHowever, return traffic is received over the second tunnel and is dropped at the customer gateway. The network engineer must resolve this issue\nwithout reducing the overall VPN bandwidth.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure the customer gateway to use AS PATH prepending and local preference to prefer one tunnel over the other.",
            "B. Configure the Site-to-Site VPN options to set the first tunnel as the primary tunnel to eliminate asymmetric routing.",
            "C. Configure the virtual tunnel interfaces on the customer gateway to allow asymmetric routing.",
            "D. Configure the Site-to-Site VPN to use static routing in active/active mode to ensure that traffic flows over a preferred path."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: BGP 기반 활성/활성 VPN에서 비대칭 라우팅이 발생합니다.\n\nC가 맞는 이유:\nECMP가 활성화된 활성/활성 VPN에서는 비대칭 라우팅이 정상적으로 발생할 수 있습니다. 고객 게이트웨이의 가상 터널 인터페이스(VTI)를 비대칭 라우팅을 허용하도록 구성하면 됩니다.\n\n오답 분석:\nA) AS PATH 프리펜딩으로 한 터널을 선호하면 활성/활성이 아닌 활성/패시브가 됨\nB) Site-to-Site VPN에 기본 터널 지정 옵션은 없음\nD) 정적 라우팅은 BGP의 동적 라우팅 장점을 잃음",
        "question_ko": "회사의 네트워크 엔지니어는 트랜짓 게이트웨이와 회사의 온프레미스 네트워크 간에 AWS Site-to-Site VPN 연결을 구성하고 있습니다. Site-to-Site VPN 연결은 BGP를 사용하도록 구성되어 있고, 두 개의 터널이 활성/활성 모드로 작동하며 트랜짓 게이트웨이에서 ECMP(Equal-Cost Multi-Path) 라우팅이 활성화되어 있습니다. 엔지니어가 온프레미스 네트워크에서 Amazon EC2 인스턴스로 트래픽을 전송하려고 하면, 트래픽이 첫 번째 터널을 통해 전송되지만 응답 트래픽은 두 번째 터널을 통해 수신되어 고객 게이트웨이에서 삭제됩니다. 엔지니어는 VPN 대역폭을 줄이지 않고 이 문제를 해결해야 합니다.",
        "options_ko": [
            "A. AS PATH 프리펜딩과 로컬 기본 설정을 사용하여 고객 게이트웨이에서 한 터널을 선호하도록 구성합니다.",
            "B. Site-to-Site VPN 옵션을 설정하여 첫 번째 터널을 기본 터널로 지정하여 비대칭 라우팅을 제거합니다.",
            "C. 고객 게이트웨이의 가상 터널 인터페이스를 구성하여 비대칭 라우팅을 허용합니다.",
            "D. Site-to-Site VPN을 정적 라우팅 모드의 활성/활성으로 구성하여 트래픽이 선호 경로를 통해 흐르도록 합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: BGP 기반 활성/활성 VPN에서 비대칭 라우팅이 발생합니다.\n\nC가 맞는 이유:\nECMP가 활성화된 활성/활성 VPN에서는 비대칭 라우팅이 정상적으로 발생할 수 있습니다. 고객 게이트웨이의 가상 터널 인터페이스(VTI)를 비대칭 라우팅을 허용하도록 구성하면 됩니다.\n\n오답 분석:\nA) AS PATH 프리펜딩으로 한 터널을 선호하면 활성/활성이 아닌 활성/패시브가 됨\nB) Site-to-Site VPN에 기본 터널 지정 옵션은 없음\nD) 정적 라우팅은 BGP의 동적 라우팅 장점을 잃음"
    },
    {
        "num": 96,
        "question": "A company runs an application on Amazon EC2 instances. A network engineer implements a NAT gateway in the application's VPC to replace self-\nmanaged NAT instances. After the network engineer shifts traffic from the self-managed NAT instances to the NAT gateway, users begin to report\nissues.\nDuring troubleshooting, the network engineer discovers that the connection to the application is closing after approximately 6 minutes of\ninactivity.\nWhat should the network engineer do to resolve this issue?",
        "options": [
            "A. Check for increases in the IdleTimeoutCount Amazon CloudWatch metric for the NAT gateway. Configure TCP keepalive on the application\nEC2 instances.",
            "B. Check for increases in the ErrorPortAllocation Amazon CloudWatch metric for the NAT gateway. Configure an HTTP timeout value on the\napplication EC2 instances.",
            "C. Check for increases in the PacketsDropCount Amazon CloudWatch metric for the NAT gateway. Configure an HTTPS timeout value on the\napplication EC2 instances.",
            "D. Check for decreases in the ActiveConnectionCount Amazon CloudWatch metric for the NAT gateway. Configure UDP keepalive on the\napplication EC2 instances."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "정답: A\n\n핵심: NAT 게이트웨이로 전환 후 TCP 연결이 끊어지는 문제를 해결해야 합니다.\n\nA가 맞는 이유:\nNAT 게이트웨이는 350초 동안 유휴 상태인 TCP 연결을 종료합니다. IdleTimeoutCount 지표가 증가하면 유휴 타임아웃이 원인입니다. EC2 인스턴스에서 TCP keepalive를 구성하면 연결이 유휴 상태로 판단되지 않습니다.\n\n오답 분석:\nB) ErrorPortAllocation은 포트 고갈 문제이지 타임아웃과 무관\nC) PacketsDropCount는 패킷 드롭이지 연결 타임아웃과 직접 관련 없음\nD) ActiveConnectionCount 감소는 결과이지 원인이 아님. UDP keepalive는 TCP 문제와 무관",
        "question_ko": "Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있는 회사입니다. 네트워크 엔지니어가 자체 관리 NAT 인스턴스를 대체하기 위해 애플리케이션의 VPC에 NAT 게이트웨이를 구현했습니다. 네트워크 엔지니어가 자체 관리 NAT 인스턴스의 트래픽을 NAT 게이트웨이로 전환한 후 사용자들이 문제를 보고하기 시작했습니다.\n문제 해결 중 네트워크 엔지니어는 애플리케이션에 대한 연결이 약 6분의 비활성 시간 후에 닫히는 것을 발견했습니다.\n이 문제를 해결하기 위해 네트워크 엔지니어는 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. NAT 게이트웨이의 IdleTimeoutCount Amazon CloudWatch 지표 증가를 확인하십시오. 애플리케이션 EC2 인스턴스에서 TCP keepalive를 구성하십시오.",
            "B. NAT 게이트웨이의 ErrorPortAllocation Amazon CloudWatch 지표 증가를 확인하십시오. 애플리케이션 EC2 인스턴스에서 HTTP 시간 초과 값을 구성하십시오.",
            "C. NAT 게이트웨이의 PacketsDropCount Amazon CloudWatch 지표 증가를 확인하십시오. 애플리케이션 EC2 인스턴스에서 HTTPS 시간 초과 값을 구성하십시오.",
            "D. NAT 게이트웨이의 ActiveConnectionCount Amazon CloudWatch 지표 감소를 확인하십시오. 애플리케이션 EC2 인스턴스에서 UDP keepalive를 구성하십시오."
        ],
        "explanation_ko": "정답: A\n\n핵심: NAT 게이트웨이로 전환 후 TCP 연결이 끊어지는 문제를 해결해야 합니다.\n\nA가 맞는 이유:\nNAT 게이트웨이는 350초 동안 유휴 상태인 TCP 연결을 종료합니다. IdleTimeoutCount 지표가 증가하면 유휴 타임아웃이 원인입니다. EC2 인스턴스에서 TCP keepalive를 구성하면 연결이 유휴 상태로 판단되지 않습니다.\n\n오답 분석:\nB) ErrorPortAllocation은 포트 고갈 문제이지 타임아웃과 무관\nC) PacketsDropCount는 패킷 드롭이지 연결 타임아웃과 직접 관련 없음\nD) ActiveConnectionCount 감소는 결과이지 원인이 아님. UDP keepalive는 TCP 문제와 무관"
    },
    {
        "num": 97,
        "question": "A software-as-a-service (SaaS) company is migrating its private SaaS application to AWS. The company has hundreds of customers that connect\nto multiple data centers by using VPN tunnels. As the number of customers has grown, the company has experienced more difficulty in its effort\nto manage routing and segmentation of customers with complex NAT rules.\nAfter the migration to AWS is complete, the company's AWS customers must be able to access the SaaS application directly from their VPCs.\nMeanwhile, the company's on-premises customers still must be able to connect through IPsec encrypted tunnels.\nWhich solution will meet these requirements?",
        "options": [
            "A. Connect the AWS customer VPCs to a shared transit gateway. Use AWS Site-to-Site VPN connections to the transit gateway for the on-\npremises customers",
            "B. Use AWS PrivateLink to connect the AWS customers. Use a third-party routing appliance in the SaaS application VPC to terminate\nonpremises Site-to-Site VPN connections.",
            "C. Peer each AWS customer's VPCs to the VPC that hosts the SaaS application. Create AWS Site-to-Site VPN connections on the SaaS VPC\nvirtual private gateway.",
            "D. Use Site-to-Site VPN tunnels to connect each AWS customer's VPCs to the VPC that hosts the SaaS application. Use AWS Site-to-Site VPN\nto connect the on-premises customers."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: SaaS 애플리케이션에 수백 명의 고객이 프라이빗하게 접근하면서 IP 중복/세그멘테이션 문제를 해결해야 합니다.\n\nB가 맞는 이유:\nAWS PrivateLink로 AWS 고객을 연결하면 IP 중복 문제 없이 프라이빗 접근이 가능합니다. 온프레미스 고객은 SaaS VPC의 타사 라우팅 어플라이언스로 Site-to-Site VPN을 종료하여 복잡한 NAT 규칙 없이 세그멘테이션을 관리합니다.\n\n오답 분석:\nA) 공유 Transit Gateway는 고객 간 격리가 어렵고 IP 중복 문제 발생\nC) VPC 피어링은 수백 개 고객에 확장 불가하고 IP 중복 시 사용 불가\nD) 각 고객별 VPN 터널은 현재와 동일한 관리 복잡성",
        "question_ko": "소프트웨어 서비스(SaaS) 회사가 자사의 프라이빗 SaaS 애플리케이션을 AWS로 마이그레이션하고 있습니다. 회사는 수백 명의 고객이 VPN 터널을 사용하여 다수의 데이터 센터에 연결되어 있습니다. 고객 수가 늘어나면서 복잡한 NAT 규칙을 통한 고객 라우팅 및 세그멘테이션 관리가 어려워졌습니다.\nAWS 마이그레이션 완료 후 AWS 고객은 VPC를 통해 SaaS 애플리케이션에 직접 액세스할 수 있어야 합니다. 한편 온프레미스 고객은 IPsec 암호화 터널을 통해 계속 연결할 수 있어야 합니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. AWS 고객 VPC를 공유 트랜짓 게이트웨이에 연결합니다. 온프레미스 고객의 Site-to-Site VPN 연결을 트랜짓 게이트웨이에 사용합니다.",
            "B. AWS PrivateLink을 사용하여 AWS 고객을 연결합니다. SaaS 애플리케이션 VPC에 타사 라우팅 어플라이언스를 사용하여 온프레미스 Site-to-Site VPN 연결을 종료합니다.",
            "C. 각 AWS 고객의 VPC를 SaaS 애플리케이션이 호스팅된 VPC와 피어링합니다. SaaS VPC 가상 프라이빗 게이트웨이에 AWS Site-to-Site VPN 연결을 생성합니다.",
            "D. AWS Site-to-Site VPN 터널을 사용하여 각 AWS 고객의 VPC를 SaaS 애플리케이션이 호스팅된 VPC에 연결합니다. 온프레미스 고객에게 AWS Site-to-Site VPN을 사용합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: SaaS 애플리케이션에 수백 명의 고객이 프라이빗하게 접근하면서 IP 중복/세그멘테이션 문제를 해결해야 합니다.\n\nB가 맞는 이유:\nAWS PrivateLink로 AWS 고객을 연결하면 IP 중복 문제 없이 프라이빗 접근이 가능합니다. 온프레미스 고객은 SaaS VPC의 타사 라우팅 어플라이언스로 Site-to-Site VPN을 종료하여 복잡한 NAT 규칙 없이 세그멘테이션을 관리합니다.\n\n오답 분석:\nA) 공유 Transit Gateway는 고객 간 격리가 어렵고 IP 중복 문제 발생\nC) VPC 피어링은 수백 개 고객에 확장 불가하고 IP 중복 시 사용 불가\nD) 각 고객별 VPN 터널은 현재와 동일한 관리 복잡성"
    },
    {
        "num": 98,
        "question": "A company's existing AWS environment contains public application servers that run on Amazon EC2 instances. The application servers run in a\nVPC subnet. Each server is associated with an Elastic IP address.\nThe company has a new requirement for firewall inspection of all traffic from the internet before the traffic reaches any EC2 instances. A security\nengineer has deployed and configured a Gateway Load Balancer (GLB) in a standalone VPC with a fleet of third-party firewalls.\nHow should a network engineer update the environment to ensure that the traffic travels across the fleet of firewalls?",
        "options": [
            "A. Deploy a transit gateway. Attach a GLB endpoint to the transit gateway. Attach the application VPC to the transit gateway. Update the\napplication subnet route table's default route destination to be the GLB endpoint. Ensure that the EC2 instances' security group allows traffic\nfrom the GLB endpoint.",
            "B. Update the application subnet route table to have a default route to the GLOn the standalone VPC that contains the firewall fleet, add a\nroute in the route table for the application VPC's CIDR block with the GLB endpoint as the destination. Update the EC2 instances' security\ngroup to allow traffic from the GLB.",
            "C. Provision a GLB endpoint in the application VPC in a new subnet. Create a gateway route table with a route that specifies the application\nsubnet CIDR block as the destination and the GLB endpoint as the target. Associate the gateway route table with the internet gateway in the\napplication VPUpdate the application subnet route table's default route destination to be the GLB endpoint.",
            "D. Instruct the security engineer to move the GLB into the application VPC. Create a gateway route table. Associate the gateway route table\nwith the application subnet. Add a default route to the gateway route table with the GLB as its destination. Update the route table on the GLB\nto direct traffic from the internet gateway to the application servers. Ensure that the EC2 instances' security group allows traffic from the GLB."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "정답: C\n\n핵심: 인터넷에서 EC2 인스턴스에 도달하기 전에 Gateway Load Balancer로 트래픽을 검사해야 합니다.\n\nC가 맞는 이유:\n애플리케이션 VPC의 새 서브넷에 GLB 엔드포인트를 프로비저닝합니다. 인터넷 게이트웨이에 게이트웨이 라우팅 테이블을 연결하여 애플리케이션 서브넷 CIDR을 GLB 엔드포인트로 라우팅합니다. 이렇게 하면 인바운드 트래픽이 방화벽을 거칩니다.\n\n오답 분석:\nA) Transit Gateway를 통한 구성은 과도하게 복잡\nB) 다른 VPC의 GLB로 직접 라우팅하는 것은 불가 (GLB 엔드포인트가 필요)\nD) GLB를 애플리케이션 VPC로 이동하는 것은 방화벽 관리 분리 원칙 위반",
        "question_ko": "회사의 기존 AWS 환경에는 Amazon EC2 인스턴스에서 실행되는 공용 애플리케이션 서버가 포함되어 있습니다. 애플리케이션 서버는 VPC 서브넷에서 실행됩니다. 각 서버는 탄력적 IP 주소와 연결되어 있습니다.\n회사에는 인터넷에서 EC2 인스턴스에 도달하기 전에 모든 트래픽을 방화벽으로 검사해야 한다는 새로운 요구 사항이 있습니다. 보안 엔지니어는 별도의 VPC에 게이트웨이 로드 밸런서(GLB)와 타사 방화벽 플릿을 배포하고 구성했습니다.\n네트워크 엔지니어는 트래픽이 방화벽 플릿을 통과하도록 환경을 어떻게 업데이트해야 합니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이를 배포합니다. GLB 엔드포인트를 트랜짓 게이트웨이에 연결합니다. 애플리케이션 VPC를 트랜짓 게이트웨이에 연결합니다. 애플리케이션 서브넷 라우팅 테이블의 기본 경로 대상을 GLB 엔드포인트로 업데이트합니다. EC2 인스턴스의 보안 그룹이 GLB 엔드포인트에서 트래픽을 허용하도록 합니다.",
            "B. 애플리케이션 서브넷 라우팅 테이블의 기본 경로를 방화벽 플릿이 포함된 별도의 VPC의 GLB로 업데이트합니다. GLB에 대한 경로를 애플리케이션 VPC의 라우팅 테이블에 추가합니다. EC2 인스턴스의 보안 그룹이 GLB에서 트래픽을 허용하도록 업데이트합니다.",
            "C. 애플리케이션 VPC에 새 서브넷에 GLB 엔드포인트를 프로비저닝합니다. 애플리케이션 서브넷 CIDR 블록을 대상으로 하고 GLB 엔드포인트를 대상으로 하는 경로가 있는 게이트웨이 라우팅 테이블을 생성합니다. 게이트웨이 라우팅 테이블을 인터넷 게이트웨이와 연결합니다. 애플리케이션 서브넷 라우팅 테이블의 기본 경로 대상을 GLB 엔드포인트로 업데이트합니다.",
            "D. 보안 엔지니어에게 GLB를 애플리케이션 VPC로 이동하도록 지시합니다. 게이트웨이 라우팅 테이블을 생성합니다. 게이트웨이 라우팅 테이블을 애플리케이션 서브넷과 연결합니다. 게이트웨이 라우팅 테이블에 기본 경로를 추가하고 대상을 GLB로 설정합니다. GLB의 라우팅 테이블을 업데이트하여 인터넷 게이트웨이에서 애플리케이션 서버로 트래픽을 전송합니다. EC2 인스턴스의 보안 그룹이 GLB에서 트래픽을 허용하도록 합니다."
        ],
        "explanation_ko": "정답: C\n\n핵심: 인터넷에서 EC2 인스턴스에 도달하기 전에 Gateway Load Balancer로 트래픽을 검사해야 합니다.\n\nC가 맞는 이유:\n애플리케이션 VPC의 새 서브넷에 GLB 엔드포인트를 프로비저닝합니다. 인터넷 게이트웨이에 게이트웨이 라우팅 테이블을 연결하여 애플리케이션 서브넷 CIDR을 GLB 엔드포인트로 라우팅합니다. 이렇게 하면 인바운드 트래픽이 방화벽을 거칩니다.\n\n오답 분석:\nA) Transit Gateway를 통한 구성은 과도하게 복잡\nB) 다른 VPC의 GLB로 직접 라우팅하는 것은 불가 (GLB 엔드포인트가 필요)\nD) GLB를 애플리케이션 VPC로 이동하는 것은 방화벽 관리 분리 원칙 위반"
    },
    {
        "num": 99,
        "question": "A company has an AWS Site-to-Site VPN connection between its office and its VPC. Users report occasional failure of the connection to the\napplication that is hosted inside the VPC. A network engineer discovers in the customer gateway logs that the Internet Key Exchange (IKE)\nsession ends when the connection to the application fails.\nWhat should the network engineer do to bring up the IKE session if the IKE session goes down?",
        "options": [
            "A. Set the dead peer detection (DPD) timeout action to Clear. Initiate traffic from the VPC to on premises.",
            "B. Set the dead peer detection (DPD) timeout action to Restart. Initiate traffic from on premises to the VPC.",
            "C. Set the dead peer detection (DPD) timeout action to None. Initiate traffic from the VPC to on premises.",
            "D. Set the dead peer detection (DPD) timeout action to Cancel. Initiate traffic from on premises to the VPC."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "정답: B\n\n핵심: Site-to-Site VPN에서 IKE 세션이 간헐적으로 종료되는 문제를 해결해야 합니다.\n\nB가 맞는 이유:\nDPD(Dead Peer Detection) 시간 초과 작업을 Restart로 설정하면, 피어가 응답하지 않을 때 IKE 세션을 자동으로 재시작합니다. 온프레미스에서 VPC로 트래픽을 시작하면 터널이 즉시 재설정됩니다.\n\n오답 분석:\nA) Clear는 IKE 세션을 종료하고 재시작하지 않음\nC) None은 DPD를 비활성화하여 피어 상태를 감지하지 못함\nD) Cancel은 유효한 DPD 작업이 아님",
        "question_ko": "회사에는 지사와 VPC 사이에 AWS Site-to-Site VPN 연결이 있습니다. 사용자들이 VPC 내에 호스팅된 애플리케이션에 대한 연결 장애를 간헐적으로 보고합니다. 네트워크 엔지니어는 고객 게이트웨이 로그에서 애플리케이션 연결 실패 시 Internet Key Exchange(IKE) 세션이 종료된다는 것을 발견했습니다.\nIKE 세션이 다운되는 경우 IKE 세션을 복구하기 위해 네트워크 엔지니어가 취해야 할 조치는 무엇입니까?",
        "options_ko": [
            "A. 죽은 피어 감지(DPD) 시간 초과 작업을 'Clear'로 설정합니다. VPC에서 온프레미스로 트래픽을 시작합니다.",
            "B. 죽은 피어 감지(DPD) 시간 초과 작업을 'Restart'로 설정합니다. 온프레미스에서 VPC로 트래픽을 시작합니다.",
            "C. 죽은 피어 감지(DPD) 시간 초과 작업을 'None'으로 설정합니다. VPC에서 온프레미스로 트래픽을 시작합니다.",
            "D. 죽은 피어 감지(DPD) 시간 초과 작업을 'Cancel'으로 설정합니다. 온프레미스에서 VPC로 트래픽을 시작합니다."
        ],
        "explanation_ko": "정답: B\n\n핵심: Site-to-Site VPN에서 IKE 세션이 간헐적으로 종료되는 문제를 해결해야 합니다.\n\nB가 맞는 이유:\nDPD(Dead Peer Detection) 시간 초과 작업을 Restart로 설정하면, 피어가 응답하지 않을 때 IKE 세션을 자동으로 재시작합니다. 온프레미스에서 VPC로 트래픽을 시작하면 터널이 즉시 재설정됩니다.\n\n오답 분석:\nA) Clear는 IKE 세션을 종료하고 재시작하지 않음\nC) None은 DPD를 비활성화하여 피어 상태를 감지하지 못함\nD) Cancel은 유효한 DPD 작업이 아님"
    },
    {
        "num": 100,
        "question": "A network engineer is designing a hybrid networking environment that will connect a company's corporate network to the company's AWS\nenvironment. The AWS environment consists of 30 VPCs in 3 AWS Regions.\nThe network engineer needs to implement a solution to centrally filter traffic by using a firewall that the company's security team has approved.\nThe solution must give all the VPCs the ability to connect to each other. Connectivity between AWS and the corporate network must meet a\nminimum bandwidth requirement of 2 Gbps.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy an IPsec VPN connection between the corporate network and a new transit gateway. Connect all VPCs to the transit gateway.\nAssociate the approved firewall with the transit gateway.",
            "B. Deploy a single 10 Gbps AWS Direct Connect connection between the corporate network and virtual private gateway of each VPC. Connect\nthe virtual private gateways to a Direct Connect gateway. Build an IPsec tunnel to a new transit VPC. Deploy the approved firewall to the transit\nVPC.",
            "C. Deploy two 1 Gbps AWS Direct Connect connections in different Direct Connect locations to connect to the corporate network. Build a\ntransit VIF on each connection to a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway for each\nRegion. Configure the VIFs to use equal-cost multipath (ECMP) routing. Connect all the VPCs in the three Regions to the transit gateway.\nConfigure the transit gateway route table to route traffic to an inspection VPDeploy the approved firewall to the inspection VPC.",
            "D. Deploy four 1 Gbps AWS Direct Connect connections in different Direct Connect locations to connect to the corporate network. Build a\ntransit VIF on each connection to a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway for each\nRegion. Connect the transit gateways by using a transit gateway peering attachment. Configure the VIFs to use equal-cost multipath (ECMP)\nrouting. Configure transit gateway route tables to route traffic to an inspection VPC. Deploy the approved firewall to the inspection VPC."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "정답: D\n\n핵심: 3개 리전 30개 VPC를 연결하고 중앙 방화벽으로 트래픽을 필터링해야 합니다.\n\nD가 맞는 이유:\n4개의 1Gbps Direct Connect 연결을 서로 다른 위치에 배포하여 이중화를 확보합니다. 각 리전에 Transit Gateway를 생성하고 Direct Connect 게이트웨이로 연결합니다. 검사 VPC에 승인된 방화벽을 배포하고 Transit Gateway 라우팅으로 트래픽을 강제 검사합니다.\n\n오답 분석:\nA) 단일 VPN + 단일 Transit Gateway는 3개 리전을 지원하지 못하고 이중화 부족\nB) 각 VPC에 개별 VGW + 프라이빗 VIF는 확장 불가\nC) 2개의 1Gbps 연결은 30개 VPC에 대역폭이 부족할 수 있음",
        "question_ko": "네트워크 엔지니어가 회사의 기업 네트워크와 AWS 환경을 연결하는 하이브리드 네트워킹 환경을 설계하고 있습니다. AWS 환경은 3개 AWS 리전의 30개 VPC로 구성됩니다.\n네트워크 엔지니어는 회사의 보안 팀이 승인한 방화벽을 사용하여 트래픽을 중앙에서 필터링하는 솔루션을 구현해야 합니다.\n솔루션은 모든 VPC가 서로 연결될 수 있는 기능을 제공해야 합니다. AWS와 기업 네트워크 간 연결은 최소 2Gbps의 대역폭 요구 사항을 충족해야 합니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 기업 네트워크와 새 트랜짓 게이트웨이 사이에 IPsec VPN 연결을 배포합니다. 모든 VPC를 트랜짓 게이트웨이에 연결합니다. 승인된 방화벽을 트랜짓 게이트웨이에 연결합니다.",
            "B. 기업 네트워크와 각 VPC의 가상 프라이빗 게이트웨이 사이에 단일 10Gbps AWS Direct Connect 연결을 배포합니다. 가상 프라이빗 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. 새 트랜짓 VPC에 IPsec 터널을 구축합니다. 승인된 방화벽을 트랜짓 VPC에 배포합니다.",
            "C. 기업 네트워크에 연결하기 위해 서로 다른 Direct Connect 위치에 2개의 1Gbps AWS Direct Connect 연결을 배포합니다. 각 연결의 트랜짓 VIF를 Direct Connect 게이트웨이에 구축합니다. 각 리전의 Direct Connect 게이트웨이를 새 트랜짓 게이트웨이와 연결합니다. VIF를 ECMP 라우팅에 구성합니다. 3개 리전의 모든 VPC를 트랜짓 게이트웨이에 연결합니다. 트랜짓 게이트웨이 라우팅 테이블을 검사 VPC로 트래픽을 라우팅하도록 구성합니다. 승인된 방화벽을 검사 VPC에 배포합니다.",
            "D. 기업 네트워크에 연결하기 위해 서로 다른 Direct Connect 위치에 4개의 1Gbps AWS Direct Connect 연결을 배포합니다. 각 연결의 트랜짓 VIF를 Direct Connect 게이트웨이에 구축합니다. 각 리전의 Direct Connect 게이트웨이를 새 트랜짓 게이트웨이와 연결합니다. 트랜짓 게이트웨이 피어링 연결을 사용하여 트랜짓 게이트웨이를 연결합니다. VIF를 ECMP 라우팅에 구성합니다. 트랜짓 게이트웨이 라우팅 테이블을 검사 VPC로 트래픽을 라우팅하도록 구성합니다. 승인된 방화벽을 검사 VPC에 배포합니다."
        ],
        "explanation_ko": "정답: D\n\n핵심: 3개 리전 30개 VPC를 연결하고 중앙 방화벽으로 트래픽을 필터링해야 합니다.\n\nD가 맞는 이유:\n4개의 1Gbps Direct Connect 연결을 서로 다른 위치에 배포하여 이중화를 확보합니다. 각 리전에 Transit Gateway를 생성하고 Direct Connect 게이트웨이로 연결합니다. 검사 VPC에 승인된 방화벽을 배포하고 Transit Gateway 라우팅으로 트래픽을 강제 검사합니다.\n\n오답 분석:\nA) 단일 VPN + 단일 Transit Gateway는 3개 리전을 지원하지 못하고 이중화 부족\nB) 각 VPC에 개별 VGW + 프라이빗 VIF는 확장 불가\nC) 2개의 1Gbps 연결은 30개 VPC에 대역폭이 부족할 수 있음"
    },
    {
        "num": 101,
        "question": "A company uses an AWS Direct Connect private VIF with a link aggregation group (LAG) that consists of two 10 Gbps connections. The company's\nsecurity team has implemented a new requirement for external network connections to provide layer 2 encryption. The company's network team\nplans to use MACsec support for Direct Connect to meet the new requirement.\nWhich combination of steps should the network team take to implement this functionality? (Choose three.)",
        "options": [
            "A. Create a new Direct Connect LAG with new circuits and ports that support MACsec.",
            "B. Associate the MACsec Connectivity Association Key (CAK) and the Connection Key Name (CKN) with the new LAG.",
            "C. Associate the Internet Key Exchange (IKE) with the existing LAG.",
            "D. Configure the MACsec encryption mode on the existing LAG.",
            "E. Configure the MACsec encryption mode on the new LAG.",
            "F. Configure the MACsec encryption mode on each Direct Connect connection that makes up the existing LAG."
        ],
        "answers": [
            "A",
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ABE (100%)",
        "question_ko": "AWS Direct Connect 개인 VIF에 링크 어그리게이션 그룹(LAG)이 포함되어 있으며, 이 LAG는 두 개의 10Gbps 연결로 구성되어 있습니다. 회사의 보안팀에서는 외부 네트워크 연결에 레이어 2 암호화를 제공해야 한다는 새로운 요구 사항을 구현했습니다. 회사의 네트워크 팀은 이 요구 사항을 충족하기 위해 Direct Connect의 MACsec 지원을 사용할 계획입니다. 이 기능을 구현하기 위해 네트워크 팀이 취해야 할 단계는 무엇입니까? (세 가지 선택)",
        "options_ko": [
            "A. MACsec을 지원하는 새로운 회로와 포트로 새 Direct Connect LAG를 생성합니다.",
            "B. MACsec 연결 연관 키(CAK) 및 연결 키 이름(CKN)을 새 LAG와 연결합니다.",
            "C. 기존 LAG와 인터넷 키 교환(IKE)을 연결합니다.",
            "D. 기존 LAG에 MACsec 암호화 모드를 구성합니다.",
            "E. 새 LAG에 MACsec 암호화 모드를 구성합니다.",
            "F. 기존 LAG를 구성하는 각 Direct Connect 연결에 MACsec 암호화 모드를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: ABE (100%)"
    },
    {
        "num": 102,
        "question": "A company recently implemented a security policy that prohibits developers from launching VPC network infrastructure. The policy states that any\ntime a NAT gateway is launched in a VPC, the company's network security team must immediately receive an alert to terminate the NAT gateway.\nThe network security team needs to implement a solution that can be deployed across AWS accounts with the least possible administrative\noverhead. The solution also must provide the network security team with a simple way to view compliance history.\nWhich solution will meet these requirements?",
        "options": [
            "A. Develop a script that programmatically checks for NAT gateways in an AWS account, sends an email alert, and terminates the NAT gateway\nif a NAT gateway is detected. Deploy the script on an Amazon EC2 instance in each account. Use a cron job to run the script every 5 minutes.\nLog the results of the checks to an Amazon RDS for MySQL database.",
            "B. Create an AWS Lambda function that programmatically checks for NAT gateways in an AWS account, sends an email alert, and terminates\nthe NAT gateway if a NAT gateway is detected. Deploy the Lambda function to each account by using AWS Serverless Application Model (AWS\nSAM) templates. Store the results of the checks on an Amazon OpenSearch Service cluster in each account.",
            "C. Enable Amazon GuardDuty. Create an Amazon EventBridge rule for the Behavior:EC2/NATGatewayCreation GuardDuty finding type.\nConfigure the rule to invoke an AWS Step Functions state machine to send an email alert and terminate a NAT gateway if a NAT gateway is\ndetected. Store the runtime log as a text file in an Amazon S3 bucket.",
            "D. Create a custom AWS Config rule that checks for NAT gateways in an AWS account. Configure the AWS Config rule to perform an AWS\nSystems Manager Automation remediation action to send an email alert and terminate the NAT gateway if a NAT gateway is detected. Deploy\nthe AWS Config rule and the Systems Manager runbooks to each account by using AWS CloudFormation StackSets"
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (88%) 13%",
        "question_ko": "회사에서는 최근 개발자가 VPC 네트워크 인프라를 시작하는 것을 금지하는 보안 정책을 구현했습니다. 정책에 따르면 VPC에 NAT 게이트웨이가 시작될 때마다 회사의 네트워크 보안팀에 즉시 경고를 보내 NAT 게이트웨이를 종료해야 합니다. 네트워크 보안팀은 AWS 계정 전반에 걸쳐 구현할 수 있고 관리 업무가 가장 적은 솔루션을 구현해야 합니다. 또한 이 솔루션을 통해 네트워크 보안팀이 규정 준수 내역을 쉽게 볼 수 있어야 합니다. 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. NAT 게이트웨이가 감지되면 이메일 경고를 보내고 NAT 게이트웨이를 종료하는 스크립트를 개발합니다. 이 스크립트를 각 계정의 Amazon EC2 인스턴스에 배포하고 5분마다 cron 작업을 실행하여 결과를 Amazon RDS for MySQL 데이터베이스에 기록합니다.",
            "B. NAT 게이트웨이가 감지되면 이메일 경고를 보내고 NAT 게이트웨이를 종료하는 AWS Lambda 함수를 만듭니다. AWS Serverless Application Model(AWS SAM) 템플릿을 사용하여 각 계정에 Lambda 함수를 배포하고 결과를 각 계정의 Amazon OpenSearch Service 클러스터에 저장합니다.",
            "C. Amazon GuardDuty를 활성화합니다. Behavior:EC2/NATGatewayCreation GuardDuty 찾기 유형에 대한 Amazon EventBridge 규칙을 만들고, 이메일 경고를 보내고 NAT 게이트웨이를 종료하는 AWS Step Functions 상태 머신을 실행하도록 구성합니다. 런타임 로그를 Amazon S3 버킷의 텍스트 파일로 저장합니다.",
            "D. AWS Config 사용자 지정 규칙을 만들어 AWS 계정의 NAT 게이트웨이를 확인합니다. AWS Config 규칙을 구성하여 이메일 경고를 보내고 AWS Systems Manager Automation 실행서를 사용하여 NAT 게이트웨이를 종료하도록 합니다. AWS CloudFormation StackSets를 사용하여 각 계정에 AWS Config 규칙 및 Systems Manager 실행서를 배포합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (88%) 13%"
    },
    {
        "num": 103,
        "question": "A company is running an online game on AWS. The game is played globally and is gaining popularity. Users are reporting problems with the\ngame's responsiveness. Replay rates are dropping, and the company is losing subscribers. Game servers are located in the us-west-2 Region and\nuse an Elastic Load Balancer to distribute client traffic.\nThe company has decided to deploy game servers to 11 additional AWS Regions to reduce the round-trip times of network traffic to game clients.\nA network engineer must design a DNS solution that uses Amazon Route 53 to ensure that user traffic is delivered to game servers with an optimal\nresponse time.\nWhat should the network engineer do to meet these requirements?",
        "options": [
            "A. Create Route 53 records for the Elastic Load Balancers in each Region. Specify a weighted routing policy. Calculate the weight by using the\nnumber of clients in each Region.",
            "B. Create Route 53 records for the Elastic Load Balancers in each Region. Specify a latency routing policy. Set the Region to the Region where\nthe Elastic Load Balancer is deployed.",
            "C. Create Route 53 records for the Elastic Load Balancers in each Region. Specify a multivalue answer routing policy. Test latency from the\ngame client, and connect to the server with the best response.",
            "D. Create Route 53 records for the Elastic Load Balancers in each Region. Specify a geolocation routing policy. Set the location to the Region\nwhere the Elastic Load Balancer is deployed."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (85%) C (15%)",
        "question_ko": "회사에서는 AWS에서 글로벌 온라인 게임을 운영하고 있습니다. 이 게임은 전 세계적으로 인기가 높아지고 있지만 사용자들이 게임의 반응성 문제를 보고하고 있습니다. 리플레이 비율이 떨어지고 있으며 회사가 구독자를 잃고 있습니다. 게임 서버는 us-west-2 리전에 있으며 클라이언트 트래픽을 분배하기 위해 Elastic Load Balancer를 사용하고 있습니다. 회사는 게임 클라이언트의 네트워크 왕복 시간을 줄이기 위해 11개의 추가 AWS 리전에 게임 서버를 배포하기로 결정했습니다. 네트워크 엔지니어는 Amazon Route 53을 사용하여 최적의 응답 시간으로 사용자 트래픽을 게임 서버로 전달할 수 있는 DNS 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하기 위해 네트워크 엔지니어는 무엇을 해야 합니까?",
        "options_ko": [
            "A. 각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성하고 가중 라우팅 정책을 지정합니다. 각 리전의 클라이언트 수를 사용하여 가중치를 계산합니다.",
            "B. 각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성하고 지연 시간 라우팅 정책을 지정합니다. 리전 설정을 Elastic Load Balancer가 배포된 리전으로 지정합니다.",
            "C. 각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성하고 다중 값 응답 라우팅 정책을 지정합니다. 게임 클라이언트에서 지연 시간을 테스트하고 가장 빠른 응답 시간을 가진 서버에 연결합니다.",
            "D. 각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성하고 지리적 위치 라우팅 정책을 지정합니다. 위치 설정을 Elastic Load Balancer가 배포된 리전으로 지정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (85%) C (15%)"
    },
    {
        "num": 104,
        "question": "A network engineer needs to build an encrypted connection between an on-premises data center and a VPC. The network engineer attaches the\nVPC to a virtual private gateway and sets up an AWS Site-to-Site VPN connection. The VPN tunnel is UP after configuration and is working.\nHowever, during rekey for phase 2 of the VPN negotiation, the customer gateway device is receiving different parameters than the parameters that\nthe device is configured to support.\nThe network engineer checks the IPsec configuration of the VPN tunnel. The network engineer notices that the customer gateway device is\nconfigured with the most secure encryption algorithms that the AWS Site-to-Site VPN configuration file provides.\nWhat should the network engineer do to troubleshoot and correct the issue?",
        "options": [
            "A. Check the native virtual private gateway logs. Restrict the VPN tunnel options to the specific VPN parameters that the virtual private\ngateway requires.",
            "B. Check the native customer gateway logs. Restrict the VPN tunnel options to the specific VPN parameters that the customer gateway\nrequires.",
            "C. Check Amazon CloudWatch logs of the virtual private gateway. Restrict the VPN tunnel options to the specific VPN parameters that the\nvirtual private gateway requires.",
            "D. Check Amazon CloudWatch logs of the customer gateway. Restrict the VPN tunnel options to the specific VPN parameters that the\ncustomer gateway requires."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (61%) D (39%)",
        "question_ko": "네트워크 엔지니어는 온프레미스 데이터 센터와 VPC 간에 암호화된 연결을 구축해야 합니다. 네트워크 엔지니어는 VPC를 가상 프라이빗 게이트웨이에 연결하고 AWS Site-to-Site VPN 연결을 설정합니다. VPN 터널은 구성 후 작동하고 있습니다. 그러나 VPN 협상의 2단계 재키 중에 고객 게이트웨이 디바이스가 자신이 지원하는 매개변수와 다른 매개변수를 받습니다. 네트워크 엔지니어는 VPN 터널의 IPsec 구성을 확인합니다. 고객 게이트웨이 디바이스가 AWS Site-to-Site VPN 구성 파일에서 제공하는 가장 안전한 암호화 알고리즘으로 구성되어 있음을 확인합니다. 이 문제를 해결하고 수정하려면 네트워크 엔지니어는 어떻게 해야 합니까?",
        "options_ko": [
            "A. 가상 프라이빗 게이트웨이의 로그를 확인합니다. VPN 터널 옵션을 가상 프라이빗 게이트웨이에서 요구하는 특정 VPN 매개변수로 제한합니다.",
            "B. 고객 게이트웨이의 로그를 확인합니다. VPN 터널 옵션을 고객 게이트웨이에서 요구하는 특정 VPN 매개변수로 제한합니다.",
            "C. 가상 프라이빗 게이트웨이의 Amazon CloudWatch 로그를 확인합니다. VPN 터널 옵션을 가상 프라이빗 게이트웨이에서 요구하는 특정 VPN 매개변수로 제한합니다.",
            "D. 고객 게이트웨이의 Amazon CloudWatch 로그를 확인합니다. VPN 터널 옵션을 고객 게이트웨이에서 요구하는 특정 VPN 매개변수로 제한합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (61%) D (39%)"
    },
    {
        "num": 105,
        "question": "A company is growing rapidly. Data transfers between the company's on-premises systems and Amazon EC2 instances that run in VPCs are\nlimited by the throughput of a single AWS Site-to-Site VPN connection between the company's on-premises data center firewall and an AWS\nTransit Gateway.\nA network engineer must resolve the throttling by designing a solution that is highly available and secure. The solution also must scale the VPN\nthroughput from on premises to the VPC resources to support the increase in traffic.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure multiple dynamic BGP-based Site-to-Site VPN connections to the transit gateway. Configure equal-cost multi-path routing\n(ECMP).",
            "B. Configure multiple static routing-based Site-to-Site VPN connections to the transit gateway. Configure equal-cost multi-path routing\n(ECMP).",
            "C. Configure a new Site-to-Site VPN connection to the transit gateway. Enable acceleration for the Site-to-Site VPN connection.",
            "D. Configure a software appliance-based VPN connection over the internet from the on-premises firewall to an EC2 instance that has a large\ninstance size and networking capabilities."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사의 성장이 빨라지고 있습니다. 회사의 온프레미스 시스템과 VPC에서 실행되는 Amazon EC2 인스턴스 간의 데이터 전송은 회사의 온프레미스 데이터 센터 방화벽과 AWS Transit Gateway 간의 단일 AWS Site-to-Site VPN 연결 처리량에 의해 제한되고 있습니다. 네트워크 엔지니어는 처리량 병목 현상을 해결해야 합니다. 이를 위해 고가용성과 보안을 유지하면서 VPC 리소스에 대한 온프레미스에서의 VPN 처리량을 확장할 수 있는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 동적 BGP 기반 Site-to-Site VPN 연결을 트랜짓 게이트웨이에 여러 개 구성하고 ECMP(Equal-Cost Multi-Path Routing)를 구성합니다.",
            "B. 정적 라우팅 기반 Site-to-Site VPN 연결을 트랜짓 게이트웨이에 여러 개 구성하고 ECMP(Equal-Cost Multi-Path Routing)를 구성합니다.",
            "C. 새 Site-to-Site VPN 연결을 트랜짓 게이트웨이에 구성하고 Site-to-Site VPN 연결에 대한 가속을 활성화합니다.",
            "D. 온프레미스 방화벽에서 인터넷을 통해 대규모 인스턴스 크기와 네트워킹 기능을 가진 EC2 인스턴스에 소프트웨어 어플라이언스 기반 VPN 연결을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 106,
        "question": "A company uses Amazon Route 53 to host a public hosted zone for example.com. A network engineer recently reduced the TTL on several records\nto 60 seconds. The network engineer wants to assess whether the change has increased the number of queries to Route 53 beyond the expected\nlevels that the company identified before the change. The network engineer must obtain the number of queries that have been made to the\nexample.com public hosted zone.\nWhich solution will provide this information?",
        "options": [
            "A. Create a new trail in AWS CloudTrail to include Route 53 data events. Send logs to Amazon CloudWatch Logs. Set up a CloudWatch metric\nfilter to count the number of queries and create graphs.",
            "B. Use Amazon CloudWatch to access the AWS/Route 53 namespace and to check the DNSQueries metric for the public hosted zone.",
            "C. Use Amazon CloudWatch to access the AWS/Route 53 Resolver namespace and to check the InboundQueryVolume metric for a specific\nendpoint.",
            "D. Configure logging to Amazon CloudWatch for the public hosted zone. Set up a CloudWatch metric filter to count the number of queries and\ncreate graphs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 Amazon Route 53을 사용하여 example.com에 대한 퍼블릭 호스팅 영역을 호스팅합니다. 네트워크 엔지니어가 최근 여러 레코드의 TTL을 60초로 줄였습니다. 네트워크 엔지니어는 이 변경이 회사가 변경 이전에 식별한 예상 수준을 초과하여 Route 53에 대한 쿼리 수를 늘렸는지 평가하려고 합니다. 네트워크 엔지니어는 example.com 퍼블릭 호스팅 영역에 대해 제출된 쿼리 수를 얻어야 합니다.",
        "options_ko": [
            "A. AWS CloudTrail에 새 트레일을 생성하여 Route 53 데이터 이벤트를 포함합니다. 로그를 Amazon CloudWatch Logs로 전송합니다. CloudWatch 지표 필터를 설정하여 쿼리 수를 계산하고 그래프를 생성합니다.",
            "B. Amazon CloudWatch에 액세스하여 AWS/Route 53 네임스페이스를 확인하고 퍼블릭 호스팅 영역에 대한 DNSQueries 지표를 확인합니다.",
            "C. Amazon CloudWatch에 액세스하여 AWS/Route 53 Resolver 네임스페이스를 확인하고 특정 엔드포인트에 대한 InboundQueryVolume 지표를 확인합니다.",
            "D. 퍼블릭 호스팅 영역에 대한 로깅을 Amazon CloudWatch로 구성합니다. CloudWatch 지표 필터를 설정하여 쿼리 수를 계산하고 그래프를 생성합니다."
        ],
        "explanation_ko": "B (100%)의 커뮤니티 투표"
    },
    {
        "num": 107,
        "question": "A company is establishing connectivity between its on-premises site and an existing VPC on AWS to meet a new security requirement. According\nto the new requirement, all public DNS queries must use an on-premises DNS security solution. The company's security team has allowed an\nexception for the AWS service endpoints because the company is using VPC endpoints to access AWS services.\nWhich combination of steps should a network engineer take to configure the architecture to meet these requirements? (Choose three.)",
        "options": [
            "A. Create a system rule for the domain name “.” (dot) with a target IP address of the on-premises DNS security solution.",
            "B. Create a new DHCP options set that provides the IP address of the on-premises DNS security solution. Update the VPC to use this new\nDHCP options set.",
            "C. Create an Amazon Route 53 Resolver inbound endpoint. Associate this endpoint with the VPC.",
            "D. Create an Amazon Route 53 Resolver outbound endpoint. Associate this endpoint with the VPC.",
            "E. Create a system rule for the domain name amazonaws.com.",
            "F. Create a forwarding rule for the domain name “.” (dot) with a target IP address of the on-premises DNS security solution."
        ],
        "answers": [
            "D",
            "E",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: DEF (65%) CDF (22%) 9%",
        "question_ko": "회사는 새로운 보안 요구 사항을 충족하기 위해 사내 사이트와 기존 VPC 간의 연결을 설정하고 있습니다. 새로운 요구 사항에 따르면 모든 퍼블릭 DNS 쿼리는 사내 DNS 보안 솔루션을 사용해야 합니다. 회사의 보안팀은 AWS 서비스 엔드포인트의 예외를 허용했습니다. 이는 회사가 VPC 엔드포인트를 사용하여 AWS 서비스에 액세스하고 있기 때문입니다.",
        "options_ko": [
            "A. 도메인 이름 '.'(점)에 대한 시스템 규칙을 생성하고 대상 IP 주소로 사내 DNS 보안 솔루션을 사용합니다.",
            "B. 사내 DNS 보안 솔루션의 IP 주소를 제공하는 새 DHCP 옵션 세트를 생성합니다. VPC에 이 새 DHCP 옵션 세트를 사용하도록 업데이트합니다.",
            "C. Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 이 엔드포인트를 VPC와 연결합니다.",
            "D. Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 이 엔드포인트를 VPC와 연결합니다.",
            "E. 도메인 이름 amazonaws.com에 대한 시스템 규칙을 생성합니다.",
            "F. 도메인 이름 '.'(점)에 대한 전달 규칙을 생성하고 대상 IP 주소로 사내 DNS 보안 솔루션을 사용합니다."
        ],
        "explanation_ko": "DEF (65%)와 CDF (22%)의 커뮤니티 투표"
    },
    {
        "num": 108,
        "question": "A network engineer is designing the DNS architecture for a new AWS environment. The environment must be able to resolve DNS names of\nendpoints on premises, and the on-premises systems must be able to resolve the names of AWS endpoints. The DNS architecture must give\nindividual accounts the ability to manage subdomains.\nThe network engineer needs to create a single set of rules that will work across multiple accounts to control this behavior. In addition, the network\nengineer must use AWS native services whenever possible.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose three.)",
        "options": [
            "A. Create an Amazon Route 53 private hosted zone for the overall cloud domain. Plan to create subdomains that align to other AWS accounts\nthat are associated with the central Route 53 private hosted zone.",
            "B. Create AWS Directory Service for Microsoft Active Directory server endpoints in the central AWS account that hosts the private hosted zone\nfor the overall cloud domain. Create a conditional forwarding rule in Microsoft Active Directory DNS to forward traffic to a DNS resolver\nendpoint on premises. Create another rule to forward traffic between subdomains to the VPC resolver.",
            "C. Create Amazon Route 53 Resolver inbound and outbound endpoints in the central AWS account that hosts the private hosted zone for the\noverall cloud domain. Create a forwarding rule to forward traffic to a DNS resolver endpoint on premises. Create another rule to forward traffic\nbetween subdomains to the Resolver inbound endpoint.",
            "D. Ensure that networking exists between the other accounts and the central account so that traffic can reach the AWS Directory Service for\nMicrosoft Active Directory DNS endpoints.",
            "E. Ensure that networking exists between the other accounts and the central account so that traffic can reach the Amazon Route 53 Resolver\nendpoints.",
            "F. Share the Amazon Route 53 Resolver rules between accounts by using AWS Resource Access Manager (AWS RAM). Ensure that networking\nexists between the other accounts and the central account so that traffic can reach the Route 53 Resolver endpoints."
        ],
        "answers": [
            "A",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACF (100%)",
        "question_ko": "네트워크 엔지니어는 새로운 AWS 환경에 대한 DNS 아키텍처를 설계하고 있습니다. 이 환경에서는 사내 엔드포인트의 DNS 이름을 확인할 수 있어야 하며, 사내 시스템에서 AWS 엔드포인트의 이름을 확인할 수 있어야 합니다. DNS 아키텍처는 개별 계정이 하위 도메인을 관리할 수 있는 기능을 제공해야 합니다.",
        "options_ko": [
            "A. 전체 클라우드 도메인에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 다른 AWS 계정과 연결된 중앙 Route 53 프라이빗 호스팅 영역에 맞춰 하위 도메인을 생성할 계획입니다.",
            "B. 중앙 AWS 계정에 AWS Directory Service for Microsoft Active Directory 서버 엔드포인트를 생성합니다. 사내 DNS 확인자 엔드포인트로 트래픽을 전달하는 Microsoft Active Directory DNS에 조건부 전달 규칙을 생성합니다. 하위 도메인 간 트래픽을 VPC 확인자로 전달하는 다른 규칙을 생성합니다.",
            "C. 중앙 AWS 계정에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트를 생성합니다. 사내 DNS 확인자 엔드포인트로 트래픽을 전달하는 전달 규칙을 생성합니다. 하위 도메인 간 트래픽을 Resolver 인바운드 엔드포인트로 전달하는 다른 규칙을 생성합니다.",
            "D. 다른 계정과 중앙 계정 간의 네트워킹을 확인하여 트래픽이 AWS Directory Service for Microsoft Active Directory DNS 엔드포인트에 도달할 수 있도록 합니다.",
            "E. 다른 계정과 중앙 계정 간의 네트워킹을 확인하여 트래픽이 Amazon Route 53 Resolver 엔드포인트에 도달할 수 있도록 합니다.",
            "F. AWS Resource Access Manager(AWS RAM)를 사용하여 Amazon Route 53 Resolver 규칙을 계정 간에 공유합니다. 다른 계정과 중앙 계정 간의 네트워킹을 확인하여 트래픽이 Route 53 Resolver 엔드포인트에 도달할 수 있도록 합니다."
        ],
        "explanation_ko": "ACF (100%)의 커뮤니티 투표"
    },
    {
        "num": 109,
        "question": "A company wants to migrate its DNS registrar and DNS hosting to Amazon Route 53. The company website receives tens of thousands of visits\neach day, and the company’s current DNS provider cannot keep up. The company wants to migrate as quickly as possible but cannot tolerate any\ndowntime.\nWhich solution will meet these requirements?",
        "options": [
            "A. Transfer the domain name to Route 53. Create a Route 53 private hosted zone, and copy all the existing DNS records. Update the name\nservers on the domain to use the name servers that are specified in the newly created private hosted zone.",
            "B. Copy all DNS records from the existing DNS servers to a Route 53 private hosted zone. Update the name servers with the existing registrar\nto use the private hosted zone name servers. Transfer the domain name to Route 53. Ensure that all the changes have propagated.",
            "C. Transfer the domain name to Route 53. Create a Route 53 public hosted zone, and copy all the existing DNS records. Set the TTL value on\neach record to 1 second. Update the name servers on the domain to use the name servers that are specified in the newly created public\nhosted zone.",
            "D. Copy all DNS records from the existing DNS servers to a Route 53 public hosted zone. Update the name servers with the existing registrar\nto use the Route 53 name servers for the hosted zone. When the changes have propagated, perform a domain name transfer to Route 53."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 DNS 등록기와 DNS 호스팅을 Amazon Route 53으로 마이그레이션하려고 합니다. 회사 웹사이트는 매일 수만 명의 방문자를 받으며, 현재 DNS 공급자가 이를 따라가지 못하고 있습니다. 회사는 가능한 한 빨리 마이그레이션하려고 하지만 어떤 다운타임도 허용할 수 없습니다.",
        "options_ko": [
            "A. 도메인 이름을 Route 53으로 전송합니다. Route 53 프라이빗 호스팅 영역을 생성하고 기존 모든 DNS 레코드를 복사합니다. 도메인의 네임 서버를 새로 생성된 프라이빗 호스팅 영역에 지정된 네임 서버로 업데이트합니다.",
            "B. 기존 DNS 서버에서 모든 DNS 레코드를 Route 53 프라이빗 호스팅 영역으로 복사합니다. 기존 등록기의 네임 서버를 프라이빗 호스팅 영역 네임 서버로 업데이트합니다. 도메인 이름을 Route 53으로 전송합니다. 모든 변경 사항이 전파되었는지 확인합니다.",
            "C. 도메인 이름을 Route 53으로 전송합니다. Route 53 퍼블릭 호스팅 영역을 생성하고 기존 모든 DNS 레코드를 복사합니다. 각 레코드의 TTL 값을 1초로 설정합니다. 도메인의 네임 서버를 새로 생성된 퍼블릭 호스팅 영역에 지정된 네임 서버로 업데이트합니다.",
            "D. 기존 DNS 서버에서 모든 DNS 레코드를 Route 53 퍼블릭 호스팅 영역으로 복사합니다. 기존 등록기의 네임 서버를 호스팅 영역의 Route 53 네임 서버로 업데이트합니다. 변경 사항이 전파되면 도메인 이름을 Route 53으로 전송합니다."
        ],
        "explanation_ko": "D (100%)의 커뮤니티 투표"
    },
    {
        "num": 110,
        "question": "A company has an AWS account with four VPCs in the us-east-1 Region. The VPCs consist of a development VPC and three production VPCs that\nhost various workloads.\nThe company has extended its on-premises data center to AWS with AWS Direct Connect by using a Direct Connect gateway. The company now\nwants to establish connectivity to its production VPCs and development VPC from on premises. The production VPCs are allowed to route data to\neach other. However, the development VPC must be isolated from the production VPCs. No data can flow between the development VPC and the\nproduction VPCs.\nIn preparation to implement this solution, a network engineer creates a transit gateway with a single transit gateway route table. Default route\ntable association and default route table propagation are turned off. The network engineer attaches the production VPCs, the development VPC,\nand the Direct Connect gateway to the transit gateway. For each VPC route table, the network engineer adds a route to 0.0.0.0/0 with the transit\ngateway as the next destination.\nWhich combination of steps should the network engineer take next to complete this solution? (Choose three.)",
        "options": [
            "A. Associate the production VPC attachments with the existing transit gateway route table. Propagate the routes from these attachments.",
            "B. Associate all the attachments with the existing transit gateway route table. Propagate the routes from these attachments.",
            "C. Associate the Direct Connect gateway attachment with the existing transit gateway route table. Propagate the Direct Connect gateway\nattachment to this route table.",
            "D. Change the security group inbound rules on the existing transit gateway network interfaces in the development VPC to allow connections to\nand from the on-premises CIDR range only.",
            "E. Create a new transit gateway route table. Associate the new route table with the development VPC attachment. Propagate the Direct\nConnect gateway and development VPC attachment to the new route table.",
            "F. Create a new transit gateway with default route table association and default route table propagation turned on. Attach the Direct Connect\ngateway and development VPC to the new transit gateway."
        ],
        "answers": [
            "A",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACE (54%) ACF (38%) 8%",
        "question_ko": "회사는 us-east-1 리전에 개발 VPC와 3개의 프로덕션 VPC로 구성된 4개의 VPC가 있는 AWS 계정을 갖고 있습니다. 회사는 AWS Direct Connect를 사용하여 사내 데이터 센터를 AWS로 확장했습니다. 회사는 이제 사내에서 프로덕션 VPC와 개발 VPC에 연결하려고 합니다. 프로덕션 VPC는 서로 데이터를 라우팅할 수 있습니다. 그러나 개발 VPC는 프로덕션 VPC와 격리되어야 합니다. 개발 VPC와 프로덕션 VPC 간에 데이터 흐름이 없어야 합니다.",
        "options_ko": [
            "A. 프로덕션 VPC 연결을 기존 트랜짓 게이트웨이 라우팅 테이블과 연결합니다. 이 연결에서 경로를 전파합니다.",
            "B. 모든 연결을 기존 트랜짓 게이트웨이 라우팅 테이블과 연결합니다. 이 연결에서 경로를 전파합니다.",
            "C. Direct Connect 게이트웨이 연결을 기존 트랜짓 게이트웨이 라우팅 테이블과 연결합니다. Direct Connect 게이트웨이 연결을 이 라우팅 테이블에 전파합니다.",
            "D. 개발 VPC의 기존 트랜짓 게이트웨이 네트워크 인터페이스에 대한 보안 그룹 인바운드 규칙을 변경하여 사내 CIDR 범위에서의 연결만 허용합니다.",
            "E. 새 트랜짓 게이트웨이 라우팅 테이블을 생성합니다. 새 라우팅 테이블을 개발 VPC 연결과 연결합니다. Direct Connect 게이트웨이와 개발 VPC 연결을 새 라우팅 테이블에 전파합니다.",
            "F. 기본 라우팅 테이블 연결 및 기본 라우팅 테이블 전파가 활성화된 새 트랜짓 게이트웨이를 생성합니다. Direct Connect 게이트웨이와 개발 VPC를 새 트랜짓 게이트웨이에 연결합니다."
        ],
        "explanation_ko": "ACE (54%)와 ACF (38%)의 커뮤니티 투표"
    },
    {
        "num": 111,
        "question": "A network engineer needs to provide dual-stack connectivity between a company's office location and an AWS account. The company's on-\npremises router supports dual-stack connectivity, and the VPC has been configured with dual-stack support. The company has set up two AWS\nDirect Connect connections to the office location. This connectivity must be highly available and must be reliable for latency-sensitive traffic.\nWhich solutions will meet these requirements? (Choose two.)",
        "options": [
            "A. Configure a single private VIF on each Direct Connect connection. Add both IPv4 and IPv6 peering to each private VIF. Configure the on-\npremises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering and IPv6 routes on the IPv6 peering.\nEnable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
            "B. Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the\nIPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering\nand IPv6 routes on the IPv6 peering. Enable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
            "C. Configure a single private VIF and IPv4 peering on each Direct Connect connection. Configure the on-premises equipment with this peering\nto advertise the IPv6 routes in the same BGP neighbor configuration. Enable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
            "D. Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the\nIPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise all IPv4 routes and IPv6 routes\non all peering sessions. Keep the Bidirectional Forwarding Detection (BFD) configuration unchanged.",
            "E. Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the\nIPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering\nand IPv6 routes on the IPv6 peering. Reduce the BGP hello timer to 5 seconds on both the on-premises equipment and the Direct Connect\nconfiguration."
        ],
        "answers": [
            "A",
            "B"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AB (88%) 12%",
        "question_ko": "회사 사무소와 AWS 계정 간의 이중 스택 연결을 제공해야 하는 네트워크 엔지니어가 있습니다. 사무소의 온프레미스 라우터는 이중 스택 연결을 지원하며 VPC도 이중 스택 지원으로 구성되어 있습니다. 회사는 사무소 위치에 두 개의 AWS Direct Connect 연결을 설정했습니다. 이 연결은 높은 가용성과 지연 시간에 민감한 트래픽에 대한 신뢰성을 갖추어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족할까요? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 각 Direct Connect 연결에 단일 개인 VIF를 구성하십시오. 각 개인 VIF에 IPv4 및 IPv6 피어링을 추가하십시오. AWS에서 제공한 BGP 인접 라우터를 사용하여 온프레미스 장비를 구성하여 IPv4 경로를 IPv4 피어링에, IPv6 경로를 IPv6 피어링에 광고하십시오. 모든 피어링 세션에서 양방향 전달 감지(BFD)를 활성화하십시오.",
            "B. 각 Direct Connect 연결에 두 개의 개인 VIF를 구성하십시오: 하나는 IPv4 주소 패밀리, 다른 하나는 IPv6 주소 패밀리입니다. AWS에서 제공한 BGP 인접 라우터를 사용하여 온프레미스 장비를 구성하여 IPv4 경로를 IPv4 피어링에, IPv6 경로를 IPv6 피어링에 광고하십시오. 모든 피어링 세션에서 양방향 전달 감지(BFD)를 활성화하십시오.",
            "C. 각 Direct Connect 연결에 단일 개인 VIF와 IPv4 피어링을 구성하십시오. 이 피어링에 IPv6 경로를 광고하도록 동일한 BGP 인접 라우터 구성으로 온프레미스 장비를 구성하십시오. 모든 피어링 세션에서 양방향 전달 감지(BFD)를 활성화하십시오.",
            "D. 각 Direct Connect 연결에 두 개의 개인 VIF를 구성하십시오: 하나는 IPv4 주소 패밀리, 다른 하나는 IPv6 주소 패밀리입니다. AWS에서 제공한 BGP 인접 라우터를 사용하여 온프레미스 장비를 구성하여 모든 IPv4 경로와 IPv6 경로를 모든 피어링 세션에 광고하십시오. 양방향 전달 감지(BFD) 구성은 변경하지 마십시오.",
            "E. 각 Direct Connect 연결에 두 개의 개인 VIF를 구성하십시오: 하나는 IPv4 주소 패밀리, 다른 하나는 IPv6 주소 패밀리입니다. AWS에서 제공한 BGP 인접 라우터를 사용하여 온프레미스 장비를 구성하여 IPv4 경로를 IPv4 피어링에, IPv6 경로를 IPv6 피어링에 광고하십시오. 온프레미스 장비와 Direct Connect 구성 모두에서 BGP 헬로 타이머를 5초로 줄이십시오."
        ],
        "explanation_ko": "커뮤니티 투표: AB (88%) 12%"
    },
    {
        "num": 112,
        "question": "A company recently started using AWS Client VPN to give its remote users the ability to access resources in multiple peered VPCs and resources\nin the company's on-premises data center. The Client VPN endpoint route table has a single entry of 0.0.0.0/0. The Client VPN endpoint is using a\nnew security group that has no inbound rules and a single outbound rule that allows all traffic to 0.0.0.0/0.\nMultiple remote users report that web search results are showing incorrect geographic location information for the users.\nWhich combination of steps should a network engineer take to resolve this issue with the LEAST amount of service interruption? (Choose three.)",
        "options": [
            "A. Switch users to AWS Site-to-Site VPNs.",
            "B. Enable the split-tunnel option on the Client VPN endpoint.",
            "C. Add routes for the peered VPCs and for the on-premises data center to the Client VPN route table.",
            "D. Remove the 0.0.0.0/0 outbound rule from the security group that the Client VPN endpoint uses.",
            "E. Delete and recreate the Client VPN endpoint in a different VPC.",
            "F. Remove the 0.0.0.0/0 entry from the Client VPN endpoint route table."
        ],
        "answers": [
            "B",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCF (100%)",
        "question_ko": "최근 회사에서 AWS Client VPN을 사용하여 원격 사용자들이 여러 피어링된 VPC와 회사의 온프레미스 데이터 센터의 리소스에 접근할 수 있게 했습니다. Client VPN 엔드포인트 라우팅 테이블에는 0.0.0.0/0의 단일 항목이 있습니다. Client VPN 엔드포인트는 수신 규칙이 없고 0.0.0.0/0으로의 모든 트래픽을 허용하는 단일 송신 규칙이 있는 새로운 보안 그룹을 사용하고 있습니다. 여러 명의 원격 사용자들이 웹 검색 결과에서 사용자의 지리적 위치 정보가 잘못 표시되고 있다고 보고했습니다. 서비스 중단을 최소화하기 위해 네트워크 엔지니어가 취해야 할 조치는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. 사용자들을 AWS Site-to-Site VPN으로 전환합니다.",
            "B. Client VPN 엔드포인트에서 split-tunnel 옵션을 활성화합니다.",
            "C. Client VPN 라우팅 테이블에 피어링된 VPC와 온프레미스 데이터 센터에 대한 경로를 추가합니다.",
            "D. Client VPN 엔드포인트에서 사용하는 보안 그룹에서 0.0.0.0/0 송신 규칙을 제거합니다.",
            "E. Client VPN 엔드포인트를 다른 VPC에서 삭제하고 다시 생성합니다.",
            "F. Client VPN 엔드포인트 라우팅 테이블에서 0.0.0.0/0 항목을 제거합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BCF (100%)"
    },
    {
        "num": 113,
        "question": "A company has set up hybrid connectivity between its VPCs and its on-premises data center. The company has the on-premises.example.com\nsubdomain configured at its DNS server in the on-premises data center. The company is using the aws.example.com subdomain for workloads\nthat run on AWS across different VPCs and accounts. Resources in both environments can access each other by using IP addresses. The\ncompany wants workloads in the VPCs to be able to access resources on premises by using the on-premises.example.com DNS names.\nWhich solution will meet these requirements with MINIMUM management of resources?",
        "options": [
            "A. Create an Amazon Route 53 Resolver outbound endpoint. Configure a Resolver rule that conditionally forwards DNS queries for on-\npremises.example.com to the on-premises DNS server. Associate the rule with the VPCs.",
            "B. Create an Amazon Route 53 Resolver inbound endpoint and a Resolver outbound endpoint. Configure a Resolver rule that conditionally\nforwards DNS queries for on-premises.example.com to the on-premises DNS server. Associate the rule with the VPCs.",
            "C. Launch an Amazon EC2 instance. Install and configure BIND software to conditionally forward DNS queries for on-premises.example.com\nto the on-premises DNS server. Configure the EC2 instance's IP address as a custom DNS server in each VPC.",
            "D. Launch an Amazon EC2 instance in each VPC. Install and configure BIND software to conditionally forward DNS queries for on-\npremises.example.com to the on-premises DNS server. Configure the EC2 instance's IP address as a custom DNS server in each VPC."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 VPC와 온프레미스 데이터 센터 간의 하이브리드 연결을 설정했습니다. 회사는 온프레미스 데이터 센터의 DNS 서버에 on-premises.example.com 하위 도메인을 구성했습니다. 회사는 다양한 VPC와 계정에 걸쳐 AWS에서 실행되는 워크로드에 aws.example.com 하위 도메인을 사용하고 있습니다. 두 환경의 리소스는 IP 주소를 사용하여 서로 액세스할 수 있습니다. 회사는 VPC의 워크로드가 on-premises.example.com DNS 이름을 사용하여 온프레미스 리소스에 액세스할 수 있기를 원합니다. 리소스 관리 작업을 최소화하면서 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 전달하는 Resolver 규칙을 구성합니다. 규칙을 VPC와 연결합니다.",
            "B. Amazon Route 53 Resolver 인바운드 엔드포인트와 아웃바운드 엔드포인트를 생성합니다. on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 전달하는 Resolver 규칙을 구성합니다. 규칙을 VPC와 연결합니다.",
            "C. Amazon EC2 인스턴스를 시작합니다. BIND 소프트웨어를 설치하고 구성하여 on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 전달합니다. EC2 인스턴스의 IP 주소를 각 VPC의 사용자 지정 DNS 서버로 구성합니다.",
            "D. 각 VPC에 Amazon EC2 인스턴스를 시작합니다. BIND 소프트웨어를 설치하고 구성하여 on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 전달합니다. EC2 인스턴스의 IP 주소를 각 VPC의 사용자 지정 DNS 서버로 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 114,
        "question": "A company is in the early stage of AWS Cloud adoption. The company has an application that is running in an on-premises data center in Asia. The\ncompany needs to deploy new applications in the us-east-1 Region. The applications in the cloud need connectivity to the on-premises data\ncenter.\nThe company needs to set up a communication channel between AWS and the data center. The solution must improve latency, minimize the\npossibility of performance impact from transcontinental routing over the public internet, and encrypt data in transit.\nWhich solution will meet these requirements in the LEAST amount of time?",
        "options": [
            "A. Create an AWS Site-to-Site VPN connection with acceleration turned on. Create a virtual private gateway. Attach the Site-to-Site VPN\nconnection to the virtual private gateway. Attach the virtual private gateway to the VPC where the applications will be deployed.",
            "B. Create an AWS Site-to-Site VPN connection with acceleration turned on. Create a transit gateway. Attach the Site-to-Site VPN connection to\nthe transit gateway. Create a transit gateway attachment to the VPC where the applications will be deployed.",
            "C. Create an AWS Direct Connect connection. Create a virtual private gateway. Create a public VIF and a private VIF that use the virtual private\ngateway. Create an AWS Site-to-Site VPN connection over the public VIF.",
            "D. Create an AWS Site-to-Site VPN connection with acceleration turned off. Create a transit gateway. Attach the Site-to-Site VPN connection to\nthe transit gateway. Create a transit gateway attachment to the VPC where the applications will be deployed."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (94%) 6%",
        "question_ko": "회사는 AWS 클라우드 채택 초기 단계에 있습니다. 회사에는 온프레미스 데이터 센터(아시아 소재)에서 실행되고 있는 애플리케이션이 있습니다. 회사는 us-east-1 리전에 새로운 애플리케이션을 배포해야 합니다. 클라우드의 애플리케이션은 온프레미스 데이터 센터에 연결되어야 합니다.\n회사는 AWS와 데이터 센터 간에 통신 채널을 설정해야 합니다. 이 솔루션은 지연 시간을 개선하고, 공용 인터넷을 통한 대륙간 라우팅의 성능 영향을 최소화하며, 전송 중 데이터를 암호화해야 합니다.\n이러한 요구 사항을 가장 빨리 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 가속화가 활성화된 AWS Site-to-Site VPN 연결을 생성합니다. 가상 프라이빗 게이트웨이를 생성합니다. Site-to-Site VPN 연결을 가상 프라이빗 게이트웨이에 연결합니다. 가상 프라이빗 게이트웨이를 애플리케이션이 배포될 VPC에 연결합니다.",
            "B. 가속화가 활성화된 AWS Site-to-Site VPN 연결을 생성합니다. 트랜짓 게이트웨이를 생성합니다. Site-to-Site VPN 연결을 트랜짓 게이트웨이에 연결합니다. 애플리케이션이 배포될 VPC에 트랜짓 게이트웨이 연결을 생성합니다.",
            "C. AWS Direct Connect 연결을 생성합니다. 가상 프라이빗 게이트웨이를 생성합니다. 가상 프라이빗 게이트웨이를 사용하는 퍼블릭 VIF와 프라이빗 VIF를 생성합니다. 퍼블릭 VIF 위에 AWS Site-to-Site VPN 연결을 생성합니다.",
            "D. 가속화가 비활성화된 AWS Site-to-Site VPN 연결을 생성합니다. 트랜짓 게이트웨이를 생성합니다. Site-to-Site VPN 연결을 트랜짓 게이트웨이에 연결합니다. 애플리케이션이 배포될 VPC에 트랜짓 게이트웨이 연결을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (94%) 6%"
    },
    {
        "num": 115,
        "question": "A company is moving its record-keeping application to the AWS Cloud. All traffic between the company's on-premises data center and AWS must\nbe encrypted at all times and at every transit device during the migration.\nThe application will reside across multiple Availability Zones in a single AWS Region. The application will use existing 10 Gbps AWS Direct\nConnect dedicated connections with a MACsec capable port. A network engineer must ensure that the Direct Connect connection is secured\naccordingly at every transit device.\nThe network engineer creates a Connection Key Name and Connectivity Association Key (CKN/CAK) pair for the MACsec secret key.\nWhich combination of additional steps should the network engineer take to meet the requirements? (Choose two.)",
        "options": [
            "A. Configure the on-premises router with the MACsec secret key.",
            "B. Update the connection's MACsec encryption mode to must_encrypt. Then associate the CKN/CAK pair with the connection.",
            "C. Update the connection's MACsec encryption mode to should encrypt. Then associate the CKN/CAK pair with the connection.",
            "D. Associate the CKN/CAK pair with the connection. Then update the connection's MACsec encryption mode to must_encrypt.",
            "E. Associate the CKN/CAK pair with the connection. Then update the connection’s MACsec encryption mode to should_encrypt."
        ],
        "answers": [
            "A",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AD (87%) 13%",
        "question_ko": "회사는 기록 보관 애플리케이션을 AWS 클라우드로 이전하고 있습니다. 회사의 온프레미스 데이터 센터와 AWS 간의 모든 트래픽은 마이그레이션 중 언제나 모든 전송 디바이스에서 암호화되어야 합니다.\n애플리케이션은 단일 AWS 리전의 여러 가용 영역에 걸쳐 배포됩니다. 애플리케이션은 기존의 10Gbps AWS Direct Connect 전용 연결을 사용하며, MACsec 지원 포트가 있습니다. 네트워크 엔지니어는 Direct Connect 연결이 모든 전송 디바이스에서 적절하게 보안되도록 해야 합니다.\n네트워크 엔지니어는 MACsec 비밀 키에 대한 연결 키 이름 및 연결성 연결 키(CKN/CAK) 쌍을 생성했습니다. 이 요구 사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 추가 조치는 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 온프레미스 라우터에 MACsec 비밀 키를 구성합니다.",
            "B. 연결의 MACsec 암호화 모드를 must_encrypt로 업데이트한 다음 CKN/CAK 쌍을 연결에 연결합니다.",
            "C. 연결의 MACsec 암호화 모드를 should_encrypt로 업데이트한 다음 CKN/CAK 쌍을 연결에 연결합니다.",
            "D. CKN/CAK 쌍을 연결에 연결한 다음 연결의 MACsec 암호화 모드를 must_encrypt로 업데이트합니다.",
            "E. CKN/CAK 쌍을 연결에 연결한 다음 연결의 MACsec 암호화 모드를 should_encrypt로 업데이트합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AD (87%) 13%"
    },
    {
        "num": 116,
        "question": "A network engineer is designing hybrid connectivity with AWS Direct Connect and AWS Transit Gateway. A transit gateway is attached to a Direct\nConnect gateway and 19 VPCs across different AWS accounts. Two new VPCs are being attached to the transit gateway. The IP address\nadministrator has assigned 10.0.32.0/21 to the first VPC and 10.0.40.0/21 to the second VPC. The prefix list has one CIDR block remaining before\nthe prefix list reaches the quota for the maximum number of entries.\nWhat should the network engineer do to advertise the routes from AWS to on premises to meet these requirements?",
        "options": [
            "A. Add 10.0.32.0/21 and 10.0.40.0/21 to both AWS managed prefix lists.",
            "B. Add 10.0.32.0/21 and 10.0.40.0/21 to the allowed prefix list.",
            "C. Add 10.0.32.0/20 to both AWS managed prefix lists.",
            "D. Add 10.0.32.0/20 to the allowed prefix list."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (94%) 6%",
        "question_ko": "AWS Direct Connect와 AWS Transit Gateway를 사용하여 하이브리드 연결을 설계하고 있는 네트워크 엔지니어입니다. Transit Gateway는 Direct Connect Gateway와 여러 AWS 계정에 걸쳐 19개의 VPC에 연결되어 있습니다. 두 개의 새로운 VPC가 Transit Gateway에 연결되고 있습니다. IP 주소 관리자가 첫 번째 VPC에 10.0.32.0/21, 두 번째 VPC에 10.0.40.0/21을 할당했습니다. 접두사 목록에는 최대 항목 수 한도에 도달하기 전 하나의 CIDR 블록만 남아 있습니다. 이러한 요구 사항을 충족하기 위해 네트워크 엔지니어는 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. 10.0.32.0/21과 10.0.40.0/21을 AWS 관리 접두사 목록 모두에 추가합니다.",
            "B. 10.0.32.0/21과 10.0.40.0/21을 허용 접두사 목록에 추가합니다.",
            "C. 10.0.32.0/20을 AWS 관리 접두사 목록 모두에 추가합니다.",
            "D. 10.0.32.0/20을 허용 접두사 목록에 추가합니다."
        ],
        "explanation_ko": "D (94%)를 선택하는 것이 좋습니다. 접두사 목록에 최대 항목 수가 남아 있으므로, 10.0.32.0/20을 허용 접두사 목록에 추가하는 것이 더 효율적입니다."
    },
    {
        "num": 117,
        "question": "Two companies are merging. The companies have a large AWS presence with multiple VPCs and are designing connectivity between their AWS\nnetworks. Both companies are using AWS Direct Connect with a Direct Connect gateway. Each company also has a transit gateway and multiple\nAWS Site-to-Site VPN connections from its transit gateway to on-premises resources. The new solution must optimize network visibility,\nthroughput, logging, and monitoring.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure a Site-to-Site VPN connection between each company's transit gateway to establish reachability between the respective\nnetworks. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use VPC Reachability Analyzer to monitor\nconnectivity.",
            "B. Configure a Site-to-Site VPN connection between each company's transit gateway to establish reachability between the respective\nnetworks. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use AWS Transit Gateway Network Manager to\nmonitor the transit gateways and their respective connections.",
            "C. Configure transit gateway peering between each company's transit gateway. Configure VPC Flow Logs for all VPCs. Publish the flow logs to\nAmazon CloudWatch. Use VPC Reachability Analyzer to monitor connectivity.",
            "D. Configure transit gateway peering between each company's transit gateway. Configure VPC Flow Logs for all VPCs. Publish the flow logs to\nAmazon CloudWatch. Use AWS Transit Gateway Network Manager to monitor the transit gateways, their respective connections, and the\ntransit gateway peering link."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "두 회사가 합병하고 있습니다. 두 회사 모두 AWS Direct Connect와 Direct Connect Gateway를 사용하여 AWS에 많은 인프라를 구축했습니다. 각 회사는 자체 Transit Gateway와 온프레미스 리소스로의 여러 AWS Site-to-Site VPN 연결을 가지고 있습니다. 새로운 솔루션은 네트워크 가시성, 처리량, 로깅 및 모니터링을 최적화해야 합니다.",
        "options_ko": [
            "A. 각 회사의 Transit Gateway 간에 Site-to-Site VPN 연결을 구성하여 상호 연결을 설정합니다. 모든 VPC에 대해 VPC Flow Logs를 구성하고 Amazon CloudWatch에 게시합니다. VPC Reachability Analyzer를 사용하여 연결성을 모니터링합니다.",
            "B. 각 회사의 Transit Gateway 간에 Site-to-Site VPN 연결을 구성하여 상호 연결을 설정합니다. 모든 VPC에 대해 VPC Flow Logs를 구성하고 Amazon CloudWatch에 게시합니다. AWS Transit Gateway Network Manager를 사용하여 Transit Gateway와 해당 연결을 모니터링합니다.",
            "C. 각 회사의 Transit Gateway 간에 Transit Gateway 피어링을 구성합니다. 모든 VPC에 대해 VPC Flow Logs를 구성하고 Amazon CloudWatch에 게시합니다. VPC Reachability Analyzer를 사용하여 연결성을 모니터링합니다.",
            "D. 각 회사의 Transit Gateway 간에 Transit Gateway 피어링을 구성합니다. 모든 VPC에 대해 VPC Flow Logs를 구성하고 Amazon CloudWatch에 게시합니다. AWS Transit Gateway Network Manager를 사용하여 Transit Gateway, 해당 연결 및 Transit Gateway 피어링 링크를 모니터링합니다."
        ],
        "explanation_ko": "D (100%)를 선택하는 것이 좋습니다. Transit Gateway 피어링을 사용하여 두 회사의 네트워크를 연결하고, VPC Flow Logs와 AWS Transit Gateway Network Manager를 통해 가시성 및 모니터링을 제공하는 것이 가장 좋은 솔루션입니다."
    },
    {
        "num": 118,
        "question": "A company has a single VPC in the us-east-1 Region. The company is planning to set up a new VPC in the us-east-2 Region. The existing VPC has\nan AWS Site-to-Site VPN connection to the company's on-premises environment and uses a virtual private gateway.\nA network engineer needs to implement a solution to establish connectivity between the existing VPC and the new VPC. The solution also must\nimplement support for IPv6 for the new VPC. The company has new on-premises resources that need to connect to VPC resources by using IPv6\naddresses.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a new virtual private gateway in us-east-1. Attach the new virtual private gateway to the new VPC. Create two new Site-to-Site VPN\nconnections to the new virtual private gateway with IPv4 and IPv6 support. Configure routing between the VPCs by using VPC peering.",
            "B. Create a transit gateway in us-east-1 and in us-east-2. Attach the existing VPC and the new VPC to each transit gateway. Create a new Site-\nto-Site VPN connection to each transit gateway with IPv4 and IPv6 support. Configure transit gateway peering. Configure routing between the\nVPCs and the on-premises environment.",
            "C. Create a new virtual private gateway in us-east-2. Attach the new virtual private gateway to the new VPCreate two new Site-to-Site VPN\nconnections to the new virtual private gateway with IPv4 and IPv6 support. Configure routing between the VPCs by using VPC peering.",
            "D. Create a transit gateway in us-east-1. Attach the existing VPC and the new VPC to the transit gateway. Create two new Site-to-Site VPN\nconnections to the transit gateway with IPv4 and IPv6 support. Configure transit gateway peering. Configure routing between the VPCs and the\non-premises environment."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (72%) C (28%)",
        "question_ko": "회사에 us-east-1 리전에 하나의 VPC가 있습니다. 회사는 us-east-2 리전에 새로운 VPC를 설정할 계획입니다. 기존 VPC에는 회사의 온프레미스 환경으로 연결되는 AWS Site-to-Site VPN 연결이 있으며 가상 프라이빗 게이트웨이를 사용합니다. 네트워크 엔지니어는 기존 VPC와 새로운 VPC 간의 연결을 구현해야 합니다. 또한 새로운 VPC에 대한 IPv6 지원도 구현해야 합니다. 회사는 IPv6 주소를 사용하여 VPC 리소스에 연결해야 하는 새로운 온프레미스 리소스가 있습니다.",
        "options_ko": [
            "A. us-east-1에 새로운 가상 프라이빗 게이트웨이를 생성합니다. 새 가상 프라이빗 게이트웨이를 새 VPC에 연결합니다. IPv4와 IPv6 지원으로 새로운 두 개의 Site-to-Site VPN 연결을 생성합니다. VPC 피어링을 통해 VPC 간 라우팅을 구성합니다.",
            "B. us-east-1과 us-east-2에 Transit Gateway를 생성합니다. 기존 VPC와 새 VPC를 각 Transit Gateway에 연결합니다. IPv4와 IPv6 지원으로 각 Transit Gateway에 새로운 Site-to-Site VPN 연결을 생성합니다. Transit Gateway 피어링을 구성합니다. VPC와 온프레미스 환경 간 라우팅을 구성합니다.",
            "C. us-east-2에 새로운 가상 프라이빗 게이트웨이를 생성합니다. 새 가상 프라이빗 게이트웨이를 새 VPC에 연결합니다. IPv4와 IPv6 지원으로 새로운 두 개의 Site-to-Site VPN 연결을 생성합니다. VPC 피어링을 통해 VPC 간 라우팅을 구성합니다.",
            "D. us-east-1에 Transit Gateway를 생성합니다. 기존 VPC와 새 VPC를 Transit Gateway에 연결합니다. IPv4와 IPv6 지원으로 Transit Gateway에 두 개의 새로운 Site-to-Site VPN 연결을 생성합니다. Transit Gateway 피어링을 구성합니다. VPC와 온프레미스 환경 간 라우팅을 구성합니다."
        ],
        "explanation_ko": "B (72%)를 선택하는 것이 좋습니다. Transit Gateway를 사용하여 VPC 간 연결을 구현하고 Transit Gateway 피어링을 통해 VPC 간 라우팅을 구성하는 것이 더 효율적입니다. 또한 IPv4와 IPv6를 모두 지원하는 Site-to-Site VPN 연결을 구성하여 요구 사항을 충족할 수 있습니다."
    },
    {
        "num": 119,
        "question": "A network engineer is working on a private DNS design to integrate AWS workloads and on-premises resources. The AWS deployment consists of\nfive VPCs in the eu-west-1 Region that connect to the on-premises network over AWS Direct Connect. The VPCs communicate with each other by\nusing a transit gateway. Each VPC is associated with a private hosted zone that uses the aws.example.internal domain. The network engineer\ncreates an Amazon Route 53 Resolver outbound endpoint in a shared services VPC and attaches the shared services VPC to the transit gateway.\nThe network engineer is implementing a solution for DNS resolution. Queries for hostnames that end with aws.example.internal must use the\nprivate hosted zone. Queries for hostnames that end with all other domains must be forwarded to a private on-premises DNS resolver.\nWhich solution will meet these requirements?",
        "options": [
            "A. Add a forwarding rule for “*” that targets the on-premises server's DNS IP address. Add a system rule for aws.example.internal that targets\nRoute 53 Resolver.",
            "B. Add a forwarding rule for aws.example.internal that targets Route 53 Resolver. Add a system rule for “.” that targets the Route 53 Resolver\noutbound endpoint.",
            "C. Add a forwarding rule for “*” that targets the Route 53 Resolver outbound endpoint.",
            "D. Add a forwarding rule for “.” that targets the Route 53 Resolver outbound endpoint."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (73%) B (22%) 4%",
        "question_ko": "네트워크 엔지니어는 AWS 워크로드와 온프레미스 리소스 간 통합을 위한 프라이빗 DNS 설계 작업을 수행하고 있습니다. AWS 배포에는 eu-west-1 리전의 5개 VPC가 포함되어 있으며, AWS Direct Connect를 통해 온프레미스 네트워크에 연결됩니다. VPC 간 통신은 Transit Gateway를 사용합니다. 각 VPC는 aws.example.internal 도메인을 사용하는 프라이빗 호스팅 영역과 연결되어 있습니다. 엔지니어는 공유 서비스 VPC에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성하고 이를 Transit Gateway에 연결합니다. 엔지니어는 DNS 확인 솔루션을 구현하고 있습니다. aws.example.internal로 끝나는 호스트 이름에 대한 쿼리는 프라이빗 호스팅 영역을 사용해야 하며, 다른 도메인에 대한 쿼리는 온프레미스 프라이빗 DNS 리졸버로 전달해야 합니다.",
        "options_ko": [
            "A. \"*\"에 대한 전달 규칙을 추가하여 온프레미스 서버의 DNS IP 주소를 대상으로 지정합니다. aws.example.internal에 대한 시스템 규칙을 추가하여 Route 53 Resolver를 대상으로 지정합니다.",
            "B. aws.example.internal에 대한 전달 규칙을 추가하여 Route 53 Resolver를 대상으로 지정합니다. \".\"에 대한 시스템 규칙을 추가하여 Route 53 Resolver 아웃바운드 엔드포인트를 대상으로 지정합니다.",
            "C. \"*\"에 대한 전달 규칙을 추가하여 Route 53 Resolver 아웃바운드 엔드포인트를 대상으로 지정합니다.",
            "D. \".\"에 대한 전달 규칙을 추가하여 Route 53 Resolver 아웃바운드 엔드포인트를 대상으로 지정합니다."
        ],
        "explanation_ko": "D (73%)를 선택하는 것이 좋습니다. \".\"에 대한 전달 규칙을 추가하여 Route 53 Resolver 아웃바운드 엔드포인트를 대상으로 지정하면 aws.example.internal 도메인에 대한 쿼리를 프라이빗 호스팅 영역으로 전달하고, 다른 도메인에 대한 쿼리를 온프레미스 DNS 리졸버로 전달할 수 있습니다."
    },
    {
        "num": 120,
        "question": "A global film production company uses the AWS Cloud to encode and store its video content before distribution. The company's three global\noffices are connected to the us-east-1 Region through AWS Site-to-Site VPN links that terminate on a transit gateway with BGP routing activated.\nThe company recently started to produce content at a higher resolution to support 8K streaming. The size of the content files has increased to\nthree times the size of the content files from the previous format. Uploads of files to Amazon EC2 instances are taking 10 times longer than they\ndid with the previous format.\nWhich actions should a network engineer recommend to reduce the upload times? (Choose two.)",
        "options": [
            "A. Create a second VPN tunnel from each office location to the transit gateway. Activate equal-cost multi-path (ECMP) routing.",
            "B. Modify the transit gateway to activate Jumbo MTU on the VPN tunnels to each office location.",
            "C. Replace the existing VPN tunnels with new tunnels that have acceleration activated.",
            "D. Upgrade each EC2 instance to a modern instance type. Activate Jumbo MTU in the operating system.",
            "E. Replace the existing VPN tunnels with new tunnels that have IGMP activated."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AC (87%) 13%",
        "question_ko": "글로벌 영화 제작 회사는 AWS 클라우드를 사용하여 비디오 콘텐츠를 인코딩하고 저장한 후 배포합니다. 회사의 3개 글로벌 사무소는 BGP 라우팅이 활성화된 Transit Gateway에 종료되는 AWS Site-to-Site VPN 링크를 통해 us-east-1 리전에 연결되어 있습니다. 회사는 최근 8K 스트리밍을 지원하기 위해 더 높은 해상도의 콘텐츠를 제작하기 시작했습니다. 콘텐츠 파일의 크기가 이전 형식보다 3배 증가했습니다. Amazon EC2 인스턴스에 파일을 업로드하는 데 걸리는 시간이 이전 형식보다 10배 늘어났습니다. 네트워크 엔지니어가 업로드 시간을 줄이기 위해 추천할 두 가지 조치는 무엇입니까?",
        "options_ko": [
            "A. 각 사무소 위치에서 Transit Gateway로 두 번째 VPN 터널을 생성하고 ECMP(Equal-Cost Multi-Path) 라우팅을 활성화합니다.",
            "B. Transit Gateway에서 VPN 터널의 Jumbo MTU를 활성화합니다.",
            "C. 기존 VPN 터널을 가속이 활성화된 새 터널로 교체합니다.",
            "D. 각 EC2 인스턴스를 최신 인스턴스 유형으로 업그레이드하고 운영 체제에서 Jumbo MTU를 활성화합니다.",
            "E. 기존 VPN 터널을 IGMP가 활성화된 새 터널로 교체합니다."
        ],
        "explanation_ko": "AC (87%)를 선택하는 것이 좋습니다. 두 번째 VPN 터널을 추가하고 ECMP 라우팅을 활성화하여 더 높은 대역폭을 제공하고, VPN 터널의 Jumbo MTU를 활성화하여 데이터 처리 효율을 높이는 것이 업로드 시간을 줄이는 데 도움이 될 것입니다."
    },
    {
        "num": 121,
        "question": "An application team for a startup company is deploying a new multi-tier application into the AWS Cloud. The application will be hosted on a fleet\nof Amazon EC2 instances that run in an Auto Scaling group behind a publicly accessible Network Load Balancer (NLB). The application requires\nthe clients to work with UDP traffic and TCP traffic.\nIn the near term, the application will serve only users within the same geographic location. The application team plans to extend the application to\na global audience and will move the deployment to multiple AWS Regions around the world to bring the application closer to the end users. The\napplication team wants to use the new Regions to deploy new versions of the application and wants to be able to control the amount of traffic that\neach Region receives during these rollouts. In addition, the application team must minimize first-byte latency and jitter (randomized delay) for the\nend users.\nHow should the application team design the network architecture for the application to meet these requirements?",
        "options": [
            "A. Create an Amazon CloudFront distribution to align to each Regional deployment. Set the NLB for each Region as the origin for each\nCloudFront distribution. Use an Amazon Route 53 weighted routing policy to control traffic to the newer Regional deployments.",
            "B. Create an AWS Global Accelerator accelerator and listeners for the required ports. Configure endpoint groups for each Region. Configure a\ntraffic dial for the endpoint groups to control traffic to the newer Regional deployments. Register the NLBs with the endpoint groups.",
            "C. Use Amazon S3 Transfer Acceleration for the application in each Region. Adjust the amount of traffic that each Region receives from the\nTransfer Acceleration endpoints to the Regional NLBs.",
            "D. Create an Amazon CloudFront distribution that includes an origin group. Set the NLB for each Region as the origins for the origin group. Use\nan Amazon Route 53 latency routing policy to control traffic to the new Regional deployments."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "새로운 다단계 애플리케이션을 AWS 클라우드에 배포하려는 스타트업 회사 애플리케이션 팀이 있습니다. 애플리케이션은 공개적으로 액세스 가능한 Network Load Balancer(NLB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 호스팅됩니다. 애플리케이션에는 클라이언트가 UDP 트래픽과 TCP 트래픽으로 작업해야 합니다. 단기적으로 애플리케이션은 동일한 지리적 위치의 사용자만 서비스할 것이지만, 향후 글로벌 대상으로 확장하고 최종 사용자에게 더 가까운 AWS 리전에 배포할 계획입니다. 애플리케이션 팀은 새로운 리전에 애플리케이션의 새 버전을 배포하고 배포 중 각 리전으로 전송되는 트래픽 양을 제어하고자 합니다. 또한 최종 사용자에 대한 첫 바이트 대기 시간과 지터(랜덤 지연)를 최소화해야 합니다.",
        "options_ko": [
            "A. 각 리전별 배포를 지원하는 Amazon CloudFront 배포판을 생성합니다. 각 리전의 NLB를 각 CloudFront 배포판의 오리진으로 설정합니다. Amazon Route 53 가중치 라우팅 정책을 사용하여 새로운 리전별 배포로의 트래픽을 제어합니다.",
            "B. AWS Global Accelerator 가속기와 필요한 포트에 대한 리스너를 생성합니다. 각 리전에 대한 엔드포인트 그룹을 구성합니다. 엔드포인트 그룹에 대한 트래픽 다이얼을 구성하여 새로운 리전별 배포로의 트래픽을 제어합니다. NLB를 엔드포인트 그룹에 등록합니다.",
            "C. 각 리전의 애플리케이션에 Amazon S3 Transfer Acceleration을 사용합니다. Transfer Acceleration 엔드포인트에서 각 리전의 NLB로 전송되는 트래픽 양을 조정합니다.",
            "D. 오리진 그룹을 포함하는 Amazon CloudFront 배포판을 생성합니다. 각 리전의 NLB를 오리진 그룹의 오리진으로 설정합니다. Amazon Route 53 지연 시간 라우팅 정책을 사용하여 새로운 리전별 배포로의 트래픽을 제어합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 122,
        "question": "A company is deploying a new stateless web application on AWS. The web application will run on Amazon EC2 instances in private subnets\nbehind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The web application has a stateful management application\nfor administration that will run on EC2 instances that are in a separate Auto Scaling group.\nThe company wants to access the management application by using the same URL as the web application, with a path prefix of/management. The\nprotocol, hostname, and port number must be the same for the web application and the management application. Access to the management\napplication must be restricted to the company's on-premises IP address space. An SSL/TLS certificate from AWS Certificate Manager (ACM) will\nprotect the web application.\nWhich combination of steps should a network engineer take to meet these requirements? (Choose two.)",
        "options": [
            "A. Insert a rule for the load balancer HTTPS listener. Configure the rule to check the path-pattern condition type for the /management prefix\nand to check the source-ip condition type for the on-premises IP address space. Forward requests to the management application target\ngroup if there is a match. Edit the management application target group and enable stickiness.",
            "B. Modify the default rule for the load balancer HTTPS listener. Configure the rule to check the path-pattern condition type for the\n/management prefix and to check the source-ip condition type for the on-premises IP address space. Forward requests to the management\napplication target group if there is not a match. Enable group-level stickiness in the rule attributes.",
            "C. Insert a rule for the load balancer HTTPS listener. Configure the rule to check the path-pattern condition type for the /management prefix\nand to check the X-Forwarded-For HTTP header for the on-premises IP address space. Forward requests to the management application target\ngroup if there is a match. Enable group-level stickiness in the rule attributes.",
            "D. Modify the default rule for the load balancer HTTPS listener. Configure the rule to check the path-pattern condition type for the\n/management prefix and to check the source-ip condition type for the on-premises IP address space. Forward requests to the web application\ntarget group if there is not a match.",
            "E. Forward all requests to the web application target group. Edit the web application target group and disable stickiness."
        ],
        "answers": [
            "A",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AE (75%) AD (23%)",
        "question_ko": "회사가 새로운 상태 비저장 웹 애플리케이션을 AWS에 배포하고 있습니다. 웹 애플리케이션은 Application Load Balancer 뒤에 있는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. 웹 애플리케이션에는 관리를 위한 상태 저장 관리 애플리케이션도 있으며, 이는 별도의 Auto Scaling 그룹에 있는 EC2 인스턴스에서 실행됩니다. 회사는 웹 애플리케이션과 동일한 URL에 /management 경로 접두사를 사용하여 관리 애플리케이션에 액세스하려고 합니다. 프로토콜, 호스트 이름 및 포트 번호는 웹 애플리케이션과 관리 애플리케이션에 동일해야 합니다. 관리 애플리케이션에 대한 액세스는 회사의 온프레미스 IP 주소 범위로 제한되어야 합니다. AWS Certificate Manager(ACM)의 SSL/TLS 인증서는 웹 애플리케이션을 보호합니다.",
        "options_ko": [
            "A. 로드 밸런서 HTTPS 리스너에 규칙을 삽입합니다. 규칙을 구성하여 /management 접두사에 대한 path-pattern 조건 유형과 온프레미스 IP 주소 범위에 대한 source-ip 조건 유형을 확인합니다. 일치하는 경우 관리 애플리케이션 대상 그룹으로 요청을 전달합니다. 관리 애플리케이션 대상 그룹을 편집하고 stickiness를 활성화합니다.",
            "B. 로드 밸런서 HTTPS 리스너의 기본 규칙을 수정합니다. 규칙을 구성하여 /management 접두사에 대한 path-pattern 조건 유형과 온프레미스 IP 주소 범위에 대한 source-ip 조건 유형을 확인합니다. 일치하지 않는 경우 관리 애플리케이션 대상 그룹으로 요청을 전달합니다. 규칙 특성에서 group-level stickiness를 활성화합니다.",
            "C. 로드 밸런서 HTTPS 리스너에 규칙을 삽입합니다. 규칙을 구성하여 /management 접두사에 대한 path-pattern 조건 유형과 온프레미스 IP 주소 범위에 대한 X-Forwarded-For HTTP 헤더를 확인합니다. 일치하는 경우 관리 애플리케이션 대상 그룹으로 요청을 전달합니다. 규칙 특성에서 group-level stickiness를 활성화합니다.",
            "D. 로드 밸런서 HTTPS 리스너의 기본 규칙을 수정합니다. 규칙을 구성하여 /management 접두사에 대한 path-pattern 조건 유형과 온프레미스 IP 주소 범위에 대한 source-ip 조건 유형을 확인합니다. 일치하지 않는 경우 웹 애플리케이션 대상 그룹으로 요청을 전달합니다.",
            "E. 모든 요청을 웹 애플리케이션 대상 그룹으로 전달합니다. 웹 애플리케이션 대상 그룹을 편집하고 stickiness를 비활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AE (75%) AD (23%)"
    },
    {
        "num": 123,
        "question": "A company deploys a software solution on Amazon EC2 instances that are in a cluster placement group. The solution's UI is a single HTML page.\nThe HTML file size is 1,024 bytes. The software processes files that exceed 1,024 MB in size. The software shares files over the network to clients\nupon request. The files are shared with the Don't Fragment flag set. Elastic network interfaces of the EC2 instances are set up with jumbo frames.\nThe UI is always accessible from all allowed source IP addresses, regardless of whether the source IP addresses are within a VPC, on the internet,\nor on premises. However, clients sometimes do not receive files that they request because the files fail to travel successfully from the software to\nthe clients.\nWhich options provide a possible root cause of these failures? (Choose two.)",
        "options": [
            "A. The source IP addresses are from on-premises hosts that are routed over AWS Direct Connect.",
            "B. The source IP addresses are from on-premises hosts that are routed over AWS Site-to-Site VPN.",
            "C. The source IP addresses are from hosts that connect over the public internet.",
            "D. The security group of the EC2 instances does not allow ICMP traffic.",
            "E. The operating system of the EC2 instances does not support jumbo frames."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (88%) 12%",
        "question_ko": "회사가 클러스터 배치 그룹의 Amazon EC2 인스턴스에서 소프트웨어 솔루션을 배포했습니다. 솔루션의 UI는 단일 HTML 페이지입니다. HTML 파일 크기는 1,024바이트입니다. 소프트웨어는 1,024MB를 초과하는 파일을 처리합니다. 소프트웨어는 요청에 따라 클라이언트와 파일을 공유합니다. 파일은 Don't Fragment 플래그가 설정된 상태로 공유됩니다. EC2 인스턴스의 탄력적 네트워크 인터페이스는 점보 프레임으로 설정되어 있습니다. UI는 VPC, 인터넷 또는 온프레미스 여부와 관계없이 허용된 모든 소스 IP 주소에서 항상 액세스할 수 있습니다. 그러나 때때로 클라이언트가 요청한 파일을 수신하지 못하는 이유는 소프트웨어에서 클라이언트로 파일이 성공적으로 전송되지 않기 때문입니다.",
        "options_ko": [
            "A. 소스 IP 주소가 AWS Direct Connect를 통해 라우팅되는 온프레미스 호스트에 해당합니다.",
            "B. 소스 IP 주소가 AWS Site-to-Site VPN을 통해 라우팅되는 온프레미스 호스트에 해당합니다.",
            "C. 소스 IP 주소가 공개 인터넷을 통해 연결되는 호스트에 해당합니다.",
            "D. EC2 인스턴스의 보안 그룹이 ICMP 트래픽을 허용하지 않습니다.",
            "E. EC2 인스턴스의 운영 체제가 점보 프레임을 지원하지 않습니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (88%) 12%"
    },
    {
        "num": 124,
        "question": "A company has users who work from home. The company wants to move these users to Amazon WorkSpaces for additional security visibility.\nThe company has deployed WorkSpaces in its own AWS account in VPC A. A network engineer decides to provide the security visibility by using\ntwo firewall appliances behind a Gateway Load Balancer (GWLB). The network engineer provisions another VPC, VPC B, in a separate account and\ndeploys the two firewall appliances in separate Availability Zones.\nWhat should the network engineer do to configure the network connectivity for this solution?",
        "options": [
            "A. Create a GWLB in VPC A with the firewall appliance instances as targets. Use the GWLB to create a GWLB endpoint. Add the AWS principal\nARN of the WorkSpaces account to the principal allow list of the GWLB endpoint. In the WorkSpaces account, create a VPC endpoint and\nspecify the service name that the AWS Management Console provides for the GWLB endpoint. Modify the route tables of VPC A to point the\ndefault route to the VPC endpoint.",
            "B. Create a GWLB in VPC B with the firewall appliance instances as targets. Use the GWLB to create a GWLB endpoint. Add the AWS principal\nARN of the WorkSpaces account to the principal allow list of the GWLB endpoint. In the WorkSpaces account, create a VPC endpoint and\nspecify the service name that the AWS Management Console provides for the GWLB endpoint. Modify the route tables of VPC A to point the\ndefault route to the GWLB endpoint.",
            "C. Create a GWLB in VPC B with the firewall appliance instances as targets. Use the GWLB to create a GWLB endpoint. Add the AWS principal\nARN of the WorkSpaces account to the principal allow list of the GWLB endpoint. In the WorkSpaces account, create a VPC endpoint and\nspecify the service name that the AWS Management Console provides for the GWLB endpoint. Modify the route tables of VPC A to point the\nWorkSpaces subnet to the VPC endpoint.",
            "D. Create a GWLB in VPC B with the firewall appliance instances as targets. Use the GWLB to create a GWLB endpoint. Add the AWS principal\nARN of the account that contains the firewall appliances to the principal allow list of the GWLB endpoint. In the WorkSpaces account, create a\nVPC endpoint and specify the service name that the AWS Management Console provides for the GWLB endpoint. Modify the route tables of\nVPC A to point the default route to the VPC endpoint."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (55%) C (45%)",
        "question_ko": "회사에는 재택근무 중인 사용자가 있습니다. 회사는 이 사용자들을 Amazon WorkSpaces로 이전하여 추가적인 보안 가시성을 확보하려고 합니다. 회사는 자체 AWS 계정의 VPC A에 WorkSpaces를 배포했습니다. 네트워크 엔지니어는 Gateway Load Balancer(GWLB) 뒤의 두 개의 방화벽 어플라이언스를 사용하여 보안 가시성을 제공하기로 결정했습니다. 네트워크 엔지니어는 별도의 계정에서 또 다른 VPC, VPC B를 프로비저닝하고 두 개의 방화벽 어플라이언스를 별도의 가용 영역에 배포했습니다.",
        "options_ko": [
            "A. VPC A에 GWLB를 생성하고 방화벽 어플라이언스 인스턴스를 대상으로 지정합니다. GWLB를 사용하여 GWLB 엔드포인트를 생성합니다. WorkSpaces 계정의 AWS 주체 ARN을 GWLB 엔드포인트의 principal allow list에 추가합니다. WorkSpaces 계정에서 VPC 엔드포인트를 생성하고 GWLB 엔드포인트의 서비스 이름을 지정합니다. VPC A의 라우팅 테이블을 수정하여 기본 경로를 VPC 엔드포인트로 지정합니다.",
            "B. VPC B에 GWLB를 생성하고 방화벽 어플라이언스 인스턴스를 대상으로 지정합니다. GWLB를 사용하여 GWLB 엔드포인트를 생성합니다. WorkSpaces 계정의 AWS 주체 ARN을 GWLB 엔드포인트의 principal allow list에 추가합니다. WorkSpaces 계정에서 VPC 엔드포인트를 생성하고 GWLB 엔드포인트의 서비스 이름을 지정합니다. VPC A의 라우팅 테이블을 수정하여 기본 경로를 GWLB 엔드포인트로 지정합니다.",
            "C. VPC B에 GWLB를 생성하고 방화벽 어플라이언스 인스턴스를 대상으로 지정합니다. GWLB를 사용하여 GWLB 엔드포인트를 생성합니다. WorkSpaces 계정의 AWS 주체 ARN을 GWLB 엔드포인트의 principal allow list에 추가합니다. WorkSpaces 계정에서 VPC 엔드포인트를 생성하고 GWLB 엔드포인트의 서비스 이름을 지정합니다. VPC A의 라우팅 테이블을 수정하여 WorkSpaces 서브넷을 VPC 엔드포인트로 지정합니다.",
            "D. VPC B에 GWLB를 생성하고 방화벽 어플라이언스 인스턴스를 대상으로 지정합니다. GWLB를 사용하여 GWLB 엔드포인트를 생성합니다. 방화벽 어플라이언스가 포함된 계정의 AWS 주체 ARN을 GWLB 엔드포인트의 principal allow list에 추가합니다. WorkSpaces 계정에서 VPC 엔드포인트를 생성하고 GWLB 엔드포인트의 서비스 이름을 지정합니다. VPC A의 라우팅 테이블을 수정하여 기본 경로를 VPC 엔드포인트로 지정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (55%) C (45%)"
    },
    {
        "num": 125,
        "question": "A company plans to run a computationally intensive data processing application on AWS. The data is highly sensitive. The VPC must have no\ndirect internet access, and the company has applied strict network security to control access.\nData scientists will transfer data from the company's on-premises data center to the instances by using an AWS Site-to-Site VPN connection. The\non-premises data center uses the network range 172.31.0.0/20 and will use the network range 172.31.16.0/20 in the application VPC.\nThe data scientists report that they can start new instances of the application but that they cannot transfer any data from the on-premises data\ncenter. A network engineer enables VPC flow logs and sends a ping to one of the instances to test reachability. The flow logs show the following:\nThe network engineer must recommend a solution that will give the data scientists the ability to transfer data from the on-premises data center.\nWhich solution will meet these requirements?",
        "options": [
            "A. Modify the security group for the application. Add an inbound rule to allow traffic from the on-premises data center network range to the\napplication.",
            "B. Modify the network ACLs for the VPC subnet. Add an inbound rule to allow traffic from the on-premises data center network range to the\nVPC subnet range.",
            "C. Modify the network ACLs for the VPC subnet. Add an outbound rule to allow traffic from the VPC subnet range to the on-premises data\ncenter network range.",
            "D. Modify the security group for the application. Add an outbound rule to allow traffic from the application to the on-premises data center\nnetwork range."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 AWS에서 계산 집약적인 데이터 처리 애플리케이션을 실행할 계획입니다. 데이터는 매우 중요합니다. VPC에는 인터넷 직접 액세스가 없어야 하며, 회사는 액세스를 제어하기 위해 엄격한 네트워크 보안을 적용했습니다. 데이터 과학자는 AWS Site-to-Site VPN 연결을 사용하여 회사의 온프레미스 데이터 센터에서 인스턴스로 데이터를 전송합니다. 온프레미스 데이터 센터는 172.31.0.0/20 네트워크 범위를 사용하며, 애플리케이션 VPC에서는 172.31.16.0/20 네트워크 범위를 사용합니다. 데이터 과학자는 애플리케이션의 새 인스턴스를 시작할 수 있지만 온프레미스 데이터 센터에서 데이터를 전송할 수 없다고 보고했습니다. 네트워크 엔지니어가 VPC 흐름 로그를 활성화하고 인스턴스에 ping을 보내 연결성을 테스트했습니다. 흐름 로그에 다음 내용이 표시됩니다. 네트워크 엔지니어는 데이터 과학자가 온프레미스 데이터 센터에서 데이터를 전송할 수 있도록 하는 해결책을 추천해야 합니다.",
        "options_ko": [
            "A. 애플리케이션의 보안 그룹을 수정합니다. 인바운드 규칙을 추가하여 온프레미스 데이터 센터 네트워크 범위에서 애플리케이션으로의 트래픽을 허용합니다.",
            "B. VPC 서브넷의 네트워크 ACL을 수정합니다. 인바운드 규칙을 추가하여 온프레미스 데이터 센터 네트워크 범위에서 VPC 서브넷 범위로의 트래픽을 허용합니다.",
            "C. VPC 서브넷의 네트워크 ACL을 수정합니다. 아웃바운드 규칙을 추가하여 VPC 서브넷 범위에서 온프레미스 데이터 센터 네트워크 범위로의 트래픽을 허용합니다.",
            "D. 애플리케이션의 보안 그룹을 수정합니다. 아웃바운드 규칙을 추가하여 애플리케이션에서 온프레미스 데이터 센터 네트워크 범위로의 트래픽을 허용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 126,
        "question": "A company needs to temporarily scale out capacity for an on-premises application and wants to deploy new servers on Amazon EC2 instances. A\nnetwork engineer must design the networking solution for the connectivity and for the application on AWS.\nThe EC2 instances need to share data with the existing servers in the on-premises data center. The servers must not be accessible from the\ninternet. All traffic to the internet must route through the firewall in the on-premises data center. The servers must be able to access a third-party\nweb application.\nWhich configuration will meet these requirements?",
        "options": [
            "A. Create a VPC that has public subnets and private subnets. Create a customer gateway, a virtual private gateway, and an AWS Site-to-Site\nVPN connection. Create a NAT gateway in a public subnet. Create a route table, and associate the public subnets with the route table. Add a\ndefault route to the internet gateway. Create a route table, and associate the private subnets with the route table. Add a default route to the\nNAT gateway. Add routes for the data center subnets to the virtual private gateway. Deploy the application to the private subnets.",
            "B. Create a VPC that has private subnets. Create a customer gateway, a virtual private gateway, and an AWS Site-to-Site VPN connection.\nCreate a route table, and associate the private subnets with the route table. Add a default route to the virtual private gateway. Deploy the\napplication to the private subnets.",
            "C. Create a VPC that has public subnets. Create a customer gateway, a virtual private gateway, and an AWS Site-to-Site VPN connection.\nCreate a route table, and associate the public subnets with the route table. Add a default route to the internet gateway. Add routes for the on-\npremises data center subnets to the virtual private gateway. Deploy the application to the public subnets.",
            "D. Create a VPC that has public subnets and private subnets. Create a customer gateway, a virtual private gateway, and an AWS Site-to-Site\nVPN connection. Create a route table, and associate the public subnets with the route table. Add a default route to the internet gateway.\nCreate a route table, and associate the private subnets with the route table. Add routes for the on-premises data center subnets to the virtual\nprivate gateway. Deploy the application to the private subnets."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (89%) 11%",
        "question_ko": "회사에서 온프레미스 애플리케이션의 용량을 일시적으로 확장하고 싶고, Amazon EC2 인스턴스에 새로운 서버를 배포하려고 합니다. 네트워크 엔지니어는 AWS의 연결성과 애플리케이션을 위한 네트워킹 솔루션을 설계해야 합니다.\nEC2 인스턴스는 온프레미스 데이터 센터의 기존 서버와 데이터를 공유해야 합니다. 서버는 인터넷에서 접근 가능해서는 안 됩니다. 인터넷에 대한 모든 트래픽은 온프레미스 데이터 센터의 방화벽을 통해 라우팅되어야 합니다. 서버는 타사 웹 애플리케이션에 액세스할 수 있어야 합니다.\n이 요구 사항을 충족하는 구성은 무엇입니까?",
        "options_ko": [
            "A. 공용 서브넷과 프라이빗 서브넷이 있는 VPC를 생성합니다. 고객 게이트웨이, 가상 사설 게이트웨이, AWS Site-to-Site VPN 연결을 생성합니다. 공용 서브넷에 NAT 게이트웨이를 생성합니다. 라우팅 테이블을 생성하고 공용 서브넷을 연결합니다. 인터넷 게이트웨이로 기본 경로를 추가합니다. 프라이빗 서브넷을 라우팅 테이블에 연결합니다. NAT 게이트웨이로 기본 경로를 추가합니다. 데이터 센터 서브넷에 대한 경로를 가상 사설 게이트웨이에 추가합니다. 애플리케이션을 프라이빗 서브넷에 배포합니다.",
            "B. 프라이빗 서브넷이 있는 VPC를 생성합니다. 고객 게이트웨이, 가상 사설 게이트웨이, AWS Site-to-Site VPN 연결을 생성합니다. 프라이빗 서브넷을 라우팅 테이블에 연결합니다. 가상 사설 게이트웨이로 기본 경로를 추가합니다. 애플리케이션을 프라이빗 서브넷에 배포합니다.",
            "C. 공용 서브넷이 있는 VPC를 생성합니다. 고객 게이트웨이, 가상 사설 게이트웨이, AWS Site-to-Site VPN 연결을 생성합니다. 공용 서브넷을 라우팅 테이블에 연결합니다. 인터넷 게이트웨이로 기본 경로를 추가합니다. 온프레미스 데이터 센터 서브넷에 대한 경로를 가상 사설 게이트웨이에 추가합니다. 애플리케이션을 공용 서브넷에 배포합니다.",
            "D. 공용 서브넷과 프라이빗 서브넷이 있는 VPC를 생성합니다. 고객 게이트웨이, 가상 사설 게이트웨이, AWS Site-to-Site VPN 연결을 생성합니다. 공용 서브넷을 라우팅 테이블에 연결합니다. 인터넷 게이트웨이로 기본 경로를 추가합니다. 프라이빗 서브넷을 라우팅 테이블에 연결합니다. 온프레미스 데이터 센터 서브넷에 대한 경로를 가상 사설 게이트웨이에 추가합니다. 애플리케이션을 프라이빗 서브넷에 배포합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (89%) 11%"
    },
    {
        "num": 127,
        "question": "A company is deploying a web application into two AWS Regions. The company has one VPC in each Region. Each VPC has three Amazon EC2\ninstances as web servers behind an Application Load Balancer (ALB). The company already has configured an Amazon Route 53 public hosted\nzone for example.com. Users will access the application by using the fully qualified domain name (FQDN) of app.example.com.\nThe company needs a DNS solution that allows global users to access the application. The solution must route the users' requests to the Region\nthat provides the lowest response time. The solution must fail over to the Region that provides the next-lowest response time if the application is\nunavailable in the initially intended Region.\nWhich solution will meet these requirements?",
        "options": [
            "A. For each ALB, create an A record that has a geolocation routing policy to route app.example.com to the IP addresses of the ALB. Configure\na Route 53 HTTP health check that monitors each ALB by IP address. Associate the health check with the A records.",
            "B. Create an A record that has a geolocation routing policy to route app.example.com to the IP addresses for both ALBs. Configure a Route 53\nhealth check that monitors TCP port 80 for each ALB by IP address. Associate the health check with the A records.",
            "C. Create an A record that has a latency-based routing policy to route app.example.com as an alias to one of the ALBs. Configure a Route 53\nhealth check that monitors TCP port 80 for each ALB by IP address. Associate the health check with the A records.",
            "D. For each ALB, create an A record that has a latency-based routing policy to route app.example.com as an alias to the ALB. Set the value for\nEvaluate Target Health to Yes for the records."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 두 개의 AWS 리전에 웹 애플리케이션을 배포하고 있습니다. 회사는 각 리전에 하나의 VPC를 가지고 있습니다. 각 VPC에는 Application Load Balancer(ALB) 뒤에 있는 3개의 Amazon EC2 인스턴스가 웹 서버로 구성되어 있습니다. 회사는 이미 example.com에 대한 Amazon Route 53 공용 호스팅 영역을 구성했습니다. 사용자는 app.example.com의 정규화된 도메인 이름을 사용하여 애플리케이션에 액세스할 것입니다.\n회사는 전 세계 사용자가 애플리케이션에 액세스할 수 있는 DNS 솔루션이 필요합니다. 이 솔루션은 사용자의 요청을 응답 시간이 가장 짧은 리전으로 라우팅해야 합니다. 해당 리전에서 애플리케이션을 사용할 수 없는 경우 다음으로 응답 시간이 짧은 리전으로 장애 조치되어야 합니다.\n이 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 ALB에 대해 지리적 위치 기반 라우팅 정책을 가진 A 레코드를 생성하여 app.example.com을 ALB의 IP 주소로 라우팅합니다. IP 주소로 각 ALB를 모니터링하는 Route 53 HTTP 상태 검사를 구성하고 상태 검사를 A 레코드와 연결합니다.",
            "B. 지리적 위치 기반 라우팅 정책을 가진 A 레코드를 생성하여 app.example.com을 두 ALB의 IP 주소로 라우팅합니다. IP 주소로 각 ALB의 TCP 포트 80을 모니터링하는 Route 53 상태 검사를 구성하고 상태 검사를 A 레코드와 연결합니다.",
            "C. 지연 시간 기반 라우팅 정책을 가진 A 레코드를 생성하여 app.example.com을 한 ALB로 별칭 지정합니다. IP 주소로 각 ALB의 TCP 포트 80을 모니터링하는 Route 53 상태 검사를 구성하고 상태 검사를 A 레코드와 연결합니다.",
            "D. 각 ALB에 대해 지연 시간 기반 라우팅 정책을 가진 A 레코드를 생성하여 app.example.com을 ALB로 별칭 지정합니다. 레코드에 대해 대상 상태 평가 기능을 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 128,
        "question": "A consulting company manages AWS accounts for its customers. One of the company's customers needs to add intrusion prevention for its\nenvironment without having to re-architect the environment. The customer's environment includes five VPCs in two AWS Regions in the United\nStates. VPC-to-VPC connectivity is achieved through VPC peering. The customer does not plan to increase the number of VPCs within the next 2\nyears. The solution must accommodate unencrypted traffic.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure VPC security groups and network ACLs.",
            "B. Use an AWS Network Firewall centralized deployment model in each VPC.",
            "C. Use an AWS Network Firewall distributed deployment model in each VPC.",
            "D. Deploy AWS Shield in each VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (88%) 12%",
        "question_ko": "컨설팅 회사는 고객의 AWS 계정을 관리하고 있습니다. 고객 중 한 곳에서는 환경을 재구축하지 않고도 침입 방지 기능을 추가해야 합니다. 고객의 환경에는 미국 내 두 AWS 리전에 걸친 5개의 VPC가 포함되어 있습니다. VPC 간 연결은 VPC 피어링을 통해 달성됩니다. 고객은 향후 2년 내 VPC 수를 늘릴 계획이 없습니다. 이 솔루션은 암호화되지 않은 트래픽을 수용해야 합니다.\n이 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC 보안 그룹과 네트워크 ACL을 구성합니다.",
            "B. 각 VPC에 AWS Network Firewall의 집중형 배포 모델을 사용합니다.",
            "C. 각 VPC에 AWS Network Firewall의 분산형 배포 모델을 사용합니다.",
            "D. 각 VPC에 AWS Shield를 배포합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (88%) 12%"
    },
    {
        "num": 129,
        "question": "A company hosts its IT infrastructure in an on-premises data center. The company wants to migrate the infrastructure to the AWS Cloud in phases.\nA network engineer wants to set up a 10 Gbps AWS Direct Connect dedicated connection between the on-premises data center and VPCs. The\ncompany's network provider needs 3 months to provision the Direct Connect connection.\nIn the meantime, the network engineer implements a temporary solution by deploying an AWS Site-to-Site VPN connection that terminates to a\nvirtual private gateway. The network engineer observes that the bandwidth of the Site-to-Site VPN connection is capped at 1.25 Gbps despite a\npowerful customer gateway device.\nWhat should the network engineer do to improve the VPN connection bandwidth before the implementation of the Direct Connect connection?",
        "options": [
            "A. Contact AWS Support to request a bandwidth quota increase for the existing Site-to-Site VPN connection.",
            "B. Discuss the issue with the hardware vendor. Buy a bigger and more powerful customer gateway device that has faster encryption and\ndecryption capabilities.",
            "C. Create several additional Site-to-Site VPN connections that terminate on the same virtual gateway. Configure equal-cost multi-path (ECMP)\nrouting to use all the VPN connections simultaneously.",
            "D. Create a transit gateway. Attach the VPCs to the transit gateway. Create several additional Site-to-Site VPN connections that terminate on\nthe transit gateway. Configure equal-cost multi-path (ECMP) routing to use all the VPN connections simultaneously."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 온프레미스 데이터 센터에 IT 인프라를 호스팅하고 있습니다. 회사는 단계적으로 인프라를 AWS 클라우드로 마이그레이션하려고 합니다.\n네트워크 엔지니어는 온프레미스 데이터 센터와 VPC 간에 10 Gbps AWS Direct Connect 전용 연결을 설정하려고 합니다. 회사의 네트워크 공급업체는 Direct Connect 연결을 프로비저닝하는 데 3개월이 소요됩니다.\n그 동안 네트워크 엔지니어는 가상 사설 게이트웨이에 종료되는 AWS Site-to-Site VPN 연결을 배포하는 임시 솔루션을 구현했습니다. 네트워크 엔지니어는 Site-to-Site VPN 연결의 대역폭이 강력한 고객 게이트웨이 장치에도 불구하고 1.25 Gbps로 제한되는 것을 관찰했습니다.\nDirect Connect 구현 전에 네트워크 엔지니어가 VPN 연결 대역폭을 향상시키려면 어떻게 해야 합니까?",
        "options_ko": [
            "A. AWS Support에 연락하여 기존 Site-to-Site VPN 연결의 대역폭 할당량 증가를 요청합니다.",
            "B. 하드웨어 공급업체와 문제를 상의합니다. 암호화 및 복호화 속도가 더 빠른 더 큰 고객 게이트웨이 장치를 구매합니다.",
            "C. 동일한 가상 게이트웨이에 종료되는 여러 개의 추가 Site-to-Site VPN 연결을 생성합니다. 다중 경로 등가 비용(ECMP) 라우팅을 구성하여 모든 VPN 연결을 동시에 사용합니다.",
            "D. 트랜짓 게이트웨이를 생성합니다. VPC를 트랜짓 게이트웨이에 연결합니다. 트랜짓 게이트웨이에 종료되는 여러 개의 추가 Site-to-Site VPN 연결을 생성합니다. 다중 경로 등가 비용(ECMP) 라우팅을 구성하여 모든 VPN 연결을 동시에 사용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 130,
        "question": "A company has business operations in the United States and in Europe. The company's public applications are running on AWS and use three\ntransit gateways. The transit gateways are located in the us-west-2, us-east-1, and eu-central-1 Regions. All the transit gateways are connected to\neach other in a full mesh configuration.\nThe company accidentally removes the route to the eu-central-1 VPCs from the us-west-2 transit gateway route table. The company also\naccidentally removes the route to the us-west-2 VPCs from the eu-central-1 transit gateway route table.\nHow can a network engineer identify the misconfiguration with the LEAST operational overhead?",
        "options": [
            "A. Use the Route Analyzer feature for AWS Transit Gateway Network Manager.",
            "B. Use the AWSSupport-SetupIPMonitoringFromVPC AWS Systems Manager Automation runbook. Push network telemetry data to Amazon\nCloudWatch Logs for analysis.",
            "C. Use VPC flow logs in eu-central-1 and us-west-2 to analyze the missing routes.",
            "D. Use Amazon VPC Traffic Mirroring in eu-central-1 or us-west-2 to take packet captures and troubleshoot the connectivity issues."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 미국과 유럽에서 비즈니스 운영을 하고 있습니다. 회사의 공개 애플리케이션은 AWS에서 실행되며 3개의 트랜짓 게이트웨이를 사용합니다. 트랜짓 게이트웨이는 us-west-2, us-east-1, eu-central-1 리전에 있습니다. 모든 트랜짓 게이트웨이는 완전 메시 구성으로 서로 연결되어 있습니다.\n회사는 실수로 us-west-2 트랜짓 게이트웨이 라우팅 테이블에서 eu-central-1 VPC로의 경로를 제거했습니다. 회사는 또한 실수로 eu-central-1 트랜짓 게이트웨이 라우팅 테이블에서 us-west-2 VPC로의 경로를 제거했습니다.\n네트워크 엔지니어가 이 구성 오류를 가장 적은 운영 오버헤드로 식별할 수 있는 방법은 무엇입니까?",
        "options_ko": [
            "A. AWS Transit Gateway Network Manager의 Route Analyzer 기능을 사용합니다.",
            "B. AWSSupport-SetupIPMonitoringFromVPC AWS Systems Manager Automation runbook을 사용합니다. 네트워크 텔레메트리 데이터를 Amazon CloudWatch Logs에 푸시하여 분석합니다.",
            "C. eu-central-1과 us-west-2의 VPC 흐름 로그를 사용하여 누락된 경로를 분석합니다.",
            "D. eu-central-1 또는 us-west-2에서 Amazon VPC Traffic Mirroring을 사용하여 패킷 캡처를 수행하고 연결성 문제를 해결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 131,
        "question": "A marketing company is using hybrid infrastructure through AWS Direct Connect links and a software-defined wide area network (SD-WAN) overlay\nto connect its branch offices. The company connects multiple VPCs to a third-party SD-WAN appliance transit VPC within the same account by\nusing AWS Site-to-Site VPNs.\nThe company is planning to connect more VPCs to the SD-WAN appliance transit VPC. However, the company faces challenges of scalability, route\ntable limitations, and higher costs with the existing architecture. A network engineer must design a solution to resolve these issues and remove\ndependencies.\nWhich solution will meet these requirements with the LEAST amount of operational overhead?",
        "options": [
            "A. Configure a transit gateway to attach the VPCs. Configure a Site-to-Site VPN connection between the transit gateway and the third-party SD-\nWAN appliance transit VPC. Use the SD-WAN overlay links to connect to the branch offices.",
            "B. Configure a transit gateway to attach the VPCs. Configure a transit gateway Connect attachment for the third-party SD-WAN appliance\ntransit VPC. Use transit gateway Connect native integration of SD-WAN virtual hubs with AWS Transit Gateway.",
            "C. Configure a transit gateway to attach the VPCs. Configure VPC peering between the VPCs and the third-party SD-WAN appliance transit\nVPUse the SD-WAN overlay links to connect to the branch offices.",
            "D. Configure VPC peering between the VPCs and the third-party SD-WAN appliance transit VPC. Use transit gateway Connect native integration\nof SD-WAN virtual hubs with AWS Transit Gateway."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "마케팅 회사는 AWS Direct Connect 링크와 소프트웨어 정의 광역 네트워크(SD-WAN) 오버레이를 통해 하이브리드 인프라를 사용하고 있습니다. 회사는 동일한 계정 내에서 여러 VPC를 AWS Site-to-Site VPN을 사용하여 타사 SD-WAN 어플라이언스 전송 VPC에 연결합니다.\n회사는 더 많은 VPC를 SD-WAN 어플라이언스 전송 VPC에 연결할 계획이지만, 기존 아키텍처의 확장성, 라우팅 테이블 제한 및 높은 비용 문제에 직면하고 있습니다. 네트워크 엔지니어는 이러한 문제를 해결하고 종속성을 제거할 솔루션을 설계해야 합니다.\n가장 적은 운영 오버헤드로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 전송 게이트웨이를 구성하여 VPC를 연결합니다. Site-to-Site VPN 연결을 구성하여 전송 게이트웨이와 타사 SD-WAN 어플라이언스 전송 VPC를 연결합니다. SD-WAN 오버레이 링크를 사용하여 지사와 연결합니다.",
            "B. 전송 게이트웨이를 구성하여 VPC를 연결합니다. 타사 SD-WAN 어플라이언스 전송 VPC에 대한 전송 게이트웨이 Connect 연결을 구성합니다. AWS Transit Gateway의 SD-WAN 가상 허브 네이티브 통합을 사용합니다.",
            "C. 전송 게이트웨이를 구성하여 VPC를 연결합니다. VPC 피어링을 구성하여 VPC와 타사 SD-WAN 어플라이언스 전송 VPC를 연결합니다. SD-WAN 오버레이 링크를 사용하여 지사와 연결합니다.",
            "D. VPC 피어링을 구성하여 VPC와 타사 SD-WAN 어플라이언스 전송 VPC를 연결합니다. AWS Transit Gateway의 SD-WAN 가상 허브 네이티브 통합을 사용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 132,
        "question": "A company is running a hybrid cloud environment. The company has multiple AWS accounts as part of an organization in AWS Organizations. The\ncompany needs a solution to manage a list of IPv4 on-premises hosts that will be allowed to access resources in AWS. The solution must provide\nversion control for the list of IPv4 addresses and must make the list available to the AWS accounts in the organization.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a customer-managed prefix list. Add entries for the initial list of on-premises IPv4 hosts. Create a resource share in AWS Resource\nAccess Manager. Add the managed prefix list to the resource share. Share the resource with the organization.",
            "B. Create a customer-managed prefix list. Add entries for the initial list of on-premises IPv4 hosts. Use AWS Firewall Manager to share the\nmanaged prefix list with the organization.",
            "C. Create a security group. Add inbound rule entries for the initial list of on-premises IPv4 hosts. Create a resource share in AWS Resource\nAccess Manager. Add the security group to the resource share. Share the resource with the organization.",
            "D. Create an Amazon DynamoDB table. Add entries for the initial list of on-premises IPv4 hosts. Create an AWS Lambda function that\nassumes a role in each AWS account in the organization to authorize inbound rules on security groups based on entries from the DynamoDB\ntable."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "기업은 하이브리드 클라우드 환경을 운영하고 있습니다. 기업은 AWS Organizations의 일부로 여러 AWS 계정을 보유하고 있습니다. 기업은 AWS 리소스에 액세스할 수 있는 온프레미스 호스트의 IPv4 주소 목록을 관리할 솔루션이 필요합니다. 이 솔루션은 IPv4 주소 목록에 대한 버전 관리 기능을 제공하고 조직 내 AWS 계정에서 사용할 수 있어야 합니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 고객 관리형 접두사 목록을 만듭니다. 초기 온프레미스 IPv4 호스트 목록을 추가합니다. AWS Resource Access Manager에서 리소스 공유를 생성합니다. 관리형 접두사 목록을 리소스 공유에 추가합니다. 조직과 리소스를 공유합니다.",
            "B. 고객 관리형 접두사 목록을 만듭니다. 초기 온프레미스 IPv4 호스트 목록을 추가합니다. AWS Firewall Manager를 사용하여 관리형 접두사 목록을 조직과 공유합니다.",
            "C. 보안 그룹을 생성합니다. 초기 온프레미스 IPv4 호스트 목록에 대한 인바운드 규칙 항목을 추가합니다. AWS Resource Access Manager에서 리소스 공유를 생성합니다. 보안 그룹을 리소스 공유에 추가합니다. 조직과 리소스를 공유합니다.",
            "D. Amazon DynamoDB 테이블을 생성합니다. 초기 온프레미스 IPv4 호스트 목록에 대한 항목을 추가합니다. 조직의 각 AWS 계정에서 DynamoDB 테이블의 항목을 기반으로 보안 그룹의 인바운드 규칙을 승인하는 AWS Lambda 함수를 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 133,
        "question": "A company's application is deployed on Amazon EC2 instances in a single VPC in an AWS Region. The EC2 instances are running in two\nAvailability Zones. The company decides to use a fleet of traffic inspection instances from AWS Marketplace to inspect traffic between the VPC\nand the internet. The company is performing tests before the company deploys the architecture into production.\nThe fleet is located in a shared inspection VPC behind a Gateway Load Balancer (GWLB). To minimize the cost of the solution, the company\ndeployed only one inspection instance in each Availability Zone that the application uses.\nDuring tests, a network engineer notices that traffic inspection works as expected when the network is stable. However, during maintenance of the\ninspection instances, the internet sessions time out for some application instances. The application instances are not able to establish new\nsessions.\nWhich combination of steps will remediate these issues? (Choose two.)",
        "options": [
            "A. Deploy one inspection instance in the Availability Zones that do not have inspection instances deployed.",
            "B. Deploy one additional inspection instance in each Availability Zone where the inspection instances are deployed.",
            "C. Enable the cross-zone load balancing attribute for the GWLB.",
            "D. Deploy inspection instances in an Auto Scaling group. Define a scaling policy that is based on CPU load.",
            "E. Attach the GWLB to all Availability Zones in the Region."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (53%) CD (40%) 7%",
        "question_ko": "기업의 애플리케이션은 단일 VPC의 Amazon EC2 인스턴스에 배포되어 있으며, 두 가용 영역에서 실행됩니다. 회사는 AWS Marketplace의 트래픽 검사 인스턴스 팜을 사용하여 VPC와 인터넷 간 트래픽을 검사하도록 결정했습니다. 회사는 프로덕션에 배포하기 전에 테스트를 수행하고 있습니다.\n팜은 Gateway Load Balancer(GWLB) 뒤의 공유 검사 VPC에 배포되어 있습니다. 솔루션 비용을 최소화하기 위해 회사는 애플리케이션이 사용하는 각 가용 영역에 검사 인스턴스를 하나만 배포했습니다.\n테스트 중 네트워크 엔지니어는 네트워크가 안정적일 때는 트래픽 검사가 예상대로 작동한다는 것을 알아냈습니다. 그러나 검사 인스턴스 유지 관리 중에는 일부 애플리케이션 인스턴스에 대한 인터넷 세션이 시간 초과되고 새 세션을 설정할 수 없습니다.\n이러한 문제를 해결할 수 있는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 검사 인스턴스가 배포되지 않은 가용 영역에 검사 인스턴스를 하나 더 배포합니다.",
            "B. 검사 인스턴스가 배포된 각 가용 영역에 추가 검사 인스턴스를 하나 더 배포합니다.",
            "C. GWLB에 대한 cross-zone 로드 밸런싱 속성을 활성화합니다.",
            "D. 검사 인스턴스를 Auto Scaling 그룹에 배포합니다. CPU 로드를 기준으로 하는 확장 정책을 정의합니다.",
            "E. GWLB를 해당 리전의 모든 가용 영역에 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (53%) CD (40%) 7%"
    },
    {
        "num": 134,
        "question": "A company has developed a new web application on AWS. The application runs on Amazon Elastic Container Service (Amazon ECS) on AWS\nFargate behind an Application Load Balancer (ALB) in the us-east-1 Region. The application uses Amazon Route 53 to host the DNS records for\nthe domain. The content that is served from the website is mostly static images and files that are not updated frequently. Most of the traffic to the\nwebsite from end users will originate from the United States. Some traffic will originate from Canada and Europe.\nA network engineer needs to design a solution that will reduce latency for end users at the lowest cost. The solution also must ensure that all\ntraffic is encrypted in transit until the traffic reaches the ALB.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure the ALB to use an AWS Global Accelerator accelerator in us-east-1. Create a secure HTTPS listener. Create an alias record in\nAmazon Route 53 for the custom domain name. Configure the alias record to route to the DNS name that is assigned to the accelerator for the\nALB.",
            "B. Configure the ALB to use a secure HTTPS listener. Create an Amazon CloudFront distribution. Set the origin domain name to point to the\nDNS record that is assigned to the ALConfigure the CloudFront distribution to use an SSL certificate. Set all behaviors to force HTTPS. Create\nan alias record in Amazon Route 53 for the custom domain name. Configure the alias record to route to the DNS name that is assigned to the\nALB.",
            "C. Configure the ALB to use a secure HTTPS listener. Create an Amazon CloudFront distribution. Set the origin domain name to point to the\nDNS record that is assigned to the ALB. Configure the CloudFront distribution to use an SSL certificate and redirect HTTP to HTTPS. Create an\nalias record in Amazon Route 53 for the custom domain name. Configure the alias record to route to the CloudFront distribution.",
            "D. Configure the ALB to use an AWS Global Accelerator accelerator in us-east-1. Create a secure HTTPS listener. Create a second application\nstack on Amazon ECS on Fargate in the eu-west-1 Region. Create another secure HTTPS listener. Create an alias record in Amazon Route 53\nfor the custom domain name. Configure the alias record to use a latency-based routing policy to route to the DNS name that is assigned to the\naccelerator for the ALBs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (87%) 9%",
        "question_ko": "기업은 AWS에 새로운 웹 애플리케이션을 개발했습니다. 애플리케이션은 us-east-1 리전의 Application Load Balancer(ALB) 뒤의 Amazon ECS Fargate에서 실행됩니다. 애플리케이션은 Amazon Route 53을 사용하여 도메인의 DNS 레코드를 호스팅합니다. 웹 사이트에서 제공되는 내용은 대부분 정적 이미지와 파일이며 자주 업데이트되지 않습니다. 최종 사용자의 대부분의 트래픽은 미국에서 발생할 것이며 일부 트래픽은 캐나다와 유럽에서 발생할 것입니다.\n네트워크 엔지니어는 최종 사용자의 지연 시간을 최소화하고 비용을 낮출 수 있는 솔루션을 설계해야 합니다. 또한 트래픽이 ALB에 도달할 때까지 모든 트래픽이 암호화되도록 해야 합니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. ALB에서 us-east-1의 AWS Global Accelerator 가속기를 사용하도록 구성합니다. 안전한 HTTPS 수신기를 생성합니다. Amazon Route 53에 사용자 지정 도메인 이름에 대한 별칭 레코드를 생성합니다. 별칭 레코드를 ALB에 할당된 DNS 이름으로 구성합니다.",
            "B. ALB에 안전한 HTTPS 수신기를 구성합니다. Amazon CloudFront 배포를 생성합니다. 원본 도메인 이름을 ALB에 할당된 DNS 레코드로 설정합니다. CloudFront 배포에 SSL 인증서를 구성하고 모든 동작에 HTTPS를 강제로 설정합니다. Amazon Route 53에 사용자 지정 도메인 이름에 대한 별칭 레코드를 생성합니다. 별칭 레코드를 ALB에 할당된 DNS 이름으로 구성합니다.",
            "C. ALB에 안전한 HTTPS 수신기를 구성합니다. Amazon CloudFront 배포를 생성합니다. 원본 도메인 이름을 ALB에 할당된 DNS 레코드로 설정합니다. CloudFront 배포에 SSL 인증서를 구성하고 HTTP를 HTTPS로 리디렉션합니다. Amazon Route 53에 사용자 지정 도메인 이름에 대한 별칭 레코드를 생성합니다. 별칭 레코드를 CloudFront 배포로 구성합니다.",
            "D. ALB에서 us-east-1의 AWS Global Accelerator 가속기를 사용하도록 구성합니다. 안전한 HTTPS 수신기를 생성합니다. eu-west-1 리전에 Amazon ECS on Fargate의 두 번째 애플리케이션 스택을 생성합니다. 다른 안전한 HTTPS 수신기를 생성합니다. Amazon Route 53에 사용자 지정 도메인 이름에 대한 별칭 레코드를 생성합니다. 별칭 레코드를 ALB의 DNS 이름으로 구성하는 지연 시간 기반 라우팅 정책을 사용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (87%) 9%"
    },
    {
        "num": 135,
        "question": "A company deploys an internal website behind an Application Load Balancer (ALB) in a VPC. The VPC has a CIDR block of 172.31.0.0/16. The\ncompany creates a private hosted zone for the domain example.com for the website in Amazon Route 53. The company establishes an AWS Site-\nto-Site VPN connection between its office network and the VPC.\nA network engineer needs to set up a DNS solution so that employees can visit the internal webpage by accessing a private domain URL\n(https://example.com) from the office network.\nWhich combination of steps will meet this requirement? (Choose two.)",
        "options": [
            "A. Create an alias record that points to the ALB in the Route 53 private hosted zone.",
            "B. Create a CNAME record that points to the ALB internal domain in the Route 53 private hosted zone.",
            "C. Create a Route 53 Resolver inbound endpoint. On the office DNS server, configure a conditional forwarder to forward the DNS queries to the\nRoute 53 Resolver inbound endpoint.",
            "D. Create a Route 53 Resolver outbound endpoint. On the office DNS server, configure a conditional forwarder to forward the DNS queries to\nthe Route 53 Resolver outbound endpoint.",
            "E. On the office DNS server, configure a conditional forwarder for the private domain to the VPC DNS at 172.31.0.2."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AC (68%) AB (32%)",
        "question_ko": "회사는 VPC의 Application Load Balancer(ALB) 뒤에 내부 웹사이트를 배포합니다. VPC의 CIDR 블록은 172.31.0.0/16입니다. 회사는 Amazon Route 53에 웹사이트의 example.com 도메인에 대한 프라이빗 호스팅 영역을 생성합니다. 회사는 사무실 네트워크와 VPC 간에 AWS Site-to-Site VPN 연결을 설정했습니다.\n네트워크 엔지니어는 직원들이 사무실 네트워크에서 프라이빗 도메인 URL(https://example.com)로 내부 웹 페이지를 방문할 수 있도록 DNS 솔루션을 설정해야 합니다.\n이 요구 사항을 충족할 수 있는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. Route 53 프라이빗 호스팅 영역에서 ALB를 가리키는 별칭 레코드를 생성합니다.",
            "B. Route 53 프라이빗 호스팅 영역에서 ALB 내부 도메인을 가리키는 CNAME 레코드를 생성합니다.",
            "C. Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 사무실 DNS 서버에서 Route 53 Resolver 인바운드 엔드포인트로 DNS 쿼리를 전달하도록 조건부 포워더를 구성합니다.",
            "D. Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 사무실 DNS 서버에서 Route 53 Resolver 아웃바운드 엔드포인트로 DNS 쿼리를 전달하도록 조건부 포워더를 구성합니다.",
            "E. 사무실 DNS 서버에서 프라이빗 도메인에 대해 VPC DNS인 172.31.0.2로 조건부 포워더를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AC (68%) AB (32%)"
    },
    {
        "num": 136,
        "question": "A company is deploying AWS Cloud WAN with edge locations in the us-east-1 Region and the ap-southeast-2 Region. Individual AWS Cloud WAN\nsegments are configured for the development environment, the production environment, and the shared services environment at each edge\nlocation. Many new VPCs will be deployed for the environments and will be configured as attachments to the AWS Cloud WAN core network.\nThe company's network team wants to ensure that VPC attachments are configured for the correct segment. The network team will tag the VPC\nattachments by using the Environment key with a value of the corresponding environment segment name. The segment for the production\nenvironment in us-east-1 must require acceptance for attachment requests. All other attachment requests must not require acceptance.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a rule with a number of 100 that requires acceptance for attachments to the production segment. In the rule, set the condition logic\nto the \"or\" value. Include conditions that require a tag:Environment value of Production or a Region value of us-east-1. Create a rule with a\nnumber of 200 that does not require acceptance to map any tag:Environment values to their respective segments.",
            "B. Create a rule with a number of 100 that requires acceptance for attachments to the production segment. In the rule, set the condition logic\nto the \"and\" value. Include conditions that require a tag:Environment value of Production and a Region value of us-east-1. Create a rule with a\nnumber of 200 that does not require acceptance to map any tag.Environment values to their respective segments.",
            "C. Create a rule with a number of 100 that does not require acceptance to map any tag:Environment values to their respective segments.\nCreate a rule with a number of 200 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to\nthe \"and\" value. Include conditions that require a tag:Environment value of Production and a Region value of us-east-1.",
            "D. Create a rule with a number of 100 that does not require acceptance to map any tag:Environment values to their respective segments.\nCreate a rule with a number of 200 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to\nthe \"or\" value. Include conditions that require a tag:Environment value of Production or a Region value of us-east-1."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 AWS Cloud WAN을 배포하고 있으며 us-east-1 지역과 ap-southeast-2 지역에 엣지 위치를 구성하고 있습니다. 개별 AWS Cloud WAN 세그먼트는 개발 환경, 프로덕션 환경 및 공유 서비스 환경을 위해 각 엣지 위치에 구성되어 있습니다. 많은 새로운 VPC가 배포될 것이며 AWS Cloud WAN 코어 네트워크의 첨부 파일로 구성될 것입니다. 회사의 네트워크 팀은 VPC 첨부 파일이 올바른 세그먼트에 구성되도록 하려고 합니다. 네트워크 팀은 Environment 키와 해당 환경 세그먼트 이름의 값을 사용하여 VPC 첨부 파일에 태그를 지정할 것입니다. us-east-1의 프로덕션 환경 세그먼트에는 첨부 요청에 대한 승인이 필요해야 합니다. 모든 다른 첨부 요청에는 승인이 필요하지 않아야 합니다. 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 번호 100의 규칙을 생성하여 프로덕션 세그먼트에 대한 첨부 파일 승인을 필요로 합니다. 이 규칙에서 조건 논리를 \"or\"로 설정합니다. 프로덕션의 tag:Environment 값 또는 us-east-1 지역의 값을 필요로 하는 조건을 포함합니다. 번호 200의 규칙을 생성하여 tag:Environment 값을 해당 세그먼트에 매핑하기 위해 승인이 필요하지 않습니다.",
            "B. 번호 100의 규칙을 생성하여 프로덕션 세그먼트에 대한 첨부 파일 승인을 필요로 합니다. 이 규칙에서 조건 논리를 \"and\"로 설정합니다. 프로덕션의 tag:Environment 값과 us-east-1 지역의 값을 필요로 하는 조건을 포함합니다. 번호 200의 규칙을 생성하여 tag:Environment 값을 해당 세그먼트에 매핑하기 위해 승인이 필요하지 않습니다.",
            "C. 번호 100의 규칙을 생성하여 tag:Environment 값을 해당 세그먼트에 매핑하기 위해 승인이 필요하지 않습니다. 번호 200의 규칙을 생성하여 프로덕션 세그먼트에 대한 첨부 파일 승인을 필요로 합니다. 이 규칙에서 조건 논리를 \"and\"로 설정합니다. 프로덕션의 tag:Environment 값과 us-east-1 지역의 값을 필요로 하는 조건을 포함합니다.",
            "D. 번호 100의 규칙을 생성하여 tag:Environment 값을 해당 세그먼트에 매핑하기 위해 승인이 필요하지 않습니다. 번호 200의 규칙을 생성하여 프로덕션 세그먼트에 대한 첨부 파일 승인을 필요로 합니다. 이 규칙에서 조건 논리를 \"or\"로 설정합니다. 프로덕션의 tag:Environment 값 또는 us-east-1 지역의 값을 필요로 하는 조건을 포함합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 137,
        "question": "A company is migrating applications from a data center to AWS. Many of the applications will need to exchange data with the company's on-\npremises mainframe.\nThe company needs to achieve 4 Gbps transfer speeds to meet peak traffic demands. A network engineer must design a highly available solution\nthat maximizes resiliency. The solution must be able to withstand the loss of circuits or routers.\nWhich solution will meet these requirements?",
        "options": [
            "A. Order four 10 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate one connection from each Direct\nConnect location to a router at the company location. Terminate the other connection from each Direct Connect location to a different router\nat the company location.",
            "B. Order two 10 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate the connection from each Direct\nConnect location to a different router at the company location.",
            "C. Order four 1 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate one connection from each Direct\nConnect location to a router at the company location. Terminate the other connection from each Direct Connect location to a different router\nat the company location.",
            "D. Order two 1 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate the connection from each Direct\nConnect location to a different router at the company location."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (69%) B (31%)",
        "question_ko": "회사는 데이터 센터에서 AWS로 애플리케이션을 마이그레이션하고 있습니다. 많은 애플리케이션이 회사의 온-프레미스 메인프레임과 데이터를 교환해야 합니다. 회사는 4Gbps 전송 속도를 달성해야 합니다. 네트워크 엔지니어는 높은 가용성과 복원력을 극대화하는 솔루션을 설계해야 합니다. 회선 또는 라우터 손실을 견딜 수 있어야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 두 위치에 걸쳐 균등하게 분산된 4개의 10Gbps AWS Direct Connect 연결을 주문합니다. 각 Direct Connect 위치의 연결 중 하나를 회사 위치의 라우터에 종료합니다. 각 Direct Connect 위치의 다른 연결을 회사 위치의 다른 라우터에 종료합니다.",
            "B. 두 위치에 걸쳐 균등하게 분산된 2개의 10Gbps AWS Direct Connect 연결을 주문합니다. 각 Direct Connect 위치의 연결을 회사 위치의 다른 라우터에 종료합니다.",
            "C. 두 위치에 걸쳐 균등하게 분산된 4개의 1Gbps AWS Direct Connect 연결을 주문합니다. 각 Direct Connect 위치의 연결 중 하나를 회사 위치의 라우터에 종료합니다. 각 Direct Connect 위치의 다른 연결을 회사 위치의 다른 라우터에 종료합니다.",
            "D. 두 위치에 걸쳐 균등하게 분산된 2개의 1Gbps AWS Direct Connect 연결을 주문합니다. 각 Direct Connect 위치의 연결을 회사 위치의 다른 라우터에 종료합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (69%) B (31%)"
    },
    {
        "num": 138,
        "question": "A company has 10 web server Amazon EC2 instances that run in an Auto Scaling group in a production VPC. The company has 10 other web\nservers that run in an on-premises data center. The company has a 10 Gbps AWS Direct Connect connection between the on-premises data center\nand the production VPC.\nThe company needs to implement a load balancing solution that receives HTTPS traffic from thousands of external users. The solution must\ndistribute the traffic across the web servers on AWS and the web servers in the on-premises data center. Regardless of the location of the web\nservers, HTTPS requests must go to the same web server throughout the entire session.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a Network Load Balancer (NLB) in the production VPC. Create a target group. Specify ip as the target type. Register the EC2\ninstances and the on-premises servers with the target group Enable connection draining on the NLB",
            "B. Create an Application Load Balancer (ALB) in the production VPC. Create a target group Specify ip as the target type. Register the EC2\ninstances and the on-premises servers with the target group. Enable application-based session affinity (sticky sessions) on the ALB.",
            "C. Create a Network Load Balancer (NLB) in the production VPCreate a target group. Specify instance as the target type. Register the EC2\ninstances and the on-premises servers with the target group. Enable session affinity (sticky sessions) on the NLB.",
            "D. Create an Application Load Balancer (ALB) in the production VPC. Create a target group. Specify instance as the target type Register the\nEC2 instances and the on-premises servers with the target group Enable application-based session affinity (sticky sessions) on the ALB."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (83%) C (17%)",
        "question_ko": "회사는 프로덕션 VPC에서 Auto Scaling 그룹의 10개 웹 서버 Amazon EC2 인스턴스를 실행하고 있습니다. 회사는 온-프레미스 데이터 센터에서 10개의 다른 웹 서버를 실행하고 있습니다. 회사는 온-프레미스 데이터 센터와 프로덕션 VPC 사이에 10Gbps AWS Direct Connect 연결이 있습니다. 회사는 수천 명의 외부 사용자로부터 HTTPS 트래픽을 수신하는 부하 분산 솔루션을 구현해야 합니다. 이 솔루션은 AWS의 웹 서버와 온-프레미스 데이터 센터의 웹 서버 전체에 트래픽을 분산해야 합니다. 웹 서버의 위치에 관계없이 HTTPS 요청은 전체 세션 동안 동일한 웹 서버로 가야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 프로덕션 VPC에 Network Load Balancer(NLB)를 생성합니다. 타겟 그룹을 생성합니다. 타겟 유형으로 ip를 지정합니다. EC2 인스턴스와 온-프레미스 서버를 타겟 그룹에 등록합니다. NLB에서 연결 드레이닝을 활성화합니다.",
            "B. 프로덕션 VPC에 Application Load Balancer(ALB)를 생성합니다. 타겟 그룹을 생성합니다. 타겟 유형으로 ip를 지정합니다. EC2 인스턴스와 온-프레미스 서버를 타겟 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 선호도(sticky sessions)를 활성화합니다.",
            "C. 프로덕션 VPC에 Network Load Balancer(NLB)를 생성합니다. 타겟 그룹을 생성합니다. 타겟 유형으로 instance를 지정합니다. EC2 인스턴스와 온-프레미스 서버를 타겟 그룹에 등록합니다. NLB에서 세션 선호도(sticky sessions)를 활성화합니다.",
            "D. 프로덕션 VPC에 Application Load Balancer(ALB)를 생성합니다. 타겟 그룹을 생성합니다. 타겟 유형으로 instance를 지정합니다. EC2 인스턴스와 온-프레미스 서버를 타겟 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 선호도(sticky sessions)를 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (83%) C (17%)"
    },
    {
        "num": 139,
        "question": "A company has an AWS environment that includes multiple VPCs that are connected by a transit gateway. The company has decided to use AWS\nSite-to-Site VPN to establish connectivity between its on-premises network and its AWS environment.\nThe company does not have a static public IP address for its on-premises network. A network engineer must implement a solution to initiate the\nVPN connection on the AWS side of the connection for traffic from the AWS environment to the on-premises network.\nWhich combination of steps should the network engineer take to establish VPN connectivity between the transit gateway and the on-premises\nnetwork? (Choose three.)",
        "options": [
            "A. Configure the Site-to-Site VPN tunnel options to use Internet Key Exchange version 1 (IKEv1).",
            "B. Configure the Site-to-Site VPN tunnel options to use Internet Key Exchange version 2 (IKEv2).",
            "C. Use a private certificate authority (CA) from AWS Private Certificate Authority to create a certificate.",
            "D. Use a public certificate authority (CA) from AWS Private Certificate Authority to create a certificate.",
            "E. Create a customer gateway. Specify the current dynamic IP address of the customer gateway device’s external interface.",
            "F. Create a customer gateway without specifying the IP address of the customer gateway device."
        ],
        "answers": [
            "B",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCF (68%) BCE (24%) 5%",
        "question_ko": "회사는 트랜짓 게이트웨이로 연결된 여러 VPC가 포함된 AWS 환경을 보유하고 있습니다. 회사는 온-프레미스 네트워크와 AWS 환경 간의 연결성을 위해 AWS Site-to-Site VPN을 사용하기로 결정했습니다. 회사는 온-프레미스 네트워크에 고정 공용 IP 주소가 없습니다. 네트워크 엔지니어는 AWS 환경에서 온-프레미스 네트워크로의 트래픽에 대해 VPN 연결을 시작하는 솔루션을 구현해야 합니다. 트랜짓 게이트웨이와 온-프레미스 네트워크 간에 VPN 연결을 설정하기 위해 네트워크 엔지니어가 수행해야 할 조치는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. Site-to-Site VPN 터널 옵션을 Internet Key Exchange version 1(IKEv1)로 구성합니다.",
            "B. Site-to-Site VPN 터널 옵션을 Internet Key Exchange version 2(IKEv2)로 구성합니다.",
            "C. AWS Private Certificate Authority에서 프라이빗 인증 기관(CA) 인증서를 사용합니다.",
            "D. AWS Private Certificate Authority에서 공용 인증 기관(CA) 인증서를 사용합니다.",
            "E. 고객 게이트웨이를 생성하고 고객 게이트웨이 디바이스의 외부 인터페이스 현재 동적 IP 주소를 지정합니다.",
            "F. 고객 게이트웨이 IP 주소를 지정하지 않고 고객 게이트웨이를 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BCF (68%) BCE (24%) 5%"
    },
    {
        "num": 140,
        "question": "A company's AWS environment has two VPCs. VPC A has a CIDR block of 192.168.0.0/16. VPC B has a CIDR block of 10.0.0.0/16. Each VPC is\ndeployed in a separate AWS Region. The company has remote users who work outside the company's offices. These users need to connect to an\napplication that is running in the VPCs.\nTraffic to and from the VPCs over the internet must be encrypted. A network engineer must set up connectivity between the remote users and the\nVPCs.\nWhich combination of steps should the network engineer take to meet these requirements with the LEAST management overhead? (Choose\nthree.)",
        "options": [
            "A. Establish an AWS Site-to-Site VPN connection between VPC A and VPC B.",
            "B. Establish a VPC peering connection between VPC A and VPC B.",
            "C. Create an AWS Client VPN endpoint in VPC A and VPC B Add an authorization rule to grant access to VPC A and VPC B.",
            "D. Create an AWS Client VPN endpoint in VPC A Add an authorization rule to grant access to VPC A and VPC B.",
            "E. Add a route to the AWS Client VPN endpoint’s route table to direct traffic to VPC B.",
            "F. Add a route to the AWS Client VPN endpoint's route table to direct traffic to VPC A."
        ],
        "answers": [
            "B",
            "D",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BDE (83%) Other",
        "question_ko": "회사의 AWS 환경에는 두 개의 VPC가 있습니다. VPC A의 CIDR 블록은 192.168.0.0/16이고, VPC B의 CIDR 블록은 10.0.0.0/16입니다. 각 VPC는 별도의 AWS 리전에 배포됩니다. 회사의 원격 사용자는 회사 사무실 외부에서 작업합니다. 이 사용자들은 VPC에서 실행되는 애플리케이션에 연결해야 합니다. VPC 간 인터넷 트래픽은 암호화되어야 합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하는 연결성을 설정해야 합니다. 관리 오버헤드를 최소화하기 위해 네트워크 엔지니어가 수행해야 할 조치는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. VPC A와 VPC B 간에 AWS Site-to-Site VPN 연결을 설정합니다.",
            "B. VPC A와 VPC B 간에 VPC 피어링 연결을 설정합니다.",
            "C. VPC A와 VPC B에 AWS Client VPN 엔드포인트를 생성하고 VPC A와 VPC B에 대한 권한 부여 규칙을 추가합니다.",
            "D. VPC A에 AWS Client VPN 엔드포인트를 생성하고 VPC A와 VPC B에 대한 권한 부여 규칙을 추가합니다.",
            "E. AWS Client VPN 엔드포인트의 라우팅 테이블에 VPC B로 트래픽을 라우팅하는 경로를 추가합니다.",
            "F. AWS Client VPN 엔드포인트의 라우팅 테이블에 VPC A로 트래픽을 라우팅하는 경로를 추가합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BDE (83%) Other"
    },
    {
        "num": 141,
        "question": "A company uses Amazon Route 53 to register a public domain, example.com, in an AWS account. A central services group manages the account.\nThe company wants to create a subdomain, test.example.com, in another AWS account to offer name services for Amazon EC2 instances that are\nhosted in the account. The company does not want to migrate the parent domain to the subdomain account.\nA network engineer creates a new Route 53 hosted zone for the subdomain in the second account.\nWhich combination of steps must the network engineer take to complete the task? (Choose two.)",
        "options": [
            "A. Add records for the hosts of the new subdomain to the new Route 53 hosted zone.",
            "B. Update the DNS service for the parent domain by adding name server (NS) records for the subdomain.",
            "C. Update the DNS service for the subdomain by adding name server (NS) records for the parent domain.",
            "D. Create an alias record from the parent domain that points to the hosted zone for the subdomain in the second account.",
            "E. Add a start of authority (SOA) record in the parent domain for the subdomain."
        ],
        "answers": [
            "A",
            "B"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AB (91%) 9%",
        "question_ko": "회사에서 Amazon Route 53을 사용하여 공개 도메인인 example.com을 AWS 계정에 등록했습니다. 중앙 서비스 그룹이 이 계정을 관리하고 있습니다.\n회사는 다른 AWS 계정에서 test.example.com이라는 하위 도메인을 생성하여 해당 계정의 Amazon EC2 인스턴스에 대한 네임 서비스를 제공하고자 합니다. 회사는 상위 도메인을 하위 도메인 계정으로 마이그레이션하고 싶지 않습니다.\n네트워크 엔지니어가 두 번째 계정에 새로운 Route 53 호스팅 영역을 생성했습니다.\n이 작업을 완료하기 위해 네트워크 엔지니어가 수행해야 할 조합은 무엇입니까? (두 개를 선택하세요.)",
        "options_ko": [
            "A. 새 하위 도메인의 호스트에 대한 레코드를 새 Route 53 호스팅 영역에 추가합니다.",
            "B. 상위 도메인의 DNS 서비스를 업데이트하여 하위 도메인에 대한 네임 서버(NS) 레코드를 추가합니다.",
            "C. 하위 도메인의 DNS 서비스를 업데이트하여 상위 도메인에 대한 네임 서버(NS) 레코드를 추가합니다.",
            "D. 상위 도메인에서 별칭 레코드를 생성하여 두 번째 계정의 하위 도메인 호스팅 영역을 가리키도록 합니다.",
            "E. 상위 도메인에 하위 도메인에 대한 시작 권한(SOA) 레코드를 추가합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AB (91%) 9%"
    },
    {
        "num": 142,
        "question": "An IoT company collects data from thousands of sensors that are deployed in the Unites States and South Asia. The sensors use a proprietary\ncommunication protocol that is built on UDP to send the data to a fleet of Amazon EC2 instances. The instances are in an Auto Scaling group and\nrun behind a Network Load Balancer (NLB). The instances, Auto Scaling group, and NLB are deployed in the us-west-2 Region.\nOccasionally, the data from the sensors in South Asia gets lost in transit over the internet and does not reach the EC2 instances.\nWhich solutions will resolve this issue? (Choose two.)",
        "options": [
            "A. Use AWS Global Accelerator with the existing NLB.",
            "B. Create an Amazon CloudFront distribution. Specify the existing NLB as the origin.",
            "C. Create a second deployment of the EC2 instances and the NLB in the ap-south-1 Region. Use an Amazon Route 53 latency routing policy to\nresolve to the Region that provides the least latency.",
            "D. Create a second deployment of the EC2 instances and the NLB in the ap-south-1 Region. Use an Amazon Route 53 failover routing policy to\nresolve to an alternate Region in case packets are dropped.",
            "E. Turn on enhanced networking on the EC2 instances by using the most recent Elastic Network Adapter (ENA) drivers."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AC (100%)",
        "question_ko": "IoT 회사는 미국과 남아시아에 배포된 수천 개의 센서에서 데이터를 수집합니다. 센서는 UDP 기반의 자체 통신 프로토콜을 사용하여 데이터를 Amazon EC2 인스턴스 풀로 보냅니다. 이 인스턴스는 Auto Scaling 그룹에 있으며 Network Load Balancer(NLB) 뒤에 배포됩니다. 인스턴스, Auto Scaling 그룹 및 NLB는 us-west-2 리전에 배포됩니다.\n때때로 남아시아의 센서에서 보내는 데이터가 인터넷을 통해 손실되어 EC2 인스턴스에 도달하지 않습니다.\n이 문제를 해결할 수 있는 솔루션은 무엇입니까? (두 개를 선택하세요.)",
        "options_ko": [
            "A. 기존 NLB와 함께 AWS Global Accelerator를 사용합니다.",
            "B. Amazon CloudFront 배포를 만듭니다. 기존 NLB를 오리진으로 지정합니다.",
            "C. ap-south-1 리전에 EC2 인스턴스와 NLB의 두 번째 배포를 생성합니다. Amazon Route 53 지연 시간 라우팅 정책을 사용하여 지연 시간이 가장 낮은 리전으로 확인합니다.",
            "D. ap-south-1 리전에 EC2 인스턴스와 NLB의 두 번째 배포를 생성합니다. Amazon Route 53 장애 조치 라우팅 정책을 사용하여 패킷이 누락되는 경우 대체 리전으로 확인합니다.",
            "E. 최신 Elastic Network Adapter(ENA) 드라이버를 사용하여 EC2 인스턴스에서 향상된 네트워킹을 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AC (100%)"
    },
    {
        "num": 143,
        "question": "A company has an application that runs on a fleet of Amazon EC2 instances. A new company regulation mandates that all network traffic to and\nfrom the EC2 instances must be sent to a centralized third-party EC2 appliance for content inspection.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure VPC flow logs on each EC2 network interface. Publish the flow logs to an Amazon S3 bucket. Create a third-party EC2 appliance\nto acquire flow logs from the S3 bucket. Log in to the appliance to monitor network content.",
            "B. Create a third-party EC2 appliance in an Auto Scaling group fronted by a Network Load Balancer (NLB). Configure a mirror session. Specify\nthe NLB as the mirror target. Specify a mirror filter to capture inbound and outbound traffic. For the source of the mirror session, specify the\nEC2 elastic network interfaces for all the instances that host the application.",
            "C. Configure a mirror session. Specify an Amazon Kinesis Data Firehose delivery stream as the mirror target. Specify a mirror filter to capture\ninbound and outbound traffic. For the source of the mirror session, specify the EC2 elastic network interfaces for all the instances that host\nthe application. Create a third-party EC2 appliance. Send all traffic to the appliance through the Kinesis Data Firehose delivery stream for\ncontent inspection.",
            "D. Configure VPC flow logs on each EC2 network interface. Send the logs to Amazon CloudWatch. Create a third-party EC2 appliance.\nConfigure a CloudWatch filter to send the flow logs to Amazon Kinesis Data Firehose to load the logs into the appliance."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (92%) 8%",
        "question_ko": "회사에는 Amazon EC2 인스턴스 플릿에서 실행되는 애플리케이션이 있습니다. 새로운 회사 규정에 따라 EC2 인스턴스에 대한 모든 네트워크 트래픽은 중앙 집중식 타사 EC2 어플라이언스로 전송되어 내용 검사를 받아야 합니다.\n이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 EC2 네트워크 인터페이스에 VPC 흐름 로그를 구성합니다. 흐름 로그를 Amazon S3 버킷에 게시합니다. S3 버킷에서 흐름 로그를 가져오는 타사 EC2 어플라이언스를 생성합니다. 어플라이언스에 로그인하여 네트워크 콘텐츠를 모니터링합니다.",
            "B. Network Load Balancer(NLB) 앞에 있는 Auto Scaling 그룹에 타사 EC2 어플라이언스를 생성합니다. 미러 세션을 구성합니다. NLB를 미러 대상으로 지정합니다. 들어오고 나가는 트래픽을 캡처하는 미러 필터를 지정합니다. 미러 세션의 소스로 애플리케이션을 호스팅하는 모든 인스턴스의 EC2 엘라스틱 네트워크 인터페이스를 지정합니다.",
            "C. 미러 세션을 구성합니다. Amazon Kinesis Data Firehose 전달 스트림을 미러 대상으로 지정합니다. 들어오고 나가는 트래픽을 캡처하는 미러 필터를 지정합니다. 미러 세션의 소스로 애플리케이션을 호스팅하는 모든 인스턴스의 EC2 엘라스틱 네트워크 인터페이스를 지정합니다. 타사 EC2 어플라이언스를 생성합니다. Kinesis Data Firehose 전달 스트림을 통해 모든 트래픽을 어플라이언스로 보냅니다.",
            "D. 각 EC2 네트워크 인터페이스에 VPC 흐름 로그를 구성합니다. 로그를 Amazon CloudWatch로 보냅니다. 타사 EC2 어플라이언스를 생성합니다. CloudWatch 필터를 구성하여 흐름 로그를 Amazon Kinesis Data Firehose로 보내 어플라이언스로 로드합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (92%) 8%"
    },
    {
        "num": 144,
        "question": "A company has two AWS Direct Connect links. One Direct Connect link terminates in the us-east-1 Region, and the other Direct Connect link\nterminates in the af-south-1 Region. The company is using BGP to exchange routes with AWS.\nHow should a network engineer configure BGP to ensure that af-south-1 is used as a secondary link to AWS?",
        "options": [
            "A. • On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7100\n• On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7300\n• On the Direct Connect BGP peer to us-east-1, set the local preference value to 200\n• On the Direct Connect BGP peer to af-south-1, set the local preference value to 50",
            "B. • On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7300\n• On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7100\n• On the Direct Connect BGP peer to us-east-1, set the local preference value to 200\n• On the Direct Connect BGP peer to af-south-1, set the local preference value to 50",
            "C. • On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7100\n• On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7300\n• On the Direct Connect BGP peer to us-east-1, set the local preference value to 50\n• On the Direct Connect BGP peer to af-south-1, set the local preference value to 200",
            "D. • On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7300\n• On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7100\n• On the Direct Connect BGP peer to us-east-1, set the local preference value to 50\n• On the Direct Connect BGP peer to af-south-1, set the local preference value to 200"
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사에는 두 개의 AWS Direct Connect 링크가 있습니다. 하나의 Direct Connect 링크는 us-east-1 리전에 종료되고, 다른 Direct Connect 링크는 af-south-1 리전에 종료됩니다. 회사는 BGP를 사용하여 AWS와 경로를 교환하고 있습니다.\n네트워크 엔지니어가 af-south-1을 AWS에 대한 보조 링크로 사용하도록 BGP를 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. • us-east-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다.\n• af-south-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다.\n• us-east-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 200으로 설정합니다.\n• af-south-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 50으로 설정합니다.",
            "B. • us-east-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다.\n• af-south-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다.\n• us-east-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 200으로 설정합니다.\n• af-south-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 50으로 설정합니다.",
            "C. • us-east-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다.\n• af-south-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다.\n• us-east-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 50으로 설정합니다.\n• af-south-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 200으로 설정합니다.",
            "D. • us-east-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다.\n• af-south-1의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다.\n• us-east-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 50으로 설정합니다.\n• af-south-1 Direct Connect BGP 피어에 로컬 기본 설정 값을 200으로 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 145,
        "question": "A team of infrastructure engineers wants to automate the deployment of Application Load Balancer (ALB) components by using the AWS Cloud\nDevelopment Kit (AWS CDK). The CDK application must deploy an infrastructure stack that is reusable and consistent across multiple\nenvironments, AWS Regions, and AWS accounts.\nThe lead network architect on the project has already bootstrapped the target accounts. The lead network architect also has deployed core\nnetwork components such as VPCs and Amazon Route 53 private hosted zones across the multiple environments and Regions. The infrastructure\nengineers must design the ALB components in the CDK application to use the existing core network components.\nWhich combination of steps will meet this requirement with the LEAST manual effort between environment deployments? (Choose two.)",
        "options": [
            "A. Design the CDK application to read AWS CloudFormation parameters for the values that vary across environments and Regions. Reference\nthese variables in the CDK stack for resources that require the variables.",
            "B. Design the CDK application to read environment variables that contain account and Region details at runtime. Use these variables as\nproperties of the CDK stack. Use context methods in the CDK stack to retrieve variable values.",
            "C. Create a dedicated account for shared application services in the multi-account environment. Deploy a CDK pipeline to the dedicated\naccount. Create stages in the pipeline that deploy the CDK application across different environments and Regions.",
            "D. Write a script that automates the deployment of the CDK application across multiple environments and Regions. Distribute the script to\nengineers who are working on the project.",
            "E. Use the CDK toolkit locally to deploy stacks to each environment and Region. Use the --context flag to pass in variables that the CDK\napplication can reference at runtime."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (78%) AC (22%)",
        "question_ko": "인프라 엔지니어 팀은 AWS Cloud Development Kit(AWS CDK)를 사용하여 Application Load Balancer(ALB) 구성 요소를 자동으로 배포하려고 합니다. CDK 애플리케이션은 여러 환경, AWS 리전 및 AWS 계정에 걸쳐 재사용 가능하고 일관된 인프라 스택을 배포해야 합니다.\n프로젝트의 기술 책임자는 이미 대상 계정을 부트스트랩했습니다. 또한 VPC와 Amazon Route 53 프라이빗 호스팅 영역과 같은 핵심 네트워크 구성 요소를 여러 환경과 리전에 배포했습니다. 인프라 엔지니어는 기존 핵심 네트워크 구성 요소를 사용하도록 CDK 애플리케이션의 ALB 구성 요소를 설계해야 합니다.\n환경 배포 간 수동 작업을 최소화하는 조합은 무엇입니까? (두 개를 선택하세요.)",
        "options_ko": [
            "A. 환경 및 리전 간 변경되는 값을 포함하는 AWS CloudFormation 매개변수를 읽도록 CDK 애플리케이션을 설계합니다. 이러한 변수를 매개변수로 참조하는 CDK 스택 리소스를 사용합니다.",
            "B. 런타임에 계정 및 리전 세부 정보를 포함하는 환경 변수를 읽도록 CDK 애플리케이션을 설계합니다. 이러한 변수를 CDK 스택 속성으로 사용합니다. CDK 스택에서 컨텍스트 메서드를 사용하여 변수 값을 검색합니다.",
            "C. 공유 애플리케이션 서비스용 전용 계정을 다중 계정 환경에 생성합니다. 전용 계정에 CDK 파이프라인을 배포합니다. 파이프라인의 단계에서 다른 환경과 리전에 CDK 애플리케이션을 배포합니다.",
            "D. CDK 애플리케이션을 여러 환경과 리전에 배포하는 스크립트를 작성합니다. 스크립트를 프로젝트에 참여하는 엔지니어에게 배포합니다.",
            "E. CDK 툴킷을 로컬에서 사용하여 각 환경과 리전에 스택을 배포합니다. --context 플래그를 사용하여 CDK 애플리케이션에서 런타임에 참조할 수 있는 변수를 전달합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (78%) AC (22%)"
    },
    {
        "num": 146,
        "question": "A company has critical VPC workloads that connect to an on-premises data center through two redundant active-passive AWS Direct Connect\nconnections. However, a recent outage on one Direct Connect connection revealed that it takes more than a minute for traffic to fail over to the\nsecondary Direct Connect connection. The company wants to reduce the failover time from minutes to seconds.\nWhich solution will provide the LARGEST reduction in the BGP failover time?",
        "options": [
            "A. Reduce the BGP hold-down timer that is configured on the BGP sessions on the Direct Connect connection VIFs.",
            "B. Configure an Amazon CloudWatch alarm for the Direct Connect connection state to invoke an AWS Lambda function to fail over the traffic.",
            "C. Configure Bidirectional Forwarding Detection (BFD) on the Direct Connect connections on the AWS side.",
            "D. Configure Bidirectional Forwarding Detection (BFD) on the Direct Connect connections on the on-premises router."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "주 VPC 워크로드가 AWS Direct Connect 연결을 통해 온프레미스 데이터 센터에 연결되어 있습니다. 하지만 최근 하나의 Direct Connect 연결 장애로 인해 트래픽이 보조 Direct Connect 연결로 장애 조치되는데 1분 이상 소요됩니다. 회사는 장애 조치 시간을 분에서 초 단위로 단축하고 싶습니다. 이 요구사항을 가장 잘 충족시켜 줄 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 연결 VIF에 구성된 BGP 보류-시간(hold-down) 타이머를 줄이십시오.",
            "B. Direct Connect 연결 상태를 모니터링하는 Amazon CloudWatch 경보를 구성하고, 경보 발생 시 트래픽을 장애 조치하는 AWS Lambda 함수를 실행하십시오.",
            "C. AWS 측에서 Direct Connect 연결에 Bidirectional Forwarding Detection (BFD)을 구성하십시오.",
            "D. 온프레미스 라우터에서 Direct Connect 연결에 Bidirectional Forwarding Detection (BFD)을 구성하십시오."
        ],
        "explanation_ko": "D. Bidirectional Forwarding Detection (BFD)을 온프레미스 라우터에 구성하면 BGP 장애 조치 시간을 가장 크게 단축할 수 있습니다."
    },
    {
        "num": 147,
        "question": "A European car manufacturer wants to migrate its customer-facing services and its analytics platform from two on-premises data centers to the\nAWS Cloud. The company has a 50-mile (80.4 km) separation between its on-premises data centers and must maintain that separation between\nits two locations in the cloud. The company also needs failover capabilities between the two locations in the cloud.\nThe company's infrastructure team creates several accounts to separate workloads and responsibilities. The company provisions resources in the\neu-west-3 Region and in the eu-central-1 Region. The company selects an AWS Direct Connect Partner in each Region and requests two resilient 1\nGbps fiber connections from each provider.\nThe company's network engineer must establish a connection between all VPCs in the accounts and between the on-premises network and the\nAWS Cloud. The solution must provide access to all services in both Regions in case of network issues.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a Direct Connect gateway. Create a private VIF on each of the Direct Connect connections. Attach the private VIFs to the Direct\nConnect gateway. Use equal-cost multi-path (ECMP) routing to aggregate the four connections across the two Regions. Attach the Direct\nConnect gateway directly to each VPC's virtual private gateway.",
            "B. Create a Direct Connect gateway. Create a transit gateway. Attach the transit gateway to the Direct Connect gateway. Create a transit VIF on\neach of the Direct Connect connections. Attach the transit VIFs to the Direct Connect gateway. Use a link aggregation group (LAG) to\naggregate the four connections across the two Regions. Attach the transit gateway directly to each VPC.",
            "C. Create a Direct Connect gateway. Create a transit gateway in each Region. Attach the transit gateways to the Direct Connect gateway.\nCreate a transit VIF on each of the Direct Connect connections. Attach the transit VIFs to the Direct Connect gateway. Peer the transit\ngateways. Attach the transit gateways in each Region to the VPCs in the same Region.",
            "D. Create a Direct Connect gateway. Create a private VIF on each of the Direct Connect connections. Attach the private VIFs to the Direct\nConnect gateway. Use a link aggregation group (LAG) to aggregate the four connections across the two Regions. Create a transit gateway.\nAttach the transit gateway to the Direct Connect gateway. Attach the transit gateway directly to each VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "유럽 자동차 제조업체는 고객 대면 서비스와 분석 플랫폼을 온프레미스 데이터 센터에서 AWS 클라우드로 마이그레이션하려 합니다. 회사는 온프레미스 데이터 센터 간 거리가 50마일(80.4 km)이며, 클라우드에서도 이 거리를 유지해야 합니다. 또한 클라우드 내에서 장애 조치 기능이 필요합니다. 회사는 워크로드와 책임을 분리하기 위해 여러 계정을 생성했습니다. eu-west-3 리전과 eu-central-1 리전에 리소스를 프로비저닝했으며, 각 리전별로 AWS Direct Connect 파트너를 선택하여 2개의 1Gbps 광섬유 연결을 요청했습니다. 이 요구사항을 가장 잘 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 게이트웨이를 생성하고, 각 Direct Connect 연결에 프라이빗 VIF를 생성한 후 Direct Connect 게이트웨이에 연결하십시오. 4개 연결을 ECMP 라우팅으로 집계하고, Direct Connect 게이트웨이를 각 VPC의 가상 프라이빗 게이트웨이에 직접 연결하십시오.",
            "B. Direct Connect 게이트웨이를 생성하고, 트랜짓 게이트웨이를 생성한 후 Direct Connect 게이트웨이에 연결하십시오. 각 Direct Connect 연결에 트랜짓 VIF를 생성하고, Direct Connect 게이트웨이에 연결하십시오. LAG를 사용하여 4개 연결을 집계하고, 트랜짓 게이트웨이를 각 VPC에 직접 연결하십시오.",
            "C. Direct Connect 게이트웨이를 생성하고, 각 리전에 트랜짓 게이트웨이를 생성한 후 Direct Connect 게이트웨이에 연결하십시오. 각 Direct Connect 연결에 트랜짓 VIF를 생성하고, Direct Connect 게이트웨이에 연결하십시오. 트랜짓 게이트웨이를 피어링하고, 각 리전의 트랜짓 게이트웨이를 해당 리전의 VPC에 연결하십시오.",
            "D. Direct Connect 게이트웨이를 생성하고, 각 Direct Connect 연결에 프라이빗 VIF를 생성한 후 Direct Connect 게이트웨이에 연결하십시오. LAG를 사용하여 4개 연결을 집계하고, 트랜짓 게이트웨이를 생성한 후 Direct Connect 게이트웨이에 연결하십시오. 트랜짓 게이트웨이를 각 VPC에 직접 연결하십시오."
        ],
        "explanation_ko": "C. 각 리전에 트랜짓 게이트웨이를 생성하고, Direct Connect 게이트웨이를 통해 연결하면 모든 요구사항을 충족할 수 있습니다."
    },
    {
        "num": 148,
        "question": "A company wants to analyze TCP traffic to the internet. The traffic originates from Amazon EC2 instances in the company's VPC. The EC2\ninstances initiate connections through a NAT gateway. The required information includes source and destination IP addresses, ports, and the first\n8 bytes of payload of TCP segments. The company needs to collect, store, and analyze all the required data points.\nWhich solution will meet these requirements?",
        "options": [
            "A. Set up the EC2 instances as VPC traffic mirror sources. Deploy software on the traffic mirror target to forward the data to Amazon\nCloudWatch Logs. Analyze the data by using CloudWatch Logs Insights.",
            "B. Set up the NAT gateway as a VPC traffic mirror source. Deploy software on the traffic mirror target to forward the data to an Amazon\nOpenSearch Service cluster. Analyze the data by using OpenSearch Dashboards.",
            "C. Turn on VPC Flow Logs on the EC2 instances. Specify the default format and a log destination of Amazon CloudWatch Logs. Analyze the\nflow log data by using CloudWatch Logs Insights.",
            "D. Turn on VPC Flow Logs on the EC2 instances. Specify a custom format and a log destination of Amazon S3. Analyze the flow log data by\nusing Amazon Athena."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (90%) 10%",
        "question_ko": "회사는 VPC의 Amazon EC2 인스턴스에서 인터넷으로 전송되는 TCP 트래픽을 분석하려 합니다. EC2 인스턴스는 NAT 게이트웨이를 통해 연결을 시작합니다. 필요한 정보에는 소스 및 대상 IP 주소, 포트, TCP 세그먼트의 첫 8바이트 페이로드가 포함됩니다. 회사는 이 모든 데이터를 수집, 저장 및 분석해야 합니다. 이 요구사항을 충족시켜 줄 솔루션은 무엇입니까?",
        "options_ko": [
            "A. EC2 인스턴스를 VPC 트래픽 미러 소스로 설정하고, 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon CloudWatch Logs로 전달한 다음, CloudWatch Logs Insights로 데이터를 분석하십시오.",
            "B. NAT 게이트웨이를 VPC 트래픽 미러 소스로 설정하고, 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon OpenSearch Service 클러스터로 전달한 다음, OpenSearch Dashboards로 데이터를 분석하십시오.",
            "C. EC2 인스턴스에 VPC Flow Logs를 활성화하고, 기본 형식과 Amazon CloudWatch Logs 로그 대상을 지정한 다음, CloudWatch Logs Insights로 흐름 로그 데이터를 분석하십시오.",
            "D. EC2 인스턴스에 VPC Flow Logs를 활성화하고, 사용자 지정 형식과 Amazon S3 로그 대상을 지정한 다음, Amazon Athena로 흐름 로그 데이터를 분석하십시오."
        ],
        "explanation_ko": "A. VPC 트래픽 미러링을 사용하여 EC2 인스턴스에서 필요한 데이터를 수집하고, CloudWatch Logs에 저장한 후 CloudWatch Logs Insights로 분석할 수 있습니다."
    },
    {
        "num": 149,
        "question": "A company has three VPCs in a single AWS Region. Each VPC contains 15 Amazon EC2 instances, and no connectivity exists between the VPCs.\nThe company is deploying a new application across all three VPCs. The application requires high bandwidth between the nodes. A network\nengineer must implement connectivity between the VPCs.\nWhich solution will meet these requirements with the HIGHEST throughput?",
        "options": [
            "A. Configure a transit gateway. Attach each VPC to the transit gateway. Configure static routing in each VPC to route traffic to the transit\ngateway.",
            "B. Configure VPC peering between the three VPCs. Configure static routing to route traffic between the three VPCs.",
            "C. Configure a transit VPConfigure a VPN gateway in each VPCreate an AWS Site-to-Site VPN tunnel from each VPC to the transit VPUse BGP\nrouting to route traffic between the VPCs and the transit VPC.",
            "D. Configure AWS Site-to-Site VPN connections between each VPC. Enable route propagation for each Site-to-Site VPN connection to route\ntraffic between the VPCs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (74%) A (26%)",
        "question_ko": "회사에는 단일 AWS 리전에 3개의 VPC가 있습니다. 각 VPC에는 15개의 Amazon EC2 인스턴스가 있으며, VPC 간에는 연결이 없습니다. 새로운 애플리케이션을 3개의 VPC에 배포해야 하며, 노드 간 높은 대역폭이 필요합니다. 네트워크 엔지니어는 VPC 간 연결을 구현해야 합니다. 이 요구사항을 가장 높은 처리량으로 충족시켜 줄 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이를 구성하고, 각 VPC를 트랜짓 게이트웨이에 연결한 다음, 트래픽 라우팅을 위해 각 VPC에 정적 라우팅을 구성하십시오.",
            "B. 3개의 VPC 간에 VPC 피어링을 구성하고, 트래픽 라우팅을 위해 정적 라우팅을 구성하십시오.",
            "C. 트랜짓 VPC를 구성하고, 각 VPC에 VPN 게이트웨이를 생성한 다음, 각 VPC에서 트랜짓 VPC로 AWS Site-to-Site VPN 터널을 연결하십시오. BGP 라우팅을 사용하여 VPC와 트랜짓 VPC 간 트래픽을 라우팅하십시오.",
            "D. 각 VPC 간에 AWS Site-to-Site VPN 연결을 구성하고, 각 Site-to-Site VPN 연결에 대한 라우트 전파를 활성화하여 VPC 간 트래픽을 라우팅하십시오."
        ],
        "explanation_ko": "B. VPC 피어링을 구성하고 정적 라우팅을 사용하면 가장 높은 처리량을 달성할 수 있습니다."
    },
    {
        "num": 150,
        "question": "A network engineer needs to deploy an AWS Network Firewall firewall into an existing AWS environment. The environment consists of the\nfollowing:\n• A transit gateway with all VPCs attached to it\n• Several hundred application VPCs\n• A centralized egress internet VPC with a NAT gateway and an internet gateway\n• A centralized ingress internet VPC that hosts public Application Load Balancers\n• On-premises connectivity through an AWS Direct Connect gateway attachment\nThe application VPCs have workloads deployed across multiple Availability Zones in private subnets with the VPC route table s default route\n(0.0.0.0/0) pointing to the transit gateway. The Network Firewall firewall needs to inspect east-west (VPC-to-VPC) traffic and north-south (internet-\nbound and on-premises network) traffic by using Suricata compatible rules.\nThe network engineer must deploy the firewall by using a solution that requires the least possible architectural changes to the existing production\nenvironment.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose three.)",
        "options": [
            "A. Deploy Network Firewall in all Availability Zones in each application VPC.",
            "B. Deploy Network Firewall in all Availability Zones in a centralized inspection VPC.",
            "C. Update the HOME_NET rule group variable to include all CIDR ranges of the VPCs and on-premises networks.",
            "D. Update the EXTERNAL_NET rule group variable to include all CIDR ranges of the VPCs and on-premises networks.",
            "E. Configure a single transit gateway route table. Associate all application VPCs and the centralized inspection VPC with this route table.",
            "F. Configure two transit gateway route tables. Associate all application VPCs with one transit gateway route table. Associate the centralized\ninspection VPC with the other transit gateway route table."
        ],
        "answers": [
            "B",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCF (93%) 7%",
        "question_ko": "네트워크 엔지니어는 기존 AWS 환경에 AWS Network Firewall 방화벽을 배포해야 합니다. 이 환경에는 다음과 같은 구성 요소가 있습니다:\n• 모든 VPC가 연결된 트랜짓 게이트웨이\n• 수백 개의 애플리케이션 VPC\n• NAT 게이트웨이와 인터넷 게이트웨이가 있는 중앙 집중식 인터넷 egress VPC\n• 퍼블릭 Application Load Balancer가 호스팅된 중앙 집중식 인터넷 ingress VPC\n• AWS Direct Connect 게이트웨이를 통한 온프레미스 연결\n애플리케이션 VPC의 프라이빗 서브넷에는 워크로드가 배포되어 있으며, VPC 라우팅 테이블의 기본 경로(0.0.0.0/0)는 트랜짓 게이트웨이를 가리킵니다. 네트워크 방화벽은 VPC 간 트래픽과 인터넷 및 온프레미스 네트워크로 향하는 트래픽을 Suricata 호환 규칙으로 검사해야 합니다. 네트워크 엔지니어는 기존 프로덕션 환경에 가능한 한 적은 아키텍처 변경을 가해야 합니다. 이 요구사항을 충족시킬 수 있는 조치는 무엇입니까? (3개 선택)",
        "options_ko": [
            "A. 각 애플리케이션 VPC의 모든 가용 영역에 Network Firewall을 배포하십시오.",
            "B. 중앙 집중식 검사 VPC의 모든 가용 영역에 Network Firewall을 배포하십시오.",
            "C. HOME_NET 규칙 그룹 변수에 VPC와 온프레미스 네트워크의 모든 CIDR 범위를 업데이트하십시오.",
            "D. EXTERNAL_NET 규칙 그룹 변수에 VPC와 온프레미스 네트워크의 모든 CIDR 범위를 업데이트하십시오.",
            "E. 단일 트랜짓 게이트웨이 라우팅 테이블을 구성하고, 모든 애플리케이션 VPC와 중앙 집중식 검사 VPC를 이 라우팅 테이블에 연결하십시오.",
            "F. 두 개의 트랜짓 게이트웨이 라우팅 테이블을 구성하십시오. 모든 애플리케이션 VPC를 한 트랜짓 게이트웨이 라우팅 테이블에 연결하고, 중앙 집중식 검사 VPC를 다른 트랜짓 게이트웨이 라우팅 테이블에 연결하십시오."
        ],
        "explanation_ko": "B, C, F. 중앙 집중식 검사 VPC에 Network Firewall을 배포하고, HOME_NET과 EXTERNAL_NET 규칙 그룹 변수를 업데이트하며, 두 개의 트랜짓 게이트웨이 라우팅 테이블을 사용하면 기존 환경에 가장 적은 변경으로 요구사항을 충족할 수 있습니다."
    },
    {
        "num": 151,
        "question": "A company is using a shared services VPC with two domain controllers. The domain controllers are deployed in the company's private subnets.\nThe company is deploying a new application into a new VPC in the account. The application will be deployed onto an Amazon EC2 for Windows\nServer instance in the new VPC. The instance must join the existing Windows domain that is supported by the domain controllers in the shared\nservices VPC.\nA transit gateway is attached to both the shared services VPC and the new VPC. The company has updated the route tables for the transit\ngateway, the shared services VPC, and the new VPC. The security groups for the domain controllers and the instance are updated and allow traffic\nonly on the ports that are necessary for domain operations. The instance is unable to join the domain that is hosted on the domain controllers.\nWhich combination of actions will help identify the cause of this issue with the LEAST operational overhead? (Choose two.)",
        "options": [
            "A. Use AWS Network Manager to perform a route analysis for the transit gateway network. Specify the existing EC2 instance as the source.\nSpecify the first domain controller as the destination. Repeat the route analysis for the second domain controller.",
            "B. Use port mirroring with the existing EC2 instance as the source and another EC2 instance as the target to obtain packet captures of the\nconnection attempts.",
            "C. Review the VPC flow logs on the shared services VPC and the new VPC.",
            "D. Issue a ping command from one of the domain controllers to the existing EC2 instance.",
            "E. Ensure that route propagation is turned off on the shared services VPC."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AC (100%)",
        "question_ko": "기업은 공유 서비스 VPC에서 두 개의 도메인 컨트롤러를 사용하고 있습니다. 도메인 컨트롤러는 기업의 프라이빗 서브넷에 배포되어 있습니다. 기업은 새 계정의 새 VPC에 새 애플리케이션을 배포하고 있습니다. 애플리케이션은 새 VPC의 Amazon EC2 for Windows Server 인스턴스에 배포됩니다. 이 인스턴스는 공유 서비스 VPC의 도메인 컨트롤러가 지원하는 기존 Windows 도메인에 참가해야 합니다. 트랜짓 게이트웨이가 공유 서비스 VPC와 새 VPC에 연결되어 있습니다. 기업은 트랜짓 게이트웨이, 공유 서비스 VPC, 새 VPC의 라우팅 테이블을 업데이트했습니다. 도메인 컨트롤러와 인스턴스의 보안 그룹도 업데이트되어 도메인 작업에 필요한 포트로만 트래픽을 허용합니다. 그런데 인스턴스가 도메인 컨트롤러에서 호스팅되는 도메인에 참가할 수 없습니다. 운영 오버헤드를 최소화하는 조치 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. AWS Network Manager를 사용하여 트랜짓 게이트웨이 네트워크에 대한 경로 분석을 수행합니다. 기존 EC2 인스턴스를 소스로, 첫 번째 도메인 컨트롤러를 대상으로 지정합니다. 두 번째 도메인 컨트롤러에 대해서도 경로 분석을 반복합니다.",
            "B. 기존 EC2 인스턴스를 소스로, 다른 EC2 인스턴스를 대상으로 포트 미러링을 사용하여 연결 시도의 패킷 캡처를 얻습니다.",
            "C. 공유 서비스 VPC와 새 VPC의 VPC 흐름 로그를 검토합니다.",
            "D. 도메인 컨트롤러 중 하나에서 기존 EC2 인스턴스로 ping 명령을 실행합니다.",
            "E. 공유 서비스 VPC에서 경로 전파가 꺼져 있는지 확인합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AC (100%)"
    },
    {
        "num": 152,
        "question": "A company has an order processing system that needs to keep credit card numbers encrypted. The company's customer-facing application runs\nas an Amazon Elastic Container Service (Amazon ECS) service behind an Application Load Balancer (ALB) in the us-west-2 Region. An Amazon\nCloudFront distribution is configured with the ALB as the origin. The company uses a third-party trusted certificate authority to provision its\ncertificates.\nThe company is using HTTPS for encryption in transit. The company needs additional field-level encryption to keep sensitive data encrypted\nduring processing so that only certain application components can decrypt the sensitive data.\nWhich combination of steps will meet these requirements? (Choose two.)",
        "options": [
            "A. Import the third-party certificate for the ALB. Associate the certificate with the ALB. Upload the certificate for the CloudFront distribution\ninto AWS Certificate Manager (ACM) in us-west-2.",
            "B. Import the third-party certificate for the ALB into AWS Certificate Manager (ACM) in us-west-2. Associate the certificate with the ALUpload\nthe certificate for the CloudFront distribution into ACM in the us-east-1 Region.",
            "C. Upload the private key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption profile\nand specify the fields that contain sensitive information. Create a field-level encryption configuration, and choose the newly created profile.\nLink the configuration to the appropriate cache behavior that is associated with sensitive POST requests.",
            "D. Upload the public key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption\nconfiguration, and specify the fields that contain sensitive information. Create a field-level encryption profile, and choose the newly created\nconfiguration. Link the profile to the appropriate cache behavior that is associated with sensitive GET requests.",
            "E. Upload the public key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption profile\nand specify the fields that contain sensitive information. Create a field-level encryption configuration, and choose the newly created profile.\nLink the configuration to the appropriate cache behavior that is associated with sensitive POST requests."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BE (92%) 8%",
        "question_ko": "기업의 주문 처리 시스템은 신용카드 번호를 암호화해야 합니다. 고객 대면 애플리케이션은 us-west-2 리전의 Application Load Balancer(ALB) 뒤에서 실행되는 Amazon Elastic Container Service(Amazon ECS) 서비스입니다. Amazon CloudFront 배포는 ALB를 오리진으로 구성되어 있습니다. 기업은 타사 신뢰할 수 있는 인증 기관에서 인증서를 프로비저닝합니다. 기업은 전송 중 암호화를 위해 HTTPS를 사용합니다. 기업은 민감한 데이터를 처리하는 동안 필드 수준 암호화를 추가로 사용하여 특정 애플리케이션 구성 요소만 민감한 데이터를 해독할 수 있도록 해야 합니다. 이 요구사항을 충족하는 조치 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. ALB에 대해 타사 인증서를 가져옵니다. 인증서를 ALB에 연결합니다. us-west-2 리전의 AWS Certificate Manager(ACM)에 CloudFront 배포의 인증서를 업로드합니다.",
            "B. us-west-2 리전의 AWS Certificate Manager(ACM)에 ALB의 타사 인증서를 가져옵니다. 인증서를 ALB에 연결합니다. us-east-1 리전의 ACM에 CloudFront 배포의 인증서를 업로드합니다.",
            "C. 민감한 데이터를 암호화하는 개인 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 프로파일을 만들고 민감한 정보가 포함된 필드를 지정합니다. 필드 수준 암호화 구성을 만들고 새로 만든 프로파일을 선택합니다. 민감한 POST 요청과 연결된 적절한 캐시 동작에 구성을 연결합니다.",
            "D. 민감한 데이터를 암호화하는 공개 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 구성을 만들고 민감한 정보가 포함된 필드를 지정합니다. 필드 수준 암호화 프로파일을 만들고 새로 만든 구성을 선택합니다. 민감한 GET 요청과 연결된 적절한 캐시 동작에 프로파일을 연결합니다.",
            "E. 민감한 데이터를 암호화하는 공개 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 프로파일을 만들고 민감한 정보가 포함된 필드를 지정합니다. 필드 수준 암호화 구성을 만들고 새로 만든 프로파일을 선택합니다. 민감한 POST 요청과 연결된 적절한 캐시 동작에 구성을 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BE (92%) 8%"
    },
    {
        "num": 153,
        "question": "A company has deployed a multi-VPC environment in the AWS Cloud. The company uses a transit gateway to connect all the VPCs together. In the\npast, the company has experienced a loss of connectivity between applications after changes to security groups, network ACLs, and route tables\nin a VPC. When these changes occur, the company wants to automatically verify that connectivity still exists between different resources in a\nsingle VPC.",
        "options": [
            "A. Create a list of paths between different resources to check in VPC Reachability Analyzer. Create an Amazon EventBridge rule to monitor\nwhen a change is made and logged in Amazon CloudWatch. Configure the rule to invoke an AWS Lambda function to test the different paths in\nReachability Analyzer.",
            "B. Create a list of paths between different resources to check in VPC Reachability Analyzer. Create an Amazon EventBridge rule to monitor\nwhen a change is made and logged in AWS. CloudTrail. Configure the rule to invoke an AWS Lambda function to test the different paths in\nReachability Analyzer.",
            "C. Create a list of paths to check in AWS Transit Gateway Network Manager Route Analyzer. Create an Amazon EventBridge rule to monitor\nwhen a change is made and logged in Amazon CloudWatch. Configure the rule to invoke an AWS Lambda function to test the diffident paths in\nRoute Analyzer.",
            "D. Create a list of paths to check in AWS Transit Gateway Network Manager Route Analyzer. Create an Amazon EventBridge rule to monitor\nwhen a change is made and logged in AWS CloudTrail. Configure the rule to invoke an AWS Lambda function to test the different paths in\nRoute Analyzer."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (82%) A (18%)",
        "question_ko": "기업은 AWS 클라우드에 다중 VPC 환경을 배포했습니다. 기업은 트랜짓 게이트웨이를 사용하여 모든 VPC를 연결합니다. 과거에 VPC의 보안 그룹, 네트워크 ACL, 라우팅 테이블 변경 후 애플리케이션 간 연결이 끊긴 경험이 있습니다. 이러한 변경이 발생할 때 기업은 단일 VPC 내 다른 리소스 간 연결 상태를 자동으로 확인하고 싶습니다.",
        "options_ko": [
            "A. VPC Reachability Analyzer에서 확인할 다른 리소스 간 경로 목록을 만듭니다. Amazon CloudWatch에 기록된 변경 사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 호출하고 Reachability Analyzer에서 다양한 경로를 테스트하도록 합니다.",
            "B. VPC Reachability Analyzer에서 확인할 다른 리소스 간 경로 목록을 만듭니다. AWS CloudTrail에 기록된 변경 사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 호출하고 Reachability Analyzer에서 다양한 경로를 테스트하도록 합니다.",
            "C. AWS Transit Gateway Network Manager Route Analyzer에서 확인할 경로 목록을 만듭니다. Amazon CloudWatch에 기록된 변경 사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 호출하고 Route Analyzer에서 다양한 경로를 테스트하도록 합니다.",
            "D. AWS Transit Gateway Network Manager Route Analyzer에서 확인할 경로 목록을 만듭니다. AWS CloudTrail에 기록된 변경 사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 호출하고 Route Analyzer에서 다양한 경로를 테스트하도록 합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (82%) A (18%)"
    },
    {
        "num": 154,
        "question": "A company hosts a web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in\nan Auto Scaling group. The company uses an Amazon CloudFront distribution with the ALB as an origin.\nThe application recently experienced an attack. In response, the company associated an AWS WAF web ACL with the CloudFront distribution. The\ncompany needs to use Amazon Athena to analyze application attacks that AWS WAF detects.\nWhich solution will meet this requirement?",
        "options": [
            "A. Configure the ALB and the EC2 instance subnets to produce VPC flow logs. Configure the VPC flow logs to deliver logs to an Amazon S3\nbucket for log analysis.",
            "B. Create a trail in AWS CloudTrail to capture data events. Configure the trail to deliver logs to an Amazon S3 bucket for log analysis.",
            "C. Configure the AWS WAF web ACL to deliver logs to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the\ndata to an Amazon S3 bucket for log analysis.",
            "D. Turn on access logging for the ALB. Configure the access logs to deliver the logs to an Amazon S3 bucket for log analysis."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "기업은 Application Load Balancer(ALB) 뒤에서 실행되는 Amazon EC2 인스턴스 플릿에 호스팅되는 웹 애플리케이션을 보유하고 있습니다. 인스턴스는 Auto Scaling 그룹에 있습니다. 기업은 ALB를 오리진으로 사용하는 Amazon CloudFront 배포를 사용합니다. 애플리케이션이 최근 공격을 받았습니다. 이에 대응하여 기업은 CloudFront 배포에 AWS WAF 웹 ACL을 연결했습니다. 기업은 AWS WAF가 탐지한 애플리케이션 공격을 Amazon Athena를 사용하여 분석해야 합니다. 이 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. ALB와 EC2 인스턴스 서브넷에서 VPC 흐름 로그를 구성합니다. VPC 흐름 로그를 로그 분석을 위한 Amazon S3 버킷에 전송하도록 구성합니다.",
            "B. AWS CloudTrail에서 트레일을 생성하여 데이터 이벤트를 캡처합니다. 트레일을 구성하여 로그를 로그 분석을 위한 Amazon S3 버킷에 전송합니다.",
            "C. AWS WAF 웹 ACL을 구성하여 로그를 Amazon Kinesis Data Firehose 전송 스트림에 전송합니다. 스트림을 구성하여 데이터를 로그 분석을 위한 Amazon S3 버킷에 전송합니다.",
            "D. ALB에 대한 액세스 로깅을 켭니다. 액세스 로그를 로그 분석을 위한 Amazon S3 버킷에 전송하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 155,
        "question": "A real estate company is using Amazon Workspaces to provide corporate managed desktop service to its real estate agents around the world.\nThese Workspaces are deployed in seven VPCs. Each VPC is in a different AWS Region.\nAccording to a new requirement, the company’s cloud-hosted security information and events management (SIEM) system needs to analyze DNS\nqueries generated by the Workspaces to identify the target domains that are connected to the Workspaces. The SIEM system supports poll and\npush methods for data and log collection.\nWhich solution should a network engineer implement to meet these requirements MOST cost-effectively?",
        "options": [
            "A. Create VPC flow logs in each VPC that is connected to the Workspaces instances. Publish the log data to a central Amazon S3 bucket.\nConfigure the SIEM system to poll the S3 bucket periodically.",
            "B. Configure an Amazon CloudWatch agent to log all DNS requests in Amazon CloudWatch Logs. Configure a subscription filter in CloudWatch\nLogs. Push the logs to the SIEM system by using Amazon Kinesis Data Firehose.",
            "C. Configure VPC Traffic Mirroring to copy network traffic from each Workspace and to send the traffic to the SIEM system probes for analysis.",
            "D. Configure Amazon Route 53 query logging. Set the destination as an Amazon Kinesis Data Firehose delivery stream that is configured to\npush data to the SIEM system."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (69%) A (25%) 6%",
        "question_ko": "부동산 회사는 전 세계 부동산 중개인에게 기업 관리 데스크톱 서비스를 제공하기 위해 Amazon Workspaces를 사용하고 있습니다. 이러한 Workspaces는 7개의 VPC에 배포되어 있으며 각 VPC는 다른 AWS 리전에 있습니다. 새로운 요구사항에 따르면 회사의 클라우드 호스팅 SIEM(보안 정보 및 이벤트 관리) 시스템이 Workspaces에서 생성된 DNS 쿼리를 분석하여 Workspaces에 연결된 대상 도메인을 식별해야 합니다. SIEM 시스템은 데이터 및 로그 수집을 위해 폴링 및 푸시 방식을 지원합니다. 네트워크 엔지니어가 구현해야 하는 가장 비용 효율적인 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Workspaces 인스턴스에 연결된 각 VPC에서 VPC 흐름 로그를 생성합니다. 로그 데이터를 중앙 Amazon S3 버킷에 게시합니다. SIEM 시스템을 구성하여 S3 버킷을 주기적으로 폴링하도록 합니다.",
            "B. Amazon CloudWatch Logs에 모든 DNS 요청을 기록하도록 Amazon CloudWatch 에이전트를 구성합니다. CloudWatch Logs에 구독 필터를 구성합니다. Amazon Kinesis Data Firehose를 사용하여 로그를 SIEM 시스템에 푸시합니다.",
            "C. VPC Traffic Mirroring을 구성하여 각 Workspace의 네트워크 트래픽을 복사하고 SIEM 시스템 프로브로 전송합니다.",
            "D. Amazon Route 53 쿼리 로깅을 구성합니다. 대상을 SIEM 시스템으로 푸시하도록 구성된 Amazon Kinesis Data Firehose 전송 스트림으로 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (69%) A (25%) 6%"
    },
    {
        "num": 156,
        "question": "A network engineer needs to design the architecture for a high performance computing (HPC) workload. Amazon EC2 instances will require 10\nGbps flows and an aggregate throughput of up to 100 Gbps across many instances with low-latency communication.\nWhich architecture solution will optimize this workload?",
        "options": [
            "A. Place nodes in a single subnet of a VPC. Configure a cluster placement group. Ensure that the latest Elastic Fabric Adapter (EFA) drivers\nare installed on the EC2 instances with a supported operating system.",
            "B. Place nodes in multiple subnets in a single VPC. Configure a spread placement group. Ensure that the EC2 instances support Elastic\nNetwork Adapters (ENAs) and that the drivers are updated on each instance operating system.",
            "C. Place nodes in multiple VPCs Use AWS Transit Gateway to route traffic between the VPCs. Ensure that the latest Elastic Fabric Adapter\n(EFA) drivers are installed on the EC2 instances with a supported operating system.",
            "D. Place nodes in multiple subnets in multiple Availability Zones. Configure a cluster placement group. Ensure that the EC2 instances support\nElastic Network Adapters (ENAs) and that the drivers are updated on each instance operating system."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "고성능 컴퓨팅(HPC) 워크로드를 설계하기 위해 네트워크 엔지니어가 필요한 아키텍처 솔루션은 무엇인가?",
        "options_ko": [
            "A. VPC의 단일 서브넷에 노드를 배치합니다. 클러스터 배치 그룹을 구성합니다. 지원되는 운영 체제에 Elastic Fabric Adapter(EFA) 드라이버를 최신 버전으로 설치했는지 확인합니다.",
            "B. VPC의 여러 서브넷에 노드를 배치합니다. 스프레드 배치 그룹을 구성합니다. EC2 인스턴스가 Elastic Network Adapter(ENA)를 지원하고 각 인스턴스 운영 체제에서 드라이버가 업데이트되었는지 확인합니다.",
            "C. 여러 VPC에 노드를 배치합니다. AWS Transit Gateway를 사용하여 VPC 간 트래픽을 라우팅합니다. 지원되는 운영 체제에 Elastic Fabric Adapter(EFA) 드라이버를 최신 버전으로 설치했는지 확인합니다.",
            "D. 여러 가용 영역의 여러 서브넷에 노드를 배치합니다. 클러스터 배치 그룹을 구성합니다. EC2 인스턴스가 Elastic Network Adapter(ENA)를 지원하고 각 인스턴스 운영 체제에서 드라이버가 업데이트되었는지 확인합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 157,
        "question": "A company uses multiple AWS accounts and VPCs in a single AWS Region. The company must log all network traffic for Amazon EC2 instances\nand Amazon RDS databases. The company will use the log information to monitor and identify traffic flows in the event of a security incident. The\ninformation must be retained for 12 months but will be accessed infrequently after the first 90 days. The company must be able to view metadata\nthat includes the vpc-id, subnet-id: and tcp-flags fields.\nWhich solution will meet these requirements at the LOWEST cost?",
        "options": [
            "A. Configure VPC flow logs with the default fields Store the logs in Amazon CloudWatch Logs.",
            "B. Configure Traffic Mirroring on all AWS resources to point to a Network Load Balancer that will send the mirrored traffic to monitoring\ninstances.",
            "C. Configure VPC flow logs with additional custom format fields Store the logs in Amazon S3.",
            "D. Configure VPC flow logs with additional custom format fields Store the logs in Amazon CloudWatch Logs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "여러 AWS 계정과 VPC를 사용하는 회사가 EC2 인스턴스와 RDS 데이터베이스의 모든 네트워크 트래픽을 로깅하고 12개월 동안 보관해야 하며, 90일 후에는 vpc-id, subnet-id, tcp-flags 메타데이터를 볼 수 있어야 하는데, 이에 가장 저렴한 솔루션은 무엇인가?",
        "options_ko": [
            "A. 기본 필드로 VPC 흐름 로그를 구성하고 Amazon CloudWatch Logs에 저장합니다.",
            "B. 모든 AWS 리소스에 트래픽 미러링을 구성하여 Network Load Balancer로 전송하고, 모니터링 인스턴스로 미러링된 트래픽을 보냅니다.",
            "C. 추가 사용자 지정 형식 필드로 VPC 흐름 로그를 구성하고 Amazon S3에 저장합니다.",
            "D. 추가 사용자 지정 형식 필드로 VPC 흐름 로그를 구성하고 Amazon CloudWatch Logs에 저장합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 158,
        "question": "A network engineer is evaluating a network setup for a global retail company. The company has an AWS Direct Connect connection between its\non-premises data center and the AWS Cloud. The company has AWS resources in the eu-west-2 Region. These resources consist of multiple VPCs\nthat are attached to a transit gateway.\nThe company recently provisioned a few AWS resources in the eu-central-1. Region in a single VPC close to its users in this area. The network\nengineer must connect the resources in eu-central-1 with the on-premises data center and the resources in eu-west-2. The solution must minimize\nchanges to the Direct Connect connection.\nWhat should the network engineer do to meet these requirements?",
        "options": [
            "A. Create a new virtual private gateway. Attach the new virtual private gateway to the VPC in eu-central-1. Use a transit VIF to connect the VPC\nand the Direct Connect router.",
            "B. Create a new transit gateway in eu-central-1. Create a peering attachment request to the transit gateway in eu-west-2. Add a static route in\nthe transit gateway route table in eu-central-1 to point to the transit gateway peering attachment. Accept the peering request. Add a static\nroute in the transit gateway route table in eu-west-2 to point to the new transit gateway peering attachment.",
            "C. Create a new transit gateway in eu-central-1. Use an AWS Site-to-Site VPN connection to peer both transit gateways. Add a static route in\nthe transit gateway route table in eu-central-1 to point to the transit gateway VPN attachment. Add a static route in the transit gateway route\ntable in eu-west-2 to point to the new transit gateway peering attachment.",
            "D. Create a new virtual private gateway. Attach the new virtual private gateway to the VPC in eu-central-1. Use a public VIF to connect the VPC\nand the Direct Connect router."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "기존 AWS Direct Connect 연결을 최소로 변경하면서 온프레미스 데이터 센터와 eu-west-2 리전의 Transit Gateway 리소스, eu-central-1 리전의 VPC 리소스를 연결하려면 어떻게 해야 하나?",
        "options_ko": [
            "A. 새로운 가상 프라이빗 게이트웨이를 만들고 eu-central-1의 VPC에 연결합니다. 트랜짓 VIF를 사용하여 VPC와 Direct Connect 라우터를 연결합니다.",
            "B. eu-central-1에 새로운 Transit Gateway를 만듭니다. eu-west-2의 Transit Gateway와 피어링 연결을 요청합니다. eu-central-1의 Transit Gateway 라우팅 테이블에 eu-west-2의 Transit Gateway 피어링 연결을 가리키는 정적 경로를 추가합니다. 피어링 요청을 수락합니다. eu-west-2의 Transit Gateway 라우팅 테이블에 새로운 Transit Gateway 피어링 연결을 가리키는 정적 경로를 추가합니다.",
            "C. eu-central-1에 새로운 Transit Gateway를 만듭니다. AWS Site-to-Site VPN 연결을 사용하여 두 Transit Gateway를 피어링합니다. eu-central-1의 Transit Gateway 라우팅 테이블에 Transit Gateway VPN 연결을 가리키는 정적 경로를 추가합니다. eu-west-2의 Transit Gateway 라우팅 테이블에 새로운 Transit Gateway 피어링 연결을 가리키는 정적 경로를 추가합니다.",
            "D. 새로운 가상 프라이빗 게이트웨이를 만들고 eu-central-1의 VPC에 연결합니다. 퍼블릭 VIF를 사용하여 VPC와 Direct Connect 라우터를 연결합니다."
        ],
        "explanation_ko": "커뮤니ティ 투표: B (100%)"
    },
    {
        "num": 159,
        "question": "A company has a 2 Gbps AWS Direct Connect hosted connection from the company’s office to a VPC in the ap-southeast-2 Region. A network\nengineer adds a 5 Gbps Direct Connect hosted connection from a different Direct Connect location in the same Region. The hosted connections\nare connected to different routers from the office with an iBGP session running in between the routers.\nThe network engineer wants to ensure that the VPC uses the 5 Gbps hosted connection to route traffic to the office. Failover to the 2 Gbps hosted\nconnection must occur when the 5 Gbps hosted connection is down.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure an outbound BGP policy from the router that is connected to the 2 Gbps connection. Advertise routes with a longer AS_PATH\nattribute to AWS.",
            "B. Advertise a longer prefix route from the router that is connected to the 2 Gbps connection.",
            "C. Advertise a less specific route from the router that is connected to the 5 Gbps connection.",
            "D. Configure an outbound BGP policy from the router that is connected to the 5 Gbps connection. Advertise routes with a longer AS_PATH\nattribute to AWS."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "2Gbps와 5Gbps의 두 개의 AWS Direct Connect 호스팅 연결을 가진 회사가 5Gbps 연결을 사용하되 2Gbps 연결로 장애 조치되도록 하려면 어떻게 구성해야 하나?",
        "options_ko": [
            "A. 2Gbps 연결이 연결된 라우터의 BGP 송신 정책을 구성하여 AWS로 더 긴 AS_PATH 속성의 경로를 광고합니다.",
            "B. 2Gbps 연결이 연결된 라우터에서 더 긴 접두사 경로를 광고합니다.",
            "C. 5Gbps 연결이 연결된 라우터에서 더 구체적이지 않은 경로를 광고합니다.",
            "D. 5Gbps 연결이 연결된 라우터의 BGP 송신 정책을 구성하여 AWS로 더 긴 AS_PATH 속성의 경로를 광고합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 160,
        "question": "An ecommerce company needs to implement additional security controls on all its domain names that are hosted in Amazon Route 53. The\ncompany's new policy requires data authentication and data integrity verification for all queries to the company’s domain names. The current\nRoute 53 architecture has four public hosted zones.\nA network engineer needs to implement DNS Security Extensions (DNSSEC) signing and validation on the hosted zones. The solution must include\nan alert capability.\nWhich combination of steps will meet these requirements? (Choose three.)",
        "options": [
            "A. Enable DNSSEC signing for Route 53 Request that Route 53 create a key-signing key (KSK) based on a customer managed key in AWS Key\nManagement Service (AWS KMS).",
            "B. Enable DNSSEC signing for Route 53 Request that Route 53 create a zone-signing key (ZSK) based on a customer managed key in AWS Key\nManagement Service (AWS KMS).",
            "C. Create a chain of trust for the hosted zones by adding a Delegation Signer (DS) record for each subdomain",
            "D. Create a chain of trust for the hosted zones by adding a Delegation Signer (DS) record to the parent zone.",
            "E. Set up an Amazon CloudWatch alarm that provides an alert whenever a DNSSECInternalFailure error or\nDNSSECKeySigningKeysNeedingAction error is detected.",
            "F. Set up an AWS CloudTrail alarm that provides an alert whenever a DNSSECInternalFailure error or DNSSECKeySigningKeysNeedingAction\nerror is detected."
        ],
        "answers": [
            "A",
            "D",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ADE (100%)",
        "question_ko": "4개의 공개 호스팅 영역이 있는 Route 53에 DNSSEC 서명과 검증을 구현하고 알림 기능을 포함해야 할 때, 어떤 단계를 수행해야 하는가? (3가지를 선택하시오)",
        "options_ko": [
            "A. Route 53의 DNSSEC 서명을 활성화하고 AWS Key Management Service(AWS KMS)의 고객 관리 키를 기반으로 키 서명 키(KSK)를 생성하도록 요청한다.",
            "B. Route 53의 DNSSEC 서명을 활성화하고 AWS Key Management Service(AWS KMS)의 고객 관리 키를 기반으로 영역 서명 키(ZSK)를 생성하도록 요청한다.",
            "C. 각 하위 도메인에 대해 위임 서명(DS) 레코드를 추가하여 호스팅 영역에 대한 신뢰 체인을 생성한다.",
            "D. 상위 영역에 위임 서명(DS) 레코드를 추가하여 호스팅 영역에 대한 신뢰 체인을 생성한다.",
            "E. DNSSECInternalFailure 오류 또는 DNSSECKeySigningKeysNeedingAction 오류가 감지될 때 알림을 제공하는 Amazon CloudWatch 경보를 설정한다.",
            "F. DNSSECInternalFailure 오류 또는 DNSSECKeySigningKeysNeedingAction 오류가 감지될 때 알림을 제공하는 AWS CloudTrail 경보를 설정한다."
        ],
        "explanation_ko": "커뮤니티 투표: ADE (100%)"
    },
    {
        "num": 161,
        "question": "A financial company that is located in the us-east-1 Region needs to establish secure connectivity to AWS. The company has two on-premises\ndata centers, each located within the same Region. The company's network team needs to establish hybrid connectivity to its AWS environment\nwith reliable and consistent connectivity.\nThe connection must provide access to the company's private resources inside its AWS environment. The resources are located in the us-east-1\nand us-west-2 Regions. The connection must allow resources from the corporate networks to send large amounts of data to Amazon S3 over the\nsame connection. To meet compliance requirements, the connection must be highly available and must provide encryption for all packets that are\nsent between the on-premises location and any services on AWS.\nWhich combination of steps should the network team take to meet these requirements? (Choose two.)",
        "options": [
            "A. Set up a private VIF to send data to Amazon S3. Use an AWS Site-to-Site VPN connection over the private VIF to encrypt data in transit to\nthe VPCs in us-east-1 and us-west-2.",
            "B. Set up an AWS Direct Connect connection to each of the company's data centers.",
            "C. Set up an AWS Direct Connect connection from one of the company's data centers to us-east-1 and us-west-2.",
            "D. Set up a public VIF to send data to Amazon S3. Use an AWS Site-to-Site VPN connection over the public VIF to encrypt data in transit to the\nVPCs in us-east-1 and us-west-2.",
            "E. Set up a transit VIF for an AWS Direct Connect gateway to send data to Amazon S3. Create a transit gateway. Associate the transit gateway\nwith the Direct Connect gateway to provide secure communications from the company’s data centers to the VPCs in us-east-1 and us-west-2."
        ],
        "answers": [
            "B",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BD (88%) 13%",
        "question_ko": "미국 동부 지역(us-east-1)에 위치한 금융 회사가 AWS에 안전한 연결을 설정해야 합니다. 회사는 동일한 지역에 있는 두 개의 온프레미스 데이터 센터를 가지고 있습니다. 회사의 네트워크 팀은 신뢰할 수 있고 일관된 연결을 통해 AWS 환경에 하이브리드 연결을 설정해야 합니다.\n연결은 AWS 환경 내의 회사 프라이빗 리소스에 대한 액세스를 제공해야 합니다. 리소스는 us-east-1과 us-west-2 지역에 있습니다. 연결은 기업 네트워크의 리소스가 동일한 연결을 통해 Amazon S3에 대량의 데이터를 보낼 수 있어야 합니다. 규정 준수 요구 사항에 따라 연결은 고가용성이어야 하며 온프레미스 위치와 AWS 서비스 간의 모든 패킷 전송에 대해 암호화를 제공해야 합니다.\n이러한 요구 사항을 충족하기 위해 네트워크 팀이 취해야 할 조치 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. Amazon S3에 데이터를 보내기 위해 프라이빗 VIF를 설정합니다. AWS 사이트 간 VPN 연결을 사용하여 프라이빗 VIF를 통해 us-east-1과 us-west-2의 VPC에 전송되는 데이터를 암호화합니다.",
            "B. 회사의 각 데이터 센터에 AWS Direct Connect 연결을 설정합니다.",
            "C. us-east-1과 us-west-2에 회사의 한 데이터 센터에서 AWS Direct Connect 연결을 설정합니다.",
            "D. Amazon S3에 데이터를 보내기 위해 공용 VIF를 설정합니다. AWS 사이트 간 VPN 연결을 사용하여 공용 VIF를 통해 us-east-1과 us-west-2의 VPC에 전송되는 데이터를 암호화합니다.",
            "E. Amazon S3에 데이터를 보내기 위해 트랜짓 VIF를 설정합니다. Direct Connect 게이트웨이를 통해. 트랜짓 게이트웨이를 만들고 Direct Connect 게이트웨이와 트랜짓 게이트웨이를 연결하여 회사의 데이터 센터와 us-east-1 및 us-west-2의 VPC 간 안전한 통신을 제공합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BD (88%) 13%"
    },
    {
        "num": 162,
        "question": "A global company is designing a hybrid architecture to privately access AWS resources in the us-west-2 Region. The company's existing\narchitecture includes a VPC that uses RFC 1918 IP address space. The VPC is connected to an on-premises data center over AWS Direct Connect\nAmazon Route 53 provides name resolution within the VPC. Locally managed DNS servers in the data center provide DNS services to the on-\npremises hosts.\nThe company has applications in the data center that need to download objects from an Amazon S3 bucket in us-west-2.\nWhich solution can the company use to access Amazon S3 without using the public IP address space?",
        "options": [
            "A. Create an S3 interface endpoint in the VPC. Update the on-premises application configuration to use the Regional VPC endpoint DNS\nhostname that is mapped to the S3 interface endpoint.",
            "B. Create an S3 interface endpoint in the VPC. Configure a Route 53 Resolver inbound endpoint in the VPC. Set up the data center DNS servers\nto forward DNS queries for the S3 domain from on premises to the inbound endpoint.",
            "C. Create an S3 gateway endpoint in the VPUpdate the on-premises application configuration to use the hostname that is mapped to the S3\ngateway endpoint.",
            "D. Create an S3 gateway endpoint in the VPC. Configure a Route 53 Resolver inbound endpoint in the VPC. Set up the data center DNS servers\nto forward DNS queries for the S3 domain from on premises to the inbound endpoint."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (51%) A (38%) 11%",
        "question_ko": "글로벌 기업이 us-west-2 지역의 AWS 리소스에 프라이빗으로 액세스하는 하이브리드 아키텍처를 설계하고 있습니다. 기존 아키텍처에는 RFC 1918 IP 주소 공간을 사용하는 VPC가 포함되어 있으며, VPC는 AWS Direct Connect를 통해 온프레미스 데이터 센터에 연결되어 있습니다. Amazon Route 53은 VPC 내에서 이름 확인을 제공합니다. 데이터 센터의 로컬로 관리되는 DNS 서버는 온프레미스 호스트에 DNS 서비스를 제공합니다.\n데이터 센터의 애플리케이션이 us-west-2의 Amazon S3 버킷에서 객체를 다운로드해야 합니다.\n회사가 공용 IP 주소 공간을 사용하지 않고 Amazon S3에 액세스할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC에 S3 인터페이스 엔드포인트를 생성합니다. 온프레미스 애플리케이션 구성을 업데이트하여 S3 인터페이스 엔드포인트에 매핑된 지역별 VPC 엔드포인트 DNS 호스트 이름을 사용합니다.",
            "B. VPC에 S3 인터페이스 엔드포인트를 생성합니다. VPC에 Route 53 Resolver 인바운드 엔드포인트를 구성합니다. 데이터 센터 DNS 서버를 설정하여 온프레미스에서 S3 도메인에 대한 DNS 쿼리를 인바운드 엔드포인트로 전달합니다.",
            "C. VPC에 S3 게이트웨이 엔드포인트를 생성합니다. 온프레미스 애플리케이션 구성을 업데이트하여 S3 게이트웨이 엔드포인트에 매핑된 호스트 이름을 사용합니다.",
            "D. VPC에 S3 게이트웨이 엔드포인트를 생성합니다. VPC에 Route 53 Resolver 인바운드 엔드포인트를 구성합니다. 데이터 센터 DNS 서버를 설정하여 온프레미스에서 S3 도메인에 대한 DNS 쿼리를 인바운드 엔드포인트로 전달합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (51%) A (38%) 11%"
    },
    {
        "num": 163,
        "question": "A company is migrating critical applications to AWS. The company has multiple accounts and VPCs that are connected by a transit gateway.\nA network engineer must design a solution that performs deep packet inspection for any traffic that leaves a VPC network boundary. All inspected\ntraffic and the actions that are taken on the traffic must be logged in a central log account.\nWhich solution will meet these requirements with the LEAST administrative overhead?",
        "options": [
            "A. Create a central network VPC that includes an attachment to the transit gateway. Update the VPC and transit gateway route tables to\nsupport the new attachment. Deploy an AWS Gateway Load Balancer that is backed by third-party, next-generation firewall appliances to the\ncentral network VPC. Create a policy that contains the rules for deep packet inspection. Attach the policy to the firewall appliances. Create an\nAmazon S3 bucket in the central log account. Configure the firewall appliances to capture and save the network flow logs to the S3 bucket.",
            "B. Create a central network VPC that includes an attachment to the transit gateway. Update the VPC and transit gateway route tables to\nsupport the new attachment. Deploy an AWS Application Load Balancer that is backed by third-party, next-generation firewall appliances to the\ncentral network VPC. Create a policy that contains the rules for deep packet inspection. Attach the policy to the firewall appliances. Create a\nsyslog server in the central log account. Configure the firewall appliances to capture and save the network flow logs to the syslog server.",
            "C. Deploy network ACLs and security groups to each VPAttach the security groups to active network interfaces. Associate the network ACLs\nwith VPC subnets. Create rules for the network ACLs and security groups to allow only the required traffic flows between subnets and network\ninterfaces. Create an Amazon S3 bucket in the central log account. Configure a VPC flow log that captures and saves all traffic flows to the S3\nbucket.",
            "D. Create a central log VPC and an attachment to the transit gateway. Update the VPC and transit gateway route tables to support the new\nattachment. Deploy an AWS Network Load Balancer (NLB) that is backed by third-party, next-generation intrusion detection system (IDS)\nsecurity appliances to the central VPC. Activate rules on the security appliances to monitor for intrusion signatures. For each network\ninterface, create a VPC Traffic Mirroring session that sends the traffic to the central VPC's NLB."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (86%) 14%",
        "question_ko": "회사가 중요한 애플리케이션을 AWS로 마이그레이션하고 있습니다. 회사는 여러 계정과 VPC를 가지고 있으며, 이들은 트랜짓 게이트웨이로 연결되어 있습니다.\n네트워크 엔지니어는 VPC 네트워크 경계를 나가는 모든 트래픽에 대해 심층 패킷 검사를 수행하는 솔루션을 설계해야 합니다. 검사된 모든 트래픽과 트래픽에 대해 취해진 조치는 중앙 로그 계정에 기록되어야 합니다.\n이러한 요구 사항을 최소한의 관리 오버헤드로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이에 연결이 포함된 중앙 네트워크 VPC를 생성합니다. VPC 및 트랜짓 게이트웨이 라우팅 테이블을 업데이트하여 새 연결을 지원합니다. 중앙 네트워크 VPC에 타사 차세대 방화벽 어플라이언스가 백엔드인 AWS Gateway Load Balancer를 배포합니다. 심층 패킷 검사를 위한 규칙이 포함된 정책을 생성하고 방화벽 어플라이언스에 연결합니다. 중앙 로그 계정에 Amazon S3 버킷을 생성합니다. 방화벽 어플라이언스가 네트워크 흐름 로그를 캡처하고 S3 버킷에 저장하도록 구성합니다.",
            "B. 트랜짓 게이트웨이에 연결이 포함된 중앙 네트워크 VPC를 생성합니다. VPC 및 트랜짓 게이트웨이 라우팅 테이블을 업데이트하여 새 연결을 지원합니다. 중앙 네트워크 VPC에 타사 차세대 방화벽 어플라이언스가 백엔드인 AWS Application Load Balancer를 배포합니다. 심층 패킷 검사를 위한 규칙이 포함된 정책을 생성하고 방화벽 어플라이언스에 연결합니다. 중앙 로그 계정에 syslog 서버를 생성합니다. 방화벽 어플라이언스가 네트워크 흐름 로그를 캡처하고 syslog 서버에 저장하도록 구성합니다.",
            "C. 각 VPC에 네트워크 ACL 및 보안 그룹을 배포합니다. 보안 그룹을 활성 네트워크 인터페이스에 연결합니다. 네트워크 ACL을 VPC 서브넷과 연결합니다. 서브넷 및 네트워크 인터페이스 간 필요한 트래픽 흐름만 허용하는 네트워크 ACL 및 보안 그룹 규칙을 만듭니다. 중앙 로그 계정에 Amazon S3 버킷을 생성합니다. 모든 트래픽 흐름을 캡처하고 S3 버킷에 저장하는 VPC 흐름 로그를 구성합니다.",
            "D. 중앙 로그 VPC와 트랜짓 게이트웨이에 대한 연결을 생성합니다. VPC 및 트랜짓 게이트웨이 라우팅 테이블을 업데이트하여 새 연결을 지원합니다. 중앙 VPC에 타사 차세대 침입 탐지 시스템(IDS) 보안 어플라이언스가 백엔드인 AWS Network Load Balancer(NLB)를 배포합니다. 보안 어플라이언스에서 침입 서명 모니터링을 활성화합니다. 각 네트워크 인터페이스에 대해 VPC 트래픽 미러링 세션을 생성하여 중앙 VPC의 NLB로 트래픽을 보냅니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (86%) 14%"
    },
    {
        "num": 164,
        "question": "A company has an on-premises data center in the United States. The data center is connected to AWS by an AWS Direct Connect connection. The\ndata center has a private VIF that is connected to a Direct Connect gateway.\nRecently, the company opened a new data center in Europe and established a new Direct Connect connection between the Europe data center and\nAWS. A new private VIF connects to the existing Direct Connect gateway.\nThe company wants to use Direct Connect SiteLink to set up a private network between the data center in the United States and the data center in\nEurope.\nWhich solution will meet these requirements in the MOST operationally efficient manner?",
        "options": [
            "A. Create a new public VIF from each data center. Enable SiteLink on the new public VIFs.",
            "B. Create a new transit VIF from each data center. Enable SiteLink on the new transit VIFs.",
            "C. Use the existing VIF from each data center. Enable SiteLink on the existing private VIFs.",
            "D. Create a new AWS Site-to-Site VPN connection between the data centers. Configure the new connection to use SiteLink."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사에는 미국에 온프레미스 데이터 센터가 있습니다. 데이터 센터는 AWS Direct Connect 연결을 통해 AWS에 연결되어 있습니다. 데이터 센터에는 Direct Connect 게이트웨이에 연결된 프라이빗 VIF가 있습니다.\n최근 회사는 유럽에 새 데이터 센터를 열고 유럽 데이터 센터와 AWS 간에 새 Direct Connect 연결을 설정했습니다. 새 프라이빗 VIF가 기존 Direct Connect 게이트웨이에 연결되어 있습니다.\n회사는 Direct Connect SiteLink를 사용하여 미국 데이터 센터와 유럽 데이터 센터 간 프라이빗 네트워크를 설정하고자 합니다.\n이러한 요구 사항을 가장 효율적으로 운영할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 데이터 센터에서 새 공용 VIF를 생성합니다. 새 공용 VIF에 SiteLink를 활성화합니다.",
            "B. 각 데이터 센터에서 새 트랜짓 VIF를 생성합니다. 새 트랜짓 VIF에 SiteLink를 활성화합니다.",
            "C. 각 데이터 센터의 기존 VIF를 사용합니다. 기존 프라이빗 VIF에 SiteLink를 활성화합니다.",
            "D. 데이터 센터 간 새 AWS 사이트 간 VPN 연결을 생성합니다. 새 연결에서 SiteLink를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 165,
        "question": "A company has a new AWS Direct Connect connection between its on-premises data center and the AWS Cloud. The company has created a new\nprivate VIF on this connection. However, the VIF status is DOWN.\nA network engineer verifies that the physical connection status is UP and RUNNING based on information from the AWS Management Console.\nThe network engineer checks the customer Direct Connect router and can see the ARP entry for the VLAN interface created for the private VIF at\nAWS.\nWhat could be causing the private VIF to have a DOWN status?",
        "options": [
            "A. ICMP is blocked on the customer Direct Connect router.",
            "B. TCP port 179 is blocked on the customer Direct Connect router.",
            "C. The IEEE 802.1Q VLAN identifier is misconfigured on the customer Direct Connect router.",
            "D. The company has configured IEEE 802.1ad instead of 802.1Q on the customer Direct Connect router."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (61%) C (39%)",
        "question_ko": "회사에 온프레미스 데이터 센터와 AWS 클라우드 간 새 AWS Direct Connect 연결이 있습니다. 회사는 이 연결에 새 프라이빗 VIF를 생성했습니다. 그러나 VIF 상태가 DOWN 상태입니다.\n네트워크 엔지니어는 AWS Management Console의 정보를 기반으로 물리적 연결 상태가 UP 및 RUNNING임을 확인합니다.\n엔지니어는 고객 Direct Connect 라우터를 확인하고 AWS에서 생성된 프라이빗 VIF의 VLAN 인터페이스에 대한 ARP 항목을 볼 수 있습니다.\n프라이빗 VIF가 DOWN 상태인 원인은 무엇일 수 있습니까?",
        "options_ko": [
            "A. 고객 Direct Connect 라우터에서 ICMP가 차단되었습니다.",
            "B. 고객 Direct Connect 라우터에서 TCP 포트 179가 차단되었습니다.",
            "C. 고객 Direct Connect 라우터에서 IEEE 802.1Q VLAN 식별자가 잘못 구성되었습니다.",
            "D. 고객 Direct Connect 라우터에서 802.1ad 대신 802.1Q를 구성했습니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (61%) C (39%)"
    },
    {
        "num": 166,
        "question": "AnyCompany has acquired Example Corp. AnyCompany's infrastructure is all on premises, and Example Corp's infrastructure is completely in the\nAWS Cloud. The companies are using AWS Direct Connect with AWS Transit Gateway to establish connectivity between each other.\nExample Corp has deployed a new application across two Availability Zones in a VPC with no internet gateway. The CIDR range for the VPC is\n10.0.0.0/16. Example Corp needs to access an application that is deployed on premises by AnyCompany. Because of compliance requirements,\nExample Corp must access the application through a limited contiguous block of approved IP addresses (10.1.0.0/24).\nA network engineer needs to implement a highly available solution to achieve this goal. The network engineer starts by updating the VPC to add a\nnew CIDR range of 10.1.0.0/24.\nWhat should the network engineer do next to meet the requirements?",
        "options": [
            "A. In each Availability Zone in the VPC, create a subnet that uses part of the allowed IP address range. Create a public NAT gateway in each of\nthe new subnets. Update the route tables that are associated with other subnets to route application traffic to the public NAT gateway in the\ncorresponding Availability Zone. Add a route to the route table that is associated with the subnets of the public NAT gateways to send traffic\ndestined for the application to the transit gateway.",
            "B. In each Availability Zone in the VPC, create a subnet that uses part of the allowed IP address range. Create a private NAT gateway in each\nof the new subnets. Update the route tables that are associated with other subnets to route application traffic to the private NAT gateway in\nthe corresponding Availability Zone. Add a route to the route table that is associated with the subnets of the private NAT gateways to send\ntraffic destined for the application to the transit gateway.",
            "C. In the VPC, create a subnet that uses the allowed IP address range. Create a private NAT gateway in the new subnet. Update the route\ntables that are associated with other subnets to route application traffic to the private NAT gateway. Add a route to the route table that is\nassociated with the subnet of the private NAT gateway to send traffic destined for the application to the transit gateway.",
            "D. In the VPC, create a subnet that uses the allowed IP address range. Create a public NAT gateway in the new subnet. Update the route tables\nthat are associated with other subnets to route application traffic to the public NAT gateway. Add a route to the route table that is associated\nwith the subnet of the public NAT gateway to send traffic destined for the application to the transit gateway."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (83%) C (17%)",
        "question_ko": "AnyCompany는 Example Corp.를 인수했습니다. AnyCompany의 인프라는 모두 온프레미스에 있고, Example Corp.의 인프라는 완전히 AWS 클라우드에 있습니다. 두 회사는 AWS Direct Connect와 AWS Transit Gateway를 사용하여 서로 간 연결을 구축하고 있습니다.\nExample Corp.는 인터넷 게이트웨이가 없는 VPC에서 두 개의 가용 영역에 걸쳐 새로운 애플리케이션을 배포했습니다. VPC의 CIDR 범위는 10.0.0.0/16입니다. Example Corp.는 AnyCompany에서 온프레미스로 배포된 애플리케이션에 액세스해야 합니다. 규정 요구 사항으로 인해 Example Corp.는 승인된 IP 주소 범위(10.1.0.0/24)를 통해서만 애플리케이션에 액세스해야 합니다.\n네트워크 엔지니어는 이 요구 사항을 충족하는 고가용성 솔루션을 구현해야 합니다. 네트워크 엔지니어는 VPC에 10.1.0.0/24 의 새로운 CIDR 범위를 추가하는 것으로 시작합니다.\n다음에 네트워크 엔지니어가 해야 할 일은 무엇입니까?",
        "options_ko": [
            "A. 각 가용 영역의 VPC에서 허용된 IP 주소 범위의 일부를 사용하는 새 서브넷을 만드십시오. 각 새 서브넷에 공용 NAT 게이트웨이를 만드십시오. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 해당 가용 영역의 공용 NAT 게이트웨이로 라우팅하십시오. 공용 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션으로 향하는 트래픽을 전송 게이트웨이로 보내십시오.",
            "B. 각 가용 영역의 VPC에서 허용된 IP 주소 범위의 일부를 사용하는 새 서브넷을 만드십시오. 각 새 서브넷에 프라이빗 NAT 게이트웨이를 만드십시오. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 해당 가용 영역의 프라이빗 NAT 게이트웨이로 라우팅하십시오. 프라이빗 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션으로 향하는 트래픽을 전송 게이트웨이로 보내십시오.",
            "C. VPC에서 허용된 IP 주소 범위를 사용하는 새 서브넷을 만드십시오. 새 서브넷에 프라이빗 NAT 게이트웨이를 만드십시오. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 프라이빗 NAT 게이트웨이로 라우팅하십시오. 프라이빗 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션으로 향하는 트래픽을 전송 게이트웨이로 보내십시오.",
            "D. VPC에서 허용된 IP 주소 범위를 사용하는 새 서브넷을 만드십시오. 새 서브넷에 공용 NAT 게이트웨이를 만드십시오. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 공용 NAT 게이트웨이로 라우팅하십시오. 공용 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션으로 향하는 트래픽을 전송 게이트웨이로 보내십시오."
        ],
        "explanation_ko": "커뮤니티 투표: B (83%) C (17%)"
    },
    {
        "num": 167,
        "question": "A company recently experienced an IP address exhaustion event in its VPCs. The event affected service capacity. The VPCs hold two or more\nsubnets in different Availability Zones.\nA network engineer needs to develop a solution that monitors IP address usage across resources in the VPCs. The company needs to receive\nnotification about possible issues so that the company can act before an incident happens.\nWhich solution will meet these requirements with the LEAST operational overhead?",
        "options": [
            "A. Set up Amazon VPC IP Address Manager (IPAM) with a new top-level pool. In the top-level pool, create a pool for each VPC. In each VPC\npool, create a pool for each subnet in that VPC. Turn on the auto-import option for the VPC pools and the subnet pools. Configure an Amazon\nCloudWatch alarm to send an Amazon Simple Notification Service (Amazon SNS) notification if the availability limit threshold is reached.",
            "B. Set up a log group in Amazon CloudWatch Logs for each subnet. Create an AWS Lambda function that reads each subnet's IP address\nusage and publishes metrics to the log group. Configure an Amazon CloudWatch alarm to send an Amazon Simple Notification Service\n(Amazon SNS) notification if the availability limit threshold is reached.",
            "C. Set up a custom Amazon CloudWatch metric for IP address usage for each subnet. Create an AWS Lambda function that reads each\nsubnet's IP address usage and publishes a CloudWatch metric dimension. Schedule the Lambda function to run every 5 minutes. Configure a\nCloudWatch alarm to send an Amazon Simple Notification Service (Amazon SNS) notification if the availability limit threshold is reached.",
            "D. Set up Amazon VPC IP Address Manager (IPAM) with a new top-level pool. In the top-level pool, create a pool for each VPC. In each VPC\npool, create a pool for each subnet in that VPC. Turn on the auto-import option for the VPC pools and the subnet pools. Configure an Amazon\nEventBridge rule that monitors each pool availability limit threshold and sends an Amazon Simple Notification Service (Amazon SNS)\nnotification if the limit threshold is reached."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 최근 VPC에서 IP 주소 고갈 이벤트를 경험했습니다. 이 이벤트로 인해 서비스 용량에 영향을 미쳤습니다. VPC에는 여러 가용 영역에 걸친 두 개 이상의 서브넷이 있습니다.\n네트워크 엔지니어는 VPC의 리소스에 걸친 IP 주소 사용량을 모니터링하는 솔루션을 개발해야 합니다. 회사는 문제가 발생하기 전에 조치를 취할 수 있도록 알림을 받아야 합니다.\n작업 오버헤드가 가장 적은 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon VPC IP Address Manager(IPAM)를 설정하고 새 최상위 풀을 만듭니다. 최상위 풀에서 각 VPC용 풀을 만듭니다. 각 VPC 풀에서 해당 VPC의 각 서브넷용 풀을 만듭니다. VPC 풀과 서브넷 풀의 자동 가져오기 옵션을 활성화합니다. 가용성 한도 임계값에 도달하면 Amazon CloudWatch 경보가 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 구성합니다.",
            "B. 각 서브넷에 대한 Amazon CloudWatch Logs 로그 그룹을 설정합니다. 각 서브넷의 IP 주소 사용량을 읽고 로그 그룹에 메트릭을 게시하는 AWS Lambda 함수를 만듭니다. 가용성 한도 임계값에 도달하면 Amazon CloudWatch 경보가 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 구성합니다.",
            "C. 각 서브넷의 IP 주소 사용량에 대한 사용자 지정 Amazon CloudWatch 메트릭을 설정합니다. 각 서브넷의 IP 주소 사용량을 읽고 CloudWatch 메트릭 차원을 게시하는 AWS Lambda 함수를 만듭니다. Lambda 함수를 5분마다 실행하도록 예약합니다. 가용성 한도 임계값에 도달하면 Amazon CloudWatch 경보가 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 구성합니다.",
            "D. Amazon VPC IP Address Manager(IPAM)를 설정하고 새 최상위 풀을 만듭니다. 최상위 풀에서 각 VPC용 풀을 만듭니다. 각 VPC 풀에서 해당 VPC의 각 서브넷용 풀을 만듭니다. VPC 풀과 서브넷 풀의 자동 가져오기 옵션을 활성화합니다. 각 풀의 가용성 한도 임계값을 모니터링하고 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 Amazon EventBridge 규칙을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 168,
        "question": "A company has a hybrid IT setup that includes services that run in an on-premises data center and in the AWS Cloud. The company is using AWS\nDirect Connect to connect its data center to AWS. The company is using one AWS Site-to-Site VPN connection as backup and requires a backup\nconnectivity option to always be present. The company is transitioning to IPv6 by implementing dual-stack architectures.\nWhich combination of steps will transition the data center's connectivity to AWS in the LEAST amount of time? (Choose two.)",
        "options": [
            "A. Create a new Site-to-Site VPN tunnel for the IPv6 traffic.",
            "B. Create a new dual-stack Site-to-Site VPN connection between the data center and AWS. Provision routing. Delete the original Site-to-Site\nVPN connection.",
            "C. Associate a new dual-stack public VIF with the Direct Connect connection. Migrate the Direct Connect traffic to the new VIF.",
            "D. Add a new IPv6 peer in the existing VIF. Use the IPv6 address provided by Amazon on the peer router.",
            "E. Send IPv6 traffic between the data center and AWS in a tunnel inside the existing IPv4 tunnels."
        ],
        "answers": [
            "A",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AD (83%) BD (17%)",
        "question_ko": "회사는 온프레미스 데이터 센터와 AWS 클라우드에서 실행되는 서비스가 포함된 하이브리드 IT 설정을 가지고 있습니다. 회사는 AWS Direct Connect를 사용하여 데이터 센터와 AWS를 연결하고 있습니다. 회사는 백업 연결 옵션으로 하나의 AWS Site-to-Site VPN 연결을 사용하고 항상 백업 연결 옵션이 있어야 합니다. 회사는 이중 스택 아키텍처를 구현하여 IPv6로 전환하고 있습니다.\n데이터 센터와 AWS 간 연결을 가장 빨리 전환하는 단계 조합은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. IPv6 트래픽에 대해 새로운 Site-to-Site VPN 터널을 만드십시오.",
            "B. 데이터 센터와 AWS 간에 새로운 이중 스택 Site-to-Site VPN 연결을 만드십시오. 라우팅을 프로비저닝하십시오. 원래의 Site-to-Site VPN 연결을 삭제하십시오.",
            "C. 새 이중 스택 퍼블릭 VIF를 Direct Connect 연결에 연결하십시오. 새 VIF로 Direct Connect 트래픽을 마이그레이션하십시오.",
            "D. 기존 VIF에 새 IPv6 피어를 추가하십시오. Amazon에서 제공한 IPv6 주소를 피어 라우터에 사용하십시오.",
            "E. 데이터 센터와 AWS 간 IPv6 트래픽을 기존 IPv4 터널 내에서 터널링하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: AD (83%) BD (17%)"
    },
    {
        "num": 169,
        "question": "A company is developing a new application that is deployed in multiple VPCs across multiple AWS Regions. The VPCs are connected through AWS\nTransit Gateway. The VPCs contain private subnets and public subnets.\nAll outbound internet traffic in the private subnets must be audited and logged. The company's network engineer plans to use AWS Network\nFirewall and must ensure that all traffic through Network Firewall is completely logged for auditing and alerting.\nHow should the network engineer configure Network Firewall logging to meet these requirements?",
        "options": [
            "A. Configure Network Firewall logging in Amazon CloudWatch to capture all alerts. Send the logs to a log group in Amazon CloudWatch Logs.",
            "B. Configure Network Firewall logging in Network Firewall to capture all alerts and flow logs.",
            "C. Configure Network Firewall logging by configuring VPC Flow Logs for the firewall endpoint. Send the logs to a log group in Amazon\nCloudWatch Logs.",
            "D. Configure Network Firewall logging by configuring AWS CloudTrail to capture data events."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (73%) A (18%) 9%",
        "question_ko": "회사는 여러 AWS 리전의 다양한 VPC에 배포된 새로운 애플리케이션을 개발하고 있습니다. VPC는 AWS Transit Gateway를 통해 연결됩니다. VPC에는 프라이빗 서브넷과 퍼블릭 서브넷이 포함되어 있습니다.\n프라이빗 서브넷의 모든 아웃바운드 인터넷 트래픽은 감사 및 로깅되어야 합니다. 회사의 네트워크 엔지니어는 AWS Network Firewall을 사용할 계획이며 Network Firewall을 통과하는 모든 트래픽이 감사 및 경고를 위해 완전히 기록되도록 해야 합니다.\n이러한 요구 사항을 충족하기 위해 네트워크 엔지니어는 어떻게 Network Firewall 로깅을 구성해야 합니까?",
        "options_ko": [
            "A. Amazon CloudWatch에서 Network Firewall 로깅을 구성하여 모든 경고를 캡처하십시오. 로그를 Amazon CloudWatch Logs의 로그 그룹으로 보내십시오.",
            "B. Network Firewall에서 Network Firewall 로깅을 구성하여 모든 경고와 흐름 로그를 캡처하십시오.",
            "C. 방화벽 엔드포인트에 대한 VPC 흐름 로그를 구성하여 Network Firewall 로깅을 구성하십시오. 로그를 Amazon CloudWatch Logs의 로그 그룹으로 보내십시오.",
            "D. AWS CloudTrail에서 데이터 이벤트를 캡처하도록 구성하여 Network Firewall 로깅을 구성하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: B (73%) A (18%) 9%"
    },
    {
        "num": 170,
        "question": "A company has set up a NAT gateway in a single Availability Zone (AZ1) in a VPC (VPC1) to access the internet from Amazon EC2 workloads in\nthe VPC. The EC2 workloads are running in private subnets in three Availability Zones (AZ1, AZ2, AZ3). The route table for each subnet is\nconfigured to use the NAT gateway to access the internet.\nRecently during an outage, internet access stopped working for the EC2 workloads because of the NAT gateway's unavailability. A network\nengineer must implement a solution to remove the single point of failure from the architecture and provide built-in redundancy.\nWhich solution will meet these requirements?",
        "options": [
            "A. Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a\nroute table for private subnets to route traffic to the virtual IP addresses of the two NAT gateways.",
            "B. Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a\nroute table to point the AZ2 private subnets to the NAT gateway in AZ2. Configure the same route table to point the AZ3 private subnets to the\nNAT gateway in AZ3.",
            "C. Create a second VPC (VPC2). Set up two NAT gateways. Place each NAT gateway in a different VPC (VPC1 and VPC2) and in the same\nAvailability Zone (AZ2). Configure a route table in VPC1 to point the AZ2 private subnets to one NAT gateway. Configure a route table in VPC2\nto point the AZ2 private subnets to the second NAT gateway.",
            "D. Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a\nroute table to point the AZ2 private subnets to the NAT gateway in AZ2. Configure a second route table to point the AZ3 private subnets to the\nNAT gateway in AZ3."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 VPC(VPC1)에 단일 가용 영역(AZ1)에 NAT 게이트웨이를 설정하여 Amazon EC2 워크로드에서 인터넷에 액세스할 수 있게 했습니다. EC2 워크로드는 세 개의 가용 영역(AZ1, AZ2, AZ3)에 있는 프라이빗 서브넷에서 실행됩니다. 각 서브넷의 라우팅 테이블은 인터넷 액세스를 위해 NAT 게이트웨이를 사용하도록 구성되어 있습니다.\n최근 한 장애 동안 NAT 게이트웨이를 사용할 수 없게 되면서 EC2 워크로드의 인터넷 액세스가 중단되었습니다. 네트워크 엔지니어는 구조에서 단일 장애 지점을 제거하고 내장 중복성을 제공하는 솔루션을 구현해야 합니다.\n이 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 두 개의 NAT 게이트웨이를 설정하십시오. 각 NAT 게이트웨이를 다른 가용 영역(AZ2 및 AZ3)의 다른 퍼블릭 서브넷에 배치하십시오. 프라이빗 서브넷에 대한 라우팅 테이블을 구성하여 트래픽을 두 NAT 게이트웨이의 가상 IP 주소로 라우팅하십시오.",
            "B. 두 개의 NAT 게이트웨이를 설정하십시오. 각 NAT 게이트웨이를 다른 가용 영역(AZ2 및 AZ3)의 다른 퍼블릭 서브넷에 배치하십시오. AZ2 프라이빗 서브넷을 AZ2의 NAT 게이트웨이로, AZ3 프라이빗 서브넷을 AZ3의 NAT 게이트웨이로 연결하도록 라우팅 테이블을 구성하십시오.",
            "C. 두 번째 VPC(VPC2)를 만드십시오. 두 개의 NAT 게이트웨이를 설정하십시오. 각 NAT 게이트웨이를 다른 VPC(VPC1 및 VPC2)에 동일한 가용 영역(AZ2)에 배치하십시오. VPC1의 라우팅 테이블을 구성하여 AZ2 프라이빗 서브넷을 한 NAT 게이트웨이로 라우팅하십시오. VPC2의 라우팅 테이블을 구성하여 AZ2 프라이빗 서브넷을 다른 NAT 게이트웨이로 라우팅하십시오.",
            "D. 두 개의 NAT 게이트웨이를 설정하십시오. 각 NAT 게이트웨이를 다른 가용 영역(AZ2 및 AZ3)의 다른 퍼블릭 서브넷에 배치하십시오. AZ2 프라이빗 서브넷을 AZ2의 NAT 게이트웨이로, AZ3 프라이빗 서브넷을 AZ3의 NAT 게이트웨이로 라우팅하도록 라우팅 테이블을 구성하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 171,
        "question": "A company has a total of 30 VPCs. Three AWS Regions each contain 10 VPCs. The company has attached the VPCs in each Region to a transit\ngateway in that Region. The company also has set up inter-Region peering connections between the transit gateways.\nThe company wants to use AWS Direct Connect to provide access from its on-premises location for only four VPCs across the three Regions. The\ncompany has provisioned four Direct Connect connections at two Direct Connect locations.\nWhich combination of steps will meet these requirements MOST cost-effectively? (Choose three.)",
        "options": [
            "A. Create four virtual private gateways. Attach the virtual private gateways to the four VPCs.",
            "B. Create a Direct Connect gateway. Associate the four virtual private gateways with the Direct Connect gateway.",
            "C. Create four transit VIFs on each Direct Connect connection. Associate the transit VIFs with the Direct Connect gateway.",
            "D. Create four transit VIFs on each Direct Connect connection. Associate the transit VIFs with the four virtual private gateways.",
            "E. Create four private VIFs on each Direct Connect connection to the Direct Connect gateway.",
            "F. Create an association between the Direct Connect gateway and the transit gateways."
        ],
        "answers": [
            "A",
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ABE (67%) BCF (33%)",
        "question_ko": "총 30개의 VPC를 보유한 회사가 있습니다. 3개의 AWS 리전에 각각 10개의 VPC가 있습니다. 해당 회사는 각 리전의 VPC를 해당 리전의 Transit Gateway에 연결했습니다. 또한 Transit Gateway 간 Inter-Region Peering 연결을 설정했습니다. 회사는 온프레미스 위치에서 3개 리전의 4개 VPC에만 액세스하기 위해 AWS Direct Connect를 사용하려고 합니다. 회사는 2곳의 Direct Connect 위치에 4개의 Direct Connect 연결을 프로비저닝했습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)",
        "options_ko": [
            "A. 4개의 가상 프라이빗 게이트웨이를 생성합니다. 가상 프라이빗 게이트웨이를 4개의 VPC에 연결합니다.",
            "B. Direct Connect 게이트웨이를 생성합니다. 4개의 가상 프라이빗 게이트웨이를 Direct Connect 게이트웨이와 연결합니다.",
            "C. 각 Direct Connect 연결에 4개의 Transit VIF를 생성합니다. Transit VIF를 Direct Connect 게이트웨이와 연결합니다.",
            "D. 각 Direct Connect 연결에 4개의 Transit VIF를 생성합니다. Transit VIF를 4개의 가상 프라이빗 게이트웨이와 연결합니다.",
            "E. 각 Direct Connect 연결에 4개의 프라이빗 VIF를 Direct Connect 게이트웨이에 생성합니다.",
            "F. Direct Connect 게이트웨이와 Transit Gateway 간 연결을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: ABE (67%) BCF (33%)"
    },
    {
        "num": 172,
        "question": "A company needs to manage Amazon EC2 instances through command line interfaces for Linux hosts and Windows hosts. The EC2 instances are\ndeployed in an environment in which there is no route to the internet. The company must implement role-based access control for management of\nthe instances. The company has a standalone on-premises environment.\nWhich approach will meet these requirements with the LEAST maintenance overhead?",
        "options": [
            "A. Set up an AWS Direct Connect connection between the on-premises environment and the VPC where the instances are deployed. Configure\nrouting, security groups, and ACLs. Connect to the instances by using the Direct Connect connection.",
            "B. Deploy and configure AWS Systems Manager Agent (SSM Agent) on each instance. Deploy VPC endpoints for Systems Manager Session\nManager. Connect to the instances by using Session Manager.",
            "C. Establish an AWS Site-to-Site VPN connection between the on-premises environment and the VPC where the instances are deployed.\nConfigure routing, security groups, and ACLs. Connect to the instances by using the Site-to-Site VPN connection.",
            "D. Deploy an appliance to the VPC where the instances are deployed. Assign a public IP address to the appliance. Configure security groups\nand ACLs. Connect to the instances by using the appliance as an intermediary."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 인터넷에 경로가 없는 환경에 배포된 Amazon EC2 인스턴스를 Linux 호스트와 Windows 호스트의 명령줄 인터페이스를 통해 관리해야 합니다. 회사는 인스턴스 관리를 위한 역할 기반 액세스 제어를 구현해야 합니다. 회사에는 독립형 온프레미스 환경이 있습니다. 이러한 요구 사항을 가장 낮은 유지 관리 오버헤드로 충족할 수 있는 접근 방식은 무엇입니까?",
        "options_ko": [
            "A. 온프레미스 환경과 인스턴스가 배포된 VPC 간 AWS Direct Connect 연결을 설정합니다. 라우팅, 보안 그룹, ACL을 구성합니다. Direct Connect 연결을 사용하여 인스턴스에 연결합니다.",
            "B. 각 인스턴스에 AWS Systems Manager Agent (SSM Agent)를 배포 및 구성합니다. Systems Manager Session Manager를 위한 VPC 엔드포인트를 배포합니다. Session Manager를 사용하여 인스턴스에 연결합니다.",
            "C. 온프레미스 환경과 인스턴스가 배포된 VPC 간 AWS Site-to-Site VPN 연결을 설정합니다. 라우팅, 보안 그룹, ACL을 구성합니다. Site-to-Site VPN 연결을 사용하여 인스턴스에 연결합니다.",
            "D. 인스턴스가 배포된 VPC에 어플라이언스를 배포합니다. 어플라이언스에 퍼블릭 IP 주소를 할당합니다. 보안 그룹과 ACL을 구성합니다. 어플라이언스를 중개로 사용하여 인스턴스에 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 173,
        "question": "A network engineer needs to improve the network security of an existing AWS environment by adding an AWS Network Firewall firewall to control\ninternet-bound traffic. The AWS environment consists of five VPCs. Each VPC has an internet gateway, NAT gateways, public Application Load\nBalancers (ALBs), and Amazon EC2 instances. The EC2 instances are deployed in private subnets. The architecture is deployed across two\nAvailability Zones.\nThe network engineer must be able to configure rules for the public IP addresses in the environment, regardless of the direction of traffic. The\nnetwork engineer must add the firewall by implementing a solution that minimizes changes to the existing production environment. The solution\nalso must ensure high availability.\nWhich combination of steps should the network engineer take to meet these requirements? (Choose two.)",
        "options": [
            "A. Create a centralized inspection VPC with subnets in two Availability Zones. Deploy Network Firewall in this inspection VPC with an endpoint\nin each Availability Zone.",
            "B. Configure new subnets in two Availability Zones in each VPC. Deploy Network Firewall in each VPC with an endpoint in each Availability\nZone.",
            "C. Deploy Network Firewall in each VPUse existing subnets in each of the two Availability Zones to deploy Network Firewall endpoints.",
            "D. Update the route tables that are associated with the private subnets that host the EC2 instances. Add routes to the Network Firewall\nendpoints.",
            "E. Update the route tables that are associated with the public subnets that host the NAT gateways and the ALBs. Add routes to the Network\nFirewall endpoints."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BE (61%) AE (30%) 9%",
        "question_ko": "네트워크 엔지니어는 기존 AWS 환경의 네트워크 보안을 강화하기 위해 AWS Network Firewall 방화벽을 추가하여 인터넷 바운드 트래픽을 제어하려고 합니다. AWS 환경에는 5개의 VPC가 있습니다. 각 VPC에는 인터넷 게이트웨이, NAT 게이트웨이, 퍼블릭 Application Load Balancer (ALB), Amazon EC2 인스턴스가 있습니다. EC2 인스턴스는 프라이빗 서브넷에 배포됩니다. 아키텍처는 2개 가용 영역에 걸쳐 배포됩니다. 네트워크 엔지니어는 트래픽 방향에 관계없이 환경의 퍼블릭 IP 주소에 대한 규칙을 구성할 수 있어야 합니다. 또한 기존 프로덕션 환경에 최소한의 변경을 가하면서 방화벽을 추가하고 고가용성을 보장해야 합니다. 이러한 요구 사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계 조합은 무엇입니까? (2개를 선택하세요.)",
        "options_ko": [
            "A. 2개의 가용 영역에 서브넷이 있는 중앙 집중식 검사 VPC를 생성합니다. 각 가용 영역에 엔드포인트가 있는 이 검사 VPC에 Network Firewall을 배포합니다.",
            "B. 각 VPC에 2개의 가용 영역에 새 서브넷을 구성합니다. 각 가용 영역에 엔드포인트를 보유한 Network Firewall을 각 VPC에 배포합니다.",
            "C. EC2 인스턴스를 호스팅하는 프라이빗 서브넷의 라우팅 테이블을 업데이트합니다. Network Firewall 엔드포인트로의 경로를 추가합니다.",
            "D. NAT 게이트웨이와 ALB를 호스팅하는 퍼블릭 서브넷의 라우팅 테이블을 업데이트합니다. Network Firewall 엔드포인트로의 경로를 추가합니다.",
            "E. 각 VPC에 2개의 가용 영역에 Network Firewall을 배포합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BE (61%) AE (30%) 9%"
    },
    {
        "num": 174,
        "question": "A company is planning to migrate an internal application to the AWS Cloud. The application will run on Amazon EC2 instances in one VPC. Users\nwill access the application from the company's on-premises data center through AWS VPN or AWS Direct Connect. Users will use private domain\nnames for the application endpoint from a domain name that is reserved explicitly for use in the AWS Cloud.\nEach EC2 instance must have automatic failover to another EC2 instance in the same AWS account and the same VPC. A network engineer must\ndesign a DNS solution that will not expose the application to the internet.\nWhich solution will meet these requirements?",
        "options": [
            "A. Assign public IP addresses to the EC2 instances. Create an Amazon Route 53 private hosted zone for the AWS reserved domain name.\nAssociate the private hosted zone with the VPC. Create a Route 53 Resolver outbound endpoint. Configure conditional forwarding in the on-\npremises DNS resolvers to forward all DNS queries for the AWS domain to the outbound endpoint IP address for Route 53 Resolver. In the\nprivate hosted zone, configure primary and failover records that point to the public IP addresses of the EC2 instances. Create an Amazon\nCloudWatch metric and alarm to monitor the application's health. Set up a health check on the alarm for the primary application endpoint.",
            "B. Place the EC2 instances in private subnets. Create an Amazon Route 53 public hosted zone for the AWS reserved domain name. Associate\nthe public hosted zone with the VPC. Create a Route 53 Resolver inbound endpoint. Configure conditional forwarding in the on-premises DNS\nresolvers to forward all DNS queries for the AWS domain to the inbound endpoint IP address for Route 53 Resolver. In the public hosted zone,\nconfigure primary and failover records that point to the IP addresses of the EC2 instances. Create an Amazon CloudWatch metric and alarm to\nmonitor the application's health. Set up a health check on the alarm for the primary application endpoint.",
            "C. Place the EC2 instances in private subnets. Create an Amazon Route 53 private hosted zone for the AWS reserved domain name. Associate\nthe private hosted zone with the VPCreate a Route 53 Resolver inbound endpoint. Configure conditional forwarding in the on-premises DNS\nresolvers to forward all DNS queries for the AWS domain to the inbound endpoint IP address for Route 53 Resolver. In the private hosted zone,\nconfigure primary and failover records that point to the IP addresses of the EC2 instances. Create an Amazon CloudWatch metric and alarm to\nmonitor the application's health. Set up a health check on the alarm for the primary application endpoint.",
            "D. Place the EC2 instances in private subnets. Create an Amazon Route 53 private hosted zone for the AWS reserved domain name. Associate\nthe private hosted zone with the VPC. Create a Route 53 Resolver inbound endpoint. Configure conditional forwarding in the on-premises DNS\nresolvers to forward all DNS queries for the AWS domain to the inbound endpoint IP address for Route 53 Resolver. In the private hosted zone,\nconfigure primary and failover records that point to the IP addresses of the EC2 instances. Set up Route 53 health checks on the private IP\naddresses of the EC2 instances."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (86%) 14%",
        "question_ko": "회사는 내부 애플리케이션을 AWS 클라우드로 마이그레이션하려고 합니다. 애플리케이션은 한 VPC의 Amazon EC2 인스턴스에서 실행됩니다. 사용자는 회사의 온프레미스 데이터 센터에서 AWS VPN 또는 AWS Direct Connect를 통해 애플리케이션에 액세스합니다. 사용자는 AWS 클라우드에서 전용으로 예약된 도메인 이름을 사용하여 애플리케이션 엔드포인트에 액세스합니다. 각 EC2 인스턴스는 동일한 AWS 계정 및 동일한 VPC의 다른 EC2 인스턴스로 자동 장애 조치되어야 합니다. 네트워크 엔지니어는 애플리케이션을 인터넷에 노출하지 않는 DNS 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. EC2 인스턴스에 퍼블릭 IP 주소를 할당합니다. AWS 예약 도메인 이름에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC와 연결합니다. Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 DNS 확인자에서 AWS 도메인에 대한 모든 DNS 쿼리를 Resolver 아웃바운드 엔드포인트 IP 주소로 전달하도록 조건부 전달을 구성합니다. 프라이빗 호스팅 영역에서 기본 및 장애 조치 레코드를 구성하여 EC2 인스턴스의 퍼블릭 IP 주소를 가리킵니다. 애플리케이션 상태를 모니터링하기 위해 Amazon CloudWatch 지표 및 경보를 생성합니다. 기본 애플리케이션 엔드포인트에 대한 상태 확인을 구성합니다.",
            "B. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. AWS 예약 도메인 이름에 대한 Amazon Route 53 퍼블릭 호스팅 영역을 생성합니다. 퍼블릭 호스팅 영역을 VPC와 연결합니다. Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 확인자에서 AWS 도메인에 대한 모든 DNS 쿼리를 Resolver 인바운드 엔드포인트 IP 주소로 전달하도록 조건부 전달을 구성합니다. 퍼블릭 호스팅 영역에서 기본 및 장애 조치 레코드를 구성하여 EC2 인스턴스의 IP 주소를 가리킵니다. 애플리케이션 상태를 모니터링하기 위해 Amazon CloudWatch 지표 및 경보를 생성합니다. 기본 애플리케이션 엔드포인트에 대한 상태 확인을 구성합니다.",
            "C. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. AWS 예약 도메인 이름에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC와 연결합니다. Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 확인자에서 AWS 도메인에 대한 모든 DNS 쿼리를 Resolver 인바운드 엔드포인트 IP 주소로 전달하도록 조건부 전달을 구성합니다. 프라이빗 호스팅 영역에서 기본 및 장애 조치 레코드를 구성하여 EC2 인스턴스의 IP 주소를 가리킵니다. 애플리케이션 상태를 모니터링하기 위해 Amazon CloudWatch 지표 및 경보를 생성합니다. 기본 애플리케이션 엔드포인트에 대한 상태 확인을 구성합니다.",
            "D. EC2 인스턴스를 프라이빗 서브넷에 배치합니다. AWS 예약 도메인 이름에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC와 연결합니다. Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 확인자에서 AWS 도메인에 대한 모든 DNS 쿼리를 Resolver 인바운드 엔드포인트 IP 주소로 전달하도록 조건부 전달을 구성합니다. 프라이빗 호스팅 영역에서 기본 및 장애 조치 레코드를 구성하여 EC2 인스턴스의 IP 주소를 가리킵니다. EC2 인스턴스의 프라이빗 IP 주소에 대한 Route 53 상태 확인을 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (86%) 14%"
    },
    {
        "num": 175,
        "question": "A company uses Amazon Route 53 for its DNS needs. The company's security team wants to update the DNS infrastructure to provide the most\nrecent security posture.\nThe security team has configured DNS Security Extensions (DNSSEC) for the domain. The security team wants a network engineer to explain who\nis responsible for the rotation of DNSSEC keys.\nWhich explanation should the network administrator provide to the security team?",
        "options": [
            "A. AWS rotates the zone-signing key (ZSK). The company rotates the key-signing key (KSK).",
            "B. The company rotates the zone-signing key (ZSK) and the key-signing key (KSK).",
            "C. AWS rotates the AWS Key Management Service (AWS KMS) key and the key-signing key (KSK).",
            "D. The company rotates the AWS Key Management Service (AWS KMS) key. AWS rotates the key-signing key (KSK)."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 Amazon Route 53을 사용하여 DNS 요구 사항을 충족하고 있습니다. 보안 팀은 최신 보안 태세를 제공하기 위해 DNS 인프라를 업데이트하려고 합니다. 보안 팀은 도메인에 대해 DNS 보안 확장(DNSSEC)을 구성했습니다. 보안 팀은 네트워크 엔지니어에게 DNSSEC 키 교체 책임자를 설명해 달라고 요청했습니다. 네트워크 관리자가 보안 팀에 제공해야 할 설명은 무엇입니까?",
        "options_ko": [
            "A. AWS는 영역 서명 키(ZSK)를 교체합니다. 회사는 키 서명 키(KSK)를 교체합니다.",
            "B. 회사가 영역 서명 키(ZSK)와 키 서명 키(KSK)를 교체합니다.",
            "C. AWS는 AWS Key Management Service (AWS KMS) 키와 키 서명 키(KSK)를 교체합니다.",
            "D. 회사가 AWS Key Management Service (AWS KMS) 키를 교체합니다. AWS가 키 서명 키(KSK)를 교체합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 176,
        "question": "A company has agreed to collaborate with a partner for a research project. The company has multiple VPCs in the us-east-1 Region that use CIDR\nblocks within 10.10.0.0/16. The VPCs are connected by a transit gateway that is named TGW-C in us-east-1. TGW-C has an Autonomous System\nNumber (ASN) configuration value of 64520.\nThe partner has multiple VPCs in us-east-1 that use CIDR blocks within 172.16.0.0/16. The VPCs are connected by a transit gateway that is named\nTGW-P in us-east-1. TGW-P has an ASN configuration value of 64530.\nA network engineer needs to establish network connectivity between the company's VPCs and the partner's VPCs in us-east-1.\nWhich solution will meet these requirements with MINIMUM changes to both networks?",
        "options": [
            "A. Create a new VPC in a new account. Deploy a router from AWS Marketplace. Share TGW-C and TGW-P with the new account by using AWS\nResource Access Manager (AWS RAM). Associate TGW-C and TGW-P with the new VPC. Configure the router in the new VPC to route between\nTGW-C and TGW-P.",
            "B. Create an IPsec VPN connection between TGW-C and TGW-P. Configure the routing between the transit gateways to use the IPsec VPN\nconnection.",
            "C. Configure a cross-account transit gateway peering attachment between TGW-C and TGW-P. Configure the routing between the transit\ngateways to use the peering attachment.",
            "D. Share TGW-C with the partner account by using AWS Resource Access Manager (AWS RAM). Associate the partner VPCs with TGW-C.\nConfigure routing in the partner VPCs and TGW-C."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사에서 파트너와 공동 연구 프로젝트를 진행하기로 했습니다. 회사는 us-east-1 리전에 여러 VPC를 가지고 있으며, 이들 VPC는 10.10.0.0/16 CIDR 블록을 사용합니다. VPC는 us-east-1에 있는 TGW-C 이름의 트랜짓 게이트웨이로 연결되어 있으며, TGW-C의 자율 시스템 번호(ASN) 구성 값은 64520입니다.",
        "options_ko": [
            "A. 새 계정에 새 VPC를 생성하고 AWS 마켓플레이스에서 라우터를 배포합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 TGW-C와 TGW-P를 새 계정과 공유합니다. 새 VPC와 TGW-C 및 TGW-P를 연결합니다. 새 VPC의 라우터를 구성하여 TGW-C와 TGW-P 간에 라우팅을 수행합니다.",
            "B. TGW-C와 TGW-P 간에 IPsec VPN 연결을 생성합니다. 트랜짓 게이트웨이 간의 라우팅을 IPsec VPN 연결을 사용하도록 구성합니다.",
            "C. TGW-C와 TGW-P 간에 크로스 계정 트랜짓 게이트웨이 피어링 연결을 구성합니다. 트랜짓 게이트웨이 간의 라우팅을 피어링 연결을 사용하도록 구성합니다.",
            "D. AWS Resource Access Manager(AWS RAM)를 사용하여 TGW-C를 파트너 계정과 공유합니다. 파트너 VPC를 TGW-C와 연결합니다. 파트너 VPC와 TGW-C에서 라우팅을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 177,
        "question": "A company has a public application. The application uses an Application Load Balancer (ALB) that has a target group of Amazon EC2 instances.\nThe company wants to protect the application from security issues in web requests. The traffic to the application must have end-to-end\nencryption.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure a Network Load Balancer (NLB) that has a target group of the existing EC2 instances. Configure TLS connections to terminate on\nthe EC2 instances that use a public certificate. Configure an AWS WAF web ACL. Associate the web ACL with the NLB.",
            "B. Configure TLS connections to terminate at the ALB that uses a public certificate. Configure AWS Certificate Manager (ACM) certificates for\nthe communication between the ALB and the EC2 instances. Configure an AWS WAF web ACL. Associate the web ACL with the ALB.",
            "C. Configure a Network Load Balancer (NLB) that has a target group of the existing EC2 instances. Configure TLS connections to terminate at\nthe EC2 instances by creating a TLS listener. Configure self-signed certificates on the EC2 instances for the communication between the NLB\nand the EC2 instances. Configure an AWS WAF web ACL. Associate the web ACL with the NLB.",
            "D. Configure a third-party certificate on the EC2 instances for the communication between the ALB and the EC2 instances. Import the third-\nparty certificate into AWS Certificate Manager (ACM). Associate the imported certificate with the ALB. Configure TLS connections to\nterminate at the ALB. Configure an AWS WAF web ACL. Associate the web ACL with the ALB."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (72%) B (28%)",
        "question_ko": "회사에는 공개 애플리케이션이 있습니다. 이 애플리케이션은 Amazon EC2 인스턴스가 있는 대상 그룹이 있는 Application Load Balancer(ALB)를 사용합니다. 회사는 웹 요청의 보안 문제로부터 애플리케이션을 보호하고 싶습니다. 애플리케이션으로의 트래픽은 엔드-투-엔드 암호화를 해야 합니다.",
        "options_ko": [
            "A. EC2 인스턴스가 있는 대상 그룹이 있는 Network Load Balancer(NLB)를 구성합니다. EC2 인스턴스에 공개 인증서를 사용하여 TLS 연결을 종료합니다. AWS WAF 웹 ACL을 구성하고 NLB와 연결합니다.",
            "B. ALB에서 공개 인증서를 사용하여 TLS 연결을 종료하도록 구성합니다. AWS Certificate Manager(ACM)에서 ALB와 EC2 인스턴스 간 통신을 위한 인증서를 구성합니다. AWS WAF 웹 ACL을 구성하고 ALB와 연결합니다.",
            "C. EC2 인스턴스가 있는 대상 그룹이 있는 Network Load Balancer(NLB)를 구성합니다. EC2 인스턴스에 자체 서명된 인증서를 사용하여 NLB와 EC2 인스턴스 간 TLS 연결을 종료합니다. AWS WAF 웹 ACL을 구성하고 NLB와 연결합니다.",
            "D. EC2 인스턴스와 ALB 간 통신을 위해 타사 인증서를 구성합니다. 해당 인증서를 AWS Certificate Manager(ACM)에 가져옵니다. ALB와 가져온 인증서를 연결합니다. TLS 연결을 ALB에서 종료하도록 구성합니다. AWS WAF 웹 ACL을 구성하고 ALB와 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (72%) B (28%)"
    },
    {
        "num": 178,
        "question": "A company has an application that hosts personally identifiable information (PII) of users. All connections to the application must be secured by\nHTTPS with TLS certificates that implement Elliptic Curve Cryptography (ECC).\nThe application uses stateful connections between the web tier and the end users. Multiple instances host the application. A network engineer\nmust implement a solution that offloads TLS connections to a load balancer.\nWhich load-balancing solution will meet these requirements?",
        "options": [
            "A. Provision a Network Load Balancer. Configure a TLS listener by specifying the use of an ECC SSL certificate that is uploaded to AWS\nidentity and Access Management (IAM). Turn on health checks to monitor the web hosts that connect to the end users.",
            "B. Provision an Application Load Balancer. Configure an HTTPS listener by specifying the use of an ECC SSL certificate that is uploaded to\nAWS Certificate Manager (ACM). Configure a default action to redirect to the URL for the application. Turn on health checks to monitor the\nweb hosts that connect to the end users.",
            "C. Provision a Network Load Balancer. Configure a TLS listener by specifying the use of an ECC SSL certificate that is uploaded to AWS\nCertificate Manager (ACM). Turn on application-based session affinity (sticky sessions). Turn on health checks to monitor the web hosts that\nconnect to the end users.",
            "D. Provision an Application Load Balancer. Configure an HTTPS listener by specifying the use of an ECC SSL certificate that is uploaded to\nAWS Identity and Access Management (IAM). Configure a default action to redirect to the URL for the application. Turn on application-based\nsession affinity (sticky sessions)."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (65%) C (20%) B (15%)",
        "question_ko": "회사에는 사용자의 개인 식별 정보(PII)를 호스팅하는 애플리케이션이 있습니다. 모든 애플리케이션 연결은 타원 곡선 암호화(ECC)를 구현하는 TLS 인증서를 사용하여 HTTPS로 보안해야 합니다. 애플리케이션은 웹 계층과 최종 사용자 간에 상태 저장 연결을 사용합니다. 여러 인스턴스가 애플리케이션을 호스팅합니다. 네트워크 엔지니어는 TLS 연결을 로드 밸런서에 오프로드하는 솔루션을 구현해야 합니다.",
        "options_ko": [
            "A. Network Load Balancer를 프로비저닝합니다. IAM에 업로드된 ECC SSL 인증서를 사용하여 TLS 수신기를 구성합니다. 최종 사용자에 연결되는 웹 호스트를 모니터링하기 위해 상태 검사를 켭니다.",
            "B. Application Load Balancer를 프로비저닝합니다. ACM에 업로드된 ECC SSL 인증서를 사용하여 HTTPS 수신기를 구성합니다. 애플리케이션 URL로 리디렉션하는 기본 작업을 구성합니다. 최종 사용자에 연결되는 웹 호스트를 모니터링하기 위해 상태 검사를 켭니다.",
            "C. Network Load Balancer를 프로비저닝합니다. ACM에 업로드된 ECC SSL 인증서를 사용하여 TLS 수신기를 구성합니다. 애플리케이션 기반 세션 친화성(sticky session)을 켭니다. 최종 사용자에 연결되는 웹 호스트를 모니터링하기 위해 상태 검사를 켭니다.",
            "D. Application Load Balancer를 프로비저닝합니다. IAM에 업로드된 ECC SSL 인증서를 사용하여 HTTPS 수신기를 구성합니다. 애플리케이션 URL로 리디렉션하는 기본 작업을 구성합니다. 애플리케이션 기반 세션 친화성(sticky session)을 켭니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (65%) C (20%) B (15%)"
    },
    {
        "num": 179,
        "question": "A company hosts infrastructure services in multiple VPCs across multiple accounts in the us-west-2 Region. The VPC CIDR blocks do not overlap.\nThe company wants to connect the VPCs to its data centers by using AWS Site-to-Site VPN tunnels.\nThe connections must be encrypted in transit. Additionally, the connection from each data center must route to the closest AWS edge location.\nThe connections must be highly available and must accommodate automatic failover.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy a transit gateway. Share the transit gateway with each of the other accounts by using AWS Resource Access Manager (AWS RAM).\nCreate VPC attachments to the transit gateway from each service account. Add routes to the on-premises subnet in each of the service VPC\nroute tables by using the attachment as the gateway. Create Site-to-Site VPN tunnel attachments with dynamic routing to the transit gateway.\nEnable the acceleration feature for the Site-to-Site VPN connection. Configure the VPN tunnels on the on-premises equipment. Configure BGP\npeering.",
            "B. Deploy VPN gateways to each account. Enable the acceleration feature for VPN gateways on each account. Add routes to the on-premises\nsubnet in each of the service VPC route tables. Use the VPNs as the gateway. Configure the VPN tunnels on the on-premises equipment.\nConfigure BGP peering.",
            "C. Deploy a transit gateway. Share the transit gateway with each of the other accounts by using AWS Resource Access Manager (AWS RAM).\nCreate VPC attachments to the transit gateway from each service account. Add routes to the on-premises subnet in each of the service VPC\nroute tables by using the attachment as the gateway. Create Site-to-Site VPN tunnel attachments with dynamic routing to the transit gateway.\nEnable the acceleration feature for the Site-to-Site VPN connection. Configure the VPN tunnels on the on-premises equipment. Configure static\nrouting.",
            "D. Deploy VPN gateways to each account. Enable the acceleration feature for VPN gateways on each account. Add routes to the on-premises\nsubnet in each of the service VPC route tables. Use the VPNs as the gateway. Configure the VPN tunnels on the on-premises equipment.\nConfigure static routing."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 us-west-2 리전의 여러 계정에 걸쳐 인프라 서비스를 호스팅합니다. VPC CIDR 블록은 겹치지 않습니다. 회사는 AWS Site-to-Site VPN 터널을 사용하여 데이터 센터와 VPC를 연결하려고 합니다. 연결은 전송 중에 암호화되어야 합니다. 또한 각 데이터 센터에서의 연결은 가장 가까운 AWS 엣지 위치로 라우팅되어야 합니다. 연결은 고가용성이어야 하며 자동 장애 조치를 수용해야 합니다.",
        "options_ko": [
            "A. 트랜짓 게이트웨이를 배포합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 트랜짓 게이트웨이를 각 계정과 공유합니다. 각 서비스 계정에서 VPC 연결을 트랜짓 게이트웨이에 생성합니다. 각 서비스 VPC 라우팅 테이블에 온프레미스 서브넷으로의 경로를 추가하고 연결을 게이트웨이로 사용합니다. 동적 라우팅을 사용하여 트랜짓 게이트웨이에 Site-to-Site VPN 터널 연결을 생성합니다. Site-to-Site VPN 연결에 대한 가속화 기능을 활성화합니다. 온프레미스 장비에 VPN 터널을 구성합니다. BGP 피어링을 구성합니다.",
            "B. VPN 게이트웨이를 각 계정에 배포합니다. 각 계정에서 VPN 게이트웨이의 가속화 기능을 활성화합니다. 각 서비스 VPC 라우팅 테이블에 온프레미스 서브넷으로의 경로를 추가하고 VPN을 게이트웨이로 사용합니다. 온프레미스 장비에 VPN 터널을 구성합니다. BGP 피어링을 구성합니다.",
            "C. 트랜짓 게이트웨이를 배포합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 트랜짓 게이트웨이를 각 계정과 공유합니다. 각 서비스 계정에서 VPC 연결을 트랜짓 게이트웨이에 생성합니다. 각 서비스 VPC 라우팅 테이블에 온프레미스 서브넷으로의 경로를 추가하고 연결을 게이트웨이로 사용합니다. 정적 라우팅을 사용하여 트랜짓 게이트웨이에 Site-to-Site VPN 터널 연결을 생성합니다. Site-to-Site VPN 연결에 대한 가속화 기능을 활성화합니다. 온프레미스 장비에 VPN 터널을 구성합니다.",
            "D. VPN 게이트웨이를 각 계정에 배포합니다. 각 계정에서 VPN 게이트웨이의 가속화 기능을 활성화합니다. 각 서비스 VPC 라우팅 테이블에 온프레미스 서브넷으로의 경로를 추가하고 VPN을 게이트웨이로 사용합니다. 온프레미스 장비에 VPN 터널을 구성합니다. 정적 라우팅을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 180,
        "question": "A company has a transit gateway in AWS Account A. The company uses AWS Resource Access Manager (AWS RAM) to share the transit gateway\nso that users in other accounts can connect to multiple VPCs in the same AWS Region. AWS Account B contains a VPC (10.0.0.0/16) with subnet\n10.0.0.0/24 in the us-west-2a Availability Zone and subnet 10.0.1.0/24 in the us-west-2b Availability Zone. Resources in these subnets can\ncommunicate with other VPCs.\nA network engineer creates two new subnets: 10.0.2.0/24 in the us-west-2b Availability Zone and 10.0.3.0/24 in the us-west-2c Availability Zone.\nAll the subnets share one route table. The default route 0.0.0.0/0 is pointing to the transit gateway. Resources in subnet 10.0.2.0/24 can\ncommunicate with other VPCs, but resources in subnet 10.0.3.0/24 cannot communicate with other VPCs.\nWhat should the network engineer do so that resources in subnet 10.0.3.0/24 can communicate with other VPCs?",
        "options": [
            "A. In Account B, add 10.0.2.0/24 and 10.0.3.0/24 as the destinations to the route table. Use the transit gateway as the target.",
            "B. In Account B, update the transit gateway attachment. Attach the new subnet ID that is associated with us-west-2c to Account B's VPC.",
            "C. In Account A, create a static route for 10.0.3.0/24 in the transit gateway route tables.",
            "D. In Account A, recreate propagation for 10.0.0.0/16 in the transit gateway route tables."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (68%) C (32%)",
        "question_ko": "회사는 AWS Account A에 트랜짓 게이트웨이를 가지고 있습니다. 회사는 AWS Resource Access Manager(AWS RAM)를 사용하여 트랜짓 게이트웨이를 공유하여 다른 계정의 사용자가 동일한 AWS 리전의 여러 VPC에 연결할 수 있도록 합니다. AWS Account B에는 us-west-2a 가용 영역의 10.0.0.0/24 서브넷과 us-west-2b 가용 영역의 10.0.1.0/24 서브넷이 있는 VPC(10.0.0.0/16)가 있습니다. 이러한 서브넷의 리소스는 다른 VPC와 통신할 수 있습니다. 네트워크 엔지니어는 us-west-2b 가용 영역의 10.0.2.0/24 서브넷과 us-west-2c 가용 영역의 10.0.3.0/24 서브넷이라는 두 개의 새 서브넷을 생성했습니다. 모든 서브넷은 하나의 라우팅 테이블을 공유합니다. 기본 경로 0.0.0.0/0은 트랜짓 게이트웨이를 가리킵니다. 10.0.2.0/24 서브넷의 리소스는 다른 VPC와 통신할 수 있지만, 10.0.3.0/24 서브넷의 리소스는 다른 VPC와 통신할 수 없습니다. 네트워크 엔지니어가 10.0.3.0/24 서브넷의 리소스가 다른 VPC와 통신할 수 있도록 하기 위해 해야 할 작업은 무엇입니까?",
        "options_ko": [
            "A. Account B에서 라우팅 테이블에 10.0.2.0/24와 10.0.3.0/24를 대상으로 추가합니다. 대상으로 트랜짓 게이트웨이를 사용합니다.",
            "B. Account B에서 트랜짓 게이트웨이 연결을 업데이트합니다. us-west-2c와 연결된 새 서브넷 ID를 Account B의 VPC에 연결합니다.",
            "C. Account A에서 트랜짓 게이트웨이 라우팅 테이블에 10.0.3.0/24에 대한 정적 경로를 생성합니다.",
            "D. Account A에서 트랜짓 게이트웨이 라우팅 테이블에 10.0.0.0/16에 대한 전파를 다시 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (68%) C (32%)"
    },
    {
        "num": 181,
        "question": "A company has started using AWS Cloud WAN with one edge location in the us-east-1 Region. The company has a production segment and a\nsecurity segment in AWS Cloud WAN. The company also has a default core network policy.\nThe company has created a production VPC for the production workload. The company has created an outbound inspection VPC to inspect\ninternet-bound traffic from the production VPC. The company has attached the production VPC to the production segment and has attached the\noutbound inspection VPC to the security segment. The company has also created an AWS Network Firewall firewall in the outbound inspection\nVPC to inspect internet-based traffic.\nThe company has updated a route table for the production VPC to send all internet-bound traffic to the AWS Cloud WAN core network. The\ncompany has updated a route table for the outbound inspection VPC to ensure that Network Firewall inspects any outgoing traffic and incoming\ntraffic.\nDuring testing, an Amazon EC2 instance in the production VPC cannot reach the internet. The company checks the Network Firewall rules and\nconfirms that the rules are not blocking the traffic.\nWhich combination of steps will meet these requirements? (Choose two.)",
        "options": [
            "A. Update the core network policy to configure segment sharing. Share the production segment with the security segment.",
            "B. Update the core network policy to create a static route for the security segment. Specify 0.0.0.0/0 as the destination CIDR block. Specify\nthe outbound inspection VPC as an attachment.",
            "C. Update the core network policy to create a static route for the production segment. Specify 0.0.0.0/0 as the destination CIDR block. Specify\nthe outbound inspection VPC as an attachment.",
            "D. Update the core network policy to create a static route for the production segment. Specify 10.2.0.0/16 as the destination CIDR block.\nSpecify the outbound inspection VPC as an attachment.",
            "E. Create an attachment to attach the outbound inspection VPC to the production segment. Update the core network policy to turn on isolated\nattachment for the production segment."
        ],
        "answers": [
            "A",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AC (80%) AB (20%)",
        "question_ko": "AWS Cloud WAN을 사용하기 시작한 회사는 us-east-1 리전에 엣지 위치 하나를 가지고 있습니다. 이 회사는 AWS Cloud WAN에 프로덕션 세그먼트와 보안 세그먼트를 가지고 있으며, 기본 코어 네트워크 정책도 가지고 있습니다.\n회사는 프로덕션 워크로드를 위한 프로덕션 VPC를 생성했습니다. 또한 인터넷 트래픽을 검사하기 위한 아웃바운드 검사 VPC를 생성했습니다. 회사는 프로덕션 VPC를 프로덕션 세그먼트에 연결하고 아웃바운드 검사 VPC를 보안 세그먼트에 연결했습니다. 또한 아웃바운드 검사 VPC에 AWS Network Firewall 방화벽을 생성했습니다.\n회사는 프로덕션 VPC의 라우팅 테이블을 업데이트하여 모든 인터넷 트래픽을 AWS Cloud WAN 코어 네트워크로 보냈습니다. 또한 아웃바운드 검사 VPC의 라우팅 테이블을 업데이트하여 Network Firewall이 모든 송수신 트래픽을 검사하도록 했습니다.\n테스트 중 프로덕션 VPC의 Amazon EC2 인스턴스가 인터넷에 액세스할 수 없었습니다. 회사는 Network Firewall 규칙을 확인했지만 트래픽을 차단하지 않는다는 것을 확인했습니다.\n이 요구 사항을 충족하려면 어떤 조치들을 취해야 합니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 코어 네트워크 정책을 업데이트하여 세그먼트 공유를 구성합니다. 보안 세그먼트와 프로덕션 세그먼트를 공유합니다.",
            "B. 코어 네트워크 정책을 업데이트하여 보안 세그먼트에 대한 정적 경로를 생성합니다. 대상 CIDR 블록으로 0.0.0.0/0을 지정하고, 아웃바운드 검사 VPC를 연결점으로 지정합니다.",
            "C. 코어 네트워크 정책을 업데이트하여 프로덕션 세그먼트에 대한 정적 경로를 생성합니다. 대상 CIDR 블록으로 0.0.0.0/0을 지정하고, 아웃바운드 검사 VPC를 연결점으로 지정합니다.",
            "D. 코어 네트워크 정책을 업데이트하여 프로덕션 세그먼트에 대한 정적 경로를 생성합니다. 대상 CIDR 블록으로 10.2.0.0/16을 지정하고, 아웃바운드 검사 VPC를 연결점으로 지정합니다.",
            "E. 아웃바운드 검사 VPC를 프로덕션 세그먼트에 연결하는 연결점을 생성합니다. 코어 네트워크 정책을 업데이트하여 프로덕션 세그먼트에 대한 고립된 연결점을 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AC (80%) AB (20%)"
    },
    {
        "num": 182,
        "question": "A company has two business units (BUs). The company operates in the us-east-1 Region and the us-west-1 Region. The company plans to extend\nto more Regions in the future. Each BU has a VPC in each Region. Each Region has a transit gateway with the BU VPCs attached. The transit\ngateways in both Regions are peered.\nThe company will create several more BUs in the future and will need to isolate some of the BUs from the other BUs. The company wants to\nmigrate to an architecture to incorporate more Regions and BUs.\nWhich solution will meet these requirements with the MOST operational efficiency?",
        "options": [
            "A. Create a new transit gateway for each new BU in each Region. Peer the new transit gateways with the existing transit gateways. Update the\nroute tables to control traffic between BUs.",
            "B. Create an AWS Cloud WAN core network with an edge location in both Regions. Configure a segment for each BU with VPC attachments to\nthe new BU VPCs. Use segment actions to control traffic between segments.",
            "C. Create an AWS Cloud WAN core network with an edge location in both Regions. Configure a segment for each BU with VPC attachments to\nthe new BU VPCs. Configure the segments to isolate attachments to control traffic between segments.",
            "D. Attach new VPCs to the existing transit gateways. Update route tables to control traffic between BUs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (83%) C (17%)",
        "question_ko": "회사에는 두 개의 사업부(BU)가 있습니다. 회사는 us-east-1 리전과 us-west-1 리전에서 운영하고 있으며, 향후 더 많은 리전으로 확장할 계획입니다. 각 사업부는 각 리전에 VPC를 가지고 있으며, 각 리전에는 사업부 VPC가 연결된 트랜짓 게이트웨이가 있습니다. 두 리전의 트랜짓 게이트웨이는 피어링되어 있습니다.\n회사는 향후 더 많은 사업부를 생성할 것이며, 일부 사업부를 다른 사업부와 격리해야 합니다. 회사는 더 많은 리전과 사업부를 포함할 수 있는 아키텍처로 마이그레이션하고자 합니다.\n이러한 요구 사항을 가장 운영 효율성 높게 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 새로운 사업부에 대해 각 리전에 새 트랜짓 게이트웨이를 생성합니다. 새 트랜짓 게이트웨이를 기존 트랜짓 게이트웨이와 피어링합니다. 사업부 간 트래픽을 제어하기 위해 라우팅 테이블을 업데이트합니다.",
            "B. 양 리전에 엣지 위치를 가진 AWS Cloud WAN 코어 네트워크를 생성합니다. 각 사업부에 대한 세그먼트를 구성하고 새 사업부 VPC를 세그먼트에 연결합니다. 세그먼트 작업을 사용하여 세그먼트 간 트래픽을 제어합니다.",
            "C. 양 리전에 엣지 위치를 가진 AWS Cloud WAN 코어 네트워크를 생성합니다. 각 사업부에 대한 세그먼트를 구성하고 새 사업부 VPC를 세그먼트에 연결합니다. 세그먼트를 격리하여 세그먼트 간 트래픽을 제어합니다.",
            "D. 새 VPC를 기존 트랜짓 게이트웨이에 연결합니다. 사업부 간 트래픽을 제어하기 위해 라우팅 테이블을 업데이트합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (83%) C (17%)"
    },
    {
        "num": 183,
        "question": "A company has an AWS Site-to-Site VPN connection between AWS and its branch office. A network engineer is troubleshooting connectivity issues\nthat the connection is experiencing. The VPN connection terminates at a transit gateway and is statically routed. In the transit gateway route\ntable, there are several static route entries that target specific subnets at the branch office.\nThe network engineer determines that the root cause of the issues was the expansion of underlying subnet ranges in the branch office during\nroutine maintenance.\nWhich solution will solve this problem with the LEAST administrative overhead for future expansion efforts?",
        "options": [
            "A. Determine a supernet for the branch office. In the transit gateway route table, add an aggregate route that targets the VPN attachment.\nReplace the specific subnet routes in the transit gateway route table with the new supernet route.",
            "B. Create an AWS Direct Connect gateway and a transit VIF. Associate the Direct Connect gateway with the transit gateway. Create a\npropagation for the Direct Connect attachment to the transit gateway route table.",
            "C. Create a dynamically routed VPN connection on the transit gateway. Connect the dynamically routed VPN connection to the branch office.\nCreate a propagation for the VPN attachment to the transit gateway route table. Remove the existing static VPN connection.",
            "D. Create a prefix list that contains the new subnets and the old subnets for the branch office. Remove the specific subnet routes in the transit\ngateway route table. Create a prefix list reference in the transit gateway route table."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (63%) A (21%) D (16%)",
        "question_ko": "회사는 AWS와 지사 사이에 AWS Site-to-Site VPN 연결을 가지고 있습니다. 네트워크 엔지니어는 이 연결에서 발생하는 연결 문제를 해결하고 있습니다. VPN 연결은 트랜짓 게이트웨이에서 종료되며 정적으로 라우팅됩니다. 트랜짓 게이트웨이 라우팅 테이블에는 지사의 특정 서브넷을 대상으로 하는 여러 개의 정적 경로 항목이 있습니다.\n네트워크 엔지니어는 이 문제의 근본 원인이 일상적인 유지 관리 중에 지사의 기본 서브넷 범위가 확장된 것이라고 판단했습니다.\n이 문제를 향후 확장 노력에 대한 관리 오버헤드를 최소화하여 해결할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 지사의 수퍼넷을 확인합니다. 트랜짓 게이트웨이 라우팅 테이블에 수퍼넷 경로를 추가하여 VPN 연결점을 대상으로 합니다. 기존의 특정 서브넷 경로를 새로운 수퍼넷 경로로 대체합니다.",
            "B. AWS Direct Connect 게이트웨이와 트랜짓 VIF를 생성합니다. Direct Connect 게이트웨이를 트랜짓 게이트웨이와 연결합니다. Direct Connect 연결점에 대한 전파를 트랜짓 게이트웨이 라우팅 테이블에 생성합니다.",
            "C. 트랜짓 게이트웨이에 동적 라우팅 VPN 연결을 생성합니다. 동적 라우팅 VPN 연결을 지사에 연결합니다. VPN 연결점에 대한 전파를 트랜짓 게이트웨이 라우팅 테이블에 생성합니다. 기존 정적 VPN 연결을 제거합니다.",
            "D. 지사의 새 서브넷과 이전 서브넷을 포함하는 접두사 목록을 생성합니다. 트랜짓 게이트웨이 라우팅 테이블에서 특정 서브넷 경로를 제거합니다. 트랜짓 게이트웨이 라우팅 테이블에 접두사 목록 참조를 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (63%) A (21%) D (16%)"
    },
    {
        "num": 184,
        "question": "An education agency is preparing for its annual competition between schools. In the competition, students at schools from around the country\nsolve math problems, complete puzzles, and write essays.\nThe IP addressing plan of all the schools is well-known and is administered centrally. The competition is hosted in the AWS Cloud and is not\npublicly available. All competition traffic must be encrypted in transit. Only authorized endpoints can access the competition. All the schools have\nfirewall policies that block ICMP traffic.\nA network engineer builds a solution in which all the schools access the competition through AWS Site-to-Site VPN connections. The network\nengineer uses BGP as the routing protocol. The network engineer must implement a solution that notifies schools when they lose connectivity and\nneed to take action on their premises to address the issue.\nWhich combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
        "options": [
            "A. Monitor the state of the VPN tunnels by using Amazon CloudWatch. Create a CloudWatch alarm that uses Amazon Simple Notification\nService (Amazon SNS) to notify people at the affected school if the tunnels are down.",
            "B. Create a scheduled AWS Lambda function that pings each school's on-premises customer gateway device. Configure the Lambda function\nto send an Amazon Simple Notification Service (Amazon SNS) notification to people at the affected school if the ping fails.",
            "C. Create a scheduled AWS Lambda function that uses the VPC Reachability Analyzer API to verify the connectivity. Configure the Lambda\nfunction to send an Amazon Simple Notification Service (Amazon SNS) notification to people at the affected school if failure occurs.",
            "D. Create an Amazon CloudWatch dashboard for each school to show all CloudWatch metrics for each school's Site-to-Site VPN connection.\nShare each dashboard with the appropriate school.",
            "E. Create a scheduled AWS Lambda function to monitor the existence of each school's routes in the VPC route table where VPN routes are\npropagated. Configure the Lambda function to send an Amazon Simple Notification Service (Amazon SNS) notification to people at the\naffected school if failure occurs."
        ],
        "answers": [
            "A",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AE (82%) AC (18%)",
        "question_ko": "교육 기관은 전국의 학교들 간 연간 경쟁 행사를 준비하고 있습니다. 이 경쟁에서 학생들은 수학 문제 해결, 퍼즐 완성, 에세이 작성 등을 합니다.\n모든 학교의 IP 주소 계획은 잘 알려져 있으며 중앙에서 관리됩니다. 이 경쟁은 AWS 클라우드에서 호스팅되며 공개되지 않습니다. 모든 경쟁 트래픽은 전송 중에 암호화되어야 합니다. 권한 있는 엔드포인트만 경쟁에 액세스할 수 있습니다. 모든 학교는 ICMP 트래픽을 차단하는 방화벽 정책을 가지고 있습니다.\n네트워크 엔지니어는 모든 학교가 AWS Site-to-Site VPN 연결을 통해 경쟁에 액세스하도록 하는 솔루션을 구축했습니다. 엔지니어는 BGP를 라우팅 프로토콜로 사용합니다. 엔지니어는 학교가 연결성을 잃었을 때 이를 알리고 학교에서 조치를 취할 수 있도록 해야 합니다.\n이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 조치들은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. Amazon CloudWatch를 사용하여 VPN 터널의 상태를 모니터링합니다. 터널이 다운되면 영향 받는 학교에 Amazon Simple Notification Service(Amazon SNS)를 통해 알리는 CloudWatch 경보를 생성합니다.",
            "B. 각 학교의 온-프레미스 고객 게이트웨이 디바이스를 ping하는 예약된 AWS Lambda 함수를 생성합니다. ping에 실패하면 영향 받는 학교에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Lambda 함수를 구성합니다.",
            "C. VPC 연결성 분석기 API를 사용하여 연결성을 확인하는 예약된 AWS Lambda 함수를 생성합니다. 연결 실패 시 영향 받는 학교에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Lambda 함수를 구성합니다.",
            "D. 각 학교의 Site-to-Site VPN 연결에 대한 모든 CloudWatch 지표를 표시하는 Amazon CloudWatch 대시보드를 생성합니다. 각 대시보드를 해당 학교와 공유합니다.",
            "E. VPC 라우팅 테이블에 전파된 각 학교의 경로 존재 여부를 모니터링하는 예약된 AWS Lambda 함수를 생성합니다. 경로 실패 시 영향 받는 학교에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Lambda 함수를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: AE (82%) AC (18%)"
    },
    {
        "num": 185,
        "question": "A company securely connects resources that are in its VPC to a software as a service (SaaS) solution from a SaaS provider. The SaaS solution is\nhosted in the AWS Cloud and is powered by AWS PrivateLink. The company uses a PrivateLink endpoint to access the SaaS solution behind the\nSaaS provider's Network Load Balancer (NLB).\nThe company recently added a new Availability Zone and new subnets to its VPC. A network engineer is unable to deploy a new interface VPC\nendpoint for the SaaS solution in the new Availability Zone.\nWhat is the cause of this problem?",
        "options": [
            "A. The CIDR block of the new subnets conflicts with the SaaS provider's CIDR block.",
            "B. The enableDnsHostnames attribute and enableDnsSupport attribute were not configured on the new subnets in the new Availability Zone.",
            "C. The SaaS provider does not offer the solution in the new Availability Zone and has not configured cross-zone load balancing for the NLB.",
            "D. The new subnets are missing a route to the VPC internet gateway."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 VPC의 리소스와 SaaS 제공업체가 호스팅하는 SaaS 솔루션을 안전하게 연결합니다. SaaS 솔루션은 AWS 클라우드에서 호스팅되며 AWS PrivateLink로 구동됩니다. 회사는 SaaS 제공업체의 Network Load Balancer(NLB) 뒤에 있는 PrivateLink 엔드포인트를 사용하여 SaaS 솔루션에 액세스합니다.\n회사는 최근 새 가용 영역과 새 서브넷을 VPC에 추가했습니다. 네트워크 엔지니어가 새 가용 영역에 SaaS 솔루션을 위한 새 인터페이스 VPC 엔드포인트를 배포할 수 없습니다.\n이 문제의 원인은 무엇입니까?",
        "options_ko": [
            "A. 새 서브넷의 CIDR 블록이 SaaS 제공업체의 CIDR 블록과 충돌합니다.",
            "B. 새 가용 영역의 새 서브넷에서 enableDnsHostnames 속성과 enableDnsSupport 속성이 구성되지 않았습니다.",
            "C. SaaS 제공업체가 새 가용 영역에서 솔루션을 제공하지 않으며 NLB에 대한 크로스 영역 로드 밸런싱을 구성하지 않았습니다.",
            "D. 새 서브넷에 VPC 인터넷 게이트웨이로의 경로가 없습니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 186,
        "question": "A company wants to use an AWS Network Firewall firewall to secure its workloads in the cloud through network traffic inspection. The company\nmust record complete metadata information, such as source/destination IP addresses and protocol type. The company must also record all\nnetwork traffic flows and any DROP or ALERT actions that the firewall takes for traffic that the firewall processes. The Network Firewall endpoints\nare placed in the correct subnets, and the VPC route tables direct traffic to the Network Firewall endpoints on the path to and from the internet.\nHow should a network engineer configure the firewall to meet these requirements?",
        "options": [
            "A. Create a firewall policy to ensure that traffic is processed by stateless or stateful rules according to needs. Select Amazon CloudWatch\nLogs as the destination for the flow logs.",
            "B. Create a firewall policy to ensure that traffic is processed by stateless or stateful rules according to needs. Configure Network Firewall\nlogging for alert logs and flow logs.\nSelect a destination for logs separately for stateful and stateless engines.",
            "C. Create a firewall policy to ensure that a stateful engine processes all the traffic. Configure Network Firewall logging for alert logs and flow\nlogs. Select a destination for alert logs and flow logs.",
            "D. Create a firewall policy to ensure that a stateful engine processes all the traffic. Configure VPC flow logs for the subnets that the firewall\nprotects. Select a destination for the flow logs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (67%) B (33%)",
        "question_ko": "클라우드에서 워크로드를 안전하게 보호하기 위해 AWS Network Firewall 방화벽을 사용하려는 기업입니다. 기업은 소스/대상 IP 주소 및 프로토콜 유형과 같은 완전한 메타데이터 정보를 기록해야 합니다. 또한 방화벽이 처리하는 트래픽에 대해 DROP 또는 ALERT 작업을 수행하는 모든 네트워크 트래픽 흐름을 기록해야 합니다. Network Firewall 엔드포인트는 올바른 서브넷에 배치되어 있으며 VPC 라우팅 테이블은 인터넷에서 들어오고 나가는 트래픽을 Network Firewall 엔드포인트로 전달합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하기 위해 방화벽을 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. 트래픽을 필요에 따라 무상태 또는 상태 기반 규칙으로 처리하도록 방화벽 정책을 생성합니다. 흐름 로그의 대상으로 Amazon CloudWatch Logs를 선택합니다.",
            "B. 트래픽을 필요에 따라 무상태 또는 상태 기반 규칙으로 처리하도록 방화벽 정책을 생성합니다. 경고 로그 및 흐름 로그에 대해 Network Firewall 로깅을 구성합니다. 상태 기반 및 무상태 엔진에 대한 로그 대상을 별도로 선택합니다.",
            "C. 모든 트래픽을 상태 기반 엔진으로 처리하도록 방화벽 정책을 생성합니다. 경고 로그 및 흐름 로그에 대해 Network Firewall 로깅을 구성합니다. 경고 로그와 흐름 로그의 대상을 선택합니다.",
            "D. 모든 트래픽을 상태 기반 엔진으로 처리하도록 방화벽 정책을 생성합니다. 방화벽이 보호하는 서브넷에 대해 VPC 흐름 로그를 구성합니다. 흐름 로그의 대상을 선택합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (67%) B (33%)"
    },
    {
        "num": 187,
        "question": "A company is building a new workload on AWS that uses an Application Load Balancer (ALB). The company has configured a new ALB target\ngroup that uses slow start mode. A team begins registering Amazon EC2 instances as targets in the new target group. During testing, the team\nobserves that the targets did not enter slow start mode.\nWhat caused the targets to not enter slow start mode?",
        "options": [
            "A. The ALB configuration uses the round robin routing algorithm for traffic.",
            "B. The target group did not contain at least one healthy target configured in slow start mode.",
            "C. The target group must contain EC2 instances that are all the same instance type.",
            "D. The ALB configuration uses the 5-tuple criteria for traffic."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "AWS에 새로운 워크로드를 구축하는 기업은 Application Load Balancer (ALB)를 사용하고 있습니다. 회사는 느린 시작 모드를 사용하는 새 ALB 대상 그룹을 구성했습니다. 팀은 새 대상 그룹에 Amazon EC2 인스턴스를 대상으로 등록하기 시작했습니다. 테스트 중 대상이 느린 시작 모드에 진입하지 않은 것을 관찰했습니다. 대상이 느린 시작 모드에 진입하지 않은 이유는 무엇입니까?",
        "options_ko": [
            "A. ALB 구성이 트래픽에 대해 라운드 로빈 라우팅 알고리즘을 사용합니다.",
            "B. 대상 그룹에 느린 시작 모드로 구성된 최소 하나의 정상 대상이 포함되어 있지 않습니다.",
            "C. 대상 그룹에는 모두 동일한 인스턴스 유형의 EC2 인스턴스가 포함되어야 합니다.",
            "D. ALB 구성이 트래픽에 대해 5-튜플 기준을 사용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 188,
        "question": "A network engineer is using AWS Direct Connect connections and MACsec to encrypt data from a corporate data center to the Direct Connect\nlocation. The network engineer learns that the MACsec secret key might have been compromised. The network engineer needs to update the\nconnection with an uncompromised secure key.\nWhich solution will meet this requirement?",
        "options": [
            "A. Create a new MACsec secret key that uses an AWS Key Management Service (AWS KMS) AWS managed key. Associate the new pre-shared\nkey, Connection Key Name (CKN), and Connectivity Association Key (CAK) with the connection.",
            "B. Create a new MACsec secret key that uses an AWS Key Management Service (AWS KMS) customer managed key. Associate the new pre-\nshared key, Connection Key Name (CKN), and Connectivity Association Key (CAK) with the connection.",
            "C. Modify the existing MACsec secret key. Re-associate the existing pre-shared key, Connection Key Name (CKN), and Connectivity\nAssociation Key (CAK) with the connection.",
            "D. Modify the existing MACsec secret key. Associate the new pre-shared key, Connection Key Name (CKN), and Connectivity Association Key\n(CAK) with the connection."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "네트워크 엔지니어가 AWS Direct Connect 연결과 MACsec을 사용하여 기업 데이터 센터에서 Direct Connect 위치로 데이터를 암호화하고 있습니다. 네트워크 엔지니어는 MACsec 비밀 키가 손상되었을 수 있다는 것을 알게 되었습니다. 네트워크 엔지니어는 손상되지 않은 보안 키로 연결을 업데이트해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. AWS Key Management Service(AWS KMS) 관리형 키를 사용하여 새 MACsec 비밀 키를 생성합니다. 새 사전 공유 키, Connection Key Name(CKN) 및 Connectivity Association Key(CAK)를 연결에 연결합니다.",
            "B. AWS Key Management Service(AWS KMS) 고객 관리형 키를 사용하여 새 MACsec 비밀 키를 생성합니다. 새 사전 공유 키, Connection Key Name(CKN) 및 Connectivity Association Key(CAK)를 연결에 연결합니다.",
            "C. 기존 MACsec 비밀 키를 수정합니다. 기존 사전 공유 키, Connection Key Name(CKN) 및 Connectivity Association Key(CAK)를 다시 연결에 연결합니다.",
            "D. 기존 MACsec 비밀 키를 수정합니다. 새 사전 공유 키, Connection Key Name(CKN) 및 Connectivity Association Key(CAK)를 연결에 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 189,
        "question": "A network engineer configures a second AWS Direct Connect connection to an existing network. The network engineer runs a test in the AWS\nDirect Connect Resiliency Toolkit on the connections. The test produces a failure. During the failover event, the network engineer observes a 90-\nsecond interruption before traffic shifts to the failover connection.\nWhich solution will reduce the time for failover?",
        "options": [
            "A. Decrease the BGP hello timer to 5 seconds.",
            "B. Add a VPN connection to the connectivity solution. Implement fast failover.",
            "C. Configure Bidirectional Forwarding Detection (BFD) on the on-premises router.",
            "D. Decrease the BGP hold-down timer to 5 seconds."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "네트워크 엔지니어가 기존 네트워크에 두 번째 AWS Direct Connect 연결을 구성했습니다. 네트워크 엔지니어는 AWS Direct Connect Resiliency Toolkit에서 연결에 대한 테스트를 실행했습니다. 이 테스트에서 오류가 발생했습니다. 장애조치 이벤트 중 네트워크 엔지니어는 장애조치 연결로 트래픽이 전환되기 전에 90초 동안 중단이 있었음을 관찰했습니다. 장애조치 시간을 줄일 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. BGP 안녕 타이머를 5초로 줄이십시오.",
            "B. 연결 솔루션에 VPN 연결을 추가하고 빠른 장애조치를 구현하십시오.",
            "C. 온프레미스 라우터에서 Bidirectional Forwarding Detection(BFD)를 구성하십시오.",
            "D. BGP 홀드다운 타이머를 5초로 줄이십시오."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 190,
        "question": "A company is building an API-based application on AWS and is using a microservices architecture for the design. The company is using a multi-\naccount AWS environment that includes a separate AWS account for each microservice development team. Each team hosts its microservice in\nits own VPC that contains Amazon EC2 instances behind a Network Load Balancer (NLB).\nA network engineer needs to use Amazon API Gateway in a shared services account to create an HTTP API to expose these microservices to\nexternal applications. The network engineer must ensure that access to the microservices can occur only over a private network. Additionally, the\ncompany must be able to control which entities from its internal network can connect to the microservices. In the future, the company will create\nmore microservices that the company must be able to integrate with the application.\nWhat is the MOST secure solution that meets these requirements?",
        "options": [
            "A. Create an Application Load Balancer (ALB) in a VPC in the shared services account. Configure the integration to the API Gateway API by\nusing a VPC link. Associate the VPC link with the ALB. Create a VPC endpoint service in each microservice account. Create an AWS\nPrivateLink endpoint for those services in the shared services account. Add the elastic network interface IP addresses of the VPC endpoint as\ntargets for the target group of the ALB.",
            "B. Create an Application Load Balancer (ALB) in a VPC in the shared services account. Configure the integration to the API Gateway API by\nusing a VPC link. Associate the VPC link with the ALConnect all the VPCs to each other by using a central transit gateway. Add the IP\naddresses of the NLB as IP-based targets in the ALB target group.",
            "C. Configure the integration to the API Gateway API by using HTTP-based integration. Connect all the VPCs to each other by using a central\ntransit gateway. Create a separate HTTP integration to each NLB for each microservice. Add the HTTP endpoint of the NLB as the endpoint\nURL in the HTTP integration.",
            "D. Configure the integration to the API Gateway API by using VPC link integration. Connect all the VPCs to each other by using a central transit\ngateway. Create a separate VPC link to each NLB for each microservice. Add the HTTP endpoint of the NLB as the endpoint URL in the VPC\nlink integration."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (58%) D (38%) 4%",
        "question_ko": "기업은 AWS에 API 기반 애플리케이션을 구축하고 있으며 마이크로서비스 아키텍처를 사용하고 있습니다. 기업은 각 마이크로서비스 개발 팀에 별도의 AWS 계정이 포함된 다중 계정 AWS 환경을 사용합니다. 각 팀은 Network Load Balancer(NLB) 뒤의 Amazon EC2 인스턴스가 있는 자체 VPC에 마이크로서비스를 호스팅합니다.\n네트워크 엔지니어는 공유 서비스 계정에서 Amazon API Gateway를 사용하여 이러한 마이크로서비스를 외부 애플리케이션에 노출하는 HTTP API를 만들어야 합니다. 네트워크 엔지니어는 마이크로서비스에 대한 액세스가 전용 네트워크를 통해서만 가능하도록 해야 합니다. 또한 회사는 내부 네트워크에서 어떤 엔터티가 마이크로서비스에 연결할 수 있는지 제어할 수 있어야 합니다. 향후 회사는 더 많은 마이크로서비스를 만들어 애플리케이션과 통합해야 합니다. 이러한 요구 사항을 가장 안전하게 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 공유 서비스 계정의 VPC에 Application Load Balancer(ALB)를 만듭니다. API Gateway API와의 통합을 VPC 링크를 사용하여 구성합니다. VPC 링크를 ALB와 연결합니다. 각 마이크로서비스 계정에 VPC 엔드포인트 서비스를 만듭니다. 공유 서비스 계정에 AWS PrivateLink 엔드포인트를 만듭니다. ALB 대상 그룹의 대상으로 VPC 엔드포인트의 엘라스틱 네트워크 인터페이스 IP 주소를 추가합니다.",
            "B. 공유 서비스 계정의 VPC에 Application Load Balancer(ALB)를 만듭니다. API Gateway API와의 통합을 VPC 링크를 사용하여 구성합니다. VPC 링크를 ALB와 연결합니다. 모든 VPC를 중앙 트랜짓 게이트웨이를 사용하여 서로 연결합니다. ALB 대상 그룹에 NLB의 IP 주소를 IP 기반 대상으로 추가합니다.",
            "C. API Gateway API와의 통합을 HTTP 기반 통합으로 구성합니다. 모든 VPC를 중앙 트랜짓 게이트웨이를 사용하여 서로 연결합니다. 각 마이크로서비스에 대해 별도의 HTTP 통합을 NLB에 만듭니다. HTTP 통합에 NLB의 HTTP 엔드포인트를 엔드포인트 URL로 추가합니다.",
            "D. API Gateway API와의 통합을 VPC 링크 통합으로 구성합니다. 모든 VPC를 중앙 트랜짓 게이트웨이를 사용하여 서로 연결합니다. 각 마이크로서비스에 대해 별도의 VPC 링크를 NLB에 만듭니다. VPC 링크 통합에 NLB의 HTTP 엔드포인트를 엔드포인트 URL로 추가합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (58%) D (38%) 4%"
    },
    {
        "num": 191,
        "question": "A company's VPC has Amazon EC2 instances that are communicating with AWS services over the public internet. The company needs to change\nthe connectivity so that the communication does not occur over the public internet.\nThe company deploys AWS PrivateLink endpoints in the VPC. After the deployment of the PrivateLink endpoints, the EC2 instances can no longer\ncommunicate at all with the required AWS services.\nWhich combination of steps should a network engineer take to restore communication with the AWS services? (Choose two.)",
        "options": [
            "A. In the VPC route table, add a route that has the PrivateLink endpoints as the destination.",
            "B. Ensure that the enableDnsSupport attribute is set to True for the VPC. Ensure that each VPC endpoint has DNS support enabled.",
            "C. Ensure that the VPC endpoint policy allows communication.",
            "D. Create an Amazon Route 53 public hosted zone for all services.",
            "E. Create an Amazon Route 53 private hosted zone that includes a custom name for each service."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (100%)",
        "question_ko": "회사의 VPC에는 공개 인터넷을 통해 AWS 서비스와 통신하는 Amazon EC2 인스턴스가 있습니다. 회사는 통신이 공개 인터넷을 통과하지 않도록 연결성을 변경해야 합니다. 회사는 VPC에 AWS PrivateLink 엔드포인트를 배포합니다. PrivateLink 엔드포인트 배포 후 EC2 인스턴스가 더 이상 필요한 AWS 서비스와 통신할 수 없습니다. 네트워크 엔지니어가 AWS 서비스와의 통신을 복원하기 위해 수행해야 하는 조치는 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. VPC 라우팅 테이블에 PrivateLink 엔드포인트를 대상으로 하는 경로를 추가합니다.",
            "B. VPC의 enableDnsSupport 속성을 True로 설정하고 각 VPC 엔드포인트에 DNS 지원을 활성화합니다.",
            "C. VPC 엔드포인트 정책이 통신을 허용하는지 확인합니다.",
            "D. 모든 서비스에 대한 Amazon Route 53 공개 호스팅 영역을 생성합니다.",
            "E. 각 서비스에 대한 사용자 지정 이름을 포함하는 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (100%)"
    },
    {
        "num": 192,
        "question": "An international company wants to implement a multi-site hybrid infrastructure. The company wants to deploy its cloud computing resources on\nAWS in the us-east-1 Region and in the eu-west-2 Region, and in on-premises data centers in the United States (US) and in the United Kingdom\n(UK). The data centers are connected to each other by a private WAN connection. IP routing information is exchanged dynamically through BGP.\nThe company wants to have two AWS Direct Connect connections, one each in the US and the UK.\nThe company expects to have 15 VPCs in each Region with CIDR blocks that do not overlap with each other or with CIDR blocks of the on-\npremises environment. The VPC CIDR blocks are planned so that the prefix aggregation can be performed both on a Regional level and across the\nentire AWS environment. The company will deploy a transit gateway in each Region to connect the VPCs. A network engineer plans to use a Direct\nConnect gateway in each Region. A transit VIF will attach the Direct Connect gateway in each Region to the transit gateway in that Region. The\ntransit gateways will be peered with each other.\nThe network engineer wants to ensure that traffic follows the shortest geographical path from source to destination. Traffic between the on-\npremises data centers and AWS must travel across a local Direct Connect connection. Traffic between the US data center and eu-west-2 and traffic\nbetween the UK data center and us-east-1 must use the private WAN connection to reach the Direct Connect connection to the appropriate Region\nwhen the Direct Connect connection is available. The network must be resilient to failures in either the private WAN connection or with the Direct\nConnect connections. The network also must reroute traffic automatically in the event of any failure.\nHow should the network engineer configure the transit VIF associations on the Direct Connect gateways to meet these requirements?",
        "options": [
            "A. Advertise only the aggregate route for the company's entire AWS environment.",
            "B. Advertise VPC-specific CIDR prefixes from only the local Region. Additionally, advertise the aggregate route for the company’s entire AWS\nenvironment.",
            "C. Advertise all the specific VPC CIDR blocks from both Regions.",
            "D. Advertise both Regional aggregate prefixes. Configure custom BGP communities on the routes advertised toward the data center."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (72%) D (28%)",
        "question_ko": "국제 회사는 다중 사이트 하이브리드 인프라를 구현하려고 합니다. 회사는 미국 동부 리전과 EU 서부 2 리전의 AWS에 클라우드 컴퓨팅 리소스를 배포하고 미국과 영국의 온-프레미스 데이터 센터에도 배포하려고 합니다. 데이터 센터는 개인 WAN 연결로 연결됩니다. IP 라우팅 정보는 BGP를 통해 동적으로 교환됩니다. 회사는 미국과 영국에 각각 AWS Direct Connect 연결을 구축하려고 합니다. 회사는 각 리전에 15개의 VPC를 가질 것으로 예상하며, CIDR 블록은 서로 또는 온-프레미스 환경과 겹치지 않도록 계획됩니다. VPC CIDR 블록은 리전 수준과 전체 AWS 환경 수준에서 접두사 집계를 수행할 수 있도록 계획됩니다. 회사는 각 리전에 트랜짓 게이트웨이를 배포할 것입니다. 네트워크 엔지니어는 각 리전에 Direct Connect 게이트웨이를 사용하려고 합니다. 트랜짓 VIF가 해당 리전의 Direct Connect 게이트웨이를 트랜짓 게이트웨이에 연결할 것입니다. 트랜짓 게이트웨이는 서로 피어링될 것입니다. 네트워크 엔지니어는 소스에서 대상까지의 최단 지리적 경로를 따라 트래픽이 흐르도록 하려고 합니다. 온-프레미스 데이터 센터와 AWS 간 트래픽은 로컬 Direct Connect 연결을 통과해야 합니다. 미국 데이터 센터와 eu-west-2 간, 그리고 영국 데이터 센터와 us-east-1 간 트래픽은 적절한 리전의 Direct Connect 연결에 도달하기 위해 개인 WAN 연결을 사용해야 합니다. 네트워크는 개인 WAN 연결 또는 Direct Connect 연결 장애에 회복력이 있어야 하며 어떤 장애 발생 시에도 자동으로 트래픽을 재라우팅해야 합니다. 네트워크 엔지니어는 이러한 요구사항을 충족하기 위해 Direct Connect 게이트웨이의 트랜짓 VIF 연결을 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. 회사 전체 AWS 환경에 대한 집계 경로만 광고합니다.",
            "B. 로컬 리전의 VPC 특정 CIDR 접두사만 광고합니다. 또한 회사 전체 AWS 환경에 대한 집계 경로를 광고합니다.",
            "C. 양 리전의 모든 구체적인 VPC CIDR 블록을 광고합니다.",
            "D. 리전별 집계 접두사를 모두 광고합니다. 데이터 센터로 광고되는 경로에 사용자 지정 BGP 커뮤니티를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (72%) D (28%)"
    },
    {
        "num": 193,
        "question": "A company's AWS infrastructure is spread across more than 50 accounts and across five AWS Regions. The company needs to manage its\nsecurity posture with simplified administration and maintenance for all the AWS accounts. The company wants to use AWS Firewall Manager to\nmanage the firewall rules and requirements.\nThe company creates an organization with all features enabled in AWS Organizations.\nWhich combination of steps should the company take next to meet the requirements? (Choose three.)",
        "options": [
            "A. Configure only the Firewall Manager administrator account to join the organization.",
            "B. Configure all the accounts to join the organization.",
            "C. Set an account as the Firewall Manager administrator account.",
            "D. Set an account as the Firewall Manager child account.",
            "E. Set up AWS Config for all the accounts and all the Regions where the company has resources.",
            "F. Set up AWS Config for only the organization's management account."
        ],
        "answers": [
            "B",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCE (100%)",
        "question_ko": "회사의 AWS 인프라는 50개 이상의 계정과 5개 AWS 리전에 걸쳐 분산되어 있습니다. 회사는 모든 AWS 계정에 대한 보안 태세를 간소화된 관리 및 유지 보수로 관리해야 합니다. 회사는 AWS Firewall Manager를 사용하여 방화벽 규칙 및 요구사항을 관리하려고 합니다. 회사는 AWS Organizations에서 모든 기능을 활성화하는 조직을 생성했습니다. 회사가 다음에 수행해야 할 단계 조합은 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. Firewall Manager 관리자 계정만 조직에 참여하도록 구성합니다.",
            "B. 모든 계정을 조직에 참여하도록 구성합니다.",
            "C. Firewall Manager 관리자 계정을 설정합니다.",
            "D. Firewall Manager 자식 계정을 설정합니다.",
            "E. 리소스가 있는 모든 계정과 모든 리전에 AWS Config를 설정합니다.",
            "F. 조직의 관리 계정에만 AWS Config를 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BCE (100%)"
    },
    {
        "num": 194,
        "question": "A company is using an Amazon CloudFront distribution that is configured with an Application Load Balancer (ALB) as an origin. A network\nengineer needs to implement a solution that requires all inbound traffic to the ALB to come from CloudFront. The network engineer must\nimplement the solution at the network layer rather than in the application.\nWhich solution will meet these requirements in the MOST operationally efficient way?",
        "options": [
            "A. Add an inbound rule to the ALB's security group to allow the AWS managed prefix list for CloudFront.",
            "B. Add an inbound rule to the network ACLs that are associated with the ALB's subnets. Use the AWS managed prefix list for CloudFront as the\nsource in the rule.",
            "C. Configure CloudFront to add a custom HTTP header to the requests that CloudFront sends to the ALB.",
            "D. Associate an AWS WAF web ACL with the ALB. Configure the AWS WAF rules to allow traffic from the CloudFront IP set. Automatically\nupdate the CloudFront IP set by using an AWS Lambda function."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (83%) C (17%)",
        "question_ko": "회사는 Application Load Balancer(ALB)를 오리진으로 구성된 Amazon CloudFront 배포를 사용하고 있습니다. 네트워크 엔지니어는 ALB에 대한 모든 인바운드 트래픽이 CloudFront에서 오도록 하는 솔루션을 구현해야 합니다. 네트워크 엔지니어는 애플리케이션이 아닌 네트워크 계층에서 이 솔루션을 구현해야 합니다. 이러한 요구사항을 가장 운영적으로 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. ALB의 보안 그룹에 CloudFront에 대한 AWS 관리형 접두사 목록을 허용하는 인바운드 규칙을 추가합니다.",
            "B. ALB 서브넷과 연결된 네트워크 ACL에 인바운드 규칙을 추가합니다. 원본으로 CloudFront에 대한 AWS 관리형 접두사 목록을 사용합니다.",
            "C. CloudFront가 ALB로 보내는 요청에 사용자 지정 HTTP 헤더를 추가하도록 구성합니다.",
            "D. ALB와 AWS WAF 웹 ACL을 연결합니다. AWS WAF 규칙을 구성하여 CloudFront IP 집합에서 오는 트래픽을 허용합니다. AWS Lambda 함수를 사용하여 CloudFront IP 집합을 자동으로 업데이트합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (83%) C (17%)"
    },
    {
        "num": 195,
        "question": "A company has AWS accounts in an organization in AWS Organizations. The company has implemented Amazon VPC IP Address Manager (IPAM)\nin its networking AWS account. The company is using AWS Resource Access Manager (AWS RAM) to share IPAM pools with other AWS accounts.\nThe company has created a top-level pool with a CIDR block of 10.0.0.0/8. For each AWS account, the company has created an IPAM pool within\nthe top-level pool.\nA network engineer needs to implement a solution to ensure that users in each AWS account cannot create new VPCs. The solution also must\nprevent users from associating a CIDR block with existing VPCs unless the CIDR block is from the IPAM pool for that account.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a new AWS Config rule to find all VPCs that are not configured to allocate their CIDR block from an IPAM pool. Invoke an AWS\nLambda function to delete these VPCs.",
            "B. Create a new SCP in Organizations. Add a condition that denies the CreateVpc and AssociateVpcCidrBlock Amazon EC2 actions if the\nIpv4IpamPoolId context key value is not the ID of an IPAM pool.",
            "C. Create an AWS Lambda function to check for and delete all VPCs that are not configured to allocate their CIDR block from an IPAM pool.\nInvoke the Lambda function at regular intervals.",
            "D. Create an Amazon EventBridge rule to check for AWS CloudTrail events for the CreateVpc and AssociateVpcCidrBlock Amazon EC2 actions.\nUse the rule to invoke an AWS Lambda function to delete all VPCs that are not configured to allocate their CIDR block from an IPAM pool."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (90%) 10%",
        "question_ko": "회사는 AWS Organizations의 AWS 계정에 Amazon VPC IP 주소 관리자(IPAM)를 구현했습니다. 회사는 AWS Resource Access Manager(AWS RAM)를 사용하여 다른 AWS 계정과 IPAM 풀을 공유하고 있습니다. 회사는 최상위 풀에 10.0.0.0/8 CIDR 블록을 생성했습니다. 각 AWS 계정에 대해 최상위 풀 내에 IPAM 풀을 생성했습니다. 네트워크 엔지니어는 각 AWS 계정의 사용자가 새 VPC를 만들 수 없도록 하고, 해당 계정의 IPAM 풀에서 CIDR 블록을 가져오지 않는 한 기존 VPC에 CIDR 블록을 연결할 수 없도록 하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. IPAM 풀에서 CIDR 블록을 할당하지 않은 모든 VPC를 찾는 새 AWS Config 규칙을 생성합니다. AWS Lambda 함수를 호출하여 이러한 VPC를 삭제합니다.",
            "B. 새 SCP를 Organizations에 생성합니다. CreateVpc 및 AssociateVpcCidrBlock Amazon EC2 작업을 거부하는 조건을 추가합니다. 이 조건은 Ipv4IpamPoolId 컨텍스트 키 값이 IPAM 풀 ID가 아닌 경우에만 적용됩니다.",
            "C. IPAM 풀에서 CIDR 블록을 할당하지 않은 모든 VPC를 찾고 삭제하는 AWS Lambda 함수를 생성합니다. 이 Lambda 함수를 정기적으로 호출합니다.",
            "D. CreateVpc 및 AssociateVpcCidrBlock Amazon EC2 작업에 대한 AWS CloudTrail 이벤트를 확인하는 Amazon EventBridge 규칙을 생성합니다. 이 규칙을 사용하여 IPAM 풀에서 CIDR 블록을 할당하지 않은 모든 VPC를 삭제하는 AWS Lambda 함수를 호출합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (90%) 10%"
    },
    {
        "num": 196,
        "question": "A company has an application that runs on premises. The application needs to communicate with an application that runs in a VPC on AWS. The\ncommunication between the applications must be encrypted and must use private IP addresses. The communication cannot travel across the\npublic internet.\nThe company has established a 1 Gbps AWS Direct Connect connection between the on-premises location and AWS.\nWhich solution will meet the connectivity requirements with the LEAST operational overhead?",
        "options": [
            "A. Configure a private VIF on the Direct Connect connection. Associate the private VIF with the VPC's virtual private gateway. Set up an AWS\nSite-to-Site VPN private IP VPN connection to the virtual private gateway.",
            "B. Create a transit gateway. Configure a transit VIF on the Direct Connect connection. Associate the transit VIF with a Direct Connect gateway.\nAssociate the Direct Connect gateway with a new transit gateway. Set up an AWS Site-to-Site VPN private IP VPN connection to the transit\ngateway.",
            "C. Configure a public VIF on the Direct Connect connection. Associate the public VIF with a Direct Connect gateway. Associate the Direct\nConnect gateway with a new transit gateway. Set up an AWS Site-to-Site VPN private IP VPN connection to the transit gateway.",
            "D. Create a transit gateway. Configure a transit VIF on the Direct Connect connection. Associate the transit VIF with a Direct Connect gateway.\nAssociate the Direct Connect gateway with a new transit gateway. Set up a third-party firewall in a new VPC that is attached to the transit\ngateway. Set up a VPN connection to the third-party firewall."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (67%) A (21%) 13%",
        "question_ko": "온프레미스에서 실행되는 애플리케이션이 VPC에서 실행되는 다른 애플리케이션과 통신해야 합니다. 통신은 암호화되어야 하고 프라이빗 IP 주소를 사용해야 합니다. 공개 인터넷을 통해 통신해서는 안 됩니다. 회사는 온프레미스 위치와 AWS 간에 1Gbps AWS Direct Connect 연결을 설정했습니다. 작업 오버헤드가 가장 적은 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 연결에 프라이빗 VIF를 구성하고 VPC의 가상 프라이빗 게이트웨이와 연결합니다. 가상 프라이빗 게이트웨이에 프라이빗 IP VPN 연결을 설정합니다.",
            "B. 트랜짓 게이트웨이를 생성합니다. Direct Connect 연결에 트랜짓 VIF를 구성하고 Direct Connect 게이트웨이와 연결합니다. Direct Connect 게이트웨이를 새로운 트랜짓 게이트웨이와 연결합니다. 트랜짓 게이트웨이에 프라이빗 IP VPN 연결을 설정합니다.",
            "C. Direct Connect 연결에 퍼블릭 VIF를 구성하고 Direct Connect 게이트웨이와 연결합니다. Direct Connect 게이트웨이를 새로운 트랜짓 게이트웨이와 연결합니다. 트랜짓 게이트웨이에 프라이빗 IP VPN 연결을 설정합니다.",
            "D. 트랜짓 게이트웨이를 생성합니다. Direct Connect 연결에 트랜짓 VIF를 구성하고 Direct Connect 게이트웨이와 연결합니다. Direct Connect 게이트웨이를 새로운 트랜짓 게이트웨이와 연결합니다. 트랜짓 게이트웨이에 연결된 새로운 VPC에 써드파티 방화벽을 설정하고 방화벽에 VPN 연결을 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (67%) A (21%) 13%"
    },
    {
        "num": 197,
        "question": "A company has established connectivity between its on-premises data center in Paris. France, and the AWS Cloud by using an AWS Direct Connect\nconnection. The company uses a transit VIF that connects the Direct Connect connection with a transit gateway that is hosted in the Europe\n(Paris) Region. The company hosts workloads in private subnets in several VPCs that are attached to the transit gateway.\nThe company recently acquired another corporation that hosts workloads on premises in an office building in Tokyo, Japan. The company needs\nto migrate the workloads from the Tokyo office to AWS. These workloads must have access to the company's existing workloads in Paris. The\ncompany also must establish connectivity between the Tokyo office building and the Paris data center.\nIn the Asia Pacific (Tokyo) Region, the company creates a new VPC with private subnets for migration of the workloads. The workload migration\nmust be completed in 5 days. The workloads cannot be directly accessible from the internet.\nWhich set of steps should a network engineer take to meet these requirements?",
        "options": [
            "A. 1. Create public subnets in the Tokyo VPC to migrate the workloads into.\n2. Configure an internet gateway for the Tokyo office to reach the Tokyo VPC.\n3. Configure security groups on the Tokyo workloads to only allow traffic from the Tokyo office and the Paris workloads.\n4. Create peering connections between the Tokyo VPC and the Paris VPCs.\n5. Configure a VPN connection between the Paris data center and the Tokyo office by using existing routers.",
            "B. 1. Configure a transit gateway in the Asia Pacific (Tokyo) Region. Associate this transit gateway with the Tokyo VPC.\n2. Create peering connections between the Tokyo transit gateway and the Paris transit gateway.\n3. Set up a new Direct Connect connection from the Tokyo office to the Tokyo transit gateway.\n4. Configure routing on both transit gateways to allow data to flow between sites and the VPCs.",
            "C. 1. Configure a transit gateway in the Asia Pacific (Tokyo) Region. Associate this transit gateway with the Tokyo VPC.\n2. Create peering connections between the Tokyo transit gateway and the Paris transit gateway.\n3. Configure an AWS Site-to-Site VPN connection from the Tokyo office. Set the Tokyo transit gateway as the target.\n4. Configure routing on both transit gateways to allow data to flow between sites and the VPCs.",
            "D. 1. Configure an AWS Site-to-Site VPN connection from the Tokyo office to the Paris transit gateway.\n2. Create an association between the Paris transit gateway and the Tokyo VPC.\n3. Configure routing on the Paris transit gateway to allow data to flow between sites and the VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 파리에 있는 온프레미스 데이터 센터와 AWS 클라우드 간에 AWS Direct Connect 연결을 설정했습니다. 회사는 파리 리전에 있는 트랜짓 게이트웨이와 연결되는 트랜짓 VIF를 사용합니다. 최근 회사는 일본 도쿄에 있는 다른 회사를 인수했습니다. 도쿄 사무실의 워크로드를 AWS로 마이그레이션해야 합니다. 이 워크로드는 파리의 기존 워크로드에 액세스할 수 있어야 합니다. 또한 도쿄 사무실과 파리 데이터 센터 간에 연결이 필요합니다. 네트워크 엔지니어가 이러한 요구 사항을 충족하기 위해 수행해야 할 단계는 무엇입니까?",
        "options_ko": [
            "A. 1. 워크로드 마이그레이션을 위해 도쿄 VPC에 퍼블릭 서브넷을 생성합니다.\n2. 도쿄 사무실에서 도쿄 VPC에 도달할 수 있도록 인터넷 게이트웨이를 구성합니다.\n3. 도쿄 워크로드의 보안 그룹을 구성하여 도쿄 사무실과 파리 워크로드만 허용합니다.\n4. 도쿄 VPC와 파리 VPC 간에 피어링 연결을 생성합니다.\n5. 기존 라우터를 사용하여 파리 데이터 센터와 도쿄 사무실 간에 VPN 연결을 설정합니다.",
            "B. 1. 도쿄 리전에 트랜짓 게이트웨이를 구성하고 이 게이트웨이를 도쿄 VPC와 연결합니다.\n2. 도쿄 트랜짓 게이트웨이와 파리 트랜짓 게이트웨이 간에 피어링 연결을 생성합니다.\n3. 도쿄 사무실에서 도쿄 트랜짓 게이트웨이로의 새로운 Direct Connect 연결을 설정합니다.\n4. 두 트랜짓 게이트웨이의 라우팅을 구성하여 사이트와 VPC 간에 데이터 흐름을 허용합니다.",
            "C. 1. 도쿄 리전에 트랜짓 게이트웨이를 구성하고 이 게이트웨이를 도쿄 VPC와 연결합니다.\n2. 도쿄 트랜짓 게이트웨이와 파리 트랜짓 게이트웨이 간에 피어링 연결을 생성합니다.\n3. 도쿄 사무실에서 AWS Site-to-Site VPN 연결을 구성하고 대상을 도쿄 트랜짓 게이트웨이로 설정합니다.\n4. 두 트랜짓 게이트웨이의 라우팅을 구성하여 사이트와 VPC 간에 데이터 흐름을 허용합니다.",
            "D. 1. 도쿄 사무실에서 파리 트랜짓 게이트웨이로의 AWS Site-to-Site VPN 연결을 구성합니다.\n2. 파리 트랜짓 게이트웨이와 도쿄 VPC 간에 연결을 생성합니다.\n3. 파리 트랜짓 게이트웨이의 라우팅을 구성하여 사이트와 VPC 간에 데이터 흐름을 허용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 198,
        "question": "Company A recently acquired Company B. Company A has a hybrid AWS and on-premises environment that uses a hosted AWS Direct Connect\nconnection, a Direct Connect gateway, and a transit gateway. Company A has a transit VIF to access the resources in its production environment\nin the us-east-1 Region.\nCompany B has applications that run across multiple VPCs in the us-west-2 Region in a single AWS account. A transit gateway connects all\nCompany B's application VPCs. The CIDR blocks for both companies do not overlap.\nCompany A needs to use the existing Direct Connect connection to access Company B’s applications from the on-premises environment.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a new Direct Connect gateway in the Company B account. Associate the Company B transit gateway with the new Direct Connect\ngateway. Create a transit VIF on the existing hosted connection for Company B.",
            "B. Create an association proposal from the Company B account to associate the Company B transit gateway with the Company A Direct\nConnect gateway. Accept the transit gateway association proposal by logging into the Company A account.",
            "C. Create multiple virtual private gateways. Attach the virtual private gateways to each of Company B's application VPCs. Create a hosted\nprivate VIF for each virtual private gateway.",
            "D. Create a new Direct Connect gateway in the Company B account. Associate the Company B transit gateway with the new Direct Connect\ngateway. Create a hosted private VIF for Company B."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사 A는 회사 B를 인수했습니다. 회사 A는 AWS 호스팅 Direct Connect 연결, Direct Connect 게이트웨이, 트랜짓 게이트웨이를 사용하는 하이브리드 AWS 및 온프레미스 환경을 가지고 있습니다. 회사 B는 us-west-2 리전의 여러 VPC에서 애플리케이션을 실행합니다. 회사 A는 기존 Direct Connect 연결을 사용하여 온프레미스 환경에서 회사 B의 애플리케이션에 액세스해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 회사 B 계정에 새로운 Direct Connect 게이트웨이를 생성합니다. 회사 B 트랜짓 게이트웨이를 새로운 Direct Connect 게이트웨이와 연결합니다. 기존 호스팅된 연결에 대한 회사 B용 트랜짓 VIF를 생성합니다.",
            "B. 회사 B 계정에서 트랜짓 게이트웨이 연결 제안을 생성하고 회사 A 계정에서 제안을 수락합니다.",
            "C. 여러 개의 가상 프라이빗 게이트웨이를 생성합니다. 가상 프라이빗 게이트웨이를 회사 B의 각 애플리케이션 VPC에 연결합니다. 각 가상 프라이빗 게이트웨이에 대해 호스팅된 프라이빗 VIF를 생성합니다.",
            "D. 회사 B 계정에 새로운 Direct Connect 게이트웨이를 생성합니다. 회사 B 트랜짓 게이트웨이를 새로운 Direct Connect 게이트웨이와 연결합니다. 회사 B에 대한 호스팅된 프라이빗 VIF를 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 199,
        "question": "A company has developed a web service for language translation. The web service's application runs on a fleet of Amazon EC2 instances that are\nin an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) and are deployed in a private subnet. The web service can\nprocess requests that contain hundreds of megabytes of data.\nThe company needs to give some customers the ability to access the web service. Each customer has its own AWS account. The company must\nmake the web service accessible to approved customers without making the web service accessible to all customers.\nWhich combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
        "options": [
            "A. Create VPC peering connections with the approved customers only.",
            "B. Create an AWS PrivateLink endpoint service. Configure the endpoint service to require acceptance that will be granted to approved\ncustomers only.",
            "C. Configure an authentication action for the endpoint service's load balancer to allow customers to log in by using their AWS credentials.\nProvide only approved customers with the URL.",
            "D. Configure a Network Load Balancer (NLB) and a listener with the ALB as a target. Associate the NLB with the endpoint service.",
            "E. Associate the ALB with the endpoint service."
        ],
        "answers": [
            "B",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BD (100%)",
        "question_ko": "회사는 언어 번역 웹 서비스를 개발했습니다. 웹 서비스는 Application Load Balancer (ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 승인된 고객만 웹 서비스에 액세스할 수 있어야 합니다. 이러한 요구 사항을 충족하고 운영 오버헤드를 최소화하는 두 가지 단계는 무엇입니까?",
        "options_ko": [
            "A. 승인된 고객과만 VPC 피어링 연결을 생성합니다.",
            "B. AWS PrivateLink 엔드포인트 서비스를 생성합니다. 엔드포인트 서비스 구성 시 승인된 고객에게만 수락을 허용하도록 설정합니다.",
            "C. 엔드포인트 서비스의 로드 밸런서에 인증 액션을 구성하여 고객이 AWS 자격 증명으로 로그인할 수 있도록 합니다. 승인된 고객에게만 URL을 제공합니다.",
            "D. Network Load Balancer (NLB)와 리스너를 구성하고 ALB를 대상으로 연결합니다. NLB를 엔드포인트 서비스와 연결합니다.",
            "E. ALB를 엔드포인트 서비스와 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BD (100%)"
    },
    {
        "num": 200,
        "question": "A company is migrating an application to the AWS Cloud. The company has successfully provisioned and tested connectivity between AWS Direct\nConnect and the company's on-premises data center. The application runs on Amazon EC2 instances across multiple Availability Zones. The\ninstances are in an Auto Scaling group.\nThe application communicates through HTTPS to a third-party vendor's data service that is hosted at the company’s data center. The data service\nimplements a static ACL through explicit allow listing of client IP addresses.\nA network engineer must design a network solution so that the migrated application can continue to access the vendor’s data service as the\napplication scales.\nWhich solution will meet these requirements with the LEAST amount of ongoing change to the vendor's allow list?",
        "options": [
            "A. Configure a private NAT gateway in the subnets for each Availability Zone that the application runs in. Configure the application to target\nthe NAT gateways instead of the data service directly. Update the data service's allow list to include the IP addresses of the NAT gateways.",
            "B. Configure an elastic network interface in the subnets for each Availability Zone that the application runs in. Associate the elastic network\ninterfaces with the Auto Scaling group for the application. Update the data service's allow list to include the IP addresses of the elastic\nnetwork interfaces.",
            "C. Configure an elastic network interface in the subnets for each Availability Zone that the application runs in. Launch an EC2 instance into\neach subnet. Attach the respective elastic network interfaces to the new EC2 instances. In the application subnet route tables, configure the\nnew EC2 instances as the next destination for the data service. Update the data service’s allow list to include the IP addresses of the elastic\nnetwork interfaces.",
            "D. Configure an Application Load Balancer (ALB) in the subnets for each Availability Zone that the application runs in. Configure an ALB-\nassociated target group that contains a target that uses the IP address for the data service. Configure the application to target the ALB\ninstead of the data service directly. Update the data service's allow list to include the IP addresses of the ALBs."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 애플리케이션을 AWS 클라우드로 마이그레이션하고 있습니다. 애플리케이션은 여러 가용 영역의 Amazon EC2 인스턴스에서 실행되며 Auto Scaling 그룹으로 관리됩니다. 애플리케이션은 HTTPS를 통해 온프레미스 데이터 센터에 호스팅된 타사 벤더의 데이터 서비스와 통신합니다. 데이터 서비스는 클라이언트 IP 주소 허용 목록을 사용하는 정적 ACL을 구현합니다. 네트워크 엔지니어는 계속해서 벤더의 허용 목록을 업데이트하지 않고도 마이그레이션된 애플리케이션이 데이터 서비스에 액세스할 수 있는 솔루션을 설계해야 합니다. 어떤 솔루션이 이 요구 사항을 가장 잘 충족합니까?",
        "options_ko": [
            "A. 각 가용 영역의 서브넷에 프라이빗 NAT 게이트웨이를 구성합니다. 애플리케이션이 데이터 서비스가 아닌 NAT 게이트웨이를 대상으로 하도록 구성합니다. 데이터 서비스의 허용 목록에 NAT 게이트웨이의 IP 주소를 추가합니다.",
            "B. 각 가용 영역의 서브넷에 탄력적 네트워크 인터페이스를 구성하고 이를 애플리케이션의 Auto Scaling 그룹과 연결합니다. 데이터 서비스의 허용 목록에 탄력적 네트워크 인터페이스의 IP 주소를 추가합니다.",
            "C. 각 가용 영역의 서브넷에 탄력적 네트워크 인터페이스를 구성하고 해당 인터페이스를 새로운 EC2 인스턴스에 연결합니다. 애플리케이션 서브넷 라우팅 테이블에서 데이터 서비스에 대한 대상을 새 EC2 인스턴스로 구성합니다. 데이터 서비스의 허용 목록에 탄력적 네트워크 인터페이스의 IP 주소를 추가합니다.",
            "D. 각 가용 영역의 서브넷에 Application Load Balancer (ALB)를 구성합니다. ALB 연결 대상 그룹에 데이터 서비스의 IP 주소를 대상으로 추가합니다. 애플리케이션이 데이터 서비스가 아닌 ALB를 대상으로 하도록 구성합니다. 데이터 서비스의 허용 목록에 ALB의 IP 주소를 추가합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 201,
        "question": "A company has a highly available application that is hosted in multiple VPCs and in two on-premises data centers. All the VPCs reside in the same\nAWS Region. All the VPCs require access to each other and to the on-premises data centers for the transfer of files that are multiple gigabytes in\nsize.\nA network engineer is designing an AWS Direct Connect solution to connect the on-premises data centers to each VPC.\nWhich architecture will meet the company's requirements with the LEAST operational overhead?",
        "options": [
            "A. Configure a virtual private gateway and a private VIF in each VPC in the Region. Configure a Direct Connect gateway. Associate the VIF of\nevery VPC with the Direct Connect gateway. Create a new private VIF that connects the Direct Connect gateway to each on-premises data\ncenter. Configure the new private VIF to exchange BGP routes with the on-premises data centers and to have an MTU of 9001. Use VPC\npeering between each VPC. Configure static routing in each VPC to provide inter-VPC routing.",
            "B. Configure a virtual private gateway and a private VIF in each VPC in the Region. Configure a Direct Connect gateway. Associate the VIF of\nevery VPC with the Direct Connect gateway. Create a new private VIF that connects the Direct Connect gateway to each on-premises data\ncenter. Configure the new private VIF to exchange BGP routes with the on-premises data centers and to have an MTU of 8500. Use VPC\npeering between each VPC. Configure static routing in each VPC to provide inter-VPC routing.",
            "C. Configure a transit gateway in the same Region of each VPAttach each VPC to the transit gateway. Configure a Direct Connect gateway.\nAssociate the Direct Connect gateway with the transit gateway. Associate a new transit VIF with each Direct Connect connection. Configure\nthe new transit VIF to exchange BGP routes and to have an MTU of 9001. Configure route propagation between each VPC and the transit\ngateway.",
            "D. Configure a transit gateway in the same Region of each VPC. Attach each VPC to the transit gateway. Configure a Direct Connect gateway.\nAssociate the Direct Connect gateway with the transit gateway. Associate a new transit VIF with each Direct Connect connection. Configure\nthe new transit VIF to exchange BGP routes and to have an MTU of 8500. Configure route propagation between each VPC and the transit\ngateway."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사에는 여러 VPC와 두 개의 온프레미스 데이터 센터에 호스팅되는 고가용성 애플리케이션이 있습니다. 모든 VPC는 동일한 AWS 리전에 있습니다. 모든 VPC는 서로 및 온프레미스 데이터 센터 간에 여러 기가바이트 크기의 파일 전송을 위해 액세스해야 합니다.\n네트워크 엔지니어는 온프레미스 데이터 센터를 각 VPC에 연결하는 AWS Direct Connect 솔루션을 설계하고 있습니다.\n이러한 요구 사항을 가장 적은 운영 오버헤드로 충족할 수 있는 아키텍처는 무엇입니까?",
        "options_ko": [
            "A. 각 VPC에 가상 프라이빗 게이트웨이와 프라이빗 VIF를 구성합니다. Direct Connect 게이트웨이를 구성합니다. 모든 VPC의 VIF를 Direct Connect 게이트웨이와 연결합니다. 새 프라이빗 VIF를 생성하여 Direct Connect 게이트웨이를 각 온프레미스 데이터 센터에 연결합니다. 새 프라이빗 VIF를 구성하여 온프레미스 데이터 센터와 BGP 경로를 교환하고 MTU를 9001로 설정합니다. VPC 피어링을 사용하여 각 VPC 간 라우팅을 구성합니다.",
            "B. 각 VPC에 가상 프라이빗 게이트웨이와 프라이빗 VIF를 구성합니다. Direct Connect 게이트웨이를 구성합니다. 모든 VPC의 VIF를 Direct Connect 게이트웨이와 연결합니다. 새 프라이빗 VIF를 생성하여 Direct Connect 게이트웨이를 각 온프레미스 데이터 센터에 연결합니다. 새 프라이빗 VIF를 구성하여 온프레미스 데이터 센터와 BGP 경로를 교환하고 MTU를 8500으로 설정합니다. VPC 피어링을 사용하여 각 VPC 간 라우팅을 구성합니다.",
            "C. 각 VPC와 동일한 리전에 트랜짓 게이트웨이를 구성합니다. 각 VPC를 트랜짓 게이트웨이에 연결합니다. Direct Connect 게이트웨이를 구성합니다. Direct Connect 게이트웨이를 트랜짓 게이트웨이와 연결합니다. 각 Direct Connect 연결에 새 트랜짓 VIF를 연결합니다. 새 트랜짓 VIF를 구성하여 BGP 경로를 교환하고 MTU를 9001로 설정합니다. 각 VPC와 트랜짓 게이트웨이 간 경로 전파를 구성합니다.",
            "D. 각 VPC와 동일한 리전에 트랜짓 게이트웨이를 구성합니다. 각 VPC를 트랜짓 게이트웨이에 연결합니다. Direct Connect 게이트웨이를 구성합니다. Direct Connect 게이트웨이를 트랜짓 게이트웨이와 연결합니다. 각 Direct Connect 연결에 새 트랜짓 VIF를 연결합니다. 새 트랜짓 VIF를 구성하여 BGP 경로를 교환하고 MTU를 8500으로 설정합니다. 각 VPC와 트랜짓 게이트웨이 간 경로 전파를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 202,
        "question": "A company has a data center in the us-west-1 Region with a 10 Gbps AWS Direct Connect dedicated connection to a Direct Connect gateway.\nThere are two private VIFs from the same data center location in us-west-1 that are attached to the same Direct Connect gateway.\nVIF 1 advertises 172.16.0.0/16 with an AS_PATH attribute value of 65000. VIF 2 advertises 172.16.1.0/24 with an AS PATH attribute value of\n65000 65000 65000.\nHow will AWS route traffic to the data center for traffic that has a destination address within the 172.16.1.0/24 network range?",
        "options": [
            "A. AWS will route all traffic by using VIF 1.",
            "B. AWS will route all traffic by using VIF 2.",
            "C. AWS will use both VIFs for routing by using a round-robin policy.",
            "D. AWS will use flow control to balance the traffic between the two VIFs."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사에는 us-west-1 리전에 10 Gbps AWS Direct Connect 전용 연결로 연결된 Direct Connect 게이트웨이가 있는 데이터 센터가 있습니다.\n동일한 us-west-1 데이터 센터 위치에서 같은 Direct Connect 게이트웨이에 연결된 두 개의 프라이빗 VIF가 있습니다.\nVIF 1은 AS_PATH 속성 값이 65000인 172.16.0.0/16을 광고하고, VIF 2는 AS_PATH 속성 값이 65000 65000 65000인 172.16.1.0/24를 광고합니다.\n172.16.1.0/24 네트워크 범위의 대상 주소가 있는 트래픽을 AWS가 어떻게 데이터 센터로 라우팅할까요?",
        "options_ko": [
            "A. AWS는 VIF 1을 사용하여 모든 트래픽을 라우팅합니다.",
            "B. AWS는 VIF 2를 사용하여 모든 트래픽을 라우팅합니다.",
            "C. AWS는 라운드 로빈 정책을 사용하여 두 VIF 간에 트래픽을 라우팅합니다.",
            "D. AWS는 흐름 제어를 사용하여 두 VIF 간에 트래픽을 균형 조정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 203,
        "question": "A company is planning to host external websites on AWS. The websites will include multiple tiers such as web servers, application logic services,\nand databases. The company wants to use AWS Network Firewall, AWS WAF, and VPC security groups for network security.\nThe company must ensure that the Network Firewall firewalls are deployed appropriately within relevant VPCs. The company needs the ability to\ncentrally manage policies that are deployed to Network Firewall and AWS WAF rules. The company also needs to allow application teams to\nmanage their own security groups while ensuring that the security groups do not allow overly permissive access.\nWhat is the MOST operationally efficient solution that meets these requirements?",
        "options": [
            "A. Define Network Firewall firewalls, AWS WAFV2 web ACLs. Network Firewall policies, and VPC security groups in code. Use AWS\nCloudFormation to deploy the objects and initial policies and rule groups. Use CloudFormation to update the AWS WAFv2 web ACLs. Network\nFirewall policies, and VPC security groups. Use Amazon GuardDuty to monitor for overly permissive rules.",
            "B. Define Network Firewall firewalls. AWS WAFV2 web ACLs, Network Firewall policies, and VPC security groups in code. Use the AWS\nManagement Console or the AWS CLI to manage the AWS WAFv2 web ACLs. Network Firewall policies, and VPC security groups. Use Amazon\nGuardDuly to invoke an AWS Lambda function to evaluate the configured rules and remove any overly permissive rules.",
            "C. Deploy AWS WAFv2 IP sets and AWS WAFv2 web ACLs with AWS CloudFormation. Use AWS Firewall Manager to deploy Network Firewall\nfirewalls and VPC security groups where required and to manage the AWS WAFv2 web ACLs, Network Firewall policies, and VPC security\ngroups.",
            "D. Define Network Firewall firewalls, AWS WAFv2 web ACLS, Network Firewall policies, and VPC security groups in code. Use AWS\nCloudFarmation to deploy the objects and initial policies and rule groups. Use AWS Firewall Manager to manage the AWS WAFV2 web ACLS,\nNetwork Firewall policies, and VPC security groups. Use Amazon GuardDuty to monitor for overly permissive rules."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 AWS에 외부 웹 사이트를 호스팅할 계획입니다. 웹 서버, 애플리케이션 로직 서비스, 데이터베이스 등 여러 계층이 포함될 것입니다. 회사는 네트워크 보안을 위해 AWS Network Firewall, AWS WAF, VPC 보안 그룹을 사용하려고 합니다.\n회사는 Network Firewall 방화벽이 관련 VPC 내에 적절하게 배포되도록 해야 합니다. 회사는 Network Firewall 및 AWS WAF 규칙에 배포된 정책을 중앙에서 관리할 수 있어야 합니다. 또한 애플리케이션 팀이 자신의 보안 그룹을 관리할 수 있도록 하되, 보안 그룹이 과도하게 허용적인 액세스를 허용하지 않도록 해야 합니다.\n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Network Firewall 방화벽, AWS WAFV2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS CloudFormation을 사용하여 초기 정책 및 규칙 그룹과 함께 객체를 배포합니다. CloudFormation을 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 업데이트합니다. Amazon GuardDuty를 사용하여 과도하게 허용적인 규칙을 모니터링합니다.",
            "B. Network Firewall 방화벽, AWS WAFV2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS Management Console 또는 AWS CLI를 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다. Amazon GuardDuty를 사용하여 AWS Lambda 함수를 호출하여 구성된 규칙을 평가하고 과도하게 허용적인 규칙을 제거합니다.",
            "C. AWS CloudFormation을 사용하여 AWS WAFv2 IP 세트와 AWS WAFv2 웹 ACL을 배포합니다. AWS Firewall Manager를 사용하여 필요한 곳에 Network Firewall 방화벽과 VPC 보안 그룹을 배포하고 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다.",
            "D. Network Firewall 방화벽, AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS CloudFormation을 사용하여 초기 정책 및 규칙 그룹과 함께 객체를 배포합니다. AWS Firewall Manager를 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다. Amazon GuardDuty를 사용하여 과도하게 허용적인 규칙을 모니터링합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 204,
        "question": "A company has deployed an application in which the front end of the application communicates with the backend instances through a Network\nLoad Balancer (NLB) in the same VPC. The application is highly available across two Availability Zones. The company wants to limit the amount of\ntraffic that travels across the Availability Zones. Traffic from the front end of the application must stay in the same Availability Zone unless there is\nno healthy target in that Availability Zone behind the NLB. If there is no healthy target in the same Availability Zone, traffic must be sent to the\nother Availability Zone.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a private hosted zone with weighted routing for each Availability Zone. Point the primary record to the local Availability Zone NLB\nDNS record. Point the secondary record to the Regional NLB DNS record. Configure the front end of the application to perform DNS lookups on\nthe local private hosted zone records.",
            "B. Turn off cross-zone load balancing on the NLConfigure the front end of the application to perform DNS lookups on the local Availability\nZone NLB DNS record.",
            "C. Create a private hosted zone. Create a failover record for each Availability Zone. For each failover record, point the primary record to the\nlocal Availability Zone NLB DNS record and point the secondary record to the Regional NLB DNS record. Configure the front end of the\napplication to perform DNS lookups on the local private hosted zone records.",
            "D. Enable sticky sessions (session affinity) so that the NLB can bind a user’s session to targets in the same Availability Zone."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (59%) B (41%)",
        "question_ko": "회사에서는 프런트엔드 애플리케이션이 같은 VPC의 Network Load Balancer(NLB)를 통해 백엔드 인스턴스와 통신하는 애플리케이션을 배포했습니다. 애플리케이션은 두 가용 영역에 걸쳐 고가용성으로 배포되어 있습니다. 회사는 가용 영역 간 트래픽 양을 제한하려고 합니다. 애플리케이션 프런트엔드의 트래픽은 NLB 뒤에 동일한 가용 영역의 대상이 없는 경우가 아니면 동일한 가용 영역에 머물러야 합니다. 동일한 가용 영역의 대상이 없는 경우 트래픽은 다른 가용 영역으로 전송되어야 합니다.\n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 가용 영역에 대해 가중치 라우팅이 있는 프라이빗 호스팅 영역을 생성합니다. 기본 레코드를 로컬 가용 영역 NLB DNS 레코드를 가리키도록 하고, 보조 레코드를 리전 NLB DNS 레코드를 가리키도록 합니다. 애플리케이션 프런트엔드에서 로컬 프라이빗 호스팅 영역 레코드에 대한 DNS 조회를 수행하도록 구성합니다.",
            "B. NLB에서 크로스 영역 로드 밸런싱을 끕니다. 애플리케이션 프런트엔드에서 로컬 가용 영역 NLB DNS 레코드에 대한 DNS 조회를 수행하도록 구성합니다.",
            "C. 프라이빗 호스팅 영역을 생성합니다. 각 가용 영역에 대해 장애 조치 레코드를 생성합니다. 각 장애 조치 레코드에서 기본 레코드를 로컬 가용 영역 NLB DNS 레코드를 가리키도록 하고, 보조 레코드를 리전 NLB DNS 레코드를 가리키도록 합니다. 애플리케이션 프런트엔드에서 로컬 프라이빗 호스팅 영역 레코드에 대한 DNS 조회를 수행하도록 구성합니다.",
            "D. 세션 선호도(세션 선호도)를 활성화하여 NLB가 동일한 가용 영역의 대상에 사용자 세션을 바인딩할 수 있도록 합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (59%) B (41%)"
    },
    {
        "num": 205,
        "question": "A company needs to protect against potential botnet command and control traffic from any Amazon EC2 instances that is in in the company’s\nAWS Environment.\nWhich solution will meet these requirements?",
        "options": [
            "A. Use AWS Shield Advanced. Activate Shield Advanced protections on the EC2 instances to filter and block botnet traffic.",
            "B. Use Amazon Route 53 Resolver DNS Firewall. Add a rule to a rule group to use the AWSManagedDomainsBotnetCommandandControl\nmanaged domain list with an action to block botnet traffic.",
            "C. Use AWS WAF Bot Control. Configure a managed rule group that uses an AWS managed rule set to block botnet traffic.",
            "D. Use AWS Systems Manager. Run a Systems Manager Automation runbook on the EC2 instances to configure the instances to block botnet\ntraffic."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 AWS 환경의 Amazon EC2 인스턴스에서 발생할 수 있는 잠재적인 봇넷 명령 및 제어 트래픽을 방지해야 합니다.\n이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. AWS Shield Advanced를 사용합니다. EC2 인스턴스에 Shield Advanced 보호를 활성화하여 봇넷 트래픽을 필터링하고 차단합니다.",
            "B. Amazon Route 53 Resolver DNS Firewall을 사용합니다. 규칙 그룹에 규칙을 추가하여 AWSManagedDomainsBotnetCommandandControl 관리형 도메인 목록을 사용하고 봇넷 트래픽을 차단하는 작업을 수행합니다.",
            "C. AWS WAF Bot Control을 사용합니다. AWS 관리형 규칙 세트를 사용하는 관리형 규칙 그룹을 구성하여 봇넷 트래픽을 차단합니다.",
            "D. AWS Systems Manager를 사용합니다. Systems Manager Automation runbook을 EC2 인스턴스에서 실행하여 인스턴스에서 봇넷 트래픽을 차단하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 206,
        "question": "A company has two on-premises data centers. The first data center is in the us-east-1 Region. The Second data canter is in the us-east-2 Region.\nEach data center connects to the closest AWS Direct Connect facility. The company uses Direct Connect connections, transit VIFs, and a single\nDirect Connect gateway to establish connectivity to VPCs in us-east-1 and us-east-2 from the company’s data centers. The company also has\nprivate connectivity from a telecommunications provider that connects the first data center to the second data center.\nRecently, there have been multiple connection disruptions to the private connectivity between the data centers. The company needs a solution to\nimprove the reliability of the connection between the two data centers.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a new Direct Connect gateway. Enable the Direct Connect SiteLink feature on the transit VIF. Share the CIDR blocks from the first\ndata center and the second data center with each other.",
            "B. Create a new public VIF to both Regions. Enable the Direct Connect SiteLink feature on the new public VIF.",
            "C. Enable the Direct Connect SiteLink feature on the existing Direct Connect connections.",
            "D. Enable the Direct Connect SiteLink feature on the existing transit VIFS that are attached to the existing Direct Connect gateway."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "두 개의 온프레미스 데이터 센터가 있는 회사가 있습니다. 첫 번째 데이터 센터는 us-east-1 리전에 있습니다. 두 번째 데이터 센터는 us-east-2 리전에 있습니다.\n각 데이터 센터는 가장 가까운 AWS Direct Connect 시설에 연결됩니다. 회사는 Direct Connect 연결, 트랜짓 VIF, 단일 Direct Connect 게이트웨이를 사용하여 us-east-1 및 us-east-2의 VPC에 대한 연결을 설정합니다. 회사는 또한 통신 공급자가 제공하는 데이터 센터 간 사설 연결을 사용합니다.\n최근 데이터 센터 간 사설 연결에서 여러 연결 중단 문제가 발생했습니다. 회사는 두 데이터 센터 간 연결의 안정성을 높이기 위한 솔루션이 필요합니다.",
        "options_ko": [
            "A. 새 Direct Connect 게이트웨이를 생성합니다. 기존 트랜짓 VIF에서 Direct Connect SiteLink 기능을 활성화합니다. 첫 번째 데이터 센터와 두 번째 데이터 센터의 CIDR 블록을 서로 공유합니다.",
            "B. 두 리전 모두에 새 공용 VIF를 생성합니다. 새 공용 VIF에서 Direct Connect SiteLink 기능을 활성화합니다.",
            "C. 기존 Direct Connect 연결에서 Direct Connect SiteLink 기능을 활성화합니다.",
            "D. 기존 Direct Connect 게이트웨이에 연결된 기존 트랜짓 VIF에서 Direct Connect SiteLink 기능을 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 207,
        "question": "A network engineer is working on a large migration effort from an on-premises data center to an AWS Control Tower based multi-account\nenvironment. The environment has a transit gateway that is deployed to a central network services account. The central network services account\nhas been shared with an organization in AWS Organizations through AWS Resource Access Manager (AWS RAM).\nA shared services account also exists in the environment. The shared services account hosts workloads that need to be shared with the entire\norganization.\nThe network engineer needs to create a solution to automate the deployment of common network components across the environment. The\nsolution must provision a VPC for application workloads to each new and existing member account. The VPCs must be connected to the transit\ngateway in the central network services account.\nWhich combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)",
        "options": [
            "A. Deploy an AWS Lambda function to the shared services account. Program the Lambda function to assume a role in the new and existing\nmember accounts to provision the necessary network infrastructure.",
            "B. Update the existing accounts with an Account Factory Customization (AFC). Select the same AFC when provisioning new accounts.",
            "C. Create an AWS CloudFormation template that describes the infrastructure that needs to be created in each account. Upload the template\nas an AWS Service Catalog product to the shared services account.",
            "D. Deploy an Amazon EventBridge rule on a default event bus in the shared services account. Configure the EventBridge rule to react to AWS\nControl Tower CreateManagedAccount lifecycle events and to invoke the AWS Lambda function.",
            "E. Create an AWSControlTowerBiueprintAccess role in the shared services account.\nF Create an AWSControlTowerBiueprintAccess role in each member account."
        ],
        "answers": [
            "A",
            "C",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACD (50%) BCE (43%) 7%",
        "question_ko": "네트워크 엔지니어가 온프레미스 데이터 센터에서 AWS Control Tower 기반 다중 계정 환경으로 대규모 마이그레이션을 수행하고 있습니다. 이 환경에는 중앙 네트워크 서비스 계정에 배포된 트랜짓 게이트웨이가 있습니다. 중앙 네트워크 서비스 계정은 AWS Organizations를 통해 조직과 공유되었습니다.\n공유 서비스 계정도 이 환경에 존재합니다. 공유 서비스 계정에는 전체 조직과 공유해야 하는 워크로드가 호스팅됩니다.\n네트워크 엔지니어는 환경 전반에 걸쳐 일반 네트워크 구성 요소를 자동으로 배포할 수 있는 솔루션을 만들어야 합니다. 솔루션은 새로운 멤버 계정과 기존 멤버 계정 모두에 애플리케이션 워크로드용 VPC를 프로비저닝해야 합니다. VPC는 중앙 네트워크 서비스 계정의 트랜짓 게이트웨이에 연결되어야 합니다.\n이러한 요구 사항을 가장 적은 운영 오버헤드로 충족하는 단계는 무엇입니까? (세 가지 선택)",
        "options_ko": [
            "A. 공유 서비스 계정에 AWS Lambda 함수를 배포합니다. Lambda 함수가 새로운 멤버 계정과 기존 멤버 계정의 역할을 가정하여 필요한 네트워크 인프라를 프로비저닝하도록 프로그래밍합니다.",
            "B. 계정 팩토리 사용자 정의(AFC)를 사용하여 기존 계정을 업데이트합니다. 새 계정 프로비저닝 시 동일한 AFC를 선택합니다.",
            "C. 각 계정에 생성되어야 하는 인프라를 설명하는 AWS CloudFormation 템플릿을 생성합니다. 템플릿을 공유 서비스 계정의 AWS Service Catalog 제품으로 업로드합니다.",
            "D. 공유 서비스 계정의 기본 이벤트 버스에 Amazon EventBridge 규칙을 배포합니다. EventBridge 규칙을 구성하여 AWS Control Tower CreateManagedAccount 수명 주기 이벤트에 반응하고 AWS Lambda 함수를 호출합니다.",
            "E. 공유 서비스 계정에 AWSControlTowerBiueprintAccess 역할을 생성합니다.",
            "F. 각 멤버 계정에 AWSControlTowerBiueprintAccess 역할을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: ACD (50%) BCE (43%) 7%"
    },
    {
        "num": 208,
        "question": "An online retail company is running a web application in the us-wast-2 Region and serves consumers in the United States. The company plans to\nexpand across several countries in Europe and wants to provide low latency for all its users.\nThe application needs to identify the users’ IP addresses and provide localized content based on the users’ geographic location. The application\nuses HTTP GET and POST methods for its functionality. The company also needs to develop a failover mechanism that works for GET and POST\nmethods and is based on health checks. The failover must occur in less than 1 minute for all clients.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure a Network Load Balancer (NLB) for the application in each environment in the new AWS Regions. Create an AWS Global\nAccelerator accelerator that has endpoint groups that point to the NLBs in each Region.",
            "B. Configure an Application Load Balancer (ALB) for the application in each environment in the new AWS Regions. Create an AWS Global\nAccelerator accelerator that has endpoint groups that point to the ALBs in each Region.",
            "C. Configure an Application Load Balancer (ALB) for the application in each environment in the new AWS Regions. Create Amazon Route 53\npublic hosted zones that have failover routing policies.",
            "D. Configure a Network Load Balancer (NLB) for the application in each environment in the new AWS Regions. Create an Amazon CloudFront\ndistribution. Configure an origin group with origin failover options."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (67%) C (20%) 13%",
        "question_ko": "온라인 소매 회사가 us-west-2 리전에서 웹 애플리케이션을 실행하고 있으며 미국 소비자에게 서비스를 제공하고 있습니다. 회사는 유럽 여러 국가로 확장할 계획이며 모든 사용자에게 지연 시간이 낮은 서비스를 제공하려고 합니다.\n애플리케이션은 사용자의 IP 주소를 식별하고 사용자의 지리적 위치에 따라 현지화된 콘텐츠를 제공해야 합니다. 애플리케이션은 기능을 위해 HTTP GET 및 POST 메서드를 사용합니다. 회사는 GET 및 POST 메서드에 대해 작동하는 상태 검사 기반 장애 조치 메커니즘도 개발해야 합니다. 모든 클라이언트에 대해 장애 조치가 1분 미만에 발생해야 합니다.",
        "options_ko": [
            "A. 새 AWS 리전의 각 환경에 Network Load Balancer(NLB)를 구성합니다. AWS Global Accelerator 가속기를 생성하고 각 리전의 NLB를 가리키는 엔드포인트 그룹을 만듭니다.",
            "B. 새 AWS 리전의 각 환경에 Application Load Balancer(ALB)를 구성합니다. AWS Global Accelerator 가속기를 생성하고 각 리전의 ALB를 가리키는 엔드포인트 그룹을 만듭니다.",
            "C. 새 AWS 리전의 각 환경에 Application Load Balancer(ALB)를 구성합니다. 장애 조치 라우팅 정책이 있는 Amazon Route 53 퍼블릭 호스팅 영역을 생성합니다.",
            "D. 새 AWS 리전의 각 환경에 Network Load Balancer(NLB)를 구성합니다. Amazon CloudFront 배포를 생성합니다. 원본 그룹에 장애 조치 옵션을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (67%) C (20%) 13%"
    },
    {
        "num": 209,
        "question": "A company has VPCs across 50 AWS accounts and is using AWS Organizations. The company wants to implement web filtering. The requirements\nfor how the traffic must be filtered are the same for all the VPCs. A network engineer plans to use AWS Network Firewall. The network engineer\nneeds to implement a solution that minimizes the number of firewall policies and rule groups that are necessary for this web filtering.\nWhich combination of steps will meet these requirements? (Choose three.)",
        "options": [
            "A. Create a firewall policy or rule group in each account.",
            "B. Use SCPs to share the firewall policy or rule group.",
            "C. Create a firewall policy or rule group in the management account",
            "D. Use AWS Resource Access Manager (AWS RAM) to share the firewall policy or rule group.",
            "E. Enable sharing within Organizations.",
            "F. Create OUs to share the firewall policy or rule group."
        ],
        "answers": [
            "C",
            "D",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: CDE (86%) 14%",
        "question_ko": "회사는 AWS Organizations를 통해 50개의 AWS 계정에 걸친 VPC를 보유하고 있습니다. 회사는 웹 필터링을 구현하려고 합니다. 모든 VPC에 대한 트래픽 필터링 요구 사항은 동일합니다. 네트워크 엔지니어는 AWS Network Firewall을 사용할 계획입니다. 엔지니어는 이 웹 필터링에 필요한 방화벽 정책 및 규칙 그룹 수를 최소화하는 솔루션을 구현해야 합니다.",
        "options_ko": [
            "A. 각 계정에 방화벽 정책 또는 규칙 그룹을 생성합니다.",
            "B. SCPs를 사용하여 방화벽 정책 또는 규칙 그룹을 공유합니다.",
            "C. 관리 계정에 방화벽 정책 또는 규칙 그룹을 생성합니다.",
            "D. AWS Resource Access Manager(AWS RAM)을 사용하여 방화벽 정책 또는 규칙 그룹을 공유합니다.",
            "E. Organizations 내에서 공유를 활성화합니다.",
            "F. OU를 생성하여 방화벽 정책 또는 규칙 그룹을 공유합니다."
        ],
        "explanation_ko": "커뮤니티 투표: CDE (86%) 14%"
    },
    {
        "num": 210,
        "question": "A company has an internal web-based application that employees use. The company hosts the application over a VPN in the company’s on-\npremises network. The application runs on a fleet of Amazon EC2 instances in a private subnet behind a Network Load Balancer (NLB) in the\nsame subnet. The instances are in an Amazon EC2 Auto Scaling group.\nDuring a recent security incident, SQL injection occurred on the application. A network engineer must implement a solution to prevent SQL\ninjection attacks in the future.\nWhich combination of steps will meet these requirements? (Choose three.)",
        "options": [
            "A. Create an AWS WAF web ACL that includes rules to block SQL injection attacks.",
            "B. Create an Amazon CloudFront distribution. Specify the EC2 instances as the origin.",
            "C. Replace the NLB with an Application Load Balancer.",
            "D. Associate the AWS WAF web ACL with the NLB.",
            "E. Associate the AWS WAF web ACL with the Application Load Balancer.",
            "F. Associate the AWS WAF web ACL with the Amazon CloudFront distribution."
        ],
        "answers": [
            "A",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACE (100%)",
        "question_ko": "회사에는 직원들이 사용하는 내부 웹 기반 애플리케이션이 있습니다. 회사는 해당 애플리케이션을 회사의 온프레미스 네트워크에 있는 VPN 상에서 호스팅합니다. 애플리케이션은 동일한 서브넷의 Network Load Balancer(NLB) 뒤에 있는 Amazon EC2 인스턴스 플릿에서 실행됩니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다.\n최근 보안 사고 동안 SQL 인젝션이 애플리케이션에서 발생했습니다. 네트워크 엔지니어는 향후 SQL 인젝션 공격을 방지하기 위한 솔루션을 구현해야 합니다.",
        "options_ko": [
            "A. SQL 인젝션 공격을 차단하는 규칙이 포함된 AWS WAF 웹 ACL을 생성합니다.",
            "B. Amazon CloudFront 배포를 생성합니다. EC2 인스턴스를 원본으로 지정합니다.",
            "C. NLB를 Application Load Balancer로 교체합니다.",
            "D. NLB에 AWS WAF 웹 ACL을 연결합니다.",
            "E. Application Load Balancer에 AWS WAF 웹 ACL을 연결합니다.",
            "F. Amazon CloudFront 배포에 AWS WAF 웹 ACL을 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: ACE (100%)"
    },
    {
        "num": 211,
        "question": "A company is running business applications on AWS. The company uses 50 AWS accounts, thousands of VPCs, and 3 AWS Regions across the\nUnited States and Europe.\nA network engineer needs to establish network connectivity between an on-premises data center and the Regions. The network engineer also\nmust establish connectivity between the VPCs. On-premises: users and applications must be able to connect to applications that run in the VPCs.\nThe company has an existing AWS Direct Connect connection that the network engineer can use. The network engineer creates a transit gateway\nin each Region and configures the transit gateways as inter-Region peers.\nWhich solution will provide network connectivity from the on-premises data center to the Regions and will provide inter-VPC communications\nacross the different Regions?",
        "options": [
            "A. Create a private VIF with a gateway type of virtual private gateway. Configure the private VIF to use a virtual private gateway that is\nassociated with one of the VPCs.",
            "B. Create a private VIF to a new Direct Connect gateway. Associate the new Direct Connect gateway with a virtual private gateway in each\nVPC.",
            "C. Create transit VIF with a gateway association to a new Direct Connect gateway. Associate each transit gateway with the new Direct\nConnect gateway.",
            "D. Create an AWS Site-to-Site VPN connection that uses a public VIF for the Direct Connect connection. Attach the Site-to-Site VPN connection\nto the transit gateways."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "50개의 AWS 계정, 수천 개의 VPC, 미국과 유럽에 걸친 3개의 AWS 리전에서 비즈니스 어플리케이션을 실행하고 있는 회사가 있습니다. 네트워크 엔지니어는 온프레미스 데이터 센터와 리전 간의 네트워크 연결을 설정해야 하며, VPC 간 연결도 설정해야 합니다. 온프레미스 사용자와 어플리케이션은 VPC에서 실행되는 어플리케이션에 연결할 수 있어야 합니다. 회사는 기존 AWS Direct Connect 연결을 사용할 수 있습니다. 네트워크 엔지니어는 각 리전에 Transit Gateway를 생성하고 Transit Gateway를 지역 간 피어로 구성합니다. 어떤 솔루션이 온프레미스 데이터 센터와 리전 간 네트워크 연결을 제공하고 다른 리전의 VPC 간 통신을 제공할 수 있습니까?",
        "options_ko": [
            "A. 개인 가상 인터페이스(VIF)를 생성하고 게이트웨이 유형을 가상 프라이빗 게이트웨이로 구성합니다. 개인 가상 인터페이스를 VPC와 연결된 가상 프라이빗 게이트웨이에 구성합니다.",
            "B. 새로운 Direct Connect 게이트웨이로 개인 가상 인터페이스를 생성합니다. 새로운 Direct Connect 게이트웨이를 각 VPC의 가상 프라이빗 게이트웨이와 연결합니다.",
            "C. 트랜짓 가상 인터페이스를 생성하고 새로운 Direct Connect 게이트웨이와 연결합니다. 각 트랜짓 게이트웨이를 새로운 Direct Connect 게이트웨이와 연결합니다.",
            "D. AWS Site-to-Site VPN 연결을 생성하고 Direct Connect 연결의 공개 가상 인터페이스를 사용합니다. Site-to-Site VPN 연결을 트랜짓 게이트웨이에 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 212,
        "question": "A company has two data centers that are interconnected with multiple redundant links from different suppliers. The company Uses IP addresses\nthat are within the 172.16,0.0/16 CIDR block. The company is running iBGP between the two data centers by using a private Autonomous System\nNumber (ASN) and IGP.\nThe company is moving toward a hybrid setup in which the company will initially use one VPC in the AWS Cloud. An AWS Direct Connect\nconnection runs from the first data center to a Direct Connect gateway by using a private VIF. On the connection, the company advertises a\nsummarized route for the 172.16.0.0/16 network. The company is planning to set up a second summarized route from the second data center to a\ndifferent Direct Connect location.\nThe company needs to implement a solution to route traffic to and from AWS through the first Direct Connect connection. The solution must use\nthe second Direct Connect connection for failover purposes only.\nWhich solution will meet these requirements?",
        "options": [
            "A. Prepend the private ASN on the BGP announcements to AWS from the second data center. Add a second VIF in the first Direct Connect\nconnection. Advertise the same network without any prepends from the first data center. Implement the same setup for the BGP\nannouncement from AWS to the two data centers.",
            "B. Tag the BGP announcements with the local preference BGP community tags. Set the tag to high preference for the first data center. Set the\ntag to low preference for the second data center.\nConfigure the second data center’s router to have a lower local preference for the direct AWS BGP advertisements than for the advertisement\nfrom the fist data center.",
            "C. Configure the Direct Connect gateway to prefer routing through the Direct Connect connection with the first data center. Configure the\nsecond data center’s router to have a lower local preference for the direct AWS BGP advertisements than for the advertisement from the first\ndata center.",
            "D. Configure the focal AWS Region BGP community tag on the BGP route that is advertised from the fist data center. Configure AS_PATH\nprepends on the BGP announcements from the second data center."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (54%) D (29%) A (17%)",
        "question_ko": "회사에는 다중 중복 링크로 상호 연결된 두 개의 데이터 센터가 있습니다. 회사는 172.16.0.0/16 CIDR 블록 내의 IP 주소를 사용하며, 프라이빗 AS 번호와 IGP를 사용하여 iBGP를 실행하고 있습니다. 회사는 AWS 클라우드에서 한 개의 VPC를 사용하는 하이브리드 설정으로 전환하고 있습니다. 첫 번째 데이터 센터에서 Direct Connect 게이트웨이로 프라이빗 VIF를 사용하여 AWS Direct Connect 연결이 실행되고 있으며, 172.16.0.0/16 네트워크에 대한 요약 경로가 광고되고 있습니다. 회사는 두 번째 데이터 센터에서 다른 Direct Connect 위치로 두 번째 요약 경로를 설정할 계획입니다. 회사는 AWS를 통한 트래픽 라우팅을 위한 솔루션을 구현해야 하며, 두 번째 Direct Connect 연결은 장애 조치 목적으로만 사용해야 합니다. 이 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 두 번째 데이터 센터의 BGP 광고에 프라이빗 ASN을 프리펜딩합니다. 첫 번째 Direct Connect 연결에 두 번째 VIF를 추가합니다. 프리펜딩 없이 첫 번째 데이터 센터에서 동일한 네트워크를 광고합니다. AWS에서 두 데이터 센터로의 BGP 광고 설정도 동일하게 구현합니다.",
            "B. BGP 광고에 로컬 기본 설정 BGP 커뮤니티 태그를 사용합니다. 첫 번째 데이터 센터에는 높은 기본 설정 태그를, 두 번째 데이터 센터에는 낮은 기본 설정 태그를 설정합니다. 두 번째 데이터 센터 라우터에서 첫 번째 데이터 센터의 광고보다 AWS로의 직접 BGP 광고에 대한 로컬 기본 설정을 낮게 구성합니다.",
            "C. Direct Connect 게이트웨이가 첫 번째 데이터 센터의 Direct Connect 연결을 통해 라우팅하도록 구성합니다. 두 번째 데이터 센터 라우터에서 AWS로의 직접 BGP 광고에 대한 로컬 기본 설정을 첫 번째 데이터 센터의 광고보다 낮게 구성합니다.",
            "D. 첫 번째 데이터 센터에서 광고되는 BGP 경로에 AWS 리전 BGP 커뮤니티 태그를 구성합니다. 두 번째 데이터 센터의 BGP 광고에 AS_PATH 프리펜딩을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (54%) D (29%) A (17%)"
    },
    {
        "num": 213,
        "question": "A company is replatforming a legacy data processing solution to AWS. The company deploys the solution on Amazon EC2 Instances in private\nsubnets that are in one VPC.\nThe solution uses Amazon S3 for abject storage. Both the data that the solution processes and the data the solution produces are stored in\nAmazon S3. The solution uses Amazon DynamoDB to save its own state. The company collects flow logs for the VPC. The solution uses one NAT\ngateway to register its license through the internet. A software vendor provides a specific hostname so the solution can register its license.\nThe company notices that the AWS bill exceeds the projected budget for the solution. A network engineer uses AWS Cost Explorer to investigate\nthe bill. The network engineer notices that the USE2-NatGateway-Bytes($) usage type is the root cause of the higher than expected bill.\nWhat should the network engineer do to resolve the issue? (Choose two.)",
        "options": [
            "A. Set up Amazon VPC Traffic Mirroring. Analyze the traffic to identify the traffic that the NAT gateway processes.",
            "B. Examine the VPC flow logs to identity the traffic that traverses the NAT gateway.",
            "C. Set up an AWS Cost and Usage Report in the AWS Billing and Cost Management console. Examine the report to find more details about the\nNAT gateway charges.",
            "D. Verify that the security groups attached to the EC2 instances allow outgoing traffic only to the IP addresses that the hostname resolves to,\nthe VPC CIDR block, and the AWS IP address ranges for Amazon S3 and DynamoDB.",
            "E. Verify that the gateway VPC endpoints for Amazon S3 and DynamoDB are both set up and associated with the route tables of the private\nsubnets."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BE (92%) 8%",
        "question_ko": "회사가 레거시 데이터 처리 솔루션을 AWS로 마이그레이션하고 있습니다. 솔루션은 한 개의 VPC 내 프라이빗 서브넷에 배포된 Amazon EC2 인스턴스에서 실행됩니다. 솔루션은 Amazon S3를 객체 저장소로 사용하며, 처리 데이터와 생성 데이터 모두 Amazon S3에 저장됩니다. 솔루션은 자체 상태를 저장하기 위해 Amazon DynamoDB를 사용합니다. 회사는 VPC에 대한 흐름 로그를 수집하고 있습니다. 솔루션은 인터넷을 통해 라이선스를 등록하기 위해 하나의 NAT 게이트웨이를 사용합니다. 소프트웨어 벤더는 솔루션이 라이선스를 등록할 수 있도록 특정 호스트 이름을 제공합니다. 회사는 AWS 요금이 예상 예산을 초과한다는 것을 알게 되었습니다. 네트워크 엔지니어가 AWS Cost Explorer를 사용하여 조사한 결과, USE2-NatGateway-Bytes($) 사용 유형이 높은 요금의 주요 원인임을 확인했습니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 취해야 할 조치는 무엇입니까? (두 가지 선택)",
        "options_ko": [
            "A. Amazon VPC Traffic Mirroring을 설정합니다. 트래픽 분석을 통해 NAT 게이트웨이가 처리하는 트래픽을 식별합니다.",
            "B. VPC 흐름 로그를 검토하여 NAT 게이트웨이를 통과하는 트래픽을 식별합니다.",
            "C. AWS Billing and Cost Management 콘솔에서 AWS Cost and Usage Report를 설정합니다. 보고서를 검토하여 NAT 게이트웨이 요금에 대한 더 자세한 정보를 찾습니다.",
            "D. EC2 인스턴스에 연결된 보안 그룹이 호스트 이름이 확인되는 IP 주소, VPC CIDR 블록, Amazon S3 및 DynamoDB용 AWS IP 주소 범위로의 송신 트래픽만 허용하는지 확인합니다.",
            "E. Amazon S3와 DynamoDB용 게이트웨이 VPC 엔드포인트가 설정되어 있고 프라이빗 서브넷의 라우팅 테이블에 연결되어 있는지 확인합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BE (92%) 8%"
    },
    {
        "num": 214,
        "question": "A company ran out of IP address space in one of the Availability Zones in an AWS Region that the company uses. The Availability Zone that is out\nof space is assigned the 10.10.1.0/24 CIDR block. The company manages its networking configurations in an AWS CloudFormation stack. The\ncompany’ VPC is assigned the 10 10.0.0/16 CIDR block and has available capacity in the 10.10.1.0/22 CIDR block.\nHow should a network specialist add more IP address space in the existing VPC with the LEAST operational overhead?",
        "options": [
            "A. Update the AWS::EC2::Subnet resource for the Availability Zone in the CloudFormation stack. Change the CidrBlock property to\n10.10.1.0/22.",
            "B. Update the AWS::EC2::VPC resource in the CloudFormation stack. Change the CidrBlock property to 10.10.1.0/22.",
            "C. Copy the CloudFormation stack. Set the AWS::EC2::VPC resource CidrBlock property to 10.10.0.0/16. Set the AWS::EC2::Subnet resource\nCidrBlock property to 10.10.1.0/22 for the Availability Zone.",
            "D. Create a new AWS::EC2::Subnet resource for the Availability Zone in the CloudFormation stack. Set the CidrBlock property to 10.10.2.0/24."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (92%) 8%",
        "question_ko": "한 회사는 사용 중인 AWS 리전의 한 가용 영역에서 IP 주소 공간이 소진되었습니다. 여분의 용량이 있는 VPC의 CIDR 블록은 10.10.0.0/16입니다. 네트워크 전문가가 기존 VPC에 더 많은 IP 주소 공간을 추가하는 방법 중 운영 오버헤드가 가장 적은 방법은 무엇입니까?",
        "options_ko": [
            "A. CloudFormation 스택의 AWS::EC2::Subnet 리소스를 업데이트하고 CidrBlock 속성을 10.10.1.0/22로 변경합니다.",
            "B. CloudFormation 스택의 AWS::EC2::VPC 리소스를 업데이트하고 CidrBlock 속성을 10.10.1.0/22로 변경합니다.",
            "C. CloudFormation 스택을 복사합니다. AWS::EC2::VPC 리소스의 CidrBlock 속성을 10.10.0.0/16으로 설정하고, AWS::EC2::Subnet 리소스의 CidrBlock 속성을 10.10.1.0/22로 설정합니다.",
            "D. CloudFormation 스택에 새로운 AWS::EC2::Subnet 리소스를 생성하고 CidrBlock 속성을 10.10.2.0/24로 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (92%) 8%"
    },
    {
        "num": 215,
        "question": "A company’s network engineer must implement a cloud-based networking environment for a network operations team to centrally manage. Other\nTeams will use the environment. Each team must be able to deploy infrastructure to the environment and must be able to manage its own\nresources. The environment must feature IPv4 and IPv6 support and must provide internet connectivity in a dual-stack configuration.\nThe company has an organization in AWS Organizations that contains a workload account for the teams. The network engineer creates a new\nnetworking account in the organization.\nWhich combination of steps should the network engineer take next to meet the requirements? (Choose three.)",
        "options": [
            "A. Create a new VPC. Associate an IPv4 CIDR block of 10.0.0.0/16 and specify an IPv6 block of 2001:db8:c5a:6000::/56. Provision subnets by\nassigning /24 IPv4 CIDR blocks and /64 IPv6 CIDR blocks.",
            "B. Create a new VPC. Associate an IPv4 CIDR block of 10.0.0.0/16 and use an Amazon-provided IPV6 CIDR block. Provision subnets by\nassigning /24 IPv4 CIDR blocks and /64 IPV6 CIDR blocks.",
            "C. Enable sharing of resources within the organization by using AWS Resource Access Manager (AWS RAM). Create a resource share in the\nnetworking account, select the provisioned subnets, and share the provisioned subnets with the target workload account. Use the workload\naccount to accept the resource share through AWS RAM.",
            "D. Enable sharing of resources within the organization by using AWS Resource Access Manager (AWS RAM). Create a resource share in the\nnetworking account, select the new VPC, and share the new VPC with the target workload account. Use the workload account to accept the\nresource share through AWS RAM.",
            "E. Create an internet gateway and an egress-only internal gateway. Deploy NAT gateways to the public subnets. Associate the internet\ngateway with the new VPC. Update the route tables. Associate the route tables with the relevant subnets.",
            "F. Create an internet gateway. Deploy NAT instances to public subnets. Update the route tables. Associate the route tables with the relevant\nsubnets."
        ],
        "answers": [
            "B",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCE (83%) ACE (17%)",
        "question_ko": "회사의 네트워크 엔지니어는 네트워크 운영 팀이 중앙에서 관리할 수 있는 클라우드 기반 네트워킹 환경을 구현해야 합니다. 다른 팀들도 이 환경을 사용할 것입니다. 각 팀은 자신의 인프라를 배포할 수 있어야 하며 자신의 리소스를 관리할 수 있어야 합니다. 이 환경은 IPv4와 IPv6 지원을 제공하고 이중 스택 구성으로 인터넷 연결을 제공해야 합니다. 회사는 워크로드 계정이 포함된 AWS Organizations 조직을 가지고 있으며, 네트워크 엔지니어는 조직에 새 네트워킹 계정을 생성했습니다. 이 요구사항을 충족하기 위해 네트워크 엔지니어가 수행해야 할 다음 단계는 무엇입니까? (세 가지 선택)",
        "options_ko": [
            "A. 새 VPC를 생성합니다. IPv4 CIDR 블록 10.0.0.0/16을 연결하고 IPv6 블록 2001:db8:c5a:6000::/56을 지정합니다. /24 IPv4 CIDR 블록과 /64 IPv6 CIDR 블록을 사용하여 서브넷을 프로비저닝합니다.",
            "B. 새 VPC를 생성합니다. IPv4 CIDR 블록 10.0.0.0/16을 연결하고 Amazon이 제공하는 IPV6 CIDR 블록을 사용합니다. /24 IPv4 CIDR 블록과 /64 IPV6 CIDR 블록을 사용하여 서브넷을 프로비저닝합니다.",
            "C. AWS RAM(AWS Resource Access Manager)을 사용하여 조직 내 리소스 공유를 활성화합니다. 네트워킹 계정에서 리소스 공유를 생성하고, 프로비저닝된 서브넷을 선택한 다음 대상 워크로드 계정과 공유합니다. 워크로드 계정에서 AWS RAM을 통해 리소스 공유를 수락합니다.",
            "D. AWS RAM(AWS Resource Access Manager)을 사용하여 조직 내 리소스 공유를 활성화합니다. 네트워킹 계정에서 리소스 공유를 생성하고, 새 VPC를 선택한 다음 대상 워크로드 계정과 공유합니다. 워크로드 계정에서 AWS RAM을 통해 리소스 공유를 수락합니다.",
            "E. 인터넷 게이트웨이와 이그레스 전용 인터넷 게이트웨이를 생성합니다. 퍼블릭 서브넷에 NAT 게이트웨이를 배포합니다. 인터넷 게이트웨이를 새 VPC와 연결하고 라우팅 테이블을 업데이트한 다음, 관련 서브넷과 연결합니다.",
            "F. 인터넷 게이트웨이를 생성합니다. 퍼블릭 서브넷에 NAT 인스턴스를 배포합니다. 라우팅 테이블을 업데이트하고 관련 서브넷과 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BCE (83%) ACE (17%)"
    },
    {
        "num": 216,
        "question": "A company is using third-party firewall appliances to monitor and inspect traffic on premises. The company wants to use the same model on AWS.\nThe Company has a single VPC with an internet gateway. The VPC has a fleet of web servers that run on Amazon EC2 instances that are managed\nby an Auto Scaling group.\nThe company’s network team needs to work with the security team to establish inline inspection of all packets that are sent to and from the web\nservers. The solution must scale as the fleet of virtual firewall appliances scales\nWhich combination of steps should the network team take to implement this solution? (Choose three.)",
        "options": [
            "A. Create a new VPC, and deploy a fleet of firewall appliances. Create a Gateway Load Balancer. Add the firewall appliances as targets.",
            "B. Create a security group for use with the firewall appliances, and allow port 443. Allow a port for the Galeway Load Balancer to perform\nhealth checks.",
            "C. Create a security group for use with the firewall appliances, and allow port 6081. Allow a port for the Gateway Load Balancer to perform\nhealth checks.",
            "D. Deploy a fleet of firewall appliances to the existing VPC. Create a Gateway Load Balancer. Add the firewall appliances as targets.",
            "E. Update the internet gateway route table and the web server route table to send traffic to and from the internet to the VPC endpoint ID of the\nGateway Load Balancer. Update the subnet route table that is associated with the Gateway Load Balancer endpoint to direct internet traffic to\nthe internet gateway.",
            "F. Create a new route table inside the web server VPC. Create a new edge association with the internet gateway. Update the internet gateway\nroute table and the web server route table to send traffic to and from the internet to the VPC endpoint ID of the Gateway Load Balancer.\nUpdate the subnet route table that is associated with the Gateway Load Balancer endpoint to direct internet traffic to the internet gateway."
        ],
        "answers": [
            "A",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACF (50%) ACE (35%) Other",
        "question_ko": "회사는 온프레미스에서 트래픽을 모니터링하고 검사하기 위해 타사 방화벽 어플라이언스를 사용하고 있습니다. 회사는 AWS에서도 동일한 모델을 사용하고자 합니다.\n회사는 단일 VPC와 인터넷 게이트웨이를 가지고 있습니다. VPC에는 Auto Scaling 그룹에 의해 관리되는 Amazon EC2 인스턴스에서 실행되는 웹 서버 플릿이 있습니다.\n네트워크 팀은 보안 팀과 협력하여 웹 서버로 보내지고 웹 서버에서 보내지는 모든 패킷에 대한 인라인 검사를 설정해야 합니다. 이 솔루션은 가상 방화벽 어플라이언스 플릿이 확장됨에 따라 확장되어야 합니다.\n네트워크 팀이 이 솔루션을 구현하기 위해 취해야 할 조치는 무엇입니까? (세 가지를 선택하시오.)",
        "options_ko": [
            "A. 새 VPC를 생성하고 방화벽 어플라이언스 플릿을 배포합니다. Gateway Load Balancer를 만듭니다. 방화벽 어플라이언스를 대상으로 추가합니다.",
            "B. 방화벽 어플라이언스에 사용할 보안 그룹을 만들고 포트 443을 허용합니다. Gateway Load Balancer가 상태 검사를 수행할 수 있는 포트를 허용합니다.",
            "C. 방화벽 어플라이언스에 사용할 보안 그룹을 만들고 포트 6081을 허용합니다. Gateway Load Balancer가 상태 검사를 수행할 수 있는 포트를 허용합니다.",
            "D. 기존 VPC에 방화벽 어플라이언스 플릿을 배포합니다. Gateway Load Balancer를 생성합니다. 방화벽 어플라이언스를 대상으로 추가합니다.",
            "E. 인터넷 게이트웨이 라우팅 테이블과 웹 서버 라우팅 테이블을 업데이트하여 인터넷 트래픽을 Gateway Load Balancer의 VPC 엔드포인트 ID로 보냅니다. Gateway Load Balancer 엔드포인트와 연결된 서브넷 라우팅 테이블을 업데이트하여 인터넷 트래픽을 인터넷 게이트웨이로 보냅니다.",
            "F. 웹 서버 VPC 내에 새 라우팅 테이블을 생성합니다. 인터넷 게이트웨이와 새 엣지 연결을 생성합니다. 인터넷 게이트웨이 라우팅 테이블과 웹 서버 라우팅 테이블을 업데이트하여 인터넷 트래픽을 Gateway Load Balancer의 VPC 엔드포인트 ID로 보냅니다. Gateway Load Balancer 엔드포인트와 연결된 서브넷 라우팅 테이블을 업데이트하여 인터넷 트래픽을 인터넷 게이트웨이로 보냅니다."
        ],
        "explanation_ko": "커뮤니티 투표: ACF (50%) ACE (35%) Other"
    },
    {
        "num": 217,
        "question": "A financial company offers investment forecasts and recommendations to authorized users through the internet. All the services are hosted in the\nAWS Cloud. A new compliance requirement states that all the internet service traffic from any host must be logged and retained for 2 years. In its\ndevelopment AWS accounts, the company has designed, tested, and verified a solution that uses Amazon VPC Traffic Mirroring with a Network\nLoad Balancer (NLB) as the traffic mirror target. While the solution runs in one AWS account, the solution mirrors the traffic to another AWS\naccount.\nA network engineer notices that not all traffic is mirrored when the solution is deployed into the production environment. The network engineer\nalso notices that this behavior is random.\nWhich statements are possible explanations for why not all the traffic is mirrored? (Choose two.)",
        "options": [
            "A. The security groups are misconfigured on the production AWS account that hosts the company’s services.",
            "B. The Amazon EC2 instance that is being monitored cannot handle the extra traffic that Traffic Mirroring has introduced.",
            "C. The IAM policy that allows the creation of traffic mirror sessions is misconfigured",
            "D. The mirrored traffic has a lower priority than the production traffic and is being dropped when network congestion occurs.",
            "E. The NLB is experiencing warm-up delay because of sudden and significant increases in traffic."
        ],
        "answers": [
            "B",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BD (50%) DE (46%) 4%",
        "question_ko": "금융 회사는 권한 있는 사용자에게 투자 예측 및 권장 사항을 인터넷을 통해 제공합니다. 모든 서비스는 AWS 클라우드에서 호스팅됩니다. 새로운 규정 준수 요구 사항에 따르면 모든 인터넷 서비스 트래픽은 로깅되어야 하고 2년 동안 보관되어야 합니다.\n회사는 개발 AWS 계정에서 Amazon VPC 트래픽 미러링과 Network Load Balancer(NLB)를 트래픽 미러 대상으로 사용하는 솔루션을 설계, 테스트 및 검증했습니다. 이 솔루션은 한 AWS 계정에서 실행되지만 다른 AWS 계정으로 트래픽을 미러링합니다.\n네트워크 엔지니어는 이 솔루션이 프로덕션 환경에 배포될 때 모든 트래픽이 미러링되지 않는다는 것을 알아냈습니다. 또한 이 동작이 무작위라는 것도 알아냈습니다.\n모든 트래픽이 미러링되지 않는 이유를 설명할 수 있는 진술은 무엇입니까? (두 가지를 선택하시오.)",
        "options_ko": [
            "A. 회사 서비스를 호스팅하는 프로덕션 AWS 계정의 보안 그룹이 잘못 구성되어 있습니다.",
            "B. 모니터링되는 Amazon EC2 인스턴스는 트래픽 미러링이 도입한 추가 트래픽을 처리할 수 없습니다.",
            "C. 트래픽 미러 세션 생성을 허용하는 IAM 정책이 잘못 구성되어 있습니다.",
            "D. 미러링된 트래픽이 프로덕션 트래픽보다 우선순위가 낮아 네트워크 혼잡이 발생할 때 삭제됩니다.",
            "E. NLB는 갑작스럽고 중요한 트래픽 증가로 인해 워밍업 지연을 겪고 있습니다."
        ],
        "explanation_ko": "커뮤니티 투표: BD (50%) DE (46%) 4%"
    },
    {
        "num": 218,
        "question": "A company has a VPC in the AWS Cloud. The company recently acquired a competitor that also has a VPC the AWS Cloud. A network engineer\ndiscovers an IP address overlap between the two VPCs. Both VPCs require access to an AWS Marketplace partner service.\nWhich solution will ensure interoperability among the VPC hosted services and the AWS Markelplace partner service?",
        "options": [
            "A. Configure VPC peering with static routing between the VPCs. Configure an AWS Site-to-Site VPN connection with static routing to the\npartner service.",
            "B. Configure a NAT gateway in the VPCs. Configure default routes in each VPC to point to the local NAT gateway. Attach each NAT gateway to\na transit gateway. Configure an AWS Site-to-Site VPN connection with static routing to the partner service.",
            "C. Configure AWS PrivateLink to facilitate connectivity between the VPCs and the partner service. Use the DNS name that is created with the\nassociated interface endpoints to route traffic between the VPCs and the partner service.",
            "D. Configure a NAT instance in the VPCs. Configure default routes in each VPC to point to the local NAT instance. Configure an interface\nendpoint in each VPC to connect to the partner service. Use the DNS name that is created with the associated interface endpoints to route\ntraffic between the VPCs and the partner service."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 AWS 클라우드에 VPC가 있습니다. 최근 경쟁사를 인수했는데, 경쟁사도 AWS 클라우드에 VPC가 있습니다. 네트워크 엔지니어는 두 VPC 간에 IP 주소 중복을 발견했습니다. 두 VPC 모두 AWS Marketplace 파트너 서비스에 대한 액세스가 필요합니다.\nVPC 호스팅 서비스와 AWS Marketplace 파트너 서비스 간의 상호 운용성을 보장할 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC 피어링과 정적 라우팅을 구성합니다. 파트너 서비스에 대한 AWS Site-to-Site VPN 연결을 정적 라우팅으로 구성합니다.",
            "B. VPC에 NAT 게이트웨이를 구성합니다. 각 VPC의 기본 경로를 로컬 NAT 게이트웨이를 가리키도록 구성합니다. 각 NAT 게이트웨이를 트랜짓 게이트웨이에 연결합니다. 파트너 서비스에 대한 AWS Site-to-Site VPN 연결을 정적 라우팅으로 구성합니다.",
            "C. AWS PrivateLink를 구성하여 VPC와 파트너 서비스 간의 연결을 용이하게 합니다. 관련 인터페이스 엔드포인트와 함께 생성된 DNS 이름을 사용하여 VPC와 파트너 서비스 간의 트래픽을 라우팅합니다.",
            "D. VPC에 NAT 인스턴스를 구성합니다. 각 VPC의 기본 경로를 로컬 NAT 인스턴스를 가리키도록 구성합니다. 각 VPC에 파트너 서비스에 연결되는 인터페이스 엔드포인트를 구성합니다. 관련 인터페이스 엔드포인트와 함께 생성된 DNS 이름을 사용하여 VPC와 파트너 서비스 간의 트래픽을 라우팅합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 219,
        "question": "A company uses the us-east-1 Region and the ap-south-1 Region for its business units (BUs). The BUS are named BU-1 and BU-Z. For each BU,\nthere are two VPCs in us-east-1 and one VPC in ap-south-1.\nBecause of workload isolation requirements, resources can communicate within the same BU but cannot communicate with resources in the other\nBU. The company plans to add more BUs and plans to expand into more Regions\nWhich solution will meet these requirements with the MOST operational efficiency?",
        "options": [
            "A. Configure an AWS Cloud WAN network that operates in the required Regions. Attach all BU VPCs to the AWS Cloud WAN core network.\nUpdate the AWS Cloud WAN segment actions to configure new routes to deny traffic between the different BU segments.",
            "B. Configure a transit gateway in each Region. Configure peering between the transit gateways. Attach the BU VPCs to the transit gateway in\nthe corresponding Region. Configure the transit gateway and VPC route tables to isolate traffic between BU VPCs.",
            "C. Configure an AWS Cloud WAN network that operates in the required Regions. Attach all BU VPCs to the AWS Cloud WAN core network.\nUpdate the core network policy by setting the isolate-attachments parameter for each segment.",
            "D. Configure an AWS Cloud WAN network that operates in the required Regions. Create AWS Cloud WAN segments for each BU Configure VPC\nattachments for each BU’s VPCs to the corresponding BU segment."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 us-east-1 리전과 ap-south-1 리전을 사용합니다. BU-1과 BU-2라는 두 개의 비즈니스 유닛(BU)이 있습니다. 각 BU에는 us-east-1에 2개의 VPC와 ap-south-1에 1개의 VPC가 있습니다.\n워크로드 격리 요구 사항으로 인해 동일한 BU 내의 리소스만 통신할 수 있으며 다른 BU의 리소스와는 통신할 수 없습니다. 회사는 더 많은 BU를 추가하고 더 많은 리전으로 확장할 계획입니다.\n이러한 요구 사항을 가장 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 요구되는 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 모든 BU VPC를 AWS Cloud WAN 코어 네트워크에 연결합니다. 새 경로를 거부하도록 AWS Cloud WAN 세그먼트 작업을 업데이트하여 다른 BU 세그먼트 간의 트래픽을 격리합니다.",
            "B. 각 리전에 트랜짓 게이트웨이를 구성합니다. 트랜짓 게이트웨이 간에 피어링을 구성합니다. 해당 리전의 트랜짓 게이트웨이에 BU VPC를 연결합니다. BU VPC 간의 트래픽을 격리하도록 트랜짓 게이트웨이 및 VPC 라우팅 테이블을 구성합니다.",
            "C. 요구되는 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 모든 BU VPC를 AWS Cloud WAN 코어 네트워크에 연결합니다. 각 세그먼트에 대해 isolate-attachments 매개변수를 설정하여 코어 네트워크 정책을 업데이트합니다.",
            "D. 요구되는 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 각 BU에 대한 AWS Cloud WAN 세그먼트를 생성합니다. 해당 BU VPC를 해당 BU 세그먼트에 VPC 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 220,
        "question": "A company has many application VPCs that use AWS Site-to-Site VPN connections for connectivity to an on-premises location. The company’s\nnetwork team wants to gradually migrate to AWS Transit Gateway to provide VPC-to-VPC connectivity.\nThe network team sets up a transit gateway that uses equal-cost multi-path (ECMP) routing. The network team attaches two temporary VPCs to\nthe transit gateway for testing. The test VPCs contain Amazon EC2 instances to confirm connectivity over the transit gateway between the on-\npremises location and the VPCs. The network team creates two new Site-to-Site VPN connections to the transit gateway.\nDuring testing, the network team cannot reach the required bandwidth of 2.5 Gbps over the pair of new Site-o-Site VPN connections.\nWhich combination of steps should the network team take to improve bandwidth performance and minimize network congestion? (Choose three.)",
        "options": [
            "A. Enable acceleration for the existing Site-to-Site VPN connections to the transit gateway.",
            "B. Create new accelerated Site-to-Site VPN connections to the transit gateway.",
            "C. Advertise the on-premises prefix to AWS with the same BGP AS_PATH attribute across all the Site-to-Site VPN connections.",
            "D. Advertise the on-premises prefix to AWS with a different BGP AS_PATH attribute across all the Site-to-Site VPN connections.",
            "E. Verify that the transit gateway attachments are present in the Availability Zones of the test VPC.",
            "F. Verify that the on-premises location is sending traffic by using multiple lows."
        ],
        "answers": [
            "B",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCF (84%) BDF (16%)",
        "question_ko": "회사에는 온프레미스 위치에 대한 AWS Site-to-Site VPN 연결을 사용하는 많은 애플리케이션 VPC가 있습니다. 네트워크 팀은 AWS Transit Gateway를 사용하여 VPC-to-VPC 연결을 점진적으로 마이그레이션하고자 합니다.\n네트워크 팀은 equal-cost multi-path(ECMP) 라우팅을 사용하는 트랜짓 게이트웨이를 설정했습니다. 테스트 목적으로 두 개의 임시 VPC를 트랜짓 게이트웨이에 연결했습니다. 이 테스트 VPC에는 온프레미스 위치와 트랜짓 게이트웨이 간의 연결을 확인하기 위해 Amazon EC2 인스턴스가 포함되어 있습니다. 네트워크 팀은 트랜짓 게이트웨이로 두 개의 새 Site-to-Site VPN 연결을 생성했습니다.\n테스트 중 네트워크 팀은 새로 생성된 Site-to-Site VPN 연결 쌍을 통해 2.5Gbps의 필요한 대역폭에 도달할 수 없음을 발견했습니다.\n대역폭 성능을 향상시키고 네트워크 혼잡을 최소화하기 위해 네트워크 팀이 취해야 할 조치는 무엇입니까? (세 가지를 선택하시오.)",
        "options_ko": [
            "A. 트랜짓 게이트웨이에 대한 기존 Site-to-Site VPN 연결에 가속화를 활성화합니다.",
            "B. 트랜짓 게이트웨이에 새로운 가속화된 Site-to-Site VPN 연결을 생성합니다.",
            "C. 모든 Site-to-Site VPN 연결에 대해 동일한 BGP AS_PATH 특성으로 온프레미스 접두사를 AWS에 알립니다.",
            "D. 모든 Site-to-Site VPN 연결에 대해 다른 BGP AS_PATH 특성으로 온프레미스 접두사를 AWS에 알립니다.",
            "E. 테스트 VPC의 가용 영역에 트랜짓 게이트웨이 연결이 있는지 확인합니다.",
            "F. 온프레미스 위치가 여러 흐름을 사용하여 트래픽을 보내고 있는지 확인합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BCF (84%) BDF (16%)"
    },
    {
        "num": 221,
        "question": "A company is migrating its on-premises network from its data center in Virginia to its data center in New York. The AWS Direct Connect\nconnections for the Virginia and New York data center locations are both associated to the us-east-1 Region. The company needs to migrate a\nprivate VIF on an existing Direct Connect hosted connection from Virginia to New York. The company's on-premises network uses the connection\nto access VPCs through a Direct Connect gateway in us-east-1.\nThe company has already requested a new Direct Connect hosted connection from the new data center to the New York Direct Connect location.\nWhich solution will meet these requirements with the LEAST downtime?",
        "options": [
            "A. Create a new private VIF on the new Direct Connect hosted connection. Create a new Direct Connect gateway and attach the gateway to the\nnew private VIF. Configure BGP routing on the new private VIF as a backup route. Perform the switchover during a maintenance window by\nshutting down BGP on the existing private VIF. Decommission the existing Direct Connect connection.",
            "B. Create a new private VIF on the new Direct Connect hosted connection. Attach the new private VIF to the existing Direct Connect gateway.\nConfigure BGP routing on the new private VIF as a backup route. Perform the switchover during a maintenance window by shutting down BGP\non the existing private VIF. Decommission the existing Direct Connect connection.",
            "C. During a maintenance window, migrate the existing private VIF to the new Direct Connect hosted connection. Attach the existing private VIF\nto the existing Direct Connect gateway. Decommission the existing Direct Connect connection.",
            "D. During a maintenance window, delete the existing private VIF and create a new private VIF to the new Direct Connect hosted connection.\nAttach the new private VIF to the existing Direct Connect gateway. Decommission the existing Direct Connect hosted connection."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "버지니아의 온프레미스 네트워크를 뉴욕의 데이터 센터로 마이그레이션해야 합니다. 버지니아와 뉴욕 데이터 센터 위치의 AWS Direct Connect 연결은 모두 us-east-1 리전과 연결되어 있습니다. 회사는 기존 Direct Connect 호스팅 연결의 프라이빗 VIF를 버지니아에서 뉴욕으로 마이그레이션해야 합니다. 회사의 온프레미스 네트워크는 us-east-1의 Direct Connect 게이트웨이를 통해 VPC에 액세스하는 연결을 사용합니다. 회사는 이미 뉴욕 Direct Connect 위치에서 새 Direct Connect 호스팅 연결을 요청했습니다. 이러한 요구사항을 가장 적은 다운타임으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 새 Direct Connect 호스팅 연결에 새 프라이빗 VIF를 생성합니다. 새 Direct Connect 게이트웨이를 생성하고 게이트웨이를 새 프라이빗 VIF에 연결합니다. 백업 경로로 새 프라이빗 VIF에 BGP 라우팅을 구성합니다. 유지 관리 기간 동안 기존 프라이빗 VIF의 BGP를 종료하여 switchover를 수행합니다. 기존 Direct Connect 연결을 폐기합니다.",
            "B. 새 Direct Connect 호스팅 연결에 새 프라이빗 VIF를 생성합니다. 새 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 백업 경로로 새 프라이빗 VIF에 BGP 라우팅을 구성합니다. 유지 관리 기간 동안 기존 프라이빗 VIF의 BGP를 종료하여 switchover를 수행합니다. 기존 Direct Connect 연결을 폐기합니다.",
            "C. 유지 관리 기간 동안 기존 프라이빗 VIF를 새 Direct Connect 호스팅 연결로 마이그레이션합니다. 기존 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 기존 Direct Connect 연결을 폐기합니다.",
            "D. 유지 관리 기간 동안 기존 프라이빗 VIF를 삭제하고 새 Direct Connect 호스팅 연결에 새 프라이빗 VIF를 생성합니다. 새 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 기존 Direct Connect 호스팅 연결을 폐기합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 222,
        "question": "A retail company is migrating its on-premises application to the AWS Cloud. Currently, the company has two on-premises data center locations.\nOne data center is on the east coast of the United States, and one data center is on the west coast.\nEach data center hosts four database systems. The largest database system stores 500 GB of data. The data centers are interconnected by two\n10 GbE circuits for data synchronization. Each data center has two separate 1 GbE upstream internet connections. The company plans to have\neight total VPCs to service its multiple business units. Four VPCs will be in the us-east-1 Region, and four will be in the us-west-2 Region.\nA network engineer needs to design a connectivity solution that allows VPC-to-VPC connectivity. The solution must also allow secure connections\nbetween the on-premises data centers and AWS during the migration process. The company expects spikes in traffic among the VPCs during\ndatabase synchronization. The company wants to run the migration plan during one weekend and as soon as technically possible. The company\nalso wants to minimize long-term operational and human resources costs.\nWhich combination of steps will meet these requirements? (Choose two.)",
        "options": [
            "A. Deploy one transit gateway and attach all VPCs to it. Update the transit gateway and VPC route tables to allow any VPC to connect to any\nother VPC.",
            "B. Configure VPC peering between all the VPCs. Update the VPC route tables to allow connectivity.",
            "C. Provision two AWS Direct Connect connections from two Direct Connect locations that serve us-east-1 and us-west-2 to provide\nconnectivity between the data centers and AWS.",
            "D. Provision one transit gateway VPN attachment for each data center to build connectivity between the on-premises data centers and AWS\nVPCs.",
            "E. Provision one AWS Site-to-Site VPN connection for each data center and for each VPC to build connectivity between the on-premises data\ncenters and AWS VPCs."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BE (39%) CD (33%) AC (17%) 11%",
        "question_ko": "소매 회사가 온프레미스 애플리케이션을 AWS 클라우드로 마이그레이션하고 있습니다. 현재 회사는 미국 동부와 서부에 각각 데이터 센터를 보유하고 있습니다. 각 데이터 센터에는 4개의 데이터베이스 시스템이 호스팅되어 있으며, 가장 큰 데이터베이스 시스템은 500GB의 데이터를 저장합니다. 데이터 센터는 데이터 동기화를 위해 2개의 10GbE 회선으로 상호 연결되어 있습니다. 각 데이터 센터에는 2개의 별도 1GbE 상향 인터넷 연결이 있습니다. 회사는 여러 비즈니스 부서를 지원하기 위해 총 8개의 VPC를 보유할 계획입니다. 4개 VPC는 us-east-1 리전에, 4개는 us-west-2 리전에 위치할 것입니다. 네트워크 엔지니어는 VPC 간 연결과 온프레미스 데이터 센터와 AWS 간 안전한 연결을 허용하는 연결 솔루션을 설계해야 합니다. 데이터베이스 동기화 중 VPC 간 트래픽 급증이 예상됩니다. 회사는 마이그레이션 계획을 주말 동안 최대한 신속하게 실행하고자 하며, 장기적인 운영 및 인적 자원 비용을 최소화하고자 합니다. 이러한 요구사항을 충족할 수 있는 조치는 무엇입니까? (두 가지 선택)",
        "options_ko": [
            "A. 하나의 Transit Gateway를 배포하고 모든 VPC를 연결합니다. Transit Gateway와 VPC 라우팅 테이블을 업데이트하여 VPC 간 연결을 허용합니다.",
            "B. VPC 피어링을 구성하여 모든 VPC 간 연결을 구현합니다. VPC 라우팅 테이블을 업데이트하여 연결을 허용합니다.",
            "C. us-east-1과 us-west-2를 서비스하는 두 개의 Direct Connect 위치에서 AWS Direct Connect 연결을 프로비저닝하여 온프레미스 데이터 센터와 AWS 간 연결을 제공합니다.",
            "D. 각 데이터 센터에 대해 Transit Gateway VPN 연결을 프로비저닝하여 온프레미스 데이터 센터와 AWS VPC 간 연결을 구축합니다.",
            "E. 각 데이터 센터와 각 VPC에 대해 AWS Site-to-Site VPN 연결을 프로비저닝하여 온프레미스 데이터 센터와 AWS VPC 간 연결을 구축합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BE (39%) CD (33%) AC (17%) 11%"
    },
    {
        "num": 223,
        "question": "A company is developing an API-based application on AWS for its process workflow requirements. The API will be invoked by clients in the\ncompany’s on-premises data centers. The company has set up an AWS Direct Connect connection between on premises and AWS. A network\nengineer decides to implement the API as a private REST API in Amazon API Gateway. The network engineer wants to ensure that clients can\nreach the API endpoint through private communication.\nWhich solution can the network engineer use to invoke the API without any additional infrastructure setup?",
        "options": [
            "A. Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using the private DNS name of the\nendpoint.",
            "B. Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using an Amazon Route 53 alias of\nthe endpoint.",
            "C. Create an interface VPC endpoint for API Gateway. Associate the endpoint with the private REST API, Access the API by using an Amazon\nRoute 53 alias of the endpoint.",
            "D. Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using the public DNS name of the\nendpoint."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (60%) A (27%) 13%",
        "question_ko": "회사는 AWS에서 API 기반 애플리케이션을 개발하고 있으며, 온프레미스 데이터 센터의 클라이언트에 의해 API가 호출될 것입니다. 회사는 온프레미스와 AWS 간에 AWS Direct Connect 연결을 설정했습니다. 네트워크 엔지니어는 API를 Amazon API Gateway의 프라이빗 REST API로 구현하기로 결정했습니다. 네트워크 엔지니어는 클라이언트가 프라이빗 통신을 통해 API 엔드포인트에 액세스할 수 있도록 하려 합니다. 추가 인프라 설정 없이 API를 호출할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 프라이빗 DNS 이름 사용이 활성화된 인터페이스 VPC 엔드포인트를 API Gateway에 생성합니다. 엔드포인트의 프라이빗 DNS 이름을 사용하여 API에 액세스합니다.",
            "B. 프라이빗 DNS 이름 사용이 활성화된 인터페이스 VPC 엔드포인트를 API Gateway에 생성합니다. Amazon Route 53 별칭을 사용하여 API에 액세스합니다.",
            "C. 인터페이스 VPC 엔드포인트를 API Gateway에 생성합니다. 엔드포인트를 프라이빗 REST API에 연결합니다. Amazon Route 53 별칭을 사용하여 API에 액세스합니다.",
            "D. 프라이빗 DNS 이름 사용이 활성화된 인터페이스 VPC 엔드포인트를 API Gateway에 생성합니다. 엔드포인트의 퍼블릭 DNS 이름을 사용하여 API에 액세스합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (60%) A (27%) 13%"
    },
    {
        "num": 224,
        "question": "A banking company has an application that must connect to specific public IP addresses from a VPC. A network engineer has configured routes in\nthe route table that is associated with the application’s subnet to the required public IP addresses through an internet gateway.\nThe network engineer needs to set up email notifications that will alert the network engineer when a user adds a default route to the application\nsubnet's route table with the internet gateway as a target.\nWhich solution will meet these requirements with the LEAST implementation effort?",
        "options": [
            "A. Create an AWS Lambda function that reads the routes in the route table and sends an email notification. Configure the Lambda function to\nsend an email notification if any route is configured with 0.0.0.0/0 or ::/0 CIDRs to the internet gateway. Configure the Lambda function to run\nevery minute.",
            "B. Create an AWS Lambda function that will be invoked by an Amazon EC2 CreateRoute API call. Configure the Lambda function to send an\nemail notification. Configure the Lambda function to send an email notification if any route is configured with 0.0.0.0/0 or ::/0 CIDRs to the\ninternet gateway.",
            "C. Create AWS Config rules for the route table by using the internet-gateway-authorized-vpc-only managed rule. Create an Amazon EventBridge\nrule to match the AWS Config rule and to route to an Amazon Simple Notification Service (Amazon SNS) topic to send an email notification.",
            "D. Create an AWS Config rule for the route table by using the no-unrestricted-route-to-igw managed rule. Create an Amazon EventBridge rule to\nmatch the AWS Config rule and to route to an Amazon Simple Notification Service (Amazon SNS) topic to send an email notification."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (90%) 10%",
        "question_ko": "은행 회사의 애플리케이션은 특정 퍼블릭 IP 주소에 연결해야 합니다. 네트워크 엔지니어는 애플리케이션 서브넷의 라우팅 테이블에 필요한 퍼블릭 IP 주소로의 경로를 인터넷 게이트웨이를 통해 구성했습니다. 네트워크 엔지니어는 사용자가 애플리케이션 서브넷의 라우팅 테이블에 인터넷 게이트웨이를 대상으로 하는 기본 경로를 추가할 때 이를 알리는 이메일 알림을 설정해야 합니다. 이러한 요구사항을 가장 적은 구현 노력으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 라우팅 테이블의 경로를 읽고 이메일 알림을 보내는 AWS Lambda 함수를 생성합니다. 인터넷 게이트웨이로 0.0.0.0/0 또는 ::/0 CIDR이 구성된 경로가 있는 경우 이메일 알림을 보내도록 Lambda 함수를 구성합니다. Lambda 함수를 1분마다 실행되도록 구성합니다.",
            "B. Amazon EC2 CreateRoute API 호출에 의해 호출되는 AWS Lambda 함수를 생성합니다. 이메일 알림을 보내도록 Lambda 함수를 구성합니다. 인터넷 게이트웨이로 0.0.0.0/0 또는 ::/0 CIDR이 구성된 경로가 있는 경우 이메일 알림을 보내도록 Lambda 함수를 구성합니다.",
            "C. internet-gateway-authorized-vpc-only 관리형 규칙을 사용하여 라우팅 테이블에 대한 AWS Config 규칙을 생성합니다. AWS Config 규칙과 일치하는 Amazon EventBridge 규칙을 생성하고 Amazon Simple Notification Service (Amazon SNS) 주제로 라우팅하여 이메일 알림을 보냅니다.",
            "D. no-unrestricted-route-to-igw 관리형 규칙을 사용하여 라우팅 테이블에 대한 AWS Config 규칙을 생성합니다. AWS Config 규칙과 일치하는 Amazon EventBridge 규칙을 생성하고 Amazon Simple Notification Service (Amazon SNS) 주제로 라우팅하여 이메일 알림을 보냅니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (90%) 10%"
    },
    {
        "num": 225,
        "question": "A company is building an internet-facing application that is hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company\nis using the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes for pod networking connectivity. The company needs to expose\nits application to the internet by using a Network Load Balancer (NLB).\nThe pods that host the application must have visibility of the source IP address that is contained in the original packet that the NLB receives.\nHow should the network engineer configure the NLB and Amazon EKS settings to achieve these goals?",
        "options": [
            "A. Specify the ip target type for the NLB. Set the externalTrafficPolicy attribute to Local in the Kubernetes service specification.",
            "B. Specify the instance target type for the NLSet the externalTrafficPolicy attribute to Cluster in the Kubernetes service specification.",
            "C. Specify the instance target type for the NLB. Set the externalTrafficPolicy attribute to Local in the Kubernetes service specification.",
            "D. Specify the ip target type for the NLB. Set the externalTrafficPolicy attribute to Cluster in the Kubernetes service specification."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 Amazon Elastic Kubernetes Service (Amazon EKS) 클러스터에 호스팅되는 인터넷 노출 애플리케이션을 구축하고 있습니다. 회사는 Kubernetes pod 네트워킹 연결을 위해 Amazon VPC Container Network Interface (CNI) 플러그인을 사용하고 있습니다. 회사는 Network Load Balancer (NLB)를 사용하여 애플리케이션을 인터넷에 노출해야 합니다. NLB가 수신한 원래 패킷의 소스 IP 주소를 호스팅 pods에서 볼 수 있어야 합니다. 이러한 목표를 달성하기 위해 네트워크 엔지니어가 NLB와 Amazon EKS 설정을 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. NLB에 대해 ip 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Local로 설정합니다.",
            "B. NLB에 대해 instance 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Cluster로 설정합니다.",
            "C. NLB에 대해 instance 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Local로 설정합니다.",
            "D. NLB에 대해 ip 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Cluster로 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 226,
        "question": "A company is running its application servers on Amazon EC2 instances. The EC2 instances run in separate VPCs that are connected by a transit\ngateway. The EC2 instances launch in a private subnet with a route to the transit gateway for internal and external connectivity. The external\nconnectivity is provided by a VPC with firewall devices that perform an inspection for packets that ingress and egress through an internet\ngateway.\nA network engineer needs to help the company’s application team increase the payload size per packet delivery between the EC2 instances. All\nnetwork connectivity must be through the transit gateway\nWhat should the network engineer do to meet these requirements?",
        "options": [
            "A. Enable jumbo frames on the transit gateway. Instruct the application team to set the maximum transmission unit (MTU) of the system’s\nnetwork interfaces to 9001 bytes.",
            "B. Instruct the application team to set the maximum transmission unit (MTU) of the VPC to 8500 bytes.",
            "C. Instruct the application team to set up enhanced networking on the system by using the enhanced networking adapter. Set the maximum\ntransmission unit (MTU) to 9001 bytes.",
            "D. Instruct the application team to set the maximum transmission unit (MTU) of the system’s network interfaces to 8500 bytes."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (73%) A (18%) 9%",
        "question_ko": "회사의 애플리케이션 서버가 Amazon EC2 인스턴스에서 실행되고 있습니다. EC2 인스턴스는 트랜짓 게이트웨이로 연결된 별도의 VPC에서 실행됩니다. EC2 인스턴스는 내부 및 외부 연결을 위해 트랜짓 게이트웨이로의 경로가 있는 프라이빗 서브넷에서 시작됩니다. 외부 연결은 인터넷 게이트웨이를 통해 들어오고 나가는 패킷을 검사하는 방화벽 디바이스가 있는 VPC에 의해 제공됩니다. 네트워크 엔지니어는 회사 애플리케이션 팀이 트랜짓 게이트웨이를 통한 EC2 인스턴스 간 패킷 전송당 페이로드 크기를 늘리는 것을 돕아야 합니다. 모든 네트워크 연결은 트랜짓 게이트웨이를 통해야 합니다. 이러한 요구 사항을 충족하려면 네트워크 엔지니어는 어떻게 해야 합니까?",
        "options_ko": [
            "A. 트랜짓 게이트웨이에서 점보 프레임을 활성화합니다. 애플리케이션 팀에 시스템 네트워크 인터페이스의 최대 전송 단위(MTU)를 9001바이트로 설정하도록 지시합니다.",
            "B. 애플리케이션 팀에 VPC의 최대 전송 단위(MTU)를 8500바이트로 설정하도록 지시합니다.",
            "C. 애플리케이션 팀에 향상된 네트워킹 어댑터를 사용하여 시스템의 최대 전송 단위(MTU)를 9001바이트로 설정하도록 지시합니다.",
            "D. 애플리케이션 팀에 시스템 네트워크 인터페이스의 최대 전송 단위(MTU)를 8500바이트로 설정하도록 지시합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (73%) A (18%) 9%"
    },
    {
        "num": 227,
        "question": "A network engineer needs to monitor internet metrics for an application that is in a VPC. The metrics include user experiences such as health\nevents, latency, and traffic insights.\nThe network engineer sets up Amazon CloudWatch Internet Monitor for the application. The engineer wants to push the internet health events to a\nthird-party target.\nWhich solution will meet these requirements with the LEAST implementation effort?",
        "options": [
            "A. Create a third-party API endpoint in Amazon EventBridge. Configure internet Monitor to send the events to the third-party API endpoint in\nEventBridge.",
            "B. Create a third-party API endpoint in Amazon EventBridge. Create a rule in EventBridge that uses Internet Monitor as the source and the\nthird-party API endpoint in EventBridge as the destination.",
            "C. Create a third-party API endpoint in internet Monitor. Configure Internet Monitor to send the events to an Amazon S3 bucket. Configure an\nAWS Lambda function to send the events to the third-party API endpoint in Internet Monitor.",
            "D. Create a third-party API endpoint in Internet Monitor. Configure Internet Monitor to send the events to the third-party API endpoint in\nInternet Monitor."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "네트워크 엔지니어는 VPC에 있는 애플리케이션의 인터넷 메트릭을 모니터링해야 합니다. 이 메트릭에는 사용자 경험, 상태 이벤트, 지연 시간, 트래픽 인사이트 등이 포함됩니다. 네트워크 엔지니어는 Amazon CloudWatch Internet Monitor를 애플리케이션에 설정했습니다. 엔지니어는 인터넷 상태 이벤트를 타사 대상으로 푸시하고 싶습니다. 이러한 요구사항을 가장 적은 구현 노력으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Amazon EventBridge에 타사 API 엔드포인트를 생성합니다. Internet Monitor를 EventBridge의 타사 API 엔드포인트로 구성합니다.",
            "B. Amazon EventBridge에 타사 API 엔드포인트를 생성합니다. Internet Monitor를 소스로, EventBridge의 타사 API 엔드포인트를 대상으로 하는 EventBridge 규칙을 만듭니다.",
            "C. Internet Monitor에 타사 API 엔드포인트를 생성합니다. Internet Monitor를 Amazon S3 버킷으로 이벤트를 보내도록 구성합니다. AWS Lambda 함수를 사용하여 S3 버킷의 이벤트를 타사 API 엔드포인트로 보냅니다.",
            "D. Internet Monitor에 타사 API 엔드포인트를 생성합니다. Internet Monitor를 타사 API 엔드포인트로 이벤트를 보내도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 228,
        "question": "A company has a web application that runs in eight AWS Regions. In each Region, the application is hosted on multiple compute resources behind\nan Application Load Balancer (ALB).\nThe different Regions are using different domains. Each ALB is configured to accept only HTTPS traffic. Each ALB uses a certificate from AWS\nCertificate Manager (ACM).\nThe company wants to simplify the application’s appearance on the web by using a new single domain for all Regions. A network engineer needs\nto implement this change by designing a solution that also will minimize latency for the application's end users.\nWhich combination of actions will meet these requirements? (Choose three.)",
        "options": [
            "A. Use ACM to create an SSL/TLS certificate in the us-east-1 Region for the new domain.",
            "B. Set up latency-based routing in Amazon Route 53 for the new domain. Add the ALBs from all the Regions as targets.",
            "C. Create an alias record for the accelerator in Amazon Route 53 for the new domain.",
            "D. Create a standard accelerator in AWS Global Accelerator. Configure a listener for TCP traffic. Add all the ALBs as targets for the listener.",
            "E. Use ACM to create an SSLITLS certificate for each Region. Configure all the ALBs to use the certificate in their respective Regions.",
            "F. Create a custom routing accelerator in AWS Global Accelerator. Configure a listener for HTTPS traffic. Add all the ALBs as targets for the\nlistener. Configure the accelerator to terminate TLS by using the SSLITLS certificate from ACM."
        ],
        "answers": [
            "C",
            "D",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: CDE (75%) 13% 13%",
        "question_ko": "회사에는 8개 AWS 리전에서 실행되는 웹 애플리케이션이 있습니다. 각 리전에서 애플리케이션은 Application Load Balancer(ALB) 뒤의 여러 컴퓨팅 리소스에 호스팅됩니다. 각기 다른 리전은 다른 도메인을 사용하고 있습니다. 각 ALB는 HTTPS 트래픽만 수락하도록 구성되어 있으며 AWS Certificate Manager(ACM)의 인증서를 사용합니다. 회사는 모든 리전에 대해 단일 도메인을 사용하여 애플리케이션의 웹 모습을 단순화하고자 합니다. 또한 최종 사용자의 지연 시간을 최소화할 수 있는 솔루션을 구현해야 합니다. 이러한 요구사항을 충족할 수 있는 조치는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. us-east-1 리전에서 새 도메인용 SSL/TLS 인증서를 ACM에 생성합니다.",
            "B. 새 도메인에 대해 Amazon Route 53에서 지연 시간 기반 라우팅을 설정합니다. 모든 리전의 ALB를 대상으로 추가합니다.",
            "C. 새 도메인에 대해 Amazon Route 53에 가속기의 별칭 레코드를 생성합니다.",
            "D. AWS Global Accelerator에 표준 가속기를 생성합니다. TCP 트래픽용 리스너를 구성하고 모든 ALB를 리스너의 대상으로 추가합니다.",
            "E. 각 리전에 대해 ACM에서 SSL/TLS 인증서를 생성합니다. 모든 ALB가 해당 리전의 인증서를 사용하도록 구성합니다.",
            "F. AWS Global Accelerator에 사용자 지정 라우팅 가속기를 생성합니다. HTTPS 트래픽용 리스너를 구성하고 모든 ALB를 리스너의 대상으로 추가합니다. 가속기가 ACM의 SSL/TLS 인증서를 사용하여 TLS를 종료하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: CDE (75%) 13% 13%"
    },
    {
        "num": 229,
        "question": "A company has a VPC that includes application workloads that run on Amazon EC2 instances in a single AWS Region. The company wants to use\nAWS Local Zones to deploy an extension of the application workloads that run in the Region. The extended workloads in the Local Zone need to\ncommunicate bidirectionally with the workloads in the VPC in the Region.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Create a new VPC in the Local Zone. Attach all the VPCs to a transit gateway. Configure routing for the transit gateway and the VPCs.\nDeploy instances in the new VPC.",
            "B. Deploy a third-party appliance in a new VPC in the Region. Create a new VPC in the Local Zone. Create VPN connections to the appliance\nfor the VPCs. Deploy instances in the new VPC in the Local Zone.",
            "C. Create a new subnet in the Local Zone. Deploy a third-party appliance in the VPC with interfaces in each subnet. Configure the new subnet\nto route the Local Zone through the appliance. Deploy instances in the new subnet.",
            "D. Create a new subnet in the Local Zone. Configure the new subnet to use a CIDR block that is within the VPC’s CIDR block. Deploy instances\nin the new subnet in the Local Zone."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사에는 단일 AWS 리전의 Amazon EC2 인스턴스에서 실행되는 애플리케이션 워크로드가 포함된 VPC가 있습니다. 회사는 애플리케이션 워크로드의 확장을 위해 AWS Local Zones를 사용하고자 합니다. Local Zone에 있는 확장 워크로드는 리전의 VPC에 있는 워크로드와 양방향으로 통신해야 합니다. 이러한 요구사항을 가장 비용 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Local Zone에 새 VPC를 생성합니다. 모든 VPC를 트랜짓 게이트웨이에 연결합니다. 트랜짓 게이트웨이와 VPC의 라우팅을 구성합니다. 새 VPC에 인스턴스를 배포합니다.",
            "B. 리전에 새 VPC에 타사 어플라이언스를 배포합니다. Local Zone에 새 VPC를 생성합니다. 어플라이언스에 VPN 연결을 생성합니다. Local Zone의 새 VPC에 인스턴스를 배포합니다.",
            "C. Local Zone에 새 서브넷을 생성합니다. VPC에 타사 어플라이언스를 배포하고 각 서브넷에 인터페이스를 추가합니다. 새 서브넷이 어플라이언스를 통해 Local Zone으로 라우팅되도록 구성합니다. 새 서브넷에 인스턴스를 배포합니다.",
            "D. Local Zone에 새 서브넷을 생성합니다. 새 서브넷의 CIDR 블록이 VPC의 CIDR 블록 내에 있도록 구성합니다. 새 서브넷에 인스턴스를 배포합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 230,
        "question": "A company is using AWS Cloud WAN with one edge location in the us-east-1 Region and one edge location in the us-west-1 Region. A shared\nservices segment exists at both edge locations. Each shared services segment has a VPC attachment to each inspection VPC in each Region. The\ninspection VPCs inspect traffic from a WAN by using AWS Network Firewall.\nThe company creates a new segment for a new business unit (BU) in the us-east-1 edge location. The new BU has three VPCs that are attached to\nthe new BU segment. To comply with regulations, the BU VPCs must not communicate with each other. All internet-bound traffic must be\ninspected in the inspection VPC.\nThe company updates VPC route tables so any traffic that is bound for internet goes to the AWS Cloud WAN core network.\nThe company plans to add more VPCs for the new BU in the future. All future VPCs must comply with regulations.\nWhich solution will meet these requirements in the MOST operationally efficient way? (Choose two.)",
        "options": [
            "A. Update the network policy to share the shared services segment with the BU segment.",
            "B. Create a network policy to share the inspection service segment with the BU segment.",
            "C. Set the isolate-attachments field to True for the BU segment.",
            "D. Set the isolate-attachments field to False for the BU segment.",
            "E. Update the network policy to add static routes for the BU segment. Configure the shared services segment to route traffic related to VPC\nCIDR blocks to each respective VPC attachment."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (67%) AC (33%)",
        "question_ko": "회사는 us-east-1 리전의 한 엣지 위치와 us-west-1 리전의 한 엣지 위치에서 AWS Cloud WAN을 사용하고 있습니다. 각 엣지 위치에 공유 서비스 세그먼트가 있습니다. 각 공유 서비스 세그먼트에는 각 리전의 검사 VPC에 대한 VPC 연결이 있습니다. 검사 VPC는 AWS Network Firewall을 사용하여 WAN 트래픽을 검사합니다. 회사는 us-east-1 엣지 위치에 새 비즈니스 단위(BU)를 위한 새 세그먼트를 생성했습니다. 새 BU에는 새 BU 세그먼트에 연결된 3개의 VPC가 있습니다. 규정 준수를 위해 BU VPC 간 통신이 허용되지 않아야 합니다. 인터넷 트래픽은 모두 검사 VPC에서 검사되어야 합니다. 회사는 VPC 라우팅 테이블을 업데이트하여 인터넷 바운드 트래픽이 AWS Cloud WAN 코어 네트워크로 전송되도록 했습니다. 회사는 향후 새 BU에 더 많은 VPC를 추가할 계획입니다. 향후 모든 VPC는 규정을 준수해야 합니다. 이러한 요구사항을 가장 효율적으로 충족할 수 있는 솔루션은 무엇입니까? (두 가지를 선택하세요.)",
        "options_ko": [
            "A. 네트워크 정책을 업데이트하여 공유 서비스 세그먼트를 BU 세그먼트와 공유합니다.",
            "B. 네트워크 정책을 생성하여 검사 서비스 세그먼트를 BU 세그먼트와 공유합니다.",
            "C. BU 세그먼트의 isolate-attachments 필드를 True로 설정합니다.",
            "D. BU 세그먼트의 isolate-attachments 필드를 False로 설정합니다.",
            "E. 네트워크 정책을 업데이트하여 BU 세그먼트에 대한 정적 경로를 추가합니다. 공유 서비스 세그먼트가 각 VPC 연결에 대한 VPC CIDR 블록 관련 트래픽을 라우팅하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (67%) AC (33%)"
    },
    {
        "num": 231,
        "question": "A company hosts a highly available, scalable, and resilient application on Amazon EC2 instances that are part of an Auto Scaling group. A network\nengineer is planning to integrate IPv6 support with the application deployment in phases. The first phase is to enable IPv6 service consumption on\nthe public Network Load Balancers (NLBs) that are deployed across the infrastructure. The target groups for the NLBS are configured as the Auto\nScaling groups of the EC2 instances that host the application. The NLBs are configured for dual-stack operation.\nDuring the testing of the first phase, the IPv6 application queries are not reaching the backend servers.\nWhat is the cause of this issue?",
        "options": [
            "A. The subnets where the EC2 instances are deployed do not have IPv6 addresses configured.",
            "B. The route tables for the NLB subnets do not have IPV6 routing configured.",
            "C. The route tables for the EC2 subnets do not have IPV6 routing configured.",
            "D. The security groups that are associated with the NLBs do not allow IPv6 traffic."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (75%) 13% 13%",
        "question_ko": "회사가 Auto Scaling 그룹의 일부인 Amazon EC2 인스턴스에서 고가용성, 확장 가능, 탄력적인 애플리케이션을 호스팅하고 있습니다. 네트워크 엔지니어는 애플리케이션 배포에 단계적으로 IPv6 지원을 통합하려고 합니다. 첫 번째 단계는 인프라에 배포된 공용 Network Load Balancer(NLB)에서 IPv6 서비스 소비를 활성화하는 것입니다. NLB의 대상 그룹은 애플리케이션을 호스팅하는 EC2 인스턴스의 Auto Scaling 그룹으로 구성되어 있습니다. NLB는 듀얼 스택 작업으로 구성되어 있습니다. 첫 번째 단계의 테스트 중에 IPv6 애플리케이션 쿼리가 백엔드 서버에 도달하지 않고 있습니다. 이 문제의 원인은 무엇입니까?",
        "options_ko": [
            "A. EC2 인스턴스가 배포된 서브넷에 IPv6 주소가 구성되어 있지 않습니다.",
            "B. NLB 서브넷의 라우팅 테이블에 IPv6 라우팅이 구성되어 있지 않습니다.",
            "C. EC2 서브넷의 라우팅 테이블에 IPv6 라우팅이 구성되어 있지 않습니다.",
            "D. NLB와 연결된 보안 그룹이 IPv6 트래픽을 허용하지 않습니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (75%) 13% 13%"
    },
    {
        "num": 232,
        "question": "A company wants to implement a distributed architecture on AWS that uses a Gateway Load Balancer (GWLB) and GWLB endpoints.\nThe company has chosen a hub-and-spoke model. The model includes a GWLB and virtual appliances that are deployed into a centralized\nappliance VPC and GWLB endpoints. The model also includes internet gateways that are configured in spoke VPCs.\nWhich sequence of traffic flow to the internet from the spoke VPC is correct?",
        "options": [
            "A. 1. An application in a spoke VPC sends traffic to the GWLB endpoint based on the VPC route table configuration.\n2. Traffic is delivered securely and privately to the GWLB.\n3. The GWLB sends the traffic to a virtual appliance for inspection.\n4. Return traffic flows back to the GWLB endpoint and out to the internet through the internet gateway.",
            "B. 1. An application in a spoke VPC sends traffic to the GWLB endpoint based on the VPC route table configuration.\n2. Traffic is delivered securely and privately to the GWLB endpoint.\n3. The GWLB sets the X-Forwarded-For request header and sends the traffic to a virtual appliance for inspection.\n4. Return traffic flows back to the GWLB and out to the internet through an internet gateway.",
            "C. 1. An application in a spoke VPC sends traffic to the GWLB endpoint.\n2. Traffic is delivered securely and privately to the GWLB.\n3. The GWLB sets the X-Forwarded-For request header and sends the traffic to a virtual appliance for inspection.\n4. Return traffic flows back to the GWLB endpoint and out to the internet through the internet gateway.",
            "D. 1. An application in a spoke VPC sends traffic to the GWLB.\n2. Traffic is delivered securely and privately to the GWLB endpoint.\n3. The GWLB sends the traffic to a virtual appliance for inspection.\n4. Return traffic flows back to the GWLB and out to the internet through an internet gateway."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 Gateway Load Balancer(GWLB) 및 GWLB 엔드포인트를 사용하는 분산 아키텍처를 AWS에 구현하려고 합니다. 회사는 허브-앤-스포크 모델을 선택했습니다. 이 모델에는 GWLB와 중앙 집중식 애플리언스 VPC에 배포된 가상 어플라이언스, GWLB 엔드포인트가 포함됩니다. 또한 스포크 VPC에 구성된 인터넷 게이트웨이도 포함됩니다. 스포크 VPC에서 인터넷으로의 올바른 트래픽 흐름 순서는 무엇입니까?",
        "options_ko": [
            "A. 1. 스포크 VPC의 애플리케이션이 VPC 라우팅 테이블 구성에 따라 GWLB 엔드포인트로 트래픽을 보냅니다.\n2. 트래픽이 GWLB로 안전하고 비공개적으로 전달됩니다.\n3. GWLB가 트래픽을 가상 어플라이언스로 보내 검사합니다.\n4. 반환 트래픽이 GWLB 엔드포인트로 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
            "B. 1. 스포크 VPC의 애플리케이션이 VPC 라우팅 테이블 구성에 따라 GWLB 엔드포인트로 트래픽을 보냅니다.\n2. 트래픽이 GWLB 엔드포인트로 안전하고 비공개적으로 전달됩니다.\n3. GWLB가 X-Forwarded-For 요청 헤더를 설정하고 트래픽을 가상 어플라이언스로 보내 검사합니다.\n4. 반환 트래픽이 GWLB로 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
            "C. 1. 스포크 VPC의 애플리케이션이 GWLB 엔드포인트로 트래픽을 보냅니다.\n2. 트래픽이 GWLB로 안전하고 비공개적으로 전달됩니다.\n3. GWLB가 X-Forwarded-For 요청 헤더를 설정하고 트래픽을 가상 어플라이언스로 보내 검사합니다.\n4. 반환 트래픽이 GWLB 엔드포인트로 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
            "D. 1. 스포크 VPC의 애플리케이션이 GWLB로 트래픽을 보냅니다.\n2. 트래픽이 GWLB 엔드포인트로 안전하고 비공개적으로 전달됩니다.\n3. GWLB가 트래픽을 가상 어플라이언스로 보내 검사합니다.\n4. 반환 트래픽이 GWLB로 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 233,
        "question": "A network engineer needs to provide a list of IP addresses that are sending traffic to an Amazon EC2 instance. VPC flow logs are enabled. The\nEC2 instance has a single network interface and two assigned IP addresses. However, the flow logs are logging traffic only for the primary IP\naddress. The network engineer needs to determine whether any traffic is being sent to the second IP address of the EC2 instance.\nWhat should the network engineer do to locate the traffic flow for the second IP address?",
        "options": [
            "A. Create a new flow log that includes the pkt-dstaddr field to capture the original destination IP address of the traffic.",
            "B. Create a new flow log that includes the dstaddr field to capture the original destination IP address of the traffic.",
            "C. Create a new flow log that includes the pkt-srcaddr field to capture the original destination IP address of the traffic.",
            "D. Create a new flow log that includes the srcaddr field to capture the original destination IP address of the traffic."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "네트워크 엔지니어는 Amazon EC2 인스턴스로 트래픽을 보내는 IP 주소 목록을 제공해야 합니다. VPC 흐름 로그가 활성화되어 있습니다. EC2 인스턴스에는 단일 네트워크 인터페이스와 두 개의 할당된 IP 주소가 있습니다. 그러나 흐름 로그에는 EC2 인스턴스의 기본 IP 주소에 대한 트래픽만 기록되고 있습니다. 네트워크 엔지니어는 EC2 인스턴스의 두 번째 IP 주소로 전송되는 트래픽을 찾아야 합니다. 이 문제를 해결하기 위해 네트워크 엔지니어는 무엇을 해야 합니까?",
        "options_ko": [
            "A. pkt-dstaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 대상 IP 주소를 캡처합니다.",
            "B. dstaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 대상 IP 주소를 캡처합니다.",
            "C. pkt-srcaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 대상 IP 주소를 캡처합니다.",
            "D. srcaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 대상 IP 주소를 캡처합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 234,
        "question": "A company has configured an AWS Cloud WAN core network with edge locations in the us-east-1 Region and the us-west-1 Region. Each edge\nlocation has two segments: development and staging. The segments use the default core network policy.\nThe company has attached VPCs to the core network. A development VPC is attached to the development segment in us-east-1 and is configured\nto use the 10.0.0.0/16 CIDR block. A staging VPC is attached to the staging segment in us-west-1 and is configured to use the 10.5.0.0/16 CIDR\nblock. The company has updated the route tables for both VPCs with a route that directs any traffic for 0.0.0.0/0 to the core network.\nThe company’s network team needs to establish communication between the two VPCs by using the AWS Cloud WAN core network. The network\nteam is not receiving a response during tests of communication between the VPCs. The network team has verified that security groups and\nnetwork ACLs are not blocking the traffic.\nWhat should the network team do to establish this communication?",
        "options": [
            "A. Update both VPC route tables to have a new static route. Configure a route on the development VPC to direct the traffic for 10.0.0.0/16 to\nthe development VPC attachment. Configure a route on the staging VPC to direct the traffic for 10.5.0.0/16 to the staging VPC attachment.",
            "B. Update the segment filter to allow traffic on the development and staging segments.",
            "C. Set the isolate-attachments parameter to False for the development and staging segments.",
            "D. Update the core network policy to add a static route for each segment. Configure a route to direct the traffic for 10.0.0.0/16 to the\ndevelopment VPC attachment. Configure a route to direct the traffic for 10.5.0.0/16 to the staging VPC attachment."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 us-east-1 리전과 us-west-1 리전에 엣지 위치가 있는 AWS Cloud WAN 코어 네트워크를 구성했습니다. 각 엣지 위치에는 개발과 스테이징의 두 개 세그먼트가 있습니다. 세그먼트는 기본 코어 네트워크 정책을 사용합니다. 회사는 VPC를 코어 네트워크에 연결했습니다. 개발 VPC는 us-east-1의 개발 세그먼트에 연결되어 있고 10.0.0.0/16 CIDR 블록을 사용합니다. 스테이징 VPC는 us-west-1의 스테이징 세그먼트에 연결되어 있고 10.5.0.0/16 CIDR 블록을 사용합니다. 회사는 두 VPC 모두의 라우팅 테이블을 업데이트하여 0.0.0.0/0 트래픽을 코어 네트워크로 전송하는 경로를 추가했습니다. 회사의 네트워크 팀은 AWS Cloud WAN 코어 네트워크를 사용하여 두 VPC 간의 통신을 설정해야 합니다. 테스트 중 VPC 간 통신에 대한 응답이 없습니다. 네트워크 팀은 보안 그룹과 네트워크 ACL이 트래픽을 차단하지 않음을 확인했습니다. 네트워크 팀은 이 통신을 어떻게 설정해야 합니까?",
        "options_ko": [
            "A. 두 VPC 라우팅 테이블에 새로운 고정 경로를 업데이트합니다. 개발 VPC의 라우팅 테이블에 10.0.0.0/16 트래픽을 개발 VPC 연결로 보내는 경로를 구성합니다. 스테이징 VPC의 라우팅 테이블에 10.5.0.0/16 트래픽을 스테이징 VPC 연결로 보내는 경로를 구성합니다.",
            "B. 세그먼트 필터를 업데이트하여 개발 및 스테이징 세그먼트의 트래픽을 허용합니다.",
            "C. 개발 및 스테이징 세그먼트의 isolate-attachments 매개변수를 False로 설정합니다.",
            "D. 코어 네트워크 정책을 업데이트하여 각 세그먼트에 대한 고정 경로를 추가합니다. 10.0.0.0/16 트래픽을 개발 VPC 연결로 보내는 경로를 구성합니다. 10.5.0.0/16 트래픽을 스테이징 VPC 연결로 보내는 경로를 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 235,
        "question": "A company has VPCs in the us-east-1 Region that are connected to each other through a transit gateway. A network engineer needs to establish\nan AWS Direct Connect connection between the company's on-premises data center and the transit gateway for the migration of a workload.\nThe Direct Connect connection is UP according to the ConnectionState metric in Amazon CloudWatch. However, the VIF is DOWN. The network\nengineer has verified the transit VIF and BGP configurations on the on-premises router and has found no issues. However, the network engineer is\nunable to ping the Amazon peer IP address.\nWhich combination of steps should the network engineer take to troubleshoot this issue? (Choose three.)",
        "options": [
            "A. Verify that the correct IP address and subnet mask are in use for the subinterface on the router.",
            "B. Ensure that VLAN trunking is disabled on the router.",
            "C. Verify that the router has a MAC address entry from the AWS endpoint in the Address Resolution Protocol (ARP) table.",
            "D. Verify that the optical signal that is received over the cross connect is optimal.",
            "E. Ensure that the correct VLAN tag is applied on the subinterface configuration on the router.",
            "F. Ensure that TCP port 179 is not being blocked at the on-premises router."
        ],
        "answers": [
            "A",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACE (75%) AEF (25%)",
        "question_ko": "회사는 us-east-1 리전에 VPC를 보유하고 있으며, 이 VPC는 트랜짓 게이트웨이를 통해 서로 연결되어 있습니다. 네트워크 엔지니어는 온프레미스 데이터 센터와 트랜짓 게이트웨이 간에 AWS Direct Connect 연결을 설정해야 합니다. 워크로드 마이그레이션을 위해서입니다. Direct Connect 연결은 Amazon CloudWatch의 ConnectionState 지표에 따르면 UP 상태입니다. 그러나 VIF는 DOWN 상태입니다. 네트워크 엔지니어는 온프레미스 라우터의 트랜짓 VIF 및 BGP 구성을 확인했지만 문제가 없는 것으로 확인되었습니다. 그러나 네트워크 엔지니어는 Amazon 피어 IP 주소를 ping할 수 없습니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 수행해야 할 조치는 무엇입니까? (세 가지를 선택하세요.)",
        "options_ko": [
            "A. 라우터의 하위 인터페이스에 사용되는 IP 주소와 서브넷 마스크가 올바른지 확인합니다.",
            "B. 라우터에서 VLAN 트렁킹이 비활성화되어 있는지 확인합니다.",
            "C. 라우터의 Address Resolution Protocol(ARP) 테이블에 AWS 엔드포인트의 MAC 주소 항목이 있는지 확인합니다.",
            "D. 크로스 연결을 통해 수신되는 광학 신호가 최적인지 확인합니다.",
            "E. 라우터의 하위 인터페이스 구성에 올바른 VLAN 태그가 적용되어 있는지 확인합니다.",
            "F. 온프레미스 라우터에서 TCP 포트 179가 차단되지 않았는지 확인합니다."
        ],
        "explanation_ko": "커뮤니티 투표: ACE (75%) AEF (25%)"
    },
    {
        "num": 236,
        "question": "A logistics company has multiple VPCs in an AWS Region. The company uses a transit gateway to connect the VPCs. The company has several\non-premises offices that connect to the transit gateway by using AWS Site-to-Site VPN connections over the internet. The company has configured\none transit gateway VPN attachment for each office.\nRoute propagation is enabled on all route tables. Each Site-to-Site VPN connection uses two tunnels in an active-passive configuration. The\ncompany configured each office with appropriate static routes on both the Site-to-Site VPN connection and the office’s customer gateway.\nThe company wants to use both IPsec tunnels of every office to maximize the overall VPN connection bandwidth.\nWhich design changes are necessary to meet these requirements?",
        "options": [
            "A. Create an AWS Transit Gateway Connect attachment for each office Use the existing VPN attachments as the transport for the new Connect\nattachments. Set up a Generic Routing\nEncapsulation (GRE) tunnel on each customer gateway that terminates on the Connect attachment for each office. Move the static routes\nfrom the transit gateway VPN attachment to the customer gateway for the transit gateway Connect attachment.",
            "B. Enable equal-cost multi-path (ECMP) routing on the transit gateway. Ensure ECMP is supported by and enabled on the customer gateways.\nEnable ECMP on the Site-to-Site VPN connection. Ensure static routes on the customer gateways have equal metrics and administrative\ndistance.",
            "C. Enable equal-cost multi-path (ECMP) routing on the transit gateway. (Ensure ECMP is supported by and enabled on the customer gateways.\nChange the routing configuration between the transit gateway and the customer gateways from static routing to BGP. Remove related static\nroutes from the customer gateways.",
            "D. Enable equal-cost multi-path (ECMP) routing on the transit gateway. Ensure ECMP is supported by and enabled on the customer gateways.\nChange the routing configuration between the transit gateway and the customer gateways from static routing to BGP. Ensure the customer\ngateway applies the correct community strings to give the transit gateway the ability to perform ECMP forwarding."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "물류 회사가 AWS 리전에 여러 VPC를 보유하고 있습니다. 해당 회사는 트랜짓 게이트웨이를 사용하여 VPC를 연결합니다. 회사에는 온프레미스 사무소가 여러 개 있으며, 이들은 인터넷을 통해 AWS Site-to-Site VPN 연결을 사용하여 트랜짓 게이트웨이에 연결됩니다. 회사는 각 사무소에 대해 하나의 트랜짓 게이트웨이 VPN 연결을 구성했습니다.\n모든 라우팅 테이블에서 라우트 전파가 활성화되어 있습니다. 각 Site-to-Site VPN 연결은 활성-수동 구성의 두 개의 터널을 사용합니다. 회사는 각 사무소에 Site-to-Site VPN 연결과 고객 게이트웨이에 적절한 정적 라우팅을 구성했습니다.\n회사는 전체 VPN 연결 대역폭을 최대화하기 위해 모든 사무소의 두 IPsec 터널을 모두 사용하고 싶어 합니다.\n이러한 요구사항을 충족하기 위해서는 어떤 설계 변경이 필요할까요?",
        "options_ko": [
            "A. 각 사무소에 대해 AWS Transit Gateway Connect 연결을 생성합니다. 기존 VPN 연결을 새 Connect 연결의 전송 수단으로 사용합니다. 각 고객 게이트웨이에 GRE(Generic Routing Encapsulation) 터널을 설정하여 각 사무소의 Connect 연결에서 종료되도록 합니다. 트랜짓 게이트웨이 VPN 연결의 정적 라우팅을 고객 게이트웨이로 이동합니다.",
            "B. 트랜짓 게이트웨이에서 ECMP(Equal-Cost Multi-Path) 라우팅을 활성화합니다. 고객 게이트웨이에서 ECMP가 지원되고 활성화되도록 확인합니다. Site-to-Site VPN 연결에서 ECMP를 활성화합니다. 고객 게이트웨이의 정적 경로에 동일한 메트릭과 관리 거리가 적용되도록 합니다.",
            "C. 트랜짓 게이트웨이에서 ECMP(Equal-Cost Multi-Path) 라우팅을 활성화합니다. (고객 게이트웨이에서 ECMP가 지원되고 활성화되도록 확인합니다. 트랜짓 게이트웨이와 고객 게이트웨이 간의 라우팅 구성을 정적 라우팅에서 BGP로 변경합니다. 관련 정적 경로를 고객 게이트웨이에서 제거합니다.",
            "D. 트랜짓 게이트웨이에서 ECMP(Equal-Cost Multi-Path) 라우팅을 활성화합니다. 고객 게이트웨이에서 ECMP가 지원되고 활성화되도록 확인합니다. 트랜짓 게이트웨이와 고객 게이트웨이 간의 라우팅 구성을 정적 라우팅에서 BGP로 변경합니다. 고객 게이트웨이가 적절한 커뮤니티 문자열을 적용하여 트랜짓 게이트웨이가 ECMP 전달을 수행할 수 있도록 합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 237,
        "question": "A finance company runs multiple applications on Amazon EC2 instances in two VPCs that are within a single AWS Region. The company uses one\nVPC for stock trading applications. The company uses the second VPC for financial applications. Both VPCs are connected to a transit gateway\nthat is configured as a multicast router.\nIn the stock trading VPC, an EC2 instance that has an IP address of 10.128.10.2 sends trading data over a multicast network to the 239.10.10.10\nIP address on UDP Port 5102. The company recently launched two new EC2 instances in the financial application VPC. The new EC2 instances\nneed to receive the multicast stock trading data from the EC2 instance that is in the stock trading VPC.\nWhich combination of steps should the company take to meet this requirement? (Choose three.)",
        "options": [
            "A. Add the elastic network interfaces of the two new EC2 instances as members of the multicast group by using the group IP address of\n239.10.10.10.",
            "B. Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows:\nProtocol: IGMP Version 2. Port: 5102, and Source: 239 10.10.10/32",
            "C. Create associations to two EC2 instance IDs on the financial application VPC transit gateway attachment under the transit gateway\nmulticast domain.",
            "D. Create an association to EC2 instance subnets on the financial application VPC transit gateway attachment under the transit gateway\nmulticast domain.",
            "D. Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows:\nProtocol: IGMP Version 2. Port: All, and Source: 0 0.0.0/32",
            "E. Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows.\nProtocol: UDP, Port: 5102, and Source: 10.128.10.2/32"
        ],
        "answers": [
            "A",
            "D"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: AD (91%) 9%",
        "question_ko": "금융 회사는 단일 AWS 리전 내의 두 VPC에서 Amazon EC2 인스턴스를 사용하여 여러 애플리케이션을 실행합니다. 회사는 주식 거래 애플리케이션용으로 VPC 하나를, 금융 애플리케이션용으로 두 번째 VPC를 사용합니다. 두 VPC 모두 멀티캐스트 라우터로 구성된 트랜짓 게이트웨이에 연결되어 있습니다.\n주식 거래 VPC에서 IP 주소가 10.128.10.2인 EC2 인스턴스가 UDP 포트 5102의 239.10.10.10 IP 주소로 멀티캐스트 네트워크를 통해 거래 데이터를 전송합니다. 회사는 최근 금융 애플리케이션 VPC에 두 개의 새 EC2 인스턴스를 시작했습니다. 새 EC2 인스턴스는 주식 거래 VPC의 EC2 인스턴스에서 보내는 멀티캐스트 거래 데이터를 수신해야 합니다.\n이 요구 사항을 충족하기 위해 회사가 취해야 할 조치는 무엇입니까? (3가지를 선택하세요.)",
        "options_ko": [
            "A. 두 개의 새 EC2 인스턴스의 탄력적 네트워크 인터페이스를 239.10.10.10 그룹 IP 주소를 사용하여 멀티캐스트 그룹의 구성원으로 추가합니다.",
            "B. 멀티캐스트 수신기 인스턴스에 연결된 보안 그룹에 수신 규칙을 추가합니다. 다음과 같이 규칙을 구성합니다.\n프로토콜: IGMP 버전 2, 포트: 5102, 소스: 239.10.10.10/32",
            "C. 금융 애플리케이션 VPC 트랜짓 게이트웨이 연결 아래의 트랜짓 게이트웨이 멀티캐스트 도메인에 두 개의 EC2 인스턴스 ID 연결을 생성합니다.",
            "D. 금융 애플리케이션 VPC 트랜짓 게이트웨이 연결 아래의 트랜짓 게이트웨이 멀티캐스트 도메인에 EC2 인스턴스 서브넷 연결을 생성합니다.",
            "E. 멀티캐스트 수신기 인스턴스에 연결된 보안 그룹에 수신 규칙을 추가합니다. 다음과 같이 규칙을 구성합니다.\n프로토콜: UDP, 포트: 5102, 소스: 10.128.10.2/32"
        ],
        "explanation_ko": "커뮤니티 투표: AD (91%) 9%"
    },
    {
        "num": 238,
        "question": "A company runs workloads in multiple VPCs in the us-east-1 Region. The VPCs are connected to a transit gateway. An AWS Direct Connect\nconnection provides private connectivity between a data center that is in the US and the transit gateway. A Direct Connect gateway is associated\nwith the transit gateway.\nThe company has recently opened a new office location in London. The company plans to launch cloud services in multiple VPCs in the eu-west-2\nRegion. Users in the new London office must have private access to the workloads that run in us-east-1. Users in the US data center must have\naccess to any workloads that are created in eu-west-2. A network engineer must implement a flexible solution that provides users the required\naccess. The solution must be able to accommodate future growth.\nWhich solution will meet these requirements with the LEAST operational effort?",
        "options": [
            "A. Create an AWS Site-to-Site VPN connection from the London office to the Direct Connect gateway in us-east-1.",
            "B. Establish a new Direct Connect connection for the London office. Attach the new Direct Connect connection to the existing Direct Connect\ngateway. Create a transit gateway in eu-west-2. Associate the new transit gateway with the existing Direct Connect gateway. Create a peering\nconnection between the transit gateways in us-east-1 and eu-west-2.",
            "C. Create an AWS Site-to-Site VPN connection from the London office to each of the VPCs that are in us-east-1.",
            "D. Establish a new AWS Direct Connect connection for the London office Create a new Direct Connect gateway and a transit gateway in eu-\nwest-2. Attach the new Direct Connect connection to the new Direct Connect gateway. Create a peering connection between the transit\ngateways in us-east-1 and eu-west-2."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 us-east-1 리전에서 여러 VPC에서 워크로드를 실행합니다. VPC는 트랜짓 게이트웨이에 연결되어 있습니다. AWS Direct Connect 연결을 통해 미국의 데이터 센터와 트랜짓 게이트웨이 간에 프라이빗 연결이 제공됩니다. Direct Connect 게이트웨이가 트랜짓 게이트웨이와 연결되어 있습니다.\n회사는 최근 런던에 새 사무소를 열었습니다. 회사는 eu-west-2 리전에서 여러 VPC에 클라우드 서비스를 시작할 계획입니다. 런던 사무소의 사용자는 us-east-1에서 실행되는 워크로드에 프라이빗 액세스를 해야 합니다. 미국 데이터 센터의 사용자는 eu-west-2에서 생성된 모든 워크로드에 액세스할 수 있어야 합니다. 네트워크 엔지니어는 향후 성장을 수용할 수 있는 유연한 솔루션을 구현해야 합니다.\n운영 효력을 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 런던 사무소와 us-east-1의 Direct Connect 게이트웨이 사이에 AWS Site-to-Site VPN 연결을 생성합니다.",
            "B. 런던 사무소에 새 Direct Connect 연결을 설정합니다. 새 Direct Connect 연결을 기존 Direct Connect 게이트웨이에 연결합니다. eu-west-2에 새 트랜짓 게이트웨이를 생성합니다. 새 트랜짓 게이트웨이를 기존 Direct Connect 게이트웨이와 연결합니다. us-east-1과 eu-west-2의 트랜짓 게이트웨이 간에 피어링 연결을 생성합니다.",
            "C. 런던 사무소와 us-east-1의 각 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다.",
            "D. 런던 사무소에 새 AWS Direct Connect 연결을 설정합니다. eu-west-2에 새 Direct Connect 게이트웨이와 새 트랜짓 게이트웨이를 생성합니다. 새 Direct Connect 연결을 새 Direct Connect 게이트웨이에 연결합니다. us-east-1과 eu-west-2의 트랜짓 게이트웨이 간에 피어링 연결을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 239,
        "question": "A company has 10 Amazon EC2 instances that run web server software in a production VPC. The company also has 10 web servers that run in an\non-premises data center. The company has a 10 Gbps AWS Direct Connect connection between the on-premises data center and the production\nVPC. The data center uses the 10.100.0.0/20 CIDR block.\nThe company needs to implement a load balancing solution that receives HTTPS traffic from thousands of external users. The solution must\ndistribute the traffic across the web servers on AWS and the web servers in the data center. Regardless of the location of the web servers, HTTPS\nrequests must go to the same web server for the duration of the session.\nWhich solution will meet these requirements?",
        "options": [
            "A. Deploy a Network Load Balancer (NLB) in the production VPC. Create one target group for the EC2 Instances and a second target group for\nthe on-premises servers. Specify IP as the target type. Register the EC2 instances and the on-premises servers with the target groups. Enable\nconnection draining on the NLB.",
            "B. Deploy an Application Load Balancer (ALB) in the production VPC. Create one target group for the EC2 Instances and a second target group\nfor the on-premises servers. Specify IP as the target type. Register the EC2 instances and the on-premises servers with the target groups.\nEnable application-based sticky sessions on the ALB.",
            "C. Deploy a Network Load Balancer (NLB) in the production VPCreate one target group for the EC2 Instances and a second target group for\nthe on-premises servers. Specify instance as the target type. Register the EC2 instances and the on-premises servers with the target groups.\nEnable sticky sessions on the NLB.",
            "D. Deploy an Application Load Balancer (ALB) in the production VPC. Create one target group for the EC2 Instances and a second target group\nfor the on-premises servers. Specify instance as the target type. Register the EC2 instances and the on-premises servers with the target\ngroups. Enable application-based sticky sessions on the ALB."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 프로덕션 VPC에서 웹 서버 소프트웨어를 실행하는 Amazon EC2 인스턴스 10개와 온프레미스 데이터 센터에서 실행되는 웹 서버 10개를 보유하고 있습니다. 회사는 온프레미스 데이터 센터와 프로덕션 VPC 간에 10Gbps AWS Direct Connect 연결을 보유하고 있습니다. 데이터 센터는 10.100.0.0/20 CIDR 블록을 사용합니다.\n회사는 수천 명의 외부 사용자로부터 HTTPS 트래픽을 수신하고 AWS와 데이터 센터의 웹 서버에 걸쳐 트래픽을 분산시키는 로드 밸런싱 솔루션을 구현해야 합니다. 웹 서버의 위치에 관계없이 HTTPS 요청은 세션 지속 시간 동안 동일한 웹 서버로 전송되어야 합니다.\n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 프로덕션 VPC에 Network Load Balancer(NLB)를 배포합니다. EC2 인스턴스용 대상 그룹과 온프레미스 서버용 대상 그룹을 각각 생성합니다. 대상 유형으로 IP를 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 연결 드레이닝을 활성화합니다.",
            "B. 프로덕션 VPC에 Application Load Balancer(ALB)를 배포합니다. EC2 인스턴스용 대상 그룹과 온프레미스 서버용 대상 그룹을 각각 생성합니다. 대상 유형으로 IP를 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 지속성을 활성화합니다.",
            "C. 프로덕션 VPC에 Network Load Balancer(NLB)를 배포합니다. EC2 인스턴스용 대상 그룹과 온프레미스 서버용 대상 그룹을 각각 생성합니다. 대상 유형으로 인스턴스를 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 세션 지속성을 활성화합니다.",
            "D. 프로덕션 VPC에 Application Load Balancer(ALB)를 배포합니다. EC2 인스턴스용 대상 그룹과 온프레미스 서버용 대상 그룹을 각각 생성합니다. 대상 유형으로 인스턴스를 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 지속성을 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 240,
        "question": "A global company is establishing network connections between the company's primary and secondary data centers and a VPC. A network\nengineer needs to maximize resiliency and fault tolerance for the connections. The network bandwidth must be greater than 10 Gbps.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Set up a 100 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up a second 100 Gbps\nconnection at the secondary data center that terminates at a second Direct Connect location. Ensure the connections are managed by\nseparate providers.",
            "B. Set up a 10 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up a second 10 Gbps\nconnection at the secondary data center that terminates at a second Direct Connect location. Ensure the connections are managed by\nseparate providers.",
            "C. Set up two 10 Gbps connections at the primary data center that terminate at one AWS Direct Connect location. Ensure the connections are\nmanaged by separate providers. Set up two 10 Gbps connections at the secondary data center that terminate at a second Direct Connect\nlocation. Ensure the connections are managed by separate providers.",
            "D. Set up a 10 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up an AWS Site-to-Site VPN\nconnection at the secondary data center that terminates at a virtual private gateway in the same Region as the company’s VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (80%) B (20%)",
        "question_ko": "글로벌 기업이 주 데이터 센터와 보조 데이터 센터, VPC 간의 네트워크 연결을 구축하고 있습니다. 네트워크 엔지니어는 연결의 탄력성과 내결함성을 극대화해야 합니다. 네트워크 대역폭은 10Gbps 이상이어야 합니다.\n가장 비용 효율적으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 주 데이터 센터에 100Gbps 연결을 설정하여 AWS Direct Connect 위치에 종료시킵니다. 보조 데이터 센터에 두 번째 100Gbps 연결을 설정하여 다른 Direct Connect 위치에 종료시킵니다. 각 연결이 다른 공급업체에 의해 관리되도록 합니다.",
            "B. 주 데이터 센터에 10Gbps 연결을 설정하여 AWS Direct Connect 위치에 종료시킵니다. 보조 데이터 센터에 두 번째 10Gbps 연결을 설정하여 다른 Direct Connect 위치에 종료시킵니다. 각 연결이 다른 공급업체에 의해 관리되도록 합니다.",
            "C. 주 데이터 센터에 두 개의 10Gbps 연결을 설정하여 하나의 AWS Direct Connect 위치에 종료시킵니다. 각 연결이 다른 공급업체에 의해 관리되도록 합니다. 보조 데이터 센터에 두 개의 10Gbps 연결을 설정하여 다른 Direct Connect 위치에 종료시킵니다. 각 연결이 다른 공급업체에 의해 관리되도록 합니다.",
            "D. 주 데이터 센터에 10Gbps 연결을 설정하여 AWS Direct Connect 위치에 종료시킵니다. 보조 데이터 센터에 AWS Site-to-Site VPN 연결을 설정하여 회사 VPC와 동일한 리전의 가상 프라이빗 게이트웨이에 종료시킵니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (80%) B (20%)"
    },
    {
        "num": 241,
        "question": "A company’s data center is connected to a single AWS Region by an AWS Direct Connect dedicated connection. The company has a single VPC in\nthe Region. The company stores logs for all its applications locally in the data center.\nThe company must keep all application logs for 7 years. The company decides to copy all application logs to an Amazon S3 bucket.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a public VIF on the Direct Connect connection. Create an Amazon S3 gateway endpoint in the VPC.",
            "B. Create a private VIF on the Direct Connect connection. Create an Amazon S3 gateway endpoint in the VPC.",
            "C. Create a private VIF on the Direct Connect connection. Create an Amazon S3 interface endpoint in the VPC.",
            "D. Create a public VIF on the Direct Connect connection. Create an Amazon S3 interface endpoint in the VPC."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (55%) B (25%) A (20%)",
        "question_ko": "단일 AWS 리전에 있는 단일 VPC에 데이터 센터가 AWS Direct Connect 전용 연결로 연결되어 있는 회사가 있습니다. 회사는 모든 애플리케이션 로그를 로컬 데이터 센터에 저장하고 있습니다. 회사는 모든 애플리케이션 로그를 7년 동안 보관해야 합니다. 회사는 모든 애플리케이션 로그를 Amazon S3 버킷에 복사하기로 결정했습니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Direct Connect 연결에 퍼블릭 VIF를 만들고 VPC에 Amazon S3 게이트웨이 엔드포인트를 만듭니다.",
            "B. Direct Connect 연결에 프라이빗 VIF를 만들고 VPC에 Amazon S3 게이트웨이 엔드포인트를 만듭니다.",
            "C. Direct Connect 연결에 프라이빗 VIF를 만들고 VPC에 Amazon S3 인터페이스 엔드포인트를 만듭니다.",
            "D. Direct Connect 연결에 퍼블릭 VIF를 만들고 VPC에 Amazon S3 인터페이스 엔드포인트를 만듭니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (55%) B (25%) A (20%)"
    },
    {
        "num": 242,
        "question": "A company is planning to host a secure web application across multiple Amazon EC2 instances. The application will have an associated DNS\ndomain in an Amazon Route 53 hosted zone.\nThe company wants to protect the domain from DNS poisoning attacks. The company also wants to allow web browsers to authenticate into the\napplication by using a trusted third party.\nWhich combination of actions will meet these requirements?",
        "options": [
            "A. Configure the Route 53 hosted zone to use DNS Security Extensions (DNSSEC). Install self-signed X.509 certificates on the EC2 instances.",
            "B. Configure a Name Authority Pointer (NAPTR) record in the Route 53 hosted zone. Install X 509 certificates that are signed by a public\ncertificate authority on the EC2 instances.",
            "C. Configure the Route 53 hosted zone to use DNS Security Extensions (DNSSEC). Install X.509 certificates that are signed by a public\ncertificate authority on the EC2 instances.",
            "D. Configure a Name Authority Pointer (NAPTR) record in the Route 53 hosted zone. Install self-signed X.509 certificates on the EC2\ninstances."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 여러 Amazon EC2 인스턴스에 걸쳐 안전한 웹 애플리케이션을 호스팅할 계획입니다. 이 애플리케이션에는 Amazon Route 53 호스팅 영역에 연결된 DNS 도메인이 있습니다. 회사는 도메인을 DNS 포이즌 공격으로부터 보호하고 웹 브라우저가 신뢰할 수 있는 타사를 사용하여 애플리케이션에 인증할 수 있도록 하려고 합니다. 이 요구 사항을 충족할 수 있는 조치 조합은 무엇입니까?",
        "options_ko": [
            "A. Route 53 호스팅 영역을 구성하여 DNS 보안 확장(DNSSEC)을 사용합니다. EC2 인스턴스에 자체 서명된 X.509 인증서를 설치합니다.",
            "B. Route 53 호스팅 영역에 NAPTR 레코드를 구성합니다. EC2 인스턴스에 공인 인증 기관이 서명한 X.509 인증서를 설치합니다.",
            "C. Route 53 호스팅 영역을 구성하여 DNS 보안 확장(DNSSEC)을 사용합니다. EC2 인스턴스에 공인 인증 기관이 서명한 X.509 인증서를 설치합니다.",
            "D. Route 53 호스팅 영역에 NAPTR 레코드를 구성합니다. EC2 인스턴스에 자체 서명된 X.509 인증서를 설치합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 243,
        "question": "A company is planning to use an AWS Transit Gateway hub and spoke architecture to migrate to AWS. The current on-premises multi-protocol\nlabel switching (MPLS) network has strict controls that enforce network segmentation by using MPLS VPNs. The company has provisioned two 10\nGbps AWS Direct Connect connections to provide resilient, high-speed, low-latency connectivity to AWS.\nA security engineer needs to apply the concept of network segmentation to the AWS environment to ensure that virtual routing and forwarding\n(VRF) is logically separated for each of the company's software development environments. The number of MPLS VPNs will increase in the future.\nOn-premises MPLS VPNs will have overlapping address space. The company's AWS network design must support overlapping address space for\nthe VPNs.\nWhich solution will meet these requirements with the LEAST operational overhead?",
        "options": [
            "A. Deploy a software-defined WAN (SD-WAN) head-end virtual appliance and an SD-WAN controller into a Transit Gateway Connect VPC.\nConfigure the company's edge routers to be managed by the new SD-WAN controller and to use SD-WAN to segment the traffic into the defined\nsegments for each of the company's development environments.",
            "B. Configure IPsec VPNs on the company edge routers for each MPLS VPN for each of the company's development environments. Attach each\nIPsec VPN tunnel to a discrete MPLS VPN. Configure AWS Site-to-Site VPN connections that terminate at a transit gateway for each MPLS\nVPN. Configure a transit gateway route table that matches the MPLS VPN for each Transit Gateway VPN attachment.",
            "C. Create a transit VPC that terminates at the AWS Site-to-Site VRF-aware IPsec VPN. Configure IPsec VPN connections to each VPC for each\nof the company's development environment VRFs.",
            "D. Configure a Transit Gateway Connect attachment for each MPLS VPN between the company's edge routers and Transit Gateway. Configure\na transit gateway route table that matches the MPLS VPN for each of the company's development environments."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 AWS Transit Gateway 허브 및 스포크 아키텍처를 사용하여 AWS로 마이그레이션할 계획입니다. 현재 온프레미스 MPLS(Multi-Protocol Label Switching) 네트워크에는 MPLS VPN을 사용하여 네트워크 분할을 강제하는 엄격한 제어가 있습니다. 회사는 안정적이고 고속이며 지연 시간이 짧은 연결성을 제공하기 위해 2개의 10Gbps AWS Direct Connect 연결을 프로비저닝했습니다.\n보안 엔지니어는 각 소프트웨어 개발 환경에 대해 가상 라우팅 및 포워딩(VRF)이 논리적으로 구분되도록 AWS 환경에 네트워크 분할 개념을 적용해야 합니다. MPLS VPN의 수는 미래에 늘어날 것입니다. 온프레미스 MPLS VPN은 겹치는 주소 공간을 가질 것입니다. 회사의 AWS 네트워크 설계는 VPN에 대한 겹치는 주소 공간을 지원해야 합니다. 운영 오버헤드를 최소화하는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Transit Gateway Connect VPC에 소프트웨어 정의 WAN(SD-WAN) 헤드엔드 가상 어플라이언스와 SD-WAN 컨트롤러를 배포합니다. 회사 엣지 라우터를 새로운 SD-WAN 컨트롤러에서 관리하도록 구성하고 각 개발 환경에 대해 정의된 세그먼트로 트래픽을 세그먼트화하는 데 SD-WAN을 사용하도록 구성합니다.",
            "B. 각 개발 환경에 대한 각 MPLS VPN에 대해 회사 엣지 라우터에 IPsec VPN을 구성합니다. 각 IPsec VPN 터널을 별도의 MPLS VPN에 연결합니다. 각 MPLS VPN에 대해 트랜짓 게이트웨이에 종료되는 AWS Site-to-Site VPN 연결을 구성합니다. 각 Transit Gateway VPN 연결에 일치하는 트랜짓 게이트웨이 라우팅 테이블을 구성합니다.",
            "C. VRF 인식 IPsec VPN에 종료되는 트랜짓 VPC를 만듭니다. 회사의 각 개발 환경 VRF에 대한 각 VPC에 IPsec VPN 연결을 구성합니다.",
            "D. 회사 엣지 라우터와 트랜짓 게이트웨이 간에 각 MPLS VPN에 대한 Transit Gateway Connect 연결을 구성합니다. 각 개발 환경에 일치하는 MPLS VPN에 대한 트랜짓 게이트웨이 라우팅 테이블을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 244,
        "question": "A company is planning to migrate to AWS and use multiple VPCs in multiple AWS Regions. A network engineer must connect the eu-west-1 and eu-\ncentral-1 Regions to the company headquarters and branch office, respectively.\nThe network engineer created a production VPC, named Prod A, with a CIDR block of 10.0.0.0/16. Prod A runs in an account in eu-west-1. The\nnetwork engineer then created another production VPC, named Prod B, with a CIDR block of 10.1.0.0/16. Prod В runs in a different account in eu-\ncentral-1.\nThe network engineer performed the following steps to try to achieve the required connectivity:\n1. Created one transit gateway in each Region\n2. Shared and accepted the transit gateways with the production accounts in both Regions\n3. Configured the peering attachment between both transit gateways\n4. Attached both VPCs to the respective Region transit gateway\n5. Created both transit gateway route tables and associated the attachments with the route tables\n6. Configured a static route in both transit gateway route tables to send traffic to the remote VPC in the other Region\n7. Activated route propagation on the VPC route tables in each Region\nAfter the configuration, the network engineer tried to connect from Prod A to Prod B. However, the connection was unsuccessful.\nWhat should the network engineer do to achieve the required connectivity?",
        "options": [
            "A. Modify the IP address of the peering attachment to a wider range.",
            "B. Delete the static routes that were in the transit gateway route table to send traffic to the remote VPC and enable route propagation instead.",
            "C. Create a new route destined to 10.0.0.0/8 in both production VPC route tables with the Region transit gateway as the target.",
            "D. Modify the transit gateway route tables from the production accounts to propagate routes dynamically between the production VPCs."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사는 AWS로 마이그레이션하고 여러 AWS 리전에 여러 VPC를 사용할 계획입니다. 네트워크 엔지니어는 eu-west-1 및 eu-central-1 리전을 각각 회사 본사와 지사에 연결해야 합니다.\n네트워크 엔지니어는 CIDR 블록이 10.0.0.0/16인 Prod A라는 프로덕션 VPC를 eu-west-1 계정에 만들었습니다. 그런 다음 CIDR 블록이 10.1.0.0/16인 Prod B라는 다른 프로덕션 VPC를 eu-central-1 계정에 만들었습니다.\n네트워크 엔지니어는 필요한 연결을 달성하려고 다음과 같은 단계를 수행했습니다.\n1. 각 리전에 하나의 Transit Gateway를 만들었습니다.\n2. 두 프로덕션 계정에서 Transit Gateway를 공유하고 수락했습니다.\n3. 두 Transit Gateway 간에 피어링 연결을 구성했습니다.\n4. 두 VPC를 각각의 리전 Transit Gateway에 연결했습니다.\n5. 두 Transit Gateway 라우팅 테이블을 만들고 연결을 연관시켰습니다.\n6. 두 Transit Gateway 라우팅 테이블에 원격 VPC로 트래픽을 전송하는 정적 경로를 구성했습니다.\n7. 각 리전의 VPC 라우팅 테이블에서 경로 전파를 활성화했습니다.\n구성 후 Prod A에서 Prod B로 연결을 시도했지만 연결이 되지 않았습니다. 필요한 연결을 달성하려면 네트워크 엔지니어가 어떤 조치를 취해야 합니까?",
        "options_ko": [
            "A. 피어링 연결의 IP 주소를 더 넓은 범위로 수정합니다.",
            "B. 원격 VPC로 트래픽을 보내는 Transit Gateway 라우팅 테이블의 정적 경로를 삭제하고 대신 경로 전파를 활성화합니다.",
            "C. 두 프로덕션 VPC 라우팅 테이블에 10.0.0.0/8 대상의 새 경로를 만들고 대상을 리전 Transit Gateway로 설정합니다.",
            "D. 프로덕션 계정에서 Transit Gateway 라우팅 테이블을 수정하여 프로덕션 VPC 간에 경로를 동적으로 전파합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 245,
        "question": "A company hosts an application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Amazon EC2\nAuto Scaling group.\nTo comply with new security standards, the company must capture all application access data, including server response codes, request paths,\nlatency, and client IP addresses. The company also needs to query the captured data for performance analysis.\nWhich solution will meet these requirements?",
        "options": [
            "A. Enable VPC flow logs on the ALB subnets. Store the logs to an Amazon S3 bucket. Query the logs in the S3 bucket by using Amazon\nAthena.",
            "B. Configure Amazon VPC Traffic Mirroring on all EC2 elastic network interfaces. Deploy a third-party monitoring appliance from AWS\nMarketplace in a private subnet. Use Amazon Data Firehose to send all mirrored traffic to the monitoring appliance. Query the logs directly\nfrom the monitoring appliance.",
            "C. Configure Amazon CloudWatch detailed monitoring on the EC2 instances Include all available logs. Use Amazon Data Firehose to send all\nthe collected logs to an Amazon S3 bucket. Query the data directly from the S3 bucket.",
            "D. Enable access logs on the ALB. Store the logs in an Amazon S3 bucket. Query the logs in the S3 bucket by using Amazon Athena."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 Application Load Balancer(ALB) 뒤에 Amazon EC2 인스턴스에 애플리케이션을 호스팅합니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹의 일부입니다.\n새로운 보안 기준을 준수하기 위해 회사는 서버 응답 코드, 요청 경로, 대기 시간 및 클라이언트 IP 주소를 포함한 모든 애플리케이션 액세스 데이터를 캡처해야 합니다. 회사는 또한 성능 분석을 위해 캡처된 데이터를 쿼리해야 합니다.\n이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. ALB 서브넷에서 VPC 흐름 로그를 활성화합니다. 로그를 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 S3 버킷의 로그를 쿼리합니다.",
            "B. 모든 EC2 탄력적 네트워크 인터페이스에서 Amazon VPC Traffic Mirroring을 구성합니다. 프라이빗 서브넷에 AWS Marketplace의 타사 모니터링 어플라이언스를 배포합니다. Amazon Data Firehose를 사용하여 미러링된 모든 트래픽을 모니터링 어플라이언스로 전송합니다. 모니터링 어플라이언스에서 로그를 직접 쿼리합니다.",
            "C. EC2 인스턴스에서 Amazon CloudWatch 세부 모니터링을 구성합니다. 사용 가능한 모든 로그를 포함합니다. Amazon Data Firehose를 사용하여 수집된 모든 로그를 Amazon S3 버킷으로 전송합니다. S3 버킷에서 데이터를 직접 쿼리합니다.",
            "D. ALB에 액세스 로그를 활성화합니다. 로그를 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 S3 버킷의 로그를 쿼리합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 246,
        "question": "A company has five VPCs in the us-east-1 Region. The company hosts an internal web application in us-east-1. One of the company's VPCs.\nnamed VPC-A, needs to connect to an external partner's AWS environment. The partner’s environment is in the same AWS Region where the\npartner hosts a new version of the company's web application. The partner hosts its version of the application in a VPC named VPC-B.\nThe company has Amazon EC2 instances in VPC-A that need to connect to the web application in VPC-B A network engineer notices that the\npartner's VPC-B and the company's VPC-A use the same IP space. The network engineer needs a solution to allow the EC2 instances to connect to\nthe web application. The solution must not negatively affect the exiting environment of the company or the partner.\nWhich combination of steps should the network engineer take meet these requirements? (Choose two.)",
        "options": [
            "A. Establish a VPC peering connection between VPC-A to VPC-B.",
            "B. Ensure the partner creates a VPC endpoint service that uses a Network Load Balancer in VPC-B.",
            "C. Deploy a VPC endpoint in VPC-A that uses a VPC endpoint service that is shared by the partner.",
            "D. Deploy a new routable VPC CIDR block as a secondary CIDR block to both VPC-A and VPC-B. Deploy a public NAT gateway in VPC-A.",
            "E. Establish an AWS Site-to-Site VPN connection between VPC-A and VPC-B."
        ],
        "answers": [
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BC (100%)",
        "question_ko": "회사에는 us-east-1 리전에 5개의 VPC가 있습니다. 회사는 us-east-1 리전에 내부 웹 애플리케이션을 호스팅하고 있습니다. 회사의 VPC 중 하나인 VPC-A는 외부 파트너의 AWS 환경에 연결해야 합니다. 파트너의 환경은 회사 웹 애플리케이션의 새 버전을 호스팅하는 동일한 AWS 리전에 있습니다. 파트너는 VPC-B에서 애플리케이션의 버전을 호스팅하고 있습니다. 회사의 VPC-A에 있는 Amazon EC2 인스턴스는 VPC-B의 웹 애플리케이션에 연결해야 합니다. 네트워크 엔지니어는 파트너의 VPC-B와 회사의 VPC-A가 동일한 IP 공간을 사용한다는 것을 알아냈습니다. 네트워크 엔지니어는 EC2 인스턴스가 웹 애플리케이션에 연결될 수 있는 솔루션이 필요합니다. 이 솔루션은 회사 또는 파트너의 기존 환경에 부정적인 영향을 미치지 않아야 합니다.",
        "options_ko": [
            "A. VPC-A와 VPC-B 사이에 VPC 피어링 연결을 설정합니다.",
            "B. 파트너가 Network Load Balancer를 사용하는 VPC 엔드포인트 서비스를 만들도록 합니다.",
            "C. VPC-A에 VPC 엔드포인트를 배포하여 파트너의 공유 VPC 엔드포인트 서비스를 사용합니다.",
            "D. VPC-A와 VPC-B에 새로운 라우팅 가능한 VPC CIDR 블록을 보조 CIDR 블록으로 배포합니다. VPC-A에 퍼블릭 NAT 게이트웨이를 배포합니다.",
            "E. VPC-A와 VPC-B 사이에 AWS Site-to-Site VPN 연결을 설정합니다."
        ],
        "explanation_ko": "커뮤니티 투표: BC (100%)"
    },
    {
        "num": 247,
        "question": "A company has a hybrid environment that connects an on-premises data center to the AWS Cloud. The hybrid environment uses a 10 Gbps AWS\nDirect Connect dedicated connection. The Direct Connect connection has multiple private VIFs that terminate in multiple VPCs.\nTo comply with regulations, the company must encrypt all WAN traffic, regardless of the underlying transport. The company needs to implement\nan encryption solution that will not affect the company's bandwidth capacity.\nWhich solution will meet these requirements?",
        "options": [
            "A. Create a public VIF. Configure a new AWS Site-to-Site VPN connection to use the new public VIF.",
            "B. Configure MAC security (MACsec) support on the port of the existing Direct Connect connection. Change the encryption mode to\nmust_encrypt.",
            "C. Configure a new Direct Connect connection that supports MAC security (MACSec) Associate the existing VIFs to the new Direct Connect\nconnection.",
            "D. Create a public VIF. Configure a new private IP VPN that uses the Direct Connect connection."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "회사에는 온프레미스 데이터 센터와 AWS 클라우드를 연결하는 하이브리드 환경이 있습니다. 하이브리드 환경은 10Gbps AWS Direct Connect 전용 연결을 사용합니다. Direct Connect 연결에는 여러 개의 프라이빗 VIF가 있으며, 이는 여러 VPC에 종료됩니다. 규제 준수를 위해 회사는 기반 전송에 관계없이 모든 WAN 트래픽을 암호화해야 합니다. 회사는 대역폭 용량에 영향을 미치지 않는 암호화 솔루션을 구현해야 합니다.",
        "options_ko": [
            "A. 퍼블릭 VIF를 만들고 새로운 AWS Site-to-Site VPN 연결을 구성하여 새 퍼블릭 VIF를 사용합니다.",
            "B. 기존 Direct Connect 연결의 포트에서 MAC 보안(MACsec) 지원을 구성하고 암호화 모드를 must_encrypt로 변경합니다.",
            "C. MAC 보안(MACsec)을 지원하는 새 Direct Connect 연결을 구성하고 기존 VIF를 새 Direct Connect 연결에 연결합니다.",
            "D. 퍼블릭 VIF를 만들고 Direct Connect 연결을 사용하는 새 프라이빗 IP VPN을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 248,
        "question": "A company needs to capture and log traffic for Nitro-based Amazon EC2 instances to comply with regulations. The company's network team has\nprepared a solution that enables VPC traffic mirroring and sends traffic to a second set of EC2 instances in an Auto Scaling group.\nThe network team has added a Network Load Balancer (NLB) in front of the EC2 instances the traffic will be sent to. However, the solution does\nnot send any mirrored traffic to the EC2 instances that are behind the NLB.\nHow should the network team configure traffic mirroring to use the NLB endpoint?",
        "options": [
            "A. Select the NLB as a source for traffic mirroring. Use a UDP listener.",
            "B. Select the NLB as a target for traffic mirroring. Use a TCP listener and a UDP listener.",
            "C. Select the NLB as a target for traffic mirroring. Use a TCP listener.",
            "D. Select the NLB as a target for traffic mirroring. Use a UDP listener."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "회사는 규정 준수를 위해 Nitro 기반 Amazon EC2 인스턴스의 트래픽을 캡처하고 로깅해야 합니다. 네트워크 팀은 VPC 트래픽 미러링을 사용하고 트래픽을 두 번째 Auto Scaling 그룹의 EC2 인스턴스로 보내는 솔루션을 준비했습니다. 네트워크 팀은 트래픽이 전송될 EC2 인스턴스 앞에 Network Load Balancer(NLB)를 추가했습니다. 그러나 이 솔루션은 NLB 엔드포인트 뒤의 EC2 인스턴스로 미러링된 트래픽을 전송하지 않습니다. 네트워크 팀은 NLB 엔드포인트를 사용하도록 트래픽 미러링을 어떻게 구성해야 합니까?",
        "options_ko": [
            "A. 트래픽 미러링을 위한 소스로 NLB를 선택합니다. UDP 리스너를 사용합니다.",
            "B. 트래픽 미러링을 위한 대상으로 NLB를 선택합니다. TCP 리스너와 UDP 리스너를 사용합니다.",
            "C. 트래픽 미러링을 위한 대상으로 NLB를 선택합니다. TCP 리스너를 사용합니다.",
            "D. 트래픽 미러링을 위한 대상으로 NLB를 선택합니다. UDP 리스너를 사용합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 249,
        "question": "A US-based company is expanding its business to Europe. A network engineer needs to extend the company's network infrastructure by setting up\na new hub and spoke architecture in the eu-west-1 Region. The network engineer uses a transit gateway peering connection to connect the new\nresources in eu-west-1 to an existing environment in the us-east-1 Region.\nThe hub and spoke architecture in each AWS Region includes an inspection VPC that uses AWS Network Firewall to centralize traffic inspection for\neach Region. To reduce costs, the network engineer decides to inspect inter-Region traffic by using the inspection VPC in the Region that\noriginates the traffic. The network engineer configures the transit gateway route tables accordingly for each Region.\nWhen the network engineer tests the new architecture, communication within each Region works as expected. However, the network engineer\nfinds that inter-Region communication is not working. The network engineer must resolve the inter-Region communication issue.\nWhich solution will meet this requirement?",
        "options": [
            "A. Configure Open Shortest Path First (OSPF) routing on the transit gateway peering connection to propagate the VPC CIDR blocks from each\nRegion to the remote peer.",
            "B. Use AWS Resource Access Manager (AWS RAM) to share access between the transit gateways. Enable the Allow sharing with anyone\nsetting.",
            "C. Prevent asymmetric routing in the inspection VPCs by ensuring that both requests and responses are inspected by the same inspection\nVPC",
            "D. Enable Appliance mode on both the transit gateway attachments for the inspection VPC."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (100%)",
        "question_ko": "미국 기반 회사가 유럽 사업을 확장하고 있습니다. 네트워크 엔지니어는 eu-west-1 리전에 새로운 허브 앤 스포크 아키텍처를 설정하여 회사의 네트워크 인프라를 확장해야 합니다. 네트워크 엔지니어는 트랜짓 게이트웨이 피어링 연결을 사용하여 eu-west-1 리전의 새 리소스를 us-east-1 리전의 기존 환경에 연결합니다. 각 AWS 리전의 허브 앤 스포크 아키텍처에는 AWS Network Firewall을 사용하는 검사 VPC가 포함되어 각 리전의 트래픽 검사를 중앙화합니다. 비용 절감을 위해 네트워크 엔지니어는 트래픽이 시작된 리전의 검사 VPC를 사용하여 리전 간 트래픽을 검사하기로 결정했습니다. 네트워크 엔지니어는 각 리전의 트랜짓 게이트웨이 라우팅 테이블을 그에 따라 구성했습니다. 새 아키텍처를 테스트할 때 각 리전 내의 통신은 예상대로 작동하지만 리전 간 통신이 작동하지 않습니다. 네트워크 엔지니어는 리전 간 통신 문제를 해결해야 합니다.",
        "options_ko": [
            "A. 트랜짓 게이트웨이 피어링 연결에서 Open Shortest Path First(OSPF) 라우팅을 구성하여 각 리전의 VPC CIDR 블록을 원격 피어에 전파합니다.",
            "B. AWS Resource Access Manager(AWS RAM)를 사용하여 트랜짓 게이트웨이 간에 액세스를 공유합니다. 'Any'와 공유 허용 설정을 활성화합니다.",
            "C. 요청과 응답이 동일한 검사 VPC에 의해 검사되도록 하여 검사 VPC에서 비대칭 라우팅을 방지합니다.",
            "D. 두 트랜짓 게이트웨이 연결에 대해 Appliance 모드를 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (100%)"
    },
    {
        "num": 250,
        "question": "A company runs applications in two VPCs that are in separate AWS Regions. One VPC is in the us-east-1 Region. The second VPC is in the us-\nwest-1 Region. The company needs to establish connectivity between the two VPCs. The company also needs to connect the VPCs to applications\nthat run in an on-premises data center.\nThe current traffic requirement between the VPCs is 50 ТВ per month. The company expects traffic volume between the VPCs to increase. The\ntraffic requirement from the VPCs to the on-premises data center is 10 ТВ per month. The company expects the traffic between the VPCs and the\ndata center to remain constant.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Create a transit gateway in each Region. Create VPN connections from the transit gateways to the on-premises firewall. Create a peering\nconnection between the transit gateways.",
            "B. Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways.\nConfigure the on-premises firewall to route the traffic between the two VPCs.",
            "C. Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways.\nCreate a VPC peering connection between the two VPCs.",
            "D. Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways.\nCreate a VPN connection between the virtual private gateways."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (75%) A (25%)",
        "question_ko": "회사는 별도의 AWS 리전에 있는 두 VPC에서 애플리케이션을 실행하고 있습니다. 한 VPC는 us-east-1 리전에, 다른 VPC는 us-west-1 리전에 있습니다. 회사는 두 VPC 간의 연결성을 설정하고 VPC와 온프레미스 데이터 센터에서 실행되는 애플리케이션을 연결해야 합니다. VPC 간 현재 트래픽 요구 사항은 월 50TB입니다. 회사는 VPC 간 트래픽 볼륨이 증가할 것으로 예상합니다. VPC와 온프레미스 데이터 센터 간 트래픽 요구 사항은 월 10TB입니다. 회사는 VPC와 데이터 센터 간 트래픽이 일정할 것으로 예상합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 리전에 트랜짓 게이트웨이를 만들고 트랜짓 게이트웨이를 온프레미스 방화벽에 VPN 연결합니다. 두 트랜짓 게이트웨이 간에 피어링 연결을 생성합니다.",
            "B. 각 리전에 가상 프라이빗 게이트웨이를 만들고 온프레미스 방화벽을 가상 프라이빗 게이트웨이에 VPN 연결합니다. 온프레미스 방화벽을 구성하여 두 VPC 간 트래픽을 라우팅합니다.",
            "C. 각 리전에 가상 프라이빗 게이트웨이를 만들고 온프레미스 방화벽을 가상 프라이빗 게이트웨이에 VPN 연결합니다. 두 VPC 간에 VPC 피어링 연결을 만듭니다.",
            "D. 각 리전에 가상 프라이빗 게이트웨이를 만들고 온프레미스 방화벽을 가상 프라이빗 게이트웨이에 VPN 연결합니다. 가상 프라이빗 게이트웨이 간에 VPN 연결을 만듭니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (75%) A (25%)"
    },
    {
        "num": 251,
        "question": "A company runs workloads in multiple VPCs. The company needs to securely access a workload in one of the VPCs, named VPC-A, from an on-\npremises data center. A network engineer sets up an AWS Site-to-Site VPN connection to a transit gateway. The network engineer configures\ndynamic routing for the connection, and communication works properly.\nRecently, the owner of VPC-A added another CIDR range to the VPC. The VPC-A owner created workloads that use the additional CIDR range.\nThe company's on-premises network is unable to reach the new workloads. The network engineer needs to resolve the network connectivity issue\nand ensure that connectivity will not be affected if additional VPC CIDR ranges are added to the VPC in the future.\nWhich solution will meet these requirements with the MOST operational efficiency?",
        "options": [
            "A. Configure route propagation for VPC-A to the VPN attachment route table.",
            "B. Manually update the VPN attachment route table to include the new CIDR range.",
            "C. Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the rule to matches an update to the VPC-A CIDR range.\nConfigure the Lambda function to update the VPN attachment route table.",
            "D. Configure an Amazon CloudWatch alarm to invoke an AWS Lambda function when there is an update to the VPC-A CIDR range. Configure\nthe Lambda function to update the VPN attachment route table. Restart the VPN tunnels."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "여러 VPC에서 작업을 실행하는 회사입니다. 회사는 VPC-A라는 VPC에서 실행되는 작업에 온-프레미스 데이터 센터에서 안전하게 액세스해야 합니다. 네트워크 엔지니어는 AWS Site-to-Site VPN 연결을 전송 게이트웨이에 설정했습니다. 네트워크 엔지니어는 연결에 대해 동적 라우팅을 구성했으며 통신이 올바르게 작동합니다. 최근 VPC-A 소유자가 VPC에 다른 CIDR 범위를 추가했습니다. VPC-A 소유자는 추가 CIDR 범위를 사용하는 작업을 만들었습니다. 회사의 온-프레미스 네트워크는 새 작업에 액세스할 수 없습니다. 네트워크 엔지니어는 네트워크 연결 문제를 해결하고 향후 VPC CIDR 범위가 추가되더라도 연결이 영향을 받지 않도록 해야 합니다. 이러한 요구 사항을 가장 운영 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. VPC-A에 대한 경로 전파를 VPN 연결 경로 테이블에 구성하십시오.",
            "B. VPN 연결 경로 테이블을 수동으로 업데이트하여 새 CIDR 범위를 포함시키십시오.",
            "C. VPC-A CIDR 범위 업데이트와 일치하는 Amazon EventBridge 규칙을 구성하여 AWS Lambda 함수를 호출하십시오. Lambda 함수를 구성하여 VPN 연결 경로 테이블을 업데이트하십시오.",
            "D. VPC-A CIDR 범위 업데이트 시 트리거되는 Amazon CloudWatch 경보를 구성하여 AWS Lambda 함수를 호출하십시오. Lambda 함수를 구성하여 VPN 연결 경로 테이블을 업데이트하고 VPN 터널을 다시 시작하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 252,
        "question": "A company is migrating its internet VPN connections to dedicated AWS Direct Connect connections. The company needs to set up the Direct\nConnect connections so that all network communications are encrypted in transit.\nWhich combination of steps will meet this requirement? (Choose three.)",
        "options": [
            "A. Create new Direct Connect connections while requesting MACsec ports.",
            "B. Create a MACsec Connectivity Association Key Name (CKN) and Connectivity Association Key (CAK) pair. Associate the pair with each new\nconnection.",
            "C. Update the on-premises routers to use MACsec and the shared Connectivity Association Key Name (CKN) and Connectivity Association Key\n(CAK) pair.",
            "D. Create a shared key for an IPsec connection.",
            "E. Configure a new Direct Connect gateway. Associate the shared key with the new Direct Connect gateway.",
            "F. Set up IPsec on the on-premises router. Associate the shared key with the IPsec configuration."
        ],
        "answers": [
            "A",
            "B",
            "C"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ABC (100%)",
        "question_ko": "회사는 인터넷 VPN 연결을 전용 AWS Direct Connect 연결로 마이그레이션하고 있습니다. 회사는 모든 네트워크 통신이 전송 중에 암호화되도록 Direct Connect 연결을 설정해야 합니다. 이 요구 사항을 충족할 수 있는 조치 조합은 무엇입니까? (세 가지를 선택하십시오.)",
        "options_ko": [
            "A. MACsec 포트를 요청하면서 새 Direct Connect 연결을 만드십시오.",
            "B. MACsec Connectivity Association Key Name (CKN) 및 Connectivity Association Key (CAK) 쌍을 만들고 각 새 연결에 연결하십시오.",
            "C. 온-프레미스 라우터를 업데이트하여 MACsec을 사용하고 공유 Connectivity Association Key Name (CKN) 및 Connectivity Association Key (CAK) 쌍을 사용하십시오.",
            "D. IPsec 연결을 위한 공유 키를 만드십시오.",
            "E. 새 Direct Connect 게이트웨이를 설정하십시오. 새 Direct Connect 게이트웨이와 공유 키를 연결하십시오.",
            "F. 온-프레미스 라우터에 IPsec을 설정하십시오. IPsec 구성에 공유 키를 연결하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: ABC (100%)"
    },
    {
        "num": 253,
        "question": "A company has an application VPC and a networking VPC that are connected through VPC peering. The networking VPC contains a Network Load\nBalancer (NLB). The application VPC contains Amazon EC2 instances that run an application. The EC2 instances are part of a target group that is\nassociated with the NLB in the networking VPC.\nThe company configures a third VPC and peers it to the networking VPC. The new VPC contains a new version of the existing application. The new\nversion of the application runs on new EC2 instances in an application subnet. The new version of the application runs in a different Availability\nZone than that original version of the application.\nThe company needs to establish connectivity between the NLB and the new version of the application.\nWhich combination of steps will meet this requirement? (Choose three.)",
        "options": [
            "A. Register the new application EC2 instances with the NLB by using the instance IDs.",
            "B. Register the new application EC2 instances with the NLB by using instance IP addresses.",
            "C. Configure the NLB in the Availability Zone where the new application EC2 instances run.",
            "D. Configure the NLB to use zonal shift.",
            "E. Configure the network ACL for the application subnet in the new VPC to allow outbound connections.",
            "F. Configure the network ACL for the application subnet in the new VPC to allow inbound connections and outbound connections."
        ],
        "answers": [
            "B",
            "C",
            "F"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BCF (100%)",
        "question_ko": "회사에는 VPC 피어링을 통해 연결된 애플리케이션 VPC와 네트워킹 VPC가 있습니다. 네트워킹 VPC에는 Network Load Balancer(NLB)가 포함되어 있습니다. 애플리케이션 VPC에는 애플리케이션을 실행하는 Amazon EC2 인스턴스가 포함되어 있으며, 이들은 네트워킹 VPC의 NLB와 연결된 대상 그룹의 일부입니다. 회사는 네트워킹 VPC에 세 번째 VPC를 피어링합니다. 새 VPC에는 기존 애플리케이션의 새 버전이 포함되어 있으며, 새 버전의 애플리케이션은 다른 가용 영역에서 실행됩니다. 회사는 NLB와 새 애플리케이션 버전 간의 연결성을 구축해야 합니다. 이 요구 사항을 충족할 수 있는 조치 조합은 무엇입니까? (세 가지를 선택하십시오.)",
        "options_ko": [
            "A. 인스턴스 ID를 사용하여 새 애플리케이션 EC2 인스턴스를 NLB에 등록하십시오.",
            "B. 인스턴스 IP 주소를 사용하여 새 애플리케이션 EC2 인스턴스를 NLB에 등록하십시오.",
            "C. 새 애플리케이션 EC2 인스턴스가 실행되는 가용 영역에 NLB를 구성하십시오.",
            "D. NLB에 대해 구역 이동을 구성하십시오.",
            "E. 새 VPC의 애플리케이션 서브넷에 대한 네트워크 ACL을 구성하여 아웃바운드 연결을 허용하십시오.",
            "F. 새 VPC의 애플리케이션 서브넷에 대한 네트워크 ACL을 구성하여 인바운드 연결과 아웃바운드 연결을 허용하십시오."
        ],
        "explanation_ko": "커뮤니티 투표: BCF (100%)"
    },
    {
        "num": 254,
        "question": "A company uses AWS Site-to-Site VPN connections to encrypt traffic between the company's on-premises location and a single VPC. The Site-to-\nSite VPN connections use two 1 Gbps AWS Direct Connect connections with public VIFs. The company plans to add 15 additional VPCs in the\nsame AWS Region.\nThe company must maintain the same level of encryption that the Site-to-Site VPN connections currently provide for each connection between the\non-premises location and the new VPCs. The new connections must not use public IP addresses. The bandwidth of the Site-to-Site VPN\nconnections will remain less than the current provisioned speed.\nWhich combination of steps will meet these requirements with LEAST operational overhead? (Choose three.)",
        "options": [
            "A. Create a transit gateway and a Direct Connect gateway. Associate the transit gateway with the Direct Connect gateway. Attach all the new\nVPCs to the transit gateway.",
            "B. For each new VPC, create a new Direct Connect private VIF to a Direct Connect gateway. Associate all VPCs with the Direct Connect\ngateway.",
            "C. Assign a private IP CIDR block to the transit gateway.",
            "D. Assign a public IP CIDR block to the transit gateway.",
            "E. Create a transit VIF to the Direct Connect gateway. Create a Site-to-Site VPN private IP VPN connection.",
            "F. Create a public VICreate a Site-to-Site VPN public IP VPN connection."
        ],
        "answers": [
            "A",
            "C",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: ACE (100%)",
        "question_ko": "회사는 회사의 온-프레미스 위치와 단일 VPC 간 트래픽을 암호화하기 위해 AWS Site-to-Site VPN 연결을 사용합니다. Site-to-Site VPN 연결은 공용 VIF가 있는 두 개의 1Gbps AWS Direct Connect 연결을 사용합니다. 회사는 같은 AWS 리전에 15개의 추가 VPC를 추가할 계획입니다. 회사는 현재 Site-to-Site VPN 연결이 제공하는 것과 동일한 수준의 암호화를 새 VPC와의 각 연결에 유지해야 합니다. 새 연결은 공용 IP 주소를 사용하지 않아야 합니다. Site-to-Site VPN 연결의 대역폭은 현재 프로비저닝된 속도보다 낮은 상태로 유지됩니다. 운영 오버헤드가 가장 적은 조치 조합은 무엇입니까? (세 가지를 선택하십시오.)",
        "options_ko": [
            "A. 전송 게이트웨이와 Direct Connect 게이트웨이를 만드십시오. 전송 게이트웨이를 Direct Connect 게이트웨이와 연결하십시오. 새 VPC를 모두 전송 게이트웨이에 연결하십시오.",
            "B. 각 새 VPC에 대해 Direct Connect 개인 VIF를 Direct Connect 게이트웨이에 만드십시오. 모든 VPC를 Direct Connect 게이트웨이와 연결하십시오.",
            "C. 전송 게이트웨이에 개인 IP CIDR 블록을 할당하십시오.",
            "D. 전송 게이트웨이에 공용 IP CIDR 블록을 할당하십시오.",
            "E. Direct Connect 게이트웨이에 전송 VIF를 만드십시오. 개인 IP VPN 연결에 대해 Site-to-Site VPN을 만드십시오.",
            "F. 공용 VIF를 만들고 공용 IP VPN 연결에 대해 Site-to-Site VPN을 만드십시오."
        ],
        "explanation_ko": "커뮤니티 투표: ACE (100%)"
    },
    {
        "num": 255,
        "question": "A company hosts application servers on premises and on Amazon EC2 instances in a VPC. The application servers access data that is hosted in\nan Amazon S3 bucket through the public internet. The EC2 instances in the VPC use an AWS Site-to-Site VPN for connectivity with the on-premises\napplication servers.\nNew company regulations state that all traffic between the application servers and the S3 bucket must remain private and must not use public IP\naddresses.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Configure an S3 gateway endpoint Modify the route table with the appropriate route for the endpoint. Access the S3 bucket through the\ngateway endpoint from the EC2 instances.",
            "B. Configure an S3 interface endpoint. Update the on-premises servers and EC2 instances to use the interface endpoint DNS name to access\nthe S3 bucket.",
            "C. Configure an S3 interface endpoint. Update the on-premises servers to use the interface endpoint DNS name to access the S3 bucket.\nConfigure an S3 gateway endpoint. Modify the route table so that the EC2 instances use the gateway endpoint.",
            "D. Configure an S3 gateway endpoint. Modify the route table with the appropriate route for the endpoint. Use an S3 bucket policy to restrict\naccess to the gateway endpoint. Configure a proxy server fleet behind a Network Load Balancer in the VPC so that the on-premises servers\ncan access the S3 bucket."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (62%) B (38%)",
        "question_ko": "회사는 온-프레미스와 VPC의 Amazon EC2 인스턴스에서 애플리케이션 서버를 호스팅합니다. 애플리케이션 서버는 공용 인터넷을 통해 Amazon S3 버킷에 저장된 데이터에 액세스합니다. VPC의 EC2 인스턴스는 AWS Site-to-Site VPN을 통해 온-프레미스 애플리케이션 서버와 연결됩니다. 새로운 회사 규정에 따르면 애플리케이션 서버와 S3 버킷 간의 모든 트래픽은 비공개로 유지되어야 하며 공용 IP 주소를 사용할 수 없습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. S3 게이트웨이 엔드포인트를 구성합니다. 엔드포인트에 대한 적절한 경로로 라우팅 테이블을 수정합니다. EC2 인스턴스에서 게이트웨이 엔드포인트를 통해 S3 버킷에 액세스합니다.",
            "B. S3 인터페이스 엔드포인트를 구성합니다. 온-프레미스 서버와 EC2 인스턴스를 업데이트하여 인터페이스 엔드포인트 DNS 이름을 사용하여 S3 버킷에 액세스합니다.",
            "C. S3 인터페이스 엔드포인트를 구성합니다. 온-프레미스 서버를 업데이트하여 인터페이스 엔드포인트 DNS 이름을 사용하여 S3 버킷에 액세스합니다. S3 게이트웨이 엔드포인트를 구성하고 라우팅 테이블을 수정하여 EC2 인스턴스가 게이트웨이 엔드포인트를 사용하도록 합니다.",
            "D. S3 게이트웨이 엔드포인트를 구성합니다. 엔드포인트에 대한 적절한 경로로 라우팅 테이블을 수정합니다. S3 버킷 정책을 구성하여 게이트웨이 엔드포인트에 대한 액세스를 제한합니다. VPC의 Network Load Balancer 뒤에 프록시 서버 플릿을 구성하여 온-프레미스 서버가 S3 버킷에 액세스할 수 있도록 합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (62%) B (38%)"
    },
    {
        "num": 256,
        "question": "A company uses AWS Network Firewall to protect outgoing traffic for multiple VPCs that are in the same AWS account. Each VPC contains\nAmazon EC2 instances that host the company's applications. Each EC2 instance is tagged with the name of the application it hosts. The EC2\ninstances are in Auto Scaling groups.\nA Network Firewall stateful rule group must remain up-to-date, even when an Auto Scaling group launches and terminates EC2 instances.\nWhich solution will meet this requirement with the LEAST implementation and administrative effort?",
        "options": [
            "A. Create a network ACL for each application. Reference the network ACL in the stateful rule group.",
            "B. Create a prefix list for each application. Reference the prefix list in the stateful rule group.",
            "C. Create an AWS Lambda function that queries the EC2 instance tags for each application name and then updates the stateful rule group with\nthe IP address of each instance.",
            "D. Create a resource group for each application name. Reference the Amazon Resource Name (ARN) for the resource groups in the stateful\nrule group."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (62%) B (38%)",
        "question_ko": "AWS Network Firewall을 사용하여 동일한 AWS 계정의 여러 VPC의 아웃바운드 트래픽을 보호하는 회사가 있습니다. 각 VPC에는 회사의 애플리케이션을 호스팅하는 Amazon EC2 인스턴스가 포함되어 있습니다. 각 EC2 인스턴스는 호스팅하는 애플리케이션 이름으로 태그가 지정되어 있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. Network Firewall 상태 비저장 규칙 그룹은 Auto Scaling 그룹이 EC2 인스턴스를 시작하고 종료할 때도 최신 상태를 유지해야 합니다. 이 요구 사항을 가장 적은 구현 및 관리 노력으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 애플리케이션에 대한 네트워크 ACL을 생성하고 네트워크 ACL을 상태 비저장 규칙 그룹에 참조합니다.",
            "B. 각 애플리케이션에 대한 접두사 목록을 생성하고 접두사 목록을 상태 비저장 규칙 그룹에 참조합니다.",
            "C. 각 애플리케이션 이름에 대한 EC2 인스턴스 태그를 쿼리하고 상태 비저장 규칙 그룹에 각 인스턴스의 IP 주소를 업데이트하는 AWS Lambda 함수를 생성합니다.",
            "D. 각 애플리케이션 이름에 대한 리소스 그룹을 생성하고 상태 비저장 규칙 그룹에 리소스 그룹의 Amazon 리소스 이름(ARN)을 참조합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (62%) B (38%)"
    },
    {
        "num": 257,
        "question": "A company has multiple AWS Site-to-Site VPN connections between an on-premises environment and multiple VPCs. The Site-to-Site VPN\nconnections use virtual private gateways and are configured with IPv4 addresses. The company hosts several internal applications in the VPCs.\nApplication users have reported that the applications are performing slowly. A network engineer notices excessive latency in the network path\nthat the VPN connections use. The network engineer needs to resolve the excessive latency.\nWhich solution will meet this requirement?",
        "options": [
            "A. Use AWS Global Accelerator to deploy an accelerator on the existing Site-to-Site VPN connections.",
            "B. Deploy a transit gateway and a new accelerated Site-to-Site VPN connection.",
            "C. Replace the existing Site-to-Site VPN connections with new Site-to-Site VPN connections that use IPv6.",
            "D. Replace the existing Site-to-Site VPN connections with AWS PrivateLink connections."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사에는 온프레미스 환경과 여러 VPC 간의 다중 AWS Site-to-Site VPN 연결이 있습니다. Site-to-Site VPN 연결은 가상 프라이빗 게이트웨이를 사용하고 IPv4 주소로 구성됩니다. 회사는 VPC에 여러 내부 애플리케이션을 호스팅합니다. 애플리케이션 사용자가 애플리케이션 성능 저하를 보고했습니다. 네트워크 엔지니어는 VPN 연결이 사용하는 네트워크 경로에 과도한 지연 시간이 있음을 확인했습니다. 네트워크 엔지니어는 과도한 지연 시간을 해결해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. AWS Global Accelerator를 사용하여 기존 Site-to-Site VPN 연결에 가속기를 배포합니다.",
            "B. 트랜짓 게이트웨이와 새로운 가속화된 Site-to-Site VPN 연결을 배포합니다.",
            "C. 기존 Site-to-Site VPN 연결을 새로운 IPv6 Site-to-Site VPN 연결로 교체합니다.",
            "D. 기존 Site-to-Site VPN 연결을 AWS PrivateLink 연결로 교체합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 258,
        "question": "A company has a transit gateway in a single AWS account. The company sends flow logs for the transit gateway to an Amazon CloudWatch Logs\nlog group.\nThe company created an AWS Lambda function to analyze the logs. The Lambda function sends a notification to an Amazon Simple Notification\nService (Amazon SNS) topic when a VPC generates traffic that is dropped by the transit gateway. Each notification contains the account ID. VPC\nID, and total amount of dropped packets.\nThe company wants to subscribe a new Lambda function to the SNS topic. The new Lambda function must automatically prevent the traffic that is\nidentified in each notification from leaving a VPC by applying a network ACL to the transit gateway attachment subnets in the VPC that generates\nthe traffic.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure the existing Lambda function to add the destination IP addresses of the dropped traffic to each SNS notification. Configure the\nnew Lambda function to create an outbound rule by using the destination IP addresses in the network ACL.",
            "B. Configure the existing Lambda function to add the source IP addresses of the dropped traffic to each SNS notification. Configure the new\nLambda function to create an inbound rule by using the source IP addresses in the network ACL.",
            "C. Configure the existing Lambda function to add the source IP addresses of the dropped traffic to each SNS notification. Configure the new\nLambda function to create an outbound rule by using the source IP addresses in the network ACL.",
            "D. Configure the existing Lambda function to add the destination IP addresses of the dropped traffic to each SNS notification. Configure the\nnew Lambda function to create an inbound rule by using the destination IP addresses in the network ACL."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (53%) C (47%)",
        "question_ko": "회사에는 단일 AWS 계정에 트랜짓 게이트웨이가 있습니다. 회사는 트랜짓 게이트웨이의 흐름 로그를 Amazon CloudWatch Logs 로그 그룹으로 전송합니다. 회사는 로그를 분석하는 AWS Lambda 함수를 생성했습니다. Lambda 함수는 VPC가 트랜짓 게이트웨이에 의해 삭제된 트래픽을 생성할 때 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보냅니다. 각 알림에는 계정 ID, VPC ID 및 삭제된 패킷의 총 양이 포함됩니다. 회사는 새 Lambda 함수를 SNS 주제에 구독하려고 합니다. 새 Lambda 함수는 각 알림에 식별된 트래픽이 VPC를 떠나는 것을 방지하기 위해 트랜짓 게이트웨이 연결 서브넷에 네트워크 ACL을 적용해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 기존 Lambda 함수를 구성하여 각 SNS 알림에 삭제된 트래픽의 대상 IP 주소를 추가합니다. 새 Lambda 함수를 구성하여 네트워크 ACL에서 대상 IP 주소를 사용하여 아웃바운드 규칙을 생성합니다.",
            "B. 기존 Lambda 함수를 구성하여 각 SNS 알림에 삭제된 트래픽의 소스 IP 주소를 추가합니다. 새 Lambda 함수를 구성하여 네트워크 ACL에서 소스 IP 주소를 사용하여 인바운드 규칙을 생성합니다.",
            "C. 기존 Lambda 함수를 구성하여 각 SNS 알림에 삭제된 트래픽의 소스 IP 주소를 추가합니다. 새 Lambda 함수를 구성하여 네트워크 ACL에서 소스 IP 주소를 사용하여 아웃바운드 규칙을 생성합니다.",
            "D. 기존 Lambda 함수를 구성하여 각 SNS 알림에 삭제된 트래픽의 대상 IP 주소를 추가합니다. 새 Lambda 함수를 구성하여 네트워크 ACL에서 대상 IP 주소를 사용하여 인바운드 규칙을 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (53%) C (47%)"
    },
    {
        "num": 259,
        "question": "A company has multiple VPCs with subnets that use IPv4. Traffic from the VPCs to the internet uses a NAT gateway. The company wants to\ntransition to IPv6.\nA network engineer creates multiple IPv6-only subnets in an existing testing VPC. The network engineer deploys a new Amazon EC2 instance that\nhas an IPv6 address into one of the subnets. During testing, the network engineer discovers that the new EC2 instance is not able to communicate\nwith an IPv4-only service through the internet. The network engineer needs to enable the IPv6 EC2 instance to communicate with the IPv4-only\nservice.\nWhich solution will meet this requirement?",
        "options": [
            "A. Enable DNS64 for the IPv6-only subnets. Update the route tables for the IPv6-only subnets to send traffic through the NAT gateway.",
            "B. Enable NAT64 for the testing VPC. Reconfigure the existing NAT gateway to support IPv6.",
            "C. Enable DNS64 for the new EC2 instance. Create a new egress-only internet gateway that supports IPv6.",
            "D. Enable NAT64 for each route table. Create a new NAT gateway that supports both IPv4 and IPv6."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사에는 IPv4 서브넷이 있는 여러 VPC가 있습니다. VPC에서 인터넷으로의 트래픽은 NAT 게이트웨이를 사용합니다. 회사는 IPv6로 전환하려고 합니다. 네트워크 엔지니어는 기존 테스트 VPC에 IPv6 전용 서브넷을 생성했습니다. 엔지니어는 IPv6 주소가 있는 새 Amazon EC2 인스턴스를 서브넷 중 하나에 배포했습니다. 테스트 중에 네트워크 엔지니어는 새 EC2 인스턴스가 인터넷을 통해 IPv4 전용 서비스와 통신할 수 없다는 것을 발견했습니다. 네트워크 엔지니어는 IPv6 EC2 인스턴스가 IPv4 전용 서비스와 통신할 수 있도록 해야 합니다. 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. IPv6 전용 서브넷에 대해 DNS64를 활성화합니다. IPv6 전용 서브넷의 라우팅 테이블을 업데이트하여 트래픽을 NAT 게이트웨이로 보냅니다.",
            "B. 테스트 VPC에 대해 NAT64를 활성화합니다. 기존 NAT 게이트웨이를 재구성하여 IPv6를 지원하도록 합니다.",
            "C. 새 EC2 인스턴스에 대해 DNS64를 활성화합니다. IPv6를 지원하는 새 이그레스 전용 인터넷 게이트웨이를 생성합니다.",
            "D. 각 라우팅 테이블에 대해 NAT64를 활성화합니다. IPv4와 IPv6를 모두 지원하는 새 NAT 게이트웨이를 생성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 260,
        "question": "A company deployed an application in two AWS Regions in one AWS account. The company has one VPC in each Region. The VPCs use non-\noverlapping private CIDR ranges.\nThe company needs to connect both VPCs to a single on-premises data center to test the application. The application requires up to 800 Mbps of\nthroughput. A network engineer needs to establish connectivity between the VPCs and the on-premises data center.\nWhich solution will meet this requirement with the LEAST operational overhead?",
        "options": [
            "A. Order a 2 Gbps Direct Connect connection for the data center. Configure a virtual private gateway in each VPC. Create a private VIF for each\nvirtual private gateway, and associate the virtual private gateways with the Direct Connect connection. Configure static routes in the VPC route\ntables and in the data center router.",
            "B. Order a 2 Gbps Direct Connect connection for the data center. Configure a virtual private gateway in each VPC. Create a private VIF for each\nvirtual private gateway, and associate the virtual private gateways with the Direct Connect connection. Configure Open Shortest Path First\n(OSPF) routing between the private VIF and the data center.",
            "C. Configure a customer gateway and a virtual private gateway in each VPConfigure an AWS Site-to-Site VPN connection between the data\ncenter and each VPConfigure static routes in each VPC route table to point to the subnets in the data center.",
            "D. Configure a customer gateway and a virtual private gateway in each VPC. Configure an AWS Site-to-Site VPN connection between the data\ncenter and each VPC. Configure BGP routing between the VPCs and the data center."
        ],
        "answers": [
            "D"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: D (71%) C (29%)",
        "question_ko": "회사는 한 AWS 계정의 두 AWS 리전에 애플리케이션을 배포했습니다. 각 리전에 하나의 VPC가 있습니다. VPC는 오버래핑되지 않는 프라이빗 CIDR 범위를 사용합니다. 회사는 애플리케이션을 테스트하기 위해 두 VPC와 단일 온프레미스 데이터 센터를 연결해야 합니다. 애플리케이션에는 최대 800Mbps의 처리량이 필요합니다. 네트워크 엔지니어는 VPC와 온프레미스 데이터 센터 간 연결을 설정해야 합니다. 가장 적은 운영 오버헤드로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 데이터 센터에 대해 2Gbps Direct Connect 연결을 주문합니다. 각 VPC에 가상 프라이빗 게이트웨이를 구성합니다. 각 가상 프라이빗 게이트웨이에 대한 프라이빗 VIF를 생성하고 Direct Connect 연결에 연결합니다. VPC 라우팅 테이블과 데이터 센터 라우터에 정적 경로를 구성합니다.",
            "B. 데이터 센터에 대해 2Gbps Direct Connect 연결을 주문합니다. 각 VPC에 가상 프라이빗 게이트웨이를 구성합니다. 각 가상 프라이빗 게이트웨이에 대한 프라이빗 VIF를 생성하고 Direct Connect 연결에 연결합니다. 프라이빗 VIF와 데이터 센터 간에 OSPF 라우팅을 구성합니다.",
            "C. 각 VPC에 고객 게이트웨이와 가상 프라이빗 게이트웨이를 구성합니다. 데이터 센터와 각 VPC 간에 AWS Site-to-Site VPN 연결을 구성합니다. 각 VPC 라우팅 테이블에 데이터 센터 서브넷을 가리키는 정적 경로를 구성합니다.",
            "D. 각 VPC에 고객 게이트웨이와 가상 프라이빗 게이트웨이를 구성합니다. 데이터 센터와 각 VPC 간에 AWS Site-to-Site VPN 연결을 구성합니다. VPC와 데이터 센터 간에 BGP 라우팅을 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: D (71%) C (29%)"
    },
    {
        "num": 261,
        "question": "A company runs a workload in a single VPC on AWS. The company’s architecture contains several interface VPC endpoints for AWS services,\nincluding Amazon CloudWatch Logs and AWS Key Management Service (AWS KMS). The endpoints are configured to use a shared security group.\nThe security group is not used for any other workloads or resources.\nAfter a security review of the environment, the company determined that the shared security group is more permissive than necessary. The\ncompany wants to make the rules associated with the security group more restrictive. The changes to the security group rules must not prevent\nthe resources in the VPC from using AWS services through interface VPC endpoints. The changes must prevent unnecessary access.\nThe security group currently uses the following rules:\n• Inbound - Rule 1\nProtocol: TCP -\nPort: 443 -\nSource: 0.0.0.0/0 -\n• Inbound - Rule 2\nProtocol: TCP -\nPort: 443 -\nSource: VPC CIDR -\n• Outbound - Rule 1\nProtocol: All -\nPort: All -\nDestination: 0.0.0.0/0 -\nWhich rule or rules should the company remove to meet with these requirements?",
        "options": [
            "A. Outbound - Rule 2",
            "B. Inbound - Rule 1 and Outbound - Rule 1",
            "C. Inbound - Rule 2 and Outbound - Rule 1",
            "D. Outbound - Rule 1"
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (86%) 14%",
        "question_ko": "단일 VPC에서 워크로드를 실행하는 회사입니다. 회사의 아키텍처에는 Amazon CloudWatch Logs와 AWS Key Management Service(AWS KMS)를 포함한 여러 인터페이스 VPC 엔드포인트가 있습니다. 엔드포인트는 공유 보안 그룹을 사용하도록 구성되어 있습니다. 보안 그룹은 다른 워크로드나 리소스에 사용되지 않습니다. 환경에 대한 보안 검토 후 회사는 공유 보안 그룹이 필요 이상으로 허용적이라고 판단했습니다. 회사는 보안 그룹 규칙을 더 제한적으로 만들고자 합니다. 보안 그룹 규칙의 변경은 VPC의 리소스가 인터페이스 VPC 엔드포인트를 통해 AWS 서비스를 사용하는 것을 방해하지 않아야 합니다. 변경 사항은 불필요한 액세스를 방지해야 합니다. 현재 보안 그룹은 다음과 같은 규칙을 사용합니다:\n• Inbound - 규칙 1\n프로토콜: TCP\n포트: 443\n소스: 0.0.0.0/0\n• Inbound - 규칙 2 \n프로토콜: TCP\n포트: 443\n소스: VPC CIDR\n• Outbound - 규칙 1\n프로토콜: All\n포트: All\n대상: 0.0.0.0/0\n이 요구 사항을 충족하기 위해 회사가 제거해야 할 규칙은 무엇입니까?",
        "options_ko": [
            "A. Outbound - 규칙 2",
            "B. Inbound - 규칙 1 및 Outbound - 규칙 1",
            "C. Inbound - 규칙 2 및 Outbound - 규칙 1",
            "D. Outbound - 규칙 1"
        ],
        "explanation_ko": "커뮤니티 투표: B (86%) 14%"
    },
    {
        "num": 262,
        "question": "A company uses transit gateways to route traffic between the company's VPCs. Each transit gateway has a single route table. Each route table\ncontains attachments and routes for the VPCs that are in the same AWS Region as the transit gateway. The route tables in each VPC also contain\nroutes to all the other VPC CIDR ranges that are available through the transit gateways. Some VPCs route to local NAT gateways.\nThe company plans to add many new VPCs soon. A network engineer needs a solution to add new VPC CIDR ranges to the route tables in each\nVPC.\nWhich solution will meet these requirements in the MOST operationally efficient way?",
        "options": [
            "A. Create a new customer-managed prefix list. Add all VPC CIDR ranges to the new prefix list. Update the route tables in each VPC to use the\nnew prefix list ID as the destination and the appropriate transit gateway ID as the target.",
            "B. Turn on default route table propagation for the transit gateway route tables. Turn on route propagation for each route table in each VPC.",
            "C. Update the route tables in each VPC to use 0.0.0.010 as the destination and the appropriate transit gateway ID as the target.",
            "D. Turn on default route table association for the transit gateway route tables. Turn on route propagation for each route table in each VPC."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 트랜짓 게이트웨이를 사용하여 VPC 간 트래픽을 라우팅합니다. 각 트랜짓 게이트웨이에는 단일 라우팅 테이블이 있습니다. 각 라우팅 테이블에는 동일한 AWS 리전에 있는 VPC에 대한 연결 및 경로가 포함되어 있습니다. 각 VPC의 라우팅 테이블에도 트랜짓 게이트웨이를 통해 사용 가능한 다른 모든 VPC CIDR 범위에 대한 경로가 포함되어 있습니다. 일부 VPC는 로컬 NAT 게이트웨이로 라우팅됩니다. 회사는 곧 많은 새 VPC를 추가할 계획입니다. 네트워크 엔지니어는 새 VPC CIDR 범위를 각 VPC의 라우팅 테이블에 추가하기 위한 솔루션이 필요합니다. 이러한 요구 사항을 가장 운영적으로 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 새 고객 관리 접두사 목록을 만듭니다. 모든 VPC CIDR 범위를 새 접두사 목록에 추가합니다. 각 VPC의 라우팅 테이블을 업데이트하여 새 접두사 목록 ID를 대상으로, 적절한 트랜짓 게이트웨이 ID를 대상으로 사용합니다.",
            "B. 트랜짓 게이트웨이 라우팅 테이블의 기본 경로 테이블 전파를 활성화합니다. 각 VPC의 모든 라우팅 테이블에 대한 경로 전파를 활성화합니다.",
            "C. 각 VPC의 라우팅 테이블을 업데이트하여 대상을 0.0.0.0/0으로, 적절한 트랜짓 게이트웨이 ID를 대상으로 사용합니다.",
            "D. 트랜짓 게이트웨이 라우팅 테이블의 기본 경로 테이블 연결을 활성화합니다. 각 VPC의 모든 라우팅 테이블에 대한 경로 전파를 활성화합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 263,
        "question": "A company has several AWS Site-to-Site VPN connections between an on-premises customer gateway and a transit gateway. The company's\napplication uses IPv4 to communicate through the VPN connections.\nThe company has updated the VPC to be dual stack and wants to transition to using IPv6-only for new workloads. When the company tries to\ncommunicate through the existing VPN connections, IPv6 traffic fails.\nWhich solution will provide IPv6 support with the LEAST operational overhead?",
        "options": [
            "A. Create a new Site-to-Site VPN connection that supports IPv6.",
            "B. Create a new Site-to-Site VPN connection to a self-managed Amazon EC2 instance that runs open source software.",
            "C. Update the existing Site-to-Site VPN connections to support IPv6.",
            "D. Update the on-premises customer gateway's public IP address from IPv4 to IPv6."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사에는 온프레미스 고객 게이트웨이와 트랜짓 게이트웨이 간에 여러 AWS Site-to-Site VPN 연결이 있습니다. 회사의 애플리케이션은 VPN 연결을 통해 IPv4를 사용하여 통신합니다. 회사는 VPC를 이중 스택으로 업데이트하고 새 워크로드에 IPv6-only를 사용하려고 합니다. 기존 VPN 연결을 통해 통신하려고 하면 IPv6 트래픽이 실패합니다. 운영 부담을 최소화하면서 IPv6 지원을 제공할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. IPv6를 지원하는 새 Site-to-Site VPN 연결을 만듭니다.",
            "B. 오픈 소스 소프트웨어를 실행하는 자체 관리 Amazon EC2 인스턴스에 새 Site-to-Site VPN 연결을 만듭니다.",
            "C. 기존 Site-to-Site VPN 연결을 업데이트하여 IPv6를 지원하도록 합니다.",
            "D. 온프레미스 고객 게이트웨이의 공용 IP 주소를 IPv4에서 IPv6로 업데이트합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 264,
        "question": "A company has two teams: Team A and Team B. Team A has VPCs that run in Account A. The team uses a transit gateway (TGW-A) to route traffic\nbetween workloads that run in the different VPCs. Similarly, Team В has VPCs that run in Account B. Team В uses a different transit gateway\n(TGW-B) to route traffic between workloads that run in the different VPCs.\nThe company's network team manages the routing for Team A and Team В. The network team wants to retire TGW-B and use a single transit\ngateway to manage routing for the VPCs of both teams.\nWhich solution will meet this requirement with the LEAST operational overhead?",
        "options": [
            "A. Create a resource share for TGW-A Share TGW-A with Account B. Create VPC attachments for the VPCs in Account В. Configure routing for\nthe VPCs in TGW-A route tables. Update the route tables of the VPCs in Account В to forward traffic to TGW-Delete TGW-B attachments and\nTGW-B.",
            "B. Create a resource share for TGW-A. Share TGW-A with Account В. Replicate the TGW-B configuration to TGW-A to automatically start routing\nchanges for the VPCs in Account В. Delete TGW-B when routing changes are complete.",
            "C. Create a new transit gateway (TGW-C) in Account A. Create a resource share for TGW-Share TGW-C with Account B. Create VPC\nattachments for the VPCs in Account A and Account В. Configure routing for all the VPCs in TGW-C route tables. Update the route tables for\nthe VPCs in Account A and Account В to forward traffic to TGW-Delete TGW-A attachments and TGW-B attachments. Delete TGW-A and TGW-B.",
            "D. Create a new transit gateway (TGW-C) in a new account (Account C). Create a resource share for TGW-C. Share TGW-C with Account A and\nAccount B. Create VPC attachments for the VPCs in Account A and Account В. Configure routing for all the VPCs in TGW-C route tables.\nUpdate the route tables for the VPCs in Account A and Account В to forward traffic to TGW-C. Delete TGW-A attachments and TGW-B\nattachments. Delete TGW-A and TGW-B."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사에는 Team A와 Team B의 두 팀이 있습니다. Team A는 Account A에서 실행되는 VPC를 가지고 있습니다. 팀은 트랜짓 게이트웨이(TGW-A)를 사용하여 다른 VPC에서 실행되는 워크로드 간의 트래픽을 라우팅합니다. 마찬가지로 Team B는 Account B에서 실행되는 VPC를 가지고 있으며 다른 트랜짓 게이트웨이(TGW-B)를 사용하여 다른 VPC의 워크로드 간 트래픽을 라우팅합니다. 네트워크 팀은 Team A와 Team B의 라우팅을 관리합니다. 네트워크 팀은 TGW-B를 폐기하고 단일 트랜짓 게이트웨이를 사용하여 두 팀의 VPC에 대한 라우팅을 관리하고자 합니다. 운영 부담을 최소화하면서 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. TGW-A에 대한 리소스 공유를 생성합니다. Account B와 TGW-A를 공유합니다. Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-A 라우팅 테이블에 대한 라우팅을 구성합니다. Account B의 VPC 라우팅 테이블을 업데이트하여 트래픽을 TGW-로 전송합니다. TGW-B 연결과 TGW-B를 삭제합니다.",
            "B. TGW-A에 대한 리소스 공유를 생성합니다. Account B와 TGW-A를 공유합니다. TGW-B 구성을 TGW-A에 복제하여 Account B의 VPC에 대한 라우팅 변경을 자동으로 시작합니다. 라우팅 변경이 완료되면 TGW-B를 삭제합니다.",
            "C. Account A에 새 트랜짓 게이트웨이(TGW-C)를 생성합니다. TGW-C에 대한 리소스 공유를 생성합니다. Account B와 TGW-C를 공유합니다. Account A와 Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-C 라우팅 테이블의 모든 VPC에 대한 라우팅을 구성합니다. Account A와 Account B의 VPC 라우팅 테이블을 업데이트하여 트래픽을 TGW-C로 전송합니다. TGW-A 연결과 TGW-B 연결을 삭제합니다. TGW-A와 TGW-B를 삭제합니다.",
            "D. 새 계정(Account C)에 새 트랜짓 게이트웨이(TGW-C)를 생성합니다. TGW-C에 대한 리소스 공유를 생성합니다. Account A와 Account B와 TGW-C를 공유합니다. Account A와 Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-C 라우팅 테이블의 모든 VPC에 대한 라우팅을 구성합니다. Account A와 Account B의 VPC 라우팅 테이블을 업데이트하여 트래픽을 TGW-C로 전송합니다. TGW-A 연결과 TGW-B 연결을 삭제합니다. TGW-A와 TGW-B를 삭제합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 265,
        "question": "A company has an AWS environment that includes multiple VPCs that are connected by a transit gateway. The company wants to use a certificate-\nbased AWS Site-to-Site VPN connection to establish connectivity between an on-premises environment and the AWS environment. The company\ndoes not have a static public IP address for the on-premises environment.\nWhich combination of steps should the company take to establish VPN connectivity between the transit gateway and the on-premises\nenvironment? (Choose two.)",
        "options": [
            "A. Create a public certificate in AWS Certificate Manager (ACM).",
            "B. Create a private certificate in AWS Certificate Manager (ACM).",
            "C. Configure the Site-to-Site VPN tunnels to use the pre-shared key (PSK).",
            "D. Create a customer gateway. Specify the current dynamic IP address of the customer gateway device's external interface.",
            "E. Create a customer gateway. Do not specify the IP address of the customer gateway device."
        ],
        "answers": [
            "B",
            "E"
        ],
        "isMulti": true,
        "explanation": "커뮤니티 투표: BE (100%)",
        "question_ko": "회사에는 트랜짓 게이트웨이로 연결된 여러 VPC가 포함된 AWS 환경이 있습니다. 회사는 온프레미스 환경과 AWS 환경 간에 연결을 설정하기 위해 인증서 기반 AWS Site-to-Site VPN 연결을 사용하려고 합니다. 회사에는 온프레미스 환경의 고정 공용 IP 주소가 없습니다. 트랜짓 게이트웨이와 온프레미스 환경 간에 VPN 연결을 설정하기 위해 회사가 취해야 할 조치는 무엇입니까? (2가지를 선택하세요.)",
        "options_ko": [
            "A. AWS Certificate Manager(ACM)에서 공개 인증서를 생성합니다.",
            "B. AWS Certificate Manager(ACM)에서 사설 인증서를 생성합니다.",
            "C. Site-to-Site VPN 터널을 사전 공유 키(PSK)를 사용하도록 구성합니다.",
            "D. 고객 게이트웨이를 생성합니다. 고객 게이트웨이 디바이스의 외부 인터페이스에 대한 현재 동적 IP 주소를 지정합니다.",
            "E. 고객 게이트웨이를 생성합니다. 고객 게이트웨이 디바이스의 IP 주소를 지정하지 않습니다."
        ],
        "explanation_ko": "커뮤니티 투표: BE (100%)"
    },
    {
        "num": 266,
        "question": "A company operates in multiple AWS Regions. The company has deployed transit gateways in each Region. The company uses AWS Organizations\nto operate multiple AWS accounts in one organization.\nThe company needs to capture all VPC flow log data when a new VPC is created. The company needs to send flow logs to a specific Amazon S3\nbucket.\nWhich solution will meet these requirements with the LEAST administrative effort?",
        "options": [
            "A. Update IAM permissions for each user to include a condition that ensures users can create VPCs only when VPC Flow Logs is enabled and\nconfigured correctly.",
            "B. Create a custom AWS Config rule with automatic remediation that verifies VPC Flow Logs is enabled and configured correctly. Apply the\nAWS Config rule to the organization.",
            "C. Enable VPC Flow Logs on each transit gateway. Configure VPC Flow Logs to send flow logs to the specified S3 bucket.",
            "D. Deploy a serverless application that uses AWS CloudTrail to monitor for VPC creation events in each account. Configure the application to\napply the correct VPC Flow Logs configuration."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "다중 AWS 리전에서 운영되는 회사는 각 리전에 트랜짓 게이트웨이를 배포했습니다. 이 회사는 AWS Organizations를 사용하여 조직 내에서 여러 AWS 계정을 운영합니다.\n새 VPC가 생성되면 모든 VPC 흐름 로그 데이터를 캡처하고 특정 Amazon S3 버킷에 전송해야 합니다.\n이 요구 사항을 가장 적은 관리 노력으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 각 사용자의 IAM 권한을 업데이트하여 사용자가 VPC Flow Logs가 올바르게 활성화 및 구성된 경우에만 VPC를 생성할 수 있도록 하는 조건을 포함합니다.",
            "B. 자동 정정 기능이 있는 사용자 지정 AWS Config 규칙을 생성하여 VPC Flow Logs가 활성화되고 올바르게 구성되었는지 확인합니다. 이 AWS Config 규칙을 조직에 적용합니다.",
            "C. 각 트랜짓 게이트웨이에서 VPC Flow Logs를 활성화합니다. VPC Flow Logs를 지정된 S3 버킷에 전송하도록 구성합니다.",
            "D. AWS CloudTrail을 사용하여 각 계정의 VPC 생성 이벤트를 모니터링하는 서버리스 애플리케이션을 배포합니다. 애플리케이션이 올바른 VPC Flow Logs 구성을 적용하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    },
    {
        "num": 267,
        "question": "A company wants to analyze TCP internet traffic. The traffic originates from Amazon EC2 instances in the company’s VPC. The EC2 instances\ninitiate connections through a NAT gateway.\nThe company wants to capture data about the traffic including source and destination IP addresses ports, and the first 8 bytes of the TCP\nsegments of the traffic. The company needs to collect, store, and analyze all the required data points.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure the EC2 instances to be VPC traffic mirror sources. Deploy software on the traffic mirror target to forward the data to Amazon\nCloudWatch Logs. Analyze the data by using CloudWatch Logs Insights",
            "B. Configure the NAT gateway to be a VPC traffic mirror source. Deploy software on the traffic mirror target to forward the data to an Amazon\nS3 bucket. Analyze the data by using Amazon Athena.",
            "C. Turn on VPC Flow Logs for the EC2 instances. Specify the default format and set Amazon CloudWatch Logs as the log destination. Analyze\nthe flow log data by using CloudWatch Logs Insights.",
            "D. Turn on VPC Flow Logs for the EC2 instances. Specify a custom format and set Amazon S3 as the log destination. Analyze the flow log data\nby using Amazon Athena."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (58%) A (42%)",
        "question_ko": "회사는 TCP 인터넷 트래픽을 분석하려고 합니다. 이 트래픽은 회사의 VPC에 있는 Amazon EC2 인스턴스에서 시작됩니다. EC2 인스턴스는 NAT 게이트웨이를 통해 연결을 시작합니다.\n회사는 소스 및 대상 IP 주소, 포트, 그리고 TCP 세그먼트의 첫 8바이트와 같은 트래픽 데이터를 캡처하려고 합니다. 회사는 모든 필수 데이터 포인트를 수집, 저장 및 분석해야 합니다.\n이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. EC2 인스턴스를 VPC 트래픽 미러 소스로 구성합니다. 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon CloudWatch Logs로 전달합니다. CloudWatch Logs Insights를 사용하여 데이터를 분석합니다.",
            "B. NAT 게이트웨이를 VPC 트래픽 미러 소스로 구성합니다. 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon S3 버킷으로 전달합니다. Amazon Athena를 사용하여 데이터를 분석합니다.",
            "C. EC2 인스턴스에 대해 VPC Flow Logs를 활성화합니다. 기본 형식을 지정하고 Amazon CloudWatch Logs를 로그 대상으로 설정합니다. CloudWatch Logs Insights를 사용하여 흐름 로그 데이터를 분석합니다.",
            "D. EC2 인스턴스에 대해 VPC Flow Logs를 활성화합니다. 사용자 지정 형식을 지정하고 Amazon S3를 로그 대상으로 설정합니다. Amazon Athena를 사용하여 흐름 로그 데이터를 분석합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (58%) A (42%)"
    },
    {
        "num": 268,
        "question": "A media company is planning to host an event that the company will live stream to users. The company wants to use Amazon CloudFront.\nA network engineer creates a primary origin and a secondary origin for CloudFront. The engineer needs to ensure that the primary origin can fail\nover to the secondary origin within 15 seconds if a disruption occurs.\nWhich solution will meet this requirement with the LEAST operational overhead?",
        "options": [
            "A. Configure a Lambda@Edge function to check the health status of both origins every 10 seconds. Reroute incoming requests when the\norigin health status is unhealthy.",
            "B. Create a Network Load Balancer (NLB) in front of both origins Configure the NLB as the origin in CloudFront.",
            "C. Set the CloudFront origin connection timeout value to 5 seconds Set the origin connection attempts value to 2.",
            "D. Configure a Lambda@Edge function to monitor incoming requests for an origin response. Reroute incoming requests if no response is\nreceived from the primary origin within 10 seconds."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (100%)",
        "question_ko": "미디어 회사는 사용자에게 라이브 스트리밍할 계획입니다. 이를 위해 Amazon CloudFront를 사용하려고 합니다.\n네트워크 엔지니어가 CloudFront에 대한 기본 원본과 보조 원본을 생성했습니다. 엔지니어는 장애가 발생하는 경우 기본 원본이 15초 이내에 보조 원본으로 장애 조치되도록 해야 합니다.\n이 요구 사항을 가장 적은 운영 오버헤드로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Lambda@Edge 함수를 구성하여 10초마다 두 원본의 상태를 확인하고, 원본 상태가 비정상인 경우 들어오는 요청을 재라우팅합니다.",
            "B. 두 원본 앞에 Network Load Balancer(NLB)를 생성합니다. NLB를 CloudFront의 원본으로 구성합니다.",
            "C. CloudFront 원본 연결 시간 초과 값을 5초로 설정하고, 원본 연결 시도 횟수를 2로 설정합니다.",
            "D. Lambda@Edge 함수를 구성하여 들어오는 요청에 대한 원본 응답을 모니터링하고, 기본 원본에서 10초 이내에 응답이 수신되지 않으면 들어오는 요청을 재라우팅합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (100%)"
    },
    {
        "num": 269,
        "question": "AnyCompany deploys and manages networking resources in its AWS network account, named Account-A. AnyCompany acquires Example Corp,\nwhich has an application that runs behind an Application Load Balancer (ALB) in Example Corp's AWS account, named Account-B.\nExample Corp needs to use AWS Global Accelerator to create an accelerator to publish the application to users. AnyCompany's networking team\nwill manage the accelerator.\nWhich solution will meet these requirements with the LEAST management overhead?",
        "options": [
            "A. Create an accelerator in Account-В. Use a cross-account role from Account-A to grant the networking team access to manage the\naccelerator.",
            "B. Deploy a Network Load Balancer (NLB) in Account-A to route traffic to the ALB in Account-В. Create an accelerator, and set the NLB as the\nendpoint in Account-A.",
            "C. Create a cross-account Global Accelerator attachment in Account-В for the Account-A principal. Create an accelerator in Account-A by\nusing the shared attachment.",
            "D. Create an accelerator in Account-A. Use AWS Resource Access Management (AWS RAM) to share the accelerator with Account-В.\nAssociate the ALB in Account-В with the accelerator in Account-A."
        ],
        "answers": [
            "C"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: C (67%) D (33%)",
        "question_ko": "AnyCompany는 AWS 네트워크 계정인 Account-A에서 네트워킹 리소스를 배포하고 관리합니다. AnyCompany는 Example Corp을 인수했습니다. Example Corp에는 Application Load Balancer(ALB) 뒤에서 실행되는 애플리케이션이 있으며 이는 Example Corp의 AWS 계정인 Account-B에 있습니다.\nExample Corp은 AWS Global Accelerator를 사용하여 사용자에게 애플리케이션을 게시하는 가속기를 생성해야 합니다. AnyCompany의 네트워크 팀이 가속기를 관리할 것입니다.\n이 요구 사항을 가장 적은 관리 오버헤드로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. Account-В에서 가속기를 생성합니다. Account-A에서 가속기를 관리할 수 있도록 교차 계정 역할을 사용합니다.",
            "B. Account-A에 Network Load Balancer(NLB)를 배포하여 Account-В의 ALB로 트래픽을 라우팅합니다. Account-A에서 가속기를 생성하고 엔드포인트로 NLB를 설정합니다.",
            "C. Account-В에서 교차 계정 Global Accelerator 연결을 생성하여 Account-A 보안 주체에 대한 액세스를 제공합니다. Account-A에서 공유 연결을 사용하여 가속기를 생성합니다.",
            "D. Account-A에서 가속기를 생성합니다. AWS RAM(Resource Access Management)을 사용하여 Account-В와 가속기를 공유합니다. Account-В의 ALB를 Account-A의 가속기와 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: C (67%) D (33%)"
    },
    {
        "num": 270,
        "question": "A company has two AWS Direct Connect connections between Direct Connect locations and the company's on-premises environment in the US.\nThe company uses the connections to communicate with AWS workloads that run in the us-east-1 Region. The company has a transit gateway that\nconnects several VPCs. The Direct Connect connections terminate at a Direct Connect gateway and the transit VIFs to the transit gateway.\nThe company recently acquired a smaller company that is based in Europe. The newly acquired company has only on-premises workloads. The\nnewly acquired company does not expect to run workloads on AWS for the next 3 years. However, the newly acquired company requires\nconnectivity to the parent company's AWS resources in us-east-1 and to the parent company's on-premises environment in the US. The parent\ncompany wants to use two new Direct Connect connections in Europe to provide the required connectivity.\nWhich solution will meet these requirements with the LEAST operational overhead for the newly acquired company?",
        "options": [
            "A. Associate new transit VIFs to the existing Direct Connect gateway. Configure the new transit VIFs to use Direct Connect SiteLink.",
            "B. Associate new transit VIFs to a new Direct Connect gateway and to a new transit gateway in the eu-west-1 Region. Use transit gateway\npeering to connect the transit gateways.",
            "C. Associate new private VIFs to the existing Direct Connect gateway. Configure the existing transit VIFs and the new private VIFs to use\nDirect Connect SiteLink.",
            "D. Associate new private VIFs to a new Direct Connect gateway and to a new VPC in us-east-1. Configure the existing transit VIFs and the new\nprivate VIFs to use Direct Connect SiteLink and AWS PrivateLink endpoints in the new VPC."
        ],
        "answers": [
            "A"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: A (100%)",
        "question_ko": "회사는 미국 내 Direct Connect 위치와 회사의 온-프레미스 환경 간에 두 개의 AWS Direct Connect 연결을 사용합니다. 이 연결을 통해 us-east-1 리전에 있는 AWS 워크로드와 통신합니다. 회사에는 여러 VPC를 연결하는 트랜짓 게이트웨이가 있습니다. Direct Connect 연결은 Direct Connect 게이트웨이에 종료되고 트랜짓 VIF를 통해 트랜짓 게이트웨이에 연결됩니다.\n회사는 유럽에 기반을 둔 규모가 작은 회사를 인수했습니다. 새로 인수한 회사에는 온-프레미스 워크로드만 있으며 향후 3년 내 AWS에서 워크로드를 실행할 계획이 없습니다. 그러나 새로 인수한 회사는 us-east-1의 부모 회사 AWS 리소스와 미국의 부모 회사 온-프레미스 환경에 대한 연결이 필요합니다. 부모 회사는 두 개의 새 유럽 Direct Connect 연결을 사용하여 필요한 연결을 제공하려고 합니다.\n새로 인수한 회사에 대해 가장 적은 운영 오버헤드로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. 기존 Direct Connect 게이트웨이에 새 트랜짓 VIF를 연결합니다. 새 트랜짓 VIF를 Direct Connect SiteLink를 사용하도록 구성합니다.",
            "B. 새 Direct Connect 게이트웨이와 eu-west-1 리전의 새 트랜짓 게이트웨이에 새 트랜짓 VIF를 연결합니다. 트랜짓 게이트웨이 피어링을 사용하여 트랜짓 게이트웨이를 연결합니다.",
            "C. 기존 Direct Connect 게이트웨이에 새 프라이빗 VIF를 연결합니다. 기존 트랜짓 VIF와 새 프라이빗 VIF를 Direct Connect SiteLink를 사용하도록 구성합니다.",
            "D. 새 Direct Connect 게이트웨이와 us-east-1의 새 VPC에 새 프라이빗 VIF를 연결합니다. 기존 트랜짓 VIF와 새 프라이빗 VIF를 Direct Connect SiteLink와 새 VPC의 AWS PrivateLink 엔드포인트를 사용하도록 구성합니다."
        ],
        "explanation_ko": "커뮤니티 투표: A (100%)"
    },
    {
        "num": 271,
        "question": "A company is establishing hybrid cloud connectivity from an on-premises environment to AWS in the us-east-1 Region. The company is using a 10\nGbps AWS Direct Connect dedicated connection. The company has two accounts in AWS. Account A has transit gateways in four AWS Regions.\nAccount В has transit gateways in three Regions. The company does not plan to expand.\nTo meet security requirements the company's accounts must have separate cloud infrastructure.\nWhich solution will meet these requirements MOST cost-effectively?",
        "options": [
            "A. Create one Direct Connect gateway in us-east-1. Use AWS Resource Access Manager (AWS RAM) to share the Direct Connect gateway with\neach account. Create a transit VIF for Account Associate the four transit gateways in Account A to the Direct Connect gateway. Create a\ntransit VIF for Account B. Associate the three transit gateways in Account В to the Direct Connect gateway.",
            "B. Create one Direct Connect gateway in us-east-1 for Account A. Create a second Direct Connect gateway in us-east-1 for Account Create a\ntransit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway in Account A. Create a transit VIF\nfor Account Associate the three transit gateways in Account В to the Direct Connect gateway in Account В.",
            "C. Create one Direct Connect gateway in us-east-1. Use AWS Resource Access Manager (AWS RAM) to share the Direct Connect gateway with\neach account. Create a transit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway. Order a new\n10 Gbps Direct Connect dedicated connection for Account B. Create a transit VIF on the new Direct Connect connection for Account B.\nAssociate the three transit gateways in Account В to the Direct Connect gateway.",
            "D. Create one Direct Connect gateway in us-east-1 for Account A. Create a second Direct Connect gateway in us-east-1 for Account B. Create a\ntransit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway in Account A. Order a new 10 Gbps\nDirect Connect dedicated connection for Account В. Create a transit VIF on the new Direct Connect connection for Account В. Associate the\nthree transit gateways in Account В to the Direct Connect gateway in Account В."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (75%) A (25%)",
        "question_ko": "회사가 온프레미스 환경에서 AWS us-east-1 리전으로 하이브리드 클라우드 연결을 구축하고 있습니다. 회사는 10Gbps AWS Direct Connect 전용 연결을 사용하고 있습니다. 회사는 AWS에 두 개의 계정을 가지고 있습니다. A 계정에는 4개 AWS 리전에 Transit Gateway가 있고, B 계정에는 3개 리전에 Transit Gateway가 있습니다. 회사는 확장할 계획이 없습니다. 보안 요구 사항을 충족하기 위해 회사의 계정은 별도의 클라우드 인프라를 가져야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. us-east-1에 Direct Connect 게이트웨이를 하나 만들고 AWS Resource Access Manager(AWS RAM)를 사용하여 각 계정과 게이트웨이를 공유합니다. A 계정의 4개 Transit Gateway를 Direct Connect 게이트웨이에 연결하고, B 계정의 3개 Transit Gateway도 연결합니다.",
            "B. A 계정에 us-east-1에 Direct Connect 게이트웨이 하나를 만들고, B 계정에 또 다른 Direct Connect 게이트웨이를 만듭니다. A 계정의 4개 Transit Gateway를 A 계정의 Direct Connect 게이트웨이에 연결하고, B 계정의 3개 Transit Gateway를 B 계정의 Direct Connect 게이트웨이에 연결합니다.",
            "C. us-east-1에 Direct Connect 게이트웨이를 하나 만들고 AWS Resource Access Manager(AWS RAM)를 사용하여 각 계정과 게이트웨이를 공유합니다. A 계정의 4개 Transit Gateway를 Direct Connect 게이트웨이에 연결하고, B 계정에 새로운 10Gbps Direct Connect 전용 연결을 주문하여 B 계정의 3개 Transit Gateway를 연결합니다.",
            "D. A 계정에 us-east-1에 Direct Connect 게이트웨이 하나를 만들고, B 계정에 또 다른 Direct Connect 게이트웨이를 만듭니다. A 계정의 4개 Transit Gateway를 A 계정의 Direct Connect 게이트웨이에 연결하고, B 계정에 새로운 10Gbps Direct Connect 전용 연결을 주문하여 B 계정의 3개 Transit Gateway를 연결합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (75%) A (25%)"
    },
    {
        "num": 272,
        "question": "A company runs an application across multiple AWS Regions and multiple Availability Zones. The company needs to expand to a new AWS Region.\nLow latency is critical to the functionality of the application.\nA network engineer needs to gather metrics for the latency between the existing. Regions and the new Region. The network engineer must gather\nmetrics for at least the previous 30 days.\nWhich solution will meet these requirements?",
        "options": [
            "A. Configure an AWS Network Access Analyzer Network Access Scope, and use the analysis to review the latency.",
            "B. Set up AWS Network Manager Infrastructure Performance. Publish network performance metrics to Amazon CloudWatch.",
            "C. Use an Amazon VPC Reachability Analyzer path to review the latency.",
            "D. Set up VPC Flow Logs. Publish log metrics to Amazon CloudWatch."
        ],
        "answers": [
            "B"
        ],
        "isMulti": false,
        "explanation": "커뮤니티 투표: B (100%)",
        "question_ko": "회사는 여러 AWS 리전과 가용 영역에 걸쳐 애플리케이션을 실행하고 있습니다. 회사는 새로운 AWS 리전으로 확장해야 합니다. 저지연성이 애플리케이션 기능에 매우 중요합니다. 네트워크 엔지니어는 기존 리전과 새로운 리전 간의 지연 시간에 대한 측정 지표를 수집해야 합니다. 네트워크 엔지니어는 최소 지난 30일 동안의 지표를 수집해야 합니다. 이러한 요구 사항을 충족시킬 수 있는 솔루션은 무엇입니까?",
        "options_ko": [
            "A. AWS Network Access Analyzer Network Access Scope를 구성하고 분석 결과를 사용하여 지연 시간을 검토합니다.",
            "B. AWS Network Manager Infrastructure Performance를 설정하고 네트워크 성능 지표를 Amazon CloudWatch에 게시합니다.",
            "C. Amazon VPC Reachability Analyzer 경로를 사용하여 지연 시간을 검토합니다.",
            "D. VPC Flow Logs를 설정하고 로그 지표를 Amazon CloudWatch에 게시합니다."
        ],
        "explanation_ko": "커뮤니티 투표: B (100%)"
    }
];