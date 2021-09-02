import * as Antd from "antd";
import sec43 from "./sec43.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>亚太经合组织领导人非正式会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      亚太经合组织(APEC)第九次领导人非正式会议在上海举行，这是中国第一次举行这样高级别的大型国际会议。江泽民主持会议并发表题为《加强合作，共同迎接新世纪的新挑战》的讲话指出，加强合作，使各成员从经济全球化和科技进步中受益，是APEC的目标；采取有效措施，恢复和保持增长，是本次会议亟需考虑的问题。应始终站在全球与区域经济发展的前沿，对解决世界与区域经济发展面临的突出问题发挥引导方向的重要作用。应在尊重多样性的基础上，继续秉承“开放的地区主义”原则，为促进多边贸易体制的发展作出贡献。应反映各成员最广泛的共同利益，采取更富成效的合作方式，缩小成员间差距，增强凝聚力。中国将一如既往致力于改革开放和现代化建设，将以更积极的姿态参与区域及全球范围的经济技术合作，严格遵循国际通行的市场规则，实行公开、透明、平等的贸易投资政策，进一步推动全方位、多层次、宽领域的对外开放。会议通过了《领导人宣言》和作为附件的《上海共识》、《数字APEC战略》，发表了《亚太经合组织领导人反恐声明》。
        ９月２８日，中共中央、国务院在北京人民大会堂隆重举行全国抗洪抢险总结表彰大会。江泽民发表重要讲话强调，在同洪水搏斗中，我们的民族和人民展现出了一种十分崇高的精神。这就是万众一心、众志成城，不怕困难、顽强拼搏，坚韧不拔、敢于胜利的伟大抗洪精神。抗洪精神同我们党一贯倡导的革命精神和新时期的创业精神一样，都是我国人民的宝贵精神财富。我们世世代代都要继承和弘扬这些精神，激励我们的广大干部和群众不断从胜利走向新的胜利。
      </p>
        {/*<img src={sec43} alt=""/>*/}
        <img className={styles.img} src={sec43} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
