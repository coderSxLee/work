/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'lingdang' | 'more' | 'iconset0254' | 'dianzan' | '3' | 'houtui' | 'sousuo' | 'xiazai19' | 'zhijiao-triangle' | 'jiaochacross80' | 'toubaoxuzhi' | 'dingdan' | 'shangcheng' | 'shu' | 'shu1' | 'shoucang1' | 'qizhi' | 'shouye' | 'close_icon' | 'selected' | 'set' | 'dianpu' | 'unselected' | 'tubiaoshangshengqushi' | 'douzi' | 'gwc' | 'xingxing' | 'dizhi' | 'baobeifuli' | 'px_daoxu' | 'tubiaozhizuomoban' | 'youjiantou' | 'kechengbushi' | 'xiaoxi' | 'paixu' | 'lipin' | 'dianpushouye' | 'shengxu' | 'shijian' | 'qiehuan' | 'jiahao' | 'jifenduihuan' | 'bianji' | 'dianpu_fenlei' | 'kuaidiche-X' | 'wode' | 'laba' | 'dizhi1' | 'shanchu-copy-copy' | 'shiwuzhongxin_tushuguan' | 'weixinzhifu' | 'hongbao' | 'changyongicon-' | 'jiangxu' | 'gouwuche' | 'bianji1' | 'shoucang';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

IconFont.config = {
  usingComponents: {
    iconfont: './weapp/weapp',
  },
};

export default IconFont;
