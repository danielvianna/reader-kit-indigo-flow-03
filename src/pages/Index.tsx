
import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import AssessmentKit from '../components/AssessmentKit';
import PageNavigation from '../components/PageNavigation';

const Index = () => {
  // Sample assessment data
  const assessmentData = [
    {
      title: "Graded Question 1 (Daniel)",
      attempts: 3,
      questionPrompt: "Which of the following best describes Wilhelm Wundt's contribution to psychology?",
      options: [
        { id: "a1", text: "Establishing the first psychological laboratory in America", isCorrect: false },
        { id: "a2", text: "Creating the functionalist school of psychology", isCorrect: false },
        { id: "a3", text: "Bringing objectivity and measurement to psychology through his laboratory in Leipzig", isCorrect: true },
        { id: "a4", text: "Developing the concept of the unconscious mind", isCorrect: false },
      ],
    },
    {
      title: "Graded Question 2",
      attempts: 3,
      questionPrompt: "What was the main focus of structuralism as developed by Edward Titchener?",
      options: [
        { id: "b1", text: "The practical applications of psychology in everyday life", isCorrect: false },
        { id: "b2", text: "The structure of the mind and breaking down experiences into basic elements", isCorrect: true },
        { id: "b3", text: "The evolutionary purpose of consciousness", isCorrect: false },
        { id: "b4", text: "The development of intelligence testing", isCorrect: false },
      ],
    },
    {
      title: "Graded Question 3",
      attempts: 3,
      questionPrompt: "How did William James's approach to psychology differ from Wundt and Titchener's?",
      options: [
        { id: "c1", text: "James focused on the importance of consciousness to everyday life rather than just its analysis", isCorrect: true },
        { id: "c2", text: "James rejected the study of consciousness entirely", isCorrect: false },
        { id: "c3", text: "James studied only animal behavior rather than human consciousness", isCorrect: false },
        { id: "c4", text: "James focused exclusively on objective measurement of physical sensations", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header title="The History of Psychology (Github test)" />
      <div className="flex">
        <SideNav />
        <main className="flex-1 pt-16 pl-14 pb-0 max-w-4xl mx-auto">
          {/* Content starts here - now without sticky title */}
          <div className="bg-white p-6">
            <h1 className="text-2xl font-bold mb-6 text-pearson-text">1.1 In the Beginning: Wundt, Titchener, and James</h1>
            <div className="space-y-6">
              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-6">
                It really all started to come together in a laboratory in Leipzig, Germany, in 1879. It was here that Wilhelm Wundt (VILL-helm Voont, 1832–1920), a physiologist, attempted to apply scientific principles to the study of the human mind. In his laboratory, students from around the world were taught to study the structure of the human mind. Wundt believed that consciousness, the state of being aware of external events, could be broken down into thoughts, experiences, emotions, and other basic elements. In order to inspect these nonphysical elements, students had to learn to think objectively about their own thoughts—after all, they could hardly read someone else's mind. Wundt called this process objective introspection, the process of objectively examining and measuring one's own thoughts and mental activities (Asthana, 2015; Rieber & Robinson, 2001). For example, Wundt might place an object, such as a rock, in students' hands and have the students tell him everything that they were feeling as a result of having the rock in their hands—all the sensations stimulated by the rock. (Objectivity was—and is—important because scientists need to remain unbiased. Observations need to be clear and precise but unaffected by the individual observer's beliefs and values.) This was really the first attempt by anyone to bring objectivity and measurement to the concept of psychology. This attention to objectivity, together with the establishment of the first true experimental laboratory in psychology, is why Wundt is often referred to as the founder of psychology.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-6">
                Wundt's laboratory became a hub of psychological research, attracting students from around the world who would later establish psychology departments in their home countries. His systematic approach to studying consciousness through controlled experimentation laid the groundwork for psychology as a scientific discipline. The methods he developed, though later critiqued and refined, represented a crucial shift from philosophical speculation to empirical investigation of mental processes.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-8">
                The impact of Wundt's work extended far beyond his laboratory walls. His emphasis on rigorous methodology and objective measurement became fundamental principles that continue to guide psychological research today. Students trained in his laboratory would go on to establish the first psychology departments in universities across Europe and America, spreading his scientific approach to the study of mind and behavior.
              </p>

              <AssessmentKit
                title={assessmentData[0].title}
                attempts={assessmentData[0].attempts}
                questionPrompt={assessmentData[0].questionPrompt}
                options={assessmentData[0].options}
                index={0}
              />

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mt-8 mb-6">
                One of Wundt's students was Edward Titchener (1867–1927), an Englishman who eventually took Wundt's ideas to Cornell University in Ithaca, New York. Titchener expanded on Wundt's original ideas, calling his new viewpoint structuralism because the focus of study was the structure of the mind. He believed that every experience could be broken down into its individual emotions and sensations (Brennan, 2002). Although Titchener agreed with Wundt that consciousness could be broken down into its basic elements, Titchener also believed that objective introspection could be used on thoughts as well as on physical sensations. For example, Titchener might have asked his students to introspect about things that are blue rather than actually giving them a blue object and asking for reactions to it. Such an exercise might have led to something like the following: "What is blue? There are blue things, like the sky or a bird's feathers. Blue is cool and restful, blue is calm …" and so on.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-6">
                In 1894, one of Titchener's students at Cornell University became famous for becoming the first woman to receive a Ph.D. in psychology (Goodman, 1980; Guthrie, 2004). Margaret F. Washburn was Titchener's only graduate student for that year. In 1908, she published a book on nonhuman animal behavior that was considered an important work in that era of psychology, The Animal Mind (Washburn, 1908). Structuralism was a dominant force in the early days of psychology, but it eventually died out in the early 1900s, as the structuralists were busily fighting among themselves over just which key elements of experience were the most important.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-8">
                The decline of structuralism was also hastened by practical limitations of the introspective method. Critics argued that subjective reports of mental experiences were unreliable and could not be verified by independent observers. This criticism would later fuel the development of behaviorism, which sought to study only observable behaviors rather than internal mental states. Despite its eventual decline, structuralism's emphasis on breaking down complex phenomena into simpler components influenced many areas of psychology and continues to be relevant in cognitive science today.
              </p>

              <AssessmentKit
                title={assessmentData[1].title}
                attempts={assessmentData[1].attempts}
                questionPrompt={assessmentData[1].questionPrompt}
                options={assessmentData[1].options}
                index={1}
              />

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mt-8 mb-6">
                Harvard University was the first school in America to offer classes in psychology in the late 1870s. These classes were taught by one of Harvard's most illustrious instructors, William James (1842–1910). James began teaching anatomy and physiology, but as his interest in psychology developed, he started teaching it almost exclusively (Brennan, 2002). His comprehensive textbook on the subject, Principles of Psychology, is so brilliantly written that copies are still in print (James, 1890/2021). Unlike Wundt and Titchener, James was more interested in the importance of consciousness to everyday life than just its analysis. He believed that the scientific study of consciousness itself was not yet possible. Conscious ideas are constantly flowing in an ever-changing stream, and once you start thinking about what you were just thinking about, what you were thinking about is no longer what you were thinking about—it's what you are thinking about—and … excuse me, I'm a little dizzy. I think you get the picture.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-6">
                James's approach, which came to be known as functionalism, focused on how mental processes help organisms adapt to their environment. Rather than asking what consciousness is made of (as the structuralists did), James asked what consciousness does and how it helps us survive and thrive. This perspective emphasized the practical applications of psychological knowledge and its relevance to everyday human experience.
              </p>

              <p className="content-paragraph text-base leading-relaxed text-pearson-text mb-8">
                The functionalist approach had profound implications for the development of psychology in America. It encouraged psychologists to study topics like learning, memory, and problem-solving in real-world contexts rather than artificial laboratory settings. This practical orientation would later influence the development of applied psychology fields such as educational psychology, clinical psychology, and industrial psychology.
              </p>

              <AssessmentKit
                title={assessmentData[2].title}
                attempts={assessmentData[2].attempts}
                questionPrompt={assessmentData[2].questionPrompt}
                options={assessmentData[2].options}
                index={2}
              />
            </div>
            
            <PageNavigation />
          </div>
        </main>
      </div>

      {/* Hidden elements for AI Tool and Video Modal - will be replacing these with inline versions */}
      <div id="ai-study-tool" className="hidden fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50">
        {/* This would be populated by the AI study tool component */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">AI Study Tool</h3>
            <button 
              onClick={() => {
                const aiTool = document.getElementById('ai-study-tool');
                if (aiTool) aiTool.style.display = 'none';
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-md h-64 flex items-center justify-center">
            <p className="text-gray-500">AI Study Tool Interface Placeholder</p>
          </div>
        </div>
      </div>

      <div id="video-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50">
        {/* This would be populated by the video player component */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Study & Exam Prep Video</h3>
            <button 
              onClick={() => {
                const videoModal = document.getElementById('video-modal');
                if (videoModal) videoModal.style.display = 'none';
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <div className="bg-gray-800 rounded-md h-64 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
