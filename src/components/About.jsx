import { motion } from "framer-motion";
import firstAbout from "../images/about-1.jpg";
import secondAbout from "../images/about-2.jpg";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
        <motion.img
          src= {firstAbout}
          alt="Hakkımızda Görsel 1"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold md: flex justify-center mb-3">Hakkımızda</h2>
          <p className="text-gray-700 md:flex text-center m-4">
            Tozel Bilgisayar, 2010 yılından bu yana bilgisayar teknik servisi ve donanım satışı alanında hizmet veren yerel bir teknoloji firmasıdır. Bireysel ve kurumsal müşterilerimize, güvenilir ve hızlı çözümler sunmayı ilke edinen firmamız, alanında uzman teknik kadrosu ve güncel teknolojiyi yakından takip eden vizyonuyla fark yaratmaktadır.
Arızalı cihazlarınızın onarımı, sistem yükseltmeleri, ağ kurulumu, yazılım destek hizmetleri ve kaliteli bilgisayar parçalarının satışı konusunda ihtiyacınız olan her şeyi tek bir çatı altında topluyoruz. Müşteri memnuniyetini ön planda tutarak, her zaman kaliteli hizmeti uygun fiyatlarla sunmayı hedefliyoruz.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4 md: flex justify-center">Değerlerimiz</h2>
          <p className="text-gray-700 md:text-center m-4">
            <ul>
              <li>
                <span className="font-bold">Güvenilirlik: </span>Yaptığımız her işte şeffaf ve dürüst yaklaşımlar sergileriz. Müşterilerimize verdiğimiz sözleri tutarız.
              </li>
            </ul>
             <ul>
              <li>
                <span className="font-bold">Kalite: </span>Kullandığımız donanımlardan sunduğumuz hizmetlere kadar her aşamada yüksek kalite standartlarını benimseriz.
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-bold">Müşteri Memnuniyeti: </span>Müşterilerimizin ihtiyaçlarını öncelikli olarak değerlendirir, onların memnuniyetini sağlamak için sürekli olarak kendimizi geliştiririz.
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-bold">Yenilikçilik: </span>Teknolojinin hızla değiştiği bu çağda, en son yenilikleri takip eder ve hizmetlerimizi sürekli olarak güncelleriz.
              </li>
            </ul>
          </p>
        </motion.div>
        <motion.img
          src= {secondAbout}
          alt="Hakkımızda Görsel 2"
          className="w-full md:w-1/2 rounded-lg shadow-lg order-1 md:order-2"
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}
