import './App.scss';
import { Grid, Hidden } from '../src';
import React from 'react';

export default props => {
    return (
        <div className="app">
            <Grid container gap="2">
                <Grid className="app--header" container gap="1" item width="12">
                    <Grid className="app--header-title" item width="6">
                        <h1>Header</h1>
                    </Grid>
                    <Grid className="app--header-nav" item width={6}>
                        <Hidden hide={{ xs: true, sm: false }}>
                            <ul>
                                <li><button>Nav1</button></li>
                                <li><button>Nav2</button></li>
                                <li><button>Nav3</button></li>
                                <li><button>Nav4</button></li>
                            </ul>
                        </Hidden>
                        <Hidden hide={{ xs: false, sm: true }}>
                            <button>Menu</button>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid className="app--content-title" item width={{ xs: 12, md: 3 }} offset={{ md: 3 }} clear={{ xs: true }}>
                    <h2>Content Title</h2>
                </Grid>
                <Grid className="app--content-subtitle" item width={{ xs: 12, md: 3 }} offset={{ md: 3 }} clear={{ xs: true }}>
                    <h3>Content Subtitle</h3>
                </Grid>
                <Grid className="app--content" item width={{ xs: 12, md: 8, lg: 6 }} offset={{ lg: 2 }}>
                    <p>
                        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
                        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo 
                        vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. 
                        Hi mindless mortuis soulless creaturas, imo evil stalking monstra 
                        adventus resi dentevil vultus comedat cerebella viventium. Qui animated 
                        corpse, cricket bat max brucks terribilem incessu zomby. The voodoo 
                        sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi 
                        tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains 
                        an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv 
                        ingdead.
                    </p>
                    <Grid container>
                        <Grid item width={{ xs: 12, md: 9 }}>
                            Cum horribilem walking dead resurgere de crazed sepulcris creaturis, 
                            zombie sicut de grave feeding iride et serpens. Pestilentia, shaun 
                            ofthe dead scythe animated corpses ipsa screams. Pestilentia est 
                            plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus 
                            voodoo.
                        </Grid>
                        <Grid item width={{ xs: 12, md: 3 }}>
                            <img alt="Yellow rubber duck"
                                className="app--content-image"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Cyberduck_icon.png">
                            </img>
                        </Grid>
                        <Grid item>
                            <p>
                                Lucio fulci tremor est dark vivos magna. Expansis creepy arm 
                                yof darkness ulnis witchcraft missing carnem armis Kirkman Moore 
                                and Adlard caeruleum in locis. Romero morbo Congress amarus in 
                                auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida 
                                survival portenta. The unleashed virus est, et iam zombie mortui 
                                ambulabunt super terram. Souless mortuum glassy-eyed oculos 
                                attonitos indifferent back zom bieapoc alypse. An hoc dead snow 
                                braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is 
                                bello mundi z?
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="app--sidebar" container item width={{ xs: 12, md: 4, lg: 2 }}>
                    <Grid item width={12}>
                        <h2>Sidebar</h2>
                        <ul>
                            <li>Article 1</li>
                            <li>Article 2</li>
                            <li>Article 3</li>
                            <li>Article 4</li>
                            <li>Article 5</li>
                        </ul>
                    </Grid>
                    <Grid item width={{ xs: 12 }}>
                        <h2>Sidebar 2</h2>
                        <ul>
                            <li>Article 1</li>
                            <li>Article 2</li>
                            <li>Article 3</li>
                            <li>Article 4</li>
                            <li>Article 5</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="app--footer" container columns={4}>
                <Grid className="app--footer-title" item offset={{ xs: 0,  md: 1 }} width={{ xs: 4, md: 2 }}>
                    <h2>Footer</h2>
                </Grid>
            </Grid>
        </div>
    );
};