"use client";

import { motion } from "framer-motion";
import { Search, PiggyBank, Users, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: <Search className="w-6 h-6 text-emerald-900 group-hover:text-white transition-colors" />,
    title: "Tìm Kiếm Nhanh Chóng",
    description: "Dễ dàng tra cứu và lọc giáo trình theo đúng môn học, học kỳ và khoa của bạn.",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-emerald-900 group-hover:text-white transition-colors" />,
    title: "Tiết Kiệm Tối Đa",
    description: "Giảm thiểu chi phí mua sách mới mỗi kỳ bằng cách trao đổi trực tiếp với các bạn khóa trước.",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-900 group-hover:text-white transition-colors" />,
    title: "Cộng Đồng Gắn Kết",
    description: "Kết nối, học hỏi kinh nghiệm và chia sẻ tài liệu hữu ích cùng mạng lưới sinh viên ULIS.",
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-900 group-hover:text-white transition-colors" />,
    title: "Tiện Lợi, Dễ Dàng",
    description: "Giao diện thân thiện, đăng tin trao đổi chỉ với vài thao tác đơn giản trên mọi thiết bị.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B98112_1px,transparent_1px),linear-gradient(to_bottom,#10B98112_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-100 opacity-50 blur-[100px] pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm"
          >
            Lợi Ích Nổi Bật
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-4xl font-black text-emerald-950 sm:text-5xl mb-6 tracking-tight drop-shadow-sm"
          >
            Tại sao nên dùng ULIS Book Loop?
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-xl text-slate-800 font-bold"
          >
            Nền tảng được thiết kế chuyên biệt để giúp sinh viên Ngoại ngữ giải quyết triệt để vấn đề giáo trình mỗi dịp đầu kỳ.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-white border border-emerald-100 p-8 rounded-[2.5rem] shadow-lg shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-50 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:shadow-md group-hover:shadow-emerald-500/40 transition-all duration-500 border border-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-950 transition-colors duration-300">{feature.title}</h3>
              <p className="text-[0.95rem] text-slate-600 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
