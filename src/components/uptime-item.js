import React, { useMemo } from 'react';
import htmr from 'htmr';
import ReactTooltip from 'react-tooltip';
import UptimeBlock from './uptime-block';
import Link from './link';
import { formatDuration } from '../utils/helper';

const UptimeItem = (props) => {

  const { ShowLink, CountDays } = window.Config;
  const { monitor } = props;
  
  const status = {
    ok: 'Normal',
    down: 'Down',
    unknow: 'unknow'
  };

  const total = useMemo(() => {
    return monitor.total.times
      ? `Recent ${CountDays} Vina zilei ${monitor.total.times} Errori, cumulative ${formatDuration(monitor.total.duration)}，Disponibilitate medie ${monitor.average}%`
      : `Recent ${CountDays} Disponibilitatea zilei ${monitor.average}%`;
  }, [CountDays, monitor]);

  const initial = useMemo(() => {
    return monitor.daily[monitor.daily.length - 1].date;
  }, [monitor]);

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
          <span className="name">{htmr(monitor.name)}</span>
          {ShowLink && <Link className="link" to={monitor.url} text={htmr(monitor.name)} />}
        </div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
      <div className="foot">
        <span>Azi</span>
        <span>{total}</span>
        <span>{initial.format('YYYY-MM-DD')}</span>
      </div>
    </div>
  );
}

export default UptimeItem;
