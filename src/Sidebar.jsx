import "../src/header/Sidebar.css"
import { Layers, ChartBarStacked, ChartLine, Scale3d, Calculator, Database, Droplet, Activity } from "lucide-react";


function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="tab-button">
                <button className="tab-active">Staking</button>
                <button className="tab">Stable Coin</button>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><ChartBarStacked size={(18)} />Dashboard</li>
                    <li><Calculator size={(18)} />Assets</li>
                    <li><Database size={(18)} />Staking Providers</li>
                    <li><Droplet size={(18)} />Staking Calculator</li>
                    <li><Activity size={(18)} />Data API</li>
                    <li><ChartLine size={(18)} />Liquid Staking</li>
                    <li><Scale3d size={(18)} />Active Staking
                        {/* <ul className="dropdown">
                            <li>Thiết kế</li>
                            <li>Phát triển</li>
                            <li>SEO</li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
            <div>

            </div>
        </aside>
    )
}

export default Sidebar;