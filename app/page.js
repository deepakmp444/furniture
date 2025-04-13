'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiStar, FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiMapPin, FiPhone, FiMail, FiClock, FiHeart } from 'react-icons/fi';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Top CTA Banner */}
      {showBanner && (
        <div className="bg-amber-500 text-white text-center py-3 relative">
          <p className="font-medium">🎉 आज के लिए विशेष - 70% की छूट! जल्दी करें, ऑफर सीमित है!</p>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          >
            <FiX />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">फर्नीचर स्टोर</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-amber-500 transition-colors">होम</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 transition-colors">शॉप</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 transition-colors">हमारे बारे में</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 transition-colors">ब्लॉग</a>
              <a href="#" className="text-gray-800 hover:text-amber-500 transition-colors">संपर्क</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-amber-500 transition-colors">
                <FiSearch size={20} />
              </button>
              <button className="text-gray-700 hover:text-amber-500 transition-colors">
                <FiUser size={20} />
              </button>
              <button className="text-gray-700 hover:text-amber-500 transition-colors relative">
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="आधुनिक लिविंग रूम"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          className="relative container mx-auto px-4 h-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              अपने घर को बनाएं खूबसूरत
            </h1>
            <p className="text-xl mb-8">
              हमारे हस्तनिर्मित फर्नीचर के साथ अपने घर को एक नया रूप दें। आराम और डिज़ाइन का अद्भुत संगम।
            </p>
            <motion.button 
              className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              अभी खरीदें
            </motion.button>
          </div>
        </motion.div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">श्रेणियां</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारे विविध फर्नीचर श्रेणियों में से चुनें जो आपके घर के हर कमरे के लिए उपयुक्त हैं</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'लिविंग रूम', 
                icon: '🛋️',
                image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=958&q=80',
                slug: 'living-room'
              },
              { 
                name: 'बेडरूम', 
                icon: '🛏️',
                image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
                slug: 'bedroom'
              },
              { 
                name: 'डाइनिंग रूम', 
                icon: '🍽️',
                image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
                slug: 'dining-room'
              },
              { 
                name: 'ऑफिस', 
                icon: '💼',
                image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                slug: 'office'
              },
              { 
                name: 'आउटडोर', 
                icon: '🌿',
                image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
                slug: 'outdoor'
              },
              { 
                name: 'एक्सेसरीज', 
                icon: '✨',
                image: 'https://images.unsplash.com/photo-1545251142-f32339076e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                slug: 'accessories'
              }
            ].map((category) => (
              <motion.a
                key={category.name}
                href={`/category/${category.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 block"
                whileHover={{ y: -10 }}
                {...fadeInUp}
              >
                <div className="h-64 relative">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-5xl">{category.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                  <p className="text-amber-500 hover:text-amber-600 font-medium flex items-center">
                    देखें 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">लोकप्रिय उत्पाद</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारे सबसे लोकप्रिय और बेस्टसेलिंग फर्नीचर आइटम्स</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                id: 1, 
                name: 'आधुनिक आराम कुर्सी', 
                price: '₹12,999', 
                rating: 4.5,
                image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1510&q=80',
                slug: 'modern-comfort-chair'
              },
              { 
                id: 2, 
                name: 'सॉलिड वुड डाइनिंग टेबल', 
                price: '₹24,999', 
                rating: 5,
                image: 'https://images.unsplash.com/photo-1615066390971-03e2b3324daf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80',
                slug: 'solid-wood-dining-table'
              },
              { 
                id: 3, 
                name: 'किंग साइज़ बेड', 
                price: '₹32,999', 
                rating: 4,
                image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                slug: 'king-size-bed'
              },
              { 
                id: 4, 
                name: 'वर्कस्पेस डेस्क', 
                price: '₹9,999', 
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1635&q=80',
                slug: 'workspace-desk'
              }
            ].map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
                whileHover={{ y: -5 }}
                {...fadeInUp}
              >
                <a href={`/product/${product.slug}`} className="block">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                      <FiHeart className="text-gray-400 hover:text-red-500 cursor-pointer" size={18} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <button className="w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                        <FiShoppingCart size={16} />
                        <span>तुरंत खरीदें</span>
                      </button>
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <a href={`/product/${product.slug}`} className="block">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-amber-500 transition-colors">{product.name}</h3>
                  </a>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar 
                        key={i}
                        className={`${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'} ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? 'text-amber-400' : ''}`}
                        size={16}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-bold text-xl">{product.price}</p>
                    <motion.button 
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiShoppingCart size={16} />
                      <span>कार्ट में डालें</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.a 
              href="/products"
              className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              और उत्पाद देखें
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="rounded-3xl overflow-hidden relative h-[500px]"
              whileHover={{ scale: 1.02 }}
              {...fadeInUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="हमारा वर्कशॉप"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">हमारी कहानी</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                2010 में स्थापित, हमारी फर्नीचर कंपनी का मिशन है उच्च-गुणवत्ता वाले, टिकाऊ और सुंदर फर्नीचर का निर्माण करना जो आपके घर को बदल दे।
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                हम भारतीय शिल्प परंपराओं और आधुनिक डिजाइन को मिलाकर ऐसे फर्नीचर बनाते हैं जो न केवल सुंदर हो, बल्कि आपके दैनिक जीवन को आसान भी बनाए। हमारे कारीगर पीढ़ियों से चली आ रही तकनीकों का उपयोग करके हर टुकड़े पर महीनों तक काम करते हैं।
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <h3 className="text-amber-500 text-4xl font-bold mb-2">10+</h3>
                  <p className="text-gray-600">वर्षों का अनुभव</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <h3 className="text-amber-500 text-4xl font-bold mb-2">5000+</h3>
                  <p className="text-gray-600">संतुष्ट ग्राहक</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <h3 className="text-amber-500 text-4xl font-bold mb-2">200+</h3>
                  <p className="text-gray-600">डिज़ाइन</p>
                </div>
              </div>
              <motion.button 
                className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                और जानें
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">ग्राहकों की राय</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारे संतुष्ट ग्राहक क्या कहते हैं</p>
          
          <div className="relative">
            {/* Carousel Control Left */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg p-3 z-10 hidden md:block hover:bg-amber-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  id: 1, 
                  name: 'अमित शर्मा', 
                  location: 'दिल्ली',
                  title: 'टेक कंपनी के CEO',
                  rating: 5,
                  text: 'मैंने अपने लिविंग रूम के लिए सोफा खरीदा। क्वालिटी बहुत अच्छी है और डिलीवरी भी समय पर हुई। बिल्कुल सही फीट है मेरे घर में! इसके अलावा इनकी कस्टमर सर्विस भी बहुत अच्छी है।',
                  productImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
                },
                { 
                  id: 2, 
                  name: 'प्रिया गुप्ता', 
                  location: 'मुंबई',
                  title: 'इंटीरियर डिज़ाइनर',
                  rating: 4.5,
                  text: 'मेरे बेडरूम के लिए बिस्तर और अलमारी खरीदी। डिज़ाइन बेहद सुंदर है और डिलीवरी और असेंबली का अनुभव भी अच्छा रहा। अगली बार भी इन्हीं से खरीदूंगी।',
                  productImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
                },
                { 
                  id: 3, 
                  name: 'राहुल वर्मा', 
                  location: 'बैंगलोर',
                  title: 'स्टार्टअप फाउंडर',
                  rating: 5,
                  text: 'वर्किंग डेस्क और ऑफिस चेयर खरीदी। उत्पाद की गुणवत्ता अविश्वसनीय है। हर पैसा वसूल है! मेरे ऑफिस में सभी लोग इसकी तारीफ करते हैं।',
                  productImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1635&q=80',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
                }
              ].map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  whileHover={{ y: -5 }}
                  {...fadeInUp}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location} • {testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="mb-2 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar 
                        key={i}
                        className={`${i < Math.floor(testimonial.rating) ? 'text-amber-400' : 'text-gray-300'} ${i === Math.floor(testimonial.rating) && testimonial.rating % 1 > 0 ? 'text-amber-400' : ''}`}
                        size={16}
                        fill={i < Math.floor(testimonial.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-amber-500 font-medium">{testimonial.rating.toFixed(1)}</span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg mt-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <Image 
                        src={testimonial.productImage}
                        alt="Product"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">खरीदा गया उत्पाद</p>
                      <p className="text-sm font-medium text-gray-800">
                        {testimonial.id === 1 ? 'मॉडर्न सोफा सेट' : testimonial.id === 2 ? 'किंग साइज़ बेड' : 'ऑफिस वर्कस्टेशन'}
                      </p>
                      <a href="#" className="text-xs text-amber-500 hover:underline">उत्पाद देखें →</a>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-right">
                    <p className="text-xs text-gray-500">{testimonial.id === 1 ? '3 दिन पहले' : testimonial.id === 2 ? '1 सप्ताह पहले' : '2 सप्ताह पहले'}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Carousel Control Right */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-lg p-3 z-10 hidden md:block hover:bg-amber-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[0, 1, 2].map((dot) => (
                <button 
                  key={dot} 
                  className={`w-3 h-3 rounded-full ${dot === 0 ? 'bg-amber-500' : 'bg-gray-300 hover:bg-amber-300 transition-colors'}`}
                  aria-label={`Go to slide ${dot + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <motion.a 
              href="/testimonials"
              className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              और ग्राहक समीक्षाएँ पढ़ें
            </motion.a>
          </div>
        </div>
      </section>

      {/* Room Inspiration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">रूम इंस्पिरेशन</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारे डिज़ाइनर्स द्वारा तैयार किये गए इंटीरियर से प्रेरणा लें</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'आधुनिक लिविंग रूम', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=958&q=80' },
              { name: 'मिनिमलिस्ट बेडरूम', image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80' },
              { name: 'सोशल डाइनिंग', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
            ].map((room, index) => (
              <motion.div 
                key={index}
                className="relative rounded-2xl overflow-hidden group h-[400px]"
                whileHover={{ scale: 1.02 }}
                {...fadeInUp}
              >
                <Image 
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <motion.button 
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    इस लुक को खरीदें
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button 
              className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              और प्रेरणा देखें
            </motion.button>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">अपना फर्नीचर कस्टमाइज़ करें</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">अपनी पसंद के अनुसार मेटेरियल, रंग और फिनिश चुनें</p>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">अपना सोफा डिज़ाइन करें</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">मेटेरियल</label>
                    <div className="grid grid-cols-4 gap-3">
                      {['कपड़ा', 'चमड़ा', 'कॉटन', 'वेलवेट'].map((material) => (
                        <motion.button 
                          key={material}
                          className={`border py-2 px-4 rounded-lg text-sm ${material === 'कपड़ा' ? 'bg-amber-500 text-white border-amber-500' : 'border-gray-300 text-gray-700 hover:border-amber-500'}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {material}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">रंग</label>
                    <div className="flex space-x-3">
                      {[
                        { name: 'ग्रे', color: 'bg-gray-500' },
                        { name: 'नेवी', color: 'bg-blue-900' },
                        { name: 'सैंड', color: 'bg-yellow-100' },
                        { name: 'ग्रीन', color: 'bg-green-700' },
                        { name: 'नेचरल', color: 'bg-amber-200' },
                      ].map((color) => (
                        <motion.button 
                          key={color.name}
                          className={`w-8 h-8 rounded-full ${color.color} ${color.name === 'ग्रे' ? 'ring-2 ring-amber-500 ring-offset-2' : ''}`}
                          title={color.name}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        ></motion.button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">साइज़</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['सिंगल', 'डबल', 'एल-शेप'].map((size) => (
                        <motion.button 
                          key={size}
                          className={`border py-2 px-4 rounded-lg text-sm ${size === 'डबल' ? 'bg-amber-500 text-white border-amber-500' : 'border-gray-300 text-gray-700 hover:border-amber-500'}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">डिलीवरी स्पीड</label>
                    <div className="mt-2">
                      <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-3/4"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>15 दिन</span>
                        <span>30 दिन</span>
                        <span>45 दिन</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">अनुमानित डिलीवरी: <span className="font-medium">18 दिन</span></p>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-amber-50 rounded-lg text-sm text-amber-800 flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                  <p>कस्टमाइज्ड फर्नीचर पर अतिरिक्त 10% छूट। अभी लिमिटेड समय ऑफर चल रहा है।</p>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                  <motion.button 
                    className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    कस्टम ऑर्डर करें
                  </motion.button>
                  <motion.button 
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-amber-500 hover:text-amber-500 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    डिजाइन सेव करें
                  </motion.button>
                </div>
              </div>
              
              <div className="relative h-80 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=958&q=80"
                  alt="कस्टम सोफा"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-gray-800 font-medium">कुल कीमत</h4>
                      <p className="text-amber-500 font-bold text-lg">₹29,999</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>डिलीवरी फ्री | 3 साल की वारंटी</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">हमारा ब्लॉग</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">इंटीरियर डिज़ाइन टिप्स और ट्रेंड्स के बारे में पढ़ें</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'छोटे स्पेस के लिए बेस्ट फर्नीचर आइडियाज',
                excerpt: 'जानिए कैसे आप अपने छोटे घर या अपार्टमेंट को स्मार्ट फर्नीचर से स्टाइलिश और फंक्शनल बना सकते हैं।',
                date: '10 जून, 2024',
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                category: 'इंटीरियर डिज़ाइन'
              },
              { 
                title: '2024 के टॉप फर्नीचर ट्रेंड्स',
                excerpt: 'इस साल के सबसे लोकप्रिय फर्नीचर डिज़ाइन ट्रेंड्स के बारे में जानें और अपने घर को अपडेट करें।',
                date: '5 जून, 2024',
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
                category: 'ट्रेंड्स'
              },
              { 
                title: 'टिकाऊ फर्नीचर: पर्यावरण के अनुकूल चुनाव',
                excerpt: 'पर्यावरण के अनुकूल और टिकाऊ फर्नीचर क्यों चुनें और इसके लाभों के बारे में जानें।',
                date: '2 जून, 2024',
                image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                category: 'सस्टेनेबिलिटी'
              }
            ].map((blog, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                whileHover={{ y: -5 }}
                {...fadeInUp}
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs py-1 px-2 rounded-full">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button className="text-amber-500 hover:text-amber-600 font-medium">और पढ़ें →</button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button 
              className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              सभी ब्लॉग पोस्ट देखें
            </motion.button>
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">हमारे स्टोर</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">अपने नज़दीकी फर्नीचर स्टोर का पता लगाएं</p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  city: 'मुंबई',
                  address: 'शॉप नंबर 123, अंधेरी वेस्ट, मुंबई, महाराष्ट्र 400053',
                  phone: '+91 9898989898',
                  hours: 'सोम-शनि: 10:00AM - 8:00PM',
                  image: 'https://images.unsplash.com/photo-1665510482700-a136ddb7c24d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                  coords: { lat: 19.1302, lng: 72.8339 },
                  isActive: true
                },
                {
                  city: 'दिल्ली',
                  address: 'प्लॉट नंबर 45, राजौरी गार्डन, नई दिल्ली, 110027',
                  phone: '+91 9876543210',
                  hours: 'सोम-शनि: 10:00AM - 8:00PM',
                  image: 'https://images.unsplash.com/photo-1587085416963-22da6238a392?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
                  coords: { lat: 28.6448, lng: 77.0882 }
                },
                {
                  city: 'बैंगलोर',
                  address: 'शॉप नंबर 78, इंदिरानगर, बैंगलोर, कर्नाटक 560038',
                  phone: '+91 9876541230',
                  hours: 'सोम-शनि: 10:00AM - 8:00PM',
                  image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
                  coords: { lat: 12.9716, lng: 77.6441 }
                }
              ].map((store, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${store.isActive ? 'bg-amber-500 text-white' : 'bg-white border border-gray-200'} cursor-pointer transition-colors relative overflow-hidden group`}
                  onClick={() => {
                    // In a real app, this would change the active store
                    console.log(`Selected store: ${store.city}`);
                  }}
                >
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Image 
                      src={store.image}
                      alt={store.city}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className={`text-xl font-semibold mb-2 ${store.isActive ? 'text-white' : 'text-gray-800'}`}>{store.city}</h3>
                    <p className={store.isActive ? 'text-white/90' : 'text-gray-600'}>{store.address}</p>
                    <p className={`mt-4 ${store.isActive ? 'text-white/90' : 'text-gray-600'} flex items-center`}>
                      <FiPhone className="inline mr-2" /> {store.phone}
                    </p>
                    <p className={`${store.isActive ? 'text-white/90' : 'text-gray-600'} flex items-center`}>
                      <FiClock className="inline mr-2" /> {store.hours}
                    </p>
                    <motion.button 
                      className={`mt-4 ${store.isActive ? 'bg-white text-amber-500' : 'bg-amber-500 text-white'} px-4 py-2 rounded-lg text-sm`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      दिशा-निर्देश पाएं
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-3 h-[500px] bg-gray-200 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.708196301807!2d72.83393931493484!3d19.13021055504275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ddc82073d7%3A0x1a6b0abd5e38c08a!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624012345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="फर्नीचर स्टोर लोकेशन"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">संपर्क करें</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमें संदेश भेजें या सहायता के लिए संपर्क करें</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">आपका नाम</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="अपना नाम दर्ज करें"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">ईमेल पता</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="अपना ईमेल दर्ज करें"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">फोन नंबर</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="अपना फोन नंबर दर्ज करें"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">संदेश</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
                    placeholder="अपना संदेश दर्ज करें"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  संदेश भेजें
                </motion.button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-6">
                  <FiMapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">हमारा पता</h3>
                  <p className="text-gray-600">
                    123 मेन स्ट्रीट, अंधेरी वेस्ट<br />
                    मुंबई, महाराष्ट्र 400053<br />
                    भारत
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-6">
                  <FiPhone className="text-amber-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">फोन नंबर</h3>
                  <p className="text-gray-600">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-6">
                  <FiMail className="text-amber-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">ईमेल पता</h3>
                  <p className="text-gray-600">
                    info@furniture.com<br />
                    support@furniture.com
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-6">
                  <FiClock className="text-amber-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">खुलने का समय</h3>
                  <p className="text-gray-600">
                    सोमवार - शनिवार: सुबह 10:00 - शाम 8:00<br />
                    रविवार: सुबह 11:00 - शाम 6:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">न्यूज़लेटर सब्सक्राइब करें</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            नवीनतम कलेक्शन, विशेष ऑफर और डिजाइन प्रेरणा के बारे में जानने के लिए हमारे न्यूज़लेटर के लिए साइन अप करें।
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="अपना ईमेल दर्ज करें"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <motion.button 
              className="bg-white text-amber-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              सब्सक्राइब करें
            </motion.button>
          </div>
        </div>
      </section>

      {/* Brands/Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">हमारे पार्टनर्स</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हम इन प्रतिष्ठित ब्रांड्स के साथ मिलकर काम करते हैं</p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[
              {
                name: 'इकिया',
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                url: '/partners/ikea'
              },
              {
                name: 'वेस्ट एल्म',
                image: 'https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80',
                url: '/partners/west-elm'
              },
              {
                name: 'एचएलबी होम',
                image: 'https://images.unsplash.com/photo-1542897643-14196e50cde6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                url: '/partners/hlb-home'
              },
              {
                name: 'अर्बन लैडर',
                image: 'https://images.unsplash.com/photo-1579487785973-74d2ca7d74c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
                url: '/partners/urban-ladder'
              },
              {
                name: 'होम सेंटर',
                image: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
                url: '/partners/home-center'
              },
              {
                name: 'फैब इंडिया',
                image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
                url: '/partners/fab-india'
              },
            ].map((brand, index) => (
              <motion.a
                key={index}
                href={brand.url}
                className="bg-white p-4 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow h-32 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                {...fadeInUp}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover opacity-25"
                  />
                  <div className="absolute inset-0 bg-white/70"></div>
                  <span className="relative z-10 text-gray-800 font-medium text-lg">{brand.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">सस्टेनेबिलिटी</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">पर्यावरण के प्रति हमारी प्रतिबद्धता</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'टिकाऊ सोर्सिंग',
                icon: '🌱',
                description: 'हम केवल प्रमाणित स्रोतों से लकड़ी का उपयोग करते हैं और प्रत्येक काटे गए पेड़ के लिए 3 नए पेड़ लगाते हैं।'
              },
              {
                title: 'रिसाइकल्ड मेटेरियल',
                icon: '♻️',
                description: 'हमारे उत्पादों में रीसायकल्ड और बायोडिग्रेडेबल सामग्री का उपयोग किया जाता है।'
              },
              {
                title: 'ग्रीन मैन्युफैक्चरिंग',
                icon: '🏭',
                description: 'हमारी फैक्ट्री सौर ऊर्जा से चलती है और हम कार्बन उत्सर्जन को न्यूनतम रखते हैं।'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                whileHover={{ y: -5 }}
                {...fadeInUp}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg mt-12 overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">हमारा 2030 सस्टेनेबिलिटी लक्ष्य</h3>
                <p className="text-gray-600 mb-6">
                  हम 2030 तक 100% कार्बन-न्यूट्रल होने का लक्ष्य रखते हैं। इस लक्ष्य को पूरा करने के लिए हम निम्न उपाय कर रहे हैं:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-gray-600">अपने उत्पादन में नवीकरणीय ऊर्जा का उपयोग करना</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-gray-600">पैकेजिंग में प्लास्टिक का उपयोग कम करना</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-gray-600">पर्यावरण संरक्षण में सक्रिय योगदान देना</p>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80"
                  alt="सस्टेनेबिलिटी"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">अक्सर पूछे जाने वाले प्रश्न</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारे उत्पादों और सेवाओं के बारे में आम सवालों के जवाब पाएं</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'आप किन-किन भुगतान विधियों को स्वीकार करते हैं?',
                answer: 'हम क्रेडिट/डेबिट कार्ड, नेट बैंकिंग, UPI, और EMI विकल्पों के साथ COD (कैश ऑन डिलीवरी) भी स्वीकार करते हैं।'
              },
              {
                question: 'डिलीवरी में कितना समय लगता है?',
                answer: 'हम आमतौर पर 3-7 कार्य दिवसों के भीतर डिलीवरी करते हैं, हालांकि यह आपके स्थान और उत्पाद की उपलब्धता पर निर्भर करता है।'
              },
              {
                question: 'क्या आप असेंबली सेवाएं प्रदान करते हैं?',
                answer: 'हां, हमारे सभी उत्पादों के साथ नि:शुल्क असेंबली सेवा प्रदान की जाती है। हमारी प्रशिक्षित टीम आपके घर आकर फर्नीचर को सेट करेगी।'
              },
              {
                question: 'क्या मैं अपना ऑर्डर कैंसिल कर सकता हूं?',
                answer: 'हां, ऑर्डर शिपिंग से पहले किसी भी समय कैंसिल किया जा सकता है। शिपिंग के बाद, हमारी रिटर्न पॉलिसी लागू होगी।'
              },
              {
                question: 'आपके उत्पादों की वारंटी क्या है?',
                answer: 'हमारे सभी फर्नीचर पर 3 साल की वारंटी है, जिसमें मुफ्त मरम्मत शामिल है।'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <button className="text-amber-500">
                      <FiChevronDown size={20} />
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Returns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">डिलीवरी और रिटर्न</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">हमारी डिलीवरी और रिटर्न पॉलिसी के बारे में जानें</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'मुफ्त डिलीवरी',
                icon: '🚚',
                description: '₹10,000 से अधिक के सभी ऑर्डर पर मुफ्त डिलीवरी। हम पूरे भारत में शिप करते हैं।'
              },
              {
                title: '30-दिन का रिटर्न',
                icon: '🔄',
                description: 'यदि आप अपने उत्पाद से संतुष्ट नहीं हैं, तो 30 दिनों के भीतर मुफ्त रिटर्न।'
              },
              {
                title: '3 साल की वारंटी',
                icon: '🛡️',
                description: 'हमारे सभी फर्नीचर पर 3 साल की वारंटी, जिसमें मुफ्त मरम्मत शामिल है।'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100"
                whileHover={{ y: -5 }}
                {...fadeInUp}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg mt-12 p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">डिलीवरी प्रक्रिया</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'ऑर्डर प्लेसमेंट', description: 'आप अपना ऑर्डर प्लेस करते हैं और पुष्टिकरण ईमेल प्राप्त करते हैं' },
                { step: 2, title: 'प्रोसेसिंग', description: 'हम आपके ऑर्डर को तैयार करते हैं और शिपिंग के लिए पैक करते हैं' },
                { step: 3, title: 'शिपिंग', description: 'आपका ऑर्डर शिप हो जाता है और आप ट्रैकिंग जानकारी प्राप्त करते हैं' },
                { step: 4, title: 'डिलीवरी', description: 'हमारी टीम आपके घर फर्नीचर डिलीवर और असेंबल करती है' }
              ].map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">फर्नीचर स्टोर</h3>
              <p className="text-gray-400 mb-6">
                2010 से हम उच्च गुणवत्ता वाले फर्नीचर बना रहे हैं जो आपके घर को खूबसूरत बनाते हैं।
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">क्विक लिंक्स</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">होम</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">शॉप</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">हमारे बारे में</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ब्लॉग</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">संपर्क</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ग्राहक सेवा</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">मेरा अकाउंट</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ऑर्डर ट्रैकिंग</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">रिटर्न पॉलिसी</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">शिपिंग पॉलिसी</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">कैटेगरी</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">लिविंग रूम</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">बेडरूम</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">डाइनिंग रूम</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ऑफिस</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">आउटडोर</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 फर्नीचर स्टोर। सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

