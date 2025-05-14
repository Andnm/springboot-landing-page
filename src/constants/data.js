import {
  Users,
  PenTool,
  Calendar,
  Database,
  Link,
  BookOpen,
  Code,
  Award,
  Clock,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Trang chủ", href: "hero" },
  { name: "Lợi ích", href: "features" },
  { name: "Lộ trình", href: "curriculum" },
  { name: "Giảng viên", href: "#instructor" },
  { name: "Đánh giá", href: "testimonials" },
  { name: "Học phí", href: "pricing" },
  { name: "FAQ", href: "faq" },
  { name: "Liên hệ", href: "contact" },
];

export const FEATURES = [
  {
    id: 1,
    icon: Users,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Giảng viên giàu kinh nghiệm",
    description:
      "Đội ngũ giảng viên có kinh nghiệm làm việc tại các công ty công nghệ hàng đầu như FPT, VNG, và các tập đoàn đa quốc gia.",
  },
  {
    id: 2,
    icon: PenTool,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Thực hành dự án thực tế",
    description:
      "Xây dựng 5+ dự án thực tế để bổ sung vào portfolio của bạn, bao gồm cả ứng dụng thương mại điện tử và hệ thống quản lý nội dung.",
  },
  {
    id: 3,
    icon: Calendar,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Lịch học linh hoạt",
    description:
      "Học buổi tối và cuối tuần, phù hợp cho cả sinh viên và người đi làm. Nội dung bài học được quay video để bạn có thể xem lại bất cứ lúc nào.",
  },
  {
    id: 4,
    icon: Database,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "Cập nhật công nghệ mới nhất",
    description:
      "Nội dung khóa học luôn được cập nhật với phiên bản Spring Boot mới nhất và các xu hướng công nghệ đang được sử dụng trong ngành.",
  },
  {
    id: 5,
    icon: Link,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Kết nối doanh nghiệp",
    description:
      "Cơ hội được kết nối với các doanh nghiệp đối tác để thực tập hoặc làm việc sau khi hoàn thành khóa học.",
  },
  {
    id: 6,
    icon: BookOpen,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Hỗ trợ trọn đời",
    description:
      "Truy cập vĩnh viễn vào tài liệu khóa học và cộng đồng học viên để trao đổi kinh nghiệm và hỗ trợ lẫn nhau.",
  },
];


