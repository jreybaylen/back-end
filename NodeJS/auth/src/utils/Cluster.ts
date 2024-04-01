import nodeOS from 'node:os'
import nodeCluster from 'node:cluster'

export class Cluster {

    constructor(framework: () => void) {
        if (nodeCluster.isPrimary) {
            for (let i = 0; i < nodeOS.availableParallelism(); i++) {
                nodeCluster.fork()
            }
    
            nodeCluster.on('exit', function() {
                nodeCluster.fork()
            })
        }

        if (!nodeCluster.isPrimary) {
            framework()
        }
    }

}