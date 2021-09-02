import * as Antd from "antd";
import sec33 from "./sec33.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>北约袭击中国驻南斯拉夫大使馆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      ５月８日，北京时间上午５时左右（贝尔格莱德时间７日午夜），以美国为首的北约飞机用导弹袭击中国驻南斯拉夫大使馆，造成馆舍破坏和人员伤亡。事件发生后，中国政府立即发表紧急声明表示强烈抗议。全国人大外委会、全国政协外委会分别发表声明，各民主党派、全国工商联、中国人民对外友好协会、中国人权发展基金会、中国新闻工作者协会、新华社、光明日报社，以及各宗教团体、社会其他各界和全国各地群众纷纷以集会、游行、座谈、发抗议信或抗议电等各种方式严厉谴责以美国为首的北约集团的暴行。9日，国家副主席胡锦涛发表电视讲话，强烈谴责以美国为首的北约袭击我驻南使馆的暴行。表示中国政府将坚定不移地奉行独立、自主、和平的外交政策，坚定不移地维护国家主权和民族尊严，坚决反对霸权主义和强权政治。１０日，外交部长唐家璇代表中国政府向美国驻华大使提出严正要求：一、公开、正式向中国政府、中国人民和受害者家属道歉。二、对北约导弹袭击中国驻南使馆事件进行全面彻底的调查。三、迅速公布调查的详细结果。四、严惩肇事者。外交部发言人朱邦造宣布，中方决定推迟中美之间的两军高层交往和防止核扩散、军控和国际安全问题磋商以及人权对话。５月１３日，党中央、国务院在人民大会堂召开大会，欢迎回国的我国驻南工作人员。江泽民发表讲话指出，我们要继续坚定不移地坚持以经济建设为中心，推进改革开放，保持社会稳定，贯彻执行独立自主的和平外交政策。
      </p>
        {/*<img src={sec33} alt=""/>*/}
        <img className={styles.img} src={sec33} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
