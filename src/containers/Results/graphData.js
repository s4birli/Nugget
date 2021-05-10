import { getRandomInt } from './dummyData';

const data21 = [
  0.856174683,
  0.691209819,
  -1.772464059,
  0.401303305,
  -0.62891963,
  0.545259939,
  -1.122738746,
  0.881476087,
  0.889925627,
  0.774414061,
  0.576912499,
  0.669316034,
  0.759826294,
  0.838553627,
  -0.273345256,
  0.612577299,
  0.67324456,
  0.593455244,
  0.665401783,
  0.847200867,
  0.447670929,
  0.444720817,
  -1.378084713,
  0.425941901,
  0.386804924,
  0.757911322,
  0.939388927,
  0.66686351,
  0.825713781,
  0.453553726,
  0.802187657,
  -1.682742399,
  0.540327991,
  -1.556056228,
  0.853941387,
  -2.186937567,
  -1.014796783,
  0.613877369,
  -0.889165825,
  0.689867349,
  -1.96116177,
  -1.354189695,
  0.653805778,
  0.77821587,
  -2.180913135,
  0.565624277,
  0.514782956,
  0.674720793,
  0.831929057,
  0.777725524,
];

const data22 = [
  0.430045475,
  -0.421903973,
  1.002278856,
  1.016021109,
  -0.249708738,
  -0.724738644,
  0.918593464,
  0.428118364,
  0.754933273,
  1.806370702,
  -2.512731484,
  0.191501416,
  0.330266792,
  -0.318226272,
  -2.169281777,
  -0.952974023,
  -0.340186961,
  -1.056318979,
  -0.812760058,
  -0.114532363,
  -0.3119743,
  0.049812027,
  0.571578439,
  -0.949178002,
  -0.467894252,
  0.71553867,
  1.203945972,
  -0.140369916,
  0.427876995,
  -0.964068342,
  -0.769371211,
  0.639139934,
  -0.356658804,
  0.952968593,
  1.230503745,
  0.411159518,
  -0.44789174,
  2.287324299,
  0.633408587,
  -1.513116821,
  1.366970813,
  -1.027965783,
  -1.006130834,
  -0.754765587,
  -0.17381332,
  -0.714065202,
  -0.577008683,
  -1.112756383,
  -0.080060731,
  0.944901353,
];

