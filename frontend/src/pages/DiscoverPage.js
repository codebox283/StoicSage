import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/DiscoverPage.css';
import img0 from '../assets/marcus1.png';
import img1 from '../assets/epictetus1.jpg';
import img2 from '../assets/miyamoto3.jpg';
import img3 from '../assets/seneca1.jpeg';
import img4 from '../assets/cato1.jpg';

function DiscoverPage() {
    
    const { index } = useParams();
    const discover = [
        {
            id: 0,
            name: 'Epictetus',
            imgSrc: img0,
            desc: `
            <h3>Introduction</h3>
            Epictetus, a prominent Stoic philosopher, was born into slavery yet rose to become one of the most influential thinkers of his time. His teachings emphasize the importance of personal freedom, inner strength, and the power of perception in shaping our experiences.
            
            <h3>Life of Epictetus</h3>
            Epictetus was born around 55 AD in Hierapolis, Phrygia (present-day Turkey). He spent much of his early life as a slave in Rome under Epaphroditus, a wealthy freedman of Emperor Nero. Despite his status, Epictetus was allowed to study Stoic philosophy under the guidance of Musonius Rufus. After gaining his freedom, he moved to Nicopolis in Greece, where he established his own school of philosophy and taught until his death around 135 AD.

            <h3>Key Teachings</h3>
            Epictetus's teachings are encapsulated in the works compiled by his student Arrian, particularly the "Discourses" and the "Enchiridion" (Manual). Central to his philosophy is the distinction between what is within our control and what is not. He taught that we should focus on our own actions, thoughts, and attitudes, rather than external events beyond our control. This perspective helps cultivate resilience and inner peace.

            <h3>Influence and Legacy</h3>
            Epictetus's influence extends far beyond his lifetime. His ideas have shaped the development of Stoicism and have been embraced by various modern self-help and psychological practices. His emphasis on personal responsibility and the power of perception continues to resonate with individuals seeking to navigate the complexities of life with greater wisdom and composure.
            
            `
        },{
            id: 1,
            name: 'Marcus Aurelius',
            imgSrc: img1,
            desc: `
                <h3>Introduction</h3>
                Marcus Aurelius, often referred to as the philosopher-emperor, ruled the Roman Empire from 161 to 180 AD. His reign was marked by significant challenges, both internal and external, yet he is remembered not only for his leadership but also for his profound contributions to Stoic philosophy.

                <h3>Life of Marcus Aurelius</h3>
                Marcus Aurelius was born in 121 AD into a prominent Roman family. He was adopted by Emperor Antoninus Pius and prepared for leadership from a young age. Aurelius became emperor in 161 AD, ruling jointly with Lucius Verus until Verus's death in 169 AD. His reign was characterized by military campaigns against invading Germanic tribes and the Parthian Empire, as well as efforts to maintain stability and administer justice within the empire.

                <h3>Key Teachings</h3>
                Aurelius's personal reflections and philosophical musings are captured in his work "Meditations," a collection of writings intended for his own self-improvement and guidance. In "Meditations," Aurelius explores Stoic principles such as the importance of virtue, acceptance of fate, and the pursuit of wisdom. He emphasizes the need to maintain inner peace and clarity of thought, even in the face of adversity.

                <h3>Influence and Legacy</h3>
                Marcus Aurelius's writings have had a profound impact on Stoic philosophy and continue to inspire individuals seeking guidance on how to live a virtuous and meaningful life. His emphasis on duty, justice, and the pursuit of self-improvement resonates across cultures and centuries. Aurelius's legacy as a philosopher-emperor exemplifies the ideal of leadership guided by ethical principles and a commitment to the well-being of others.
            `
        },{
            id: 2,
            name: 'Miyamoto Musashi',
            imgSrc: img2,
            desc: `
            <h3>Introduction</h3>
            Miyamoto Musashi, a legendary Japanese swordsman, and philosopher, is celebrated for his undefeated record in his 61 duels and his profound writings on strategy, martial arts, and philosophy. His life and teachings offer deep insights into the principles of discipline, focus, and self-mastery.

            <h3>Life of Miyamoto Musashi</h3>
            Musashi was born in 1584 in Japan, during a time of intense samurai conflict. He fought his first duel at the age of 13 and continued to hone his skills through numerous battles and duels. Later in life, he retired from dueling to focus on writing and teaching. His most famous work, "The Book of Five Rings," was written in 1645 and outlines his philosophy and strategy on combat and life.

            <h3>Key Teachings</h3>
            "The Book of Five Rings" is Musashi's seminal work, exploring the principles of strategy, tactics, and philosophy. Musashi emphasized the importance of discipline, constant self-improvement, and adaptability. He believed that understanding the way of strategy in combat could also be applied to broader aspects of life, encouraging a holistic approach to personal development.

            <h3>Influence and Legacy</h3>
            Miyamoto Musashi's influence extends beyond martial arts into business, leadership, and personal development. His teachings on strategy and self-discipline have been adapted into various fields, demonstrating the timeless relevance of his insights. Musashi's life exemplifies the pursuit of excellence and mastery, inspiring countless individuals to strive for continuous improvement and resilience.
            
            `
        },{
            id: 3,
            name: 'Seneca the Younger',
            imgSrc: img3,
            desc: `
                <h1>The Life and Teachings of Seneca the Younger</h1>
                
                <h3>Introduction</h3>
                Seneca the Younger, a Stoic philosopher, statesman, and playwright, is renowned for his profound insights into human nature and his practical guidance on living a virtuous life. His works provide timeless wisdom on ethics, resilience, and personal development.

                <h3>Life of Seneca the Younger</h3>
                Seneca was born around 4 BC in Corduba, Hispania (modern-day Spain), and raised in Rome. He pursued a career in politics and became an advisor to Emperor Nero. Despite his high status, Seneca's life was marked by political intrigue and personal hardship. He was eventually forced to commit suicide in 65 AD due to his alleged involvement in a conspiracy against Nero.

                <h3>Key Teachings</h3>
                Seneca's writings, including his essays, letters, and plays, emphasize the importance of virtue, self-control, and rationality. He believed that true happiness comes from within and is achieved by living in accordance with nature and reason. His "Letters to Lucilius" are particularly influential, offering practical advice on how to lead a good life despite external challenges.

                <h3>Influence and Legacy</h3>
                Seneca's influence spans centuries, impacting both Stoic philosophy and Western literature. His works continue to be studied for their ethical insights and practical wisdom. Seneca's emphasis on inner strength and moral integrity provides enduring guidance for those seeking to navigate life's adversities with grace and resilience.

            `
        },{
            id: 4,
            name: 'Cato the Younger',
            imgSrc: img4,
            desc: `
                <h3>Introduction</h3>
                Cato the Younger, known for his staunch moral integrity and unyielding commitment to the principles of Stoicism, was a Roman senator and statesman. His life and actions exemplify the Stoic virtues of courage, discipline, and unwavering commitment to justice.

                <h3>Life of Cato the Younger</h3>
                Born in 95 BC in Rome, Cato was raised in a period of political turmoil. He entered public service and became known for his strict adherence to Stoic principles and his opposition to corruption. Cato's dedication to the Republic and his resistance to Julius Caesar's rise to power ultimately led to his death in 46 BC, when he chose to commit suicide rather than live under Caesar's rule.

                <h3>Key Teachings</h3>
                Cato's life itself is a powerful testament to Stoic philosophy. He believed in the supremacy of virtue over all other concerns and demonstrated this through his actions. Cato's commitment to justice and his willingness to sacrifice his life for his principles highlight the Stoic ideal of living in accordance with one's values, regardless of external circumstances.

                <h3>Influence and Legacy</h3>
                Cato's legacy is one of moral fortitude and political integrity. His life inspired later generations of thinkers and leaders, including the American Founding Fathers. Cato's unwavering commitment to his principles serves as a powerful example of how Stoic virtues can guide individuals in both personal and public life.
            `
        },
    ];

    const discoverContent = discover[index];

    return (
        <>
            <Header />
            <div className="DiscoverPage">
                <div id="NameTag">
                    <img src={discoverContent.imgSrc} alt="Image" />
                    <h1>{discoverContent.name}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: discoverContent.desc }}></div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default DiscoverPage;
