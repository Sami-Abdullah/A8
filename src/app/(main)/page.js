
import TrustedCompany from "@/component/homePage/marquee/TrustedCompany";
import HeroBanner from "@/component/homePage/herobanner/HeroBanner";
import TrustedMentor from "@/component/homePage/trustedmentor/TrustedMentor";
import StudentReviews from "@/component/homePage/studentsreviews/StudentReviews";
export default function Home() {
  return (
    <div className=" container mx-auto space-y-25">
      <HeroBanner></HeroBanner>
      <TrustedMentor></TrustedMentor>
      <StudentReviews></StudentReviews>
      <TrustedCompany></TrustedCompany>
    </div>
  );
}
