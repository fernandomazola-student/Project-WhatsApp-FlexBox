import React from 'react';
import perfil from './imgs/perfil.jpg';
import Style from './style.scss';
 

export default class App extends React.Component {
    render(){
        return(
            <section className="s-container">
                <article className="a-left">
                    <header>
                        <a href=""><img src={perfil}/></a>
                        <ul>
                            <li><i className="fas fa-history"></i></li>
                            <li><i className="fas fa-comment-dots"></i></li>
                            <li><i className="fas fa-ellipsis-v"></i></li>
                        </ul>
                    </header>

                    <article className="a-notify">
                        <i className="fas fa-bell-slash"></i>
                        <p>Receba notificações de novas mensagens <span>Ativar notificações na área de trabalho</span></p>
                    </article>    

                    <article className="a-search">
                        <button><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Procurar ou começar uma nova conversa"/>
                    </article>

                    <article className="a-panel-conversation">
                   <div className="box-conversation">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Amor</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Essa é uma mensagem ...</p>
                        </div>
                        </div>

                        
                        
                    </article>
                </article>
                
                {/* <article className="s-right">
                    <header>
                        <img src=""/>
                        <div className="info-box">
                            <div className="info-conversation">
                                <h3>Amor</h3>
                                <p>visto por último hoje às 00:40</p>
                            </div>
                            <div className="info-icon">
                                <ul>
                                    <li>
        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </article> */}
            </section>
        );
    }
}