import Activity from "../ActivityBase";
import Button from "../../Buttons/ButtonBase";
import React from "react";
import TextEditor from "../../TextEditor/Index";

const SingleComment = ({}) => {
  const activity = (
    <p className="mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis odio
      aspernatur fugiat eos quo neque vel incidunt dolores sunt totam magni nam
      eveniet ullam, soluta ab repellat iusto autem possimus eius? Sed sint ut
      corporis amet quidem provident dicta, alias laborum officiis, optio,
      dolore unde deserunt ad? Maxime dignissimos provident consequatur eum
      ratione quo repudiandae suscipit quisquam neque perferendis at, similique
      nulla, tempora dolorum ab natus? Libero molestiae quia saepe. A aliquam
      iusto reprehenderit cumque repellendus ab quod, tempore, magnam doloribus
      adipisci quis. Perferendis illo amet sapiente sequi assumenda laborum
      dolore, hic fugiat consequuntur necessitatibus dolorem laudantium
      accusamus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Tempore et distinctio quae inventore enim iure nam, mollitia doloremque
      aspernatur adipisci, aliquam quis molestias deleniti officiis aut quasi at
      quia minus. Incidunt, ab soluta hic quis itaque pariatur dicta. Enim
      quidem magnam aperiam pariatur deleniti, quaerat quis voluptatum placeat
      facilis nesciunt quam tempora laudantium obcaecati velit accusamus ad
      accusantium veniam autem eius id voluptate, iste odit odio praesentium.
      Temporibus sapiente ipsum laudantium accusamus tempora aliquam nam itaque
      dolorem unde, consequatur tenetur hic. Inventore velit iure illum laborum
      beatae ipsum reprehenderit rerum provident, facere dolores debitis sint,
      corrupti adipisci? Maxime suscipit nostrum esse consectetur. Eveniet neque
      id debitis quos quidem cumque, excepturi est possimus tenetur praesentium.
      Qui recusandae consectetur nostrum voluptate possimus ab temporibus beatae
      et quisquam laboriosam ipsum, dolor rem ipsam blanditiis excepturi placeat
      expedita voluptatum labore vitae unde facere ad. Perspiciatis aliquid
      beatae, reiciendis nisi asperiores aperiam quia iure amet eum sequi labore
      quae nobis animi? Natus consequatur quam, commodi magnam omnis est
      quisquam magni maiores id esse, blanditiis impedit nisi cupiditate? Id
      voluptas pariatur consequuntur quidem culpa tempora ipsa velit voluptatum.
      Eveniet id ducimus perferendis tempore possimus praesentium doloremque
      quam numquam reiciendis. Eius, necessitatibus! Numquam temporibus tenetur
      ab cum perferendis vero, in rem nobis veniam facere ad expedita, quo fugit
      voluptates quidem? Necessitatibus quae officiis esse tenetur animi ipsam
      dolorum, dignissimos atque perferendis quos consequatur aut omnis, ratione
      numquam placeat distinctio consequuntur ullam ad eius! Dolore, impedit
      mollitia facere placeat distinctio dolorum quaerat, perferendis recusandae
      similique dolores commodi quos numquam et! Fugiat tenetur minus voluptas
      est natus molestiae ex id pariatur in quaerat maxime, ipsum ducimus
      distinctio quae velit nihil ea officiis. Quos in harum doloribus, sequi
      eius amet rerum sed nulla aliquid voluptatem repudiandae assumenda,
      consequatur iure atque quisquam fuga enim, quaerat consequuntur molestias
      voluptates sit id quis eveniet. Asperiores voluptatem inventore quae
      tempora eos nemo totam aliquam dignissimos magnam. Sit tempore, nobis amet
      veniam modi eos iure tempora explicabo, totam officia officiis omnis.
      Quos, magni. Enim magni laborum aliquid officia aperiam recusandae numquam
      impedit assumenda iste nostrum excepturi, omnis soluta, optio veniam
      reprehenderit cum quam fugit itaque accusantium architecto porro quo?
      Iusto nemo fugit, nihil aperiam explicabo, blanditiis perferendis eius
      exercitationem, saepe magnam eveniet tenetur ut? Quis possimus repellat
      nesciunt et laborum dolore voluptatum, atque commodi necessitatibus harum
      doloribus mollitia eius quae corporis officiis, velit accusantium natus
      voluptate error obcaecati? Fuga voluptate facere assumenda voluptas ullam
      eligendi.
    </p>
  );
  const activity2 = (
    <React.Fragment>
      <strong className="text-dark">Brooklyn Simmons</strong> received the{" "}
      <span className="text-primary">Editor access</span>.
    </React.Fragment>
  );

  const activity3 = (
    <p className="mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis odio
      aspernatur fugiat eos quo neque vel incidunt dolores sunt totam magni nam
      eveniet ullam, soluta ab repellat iusto autem possimus eius? Sed sint ut
      corporis amet quidem provident dicta, alias laborum officiis, optio,
    </p>
  );
  return (
    <React.Fragment>
      <Activity
        name={activity2}
        subHeading="Created this repository 2 days ago"
        avatar="https://fastly.picsum.photos/id/952/200/300.jpg?hmac=TxmAKrqJEDerU9Oz17usv5fHJ4ibYOWOvLK4Q3Z0ytc"
      />
      <Activity
        name="Abdullah Al Rafee"
        avatar="https://fastly.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM"
        subHeading="Created this repository 2 days ago"
        activity={activity}
        footer={
          <React.Fragment>
            <Button outline size="sm">
              Reply
            </Button>
            <Button outline size="sm">
              Edit
            </Button>
          </React.Fragment>
        }
      />

      <Activity
        name="Samin Israr Ravi"
        avatar="https://fastly.picsum.photos/id/853/200/300.jpg?hmac=-vUTO-GMdNHJbNIJrZtC4jsw0ybpHVgCrtWkg1DZugg"
        subHeading="Created this repository 2 days ago"
        activity={activity3}
        footer={
          <React.Fragment>
            <Button outline size="sm">
              Reply
            </Button>
            <Button outline size="sm">
              Edit
            </Button>
          </React.Fragment>
        }
      />
      <Activity
        name="Samin Israr Ravi"
        avatar="https://fastly.picsum.photos/id/853/200/300.jpg?hmac=-vUTO-GMdNHJbNIJrZtC4jsw0ybpHVgCrtWkg1DZugg"
        subHeading="Created this repository 2 days ago"
        activity={<TextEditor />}
        footer={
          <React.Fragment>
            <Button outline size="sm">
              Reply
            </Button>
            <Button outline size="sm">
              Edit
            </Button>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};

export default SingleComment;
