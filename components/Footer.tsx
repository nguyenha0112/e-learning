"use client";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4 font-semibold text-lg text-black">StudyEngEra</h3>
            <p className="text-gray-600 text-sm">
              Nền tảng học tiếng Anh trực tuyến hàng đầu Việt Nam
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-black">Khóa học</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>English for Beginners</li>
              <li>Intermediate English</li>
              <li>Business English</li>
              <li>IELTS Preparation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-black">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Trung tâm trợ giúp</li>
              <li>Liên hệ</li>
              <li>Khiếu nại</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-black">Liên hệ</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: info@studyengera.com</p>
              <p>Hotline: 1900 1234</p>
              <p>Địa chỉ: 01 Quang Trung, Hải Châu, Đà Nẵng</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 StudyEngEra - SEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}