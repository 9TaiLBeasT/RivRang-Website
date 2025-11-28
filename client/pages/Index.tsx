import { Link } from "react-router-dom";
import { ChevronRight, Star, Menu } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('graphic-design');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Project data for different card sets
  const projectData = [
    {
      tags: ['graphic designing', 'video editing', 'web designing'],
      title: 'Sunrise overseas educational consultancy landing page',
      description: 'We start by getting to know our client, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'
    },
    {
      tags: ['Website Development', 'Meta Ads', 'Brand Strategy'],
      title: 'Nithya Infra Projects - Real Estate Website & Ads',
      description: 'We built a comprehensive real estate website for Nithya Infra Projects featuring property listings, virtual tours, and lead generation systems. Additionally, we created and managed Meta ads campaigns to drive qualified leads and increase property sales.'
    }
  ];
  
  // Function to determine if the selected service should display video
  const isVideoService = (service) => {
    return service === 'video-editing';
  };

  return (
    <div className="min-h-screen bg-white font-archivo">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-4 lg:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/RivRang Logo.png" alt="RivRang Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-[150px] lg:h-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            <Link
              to="/"
              className="text-white text-lg hover:text-lime transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-white text-lg hover:text-lime transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white text-lg hover:text-lime transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="text-white text-lg hover:text-lime transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-white text-lg hover:text-lime transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/7842329947"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-lime text-black font-semibold text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-5 rounded-[32px] hover:bg-lime/90 transition-colors"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-gray-800">
            <nav className="flex flex-col px-4 py-6 gap-4">
              <Link
                to="/"
                className="text-white text-lg py-2 hover:text-lime transition-colors"
              >
                Home
              </Link>
              <a
                href="#services"
                className="text-white text-lg py-2 hover:text-lime transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-white text-lg py-2 hover:text-lime transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-white text-lg py-2 hover:text-lime transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-white text-lg py-2 hover:text-lime transition-colors"
              >
                About
              </a>
              <a
                href="https://wa.me/7842329947"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-black font-semibold text-lg px-6 py-4 rounded-[32px] mt-4"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-dark-bg pt-32 md:pt-40 lg:pt-[180px] pb-16 md:pb-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Main Heading */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative mb-6 md:mb-8">
              <svg
                className="absolute left-0 top-0 w-full h-auto"
                viewBox="0 0 532 119"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M13.4252 13.5928C14.6148 5.77581 21.3361 0 29.2431 0H515.765C525.561 0 533.057 8.72301 531.583 18.4072L518.343 105.407C517.154 113.224 510.432 119 502.526 119H16.0034C6.20776 119 -1.28825 110.277 0.18549 100.593L13.4252 13.5928Z"
                  fill="#5076FF"
                />
              </svg>
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-none pt-2 md:pt-3 px-4 md:px-8">
                <span className="text-dark-bg font-monument">Riv</span>
                <span className="text-white font-monument">Rang</span>
              </h1>
            </div>

              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-monument mb-4 md:mb-6 max-w-5xl leading-tight px-4">
              Hyderabad's Top-Rated Creative Digital Marketing Agency
            </h2>

            <p className="text-text-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed px-4">
              RivRang is Hyderabad's premier creative digital agency that blends innovative design, cutting-edge technology, and compelling storytelling to transform brands 
              in the digital landscape. We deliver exceptional results through professional graphic design, responsive web development, 
              engaging video production, and data-driven digital marketing solutions.
            </p>
          </div>

          {/* Image Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 px-4">
            <img src="our photo/1.png" alt="Project 1" className="w-full h-auto rounded-2xl lg:rounded-[32px] border-4 lg:border-8 border-white shadow-xl transform rotate-6" />
            <img src="our photo/4.png" alt="Project 2" className="w-full h-auto rounded-2xl lg:rounded-[32px] border-4 lg:border-8 border-white shadow-xl transform -rotate-[8deg]" />
            <img src="our photo/3.png" alt="Project 3" className="w-full h-auto rounded-2xl lg:rounded-[32px] border-4 lg:border-8 border-white shadow-xl transform rotate-3" />
            <img src="our photo/2.png" alt="Project 4" className="w-full h-auto rounded-2xl lg:rounded-[32px] border-4 lg:border-8 border-white shadow-xl transform -rotate-[8deg]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="mb-8 md:mb-12">
            <div className="relative inline-block mb-6 md:mb-8">
              <svg
                className="absolute left-[-10px] md:left-[-10px] top-[-5px] w-[220px] md:w-[300px] h-auto"
                viewBox="0 0 279 70"
                fill="none"
              >
                <path
                  d="M7.53805 13.0016C8.97733 5.45733 15.5742 0 23.2546 0H262.323C272.362 0 279.921 9.1374 278.04 18.9984L270.79 56.9984C269.351 64.5427 262.754 70 255.073 70H16.005C5.96619 70 -1.59278 60.8626 0.288476 51.0016L7.53805 13.0016Z"
                  fill="#5076FF"
                />
              </svg>
              <h2 className="relative text-dark-bg text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-monument pt-2 md:pt-3">
                Our Services
              </h2>
            </div>

            <p className="text-text-gray text-base sm:text-lg lg:text-xl max-w-md leading-relaxed">
              RivRang offers a range of creative services tailored to help your business stand out in the digital world
            </p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[452px_1fr] gap-8 md:gap-12">
            {/* Service Items */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <button 
                onClick={() => setSelectedService('graphic-design')}
                className={`flex items-center justify-between px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 rounded-full border border-gray-300 ${selectedService === 'graphic-design' ? 'bg-[#101010]' : ''}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`${selectedService === 'graphic-design' ? 'text-lime' : 'text-text-gray'} text-lg md:text-xl lg:text-2xl font-monument`}>
                    01
                  </span>
                  <span className={`${selectedService === 'graphic-design' ? 'text-white font-semibold' : 'text-text-gray font-medium'} text-lg md:text-xl lg:text-2xl`}>
                    Graphic Design
                  </span>
                </div>
                <ChevronRight className={`${selectedService === 'graphic-design' ? 'text-white' : 'text-text-gray'} w-5 h-5 md:w-6 md:h-6 flex-shrink-0`} />
              </button>

              <button 
                onClick={() => setSelectedService('video-editing')}
                className={`flex items-center justify-between px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 rounded-full border border-gray-300 ${selectedService === 'video-editing' ? 'bg-[#101010]' : ''}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`${selectedService === 'video-editing' ? 'text-lime' : 'text-text-gray'} text-lg md:text-xl lg:text-2xl font-monument`}>
                    02
                  </span>
                  <span className={`${selectedService === 'video-editing' ? 'text-white font-semibold' : 'text-text-gray font-medium'} text-lg md:text-xl lg:text-2xl`}>
                    Video Editing
                  </span>
                </div>
                <ChevronRight className={`${selectedService === 'video-editing' ? 'text-white' : 'text-text-gray'} w-5 h-5 md:w-6 md:h-6 flex-shrink-0`} />
              </button>

              <button 
                onClick={() => setSelectedService('social-media')}
                className={`flex items-center justify-between px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 rounded-full border border-gray-300 ${selectedService === 'social-media' ? 'bg-[#101010]' : ''}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`${selectedService === 'social-media' ? 'text-lime' : 'text-text-gray'} text-lg md:text-xl lg:text-2xl font-monument`}>
                    03
                  </span>
                  <span className={`${selectedService === 'social-media' ? 'text-white font-semibold' : 'text-text-gray font-medium'} text-lg md:text-xl lg:text-2xl`}>
                    Social Media Marketing
                  </span>
                </div>
                <ChevronRight className={`${selectedService === 'social-media' ? 'text-white' : 'text-text-gray'} w-5 h-5 md:w-6 md:h-6 flex-shrink-0`} />
              </button>

              <button 
                onClick={() => setSelectedService('web-development')}
                className={`flex items-center justify-between px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 rounded-full border border-gray-300 ${selectedService === 'web-development' ? 'bg-[#101010]' : ''}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`${selectedService === 'web-development' ? 'text-lime' : 'text-text-gray'} text-lg md:text-xl lg:text-2xl font-monument`}>
                    04
                  </span>
                  <span className={`${selectedService === 'web-development' ? 'text-white font-semibold' : 'text-text-gray font-medium'} text-lg md:text-xl lg:text-2xl`}>
                    Website Development
                  </span>
                </div>
                <ChevronRight className={`${selectedService === 'web-development' ? 'text-white' : 'text-text-gray'} w-5 h-5 md:w-6 md:h-6 flex-shrink-0`} />
              </button>
              
              <button 
                onClick={() => setSelectedService('meta-ads')}
                className={`flex items-center justify-between px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 rounded-full border border-gray-300 ${selectedService === 'meta-ads' ? 'bg-[#101010]' : ''}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`${selectedService === 'meta-ads' ? 'text-lime' : 'text-text-gray'} text-lg md:text-xl lg:text-2xl font-monument`}>
                    05
                  </span>
                  <span className={`${selectedService === 'meta-ads' ? 'text-white font-semibold' : 'text-text-gray font-medium'} text-lg md:text-xl lg:text-2xl`}>
                    Meta Ads
                  </span>
                </div>
                <ChevronRight className={`${selectedService === 'meta-ads' ? 'text-white' : 'text-text-gray'} w-5 h-5 md:w-6 md:h-6 flex-shrink-0`} />
              </button>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-6">
              <div className="h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl lg:rounded-[32px] bg-light-gray">
                {selectedService === 'graphic-design' && (
                  <img src="Servies/services-1.png" alt="Graphic Design" className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" />
                )}
                {selectedService === 'video-editing' && (
                  <>
                    <video 
                      className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      onError={(e) => {
                        // Hide video and show fallback image if video fails to load
                        e.currentTarget.style.display = 'none';
                        const fallbackImg = document.getElementById('video-fallback');
                        if (fallbackImg) {
                          fallbackImg.style.display = 'block';
                        }
                      }}
                    >
                      <source src="/Video Service.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <img 
                      id="video-fallback"
                      src="" 
                      alt="Video Editing" 
                      className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" 
                      style={{display: 'none'}} 
                    />
                  </>
                )}
                {selectedService === 'social-media' && (
                  <img src="Servies/service-3.png" alt="Social Media Marketing" className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" />
                )}
                {selectedService === 'web-development' && (
                  <img src="Servies/services-2.png" alt="Website Development" className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" />
                )}
                {selectedService === 'meta-ads' && (
                  <img src="/placeholder.svg" alt="Meta Ads" className="w-full h-full object-cover rounded-2xl lg:rounded-[32px]" />
                )}
              </div>

              <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 md:w-[220px] lg:w-[257px]">
                <div className="h-[200px] md:h-[280px] rounded-2xl lg:rounded-[32px] bg-[#2B2B2B] p-6 md:p-8 flex flex-col justify-between">
                  <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                    Ever wondered how design magic happens?
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div>
                      <div className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
                        See how
                      </div>
                      <div className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
                        we work
                      </div>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>

                <div className="h-[200px] md:h-[280px] rounded-2xl lg:rounded-[32px] bg-lime p-6 md:p-8 flex flex-col justify-between">
                  <p className="text-dark-bg text-sm md:text-base lg:text-lg leading-relaxed">
                    Looking for design experts who can bring your vision to
                    life?
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div>
                      <div className="text-dark-bg text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
                        Meet our
                      </div>
                      <div className="text-dark-bg text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
                        expert
                      </div>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="text-dark-bg w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white" id="portfolio">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-wrap items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="relative">
              <svg
                className="absolute left-[-10px] md:left-[-10px] top-[-5px] w-[270px] md:w-[350px] h-auto"
                viewBox="0 0 334 51"
                fill="none"
              >
                <path
                  d="M7.99418 6.25996C8.80935 2.60186 12.0548 0 15.8027 0H325.045C330.165 0 333.967 4.74269 332.854 9.74003L325.055 44.74C324.239 48.3981 320.994 51 317.246 51H8.00331C2.8834 51 -0.918789 46.2573 0.194813 41.26L7.99418 6.25996Z"
                  fill="#5076FF"
                />
              </svg>
              <h2 className="relative text-dark-bg text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-monument pt-1 max-w-xl leading-tight">
                Our Best Work of Successful Projects
              </h2>
            </div>

            <button 
              onClick={() => setCurrentCardIndex(currentCardIndex === 0 ? 1 : 0)}
              className="flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-[32px] border border-dark-bg hover:bg-dark-bg hover:text-white transition-colors group"
            >
              <span className="text-dark-bg group-hover:text-white font-semibold text-sm md:text-base">
                See More
              </span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white" />
            </button>
          </div>

          <div className="relative overflow-hidden mb-12 md:mb-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {/* First set of cards */}
              <div className="flex-shrink-0 w-full">
                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  <div className="h-[300px] md:h-[400px] lg:h-[463px] rounded-2xl lg:rounded-[32px] border-4 md:border-6 lg:border-8 border-white bg-light-gray shadow-lg overflow-hidden">
                    <img src="Testimonials/Sunrise Overseas/our work-1.png" alt="Project 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[300px] md:h-[400px] lg:h-[463px] rounded-2xl lg:rounded-[32px] border-4 md:border-6 lg:border-8 border-white bg-light-gray shadow-lg overflow-hidden">
                    <img src="Testimonials/Sunrise Overseas/our work - 2.png" alt="Project 1" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Second set of cards */}
              <div className="flex-shrink-0 w-full">
                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  <div className="h-[300px] md:h-[400px] lg:h-[463px] rounded-2xl lg:rounded-[32px] border-4 md:border-6 lg:border-8 border-white bg-light-gray shadow-lg overflow-hidden">
                    <img src="Testimonials/Nithya Infra Projects/Nithya Infra Website Demo.jpg" alt="Project 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[300px] md:h-[400px] lg:h-[463px] rounded-2xl lg:rounded-[32px] border-4 md:border-6 lg:border-8 border-white bg-light-gray shadow-lg overflow-hidden">
                    <img src="Testimonials/Nithya Infra Projects/Nithya Infra video.png" alt="Project 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentCardIndex(0)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentCardIndex === 0 ? 'bg-dark-bg' : 'bg-gray-300'
                }`}
              />
              <button
                onClick={() => setCurrentCardIndex(1)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentCardIndex === 1 ? 'bg-dark-bg' : 'bg-gray-300'
                }`}
              />
            </div>
          </div>

          <div className="text-center space-y-4 md:space-y-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {projectData[currentCardIndex].tags.map((tag, index) => (
                <span key={index} className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#F0F0F0] text-[#888] text-sm md:text-base lg:text-lg">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <h3 className="text-dark-bg text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-monument">
                {projectData[currentCardIndex].title}
              </h3>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-lime flex items-center justify-center flex-shrink-0">
                <ChevronRight className="text-dark-bg w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>

            <p className="text-text-dark-muted text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              {projectData[currentCardIndex].description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-dark-bg relative overflow-hidden">
        <Star className="hidden md:block absolute left-[100px] lg:left-[150px] top-24 md:top-32 w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
        <Star className="hidden md:block absolute right-[150px] lg:right-[284px] top-8 w-8 h-8 md:w-10 md:h-10 text-white fill-white" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="text-center mb-12 md:mb-16">
            <div className="relative inline-block mb-4 md:mb-6">
              <svg
                className="absolute left-[-10px] md:left-[-10px] top-[-5px] w-[300px] md:w-[400px] h-auto"
                viewBox="0 0 381 50"
                fill="none"
              >
                <path
                  d="M9.08977 5.98933C10.0056 2.46241 13.1891 0 16.833 0H372.319C377.553 0 381.378 4.94412 380.062 10.0107L371.233 44.0107C370.317 47.5376 367.134 50 363.49 50H8.00419C2.76961 50 -1.05466 45.0559 0.260976 39.9893L9.08977 5.98933Z"
                  fill="#5076FF"
                />
              </svg>
              <h2 className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-monument pt-1 px-4 leading-tight">
                <span className="text-dark-bg">Testimonials</span> that Speak to
                Our Results
              </h2>
            </div>

            <p className="text-text-muted text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Read through our testimonials to see why our clients love working
              with us and how we can help you achieve your business goals
              through creative and effective design.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#2A2A2A] rounded-2xl lg:rounded-[32px] p-6 md:p-8 lg:p-10">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-light-gray flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white text-lg md:text-xl lg:text-[22px] font-medium">
                      Sandeep
                    </h4>
                    <p className="text-text-light text-sm md:text-base lg:text-lg">
                      CEO of Sunrise Overseas Educational Consultancy
                    </p>
                  </div>
                </div>
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M16.18 23.2621H6.8C6.96 13.9221 8.8 12.3821 14.54 8.98206C15.2 8.58206 15.42 7.74206 15.02 7.06206C14.9279 6.90461 14.8053 6.76708 14.6595 6.6575C14.5137 6.54791 14.3475 6.46846 14.1706 6.42378C13.9938 6.3791 13.8098 6.37009 13.6294 6.39726C13.449 6.42443 13.2758 6.48725 13.12 6.58206C6.36 10.5821 4 13.0221 4 24.6421V35.4221C4 38.8421 6.78 41.6021 10.18 41.6021H16.18C19.7 41.6021 22.36 38.9421 22.36 35.4221V29.4221C22.36 25.9221 19.7 23.2621 16.18 23.2621ZM37.818 23.2621H28.438C28.598 13.9221 30.438 12.3821 36.178 8.98206C36.838 8.58206 37.058 7.74206 36.658 7.06206C36.5638 6.90413 36.4393 6.76638 36.2916 6.65671C36.144 6.54705 35.9762 6.46763 35.7978 6.42303C35.6193 6.37843 35.4339 6.36951 35.252 6.39681C35.0701 6.4241 34.8955 6.48705 34.738 6.58206C27.978 10.5821 25.618 13.0221 25.618 24.6621V35.4421C25.618 38.8621 28.398 41.6221 31.798 41.6221H37.798C41.318 41.6221 43.978 38.9621 43.978 35.4421V29.4421C43.998 25.9221 41.338 23.2621 37.818 23.2621Z"
                    fill="#444444"
                  />
                </svg>
              </div>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed italic">
                Working with RivRang has been an incredible experience.
                They truly listened to our needs and delivered a stunning design
                that exceeded our expectations. We couldn't be happier with the
                final product!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-monument font-extrabold">
              Design
            </h2>
            <Star className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-lime fill-lime" />
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-monument font-extrabold">
              Create
            </h2>
            <Star className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-lime fill-lime" />
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-monument font-extrabold">
              Inspire
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 px-4">
            <div className="w-full max-w-[200px] md:max-w-md h-1 bg-dark-bg"></div>
            <Star className="w-6 h-6 md:w-8 md:h-8 text-dark-bg fill-dark-bg flex-shrink-0" />
            <div className="w-full max-w-[200px] md:max-w-md h-1 bg-dark-bg"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="h-[200px] md:h-[240px] lg:h-[280px] rounded-2xl lg:rounded-3xl bg-light-gray mb-8 md:mb-10 overflow-hidden">
              <video 
                src="/sample video.mp4" 
                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>

            <div className="text-center space-y-6">
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-[22px] max-w-4xl mx-auto leading-normal px-4">
                Finding the right creative partner for your business can be a daunting
                task. Let RivRang's expert team take the guesswork out
                of the process and help you achieve your digital marketing goals
              </p>

              <div className="flex flex-wrap justify-center gap-4">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="text-center mb-10 md:mb-12">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-5">
              
                <Link to="/" className="flex-shrink-0">
                  <img src="/RivRang Logo.png" alt="RivRang Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-[101px] lg:h-24" />
              </Link>
              
              
            </div>
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-monument">
              Design. Create. Inspire
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-6 md:pt-8 border-t border-[#333]">
            <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left">
              Copyright © 2025 RivRang. All rights reserved.
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/rivrang/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M4.5 20H0.25V6.625H4.5V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 1 1.125 0 2.375 0C3.75 0 4.75 1 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/_rivrang_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM16.6 4.6C17.8 6.06 18.5 7.9 18.54 9.92C18.26 9.86 15.44 9.3 12.6 9.64C12.54 9.5 12.48 9.34 12.42 9.2C12.24 8.78 12.06 8.36 11.86 7.96C14.98 6.7 16.42 4.84 16.6 4.6ZM10 1.48C12.16 1.48 14.16 2.3 15.66 3.62C15.5 3.84 14.22 5.56 11.18 6.7C9.78 4.12 8.22 2.02 8 1.7C8.64 1.56 9.3 1.48 10 1.48ZM6.36 2.28C6.58 2.58 8.1 4.7 9.52 7.22C5.52 8.28 2 8.26 1.62 8.26C2.2 5.6 3.98 3.4 6.36 2.28ZM1.46 10.02C1.46 9.94 1.46 9.84 1.46 9.76C1.82 9.78 5.98 9.82 10.24 8.54C10.48 9.02 10.72 9.5 10.94 10C10.84 10.04 10.72 10.06 10.6 10.1C6.2 11.52 3.86 15.4 3.66 15.72C2.28 14.2 1.46 12.2 1.46 10.02ZM10 18.54C8.02 18.54 6.2 17.86 4.76 16.74C4.92 16.42 6.64 13.08 11.46 11.4C11.48 11.38 11.5 11.38 11.52 11.38C12.72 14.5 13.22 17.1 13.34 17.86C12.32 18.3 11.18 18.54 10 18.54ZM14.76 17.08C14.68 16.56 14.22 14.06 13.1 11C15.78 10.58 18.12 11.28 18.42 11.36C18.04 13.74 16.68 15.8 14.76 17.08Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}