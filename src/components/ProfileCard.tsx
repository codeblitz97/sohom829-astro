import { Card, CardBody, Image, Link, Tooltip } from '@nextui-org/react';
import {
  BsDiscord,
  BsGithub,
  BsSpotify,
  BsStackOverflow,
  BsTwitterX,
  BsYoutube,
} from 'react-icons/bs';
import { motion } from 'framer-motion';

const iconVariants = {
  initial: { filter: 'drop-shadow(0 0 0 transparent)' },
  hover: (color: string) => ({
    filter: `drop-shadow(0 10px 15px ${color})`,
  }),
};

const icons = [
  {
    component: BsGithub,
    link: 'https://github.com/codeblitz97/',
    color: '#333',
    name: 'Codeblitz97',
  },
  {
    component: BsDiscord,
    link: 'https://discord.com/users/829000568559108107',
    color: '#5865F2',
    name: 'Sohom829',
  },
  {
    component: BsTwitterX,
    link: 'https://x.com/sohom_829',
    color: '#1DA1F2',
    name: 'Sohom829',
  },
  {
    component: BsStackOverflow,
    link: 'https://stackoverflow.com/users/19870582/mohtasim-alam-sohom',
    color: '#FE7A16',
    name: 'Mohtasim Alam Sohom',
  },
  {
    component: BsSpotify,
    link: 'https://open.spotify.com/user/31on2mijehn2ng7bmshc55ugemwq',
    color: '#1DB954',
    name: 'Sohom',
  },
  {
    component: BsYoutube,
    link: 'https://www.youtube.com/@_sohom',
    color: '#FF0000',
    name: 'Sohom829',
  },
];

export default function ProfileCard() {
  return (
    <Card
      isBlurred
      className="max-w-[710px] border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left lg:flex-row lg:text-left xl:flex-row xl:text-left">
          <Image
            isBlurred
            src="https://avatars.githubusercontent.com/u/94981761?v=4"
            alt="sohom829"
            width={256}
            height={256}
            radius="full"
          />
          <div>
            <h1 className="text-3xl font-bold">Mohtasim Alam Sohom</h1>
            <Link
              href="https://github.com/codeblitz97/"
              target="_blank"
              underline="hover"
              className="text-2xl font-semibold text-foreground-500"
            >
              @Sohom829
            </Link>
            <div className="flex items-center justify-center gap-2 text-foreground-400 md:justify-start">
              <p>He/Him</p>
              <div className="size-1 rounded-full bg-foreground-400"></div>
              <p>Full Stack Developer</p>
            </div>
            <p>15-years-old full stack developer from Bangladesh</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-foreground-400 md:justify-start">
              {icons.map(({ component: Icon, link, color, name }) => (
                <Tooltip key={link} content={name}>
                  <Link aria-label={`link-${name}`} href={link} target="_blank">
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      custom={color}
                      style={{ display: 'inline-block' }}
                    >
                      <Icon size={24} />
                    </motion.div>
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
