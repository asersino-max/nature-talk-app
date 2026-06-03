// @ts-nocheck
import React, { useState } from 'react';

const App = () => {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ normal: 0, oily: 0, combo: 0, dry: 0 });
  const [finalResult, setFinalResult] = useState('');

  const brandPurple = "#8b4b9d";
  const brandDark = "#333333";
  const brandLightPurple = "#f3e8f5";

  const questions = [
    {
      question: "كيف تشعرين ببشرتك بعد غسلها بالغسول بساعة تقريباً؟ 🫧",
      options: [
        { text: "مشدودة جداً وأحياناً بها قشور", type: "dry" },
        { text: "مرتاحة وطبيعية جداً", type: "normal" },
        { text: "لامعة ومزيتة في كل الوجه", type: "oily" },
        { text: "لامعة فقط في الجبهة والأنف (منطقة T)", type: "combo" }
      ]
    },
    {
      question: "عند النظر في المرآة، كيف تبدو مسام وجهك؟ 🔍",
      options: [
        { text: "بالكاد أراها، مسام ضيقة جداً", type: "dry" },
        { text: "طبيعية وليست واضحة بشكل مزعج", type: "normal" },
        { text: "واسعة وواضحة في معظم أنحاء الوجه", type: "oily" },
        { text: "واسعة في منطقة الأنف والجبهة فقط", type: "combo" }
      ]
    },
    {
      question: "متى تظهر لكِ الحبوب (البثور) عادةً؟ 🌸",
      options: [
        { text: "نادراً جداً", type: "dry" },
        { text: "أحياناً، خاصة مع التغيرات الهرمونية", type: "normal" },
        { text: "بشكل متكرر وفي كل الوجه", type: "oily" },
        { text: "غالباً تتركز في الجبهة والأنف والذقن", type: "combo" }
      ]
    },
    {
      question: "في منتصف اليوم، كيف يبدو مكياجك أو وجهك؟ ☀️",
      options: [
        { text: "يبدو جافاً أو يظهر خطوطاً دقيقة", type: "dry" },
        { text: "ثابت ومظهره جيد", type: "normal" },
        { text: "يختفي أو يسيح بسبب الزيوت", type: "oily" },
        { text: "يلمع في منطقة الـ T-zone فقط", type: "combo" }
      ]
    },
    {
      question: "في فصل الشتاء أو الجو البارد، إيه أكتر حاجة بتلاحظيها؟ ❄️",
      options: [
        { text: "بشرتي بتنشف جداً وممكن تقشر", type: "dry" },
        { text: "بتحتاج ترطيب خفيف بس بتكون كويسة", type: "normal" },
        { text: "إفراز الدهون بيقل شوية وبتبقى مرتاحة", type: "oily" },
        { text: "الخدود بتنشف بس الجبهة والأنف عاديين", type: "combo" }
      ]
    },
    {
      question: "البثور السوداء بتظهرلك فين غالباً؟ 🕵️‍♀️",
      options: [
        { text: "نادر جداً لما بشوفها", type: "dry" },
        { text: "أحياناً خفيفة على الأنف", type: "normal" },
        { text: "منتشرة في مناطق كتير في وشي", type: "oily" },
        { text: "متركزة في الأنف والدقن بس", type: "combo" }
      ]
    }
  ];

  const resultsData = {
    normal: {
      title: "بشرتك عادية ✨",
      icon: <div className="text-6xl mb-2">✨</div>,
      description: "يا لكِ من محظوظة! بشرتك متوازنة بشكل طبيعي، ليست جافة جداً ولا دهنية جداً.",
      tips: "حافظي على هذا التوازن الجميل باستخدام منظف لطيف ومرطب يومي للحفاظ على نضارتها."
    },
    oily: {
      title: "بشرتك دهنية 🍋",
      icon: <div className="text-6xl mb-2">💧</div>,
      description: "بشرتك تفرز زيوتاً طبيعية بكثرة، مما يجعلها تبدو لامعة، لكن الميزة أن التجاعيد تتأخر في الظهور لديكِ!",
      tips: "تحتاجين لروتين ينظم إفراز الدهون دون أن يجفف البشرة. الغسول المناسب والترطيب الخالي من الزيوت هما الحل."
    },
    combo: {
      title: "بشرتك مختلطة 🦋",
      icon: <div className="text-6xl mb-2">☀️</div>,
      description: "بشرتك تجمع بين عالمين! دهنية في منطقة T (الجبهة والأنف والذقن) وعادية أو جافة في باقي الوجه.",
      tips: "السر يكمن في التوازن. تحتاجين لترطيب المناطق الجافة، وتنظيف المناطق الدهنية بلطف."
    },
    dry: {
      title: "بشرتك جافة 🌵",
      icon: <div className="text-6xl mb-2">🌬️</div>,
      description: "بشرتك تفتقر للزيوت الطبيعية والترطيب، مما يجعلها تبدو مشدودة أو باهتة أحياناً.",
      tips: "الترطيب هو صديقك المفضل! ننصحك بالمرطبات العميقة لإعادة الحيوية والنعومة لها."
    }
  };

  const handleAnswer = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
      setFinalResult(winner);
      setGameState('result');
    }
  };

  const resetGame = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setScores({ normal: 0, oily: 0, combo: 0, dry: 0 });
    setFinalResult('');
  };

  const BrandLogo = ({ size = "large" }) => (
    <div className="flex flex-col items-center justify-center mb-6">
      <div 
        className={`rounded-full flex items-center justify-center text-white relative shadow-lg ${size === 'large' ? 'w-32 h-32' : 'w-20 h-20'}`}
        style={{ backgroundColor: brandPurple }}
      >
        <span className="font-serif italic font-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl" style={{ fontSize: size === 'large' ? '5rem' : '3rem', lineHeight: '1' }}>
          nt
        </span>
        <div className="absolute top-1/4 right-1/4 opacity-80 text-xl">🦋</div>
      </div>
      <h1 className="mt-4 font-semibold text-3xl tracking-wide" style={{ color: brandDark }}>Nature Talk</h1>
      <p className="text-sm font-medium tracking-widest" style={{ color: brandPurple }}>natural skincare</p>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans" style={{ backgroundColor: brandLightPurple, direction: 'rtl' }}>
      
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6 md:p-8 overflow-hidden relative">
        
        {gameState === 'start' && (
          <div className="text-center animate-fade-in flex flex-col items-center">
            <BrandLogo />
            <h2 className="text-2xl font-bold mt-4 mb-2 text-gray-800">اكتشفي سر جمالك الحقيقي! 🌸</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              كل بشرة لها لغتها الخاصة. أجيبي على {questions.length} أسئلة سريعة لنعرف نوع بشرتك ونخبرك بالروتين الطبيعي الأنسب لها من Nature Talk.
            </p>
            <button 
              onClick={() => setGameState('playing')}
              className="w-full text-white font-bold py-4 px-8 rounded-full text-lg shadow-md transform transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              style={{ backgroundColor: brandPurple }}
            >
              ابدأي الاختبار الآن
              <span className="text-2xl">◀️</span>
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2 text-gray-500 font-medium">
                <span>سؤال {currentQuestion + 1} من {questions.length}</span>
                <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, backgroundColor: brandPurple }}
                ></div>
              </div>
            </div>

            <BrandLogo size="small" />

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-gray-800 leading-tight">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full text-right p-4 rounded-xl border-2 border-transparent bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium transition-all duration-200 hover:border-purple-300 hover:shadow-sm focus:outline-none"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameState === 'result' && (
          <div className="text-center animate-fade-in flex flex-col items-center">
            <div className="mb-4 animate-bounce">
              {resultsData[finalResult].icon}
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandPurple }}>
              {resultsData[finalResult].title}
            </h2>
            
            <div className="bg-purple-50 rounded-2xl p-6 mb-6 shadow-inner">
              <p className="text-gray-800 font-medium text-lg mb-4 leading-relaxed">
                {resultsData[finalResult].description}
              </p>
              <div className="h-px w-full bg-purple-200 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="block mb-1" style={{ color: brandPurple }}>نصيحة Nature Talk:</strong>
                {resultsData[finalResult].tips}
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="text-gray-700 font-bold text-lg">
                لو عايزة روتين متكامل ابعتيلنا رسالة 💜
              </div>
              
              <a 
                href="https://wa.me/201023453493" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-white font-bold py-4 px-6 rounded-full shadow-md transform transition-all hover:-translate-y-1 flex items-center justify-center gap-3 no-underline"
                style={{ backgroundColor: "#25D366" }}
              >
                <span className="text-2xl">💬</span>
                تواصل عبر الواتساب (01023453493)
              </a>

              <p className="text-sm text-gray-500 font-medium mt-2">
                أو تقدري تبعتيلنا على رسايل الصفحة 💌
              </p>
              
              <button 
                onClick={resetGame}
                className="w-full flex items-center justify-center gap-2 text-gray-400 font-medium py-3 hover:text-purple-700 transition-colors mt-4"
              >
                <span className="text-xl">🔄</span>
                إعادة الاختبار
              </button>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default App;