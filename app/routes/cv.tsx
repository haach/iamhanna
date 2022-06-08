import {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {useEffect, useState} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {educations, experiences} from '~/cv-data';
import {STORAGE_ITEMS} from '~/utils/constants';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

const defaultState = new Map([
  ['back', true],
  ['neugelb', false],
  ['autentek_2', false],
  ['autentek_1', false],
]);
type ExperienceId = keyof typeof experiences;

const CV = () => {
  const [openSections, setOpenSections] = useState<Map<ExperienceId, boolean> | undefined>();

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_ITEMS.CV_SECTIONS);
    if (!!stored) {
      setOpenSections(new Map(JSON.parse(stored)));
    } else {
      setOpenSections(defaultState);
      window.localStorage.setItem(STORAGE_ITEMS.CV_SECTIONS, JSON.stringify(Array.from(defaultState.entries())));
    }
  }, []);

  const persistSection = (section: ExperienceId) => {
    const updatedMap = new Map(openSections?.set(section, !openSections.get(section)));
    setOpenSections(updatedMap);
    window.localStorage.setItem(STORAGE_ITEMS.CV_SECTIONS, JSON.stringify(Array.from(updatedMap.entries())));
  };

  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <ContainerInner className="">
          <HeadlineWithDivider title="Education" className="print:text-right md:text-right" />
          <SpacedCols>
            {Object.entries(educations).map(([key, education]) => (
              <div
                key={key}
                className="print:text-right md:text-right md:self-end pl-0 lg:pl-5 xl:pl-16 max-w-fit print:max-w-[200px]"
              >
                <Typo.h4>{education.to}</Typo.h4>
                <Typo.h5>{education.from}</Typo.h5>
                <Typo.h2 className="leading-tight my-3 sm:mb-0">{education.title}</Typo.h2>
                <Typo.p dense className="print:text-right md:text-right sm:pt-2">
                  {education.footer}
                </Typo.p>
              </div>
            ))}
          </SpacedCols>
        </ContainerInner>
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Experience" />
        <SpacedCols>
          <Typo.p>
            You can also{' '}
            <Typo.linkExternal href="/hanna_achenbach_short_cv.pdf" download>
              download the PDF version
            </Typo.linkExternal>
          </Typo.p>
          {openSections &&
            Object.entries(experiences).map(([key, experience]) => (
              <div key={key}>
                <div className="flex flex-col sm:flex-row w-full">
                  <div className="flex flex-col sm:block sm:float-left " style={{whiteSpace: 'nowrap'}}>
                    <Typo.h4>{experience.to}</Typo.h4>
                    <Typo.h5>{experience.from}</Typo.h5>
                  </div>
                  <div className="flex-auto pt-2 sm:pl-6 mb-3 sm:mb-0 lg:-mt-1">
                    <Typo.h2 className="leading-tight">{experience.title}</Typo.h2>
                  </div>
                </div>
                <div
                  className={classNames('flex flex-col gap-6 transition-[max-height] ease-out', {
                    'max-h-[3000px]': openSections.get(key),
                    'max-h-0 overflow-hidden': !openSections.get(key),
                  })}
                >
                  {experience.company && (
                    <section className="mt-4">
                      <Typo.h3 className="mb-2">About {experience.name}</Typo.h3>
                      <section className="flex flex-col gap-2">
                        {experience.company.map((text, idx) => (
                          <Typo.p key={text}>
                            {text}{' '}
                            {idx === (experience.company?.length ?? 0) - 1 && (
                              <>
                                <span className="text-xs">🔗</span>{' '}
                                <Typo.linkExternal href={experience.link}>
                                  {experience.link.split('://')[1]}
                                </Typo.linkExternal>
                              </>
                            )}
                          </Typo.p>
                        ))}
                      </section>
                    </section>
                  )}

                  {experience.team && (
                    <section>
                      <Typo.h3 className="mb-2">Team setup</Typo.h3>
                      <section className="flex flex-col gap-2">
                        {experience.team.map((text) => (
                          <Typo.p key={text}>{text}</Typo.p>
                        ))}
                      </section>
                    </section>
                  )}

                  {experience.header && (
                    <section>
                      <section className="flex flex-col gap-2">
                        {experience.header.map((text) => (
                          <Typo.p key={text}>{text}</Typo.p>
                        ))}
                      </section>
                    </section>
                  )}

                  {experience.list && (
                    <section>
                      <Typo.h3 className="mb-2">Tasks</Typo.h3>
                      <ul className="list-disc list-outside ml-6 resonsive-columns ">
                        {experience.list.map((text) => (
                          <li key={text} className="mb-4">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {experience.reflection && (
                    <section>
                      <Typo.h3 className="mb-2">Reflection</Typo.h3>
                      <section className="flex flex-col gap-2">
                        {experience.reflection.map((text) => (
                          <Typo.p key={text}>{text}</Typo.p>
                        ))}
                      </section>
                    </section>
                  )}
                </div>
                <div
                  className="flex flex-row justify-center md:justify-start items-center cursor-pointer mt-4"
                  onClick={() => persistSection(key)}
                >
                  <Typo.p className="text-g hover:underline">Show {openSections.get(key) ? 'less' : 'more'}</Typo.p>
                </div>
              </div>
            ))}
        </SpacedCols>
      </ContainerInner>
    </PageLayout>
  );
};
export default CV;
