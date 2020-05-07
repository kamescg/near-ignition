import {Modal, Drawer} from '@horizin/molecules';
import Testimonial from './Testimonial';

export const Testimonials = props => {
  return (
    <>
      <Atom.Container sx={{py: [3, 3, 5]}}>
        <Atom.Heading textCenter sx={{fontSize: [4, 4, 5, 6], fontWeight: 700}}>
          What People are Saying
        </Atom.Heading>
        <Atom.Heading textCenter sx={{fontSize: [2, 2, 3], fontWeight: 500}}>
          The experiences of active users, just like you!
        </Atom.Heading>
        <Atom.Flex>
          <Testimonial
            sx={{mr: 3}}
            img="https://pbs.twimg.com/profile_images/1228728801858854912/kAlqxuaP_400x400.jpg">
            <Atom.Blockquote>
              Donec auctor quam pulvinar, tincidunt leo sed, molestie odio.
              Integer blandit, mi et placerat venenatis, orci nibh ultrices
              orci, quis commodo elit dui vitae lectus. Mauris iaculis lacinia
              maximus. Proin diam ante, varius vel tellus vel, venenatis varius
              risus.
              <cite>Kames Cox Geraghty</cite>
            </Atom.Blockquote>
          </Testimonial>
          <Testimonial
            sx={{ml: 3}}
            img="https://pbs.twimg.com/profile_images/1228728801858854912/kAlqxuaP_400x400.jpg">
            <Atom.Blockquote>
              Donec auctor quam pulvinar, tincidunt leo sed, molestie odio.
              Integer blandit, mi et placerat venenatis, orci nibh ultrices
              orci, quis commodo elit dui vitae lectus. Mauris iaculis lacinia
              maximus. Proin diam ante, varius vel tellus vel, venenatis varius
              risus.
              <cite>Kames Cox Geraghty</cite>
            </Atom.Blockquote>
          </Testimonial>
        </Atom.Flex>
      </Atom.Container>
    </>
  );
};

export const VideoPreview = ({reverse, img}) => {
  return (
    <Atom.Box variants={['backgrounds.gradients.gray']}>
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box
            sx={{
              flex: 2,
              order: reverse ? 2 : 1,
            }}>
            <Atom.Heading sx={{fontSize: [4, 4], fontWeight: 700}}>
              Experience the Simplicity
            </Atom.Heading>
            <Atom.Paragraph sm>
              In vitae lorem eget sem fringilla porttitor sed nec turpis. Sed
              sit amet felis metus. Curabitur aliquet nisi et justo convallis
              sodales. Morbi egestas tempus arcu et porta.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box
            sx={{
              order: reverse ? 1 : 2,
              flex: 3,
              p: 5,
            }}>
            <Modal>
              <Atom.Image src={img} sx={{variant: 'effects.imageCard'}} />
              <Atom.Image src={img} sx={{variant: 'effects.imageCard'}} />
            </Modal>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};
