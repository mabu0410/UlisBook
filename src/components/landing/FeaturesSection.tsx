"use client";

import { motion } from "framer-motion";
import { Search, PiggyBank, Users, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: <Search className="w-6 h-6 text-brand-darkest" />,
    title: "Tìm Kiếm Nhanh Chóng",
    description: "Dễ dàng tra cứu và lọc giáo trình theo đúng môn học, học kỳ và khoa của bạn.",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-brand-darkest" />,
    title: "Tiết Kiệm Tối Đa",
    description: "Giảm thiểu chi phí mua sách mới mỗi kỳ bằng cách trao đổi trực tiếp với các bạn khóa trước.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-darkest" />,
    title: "Cộng Đồng Gắn Kết",
    description: "Kết nối, học hỏi kinh nghiệm và chia sẻ tài liệu hữu ích cùng mạng lưới sinh viên ULIS.",
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-darkest" />,
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-lightest/30 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-brand-lighter text-brand-darkest text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Lợi Ích Nổi Bật
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl font-bold text-brand-darkest sm:text-4xl"
          >
            Tại sao nên dùng ULIS Book Loop?
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mt-4 text-base text-slate-600"
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
              className="relative group bg-white border border-brand-light p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-muted/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-lighter mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-darkest mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