const data11 = [
  0.874596128,
  0.798147465,
  0.703248007,
  0.730559029,
  -2.178484168,
  0.503675044,
  -0.991902394,
  -0.46221869,
  0.550947801,
  -1.257252696,
  0.501378842,
  -0.688692682,
  0.817108538,
  0.880436193,
  0.769480467,
  0.724787411,
  0.519708876,
  0.707380724,
  -1.358976625,
  0.463361008,
  1.00793656,
  0.251125043,
  0.556624302,
  1.279222297,
  0.826303639,
  0.739538916,
  -1.192209714,
  0.467701258,
  -0.849403645,
  0.440989894,
  -1.987193495,
  -1.479569437,
  -0.60982373,
  0.370331447,
  0.804449991,
  -1.012543602,
  -1.387065256,
  -1.330145328,
  0.213520428,
  -0.780455434,
  -1.316403867,
  -2.238198875,
  -0.288501177,
  -0.371687793,
  0.742757252,
  0.814711873,
  -2.544533426,
  0.67262042,
  -1.149849384,
  0.749563769,
  -1.492851324,
  0.641237256,
  0.743269543,
  0.983835565,
  0.549650308,
  0.553421503,
  0.650807087,
  0.650422603,
  0.515292738,
  0.993704703,
  0.229068416,
  0.918802774,
  0.594093092,
  -0.395385506,
  0.784266963,
  -1.635291725,
  0.731623804,
  -1.058658175,
  0.279215769,
  0.65647046,
  0.861596862,
  0.396714004,
  -0.54643223,
  0.725296476,
  -1.140817497,
  0.76018443,
  0.73699273,
  0.360061365,
  0.666354655,
  0.592556512,
  0.612505211,
  -1.798398543,
  -1.106232593,
  -1.517451949,
  -1.398727611,
  0.719788132,
  -1.707919364,
  -1.307094753,
  0.801876102,
  0.613847055,
  0.635670031,
  0.363325281,
  -0.910097125,
  0.664989687,
  0.811901918,
  0.605915402,
  0.595138084,
  -2.123710644,
  0.829842208,
  0.661552676,
  0.598861154,
  0.330613386,
  -0.806678814,
  0.59604229,
  -1.106269375,
  0.709162887,
  0.713286583,
  0.60776728,
  -0.706787411,
  0.988874009,
  0.474917451,
  0.652414938,
  0.262144633,
  -2.231938038,
  0.794375963,
  0.440487377,
  0.739982846,
  -0.572422047,
  -2.104166175,
  -2.330593212,
  0.797148166,
  0.516044938,
  -2.211863078,
  0.392611192,
  0.489250964,
  0.528734885,
  0.506673449,
  -1.445632871,
  0.600857259,
  0.548627604,
  0.445102545,
  -1.443582655,
  -1.954622812,
  -0.94705726,
  0.629130718,
  0.717023641,
  -0.885231606,
  0.708293389,
  0.932015975,
  0.893739984,
  -1.442237327,
  -1.376218597,
  0.306081718,
  -1.240895624,
  0.519855988,
  -1.583191112,
  0.511324603,
  -2.3127785,
  0.521574433,
  0.527705694,
  0.880241483,
  -1.201003651,
  0.776987983,
  -1.645251325,
  -1.271214173,
  -0.887512059,
  0.71307562,
  -1.756618054,
  0.449799646,
  -1.212439595,
  0.77994213,
  0.674446702,
  0.31249732,
  0.786918378,
  -1.043319611,
  -1.722390181,
  0.588451693,
  -1.208206594,
  0.817156123,
  0.809693159,
  0.550366255,
  -1.868227986,
  -0.823862406,
  0.873848262,
  -1.334569021,
  -1.362484041,
  -1.025477281,
  0.771387446,
  0.505943331,
  -0.716037769,
  -2.172167386,
  0.362794049,
  -1.429660567,
  -1.0031392,
  0.882224454,
  -1.306683458,
  0.473578036,
  0.602948123,
  -1.004312235,
  0.724452675,
  1.082806266,
  0.611325902,
  -1.746617862,
  0.653136015,
  0.740556431,
  -2.367767982,
  0.763409596,
  0.542890215,
  0.800828439,
  0.908616758,
  -1.158138767,
  -1.752676825,
  -1.19543305,
  0.52255352,
  -0.685803781,
  1.014908401,
  0.874258155,
  0.553475966,
  -0.880995505,
  -1.216658539,
  1.004592789,
  0.559069487,
  -1.352356125,
  0.865770981,
  -0.164869479,
  0.596174239,
  0.557030361,
  -2.127261137,
  -2.237395043,
  0.960666756,
  0.660008449,
  0.67360844,
  0.645049786,
  0.873066997,
  -1.136743717,
  0.906943217,
  0.702025191,
  -1.465908007,
];