export const CURRICULUM = [
  {
    id: 1,
    title: 'I. Java Core Cơ Bản và Nâng Cao (1 tuần)',
    content: 'Ôn tập Java cơ bản và nâng cao, bao gồm các nguyên lý lập trình hướng đối tượng, Java Stream API, Lambda Expression và Clean Code.',
    image: '/assets/images/spring1.jpg',
    details: [
      'Nguyên lý lập trình hướng đối tượng (OOP Principles)',
      'Các kiểu dữ liệu, toán tử, biến, cấu trúc điều khiển,...',
      'Quản lý thư viện phụ thuộc với Maven/Gradle',
      'Java Stream API và Lambda Expression',
      'Kỹ thuật Clean Code và Refactoring Code',
    ]
  },
  {
    id: 2,
    title: 'II. Spring Boot Cơ Bản (1 tuần)',
    content: 'Khởi tạo dự án Spring Boot, tìm hiểu cấu trúc thư mục chuẩn và quản lý dependencies bằng Maven/Gradle.',
    image: '/assets/images/spring2.png',
    details: [
      'Khởi tạo dự án Spring Boot bằng Spring Initializr',
      'Tìm hiểu cấu trúc thư mục chuẩn trong dự án Spring Boot',
      'Quản lý dependencies bằng Maven/Gradle',
    ]
  },
  {
    id: 3,
    title: 'III. JPA & Hibernate (3 tuần)',
    content: 'Làm việc với JPA và Hibernate, quản lý phiên bản cơ sở dữ liệu với Flyway, và tối ưu hóa hiệu suất truy vấn.',
    image: '/assets/images/spring3.jpg',
    details: [
      'Tổng quan và thao tác cơ bản với JPA và Hibernate',
      'Sử dụng Flyway để quản lý phiên bản cơ sở dữ liệu',
      'Hiểu và xử lý vấn đề N+1 Query',
      'Kỹ thuật tối ưu hóa hiệu suất truy vấn',
      'Sử dụng Interceptor để can thiệp vào vòng đời Entity',
      'Quản lý State của Entity trong Hibernate',
    ]
  },
  {
    id: 4,
    title: 'IV. Spring Boot Nâng Cao (4 tuần)',
    content: 'Xây dựng ứng dụng Spring Boot nâng cao với bảo mật, bộ nhớ đệm, tác vụ định kỳ và xây dựng API hoàn chỉnh.',
    image: '/assets/images/spring2.png',
    details: [
      'Bảo mật hệ thống với Spring Security và JWT',
      'Áp dụng bộ nhớ đệm (Memory Cache) để cải thiện hiệu suất',
      'Cấu hình và thực thi tác vụ định kỳ (Cron Job Schedule)',
      'Làm việc với các annotation: @RestController, @RequestMapping, @RequestParam, @RequestBody',
      'Xử lý Request Validation với @Valid và quản lý Exception bằng @ControllerAdvice',
      'Xây dựng bộ API CRUD hoàn chỉnh cho một Entity mẫu',
    ]
  },
  {
    id: 5,
    title: 'V. Testing (1 tuần)',
    content: 'Viết Unit Test và kiểm thử các thành phần trong Spring Boot.',
    image: '/assets/images/spring5.png',
    details: [
      'Kiểm thử Service layer bằng JUnit5 và Mockito',
      'Kiểm thử Controller layer bằng MockMvc',
    ]
  },
  {
    id: 6,
    title: 'VI. Project Thực Chiến (2 tuần)',
    content: 'Làm việc với Git và triển khai dự án thực tế theo tiêu chuẩn doanh nghiệp.',
    image: '/assets/images/spring6.jpg',
    details: [
      'Git cơ bản: thiết lập môi trường, thao tác branch, sử dụng Git CLI và Git Plugin trong IntelliJ IDEA',
      'Git nâng cao: xử lý xung đột (conflict), merge & rebase, cherry-pick commit',
      'Phát triển, kiểm thử và hoàn thiện một dự án thực tế theo tiêu chuẩn doanh nghiệp',
    ]
  },
  {
    id: 7,
    title: 'VII. Triển khai Ứng dụng (Deploy) (1 tuần)',
    content: 'Docker hóa ứng dụng Spring Boot.',
    image: '/assets/images/spring7.jpg',
    details: [
      'Viết Dockerfile chuẩn cho ứng dụng',
      'Build Image và khởi chạy ứng dụng dưới dạng Container',
    ]
  },
  {
    id: 8,
    title: 'VIII. Kiến trúc Microservices (1 tuần)',
    content: 'Tìm hiểu về kiến trúc Microservices và các mô hình giao tiếp.',
    image: '/assets/images/spring8.jpg',
    details: [
      'So sánh kiến trúc Monolithic và Microservices',
      'Các mô hình giao tiếp giữa Microservices (synchronous vs asynchronous)',
      'Làm việc với Message Broker (RabbitMQ, Kafka,...)',
      'Quản lý Distributed Cache',
    ]
  },
  {
    id: 9,
    title: 'IX. Chuẩn bị Phỏng vấn (1 tuần)',
    content: 'Kỹ năng phỏng vấn và chuẩn bị hồ sơ.',
    image: '/assets/images/spring9.png',
    details: [
      'Hỗ trợ sửa CV',
      'Thực hành Mock Interview với tình huống thực tế',
    ]
  }
];

