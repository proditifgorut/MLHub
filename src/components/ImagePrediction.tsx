import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Zap, CheckCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const ImagePrediction: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
        analyzImage();
      }
    },
  });

  const analyzImage = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setPrediction({
        category: 'Kucing',
        confidence: 0.94,
        predictions: [
          { label: 'Kucing', confidence: 0.94 },
          { label: 'Anjing', confidence: 0.04 },
          { label: 'Harimau', confidence: 0.02 },
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const sampleImages = [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop',
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Camera className="h-6 w-6 mr-2 text-blue-600" />
          Pengenalan Gambar
        </h2>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isDragActive ? 'Letakkan gambar di sini' : 'Unggah sebuah gambar'}
          </h3>
          <p className="text-gray-600 mb-4">
            Seret dan letakkan gambar, atau klik untuk menelusuri
          </p>
          <div className="text-sm text-gray-500">
            Format yang didukung: PNG, JPG, JPEG, GIF (Ukuran maks: 10MB)
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Atau coba dengan gambar contoh:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sampleImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Contoh ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  setUploadedImage(image);
                  analyzImage();
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {(uploadedImage || isAnalyzing) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Hasil Analisis</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Diunggah"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <div>
              {isAnalyzing ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-600">Menganalisis gambar...</p>
                  </div>
                </div>
              ) : prediction ? (
                <div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Prediksi Selesai</h4>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {prediction.category}
                    </div>
                    <div className="text-gray-600">
                      Keyakinan: {(prediction.confidence * 100).toFixed(1)}%
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Prediksi Teratas:</h5>
                    <div className="space-y-2">
                      {prediction.predictions.map((pred: any, index: number) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-700">{pred.label}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${pred.confidence * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">
                              {(pred.confidence * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImagePrediction;
