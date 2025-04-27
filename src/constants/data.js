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
    title: "Tháng 1-2: Nền tảng Java & Spring Core",
    content:
      "Làm quen với Java cơ bản, OOP, cấu trúc dữ liệu. Tìm hiểu về Spring Framework, Dependency Injection, Inversion of Control, Annotations và Spring Bean Life Cycle.",
    image: "https://images.viblo.asia/013a59c2-6f04-4ba0-8b9c-55c079701098.png",
    details: [
      "2 buổi học mỗi tuần",
      "8+ bài tập thực hành",
      "1 dự án thực tế",
      "Hỗ trợ 1-1 với giảng viên",
    ],
  },
  {
    id: 2,
    title: "Tháng 3: Spring MVC & Thymeleaf",
    content:
      "Xây dựng ứng dụng web với Spring MVC. Làm việc với Thymeleaf template engine. Phát triển RESTful APIs và xử lý form data.",
    image:
      "https://st.quantrimang.com/photos/image/2023/08/28/Thymeleaf-spring-boot-7.jpg",
    details: [
      "2 buổi học mỗi tuần",
      "6+ bài tập thực hành",
      "1 dự án thực tế",
      "Code review cùng giảng viên",
    ],
  },
  {
    id: 3,
    title: "Tháng 4: Spring Data & Databases",
    content:
      "Làm việc với Spring Data JPA, Hibernate ORM. Kết nối với MySQL, PostgreSQL. Transaction management và data validation.",
    image:
      "https://miro.medium.com/v2/resize:fit:700/1*VNIM8wOsNoFPvFgK1ENTkQ.png",
    details: [
      "2 buổi học mỗi tuần",
      "8+ bài tập thực hành",
      "1 dự án thực tế",
      "Hỗ trợ 1-1 với giảng viên",
    ],
  },
  {
    id: 4,
    title: "Tháng 5: Spring Security & Testing",
    content:
      "Triển khai bảo mật với Spring Security. Authentication & Authorization. Unit testing và integration testing với JUnit và Mockito.",
    image: "https://media.techmaster.vn/api/static/bm0tmgk51co4vclgfvu0/c08n1pc51co3o9rj1f80",
    details: [
      "2 buổi học mỗi tuần",
      "7+ bài tập thực hành",
      "1 dự án thực tế",
      "Đánh giá code chất lượng",
    ],
  },
  {
    id: 5,
    title: "Tháng 6: Microservices & Deployment",
    content:
      "Phát triển microservices với Spring Boot và Spring Cloud. Docker containerization. CI/CD pipeline và deployment lên cloud platforms như AWS.",
    image: "https://devops.vn/uploads/images/2025/04/6c77a19f-79b4-4f45-a97f-a174eaf767cc.webp",
    details: [
      "2 buổi học mỗi tuần",
      "5+ bài tập thực hành",
      "1 dự án tổng hợp",
      "Hướng dẫn portfolio",
    ],
  },
];

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
  {
    id: 3,
    question: "Tôi có nhận được chứng chỉ sau khi hoàn thành khóa học không?",
    answer:
      "Có, bạn sẽ nhận được chứng chỉ hoàn thành khóa học sau khi hoàn thành dự án cuối khóa và đạt được ít nhất 70% điểm trong các bài kiểm tra.",
  },
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
    email: "info@springbootacademy.vn",
    phone: "0912 345 678",
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