export const INSTRUCTOR = {
  name: "Ngô Nhất Toàn",
  avatar: "/assets/images/instructor.jpg",
  title: "Senior Backend Developer",
  company: "MoMo",
  experience: "4+ năm kinh nghiệm",
  education: {
    university: "FPT University",
    major: "Software Engineering",
    scholarship: "150M VND - Học bổng cho sinh viên xuất sắc",
  },
  technical_skills: [
    "Knowledge event-driven and Micro-service.",
    "Perform in Agile and Scrum development framework.",
    "Outstanding knowledge of OOP methodology, SOLID principles, design pattern.",
  ],
  skills: {
    languages: ["Java (Vert.x, Spring boot)", "NodeJS", "Flutter", "Golang"],
    tools: [
      "RabbitMQ",
      "Kafka",
      "MQTT",
      "Kubernetes",
      "Docker",
      "Git",
      "CI/CD",
    ],
    databases: [
      "Oracle",
      "Cassandra",
      "OceanBase",
      "Redis",
      "MySQL",
      "SQL Server",
    ],
  },
  experience_details: [
    {
      company: "MoMo (GIFT, PAYMENT, GRAB DEFENSE)",
      position: "Back-end Developer",
      period: "6/2022 - Hiện tại",
      description:
        "Backend developer tại ví điện tử đầu tiên phục vụ 30 triệu người dùng Việt Nam.",
      achievements: [
        "Tạo - xác thực - đề xuất quà tặng, áp dụng quà tặng trong thanh toán",
        "Refactor và định nghĩa 60 mã lỗi và mô tả lỗi của quà tặng",
        "Tích hợp dịch vụ payment-core với các team khác",
        "Xây dựng cầu nối giữa Model AI Grab và MoMo AI để kiểm tra người dùng rủi ro",
      ],
    },
    {
      company: "LOTTE DATA COMMUNICATION (HIGIENE)",
      position: "Full-stack Developer",
      period: "4/2021 - 4/2022",
      description:
        "Bảo trì và phát triển các dự án liên quan đến đánh giá vệ sinh của các cửa hàng trong hệ thống Lotte.",
      achievements: [
        "Triển khai dự án trên server WAS",
        "Tích hợp tải lên video với AWS S3",
        "Xây dựng API cho Prometheus sử dụng Spring Metrics",
      ],
    },
  ],
  motto:
    "Xây dựng hệ thống toàn cầu và trở thành nhà lãnh đạo xuất sắc có khả năng đặt mục tiêu rõ ràng, truyền cảm hứng và hướng dẫn đội ngũ phát triển.",
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Java Developer tại ABC Tech",
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    content:
      "Khóa học Spring Boot đã giúp tôi nâng cao kỹ năng và tìm được công việc mơ ước chỉ sau 2 tháng tốt nghiệp. Giảng viên tận tâm và kiến thức thực tế.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Fullstack Developer tại XYZ Solutions",
    image: "https://cdn-icons-png.flaticon.com/512/147/147135.png",
    content:
      "Tôi đã chuyển từ Frontend sang Fullstack nhờ khóa học này. Các project thực tế giúp tôi xây dựng portfolio ấn tượng để phỏng vấn.",
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Solution Architect tại DEF Corp",
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    content:
      "Kiến thức về microservices trong khóa học giúp tôi thiết kế hệ thống cho công ty hiệu quả hơn. Đầu tư vào khóa học này là quyết định đúng đắn.",
  },
];

export const PRICING = {
  title: "Khóa học Spring Boot 6 tháng",
  subtitle: "Đầy đủ tất cả các module từ cơ bản đến nâng cao",
  price: "12.000.000 VNĐ",
  features: [
    "Hơn 180 giờ học trực tiếp",
    "5+ dự án thực tế cho portfolio",
    "Code review 1-1 với giảng viên",
    "Chứng chỉ hoàn thành khóa học",
    "Hỗ trợ tìm việc sau khóa học",
    "Cộng đồng hỗ trợ trọn đời",
  ],
  installment: {
    title: "Hỗ trợ trả góp",
    description: "Thanh toán 6 đợt, mỗi đợt 2.000.000 VNĐ",
  },
};

