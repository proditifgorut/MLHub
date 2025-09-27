import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Brain, MessageSquare, TrendingUp, Users, Zap } from 'lucide-react';

const Beranda: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Penambangan & Analisis Data',
      description: 'Unggah dataset, lakukan analisis data, dan terapkan teknik sains data dengan visualisasi interaktif.',
      link: '/penambangan-data',
    },
    {
      icon: Brain,
      title: 'Prediksi ML',
      description: 'Latih dan terapkan model machine learning untuk proyek sains data dan prediksi yang akurat.',
      link: '/prediksi',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot AI',
      description: 'Chatbot layanan pelanggan cerdas yang didukung oleh pemrosesan bahasa alami.',
      link: '/chatbot',
    },
  ];

  const stats = [
    { label: 'Pengguna Aktif', value: '10.000+', icon: Users },
    { label: 'Model ML', value: '500+', icon: Brain },
    { label: 'Prediksi Dibuat', value: '1M+', icon: TrendingUp },
    { label: 'Tingkat Akurasi', value: '94%', icon: Zap },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Platform untuk Analis Data
              <span className="block text-yellow-300">& Ilmuwan Data</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Memberdayakan para profesional data dan penggemar ML untuk mengunggah data, melatih model, dan mendapatkan wawasan secara instan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/analisis-data"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Mulai Analisis
              </Link>
              <Link
                to="/prediksi"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Buat Prediksi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur ML yang Kuat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk membangun, melatih, dan menerapkan model machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Pelajari Lebih Lanjut →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap untuk Memulai?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pengguna yang sudah menggunakan MLHub untuk proyek machine learning mereka
            </p>
            <Link
              to="/penambangan-data"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Mulai Proyek Pertama Anda
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
