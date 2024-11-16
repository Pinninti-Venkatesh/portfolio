import { Avatar, Button, Flex, Heading, RevealFx, SmartImage, SmartLink, Text, Badge, GlitchFx, LetterFx } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { person, about, social } = renderContent(t);
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/blog`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function About(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, about, social } = renderContent(t);
    const structure = [
        {
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        {
            title: about.technical.title,
            display: about.technical.display,
            items: []
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            {about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={about} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">

                    {/* <GlitchFx
                        speed="medium"
                        interval={2500}
                        trigger="instant"
                        continuous
                    > */}
                    <Flex
                        fillWidth
                        mobileDirection="column" justifyContent="center"
                    >
                        {about.avatar.display && (

                            <Flex
                                minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                                direction="column" alignItems="center">
                                <Avatar
                                    src={person.avatar}
                                    size="xl" />
                            </Flex>
                        )}
                        <Flex
                            id={about.intro.title}
                            fillWidth minHeight="160"
                            direction="column" justifyContent="center"
                            marginBottom="32">

                            <Heading
                                className={styles.textAlign}
                                variant="display-strong-l"
                                onBackground="neutral-strong">
                                <LetterFx
                                    speed="slow"
                                    trigger="instant"
                                    charset={[
                                        'X',
                                        '@',
                                        '$',
                                        'a',
                                        'H',
                                        'z',
                                        'o',
                                        '0',
                                        'y',
                                        '#',
                                        '?',
                                        '*',
                                        '0',
                                        '1',
                                        '+'
                                    ]}
                                >
                                    {person.name}</LetterFx>
                            </Heading>
                            <Text
                                className={styles.textAlign}
                                variant="display-default-s"
                                onBackground="neutral-weak">
                                    <LetterFx
                                    speed="slow"
                                    trigger="instant"
                                    charset={[
                                        'X',
                                        '@',
                                        '$',
                                        'a',
                                        'H',
                                        'z',
                                        'o',
                                        '0',
                                        'y',
                                        '#',
                                        '?',
                                        '*',
                                        '0',
                                        '1',
                                        '+'
                                    ]}
                                >
                                {person.role}
                                </LetterFx>
                            </Text>
                            {social.length > 0 && (
                                <Flex
                                    className={styles.blockAlign}
                                    paddingTop="20" paddingBottom="8" gap="8" wrap>
                                    {social.map((item) => (
                                        item.link && (
                                            <Button
                                                key={item.name}
                                                href={item.link}
                                                prefixIcon={item.icon}
                                                label={item.name}
                                                size="s"
                                                variant="tertiary" />
                                        )
                                    ))}
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                    {/* </GlitchFx> */}

                    {about.intro.display && (
                        <RevealFx translateY="4">
                            <Flex
                                direction="column"
                                textVariant="body-default-l"
                                fillWidth gap="m" marginBottom="xl">
                                {about.intro.description}
                            </Flex>
                        </RevealFx>
                    )}

                    {about.work.display && (
                        <RevealFx
                            speed="medium"
                            delay={1}
                            translateY={0}
                        >
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${experience.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex
                                            // as="ul"
                                            onBackground="neutral-weak"
                                            direction="column" gap="8">
                                            {experience.achievements.map((achievement: Element, index: any) => (
                                                <Text
                                                    // as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                    </Flex>
                                ))}
                            </Flex>
                        </RevealFx>
                    )}

                    {about.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                variant="display-strong-s" marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex
                                direction="row"

                                fillWidth wrap={true}>
                                {about.technical.skills.map((skill) => (
                                    <Badge style={{ marginRight: '10px', marginBottom: '10px' }} icon={skill.iconName} effect>{skill.title}</Badge>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}