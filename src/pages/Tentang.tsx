import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Target, Zap, Github, Mail, Globe } from 'lucide-react';

const Tentang: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Algoritma ML Canggih',
      description: 'Model machine learning canggih termasuk algoritma regresi, klasifikasi, dan clustering.',
    },
    {
      icon: Users,
      title: 'Antarmuka Ramah Pengguna',
      description: 'Desain intuitif yang membuat machine learning dapat diakses oleh mahasiswa, peneliti, dan profesional.',
    },
    {
      icon: Target,
      title: 'Prediksi Akurat',
      description: 'Model berkinerja tinggi dengan tingkat akurasi standar industri dan metrik evaluasi yang komprehensif.',
    },
    {
      icon: Zap,
      title: 'Pemrosesan Real-Time',
      description: 'Pemrosesan data dan pelatihan model yang cepat dengan hasil instan dan visualisasi interaktif.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Kepala Ilmuwan Data',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      bio: 'PhD dalam Machine Learning dengan 10+ tahun dalam penelitian AI.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Insinyur ML Utama',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Ahli dalam sistem ML yang dapat diskalakan dan deep learning.',
    },
    {
      name: 'Jessica Lee',
      role: 'Analis Data Utama',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      bio: 'Spesialis dalam mengubah data kompleks menjadi wawasan yang dapat ditindaklanjuti.',
    },
    {
      name: 'David Kim',
      role: 'Ilmuwan Data Senior',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face',
      bio: 'Fokus pada pemodelan prediktif dan analisis statistik.',
    },
    {
      name: 'Emily Johnson',
      role: 'Desainer UX/UI',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      bio: 'Bersemangat membuat teknologi kompleks dapat diakses.',
    },
  ];

  const stats = [
    { label: 'Pengguna Aktif', value: '10.000+' },
    { label: 'Proyek Dibuat', value: '50.000+' },
    { label: 'Model Dilatih', value: '500.000+' },
    { label: 'Tingkat Keberhasilan', value: '94%' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tentang MLHub</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Mendemokratisasikan machine learning melalui teknologi inovatif dan desain intuitif. 
              Kami percaya setiap orang harus memiliki akses ke alat AI yang kuat.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Misi Kami
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kami memiliki misi untuk membuat machine learning dapat diakses oleh semua orang. Baik Anda seorang 
                mahasiswa yang mempelajari dasar-dasarnya, seorang analis data yang mengungkap wawasan, seorang ilmuwan data yang membangun model prediktif, atau seorang peneliti 
                yang menjelajahi batas-batas baru, MLHub menyediakan alat yang Anda butuhkan.
              </p>
              <p className="text-lg text-gray-600">
                Platform kami menggabungkan algoritma canggih dengan antarmuka yang ramah pengguna, 
                memungkinkan Anda untuk fokus pada pemecahan masalah daripada bergelut dengan kode yang kompleks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih MLHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami membangun MLHub dengan keyakinan bahwa alat machine learning yang kuat 
              harus dapat diakses, intuitif, dan efektif.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Temui Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim ahli kami yang beragam menyatukan pengalaman puluhan tahun dalam 
              machine learning, rekayasa, dan desain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin belajar lebih lanjut? Kami akan senang mendengar dari Anda.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:contact@mlhub.dev"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email Kami</span>
              </a>
              <a
                href="https://github.com/mlhub"
                className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://mlhub.dev"
                className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span>Situs Web</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
