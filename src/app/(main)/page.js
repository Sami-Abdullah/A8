
import TrustedCompany from "@/component/homePage/marquee/TrustedCompany";
import HeroBanner from "@/component/homePage/herobanner/HeroBanner";
import TrustedMentor from "@/component/homePage/trustedmentor/TrustedMentor";
import StudentReviews from "@/component/homePage/studentsreviews/StudentReviews";
import PopularCourses from "@/component/homePage/popularcourse/PopularCourses";
import StudyTips from "@/component/homePage/studytips/StudyTips";
export default function Home() {
  return (
    <div className=" container mx-auto space-y-50">
      <HeroBanner></HeroBanner>
      <TrustedMentor></TrustedMentor>
      <StudentReviews></StudentReviews>
      <PopularCourses></PopularCourses>
      <StudyTips></StudyTips>
      <TrustedCompany></TrustedCompany>
    </div>
  );
}
