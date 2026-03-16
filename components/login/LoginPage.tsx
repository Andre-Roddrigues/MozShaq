"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, BookOpen, ChevronLeft, Check, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  // Carregar usuários do localStorage
  const getExistingUsers = (): UserData[] => {
    if (typeof window === 'undefined') return [];
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  };

  // Gerar token JWT-like
  const generateToken = (userId: string): string => {
    // Header - informações do algoritmo
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    
    // Payload - dados do usuário
    const payload = {
      sub: userId, // subject (ID do usuário)
      email: formData.email,
      iat: Math.floor(Date.now() / 1000), // issued at
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // expira em 24 horas
      jti: Math.random().toString(36).substring(2) + Date.now().toString(36) // ID único do token
    };
    
    // Em produção, seria gerada uma assinatura real
    // Aqui estamos apenas simulando um token JWT
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = btoa(Math.random().toString(36).substring(2) + Date.now().toString(36));
    
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  };

  // Salvar token nos cookies
  const setAuthTokenCookie = (token: string) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (24 * 60 * 60 * 1000)); // 24 horas
    
    const cookie = `auth_token=${token}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict;`;
    
    if (process.env.NODE_ENV === 'production') {
      document.cookie = cookie + ' Secure;'; // Secure apenas em produção
    } else {
      document.cookie = cookie;
    }
    
    // Também salvar no localStorage para fácil acesso (opcional)
    localStorage.setItem('auth_token', token);
  };

  // Validação em tempo real
  useEffect(() => {
    const newErrors = { ...errors };

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

    // Validação da senha
    if (touched.password) {
      if (!formData.password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      } else {
        newErrors.password = '';
      }
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
    
    // Marcar todos os campos como tocados para mostrar erros
    setTouched({
      email: true,
      password: true
    });

    // Verificar se há erros
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      toast.error('Por favor, corrija os erros no formulário.');
      return;
    }

    // Verificar se todos os campos foram preenchidos
    const isEmpty = Object.values(formData).some(value => !value.trim());
    if (isEmpty) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Autenticando...');
    
    // Simulação de delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      // Obter usuários do localStorage
      const existingUsers = getExistingUsers();
      
      // Verificar credenciais
      const user = existingUsers.find(
        user => user.email === formData.email && user.password === formData.password
      );

      if (!user) {
        toast.dismiss(loadingToast);
        toast.error('Email ou senha incorretos!');
        setIsLoading(false);
        return;
      }

      // Gerar token JWT-like
      const authToken = generateToken(user.email);
      
      // Salvar token nos cookies
      setAuthTokenCookie(authToken);

      // Salvar sessão do usuário
      localStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        name: user.fullName,
        phone: user.phone,
        loggedIn: true,
        loginTime: new Date().toISOString(),
        authToken: authToken
      }));

      sessionStorage.setItem('userSession', JSON.stringify({
        email: user.email,
        name: user.fullName,
        loggedIn: true,
        sessionId: Date.now().toString(),
        token: authToken
      }));

      // Mostrar toast de sucesso
      toast.dismiss(loadingToast);
      toast.success(`Bem-vindo de volta, ${user.fullName}!`, {
        duration: 3000,
        icon: '',
        position: 'top-center'
      });

      console.log('Usuário logado:', user);
      console.log('Token gerado:', authToken);
      
      // Redirecionar para perfil após delay
      setTimeout(() => {
        router.push('/user/perfil');
      }, 2000);
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.dismiss(loadingToast);
      toast.error('Erro ao fazer login. Tente novamente.');
      setIsLoading(false);
    }
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => !error) && 
           Object.values(formData).every(value => value.trim() !== '');
  };

  // Verificar se já está logado
  useEffect(() => {
    const checkLoggedIn = () => {
      const currentUser = localStorage.getItem('currentUser');
      const userSession = sessionStorage.getItem('userSession');
      
    };

    checkLoggedIn();
  }, [router]);

  // Mostrar toast de boas-vindas na primeira visita
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenLoginWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast('Bem-vindo à página de login!', {
          duration: 3000,
          position: 'top-center'
        });
        localStorage.setItem('hasSeenLoginWelcome', 'true');
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen mt-8 bg-gray-50 dark:bg-slate-900 flex flex-col md:flex-row">
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

      {/* Left Panel - Login Form */}
      <motion.div 
        className="w-full md:w-1/2 lg:w-2/5 xl:w-2/5 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-brand-main transition-colors mb-6"
            onClick={() => toast('Voltando ao início...', { icon: '↩️', duration: 1500 })}
          >
            <ChevronLeft size={16} />
            <span className="ml-1">Voltar ao início</span>
          </Link>
          
          <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white mt-2">
            Acesse sua conta
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
            Entre para acessar seus cursos e acompanhar seu progresso.
          </p>
        </div>

        {/* Login Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
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
                placeholder="seu.email@empresa.co.mz"
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

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Senha
              </label>
              <Link 
                href="/recuperar-senha"
                className="text-sm text-brand-main hover:text-brand-main/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  toast('Redirecionando para recuperação de senha...', { icon: '🔑', duration: 2000 });
                }}
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className={errors.password && touched.password ? "text-red-500" : "text-gray-400"} />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
            {!errors.password && touched.password && formData.password && (
              <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                ✓ Senha válida
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-brand-main focus:ring-brand-main border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Manter-me conectado
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || !isFormValid()}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center ${
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
                Autenticando...
              </>
            ) : (
              'Entrar na plataforma'
            )}
          </motion.button>
        </motion.form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Não tem uma conta?{' '}
            <Link 
              href="/registar" 
              className="font-medium text-brand-main hover:text-brand-main/80 transition-colors"
              onClick={() => toast('Redirecionando para registro...', { icon: '', duration: 1500 })}
            >
              Criar conta
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Right Panel - Image */}
      <motion.div 
        className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-3/5 relative bg-gray-900"
        initial={{ opacity: 0, x: 20 }}
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
              Bem-vindo à <span className="text-brand-main">SHERQ Academy</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Acesso à plataforma de formação profissional.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div 
            className="space-y-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              "Acesso a cursos exclusivos",
              "Acompanhamento de progresso",
              "Certificados reconhecidos",
              "Material didático actualizado",
              "Suporte de especialistas",
            ].map((feature, index) => (
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
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Security Badge */}
          <motion.div 
            className="absolute bottom-8 left-8 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <Lock size={14} />
              <span>Conexão segura • SSL 256-bit • Autenticação com token JWT</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}