import { BreadcrumbResponsive } from "@/components/ui/breadcrumb-responsive";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { File, Video } from "lucide-react";
const items = [
  {
    href: "#",
    label:
      "Vorbereitungskurs Elektroniker Gesellenprüfung Teil 1 (GP 1) PRAXIS",
  },
  { href: "#", label: "Basics of exam preparation" },
  { label: "Introduction to Trainee Coaching" },
];

export default function CoursePage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <div className="bg-[#F8F8F8] px-6 py-2">
        <BreadcrumbResponsive links={items} />
      </div>
      <div className="min-h-full flex items-start">
        <section className="w-[384px] border-b-[20px] border-[#383838]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#383838] text-white font-medium py-5 px-6">
                Basics of exam preparation
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
                Zeitmanagement und Planung
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
                Lernmethoden und Lernstrategien
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
                Prüfungssimulation und -bewältigung
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
                Umgang mit Prüfungsangst
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
                Create a value propsition
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-[#F3F3F3] flex items-center gap-2 py-4 px-6">
                  <Video className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Introduction to Trainee Coaching
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      12m 9s
                    </span>
                  </div>
                </div>
                <div className="bg-transparent flex items-center gap-2 py-4 px-6">
                  <File className="h-4 w-4" />
                  <div className="space-y-2">
                    <h3 className="text-[#383838] text-base font-medium">
                      Why is good exam preparation im...
                    </h3>
                    <span className="text-[#656565] text-sm font-normal">
                      7m 19s
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <div className="flex-1 px-6 py-4">
          <video
            src="https://youtu.be/5QP0mvrJkiY"
            controls
            className="h-[408px] w-full object-cover object-top"
            poster="/poster.png"
          />
          <div className="space-y-3 py-6">
            <h3 className="text-[#383838] text-base font-medium leading-5">
              Course description
            </h3>
            <div>
              <p className="text-[#656565] text-base font-normal leading-8">
                The seminar prepares for the part II of the journeyman
                examination.The procedure, the evaluation criteria and the
                individual parts of the Part II exam are presented and worked on
                in detail.Which time classification and which priorities the
                person to be examined has to take into account.For the technical
                discussion, the technical preparation and the optimal conduct of
                the conversation are dealt with in theory and practice.
                <br />
                After getting to know each other, all the questions that a
                trainee has in the run-up to a journeyman exam will be answered:
              </p>
              <ol className="list-disc pl-4">
                <li className="text-[#656565] text-base font-normal leading-8">
                  How does the journeyman examination work in concrete terms?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  Who are the auditors and what are the spatial conditions?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  What do I need to bring to the exam?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  What am I not allowed to have on the exam?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  What do I have to do for a successful exam completion?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  Who can support me in preparing for the exam?
                </li>
                <li className="text-[#656565] text-base font-normal leading-8">
                  What specific goal do I have for the exam result?
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
