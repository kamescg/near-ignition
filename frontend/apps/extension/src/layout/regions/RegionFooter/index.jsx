/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Local --- */
import Nature from '@assets/images/background/nature.jpg';

/* --- Component --- */
export default ({sx}) => {
  return (
    <Atom.Flex
      alignCenter
      between
      sx={sx}
      variants={['backgrounds.gradients.blue']}>
      <Atom.BackgroundImage ratio={0.3} src={Nature} sx={{}} />
      <Atom.BackgroundGradient
        variants={['backgrounds.gradients.charcoal']}
        sx={{opacity: 1}}
      />
      <Atom.Absolute
        sx={{
          top: -22.5,
          left: 0,
          right: 0,
          mx: 'auto',
          transform: 'translateX(50%)',
        }}>
        <Atom.Image src={GLOBAL.icon} sx={{boxShadow: 1, width: 45}} />
      </Atom.Absolute>
      <Atom.Container>
        <Atom.Flex between>
          {/* Left */}
          <Atom.Box sx={{flex: 2, mr: [3, 3, 5]}}>
            <Atom.Heading mb={0} sx={{fontSize: [2, 2, 3]}}>
              {GLOBAL.siteName}
            </Atom.Heading>
            <Atom.HorizontalRule sx={{width: 22, mx: 'inherit'}} />
            <Atom.Paragraph sm>
              In vitae lorem eget sem fringilla porttitor sed nec turpis. Sed
              sit amet felis metus. Curabitur aliquet nisi et just.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box sx={{flex: 2, px: 4}}>
            <Atom.Heading>Resources</Atom.Heading>
            <Atom.HorizontalRule sx={{width: 22, mx: 'inherit'}} />
            <Molecule.Menu
              items={[
                {
                  label: 'Features',
                  to: '/features',
                },
                {
                  label: 'Pricing',
                  to: '/pricing',
                },
                {
                  label: 'Support',
                  to: '/support',
                },
              ]}
              direction="column"
              sxMenu={
                {
                  // p: 2,
                }
              }
              sx={{
                fontSize: 2,
                my: 1,
                flexDirection: 'column',
              }}
            />
          </Atom.Box>
          <Atom.Box sx={{flex: 2, px: 4}}>
            <Atom.Heading>Site</Atom.Heading>
            <Atom.HorizontalRule sx={{width: 22, mx: 'inherit'}} />
            <Molecule.Menu
              items={[
                {
                  label: 'About',
                  to: '/about',
                },
                {
                  label: 'Privacy Policy',
                  to: '/privacy',
                },
              ]}
              direction="column"
              sx={{
                fontSize: 2,
                my: 1,
                flexDirection: 'column',
              }}
            />
          </Atom.Box>

          {/* Right */}
          <Atom.Box sx={{flex: 2}}>
            <Atom.Heading>Affiliate Program</Atom.Heading>
            <Atom.HorizontalRule sx={{width: 22, mx: 'inherit'}} />
            <Molecule.Menu
              items={[
                {
                  label: 'Register',
                  to: '/affiliate/register',
                },
                {
                  label: 'Rewards',
                  to: '/affiliate/rewards',
                },
              ]}
              direction="column"
              sx={{
                fontSize: 2,
                my: 1,
                flexDirection: 'column',
              }}
            />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
      <Atom.Absolute
        sx={{
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          // transform: 'translateX(50%)',
        }}>
        <Atom.Flex between>
          <Atom.Span sx={{fontSize: 0}}>Copyright Horizin LLC 2020</Atom.Span>
          <Atom.Span sx={{fontSize: 0}}>Crafted in California</Atom.Span>
        </Atom.Flex>
      </Atom.Absolute>
    </Atom.Flex>
  );
};
