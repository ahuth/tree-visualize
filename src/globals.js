import Dagre from 'dagre';
import Sigma from 'linkurious';

// The sigma.layout.dagre plugin expects Sigma and Dagre to be available as global variables.
global.dagre = Dagre;
global.sigma = Sigma;
