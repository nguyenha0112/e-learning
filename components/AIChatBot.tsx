"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  RotateCcw,
  Move
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là StudyBot, trợ lý AI của StudyEngEra. Tôi có thể giúp bạn về:\n\n• Thông tin khóa học\n• Hướng dẫn sử dụng\n• Tiến độ học tập\n• Giải đáp thắc mắc\n\nBạn cần hỗ trợ gì hôm nay?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 24 }); // bottom-6 right-6 = 24px
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBotRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!chatBotRef.current) return;
    
    const rect = chatBotRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !chatBotRef.current) return;

      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      const chatBotRect = chatBotRef.current.getBoundingClientRect();
      
      // Calculate new position
      let newX = viewport.width - (e.clientX - dragOffset.x + chatBotRect.width);
      let newY = viewport.height - (e.clientY - dragOffset.y + chatBotRect.height);

      // Keep within viewport bounds
      newX = Math.max(0, Math.min(newX, viewport.width - chatBotRect.width));
      newY = Math.max(0, Math.min(newY, viewport.height - chatBotRect.height));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragOffset]);

  const commonResponses = {
    "đăng ký": "Để đăng ký khóa học, bạn có thể:\n1. Truy cập mục 'Khóa học'\n2. Chọn khóa học phù hợp\n3. Click 'Đăng ký' và làm theo hướng dẫn thanh toán\n\nBạn cần hỗ trợ thêm về quy trình đăng ký không?",
    "thanh toán": "StudyEngEra hỗ trợ các hình thức thanh toán:\n• Thẻ tín dụng/ghi nợ\n• Ví điện tử (MoMo, ZaloPay)\n• Chuyển khoản ngân hàng\n• Thanh toán tại cửa hàng\n\nBạn muốn biết thêm chi tiết về phương thức nào?",
    "khóa học": "StudyEngEra có nhiều khóa học:\n• English for Beginners (A1)\n• English Intermediate (B1)\n• Business English Professional\n• IELTS Preparation Course\n• English Conversation Master\n\nBạn muốn tìm hiểu về khóa học nào cụ thể?",
    "tiến độ": "Bạn có thể theo dõi tiến độ học tập tại:\n• Trang chủ - phần 'Tiến trình học tập'\n• Mục 'Đánh giá năng lực'\n• Chi tiết từng khóa học\n\nTiến độ được cập nhật real-time sau mỗi bài học hoàn thành.",
    "chứng chỉ": "Chứng chỉ sẽ được cấp khi:\n• Hoàn thành 100% bài học\n• Đạt điểm tối thiểu trong bài kiểm tra cuối khóa\n• Nộp đầy đủ bài tập được yêu cầu\n\nChứng chỉ có thể tải về định dạng PDF trong mục 'Quản lý thông tin cá nhân'.",
    "quên mật khẩu": "Để lấy lại mật khẩu:\n1. Click 'Quên mật khẩu' tại trang đăng nhập\n2. Nhập email đã đăng ký\n3. Kiểm tra email và click link đặt lại\n4. Tạo mật khẩu mới\n\nNếu không nhận được email, hãy kiểm tra thư mục spam.",
    "video": "Nếu video bị lag hoặc không tải:\n• Kiểm tra kết nối internet (tối thiểu 5Mbps)\n• Thử giảm chất lượng video xuống 480p/720p\n• Làm mới trang web\n• Xóa cache trình duyệt\n\nVẫn không được? Liên hệ bộ phận kỹ thuật.",
    "liên hệ": "Bạn có thể liên hệ qua:\n📧 Email: support@studyengera.com\n📞 Hotline: 1900 1234 (24/7)\n💬 Chat trực tuyến: ngay tại đây\n📍 Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM",
    "giá": "Giá các khóa học:\n• English for Beginners: Miễn phí\n• English Intermediate: 1,200,000 VNĐ\n• Business English: 2,500,000 VNĐ\n• IELTS Preparation: 3,000,000 VNĐ\n\nCó nhiều chương trình ưu đãi và trả góp. Bạn muốn biết thêm không?"
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for keywords in user message
    for (const [keyword, response] of Object.entries(commonResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    // Default responses for common greetings and general questions
    if (message.includes("xin chào") || message.includes("hello") || message.includes("chào")) {
      return "Xin chào! Rất vui được hỗ trợ bạn. Bạn cần tôi giúp gì về StudyEngEra?";
    }
    
    if (message.includes("cảm ơn") || message.includes("thanks")) {
      return "Không có gì! Tôi luôn sẵn sàng hỗ trợ bạn. Còn điều gì khác cần giúp không?";
    }

    if (message.includes("tạm biệt") || message.includes("bye")) {
      return "Tạm biệt! Chúc bạn học tập hiệu quả. Hãy quay lại khi cần hỗ trợ nhé! 📚✨";
    }

    // Default response for unrecognized queries
    return "Tôi hiểu bạn đang cần hỗ trợ. Tuy nhiên, tôi chưa hiểu rõ câu hỏi của bạn. \n\nBạn có thể hỏi tôi về:\n• Đăng ký khóa học\n• Thanh toán\n• Tiến độ học tập\n• Chứng chỉ\n• Vấn đề kỹ thuật\n\nHoặc liên hệ hotline 1900 1234 để được hỗ trợ trực tiếp.";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Xin chào! Tôi là StudyBot, trợ lý AI của StudyEngEra. Tôi có thể giúp bạn về:\n\n• Thông tin khóa học\n• Hướng dẫn sử dụng\n• Tiến độ học tập\n• Giải đáp thắc mắc\n\nBạn cần hỗ trợ gì hôm nay?",
        sender: "bot",
        timestamp: new Date()
      }
    ]);
  };

  if (!isOpen) {
    return (
      <div 
        className="fixed z-50"
        style={{ 
          bottom: `${position.y}px`, 
          right: `${position.x}px` 
        }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div 
      ref={chatBotRef}
      className="fixed z-50"
      style={{ 
        bottom: `${position.y}px`, 
        right: `${position.x}px` 
      }}
    >
      <Card className={`w-80 transition-all duration-200 shadow-xl ${
        isMinimized ? "h-14" : "h-96"
      } ${isDragging ? 'select-none' : ''}`}>
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1 rounded-full">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">StudyBot</h4>
              <p className="text-xs opacity-90">Trợ lý AI</p>
            </div>
            <Move className="h-4 w-4 opacity-70" />
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
              className="h-8 w-8 p-0 text-white hover:bg-white/20"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                resetChat();
              }}
              className="h-8 w-8 p-0 text-white hover:bg-white/20"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="h-8 w-8 p-0 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <ScrollArea className="h-64 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && (
                          <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                        )}
                        {message.sender === "user" && (
                          <User className="h-4 w-4 mt-1 flex-shrink-0 order-2" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                          <p className={`text-xs mt-1 opacity-70`}>
                            {message.timestamp.toLocaleTimeString("vi-VN", {
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Nhấn Enter để gửi • AI có thể có sai sót
              </p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}