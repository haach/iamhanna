import {MetaFunction} from '@remix-run/node';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, TwoColumnText} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {educations, experiences} from '~/cv-data';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

const CV = () => {
  return (
    <PageLayout
      title="Hanna Achenbach"
      /* subTitle="Curriculum vitae" */
      subTitle="Frontend engineer"
      sideBar={
        <ContainerInner className="">
          <HeadlineWithDivider title="Education" className="md:text-right" />
          {Object.entries(educations).map(([key, education]) => (
            <div
              key={key}
              className=" md:text-right md:self-end pl-0 lg:pl-5 xl:pl-16"
              style={{maxWidth: 'fit-content'}}
            >
              <Typo.h3>{education.to}</Typo.h3>
              <Typo.h4 className="-mt-1">{education.from}</Typo.h4>
              <Typo.h2 className="leading-tight">{education.title}</Typo.h2>
              <Typo.p dense className="md:text-right">
                {education.footer}
              </Typo.p>
            </div>
          ))}
        </ContainerInner>
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Experience" />
        {Object.entries(experiences).map(([key, experience]) => (
          <div key={key} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row w-full">
              <div
                className="flex flex-row justify-between items-center gap-2 sm:gap-0 sm:block sm:float-left "
                style={{whiteSpace: 'nowrap'}}
              >
                <Typo.h3>{experience.to}</Typo.h3>
                <Typo.h4 className="mt-1.5 sm:mt-0">{experience.from}</Typo.h4>
              </div>
              <div className="flex-auto pt-2 sm:pl-6 mb-3 sm:mb-0 lg:-mt-1">
                <Typo.h2 className="leading-tight">{experience.title}</Typo.h2>
              </div>
            </div>

            {experience.header && (
              <div>
                {experience.header.map((text) => (
                  <Typo.p key={text} className="mb-4">
                    {text}
                  </Typo.p>
                ))}
              </div>
            )}

            {experience.list && (
              <>
                <p>My tasks were:</p>
                <ul className="list-disc list-outside ml-6">
                  <TwoColumnText>
                    {experience.list.map((text) => (
                      <li key={text} className="mb-4">
                        {text}
                      </li>
                    ))}
                  </TwoColumnText>
                </ul>
              </>
            )}

            {experience.footer && (
              <div>
                {experience.footer.map((text) => (
                  <Typo.p key={text} className="mb-4">
                    {text}
                  </Typo.p>
                ))}
              </div>
            )}
          </div>
        ))}
      </ContainerInner>
    </PageLayout>
  );
};
export default CV;
