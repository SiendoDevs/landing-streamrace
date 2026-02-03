import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send, AlertCircle, X, ChevronDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import InputPhone from "react-phone-number-input/input";
import flags from "react-phone-number-input/flags";
import { getCountries } from "react-phone-number-input";

// Lista de países simplificada para el selector (se puede expandir o usar una librería externa completa)
const COUNTRIES = [
  { code: "AR", name: "Argentina" },
  { code: "BO", name: "Bolivia" },
  { code: "BR", name: "Brasil" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "CU", name: "Cuba" },
  { code: "DO", name: "República Dominicana" },
  { code: "EC", name: "Ecuador" },
  { code: "SV", name: "El Salvador" },
  { code: "GT", name: "Guatemala" },
  { code: "HN", name: "Honduras" },
  { code: "MX", name: "México" },
  { code: "NI", name: "Nicaragua" },
  { code: "PA", name: "Panamá" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Perú" },
  { code: "ES", name: "España" },
  { code: "US", name: "Estados Unidos" },
  { code: "UY", name: "Uruguay" },
  { code: "VE", name: "Venezuela" },
];

export default function ContactModal({ isOpen, onClose, initialType = "demo" }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    clientType: "Productora que cubre varias categorías",
    type: initialType,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  // Estados locales para los selects personalizados
  const [phoneCountry, setPhoneCountry] = useState("AR");
  const [showPhoneCountrySelect, setShowPhoneCountrySelect] = useState(false);
  const [showCountrySelect, setShowCountrySelect] = useState(false);
  const [showClientTypeSelect, setShowClientTypeSelect] = useState(false);

  const countriesList = React.useMemo(() => {
    try {
        const displayNames = new Intl.DisplayNames(['es'], { type: 'region' });
        return getCountries().map(country => ({
        code: country,
        name: displayNames.of(country) || country
        })).sort((a, b) => a.name.localeCompare(b.name));
    } catch (e) {
        return COUNTRIES;
    }
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setFormState(prev => ({ ...prev, type: initialType }));
    }
  }, [isOpen, initialType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validación básica
    if (!formState.name || !formState.email || !formState.phone || !formState.country) {
      setError("Por favor completa todos los campos requeridos.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Usamos FormSubmit.co que no requiere backend ni configuración de SDK
      // Simplemente enviamos un POST a la URL con el email de destino
      const response = await fetch("https://formsubmit.co/ajax/catriel.sl@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formState.name,
          email: formState.email,
          telefono: formState.phone,
          pais: formState.country,
          tipo_organizacion: formState.clientType,
          tipo_solicitud: formState.type === 'demo' ? 'Solicitud de Demo' : 'Solicitud de Acceso',
          mensaje: formState.message || "Sin mensaje adicional",
          _subject: `Nuevo Lead StreamRace: ${formState.name}`,
          _template: "table", // Formato tabla ordenado
          _captcha: "false"   // Desactivar captcha para mejor UX
        })
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormState({ 
          name: "", 
          email: "", 
          phone: "", 
          country: "", 
          clientType: "Productora que cubre varias categorías",
          type: "demo", 
          message: "" 
        });
      }, 3000);
    } catch (err) {
      console.error("Error al enviar email:", err);
      setError("Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.");
      setIsSubmitting(false);
    }
  };

  // Custom Input Component
  const CustomInput = ({ id, label, ...props }) => (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-white/70 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <input
        id={id}
        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D8552B] focus:ring-1 focus:ring-[#D8552B] disabled:cursor-not-allowed disabled:opacity-50 transition-all"
        {...props}
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-[700px] mx-4 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="flex flex-col space-y-1.5 p-6 border-b border-white/10 bg-[#0A0A0A]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold leading-none tracking-tight text-white">
                            {isSuccess ? "¡Enviado!" : "Contáctanos"}
                        </h2>
                        <button 
                            onClick={onClose}
                            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <p className="text-sm text-white/50">
                        {isSuccess 
                        ? "Tu solicitud ha sido recibida correctamente."
                        : "Completa el formulario para ponerte en contacto con nuestro equipo."
                        }
                    </p>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar bg-[#0A0A0A]">
                    {isSuccess ? (
                        <div className="text-center py-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle size={32} />
                        </motion.div>
                        <p className="text-white/80">Nos pondremos en contacto contigo pronto.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-sm">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span>{error}</span>
                            </div>
                        )}
                        
                        <CustomInput 
                            id="name" 
                            label="Nombre" 
                            placeholder="Tu nombre completo"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustomInput 
                                id="email" 
                                label="Email" 
                                type="email"
                                placeholder="tu@email.com"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({...formState, email: e.target.value})}
                            />
                            
                            {/* Phone Input Custom Implementation */}
                            <div className="grid gap-2 relative">
                                <label className="text-white/70 text-sm font-medium leading-none">Celular</label>
                                <div className="flex gap-2">
                                    {/* Country Select Trigger */}
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setShowPhoneCountrySelect(!showPhoneCountrySelect)}
                                            className="h-10 w-[110px] flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D8552B]"
                                        >
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                {flags[phoneCountry] && React.createElement(flags[phoneCountry], { title: phoneCountry, className: "w-6 h-4 rounded-sm shrink-0" })}
                                                <span className="text-xs text-white/70 truncate">+{RPNInput.getCountryCallingCode(phoneCountry)}</span>
                                            </div>
                                        </button>
                                        
                                        {/* Country Select Dropdown */}
                                        {showPhoneCountrySelect && (
                                            <div className="absolute top-full left-0 mt-1 w-[250px] max-h-[300px] overflow-y-auto bg-[#1A1A1A] border border-white/10 rounded-md shadow-lg z-50 custom-scrollbar">
                                                {RPNInput.getCountries().map((c) => (
                                                    <div 
                                                        key={c}
                                                        onClick={() => {
                                                            setPhoneCountry(c);
                                                            setShowPhoneCountrySelect(false);
                                                        }}
                                                        className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 cursor-pointer text-white text-sm"
                                                    >
                                                        {flags[c] && React.createElement(flags[c], { title: c, className: "w-5 h-3 rounded-sm shrink-0" })}
                                                        <span className="text-white/70">+{RPNInput.getCountryCallingCode(c)}</span>
                                                        <span className="truncate">{c}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {/* Overlay to close select */}
                                        {showPhoneCountrySelect && (
                                            <div className="fixed inset-0 z-40" onClick={() => setShowPhoneCountrySelect(false)} />
                                        )}
                                    </div>

                                    {/* Phone Input Field */}
                                    <InputPhone
                                        international
                                        country={phoneCountry}
                                        value={formState.phone}
                                        onChange={(value) => setFormState({...formState, phone: value})}
                                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D8552B] focus:ring-1 focus:ring-[#D8552B] transition-all"
                                        placeholder="Número de celular"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Country Select */}
                        <div className="grid gap-2 relative">
                            <label className="text-white/70 text-sm font-medium leading-none">País</label>
                            <button
                                type="button"
                                onClick={() => setShowCountrySelect(!showCountrySelect)}
                                className="flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#D8552B]"
                            >
                                <span className={formState.country ? "text-white" : "text-white/50"}>
                                    {formState.country || "Selecciona tu país"}
                                </span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            
                            {showCountrySelect && (
                                <>
                                    <div className="absolute top-full left-0 mt-1 w-full max-h-[200px] overflow-y-auto bg-[#1A1A1A] border border-white/10 rounded-md shadow-lg z-50 custom-scrollbar">
                                        {countriesList.map((country) => (
                                            <div 
                                                key={country.code}
                                                onClick={() => {
                                                    setFormState({...formState, country: country.name});
                                                    setShowCountrySelect(false);
                                                }}
                                                className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white text-sm"
                                            >
                                                {country.name}
                                            </div>
                                        ))}
                                        <div 
                                            onClick={() => {
                                                setFormState({...formState, country: "Otro"});
                                                setShowCountrySelect(false);
                                            }}
                                            className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white text-sm"
                                        >
                                            Otro
                                        </div>
                                    </div>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowCountrySelect(false)} />
                                </>
                            )}
                        </div>

                        {/* Client Type Select */}
                        <div className="grid gap-2 relative">
                            <label className="text-white/70 text-sm font-medium leading-none">Tipo de Organización</label>
                            <button
                                type="button"
                                onClick={() => setShowClientTypeSelect(!showClientTypeSelect)}
                                className="flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#D8552B]"
                            >
                                <span className={formState.clientType ? "text-white" : "text-white/50"}>
                                    {formState.clientType || "Selecciona el tipo"}
                                </span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            
                            {showClientTypeSelect && (
                                <>
                                    <div className="absolute top-full left-0 mt-1 w-full overflow-hidden bg-[#1A1A1A] border border-white/10 rounded-md shadow-lg z-50">
                                        {["Productora que cubre varias categorías", "Categoría única", "Autódromo", "Kartódromo"].map((type) => (
                                            <div 
                                                key={type}
                                                onClick={() => {
                                                    setFormState({...formState, clientType: type});
                                                    setShowClientTypeSelect(false);
                                                }}
                                                className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white text-sm"
                                            >
                                                {type}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowClientTypeSelect(false)} />
                                </>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="message" className="text-white/70 text-sm font-medium leading-none">Mensaje (Opcional)</label>
                            <textarea
                            id="message"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#D8552B] focus:ring-1 focus:ring-[#D8552B] disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all"
                            placeholder="Cuéntanos sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 bg-[#D8552B] hover:bg-[#D8552B]/90 text-white font-bold py-6 rounded-lg shadow-[0_0_20px_rgba(216,85,43,0.3)] hover:shadow-[0_0_30px_rgba(216,85,43,0.5)] transition-all cursor-pointer"
                        >
                            {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                            <>
                                Enviar Solicitud <Send size={18} className="ml-2" />
                            </>
                            )}
                        </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
