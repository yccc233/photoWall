import React,{ Component } from 'react'

/**
 * @param {Object} picJson
 * @param {Array} picJson.picUrl    照片的url
 * @param {Array} picJson.text      文本标题
 * @param {Array} picJson.bText     详细描述
 * @link https://blog.csdn.net/yunchong_zhao/article/details/104859308
 */
class PicTab extends Component {
    constructor(){
        super();
        this.state={
            rotate:[],
            left:'',
            top:'',
            zIndex:'',
            index:-1,
            rotateY:[]
        }
    }
    componentWillMount(){
        this.random();
    }
    random(id){
        let newRotate=[],newLeft=[],newTop=[],newZindex=[],newRotateY=[];
        this.props.picJson.picUrl.forEach((item,index)=>{
            newRotateY.push(0)
            if(id===index){
                newRotate.push(0)
                newLeft.push('40%');
                newTop.push('20%')
                newZindex[index]=30;
            }else{
                newRotate.push(Math.random()*-720+360);
                newLeft.push(Math.random()*(window.innerWidth-340)+'px');
                newTop.push(Math.random()*(window.innerHeight-416)+'px')
            }

        })
        this.setState({
            rotate:newRotate,
            left:newLeft,
            top:newTop,
            zIndex:newZindex,
            rotateY:newRotateY
        })
    }
    css(){
        return `
            *{margin:0;padding:0;list-style:none;}
            body{background:#ccc;overflow:hidden;}
            .myUl{width:100%;height:100%;}
            .myUl>li{width:340px;height:416px;background:white;position:absolute;transform-style:preserve-3d;}

            .myUl>li .zm{width:100%;height:100%;position:absolute;left:0;top:0;transform:translateZ(1px)}
            .myUl>li>.zm img{width:285px;height:192px;position:absolute;left:50%;top:93px;transform:translateX(-50%)}
            .myUl>li>.zm .textNode{width:100%;position:absolute;text-align:center;bottom:24px;color:#4d544d;}

            .myUl>li .bm{width:100%;height:100%;position:absolute;left:0;top:0;transform:translateZ(-10px) rotateY(180deg);text-align:center;}

            .myOl{position:absolute;left:50%;transform:translateX(-50%);bottom:38px;height:22px;}            
            .myOl>li{width:22px;height:22px;float:left;background-color:#007d77;margin:0 8px;z-index:100;border-radius:50%;cursor:pointer;transition:.7s;}
            .myOl>li.active{transform:scale(1.5) rotateY(180deg);}
            .myOl>li.dactive{transform:scale(1.5) rotateY(360deg);background:yellow;}
            
            .bs {box-shadow: 1px 1px 10px 0 rgba(0,0,0,.15), inset 1px 2px 0 0 #fff;}

        `
    }
    click(id,e){
        if(e.target.classList.contains('active')){
            if(e.target.classList.contains('dactive')){
                e.target.classList.remove('dactive');
                this.state.rotateY.splice(id,1,360);
            }else{
                e.target.classList.add('dactive');
                this.state.rotateY.splice(id,1,180);
            }
            this.setState({
                rotateY:this.state.rotateY
            })
        }else{
            this.random(id);
            this.setState({
                index:id
            })
        }

    }
    render(){
        let aLi=[],bLi=[];
        this.props.picJson.picUrl.forEach((v,i)=>{
            aLi.push(<li style={{transform:'perspective(800px) rotate('+this.state.rotate[i]+'deg) rotateY('+this.state.rotateY[i]+'deg)',left:this.state.left[i],top:this.state.top[i],transition:Math.random()*2+0.7+'s',zIndex:this.state.zIndex[i]}} key={i}>
                <div className="zm bs">
                    <img alt={i} src={v} /><div className="textNode">{this.props.picJson.text[i]}</div>
                </div>
                <div className="bm" style={{margin: 20}}>
                    {this.props.picJson.bText[i]}
                </div>
            </li>)
            bLi.push(<li className={this.state.index===i?'active':''} key={i} onClick={this.click.bind(this,i)}/>)
        });

        return (
            <div>
                <style dangerouslySetInnerHTML={{__html:this.css()}}/>
                <ul className="myUl" ref="myUl">
                    {aLi}
                </ul>
                <ol className="myOl">
                    {bLi}
                </ol>
            </div>
        )
    }
}
export default PicTab

