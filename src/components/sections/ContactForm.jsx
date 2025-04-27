import React, { useState, useRef } from 'react';
import { ArrowRight, Mail, X, Check } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'dangnguyenminhan123@gmail.com';

const EMAIL_SERVICE_ID = 'service_qcqwkib';
const EMAIL_TEMPLATE_ID = 'template_g04gj9b';
const EMAIL_PUBLIC_KEY = '1Z4bxWigXU5vA3fzo';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState({ success: true, message: '' });

  const formRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      email: CONTACT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: `Đăng ký tư vấn khóa học Spring Boot - ${formData.name}`,
      message: `Tôi quan tâm đến khóa học Spring Boot 6 tháng và muốn nhận tư vấn chi tiết.`
    };

    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
      .then((result) => {
        setModalStatus({
          success: true,
          message: `Cảm ơn ${formData.name}! Chúng tôi đã nhận được yêu cầu tư vấn của bạn và sẽ liên hệ lại trong thời gian sớm nhất.`
        });
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
      }, (error) => {
        setModalStatus({
          success: false,
          message: 'Đã xảy ra lỗi khi gửi yêu cầu! Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.'
        });
        setShowModal(true);
        console.error('Email error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng để thay đổi sự nghiệp của bạn?</h2>
              <p className="text-xl opacity-90">Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt</p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent text-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200"
                    placeholder="Nhập họ và tên của bạn"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent text-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200"
                    placeholder="Nhập địa chỉ email của bạn"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent text-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200"
                    placeholder="Nhập số điện thoại của bạn"
                    pattern="^(0|84)\d{8,9}$"
                    title="Vui lòng nhập số điện thoại hợp lệ"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight />}
                  iconPosition="right"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Đăng ký tư vấn miễn phí'}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative z-10">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${modalStatus.success ? 'bg-green-100' : 'bg-red-100'
                }`}>
                {modalStatus.success ? (
                  <Check size={32} className="text-green-600" />
                ) : (
                  <X size={32} className="text-red-600" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {modalStatus.success ? 'Đã gửi yêu cầu!' : 'Lỗi gửi yêu cầu!'}
              </h3>
              <p className="text-gray-600 mb-6">
                {modalStatus.message}
              </p>
              <Button
                variant="primary"
                onClick={() => setShowModal(false)}
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
};

export default ContactForm;