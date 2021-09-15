import * as Antd from "antd";
import sec45 from "./sec45.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>辽沈战役，东北全境解放</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      辽沈战役是中国近代史解放战争中的“三大战役”之一，1948年9月12日开始，同年11月2日结束，共历时52天。中国共产党称之为辽沈战役，中国国民党称之为辽西会战，又作”辽沈会战“。
1948年9月12日，林彪、罗荣桓率东北解放军发动攻击，连克辽宁昌黎、滦县、兴城、绥中、义县、国民党军被分割在锦州、锦西、山海关地区。蒋介石急调北宁县的5个师和山东的2个师，连同原在锦西4个师，共11个师，于10月10日至1 5日猛攻塔山，以解锦州之围，但未能突破解放军的阵地。10月11日，廖耀湘指挥的国民党军第九兵团11个师和3个骑兵旅由沈阳驰援锦州，亦被阻止在黑山、大虎山东北地区。14日，东北野战军对锦州市发起攻击，15日攻克，全歼守敌，俘敌10万余人。17日，驻守长春的曾泽生率第六十军26000人起义，其余在东北副总司令郑洞国率领下投降。蒋介石此时仍想夺回锦州，打通关内外的联络，令第九兵团继续向锦州前进。东北野战军主力于26日在黑山、大虎山将第九兵团包围，经两天激战，歼10万人，廖耀湘等多名高级将领被俘。 11月2日解放沈阳、营口，再歼敌近15万人。
战役结束后，中国人民解放军首次在兵力数量方面超越国民党军队。解放了东北全境。
      </p>
        {/*<img src={sec45} alt=""/>*/}
        <img className={styles.img} src={sec45} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
