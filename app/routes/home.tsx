import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rezumo AI" },
    { name: "description", content: "Better Inputs. Better Outcomes." },
  ];
}

export default function Home() {

    const { auth, kv } = usePuterStore();
    const navigate = useNavigate();
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState(false);

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/')
    }, [auth.isAuthenticated])

    useEffect(() => {
      const loadResumes = async () => {
        setLoadingResumes(true);
        const resumes = (await kv.list('resume:*', true)) as KVItem[];

        const parseResumes = resumes ?.map((resume) => (
          JSON.parse(resume.value as string) as Resume
        ))

        console.log("parseResumes", parseResumes);

        setResumes(parseResumes || []);
        setLoadingResumes(false);
      }

      loadResumes();

    }, [])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-8">
        <h1>Track Your <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Applications
      </span> & Resume Ratings</h1>
        <h2 className="font-extrabold italic ">Better Inputs. Better Outcomes. ✨</h2>

        {!loadingResumes ? (
          resumes?.length === 0 ? (
            <h1>No resumes found, upload your first resume to get feedback</h1>
          ) : (
            <h2>Review your submissions and check AI-powered feedback</h2>
          )
        ) : null}
      </div>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img src="/images/resume-scan-2.gif" alt="" className="w-[200px]" />
        </div>
      )}
      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {
          resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))
          }
        </div>
      )}

      {!loadingResumes && resumes?.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
          Upload Resume 
          </Link>
        </div>
      )}
    </section>
  </main>;
}
