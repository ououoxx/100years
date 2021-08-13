import * as Antd from "antd";
import sec6_1 from "./sec6_1.png";
import sec6_2 from "./sec6_2.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>深圳、珠海经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>深圳经济特区建立：广东省深圳经济特区于1980年8月正式成立，是中国最早实行对外开放的四个经济特区之一。深圳位于广东省的东南部沿海，东起大鹏湾边的梅沙，西至深圳湾畔的蛇口工业区，总面积327.5平方公里，2010年延伸到全市，2011年延伸至深汕特别合作区。
          深圳毗邻香港，交通便利，气候温和，风景优美，在利用外资发展经济方面，具有得天独厚的条件。根据中央的指示，广东省深圳特区将建成以发展工业为重点的工、商、农、住宅、旅游等多种行业的综合性特区。
          2018年1月6日，国务院同意撤销深圳经济特区管理线。
          2019年全年实现地区生产总值26927.09亿元，比上年增长6.7%。其中，第一产业增加值25.20亿元，增长5.2%；第二产业增加值10495.84亿元，增长4.9%；第三产业增加值16406.06亿元，增长8.1%。第一产业增加值占全市地区生产总值的比重为0.1%，第二产业增加值比重为39.0%，第三产业增加值比重为60.9%。人均地区生产总值203489元，增长3.0%，按2019年平均汇率折算为29498美元。
        </p>
        <p>珠海经济特区是中国最早实行对外开放政策的四个经济特区之一，位于广东省珠江口的西南部，东与香港隔海相望，南与澳门相连。珠海于1953年建县，1979年建市，1980年8月设立经济特区，享有全国人大赋予的地方立法权。
          珠海是珠江口西岸的核心城市、珠江三角洲中心城市、粤港澳大湾区节点城市、省域副中心城市。珠海是全国唯一以整体城市景观入选“全国旅游胜地四十佳”的城市，中国海滨城市，新型花园城市，有着国家新颁布的“幸福之城” 之名，有“浪漫之城，百岛之市”的称号。
          珠海下辖香洲、斗门、金湾3个行政区，总面积7653平方公里，其中陆地面积面积1736.46平方千米，全市常住人口202.37万人(2019年)。 2019年珠海全市实现地区生产总值3435.89亿元，同比增长6.8%；人均GDP17.55万元人民币，排名位列广东省第二。
        </p>
        {/*<img src={sec6_1} alt="深圳"/>*/}
        {/*<img src={sec6_2} alt="珠海"/>*/}
        <video src={vid} style={{width:"600px",height:"400px"}} controls/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
