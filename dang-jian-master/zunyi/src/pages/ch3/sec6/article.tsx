import * as Antd from "antd";
import sec6 from "./sec6.png";
// @ts-ignore
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>深圳、珠海、厦门经济特区正式批准建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>深圳：广东省深圳经济特区于1980年8月正式成立，是中国最早实行对外开放的四个经济特区之一。深圳位于广东省的东南部沿海，东起大鹏湾边的梅沙，西至深圳湾畔的蛇口工业区，包括今罗湖、福田、南山、盐田四个区，总面积327.5平方公里</p>
        <p>珠海：珠海经济特区是中国最早实行对外开放政策的四个经济特区之一，位于广东省珠江口的西南部，东与香港隔海相望，南与澳门相连。珠海于1953年建县，1979年建市，1980年8月设立经济特区，享有全国人大赋予的地方立法权。</p>
        <p>厦门：厦门经济特区于1980年10月批准设立，面积2.5平方公里。1984年2月，邓小平同志视察厦门后，厦门特区范围扩大到全岛，面积131平方公里，并逐步实行了自由港某些政策。随后，国务院相继批准设立海沧、杏林、集美半岛三个台商投资区，实行经济特区现行政策。1992年又批准设立象屿保税区。其间，国务院还批准厦门市为计划单列市，赋予相当于省一级经济管理权。1994年3月，全国人大授予厦门特区地方立法权。厦门经济特区是我国的六个经济特区之一，是经中华人民共和国国务院批准实行计划单列，享有省级经济管理权限的城市之一。</p>
        <img className={styles.img} src={sec6} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
