import {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {pill} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {LinkType, workItems} from '~/work-data';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - my work',
});

const ImageContainer: FC<{src: string}> = ({src}) => (
  <img src={`/work_samples/${src}`} className="max-w-full border border-solid border-gl dark:border-gd" />
);

const Work: FC = () => {
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <ContainerInner>
          <HeadlineWithDivider title="On the side" className="md:text-right" />
          <SpacedCols>
            <div
              className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
              style={{maxWidth: 'fit-content'}}
            >
              <Typo.p>
                Because of my background not all of my work is not strictly limited to coding. In this section you'll
                find some of my creations from all sectors of work and life.
              </Typo.p>
            </div>
          </SpacedCols>
        </ContainerInner>
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Work samples" />
        <SpacedCols>
          {workItems.map((item) => (
            <div className="flex flex-col gap-4" key={item.id}>
              <Typo.h3>{item.title}</Typo.h3>
              <ImageContainer src={item.img} />
              <Typo.p>{item.text}</Typo.p>

              <div className="flex flex-row gap-2">
                {item.tags.map((tag, idx) => (
                  <Typo.caption className={classNames(pill, 'text-xs')} key={`tag-${item.id}-${idx}`}>
                    {tag}
                  </Typo.caption>
                ))}
              </div>
              {!!item.links?.length && (
                <div className="flex flex-row gap-4">
                  {item.links.map((link, idx) => {
                    const linkText =
                      link.type === LinkType.GITHUB
                        ? 'Check the code on Github'
                        : link.type === LinkType.DEMO
                        ? 'Go to live demo'
                        : 'See detal page';
                    return (
                      <span key={`link-${item.id}-${idx}`} style={{whiteSpace: 'nowrap'}}>
                        <span className="text-xs">🔗</span>
                        {link.type === LinkType.DETAIL ? (
                          <Typo.linkInternal to={link.href} className="ml-2 inline-block">
                            {linkText}
                          </Typo.linkInternal>
                        ) : (
                          <Typo.linkExternal href={link.href} title={linkText} className="ml-2 inline-block">
                            {linkText}
                          </Typo.linkExternal>
                        )}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </SpacedCols>
      </ContainerInner>
    </PageLayout>
  );
};

export default Work;