const data12 = [
  1.734444184,
  -0.496850659,
  0.045756172,
  -0.428042712,
  0.443628876,
  -0.670324488,
  -0.221989489,
  -1.512335922,
  -0.990659339,
  -1.049551432,
  0.263098747,
  -0.047085843,
  -1.161856435,
  1.761551743,
  -0.715470548,
  -0.741678561,
  -0.630605409,
  -1.124400538,
  -0.413892562,
  -0.872656505,
  1.75554716,
  -0.825879732,
  0.910925984,
  3.641665517,
  0.785168115,
  -0.525918916,
  -1.078634133,
  1.425668694,
  -0.210095977,
  0.911973195,
  0.027053621,
  -0.818829968,
  -0.327209174,
  -0.578520753,
  -1.304124973,
  -0.216155057,
  -0.261175543,
  -1.079150671,
  1.317176343,
  0.674020609,
  -0.375060755,
  0.51678735,
  -2.060547877,
  -2.144542701,
  0.592217818,
  0.8352295,
  -0.445137018,
  -2.48286426,
  -1.419561416,
  -0.816721438,
  -0.194932326,
  -2.556278526,
  0.815971957,
  0.852342056,
  -0.910491636,
  1.371060476,
  -1.011790145,
  0.638799245,
  -0.165079965,
  -0.628328127,
  -0.97323509,
  0.383305522,
  1.547075277,
  -2.004623775,
  1.827363152,
  -0.022222272,
  -1.152289686,
  -0.490160847,
  -0.725208606,
  0.097458479,
  -0.576406692,
  -0.361134318,
  -2.024805753,
  -0.572984276,
  -0.514013308,
  -1.016031951,
  0.43842853,
  -0.95203444,
  -0.169342293,
  1.298762146,
  0.681682085,
  1.352103458,
  -1.105929673,
  0.161893134,
  1.154417678,
  -0.381762725,
  0.816607521,
  -1.081668431,
  -1.611625588,
  -1.113383742,
  2.101894634,
  -0.81647722,
  -0.399775076,
  -0.017779754,
  1.686858125,
  -0.888546618,
  -0.461556112,
  1.323776114,
  -0.63486415,
  -1.190821897,
  -0.627570212,
  1.545886289,
  -0.44597227,
  0.211841781,
  -0.501633635,
  -0.899254863,
  -0.745377049,
  -1.053225751,
  0.660206945,
  1.2243452,
  -0.812651381,
  -1.187617168,
  -0.678781708,
  -0.196502622,
  0.00124807,
  0.011796959,
  1.599614552,
  0.206001238,
  0.39781377,
  -0.45744644,
  -0.977719398,
  1.29917047,
  1.321012082,
  1.578061301,
  -0.975858862,
  -0.736846054,
  2.182840776,
  1.153051263,
  -2.62367543,
  0.177498206,
  -0.291656709,
  -0.202903695,
  0.865777415,
  -0.500440491,
  -0.724088893,
  -0.733714266,
  -0.384995335,
  -0.078243667,
  1.734672145,
  -0.668186006,
  -1.115303097,
  1.162319396,
  -0.397935684,
  0.866161653,
  -0.774674081,
  0.913397762,
  -1.309180261,
  -0.431033469,
  0.268724405,
  9.95e-5,
  1.065786535,
  -1.417339385,
  2.129855838,
  0.932659721,
  1.130636377,
  -1.489993177,
  -0.299619947,
  -0.038204729,
  -0.715507497,
  0.82914727,
  0.915008193,
  -0.487606591,
  -0.684593459,
  -0.801300274,
  0.20500888,
  1.172288469,
  -0.7776005,
  0.887258411,
  0.486815315,
  0.718127746,
  -0.99073959,
  0.764727143,
  -0.129119957,
  -0.353144872,
  0.232763833,
  0.300298731,
  -0.436174226,
  -0.019190376,
  -0.909024664,
  -0.284311715,
  0.514672747,
  -0.935969943,
  0.723689552,
  -0.464142933,
  1.289437289,
  0.934691272,
  -0.445014356,
  0.110990562,
  -0.294037708,
  -0.771770638,
  3.750420598,
  -0.726246488,
  -0.867978505,
  -0.662470668,
  -0.122811765,
  -0.525583643,
  0.2254786,
  -0.566661856,
  -0.239469122,
  1.729200564,
  0.866480376,
  -0.764733281,
  -1.171232377,
  -0.806184405,
  -0.047066527,
  0.502724153,
  -0.493247343,
  -0.005990652,
  -0.331285381,
  0.221280249,
  1.054053775,
  -0.96992093,
  -1.037558702,
  2.061281246,
  -2.049728909,
  0.836734595,
  0.885783979,
  1.341458329,
  1.418192058,
  -0.667345826,
  -0.805201598,
  -0.509910085,
  -1.173575035,
  1.264434521,
  -0.251417659,
  -0.194159044,
  -0.650405818,
  0.881031954,
];

// const randomColor = [
//   'rgba(223, 83, 83, .5)',
//   'rgba(83, 83,248, .5)',
//   'rgba(248, 206, 8, .5)',
//   'rgba(248, 206,248, .5)',
//   'rgba(8, 206,248, .5)',
//   'rgba(8, 206,83, .5)',
// ];

// const shapes = ['circle', 'triangle', 'square'];
const shapes = ['circle', 'circle', 'circle'];

export const dummySeriesTitles = ['Digital business team', 'Innovation Lab'];
export const dummySeriesColors = ['#552c84', '#fc8e7f'];
const sizes = ['small', 'big'];
const sizeValue = {
  small: 8,
  big: 13,
};

