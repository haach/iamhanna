import {MetaFunction} from '@remix-run/node';
import {educations, experiences} from 'public/cv-data';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {defaultSpacing, PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

export default function CV() {
  return (
    <PageLayout
      title="Hanna Achenbach"
      /* subTitle="Curriculum vitae" */
      subTitle="Frontend engineer"
      sideBar={
        <div className="flex flex-col items-end w-full">
          <HeadlineWithDivider title="Education" />
          <div className="flex flex-col gap-20">
            {Object.entries(educations).map(([key, education]) => (
              <div key={key} className="text-right" style={{maxWidth: `${defaultSpacing}px`}}>
                <Typo.h3>{education.to}</Typo.h3>
                <Typo.h4 className="-mt-1">{education.from}</Typo.h4>
                <Typo.h2 className="leading-tight">{education.title}</Typo.h2>
                <Typo.p dense style={{textAlign: 'right', whiteSpace: 'pre-wrap'}}>
                  {education.footer}
                </Typo.p>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <HeadlineWithDivider title="Experience" />
      <div className="flex flex-col gap-20">
        {Object.entries(experiences).map(([key, experience]) => (
          <div key={key}>
            <div className="flex w-full">
              <div className="float-left " style={{whiteSpace: 'nowrap'}}>
                <Typo.h3>{experience.to}</Typo.h3>
                <Typo.h4>{experience.from}</Typo.h4>
              </div>
              <div className="flex-auto pt-2 pl-6">
                <Typo.h2 className="leading-tight">{experience.title}</Typo.h2>
              </div>
            </div>

            {experience.list && (
              <ul className="pt-4 list-disc list-outside ml-6">
                {experience.list.map((text) => (
                  <li key={text} className="mb-4">
                    {text}
                  </li>
                ))}
              </ul>
            )}

            {experience.footer && (
              <div className="pt-4">
                {experience.footer.map((text) => (
                  <Typo.p key={text} className="mb-4">
                    {text}
                  </Typo.p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
