import * as Antd from "antd";
import sec5 from "./sec5.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央政治局在北京召开扩大会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
           8月18日到8月23日，中共中央政治局在北京召开扩大会议。１８日，邓小平在会上作了《党和国家领导制度的改革》的讲话。讲话分五部分：一、国务院领导成员的变动，将是五届人大三次会议的主要议题之一。关于国务院负责人人选的调整，中央做这样的考虑，一是权力不宜过分集中；二是兼职、副职不宜过多；三是着手解决党政不分、以党代政的问题；四是从长远着想，解决好交接班的问题。让比较年轻的同志走上第一线，老同志当好他们的参谋，支持他们的工作，这是保持党和政府正确领导的连续性、稳定性的重大战略措施。二、改革党和国家领导制度及其他制度，是为了充分发挥社会主义制度的优越性，加速现代化建设事业的发展。三、党和国家现行的一些具体制度中，还存在不少的弊端，只有对这些弊端进行有计划、有步骤而又坚决彻底的改革，人民才会信任我们的领导，才会信任党和社会主义。四、这些弊端多少都带有封建主义色彩。现在应该明确提出继续肃清思想政治方面的封建主义残余影响的任务，并在制度上做一系列切实的改革。同时，决不能丝毫放松和忽视对资产阶级思想和小资产阶级思想的批判，对极端个人主义和无政府主义的批判。五、中央经多次酝酿，现在正考虑逐步进行如下重大改革：不允许权力过分集中；设立中央顾问委员会；真正建立从国务院到地方各级政府从上到下的强有力的工作系统；有准备有步骤地改变党委领导下的厂长负责制、经理负责制；各企业事业单位普遍成立职工代表大会或职工代表会议；各级党委要真正实行集体领导和个人分工负责相结合的制度。８月３１日，政治局讨论通过了邓小平的讲话，这个讲话实际上成为我国政治体制改革的纲领。
        </p>
        <img className={styles.img} src={sec5} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
