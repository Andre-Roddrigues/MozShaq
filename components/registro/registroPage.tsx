"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User, Phone, ChevronLeft, Check, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false
  });

  // Função para validar telefone
  const validatePhone = (phone: string) => {
    // Remove caracteres especiais
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    
    // Verifica se tem 9 dígitos
    if (cleanPhone.length === 0) return 'Telefone é obrigatório';
    if (cleanPhone.length !== 9) return 'Telefone deve ter 9 dígitos';
    
    // Verifica se são apenas números
    if (!/^\d+$/.test(cleanPhone)) return 'Telefone deve conter apenas números';
    
    return '';
  };

  // Formata o telefone enquanto o usuário digita
  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    let numbers = value.replace(/\D/g, '');
    
    // Limita a 9 números
    if (numbers.length > 9) numbers = numbers.slice(0, 9);
    
    // Formata como quiser (ex: 841 234 567)
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
  };

  // Validação em tempo real
  useEffect(() => {
    const newErrors = { ...errors };

    // Validação do nome
    if (touched.name) {
      if (!formData.name.trim()) {
        newErrors.name = 'Nome é obrigatório';
      } else if (formData.name.trim().length < 3) {
        newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
      } else {
        newErrors.name = '';
      }
    }

    // Validação do email
    if (touched.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        newErrors.email = 'Email é obrigatório';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email inválido';
      } else {
        newErrors.email = '';
      }
    }

    // Validação do telefone (NOVA VERSÃO)
    if (touched.phone) {
      const phoneError = validatePhone(formData.phone);
      newErrors.phone = phoneError;
    }

    if (touched.password) {
      if (!formData.password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      } else {
        newErrors.password = '';
      }
    }

    if (touched.confirmPassword) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'As senhas não coincidem';
      } else {
        newErrors.confirmPassword = '';
      }
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Aplica formatação para telefone
      const formatted = formatPhone(value);
      setFormData({
        ...formData,
        [name]: formatted
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const getInputClassName = (field: keyof typeof errors) => {
    const baseClass = "block w-full pl-10 pr-10 py-3 border rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors";
    
    if (!touched[field]) {
      return `${baseClass} border-gray-300 dark:border-gray-600 focus:border-brand-main focus:ring-brand-main/50`;
    }
    
    if (errors[field]) {
      return `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-500/50`;
    }
    
    return `${baseClass} border-green-500 focus:border-green-500 focus:ring-green-500/50`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      password: true,
      confirmPassword: true
    });

    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      toast.error('Corrija os erros no formulário');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Criando conta...');

    try {
      // Limpa o telefone antes de enviar
      const cleanPhone = formData.phone.replace(/\D/g, '');
      
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: cleanPhone, // Envia apenas os 9 números
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erro ao registrar");
      }

      toast.dismiss(loadingToast);
      toast.success(`Bem-vindo, ${formData.name}! Conta criada com sucesso!`);

      console.log("Usuário registrado:", data.user);

      // Salva o token no localStorage se necessário
      if (data.user?.accessToken) {
        localStorage.setItem('accessToken', data.user.accessToken);
      }

      // Redireciona para o perfil após registro
      setTimeout(() => {
        router.push('/user/perfil');
        router.refresh(); // Força refresh da página
      }, 1500);

    } catch (error: any) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Erro ao registrar. Tente novamente.");
      console.error("Erro no registro:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => !error) && 
           Object.values(formData).every(value => value.trim() !== '') &&
           formData.password === formData.confirmPassword;
  };

  // Mostrar toast de boas-vindas na primeira visita
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenRegisterWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast('Bem-vindo à página de registro!', {
          duration: 3000,
          position: 'top-center'
        });
        localStorage.setItem('hasSeenRegisterWelcome', 'true');
      }, 1000);
    }
  }, []);

  // Verificar se já está logado
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          router.replace('/user/perfil');
        }
      } catch (error) {
        // não autenticado
      }
    };

    checkLoggedIn();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 flex flex-col md:flex-row">
      {/* Toaster para notificações */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '10px',
            border: '1px solid #4f46e5',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
            style: {
              background: '#064e3b',
              border: '1px solid #10B981',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
            style: {
              background: '#7f1d1d',
              border: '1px solid #EF4444',
            },
          },
          loading: {
            duration: Infinity,
            style: {
              background: '#1e293b',
              border: '1px solid #4f46e5',
            },
          },
        }}
      />

      {/* Left Panel - Image */}
      <motion.div 
        className="hidden md:block md:w-1/2 lg:w-3/5 relative bg-gray-900"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/meet.jpg')",
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Crie sua conta
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Registre-se para acessar todos os cursos e recursos exclusivos.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              "Acesso imediato após registro",
              "Login rápido e seguro",
              "Progresso salvo automaticamente",
              "Certificados disponíveis",
              "Suporte 24/7"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-brand-main/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-brand-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Registration Form */}
      <motion.div 
        className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-8 md:py-12"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md mx-auto w-full">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Registrar Nova Conta
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Preencha todos os campos para criar sua conta
            </p>
          </div>

          {/* Registration Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome Completo *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className={errors.name && touched.name ? "text-red-500" : "text-gray-400"} />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="João da Silva"
                  className={getInputClassName('name')}
                />
                {touched.name && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {errors.name ? (
                      <X size={18} className="text-red-500" />
                    ) : formData.name && (
                      <Check size={18} className="text-green-500" />
                    )}
                  </div>
                )}
              </div>
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className={errors.email && touched.email ? "text-red-500" : "text-gray-400"} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="seu.email@exemplo.com"
                  className={getInputClassName('email')}
                />
                {touched.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {errors.email ? (
                      <X size={18} className="text-red-500" />
                    ) : formData.email && (
                      <Check size={18} className="text-green-500" />
                    )}
                  </div>
                )}
              </div>
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telefone * (9 dígitos)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={18} className={errors.phone && touched.phone ? "text-red-500" : "text-gray-400"} />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  placeholder="841 234 567"
                  className={getInputClassName('phone')}
                />
                {touched.phone && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {errors.phone ? (
                      <X size={18} className="text-red-500" />
                    ) : formData.phone && formData.phone.replace(/\D/g, '').length === 9 && (
                      <Check size={18} className="text-green-500" />
                    )}
                  </div>
                )}
              </div>
              {errors.phone && touched.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
              )}
              {!errors.phone && touched.phone && formData.phone && formData.phone.replace(/\D/g, '').length === 9 && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  ✓ Telefone válido
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Senha *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className={errors.password && touched.password ? "text-red-500" : "text-gray-400"} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur('password')}
                  placeholder="••••••••"
                  className={getInputClassName('password')}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="pr-3"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                  {touched.password && (
                    <div className="pr-3">
                      {errors.password ? (
                        <X size={18} className="text-red-500" />
                      ) : formData.password && (
                        <Check size={18} className="text-green-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {errors.password && touched.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
              )}
              {!errors.password && touched.password && formData.password && formData.password.length >= 6 && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  ✓ Senha válida (mínimo 6 caracteres)
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirmar Senha *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className={errors.confirmPassword && touched.confirmPassword ? "text-red-500" : "text-gray-400"} />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  placeholder="••••••••"
                  className={getInputClassName('confirmPassword')}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="pr-3"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                  {touched.confirmPassword && (
                    <div className="pr-3">
                      {errors.confirmPassword ? (
                        <X size={18} className="text-red-500" />
                      ) : formData.confirmPassword && formData.password === formData.confirmPassword && (
                        <Check size={18} className="text-green-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
              )}
              {!errors.confirmPassword && touched.confirmPassword && formData.confirmPassword && formData.password === formData.confirmPassword && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  ✓ As senhas coincidem
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !isFormValid()}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3.5 px-4 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center mt-4 ${
                isLoading || !isFormValid()
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-brand-main hover:bg-brand-main/90 focus:ring-brand-main'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registrando...
                </>
              ) : (
                'Registrar Conta'
              )}
            </motion.button>
          </motion.form>

          {/* Already have account */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <Link 
                href="/login" 
                className="font-medium text-brand-main hover:text-brand-main/80 transition-colors"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile Image Alternative */}
      <div className="md:hidden relative h-48 bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/meet.jpg')",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Registrar Nova Conta
            </h3>
            <p className="text-gray-300">
              Crie sua conta em poucos passos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}