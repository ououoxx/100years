import * as Antd from "antd";
import sec37 from "./sec37.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共扩大的六届七中全会在延安召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      六届七中全会于1944年5月21日至1945年4月20日在延安杨家岭举行。出席会议的中央委员和候补中央委员17人；列席会议的各中央局、分局和其他方面的负责人12人。全会选举毛泽东、朱德、刘少奇、任弼时、周恩来组成主席团，毛泽东为主席团主席。会议通过了刘少奇提出的以原中央政治局主席毛泽东为中央委员会主席的提议；决定全会期间由主席团处理中央日常工作，书记处和政治局停止行使职权。全会讨论了中共七大的各项准备工作，通过了中共七大的议事日程和报告负责人，决定除毛泽东的政治报告由主席团和全会讨论外，其他如军事报告、修改党章的报告、党的历史问题报告、统一战线报告等，分别成立委员会起草。全会后期，讨论通过了准备提交中共七大的政治报告、军事报告和党章草案、七大主席团名单草案、代表资格审查委员会候选人名单和会场规则草案等。全会还通过了毛泽东起草的《中共中央关于城市工作的指示》等文件。此次会议最重要的成果是通过了《关于若干历史问题的决议》，该决议是一个马列主义的重要文献，对党的斗争历史经验和教训作了科学的总结和概括，高度评价了毛泽东运用马克思列宁主义基本原理解决中国革命问题的杰出贡献，肯定了确立毛泽东在全党的领导地位的重大意义。同时，全面阐述了历次“左”倾错误的表现及其造成的严重危害，并着重分析了产生错误的社会根源和思想根源。这次会议，标志着历时三年八个月的整风运动结束，为中共七大的胜利召开作了重要的准备。
      </p>
        {/*<img src={sec37} alt=""/>*/}
        <img className={styles.img} src={sec37} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
