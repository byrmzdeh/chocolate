import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LangContext } from '../../context/LangContext'

const Candies = () => {
    const [lang, setLang] = useContext(LangContext)
    return (
        <div className='servicesone'>

            <section className="one ">
                <Header />
                <hr />
                <div className='one-one d-flex align-items-center justify-content-center flex-column ' >
                    <h1> {lang==='en' ? 'Craft Candies' : 'Əl işi konfetləri'}</h1>
                    <p><a href="/"> {lang==='en' ? 'Home' : 'Ana Səhifə'}</a> // <a href="/about">{lang==='en' ? 'About Us' : 'Bizim haqqımızda'} </a>// {lang==='en' ? ' CRAFT CANDIES' : 'Əl işi konfetləri'}</p>
                </div>
            </section>

            <section className='two'>
            <img className='dark' src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="err" />
                <Container >
                    <img className='mt-5' src="http://crems.like-themes.com/wp-content/uploads/2019/06/type_01.jpg" alt="err" style={{width:'1000px', height:"600px",}}/>
                    <p className='pt-5'>{lang==='en' ? 'Often the subject of controversy among athletes and followers of a healthy lifestyle is disputes about the  admissibility of drinking coffee before ' : 'Çox vaxt idmançılar və sağlam həyat tərzinin davamçıları arasında mübahisə mövzusu məşqdən əvvəl və ya məşqdən sonra qəhvə içməyin'} <br /> {lang==='en' ? 'or after training. This is normal because people who play sports try to monitor the health of their bodies and eat predominantly healthy and ' :'yolverilməzliyi ilə bağlı mübahisələrdir. Bu normaldır, çünki idmanla məşğul olan insanlar öz bədənlərinin sağlamlığına nəzarət etməyə çalışırlar'} <br /> {lang==='en' ? ' non-harmful foods. And although the composition of the coffee drink has long been studied by scientists, the debate about its effect on the body' : 'zərərsiz qidalar. Qəhvə içkisinin tərkibi alimlər tərəfindən çoxdan öyrənilsə də, onun orqanizmə təsiri ilə bağlı mübahisələr indiyədək səngiməyib.' } <br />  {lang==='en' ? ' has not subsided so far. But be that as it may, scientists still have not come to a consensus on the benefits of coffee for athletes.': 'Ancaq nə olursa olsun, elm adamları hələ də qəhvənin idmançılar üçün faydaları ilə bağlı konsensusa gələ bilməyiblər.'}
                    </p> 
                    <p className='pt-5'>
                    {lang==='en' ? 'We know that after intense training, the athlete’s heart and central nervous system are in tension. And coffee drinks, due to the caffeine ': 'Biz bilirik ki, gərgin məşqdən sonra idmançının ürəyi və mərkəzi sinir sistemi gərginləşir. Qəhvə içkiləri isə tərkibindəki kofein'} <br />{lang==='en' ? 'content, stimulate the nervous system and have an exciting effect on the body. Therefore, additional stimulation can harm the body.': 'sayəsində sinir sistemini stimullaşdırır və orqanizmə həyəcan verici təsir göstərir. Buna görə əlavə stimullaşdırma bədənə zərər verə bilər.'}
                    </p>
                    <p className='pt-2'>{lang==='en' ? 'Therefore, a caffeinated drink is best consumed before exercise. And many athletes do just that. Indeed, there is such a term as “coffee ': 'Buna görə də, məşqdən əvvəl kofeinli içki ən yaxşı şəkildə istehlak edilir. Və bir çox idmançı bunu edir. Həqiqətən də “qəhvə'} <br />{lang==='en' ? 'addiction”, they talk about it like about nicotine, but of course it brings much less harm. If coffee is regularly loaded before training, then ': 'asılılığı” kimi bir termin var, onlar bu barədə nikotin kimi danışırlar, lakin təbii ki, daha az zərər verir. Əgər məşqdən əvvəl qəhvə müntəzəm olaraq yüklənirsə,'} <br /> {lang==='en' ? 'during the period of refusal of caffeine, a significant decrease in motivation and endurance during training can be observed.': 'o zaman kofeindən imtina dövründə məşq zamanı motivasiya və dözümlülüyün əhəmiyyətli dərəcədə azalması müşahidə edilə bilər.'}</p>
                    <p className='pt-3'>  {lang==='en' ? 'But there are also arguments in favor of drinking coffee after a workout: caffeine accelerates the removal of lactic acid from the body, and': 'Ancaq məşqdən sonra qəhvə içməyin lehinə arqumentlər də var: kofein laktik turşunun bədəndən çıxarılmasını sürətləndirir və'} <br />{lang==='en' ? 'it is known to be the cause of muscle pain after intense training.': 'intensiv məşqdən sonra əzələ ağrılarının səbəbi olduğu bilinir.'}</p>
                    <ul>
                        <li>{lang==='en' ? 'Boosts metabolism' :'Maddələr mübadiləsini gücləndirir'}</li>
                        <li> {lang==='en' ? 'Gives energy' :'Enerji verir'}</li>
                        <li>{lang==='en' ? 'Makes you more active ' :'Sizi daha aktiv edir'}</li>
                        <li>{lang==='en' ? 'Relieves fatigue' :'Yorğunluğu aradan qaldırır'}</li>
                    </ul>
                    <p> {lang==='en' ? 'Everyone knows that coffee is an awakening drink. It gives energy, energizes, makes you be more active, what else is needed before the' :'Hər kəs qəhvənin oyanan içki olduğunu bilir. Enerji verir, enerji verir, sizi daha aktiv edir,'} <br /> {lang==='en' ? 'Relieves fatigue' :'qarşıdan gələn məşqdən əvvəl başqa nə lazımdır. Amma burada idman zamanı qəhvənin insan orqanizminə təsirindən xəbərdar olmaq lazımdır: faydalıdır, yoxsa yox.'} <br /> {lang==='en' ? 'with the benefits of drinking coffee before training.' :'məşqdən əvvəl qəhvə içməyin faydalarından başlayaq.'}</p>
                    <p className='the pt-5'> {lang==='en' ? 'Things you didn’t know about coffee' :'Qəhvə haqqında bilmədiyiniz şeylər'}</p>
                    <p className='pt-2'> {lang==='en' ? 'From the above, we can conclude: if you had a hard and exhausting workout, then after it, you can drink a cup of coffee to relieve fatigue ' :'Yuxarıdakılardan belə nəticəyə gələ bilərik: əgər siz ağır və yorucu bir məşq etmisinizsə, ondan sonra yorğunluğu aradan qaldırmaq üçün bir fincan qəhvə içə bilərsiniz'} <br /> {lang==='en' ? 'and feel a surge of strength. And if an athlete has low blood pressure, then a cup of coffee will allow him to normalize his body' :'və güc artımı hiss edin. Bir idmançının təzyiqi aşağıdırsa, bir fincan qəhvə onun bədəninin parametrlərini normallaşdırmağa imkan verəcək'} <br /> {lang==='en' ? 'parameters and thereby avoid headaches that often occur against the background of body fatigue.' :'və bununla da bədən yorğunluğu fonunda tez-tez baş verən baş ağrılarından qaçın.'}</p>
                    <p className='pt-3'>{lang==='en' ? 'Important to know, that excessive consumption of coffee can lead to side effects. For example: trembling, palpitations and even sleep' :'Qəhvənin həddindən artıq istehlakının yan təsirlərə səbəb ola biləcəyini bilmək vacibdir. Məsələn: titrəmə, ürək döyüntüsü və hətta yuxu'} <br /> {lang==='en' ? 'disorders. If you observe such effects without training, it is better to refrain from coffee.' :'pozğunluqları. Təlim olmadan belə təsirləri müşahidə etsəniz, qəhvədən imtina etmək daha yaxşıdır.'}</p>
                    <p className='the pt-5'>{lang==='en' ? 'Drinking coffee during sports' :"İdman zamanı qəhvə içmək"}</p>
                    <p className='pt-2'>{lang==='en' ? 'We hope that this knowledge will help you find the answer to questions about drinking coffee during sports. At a minimum, if you have' :"Ümid edirik ki, bu bilik idman zamanı qəhvə içmək haqqında suallara cavab tapmağa kömək edəcək. Ən azı, əgər"} <br /> {lang==='en' ? 'good health and no illnesses, then you can enjoy your favorite drink both before and after training.' :"sağlamlığınız yaxşıdırsa və heç bir xəstəlik yoxdursa, o zaman həm məşqdən əvvəl, həm də sonra sevdiyiniz içkidən həzz ala bilərsiniz."} </p>
                    <Row className='mt-5'>
                        <div className="col-md-4">
                            <img width={400} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-04-1024x1024.jpg" alt="err" />
                        </div>
                        <div className="col-md-4">
                            <img width={400} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-03-1024x1024.jpg" alt="err" />
                        </div>
                        <div className="col-md-4">
                            <img width={400} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-1024x1024.jpg" alt="err" />
                        </div>
                    </Row>
                    <p className='pt-4'>{lang==='en' ? 'The finally conclusion is that the coffee has a dehydrating effect on the body, so it is water that is the best option for saturating water' :"Nəticə budur ki, qəhvə bədənə susuzlaşdırıcı təsir göstərir, buna görə də məşqdən sonra suyu doyurmaq üçün ən yaxşı seçim sudur."} <br /> {lang==='en' ? 'after a workout. Coffee boosts your metabolic rate so you burn more calories, and this can help your body burn fat rather than glucose for ' :"Qəhvə metabolik sürətinizi artırır, beləliklə siz daha çox kalori yandırırsınız və bu, bədəninizin enerji üçün qlükoza deyil, yağ yandırmasına kömək edə"} <br /> {lang==='en' ? 'energy. Coffee also regulates blood sugar levels and helps improve insulin sensitivity. ' :"bilər. Qəhvə həmçinin qan şəkərinin səviyyəsini tənzimləyir və insulinə həssaslığı artırmağa kömək edir."}</p>
                    <p className='pt-5'>{lang==='en' ? 'In addition, more recently, physiologists in the course of research have identified new opportunities for coffee drinks. It turns out that with' :"Bundan əlavə, son vaxtlar tədqiqatlar zamanı fizioloqlar qəhvə içkiləri üçün yeni imkanlar müəyyən ediblər. Məlum olub ki,"} <br /> {lang==='en' ? 'the help of coffee you can develop muscle mass. Taking a small dose of caffeine can increase your workout by up to 44% and can reduce .' :"qəhvənin köməyi ilə əzələ kütləsini inkişaf etdirmək olar. Kiçik dozada kofein qəbulu məşqinizi 44%-ə qədər artıra bilər və yorğunluğu azalda bilər."}</p>
                </Container>
                <Footer/>
            </section>
            

        </div>
    )
}

export default Candies
