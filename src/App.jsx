import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
  Calculator,
  Search,
  Shield,
  Truck,
  CheckCircle,
  MessageCircle,
  Calendar,
  Star,
  ArrowRight,
  Package,
  Globe,
  Users,
  MapPin,
  Building2,
  ShoppingCart,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Bot,
  DollarSign,
  Boxes,
  Factory,
  Shirt,
  Smartphone,
  Home,
  Gamepad2,
  Palette,
  Wrench
} from 'lucide-react'
import yiwuMarket1 from './assets/yiwu-market-1.jpg'
import yiwuMarket2 from './assets/yiwu-market-2.jpg'
import yiwuMarket3 from './assets/yiwu-market-3.png'
import yiwuCity from './assets/yiwu-city.jpg'
import yigoLogo from './assets/yigo-logo.png'
import './App.css'

function App() {
  const [volume, setVolume] = useState('')
  const [unitCost, setUnitCost] = useState('')
  const [quantity, setQuantity] = useState('')
  const [cost, setCost] = useState(0)
  const [unitCostInChile, setUnitCostInChile] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Calcular costo automáticamente
  useEffect(() => {
    const numVolume = parseFloat(volume) || 0
    const numUnitCost = parseFloat(unitCost) || 0
    const numQuantity = parseFloat(quantity) || 0
    
    const shippingCost = numVolume * 199
    const totalProductCost = numUnitCost * numQuantity
    const costPerUnit = numQuantity > 0 ? (totalProductCost + shippingCost) / numQuantity : 0
    
    setCost(shippingCost)
    setUnitCostInChile(costPerUnit)
  }, [volume, unitCost, quantity])

  // Simulador de búsqueda de productos
  const simulateProductSearch = async (query) => {
    setIsSearching(true)
    
    // Simular delay de búsqueda
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockResults = [
      {
        id: 1,
        name: `${query} - Modelo Premium`,
        price: '$2.50 - $5.80',
        minOrder: '100 piezas',
        supplier: 'Yiwu Golden Trade Co.',
        rating: 4.8,
        image: '📦'
      },
      {
        id: 2,
        name: `${query} - Calidad Estándar`,
        price: '$1.20 - $3.40',
        minOrder: '500 piezas',
        supplier: 'Zhejiang Best Manufacturing',
        rating: 4.5,
        image: '📦'
      },
      {
        id: 3,
        name: `${query} - Económico`,
        price: '$0.80 - $2.10',
        minOrder: '1000 piezas',
        supplier: 'Yiwu Wholesale Center',
        rating: 4.2,
        image: '📦'
      }
    ]
    
    setSearchResults(mockResults)
    setIsSearching(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      simulateProductSearch(searchQuery)
    }
  }

  // Scroll suave a sección
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A202C] font-['Inter']">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={yigoLogo} alt="Yigo Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-700 hover:text-[#3498DB] px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
                <a href="#proceso" className="text-gray-700 hover:text-[#3498DB] px-3 py-2 text-sm font-medium transition-colors">Proceso</a>
                <a href="#yiwu" className="text-gray-700 hover:text-[#3498DB] px-3 py-2 text-sm font-medium transition-colors">Yiwu</a>
                <a href="#calculator" className="text-gray-700 hover:text-[#3498DB] px-3 py-2 text-sm font-medium transition-colors">Calculadora</a>
                <a href="#contacto" className="bg-[#3498DB] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ECC71] transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
        {/* Fondo abstracto con nodos */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-[#2B6CB0] to-[#4FD1C7] rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-gradient-to-r from-[#2B6CB0] to-[#4FD1C7] rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-r from-[#2B6CB0] to-[#4FD1C7] rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gradient-to-r from-[#2B6CB0] to-[#4FD1C7] rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          {/* Líneas conectoras */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#gradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="70%" y1="30%" x2="50%" y2="60%" stroke="url(#gradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="25%" y1="70%" x2="75%" y2="35%" stroke="url(#gradient)" strokeWidth="1" opacity="0.3"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2B6CB0"/>
                <stop offset="100%" stopColor="#4FD1C7"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-12">
            <img src={yigoLogo} alt="Yigo Logo" className="h-48 w-auto mx-auto mb-6 hover:scale-105 transition-transform duration-300" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-[#3498DB] to-[#2ECC71] bg-clip-text text-transparent leading-tight">
            Importar desde China nunca fue tan fácil y <span className="block mt-4">seguro</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#4A5568] mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Somos Yigo, tu socio en Yiwu; capital mundial del comercio mayorista. 
            Nos encargamos de todo el proceso puerta a puerta. Calcula tu costo al instante y da el salto que tu negocio necesita.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('calculator')}
              className="cta-button flex items-center gap-3 text-xl px-12 py-6"
            >
              <Calculator className="h-6 w-6" />
              CALCULA TU ENVÍO AHORA
              <ArrowRight className="h-6 w-6" />
            </button>
            <button 
              className="cta-button-secondary flex items-center gap-3 text-xl px-12 py-6"
              onClick={() => window.open('https://calendly.com/yigo-chile/30min', '_blank')}
            >
              <Calendar className="h-6 w-6" />
              Agenda una llamada de 30 min
            </button>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Target className="h-16 w-16 text-[#2B6CB0] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A202C]">
              Importar nunca fue tan fácil
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-medium">
              Nuestro proceso de 4 pasos te garantiza una importación sin complicaciones
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator className="h-16 w-16" />,
                title: "COTIZA Y COMPRA",
                description: "Usa nuestra calculadora para saber tu costo de inmediato. Nosotros te ayudamos a comprar y pagarle a tu proveedor en China de forma segura.",
                step: "01"
              },
              {
                icon: <CheckCircle className="h-16 w-16" />,
                title: "VERIFICAMOS EN TERRENO",
                description: "Somos tus manos en Yiwu. Recibimos tu mercadería, la chequeamos y preparamos para el envío.",
                step: "02"
              },
              {
                icon: <Globe className="h-16 w-16" />,
                title: "GESTIONAMOS TODO",
                description: "Nos encargamos de la logística, el flete marítimo, la agencia de aduanas y los impuestos. Cero burocracia para ti.",
                step: "03"
              },
              {
                icon: <Truck className="h-16 w-16" />,
                title: "RECIBE EN TU PUERTA",
                description: "Coordinamos el transporte terrestre para entregar tu carga directamente en tu casa o bodega.",
                step: "04"
              }
            ].map((step, index) => (
              <Card key={index} className="feature-card relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#2B6CB0] opacity-20">
                  {step.step}
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 text-[#3498DB]">
                    {step.icon}
                  </div>
                  <CardTitle className="text-[#1A202C] text-xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A5568] text-center leading-relaxed font-medium">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Qué es Yiwu */}
      <section id="yiwu" className="yiwu-section py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <MapPin className="h-16 w-16 text-[#3498DB] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A202C]">
              ¿Qué es Yiwu?
            </h2>
            <p className="text-xl text-[#4A5568] max-w-4xl mx-auto leading-relaxed font-medium">
              Yiwu es la capital mundial del comercio mayorista. Ubicada en la provincia de Zhejiang, China, 
              es el hogar del mercado mayorista más grande del mundo con más de 75,000 tiendas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#2B6CB0]">
                El Corazón del Comercio Mundial
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-8 w-8 text-[#3498DB] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#1A202C]">Yiwu International Trade City</h4>
                    <p className="text-[#4A5568] font-medium">5 distritos comerciales con más de 75,000 tiendas especializadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-[#3498DB] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#1A202C]">Alcance Global</h4>
                    <p className="text-[#4A5568] font-medium">Exporta a más de 200 países y regiones en todo el mundo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-[#3498DB] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#1A202C]">Volumen de Negocios</h4>
                    <p className="text-[#4A5568] font-medium">Más de $17 mil millones USD en transacciones anuales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="yiwu-image">
                <img src={yiwuCity} alt="Vista aérea de Yiwu" className="w-full h-48 object-cover" />
              </div>
              <div className="yiwu-image">
                <img src={yiwuMarket1} alt="Interior del mercado de Yiwu" className="w-full h-48 object-cover" />
              </div>
              <div className="yiwu-image col-span-2">
                <img src={yiwuMarket2} alt="Productos en el mercado de Yiwu" className="w-full h-32 object-cover" />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-center text-[#2B6CB0]">
              Tipos de Productos que se Comercializan
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Shirt className="h-12 w-12" />, category: "Textiles y Ropa", items: "Ropa, accesorios, telas" },
                { icon: <Smartphone className="h-12 w-12" />, category: "Electrónicos", items: "Gadgets, accesorios tech" },
                { icon: <Home className="h-12 w-12" />, category: "Hogar y Jardín", items: "Decoración, muebles, jardín" },
                { icon: <Gamepad2 className="h-12 w-12" />, category: "Juguetes", items: "Juguetes, juegos, deportes" },
                { icon: <Palette className="h-12 w-12" />, category: "Arte y Oficina", items: "Papelería, arte, oficina" },
                { icon: <Wrench className="h-12 w-12" />, category: "Herramientas", items: "Herramientas, hardware" },
                { icon: <Package className="h-12 w-12" />, category: "Embalaje", items: "Bolsas, cajas, embalaje" },
                { icon: <Factory className="h-12 w-12" />, category: "Industrial", items: "Maquinaria, componentes" }
              ].map((product, index) => (
              <Card key={index} className="feature-card text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 text-[#3498DB]">
                      {product.icon}
                    </div>
                    <CardTitle className="text-[#1A202C] text-lg font-semibold">
                      {product.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#4A5568] text-sm font-medium">
                      {product.items}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora de Costos */}
      <section id="calculator" className="py-24 px-4 bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <DollarSign className="h-16 w-16 text-[#3498DB] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C]">
              Calculadora de Costos de Importación
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-medium">
              Calcula al instante cuánto te costará importar tu mercadería desde China hasta tu puerta en Chile
            </p>
          </div>

          {/* Tarifa de Yigo destacada */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-[#3498DB] via-[#2ECC71] to-[#3498DB] border-4 border-[#2ECC71] shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">🚢 TARIFA DE FLETE MARÍTIMO YIGO</h3>
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-white">
                      <p className="text-lg line-through opacity-75">Precio regular: $249 USD/m³</p>
                    </div>
                    <div className="bg-white rounded-2xl px-8 py-4 transform scale-110 shadow-xl">
                      <p className="text-5xl md:text-7xl font-black text-[#2ECC71]">$199</p>
                      <p className="text-2xl font-bold text-[#3498DB]">USD/m³</p>
                    </div>
                  </div>
                  <p className="text-xl text-white font-semibold">✨ ¡OFERTA ESPECIAL! ✨</p>
                  <p className="text-lg text-white mt-2">Desde 1 m³ | Incluye flete marítimo, gestión de aduanas, almacenaje en puerto y transporte terrestre</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#0F172A] border-[#3B82F6] max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-[#F8FAFC] flex items-center justify-center gap-3">
                <Calculator className="h-8 w-8 text-[#3B82F6]" />
                Calculadora Inteligente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[#94A3B8] font-semibold">Volumen (m³)</label>
                  <Input
                    type="number"
                    placeholder="Ej: 2.5"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="bg-[#334155] border-[#3B82F6] text-[#F8FAFC] text-lg py-3"
                  />
                  <p className="text-[#94A3B8] text-sm">Volumen total de tu carga</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[#94A3B8] font-semibold">Costo unitario (USD)</label>
                  <Input
                    type="number"
                    placeholder="Ej: 3.50"
                    value={unitCost}
                    onChange={(e) => setUnitCost(e.target.value)}
                    className="bg-[#334155] border-[#3B82F6] text-[#F8FAFC] text-lg py-3"
                  />
                  <p className="text-[#94A3B8] text-sm">Precio por unidad en China</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[#94A3B8] font-semibold">Cantidad</label>
                  <Input
                    type="number"
                    placeholder="Ej: 1000"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-[#334155] border-[#3B82F6] text-[#F8FAFC] text-lg py-3"
                  />
                  <p className="text-[#94A3B8] text-sm">Número de unidades</p>
                </div>
              </div>

              {(volume || unitCost || quantity) && (
                <div className="space-y-6">
                  <div className="bg-[#334155] p-6 rounded-xl">
                    <h3 className="text-[#3B82F6] text-xl font-bold mb-4">Desglose de Costos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Costo de productos:</span>
                        <span className="text-[#F8FAFC] font-semibold">${((parseFloat(unitCost) || 0) * (parseFloat(quantity) || 0)).toFixed(2)} USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Costo de envío:</span>
                        <span className="text-[#F8FAFC] font-semibold">${cost.toFixed(2)} USD</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] p-8 rounded-2xl border-4 border-[#3B82F6]">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Target className="h-12 w-12 text-[#0F172A]" />
                      <h3 className="text-[#0F172A] text-2xl font-bold">
                        COSTO UNITARIO ESTIMADO EN CHILE (Referencial)
                      </h3>
                    </div>
                    <p className="text-[#0F172A] text-5xl font-black mb-2">
                      ${unitCostInChile.toFixed(2)} USD por unidad
                    </p>
                    <p className="text-[#0F172A] text-sm font-medium italic">
                      *Este cálculo es una herramienta de ayuda para planificar tu inversión
                    </p>
                  </div>
                </div>
              )}
              
              <div className="bg-[#334155] p-6 rounded-xl">
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  <strong className="text-[#F8FAFC]">Incluye:</strong> Flete marítimo, gestión de aduanas, almacenaje en puerto y transporte terrestre a tu domicilio en Chile. 
                  <br />
                  <strong className="text-[#F8FAFC]">Importante:</strong> Al valor de tu mercadería se le deberá sumar el <strong className="text-[#3B82F6]">19% de IVA de importación</strong>, 
                  el cual se paga directamente a la Tesorería General de la República.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Herramienta de Búsqueda de Productos */}
      <section className="py-24 px-4 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Bot className="h-16 w-16 text-[#3B82F6] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FAFC]">
              Búsqueda Inteligente de Productos
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-medium">
              Nuestra IA busca en millones de productos de Alibaba y AliExpress para encontrar exactamente lo que necesitas
            </p>
          </div>

          <Card className="bg-[#0F172A] border-[#3B82F6] max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-[#F8FAFC] flex items-center justify-center gap-3">
                <Search className="h-8 w-8 text-[#3B82F6]" />
                Asistente de Búsqueda IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSearch} className="flex gap-4">
                <Input
                  placeholder="Ej: cargador inalámbrico, ropa deportiva, decoración hogar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#334155] border-[#3B82F6] text-[#F8FAFC] text-lg py-3 flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isSearching}
                  className="cta-button px-8"
                >
                  {isSearching ? (
                    <>
                      <Zap className="h-5 w-5 mr-2 animate-spin" />
                      Buscando...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Buscar
                    </>
                  )}
                </Button>
              </form>

              {searchResults.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#3B82F6]">Resultados encontrados:</h3>
                  {searchResults.map((result) => (
                    <Card key={result.id} className="bg-[#334155] border-[#60A5FA]">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{result.image}</div>
                          <div className="flex-1">
                            <h4 className="text-[#F8FAFC] font-semibold text-lg">{result.name}</h4>
                            <p className="text-[#94A3B8]">{result.supplier}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-[#3B82F6] font-bold">{result.price}</span>
                              <span className="text-[#94A3B8] text-sm">MOQ: {result.minOrder}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                                <span className="text-[#94A3B8] text-sm">{result.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-24 px-4 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Zap className="h-16 w-16 text-[#3B82F6] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FAFC]">
              Herramientas de Apoyo al Emprendedor
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-medium">
              Servicios adicionales para potenciar tu negocio de importación
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-16 w-16" />,
                title: "Búsqueda de Productos",
                description: "¿Tienes una idea pero no el producto? Lo buscamos por ti en el mercado de Yiwu usando nuestra red de contactos locales.",
                features: ["Búsqueda personalizada", "Comparación de precios", "Verificación de calidad"],
                pricing: "Tarifas a consultar"
              },
              {
                icon: <Users className="h-16 w-16" />,
                title: "Búsqueda de Proveedores",
                description: "¿Necesitas una fábrica específica? Encontramos y verificamos al proveedor ideal para tu negocio.",
                features: ["Verificación de fábrica", "Negociación de precios", "Control de calidad"],
                pricing: "Tarifas a consultar"
              },
              {
                icon: <Shield className="h-16 w-16" />,
                title: "Inspección de Calidad",
                description: "Nos aseguramos de que tu producción cumpla con tus estándares de calidad antes de ser enviada.",
                features: ["Inspección pre-envío", "Reporte fotográfico", "Garantía de calidad"],
                pricing: "Tarifas a consultar"
              }
            ].map((service, index) => (
              <Card key={index} className="feature-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 text-[#3B82F6]">
                    {service.icon}
                  </div>
                  <CardTitle className="text-[#1A202C] text-2xl font-bold mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#4A5568] text-center leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#94A3B8]">
                        <CheckCircle className="h-5 w-5 text-[#3B82F6] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-center text-lg font-bold text-[#3498DB]">
                      💵 {service.pricing}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Star className="h-16 w-16 text-[#3B82F6] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Emprendedores que ya dieron el salto con Yigo
            </h2>
            <p className="text-xl text-[#94A3B8]">
              Historias reales de éxito en importación desde China
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Daniela R.",
                company: "Tienda DecoHogar",
                testimonial: "El proceso fue increíblemente simple. Yigo se encargó de todo y mis productos llegaron perfectos. La calculadora me ayudó a planificar mi inversión desde el día uno.",
                rating: 5,
                savings: "Ahorré 40% vs otros importadores"
              },
              {
                name: "Matías L.",
                company: "ElectroTech SpA",
                testimonial: "La transparencia en los costos y la herramienta de búsqueda de productos cambió las reglas del juego para mi pyme. Encontré exactamente lo que necesitaba.",
                rating: 5,
                savings: "Reduje costos en 35%"
              },
              {
                name: "Carolina M.",
                company: "Moda Urbana",
                testimonial: "Excelente servicio. La comunicación constante y el seguimiento en Yiwu hicieron que todo fuera muy fácil. Recomiendo 100% sus servicios.",
                rating: 5,
                savings: "Aumenté márgenes en 50%"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#3B82F6] text-[#3B82F6]" />
                    ))}
                  </div>
                  <CardTitle className="text-[#F8FAFC] text-xl">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-[#3B82F6] font-semibold">
                    {testimonial.company}
                  </CardDescription>
                  <div className="bg-[#3B82F6] text-[#F8FAFC] px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {testimonial.savings}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#94A3B8] leading-relaxed">
                    "${testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-24 px-4 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <MessageCircle className="h-16 w-16 text-[#3498DB] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C]">
              ¿Tienes alguna consulta?
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-medium">
              Completa el formulario y te contactaremos por WhatsApp de inmediato
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-[#3498DB]">
            <CardContent className="p-8">
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const nombre = formData.get('nombre')
                const email = formData.get('email')
                const telefono = formData.get('telefono')
                const mensaje = formData.get('mensaje')
                
                const whatsappMessage = `Hola Yigo! Mi nombre es ${nombre}.%0A%0A📧 Email: ${email}%0A📞 Teléfono: ${telefono}%0A%0A💬 Consulta:%0A${mensaje}`
                
                window.open(`https://wa.me/56953956608?text=${whatsappMessage}`, '_blank')
              }}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-[#1A202C] font-semibold">Nombre completo *</label>
                    <Input
                      type="text"
                      name="nombre"
                      placeholder="Ej: Juan Pérez"
                      required
                      className="border-[#3498DB] text-lg py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#1A202C] font-semibold">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Ej: juan@ejemplo.cl"
                      required
                      className="border-[#3498DB] text-lg py-3"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-[#1A202C] font-semibold">Teléfono *</label>
                  <Input
                    type="tel"
                    name="telefono"
                    placeholder="Ej: +56 9 1234 5678"
                    required
                    className="border-[#3498DB] text-lg py-3"
                  />
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-[#1A202C] font-semibold">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto de importación..."
                    required
                    rows="5"
                    className="w-full border-2 border-[#3498DB] rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl py-6 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Enviar consulta por WhatsApp
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="h-20 w-20 text-[#3B82F6] mx-auto mb-6 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-2xl text-[#94A3B8] mb-12 max-w-3xl mx-auto">
            Agenda una llamada gratuita de 30 minutos sin compromiso o escríbenos por WhatsApp para comenzar tu importación hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="cta-button flex items-center gap-3 text-xl px-12 py-6"
              onClick={() => window.open('https://calendly.com/yigo-chile/30min', '_blank')}
            >
              <Calendar className="h-6 w-6" />
              AGENDAR LLAMADA GRATUITA
            </button>
            <button 
              className="cta-button-secondary flex items-center gap-3 text-xl px-12 py-6 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#0F172A]"
              onClick={() => window.open('https://wa.me/56953956608', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              HABLAR POR WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] py-16 px-4 border-t border-[#334155]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent mb-4">
              Yigo.cl
            </h3>
            <p className="text-[#94A3B8] text-lg">
              Tu socio confiable para importar desde China
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-[#94A3B8]">
            <p>© 2025 Yigo.cl - Todos los derechos reservados</p>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Política de Privacidad</a>
            <a href="mailto:contacto@yigo.cl" className="hover:text-[#3B82F6] transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp Flotante */}
      <div className="whatsapp-float">
        <button
          onClick={() => window.open('https://wa.me/56953956608', '_blank')}
          className="w-full h-full flex items-center justify-center text-white"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

export default App

