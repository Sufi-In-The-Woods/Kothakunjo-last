import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:via-gray-900 dark:to-black transition-colors duration-200">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ফিরে যান</span>
          </button>
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.postimg.cc/4N2Y9TNY/ktha.png"
              alt="কথাকুঞ্জ"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              কথাকুঞ্জ
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            আমাদের সম্পর্কে
          </h1>
          
          <div className="space-y-8 text-gray-700 dark:text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                কথাকুঞ্জ (KothaKunjo) – আপনার ব্যক্তিগত বুদ্ধিমান বাংলা সহচর
              </h2>
              <p className="mb-4">
                কথাকুঞ্জ হল একটি সৃজনশীল, মোটামুটি রকম চিন্তাশীল এবং বহুমুখী বাংলা ভাষার AI সহকারী, যা আপনাকে জ্ঞান, বিনোদন এবং সঙ্গ দেয়ার ব্যাপারে এক অনন্য অভিজ্ঞতা প্রদান করবে। ধরে নিন, আপনার কোনো অনলাইনের বন্ধু, যার সাথে আপনি কখনো আড্ডা দেবেন নিজের জীবনের সুখ, দুঃখ নিয়ে। কিংবা মাঝে মাঝে মেতে যাবেন প্রযুক্তি, রাজনীতি, দর্শন, বিজ্ঞান ইত্যাদি নার্ডি সব বিষয় নিয়ে। সাধারণত ইংরেজিতে ভালো কাজ করে, এমন এআই মডেল আছে অনেক। কিন্তু বাংলা ভাষার জন্য ডেডিকেটেড এমন এআই চ্যাটবট নেই বললেই চলে। এ সমস্যা নিসরণের উদ্দ্যেশ্যেই আমি মাহাথির আহমেদ তুষার ভাষার মাস কে শ্রদ্ধা জানিয়ে এ উদ্যোগ নিয়েছি। এটা খুবই স্বাভাবিক যে, আপনি বাঙালী হওয়া সত্ত্বেও কথাকুঞ্জ শব্দটির অর্থ জানেন না এখনও। কথাকুঞ্জ শব্দটি কথা এবং কুঞ্জ- এই দুই শব্দের সমন্বয়ে গঠিত। কথা শব্দের অর্থ হলো বচন, গল্প, আখ্যান। আর কুঞ্জ অর্থ লতাদি দ্বারা আচ্ছাদিত গৃহাকার স্থান; লতাগৃহ, উপবন ইত্যাদি বোঝায়। দুটো মিলিয়ে বোঝায়, যেখানে সম্ভার ঘটেছে কথার। এই কৃত্রিম বুদ্ধিমত্তা আপনার সাথে কথা বলবে, আপনার কথা শুনবে। আপনাকে গল্প শোনাবে, ইতিহাস, বিজ্ঞান, দর্শন, সাহিত্য শেখাবে। এবং সেটা আপনার মায়ের ভাষায়। মধুর ভাষায়।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                কীভাবে কথাকুঞ্জ আপনাকে সাহায্য করতে পারে?
              </h2>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>যেকোনো প্রশ্নের উত্তর – ইতিহাস, বিজ্ঞান, দর্শন, প্রযুক্তি, জীবনধারা, প্রেম, বা সম্পর্ক নিয়ে আপনার যেকোনো কৌতূহলের সমাধান দেবে।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>সৃজনশীল কন্টেন্ট – গল্প, কবিতা, গান, উক্তি, এবং বিশ্লেষণমূলক লেখা লিখে দিতে পারবে।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>প্রযুক্তিগত সহায়তা – AI, মেশিন লার্নিং, প্রোগ্রামিং, গণিত, চিকিৎসাবিজ্ঞানসহ যেকোনো প্রযুক্তিগত বিষয়ে সহজবোধ্য ব্যাখ্যা দিতে সক্ষম।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>সাহচর্য ও পরামর্শ – কথাকুঞ্জ আপনার বন্ধু, সঙ্গী বা উপদেষ্টা হিসেবে বিভিন্ন পরিস্থিতিতে ভূমিকা রাখতে পারবে।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>রোলপ্লে ও ইমোশনাল ইন্টেলিজেন্স – কথোপকথনকে আরও স্বাভাবিক ও জীবন্ত করতে পারদর্শী। গালগপ্পো অংশে আপনি কথাকুঞ্জকে বললেই সে আপনার বন্ধু, বান্ধবি, স্ত্রী- যেকোনো রূপেই রোলপ্লে করতে পারে। ব্যাপারটা প্যাথেটিক, কিন্তু আমরা ভালো করেই জানি, একাকীত্ব মানুষকে কোথায় নিয়ে যায়</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                কেন কথাকুঞ্জ বিশেষ?
              </h2>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">📌</span>
                  <span>শুদ্ধ বাংলা ব্যবহার – কথাকুঞ্জ সবসময় প্রাঞ্জল, সহজবোধ্য এবং প্রাসঙ্গিক বাংলা ভাষায় উত্তর দেয়। আপনি হয়তো এসব সুবিধা চ্যাটজিপিটি, ডিপসীক সহ আরও অন্যান্য মডেলেই পেয়ে যাবেন। কিন্তু বাংলায় এমন প্রাঞ্জলতা আপনি আমাদের এই কথাকুঞ্জতেই পাবেন। বাংলার জন্যেই এটিকে বিশেষভাবে ফাইন টিউন করা হয়েছে।।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">📌</span>
                  <span>জ্ঞানের এক বৃহৎ উৎস – বাস্তব তথ্যের পাশাপাশি সৃজনশীল ও কল্পনাপ্রসূত উত্তর প্রদান করতে সক্ষম আমাদের এই কথাকুঞ্জ।</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">📌</span>
                  <span>সংস্কৃতি ও আবেগের সংমিশ্রণ – এটি কেবল তথ্য প্রদান করে না, বরং আপনার সাথে উষ্ণ, বন্ধুত্বপূর্ণ ও মানবিক সংযোগ তৈরি করে।</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-xl font-semibold text-purple-600 dark:text-purple-400 mt-8">
              কথাকুঞ্জ শুধু একটা AI নয়, এটি আপনার বুদ্ধিদীপ্ত কথোপকথনের সঙ্গী! 🚀💙
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;