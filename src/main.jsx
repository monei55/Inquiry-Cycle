import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const phases = [
  {
    id: 'scan',
    number: 1,
    icon: '🔎',
    title: 'Scan & Assess',
    question: 'Where are we now?',
    summary: 'Build a clear, evidence-informed picture of current practice and student outcomes before deciding what to change.',
    why: 'A disciplined scan helps teams move beyond assumptions. It brings together evidence about teaching, leadership, implementation and student outcomes so the next decision is grounded in current reality.',
    clc: [
      'Mapped each school against the Reading Signposts.',
      'Identified current strengths and areas requiring further development.',
      'Compared evidence about reading practice and student outcomes.',
      'Used the shared picture to guide the next phase of the inquiry.'
    ],
    questions: [
      'What evidence do we have about current teaching practice?',
      'What evidence do we have about student outcomes?',
      'What patterns, gaps or inconsistencies are emerging?',
      'Whose experience or perspective is not yet represented?',
      'What does the evidence suggest needs closer investigation?'
    ],
    tip: 'Do not rush to name a solution. Spend enough time understanding the current reality and the problem you are trying to solve.',
    pitfalls: ['Relying on one data source', 'Starting with a preferred program or solution', 'Treating perceptions as evidence', 'Collecting data without analysing patterns'],
    checklist: ['We have used multiple sources of evidence.', 'We have considered both practice and outcomes.', 'Staff share a reasonably consistent view of current reality.', 'We can describe the problem without jumping to a solution.'],
    reflection: ['What does the evidence tell us?', 'What surprised or challenged us?', 'What do we still need to understand?']
  },
  {
    id: 'prioritise',
    number: 2,
    icon: '🎯',
    title: 'Prioritise & Focus',
    question: 'What is most important right now?',
    summary: 'Select one high-leverage, achievable priority that is strongly supported by evidence.',
    why: 'Schools can usually identify many worthwhile improvement areas. The leadership challenge is to select the focus most likely to make a meaningful difference now and to protect the team from fragmented effort.',
    clc: [
      'Considered the findings from the Reading Signposts mapping.',
      'Identified vocabulary as the shared priority area.',
      'Focused specifically on identifying vocabulary demands within texts.',
      'Selected an area that was important, actionable and connected to comprehension.'
    ],
    questions: [
      'Which need is most strongly supported by the evidence?',
      'Which focus is likely to have the greatest impact?',
      'What sits within our sphere of influence?',
      'Can we describe the priority precisely?',
      'What will we deliberately not focus on during this cycle?'
    ],
    tip: 'A strong priority is narrow enough to guide action, but significant enough to improve outcomes. One well-defined focus is more powerful than several competing initiatives.',
    pitfalls: ['Choosing too many priorities', 'Selecting a focus because it is fashionable', 'Naming a broad outcome instead of a precise problem', 'Ignoring feasibility and staff capacity'],
    checklist: ['Our priority is directly linked to evidence.', 'The focus is specific and clearly understood.', 'The priority is within our influence.', 'We have agreed what is outside the scope of this cycle.'],
    reflection: ['What is our highest-leverage priority?', 'Why does it matter now?', 'What evidence supports this choice?']
  },
  {
    id: 'plan',
    number: 3,
    icon: '🧭',
    title: 'Develop & Plan',
    question: 'What will we do in response?',
    summary: 'Turn the priority into a coherent plan that builds capability, clarifies responsibilities and defines success.',
    why: 'A strong plan connects the identified need to deliberate actions, professional learning, coaching, resources and monitoring. It describes not only what will happen, but why, who will lead it and how implementation will be supported.',
    clc: [
      'Used a staff confidence survey and professional learning audit.',
      'Identified knowledge, confidence and capability gaps.',
      'Planned school-level support through Heads of Department – Curriculum.',
      'Planned leadership-level support through EFI and DIBELS implementation support.'
    ],
    questions: [
      'What needs to change in knowledge, practice or conditions?',
      'What actions are most likely to address the identified need?',
      'Who will lead, support and participate?',
      'What resources, time and professional learning are required?',
      'What will successful implementation look like?'
    ],
    tip: 'Plan for transfer, not just delivery. Professional learning only matters when leaders create the conditions for staff to apply it consistently in practice.',
    pitfalls: ['Listing activities without a theory of action', 'Leaving roles or timelines unclear', 'Planning professional learning without follow-up', 'Defining success only as task completion'],
    checklist: ['Actions clearly respond to the priority.', 'Roles and responsibilities are explicit.', 'Capability-building and implementation support are included.', 'We have defined indicators of implementation and impact.'],
    reflection: ['What change are we seeking?', 'What will we do first?', 'What support will make implementation possible?']
  },
  {
    id: 'action',
    number: 4,
    icon: '🚀',
    title: 'Take Action',
    question: 'How will we enact the plan?',
    summary: 'Translate the plan into visible, supported and increasingly consistent practice.',
    why: 'This is where improvement becomes visible. Leaders protect the focus, provide support, remove barriers and ensure that shared learning reaches classrooms rather than ending with a meeting or professional development session.',
    clc: [
      'Delivered targeted professional development through the EFI SEOC team.',
      'Strengthened leaders’ understanding of vocabulary demands within texts.',
      'Provided school-level coaching and support through HOD-C roles.',
      'Supported principals to translate shared learning into their own school context.'
    ],
    questions: [
      'What should implementation look like in our school?',
      'How will staff practise and receive feedback?',
      'What leadership actions will keep the focus visible?',
      'What barriers could prevent implementation?',
      'How will we know the intended practice is reaching classrooms?'
    ],
    tip: 'Implementation is an ongoing leadership process. Use modelling, coaching, collaborative planning and feedback rather than relying on one-off communication.',
    pitfalls: ['Assuming attendance equals implementation', 'Introducing new work before existing actions are embedded', 'Failing to create time for practice', 'Monitoring compliance rather than quality'],
    checklist: ['Staff understand the intended practice.', 'Leaders are providing active support and feedback.', 'Time and resources are aligned to the focus.', 'Implementation evidence is being collected.'],
    reflection: ['What is now happening in practice?', 'Where is implementation strongest?', 'What support or adjustment is needed next?']
  },
  {
    id: 'review',
    number: 5,
    icon: '📈',
    title: 'Monitor & Review',
    question: 'What impact is this having?',
    summary: 'Examine implementation and outcomes, then decide whether to deepen, refine or redirect the work.',
    why: 'Improvement is not measured by activity alone. Monitoring helps leaders distinguish between a plan that was delivered, a practice that was implemented, and a change that improved outcomes.',
    clc: [
      'Applied vocabulary strategies within schools.',
      'Planned to monitor implementation, staff feedback and student evidence.',
      'Considered whether the current focus should continue, deepen or change.',
      'Used the findings to begin the next inquiry cycle.'
    ],
    questions: [
      'What evidence shows that practice is changing?',
      'What evidence shows that student outcomes are changing?',
      'What is working well and for whom?',
      'What needs to be strengthened or adjusted?',
      'Should we continue, deepen, refine or select a new focus?'
    ],
    tip: 'Review implementation and impact separately. Limited impact may reflect a weak strategy, but it may also mean the strategy has not yet been implemented consistently or for long enough.',
    pitfalls: ['Measuring activity instead of impact', 'Waiting until the end to collect evidence', 'Changing direction before implementation is established', 'Ignoring variation between classrooms or student groups'],
    checklist: ['We have evidence about implementation quality.', 'We have evidence about changes in outcomes.', 'We have identified what worked, for whom and under what conditions.', 'Our next decision is based on the review findings.'],
    reflection: ['What changed?', 'What contributed to that change?', 'What is our next evidence-informed decision?']
  }
]