const getShapeType = pos => {
  if (pos[0] > 0.25) {
    if (pos[1] > -0.75) {
      return 1;
    }
    return 2;
  } else if (pos[0] < -1.25) {
    return 0;
  }
  return 2;
};

const getPipelineType = pos => {
  if (pos[0] > 0.25) {
    if (pos[1] > -0.75) {
      return 1;
    }
    return 1;
  } else if (pos[0] < -1.25) {
    return 0;
  }
  return 0;
};

const getSize = pos => {
  if (pos[0] < -0.25) {
    return 1;
  }
  return 0;
};

const translatePos = pos => {
  if (pos[0] > 0.25) {
    if (pos[1] > -0.75) {
      return [pos[0], pos[1] + 1];
    }
  }
  return pos;
};

export const getGraphData = () => {
  let result = [];

  result = data11.map((value, index) => {
    const pos = [value, data12[index]];
    const shape = index % 8 === 0 ? getRandomInt(3) : getShapeType(pos);
    const pipelineType =
      index % 40 === 0 ? getRandomInt(2) : getPipelineType(pos);
    const size = index % 10 === 0 ? getRandomInt(2) : getSize(pos);

    return {
      pipelineType,
      shape,
      size: 1,
      pos: translatePos(pos),
    };
  });

  result = result.concat(
    data21.map((value, index) => {
      const pos = [value, data22[index]];
      const shape = index % 8 === 0 ? getRandomInt(3) : getShapeType(pos);
      const pipelineType =
        index % 40 === 0 ? getRandomInt(2) : getPipelineType(pos);
      const size = index % 10 === 0 ? getRandomInt(2) : getSize(pos);

      return {
        pipelineType,
        shape,
        size,
        pos: translatePos(pos),
      };
    }),
  );

  return result;
};

export const getGraphSeries = (data, filters) => {
  let categories = [];
  let series = [];

  data.map(value => {
    const { pipelineType, shape, size, pos } = value;
    !categories[pipelineType] && (categories[pipelineType] = []);
    !categories[pipelineType][shape] && (categories[pipelineType][shape] = []);
    !categories[pipelineType][shape][size] &&
      (categories[pipelineType][shape][size] = []);

    categories[pipelineType][shape][size].push(pos);
  });

  const { shape, size, color } = filters;

  categories.map((pipelineSeries, typeIndex) => {
    pipelineSeries.map((shapeSeries, shapeIndex) => {
      if (!shape[shapes[shapeIndex]]) {
        return;
      }
      shapeSeries.map((sizeSeries, sizeIndex) => {
        if (!size[sizes[sizeIndex]]) {
          return;
        }
        series.push({
          name: dummySeriesTitles[shapeIndex],
          color: dummySeriesColors[shapeIndex % 2],
          data: sizeSeries,
          marker: {
            symbol: shapes[shapeIndex],
            radius: sizeValue[sizes[sizeIndex]],
          },
        });
      });
    });
  });

  return series;
};

export const filterSeries = (data, filters) => {
  let categories = [];
  let series = [];

  data.map(value => {
    const { pipelineType, shape, size, pos } = value;
    !categories[pipelineType] && (categories[pipelineType] = []);
    !categories[pipelineType][shape] && (categories[pipelineType][shape] = []);
    !categories[pipelineType][shape][size] &&
      (categories[pipelineType][shape][size] = []);

    categories[pipelineType][shape][size].push(pos);
  });

  const { shape, size, color } = filters;

  categories.map((pipelineSeries, typeIndex) => {
    if (!color[typeIndex]) {
      return;
    }
    pipelineSeries.map((shapeSeries, shapeIndex) => {
      if (!shape[shapes[shapeIndex]]) {
        return;
      }
      shapeSeries.map((sizeSeries, sizeIndex) => {
        if (!size[sizes[sizeIndex]]) {
          return;
        }
        series.push({
          name: dummySeriesTitles[typeIndex],
          color: dummySeriesColors[typeIndex],
          data: sizeSeries,
          marker: {
            symbol: shapes[shapeIndex],
            radius: sizeValue[sizes[sizeIndex]],
          },
        });
      });
    });
  });

  return series;
};