export const FAQS = [
  {
    id: 1,
    question: "Khóa học này phù hợp với ai?",
    answer:
      "Khóa học phù hợp với các lập trình viên đã có kiến thức Java cơ bản hoặc những người đã có nền tảng về lập trình hướng đối tượng. Nếu bạn là người mới hoàn toàn, chúng tôi khuyên bạn nên học một khóa Java cơ bản trước.",
  },
  {
    id: 2,
    question: "Tôi cần chuẩn bị những gì trước khi học?",
    answer:
      "Bạn cần một máy tính với ít nhất 8GB RAM, Java Development Kit (JDK) 11 trở lên, và một IDE như IntelliJ IDEA hoặc Eclipse. Chúng tôi sẽ hướng dẫn bạn cài đặt các công cụ cần thiết trong buổi đầu tiên.",
  },
  // {
  //   id: 3,
  //   question: "Tôi có nhận được chứng chỉ sau khi hoàn thành khóa học không?",
  //   answer:
  //     "Có, bạn sẽ nhận được chứng chỉ hoàn thành khóa học sau khi hoàn thành dự án cuối khóa và đạt được ít nhất 70% điểm trong các bài kiểm tra.",
  // },
  {
    id: 4,
    question: "Có hỗ trợ tìm việc làm sau khi học xong không?",
    answer:
      "Chúng tôi có mạng lưới đối tác là các công ty công nghệ và sẽ giới thiệu học viên xuất sắc đến các đối tác này. Ngoài ra, chúng tôi cũng hỗ trợ xây dựng CV và chuẩn bị phỏng vấn.",
  },
  {
    id: 5,
    question: "Tôi có thể học online không hay bắt buộc phải đến lớp?",
    answer:
      "Khóa học được thiết kế cho cả hai hình thức học tập. Bạn có thể tham gia trực tiếp tại lớp hoặc tham gia online thông qua nền tảng học trực tuyến của chúng tôi.",
  },
];

export const FOOTER_LINKS = {
  courses: [
    { name: "Spring Boot Cơ bản", href: "#" },
    { name: "Microservices", href: "#" },
    { name: "Spring Security", href: "#" },
    { name: "Spring Data JPA", href: "#" },
  ],
  support: [
    { name: "Trung tâm hỗ trợ", href: "#" },
    { name: "Tài liệu API", href: "#" },
    { name: "Diễn đàn", href: "#" },
    { name: "Tuyển dụng", href: "#" },
  ],
  contact: {
    email: "ngonhattoan99@gmail.com",
    phone: "077 258 9922",
  },
  social: [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
  ],
};

export const HERO_INFO_CARDS = [
  {
    id: 1,
    icon: Code,
    iconBg: "bg-gradient-to-r from-indigo-100 to-blue-100",
    iconColor: "text-indigo-600",
    title: {
      text: "Spring Boot Framework",
      color: "text-indigo-800",
    },
    description:
      "Học từ cơ bản đến nâng cao với giảng viên có hơn 10 năm kinh nghiệm",
    rotation: 3,
    className: "transform-gpu hover:scale-105",
  },
  {
    id: 2,
    icon: Award,
    iconBg: "bg-gradient-to-r from-red-100 to-pink-100",
    iconColor: "text-red-600",
    title: {
      text: "Chứng chỉ có giá trị",
      color: "text-red-800",
    },
    description:
      "Được công nhận bởi các công ty hàng đầu trong ngành công nghệ",
    rotation: -3,
    className: "transform-gpu hover:scale-105",
  },
  {
    id: 3,
    icon: BookOpen,
    iconBg: "bg-gradient-to-r from-green-100 to-teal-100",
    iconColor: "text-green-600",
    title: {
      text: "Tài liệu đầy đủ",
      color: "text-green-800",
    },
    description:
      "Tài liệu học tập chi tiết và cập nhật theo các phiên bản mới nhất",
    rotation: 2,
    className: "transform-gpu hover:scale-105",
  },
];

export const HERO_CTA_CARD = {
  className:
    "bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300 text-white hover:scale-105 transform-gpu",
  title: "Bắt đầu học ngay!",
  description: "Khóa học tiếp theo sẽ bắt đầu vào ngày 15/05/2025",
  slots: 20,
  discount: "15%",
};