const tools = [
  ['Reading Signposts', 'Map current practice and identify areas for development.', 'Scan'],
  ['Student outcome data', 'Examine achievement, growth and patterns across cohorts.', 'Scan'],
  ['Staff capability survey', 'Identify confidence, knowledge and professional learning needs.', 'Plan'],
  ['Professional learning audit', 'Review previous learning and identify gaps or duplication.', 'Plan'],
  ['Theory of action', 'Make the connection between the problem, actions and expected impact explicit.', 'Plan'],
  ['Implementation checklist', 'Track whether agreed practices are reaching classrooms as intended.', 'Action'],
  ['Learning walk or walkthrough tool', 'Gather focused evidence about implementation and consistency.', 'Review'],
  ['Impact reflection', 'Bring together practice evidence and student evidence to decide what comes next.', 'Review']
]

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

function App() {
  const [active, setActive] = useState('home')
  const [completed, setCompleted] = useLocalStorage('feti-completed', {})
  const [notes, setNotes] = useLocalStorage('feti-notes', {})
  const [checks, setChecks] = useLocalStorage('feti-checks', {})
  const [contrast, setContrast] = useLocalStorage('feti-contrast', false)
  const [textSize, setTextSize] = useLocalStorage('feti-text-size', 'normal')
  const [menuOpen, setMenuOpen] = useState(false)

  const progress = useMemo(() => phases.filter(p => completed[p.id]).length, [completed])

  useEffect(() => {
    document.documentElement.dataset.contrast = contrast ? 'high' : 'normal'
    document.documentElement.dataset.text = textSize
  }, [contrast, textSize])

  const navigate = (id) => {
    setActive(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateNote = (phaseId, prompt, value) => {
    setNotes(prev => ({ ...prev, [`${phaseId}-${prompt}`]: value }))
  }

  const toggleCheck = (phaseId, item) => {
    const key = `${phaseId}-${item}`
    setChecks(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const reset = () => {
    if (window.confirm('Clear all saved reflections, checklists and progress from this browser?')) {
      setCompleted({})
      setNotes({})
      setChecks({})
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => navigate('home')} aria-label="Return to homepage">
            <span className="brand-mark" aria-hidden="true">E→I</span>
            <span><strong>From Evidence to Impact</strong><small>Inquiry Cycle Toolkit</small></span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-navigation">Menu</button>
          <nav id="site-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
            <button className={active === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
            {phases.map(p => <button key={p.id} className={active === p.id ? 'active' : ''} onClick={() => navigate(p.id)}>{p.number}. {p.title}</button>)}
            <button className={active === 'toolkit' ? 'active' : ''} onClick={() => navigate('toolkit')}>Toolkit</button>
            <button className={active === 'planner' ? 'active' : ''} onClick={() => navigate('planner')}>Next Cycle</button>
          </nav>
        </div>
        <div className="progress-wrap" aria-label={`${progress} of 5 inquiry phases marked complete`}>
          <div className="progress-bar"><span style={{ width: `${progress * 20}%` }} /></div>
          <span>{progress}/5 phases complete</span>
        </div>
      </header>

      <main id="main">
        {active === 'home' && <Home navigate={navigate} completed={completed} />}
        {phases.map((phase, index) => active === phase.id && (
          <PhasePage key={phase.id} phase={phase} index={index} navigate={navigate} completed={completed} setCompleted={setCompleted} notes={notes} updateNote={updateNote} checks={checks} toggleCheck={toggleCheck} />
        ))}
        {active === 'toolkit' && <Toolkit />}
        {active === 'planner' && <Planner notes={notes} updateNote={updateNote} />}
      </main>

      <aside className="accessibility-panel" aria-label="Display settings">
        <button onClick={() => setTextSize(textSize === 'normal' ? 'large' : textSize === 'large' ? 'largest' : 'normal')}>Text: {textSize}</button>
        <button onClick={() => setContrast(!contrast)}>{contrast ? 'Standard contrast' : 'High contrast'}</button>
        <button onClick={() => window.print()}>Print / Save PDF</button>
        <button onClick={reset}>Clear saved work</button>
      </aside>

      <footer>
        <p><strong>From Evidence to Impact</strong> — a practical guide for leading evidence-informed school improvement.</p>
        <p>Your entries are stored only in this browser. They are not sent to a server.</p>
      </footer>
    </>
  )
}

function Home({ navigate, completed }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Leading improvement through inquiry</p>
          <h1>From Evidence to Impact</h1>
          <p className="hero-lead">A practical, repeatable leadership process for moving from current evidence to focused action and measurable improvement.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => navigate('scan')}>Begin the cycle</button>
            <button className="secondary" onClick={() => navigate('planner')}>Plan my next focus</button>
          </div>
        </div>
        <div className="cycle-wheel" aria-label="Five phases of the inquiry cycle">
          <div className="wheel-centre"><strong>Evidence</strong><span>to</span><strong>Impact</strong></div>
          {phases.map((p, i) => <button key={p.id} className={`wheel-item item-${i + 1} ${completed[p.id] ? 'done' : ''}`} onClick={() => navigate(p.id)} aria-label={`Open ${p.title}`}><span>{p.icon}</span><small>{p.title}</small></button>)}
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading"><p className="eyebrow">A resource for ongoing use</p><h2>Use the cycle with confidence</h2></div>
        <div className="two-column">
          <div className="card"><h3>During the exit meeting</h3><p>Use the prompts to reflect on the Reading CLC, identify where your school is currently positioned and begin planning the next inquiry focus.</p></div>
          <div className="card"><h3>Back in your school</h3><p>Return to any phase for guiding questions, readiness checks, leadership tips and reflection prompts as your next improvement cycle develops.</p></div>
        </div>
      </section>

      <section className="section phase-overview">
        <div className="section-heading"><p className="eyebrow">The inquiry cycle</p><h2>Five connected phases</h2><p>The process is disciplined but not rigidly linear. New evidence may require teams to revisit an earlier phase.</p></div>
        <div className="phase-grid">
          {phases.map(p => (
            <article className="phase-card" key={p.id}>
              <span className="phase-number">{p.number}</span><span className="phase-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3><p className="big-question">{p.question}</p><p>{p.summary}</p>
              <button onClick={() => navigate(p.id)}>{completed[p.id] ? 'Revisit phase' : 'Explore phase'} →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section callout-band">
        <div><p className="eyebrow">Keep this question in view</p><h2>How will we use this process to identify our next priority area?</h2></div>
        <button className="light-button" onClick={() => navigate('planner')}>Open the next-cycle planner</button>
      </section>
    </>
  )
}

function PhasePage({ phase, index, navigate, completed, setCompleted, notes, updateNote, checks, toggleCheck }) {
  const previous = phases[index - 1]
  const next = phases[index + 1]
  return (
    <>
      <section className="phase-hero">
        <div className="breadcrumb"><button onClick={() => navigate('home')}>Home</button><span>/</span><span>Phase {phase.number}</span></div>
        <div className="phase-title-row"><span className="hero-icon" aria-hidden="true">{phase.icon}</span><div><p className="eyebrow">Phase {phase.number} of 5</p><h1>{phase.title}</h1><p className="phase-question">{phase.question}</p></div></div>
        <p className="phase-summary">{phase.summary}</p>
      </section>

      <div className="phase-stepper" aria-label="Inquiry cycle progress">
        {phases.map(p => <button key={p.id} className={`${p.id === phase.id ? 'current' : ''} ${completed[p.id] ? 'done' : ''}`} onClick={() => navigate(p.id)}><span>{p.number}</span><small>{p.title}</small></button>)}
      </div>

      <section className="section content-grid">
        <article className="content-main">
          <section className="content-block"><p className="eyebrow">Purpose</p><h2>Why this phase matters</h2><p>{phase.why}</p></section>
          <section className="content-block example-block"><p className="eyebrow">Reading CLC example</p><h2>How we applied this phase</h2><ol className="timeline">{phase.clc.map((item, i) => <li key={item}><span>{i + 1}</span><p>{item}</p></li>)}</ol></section>
          <section className="content-block"><p className="eyebrow">Lead the thinking</p><h2>Questions for your school</h2><div className="accordion-list">{phase.questions.map((q, i) => <details key={q}><summary><span>{String(i + 1).padStart(2, '0')}</span>{q}</summary><p>Discuss this question with your team. Record the evidence, assumptions and decisions that emerge rather than moving immediately to an action.</p></details>)}</div></section>
          <section className="content-block"><p className="eyebrow">Personal reflection</p><h2>Capture your thinking</h2><p className="privacy-note">Your responses save automatically in this browser.</p>{phase.reflection.map(prompt => <label className="reflection-field" key={prompt}><span>{prompt}</span><textarea rows="4" value={notes[`${phase.id}-${prompt}`] || ''} onChange={e => updateNote(phase.id, prompt, e.target.value)} placeholder="Type your reflection here…" /></label>)}</section>
        </article>

        <aside className="content-side">
          <div className="tip-card"><span aria-hidden="true">💡</span><h2>Leadership tip</h2><p>{phase.tip}</p></div>
          <div className="pitfall-card"><h2>Common pitfalls</h2><ul>{phase.pitfalls.map(p => <li key={p}>{p}</li>)}</ul></div>
          <div className="check-card"><h2>Ready to move on?</h2><p>Use this as a discussion check, not a compliance checklist.</p>{phase.checklist.map(item => <label key={item}><input type="checkbox" checked={!!checks[`${phase.id}-${item}`]} onChange={() => toggleCheck(phase.id, item)} /><span>{item}</span></label>)}</div>
          <button className={completed[phase.id] ? 'complete-button done' : 'complete-button'} onClick={() => setCompleted(prev => ({ ...prev, [phase.id]: !prev[phase.id] }))}>{completed[phase.id] ? '✓ Phase marked complete' : 'Mark phase complete'}</button>
        </aside>
      </section>

      <section className="section page-nav">
        <div>{previous && <button onClick={() => navigate(previous.id)}>← {previous.title}</button>}</div>
        <button onClick={() => navigate(next ? next.id : 'planner')}>{next ? `${next.title} →` : 'Plan the next cycle →'}</button>
      </section>
    </>
  )
}

function Toolkit() {
  return (
    <>
      <section className="simple-hero"><p className="eyebrow">Grab-and-go resources</p><h1>Leadership Toolkit</h1><p>Use these resource types to support each part of the inquiry cycle. Replace the placeholder buttons with links to your local or departmental resources.</p></section>
      <section className="section">
        <div className="tool-grid">{tools.map(([name, purpose, phase]) => <article className="tool-card" key={name}><span className="tool-tag">{phase}</span><h2>{name}</h2><p>{purpose}</p><button disabled title="Add your resource URL in src/main.jsx">Resource link coming soon</button></article>)}</div>
      </section>
      <section className="section resource-guidance"><h2>Choosing resources well</h2><div className="three-column"><div><h3>Purpose before tool</h3><p>Choose a resource because it answers an inquiry question, not because it is already available.</p></div><div><h3>Accessible and practical</h3><p>Use formats staff can understand, complete and revisit without unnecessary complexity.</p></div><div><h3>Evidence, not paperwork</h3><p>Every tool should support a decision, strengthen implementation or help evaluate impact.</p></div></div></section>
    </>
  )
}

function Planner({ notes, updateNote }) {
  const prompts = [
    'What phase of the cycle are we currently in?',
    'What evidence will guide our next decision?',
    'What is our likely next focus area?',
    'What change do we want to see in practice or outcomes?',
    'What support structures will sustain this work?',
    'What is the first action we will take?',
    'When will we pause to review progress?'
  ]
  return (
    <>
      <section className="simple-hero"><p className="eyebrow">From reflection to action</p><h1>Plan Your Next Inquiry Cycle</h1><p>Use this page during the exit meeting, then return to it with your leadership team as your next focus becomes clearer.</p></section>
      <section className="section planner-layout">
        <div className="planner-intro"><h2>Your next cycle begins with evidence</h2><p>You do not need to have every answer today. The aim is to leave with a clear starting point, the evidence you need and the next leadership action.</p><div className="cycle-summary">{phases.map(p => <div key={p.id}><span>{p.number}</span><strong>{p.title}</strong><small>{p.question}</small></div>)}</div></div>
        <div className="planner-form">{prompts.map(prompt => <label className="reflection-field" key={prompt}><span>{prompt}</span><textarea rows="4" value={notes[`planner-${prompt}`] || ''} onChange={e => updateNote('planner', prompt, e.target.value)} placeholder="Record your current thinking…" /></label>)}</div>
      </section>
      <section className="section final-message"><p className="eyebrow">Lead with confidence</p><h2>The Inquiry Cycle is not another initiative.</h2><p>It is a repeatable way of thinking that helps leaders make focused, evidence-informed decisions. Each cycle strengthens understanding of students, staff, practice and the conditions required for improvement.</p><button className="primary" onClick={() => window.print()}>Print or save my plan</button></section>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)

